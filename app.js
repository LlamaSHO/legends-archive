const DDRAGON = "https://ddragon.leagueoflegends.com";

const state = {
  champions: [],
  filtered: [],
  role: "TODOS"
};

async function getVersion() {
  const response = await fetch(`${DDRAGON}/api/versions.json`);
  const versions = await response.json();
  return versions[0];
}

async function loadChampions() {
  const version = await getVersion();

  const response = await fetch(
    `${DDRAGON}/cdn/${version}/data/es_ES/champion.json`
  );

  const data = await response.json();

  state.champions = Object.values(data.data);
  state.filtered = [...state.champions];

  renderChampions();
}

function renderChampions() {
  const container = document.querySelector("#champions");

  if (!container) return;

  container.innerHTML = "";

  if (state.filtered.length === 0) {
    container.innerHTML = `
      <div class="empty">
        No se encontraron campeones.
      </div>
    `;
    return;
  }

  state.filtered.forEach(champion => {
    const card = document.createElement("a");

    card.className = "champion-card";
    card.href = `champion.html?id=${champion.id}`;

    card.innerHTML = `
      <img
        src="${DDRAGON}/cdn/img/champion/loading/${champion.id}_0.jpg"
        alt="${champion.name}"
      >

      <div class="champion-info">
        <div class="champion-tags">
          ${champion.tags.map(tag => `<span>${tag}</span>`).join("")}
        </div>

        <h3>${champion.name}</h3>

        <p>${champion.title}</p>
      </div>
    `;

    container.appendChild(card);
  });
}

function filterChampions() {
  const input = document.querySelector("#search");

  const search = input.value.toLowerCase().trim();

  state.filtered = state.champions.filter(champion => {
    const matchesSearch =
      champion.name.toLowerCase().includes(search);

    const matchesRole =
      state.role === "TODOS" ||
      champion.tags.includes(state.role);

    return matchesSearch && matchesRole;
  });

  renderChampions();
}

function setupSearch() {
  const input = document.querySelector("#search");

  if (!input) return;

  input.addEventListener("input", filterChampions);
}

function setupFilters() {
  const buttons = document.querySelectorAll("[data-role]");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      state.role = button.dataset.role;
      filterChampions();
    });
  });
}

async function init() {
  setupSearch();
  setupFilters();

  try {
    await loadChampions();
  } catch (error) {
    console.error(error);

    const container = document.querySelector("#champions");

    if (container) {
      container.innerHTML = `
        <div class="empty">
          Error cargando los campeones.
          <br>
          Recarga la página.
        </div>
      `;
    }
  }
}

document.addEventListener("DOMContentLoaded", init);
