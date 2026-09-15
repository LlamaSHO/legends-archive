  ========================================================= */

loadChampion();
/* =========================================================
   INDEX // LISTADO DE CAMPEONES
   ========================================================= */

const championsGrid =
  document.getElementById("champions-grid");

const championSearch =
  document.getElementById("champion-search");

const championCount =
  document.getElementById("champion-count");

const roleButtons =
  document.querySelectorAll(".role-filter");


let allChampions = [];

let selectedRole = "ALL";


async function loadChampionList() {

  if (!championsGrid) {
    return;
  }

  try {

    const response = await fetch(
      `${DATA_DRAGON}/data/es_ES/champion.json`
    );

    if (!response.ok) {
      throw new Error("No se pudo cargar la lista");
    }

    const json =
      await response.json();

    allChampions =
      Object.values(json.data);

    allChampions.sort((a, b) =>
      a.name.localeCompare(
        b.name,
        "es"
      )
    );

    renderChampionList(
      allChampions
    );

  } catch (error) {

    console.error(error);

    championsGrid.innerHTML = `
      <div class="error-screen">

        <h2>
          No se pudieron cargar los campeones
        </h2>

        <p>
          Comprueba tu conexión y vuelve a intentarlo.
        </p>

      </div>
    `;

  }

}


/* =========================================================
   RENDER LISTA
   ========================================================= */

function renderChampionList(champions) {

  if (!championsGrid) {
    return;
  }


  const filtered =
    champions.filter(champion => {

      const search =
        championSearch
          ? championSearch.value
              .toLowerCase()
              .trim()
          : "";


      const matchesSearch =
        champion.name
          .toLowerCase()
          .includes(search);


      const role =
        championRoles[champion.id] || "MID";


      const matchesRole =
        selectedRole === "ALL" ||
        role === selectedRole;


      return (
        matchesSearch &&
        matchesRole
      );

    });


  if (championCount) {

    championCount.textContent =
      `${filtered.length} CAMPEONES`;

  }


  if (!filtered.length) {

    championsGrid.innerHTML = `

      <div class="no-results">

        <h3>
          No encontramos ese campeón
        </h3>

        <p>
          Prueba con otro nombre o posición.
        </p>

      </div>

    `;

    return;

  }


  championsGrid.innerHTML =
    filtered.map(champion => {

      const role =
        championRoles[champion.id] || "MID";


      const image =
        `${DATA_DRAGON}/img/champion/${champion.id}.png`;


      return `

        <a
          class="champion-card"
          href="champion.html?champion=${champion.id}"
        >

          <div class="champion-card-image">

            <img
              src="${image}"
              alt="${champion.name}"
              loading="lazy"
            >

            <div class="champion-card-overlay"></div>

          </div>


          <div class="champion-card-info">

            <span class="champion-card-role">
              ${role}
            </span>

            <h3>
              ${champion.name}
            </h3>

            <p>
              ${champion.title}
            </p>

          </div>

        </a>

      `;

    }).join("");

}


/* =========================================================
   BUSCADOR
   ========================================================= */

if (championSearch) {

  championSearch.addEventListener(
    "input",
    () => {

      renderChampionList(
        allChampions
      );

    }
  );

}


/* =========================================================
   FILTROS
   ========================================================= */

roleButtons.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      roleButtons.forEach(
        btn =>
          btn.classList.remove("active")
      );


      button.classList.add("active");


      selectedRole =
        button.dataset.role;


      renderChampionList(
        allChampions
      );

    }
  );

});


/* =========================================================
   INICIAR LISTADO
   ========================================================= */

loadChampionList();
