/* =========================================================
   LEGENDS // ARCHIVE
   MAIN APPLICATION
   ========================================================= */

const DDRAGON_BASE =
  "https://ddragon.leagueoflegends.com";


let currentVersion = null;
let champions = {};
let items = {};


/* =========================================================
   START
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  if (document.getElementById("champion-grid")) {
    initHome();
  }

  if (document.getElementById("champion-detail")) {
    initChampionPage();
  }

});


/* =========================================================
   GET CURRENT RIOT VERSION
   ========================================================= */

async function getLatestVersion() {

  const response =
    await fetch(
      `${DDRAGON_BASE}/api/versions.json`
    );

  if (!response.ok) {
    throw new Error("No se pudo obtener la versión.");
  }

  const versions =
    await response.json();

  return versions[0];
}


/* =========================================================
   GET CHAMPIONS
   ========================================================= */

async function getChampions(version) {

  const response =
    await fetch(
      `${DDRAGON_BASE}/cdn/${version}/data/es_ES/champion.json`
    );

  if (!response.ok) {
    throw new Error("No se pudieron cargar los campeones.");
  }

  const data =
    await response.json();

  return data.data;
}


/* =========================================================
   GET ITEMS
   ========================================================= */

async function getItems(version) {

  const response =
    await fetch(
      `${DDRAGON_BASE}/cdn/${version}/data/es_ES/item.json`
    );

  if (!response.ok) {
    throw new Error("No se pudieron cargar los objetos.");
  }

  const data =
    await response.json();

  return data.data;
}


/* =========================================================
   HOME
   ========================================================= */

async function initHome() {

  const grid =
    document.getElementById("champion-grid");

  try {

    currentVersion =
      await getLatestVersion();

    champions =
      await getChampions(currentVersion);

    renderChampions(
      Object.values(champions)
    );

    setupSearch();

    setupFilters();

  } catch (error) {

    console.error(error);

    grid.innerHTML = `
      <div class="empty">
        No se pudieron cargar los campeones.
        <br>
        Recarga la página e inténtalo de nuevo.
      </div>
    `;

  }

}


/* =========================================================
   RENDER CHAMPIONS
   ========================================================= */

function renderChampions(list) {

  const grid =
    document.getElementById("champion-grid");

  if (!list.length) {

    grid.innerHTML = `
      <div class="empty">
        No se encontraron campeones.
      </div>
    `;

    return;
  }


  grid.innerHTML =
    list
      .map(champion => {

        const roles =
          champion.tags || [];

        const roleText =
          roles.join(" · ");

        const image =
          `${DDRAGON_BASE}/cdn/${currentVersion}/img/champion/${champion.image.full}`;


        return `

          <a
            class="champion-card"
            href="champion.html?champion=${encodeURIComponent(champion.id)}"
            data-name="${champion.name.toLowerCase()}"
            data-roles="${roles.map(r => r.toLowerCase()).join(" ")}"
          >

            <div class="champion-card-image">

              <img
                src="${image}"
                alt="${champion.name}"
                loading="lazy"
              >

            </div>


            <div class="champion-card-body">

              <div class="champion-role">
                ${roleText}
              </div>

              <h3 class="champion-name">
                ${champion.name}
              </h3>

              <div class="champion-title">
                ${champion.title}
              </div>

            </div>

          </a>

        `;

      })
      .join("");

}


/* =========================================================
   SEARCH
   ========================================================= */

function setupSearch() {

  const input =
    document.getElementById("champion-search");

  input.addEventListener(
    "input",
    filterChampions
  );

}


function filterChampions() {

  const search =
    document
      .getElementById("champion-search")
      .value
      .toLowerCase()
      .trim();


  const activeButton =
    document.querySelector(
      ".filter.active"
    );

  const role =
    activeButton
      ? activeButton.dataset.role
      : "all";


  const cards =
    document.querySelectorAll(
      ".champion-card"
    );


  cards.forEach(card => {

    const name =
      card.dataset.name || "";

    const roles =
      card.dataset.roles || "";


    const matchesName =
      !search ||
      name.includes(search);


    const matchesRole =
      role === "all" ||
      roles.includes(role);


    card.style.display =
      matchesName && matchesRole
        ? ""
        : "none";

  });

}


/* =========================================================
   FILTERS
   ========================================================= */

function setupFilters() {

  const buttons =
    document.querySelectorAll(
      ".filter"
    );


  buttons.forEach(button => {

    button.addEventListener(
      "click",
      () => {

        buttons.forEach(btn =>
          btn.classList.remove("active")
        );

        button.classList.add("active");

        filterChampions();

      }
    );

  });

}


/* =========================================================
   CHAMPION PAGE
   ========================================================= */

async function initChampionPage() {

  const container =
    document.getElementById(
      "champion-detail"
    );


  const params =
    new URLSearchParams(
      window.location.search
    );


  const championId =
    params.get("champion");


  if (!championId) {

    container.innerHTML = `
      <div class="empty">
        Campeón no encontrado.
        <br><br>
        <a href="index.html">
          ← Volver a campeones
        </a>
      </div>
    `;

    return;
  }


  try {

    currentVersion =
      await getLatestVersion();

    champions =
      await getChampions(currentVersion);

    items =
      await getItems(currentVersion);


    const champion =
      champions[championId];


    if (!champion) {

      throw new Error(
        "Campeón inexistente."
      );

    }


    renderChampionPage(
      champion
    );


  } catch (error) {

    console.error(error);

    container.innerHTML = `
      <div class="empty">
        No se pudo cargar este campeón.
        <br><br>
        <a href="index.html">
          ← Volver a campeones
        </a>
      </div>
    `;

  }

}


/* =========================================================
   RENDER CHAMPION
   ========================================================= */

function renderChampionPage(champion) {

  const container =
    document.getElementById(
      "champion-detail"
    );


  const image =
    `${DDRAGON_BASE}/cdn/${currentVersion}/img/champion/${champion.image.full}`;


  const stats =
    champion.stats;


  const build =
    getBuildForChampion(
      champion
    );


  document.title =
    `${champion.name} // Legends Archive`;


  container.innerHTML = `

    <div class="champion-hero">

      <img
        class="champion-hero-image"
        src="${image}"
        alt="${champion.name}"
      >


      <div class="champion-hero-content">

        <div class="champion-hero-role">
          ${(champion.tags || []).join(" · ")}
        </div>

        <h1 class="champion-hero-name">
          ${champion.name}
        </h1>

        <div class="champion-hero-title">
          ${champion.title}
        </div>

      </div>

    </div>


    <section class="detail-section">

      <div class="eyebrow">
        PERFIL
      </div>

      <h2>
        ${champion.name}
      </h2>

      <p>
        ${champion.description}
      </p>


      <div class="stats-grid">

        ${stat(
          "VIDA",
          Math.round(stats.hp)
        )}

        ${stat(
          "ATAQUE",
          Math.round(stats.attackdamage)
        )}

        ${stat(
          "ARMADURA",
          Math.round(stats.armor)
        )}

        ${stat(
          "RESISTENCIA MÁGICA",
          Math.round(stats.spellblock)
        )}

      </div>

    </section>


    <section class="detail-section">

      <div class="eyebrow">
        BUILD
      </div>

      <h2>
        Build recomendada
      </h2>

      <p>
        Configuración recomendada para
        ${champion.name}.
      </p>


      <div class="build-grid">

        ${build
          .map(item => buildItem(item))
          .join("")}

      </div>

    </section>

  `;

}


/* =========================================================
   STAT
   ========================================================= */

function stat(label, value) {

  return `

    <div class="stat">

      <div class="stat-label">
        ${label}
      </div>

      <div class="stat-value">
        ${value}
      </div>

    </div>

  `;

}


/* =========================================================
   BUILD SYSTEM
   ========================================================= */

/*
   Estas builds son diferentes según el tipo de campeón.
   Después podemos sustituirlas por builds competitivas
   reales sin tocar el diseño.
*/

const BUILD_POOLS = {

  Fighter: [
    6692,
    3071,
    6333,
    3053,
    3111,
    3143
  ],

  Mage: [
    6655,
    4645,
    3089,
    3135,
    3157,
    3020
  ],

  Assassin: [
    6692,
    3142,
    3814,
    6694,
    3111,
    3071
  ],

  Marksman: [
    6672,
    3031,
    3094,
    3036,
    3508,
    3006
  ],

  Tank: [
    3068,
    3075,
    3110,
    3143,
    2504,
    3047
  ],

  Support: [
    3109,
    3190,
    6617,
    3110,
    3158,
    3222
  ]

};


/* =========================================================
   GET BUILD
   ========================================================= */

function getBuildForChampion(champion) {

  const tags =
    champion.tags || [];


  let primary =
    tags[0] || "Fighter";


  if (
    tags.includes("Assassin") &&
    tags.includes("Mage")
  ) {

    primary = "Mage";

  }


  if (
    tags.includes("Marksman")
  ) {

    primary = "Marksman";

  }


  if (
    tags.includes("Support")
  ) {

    primary = "Support";

  }


  if (
    tags.includes("Tank") &&
    !tags.includes("Marksman")
  ) {

    primary = "Tank";

  }


  const pool =
    BUILD_POOLS[primary] ||
    BUILD_POOLS.Fighter;


  /*
    Rotamos la build según el ID del campeón.
    De esta forma no todos aparecen exactamente
    con los mismos seis objetos.
  */

  const seed =
    champion.key
      ? parseInt(champion.key, 10)
      : champion.id.length;


  const rotation =
    seed % pool.length;


  const rotated =
    [
      ...pool.slice(rotation),
      ...pool.slice(0, rotation)
    ];


  return rotated
    .slice(0, 6)
    .map(id => items[String(id)])
    .filter(Boolean);

}


/* =========================================================
   BUILD ITEM
   ========================================================= */

function buildItem(item) {

  const image =
    `${DDRAGON_BASE}/cdn/${currentVersion}/img/item/${item.image.full}`;


  return `

    <div class="build-item">

      <img
        src="${image}"
        alt="${item.name}"
        loading="lazy"
      >

      <strong>
        ${item.name}
      </strong>

      <span>
        Objeto recomendado
      </span>

    </div>

  `;

}
