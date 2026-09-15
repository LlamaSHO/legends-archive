// ============================================================
// LEGENDS ARCHIVE - CHAMPION PAGE
// ============================================================

const detail = document.getElementById("champion-detail");


// ------------------------------------------------------------
// DATOS DE BUILDS
// ------------------------------------------------------------

const builds = {

  Aatrox: {
    role: "TOP",
    items: [
      ["Espada de Doran", "https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/1055.png"],
      ["Cuchilla Negra", "https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/3071.png"],
      ["Cortasendas", "https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/6692.png"],
      ["Calibrador de Sterak", "https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/3053.png"],
      ["Baile de la Muerte", "https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/6333.png"],
      ["Placas de Acero", "https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/3047.png"]
    ]
  },

  Ahri: {
    role: "MID",
    items: [
      ["Anillo de Doran", "https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/1056.png"],
      ["Compañero de Luden", "https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/6655.png"],
      ["Llamasombría", "https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/4645.png"],
      ["Gorro Mortal de Rabadon", "https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/3089.png"],
      ["Bastón del Vacío", "https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/3135.png"],
      ["Botas de Hechicero", "https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/3020.png"]
    ]
  },

  Akali: {
    role: "MID",
    items: [
      ["Anillo de Doran", "https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/1056.png"],
      ["Creación de Malignidad", "https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/3118.png"],
      ["Lich Bane", "https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/3100.png"],
      ["Llamasombría", "https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/4645.png"],
      ["Gorro Mortal de Rabadon", "https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/3089.png"],
      ["Botas de Hechicero", "https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/3020.png"]
    ]
  },

  Akshan: {
    role: "MID",
    items: [
      ["Espada de Doran", "https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/1055.png"],
      ["Cañón de Fuego Rápido", "https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/3094.png"],
      ["Filo de la Noche", "https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/3814.png"],
      ["Filo Infinito", "https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/3031.png"],
      ["Recordatorio Mortal", "https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/3036.png"],
      ["Grebas del Berserker", "https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/3006.png"]
    ]
  },

  Alistar: {
    role: "SUPPORT",
    items: [
      ["Escudo de Doran", "https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/1054.png"],
      ["Medallón de los Solari de Hierro", "https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/3190.png"],
      ["Convergencia de Zeke", "https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/3050.png"],
      ["Promesa del Caballero", "https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/3109.png"],
      ["Protector de los Solari", "https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/3190.png"],
      ["Botas de Mercurio", "https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/3111.png"]
    ]
  }

};


// ------------------------------------------------------------
// OBTENER CAMPEÓN DE LA URL
// ------------------------------------------------------------

function getChampionId() {

  const params = new URLSearchParams(window.location.search);

  return (
    params.get("id") ||
    params.get("champion") ||
    params.get("name")
  );

}


// ------------------------------------------------------------
// CARGAR CAMPEÓN
// ------------------------------------------------------------

async function loadChampion() {

  const championId = getChampionId();

  if (!championId) {

    showError(
      "No se ha indicado ningún campeón.",
      "La URL debe tener ?id=aatrox"
    );

    return;
  }


  try {

    // Obtenemos la versión actual de Data Dragon
    const versionsResponse = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );

    if (!versionsResponse.ok) {
      throw new Error("No se pudo obtener la versión de Data Dragon.");
    }

    const versions = await versionsResponse.json();

    const version = versions[0];


    // Datos de todos los campeones
    const championResponse = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/es_ES/champion/${championId}.json`
    );


    if (!championResponse.ok) {

      throw new Error(
        `No se encontró el campeón "${championId}".`
      );

    }


    const championData = await championResponse.json();

    const champion = championData.data[championId];


    if (!champion) {

      throw new Error(
        `No existen datos para "${championId}".`
      );

    }


    renderChampion(champion, version);

  } catch (error) {

    console.error(error);

    showError(
      "No se pudo cargar el campeón.",
      error.message
    );

  }

}


// ------------------------------------------------------------
// MOSTRAR CAMPEÓN
// ------------------------------------------------------------

function renderChampion(champion, version) {

  const build = builds[champion.name] || createDefaultBuild(champion);


  const splash = champion.splash
    ? champion.splash
    : `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`;


  const tags = champion.tags || [];


  detail.innerHTML = `

    <section class="champion-hero">

      <img
        class="champion-hero-image"
        src="${splash}"
        alt="${champion.name}"
      >

      <div class="champion-hero-overlay"></div>

      <div class="champion-hero-content">

        <div class="eyebrow">
          ${tags.join(" · ")}
        </div>

        <h1>${champion.name}</h1>

        <p class="champion-title">
          ${champion.title}
        </p>

      </div>

    </section>


    <section class="champion-content">

      <div class="champion-intro">

        <div>

          <div class="section-label">
            PERFIL
          </div>

          <h2>${champion.name}</h2>

          <p class="champion-description">
            ${champion.lore || champion.blurb || ""}
          </p>

        </div>

        <div class="champion-stats">

          <div class="stat">
            <span>ATAQUE</span>
            <strong>${champion.info.attack}</strong>
          </div>

          <div class="stat">
            <span>DEFENSA</span>
            <strong>${champion.info.defense}</strong>
          </div>

          <div class="stat">
            <span>MAGIA</span>
            <strong>${champion.info.magic}</strong>
          </div>

          <div class="stat">
            <span>DIFICULTAD</span>
            <strong>${champion.info.difficulty}</strong>
          </div>

        </div>

      </div>


      <section class="meta-section">

        <div class="section-label">
          META
        </div>

        <h2>Resumen</h2>

        <div class="meta-grid">

          <div class="meta-card">
            <span>PARCHE</span>
            <strong>${version}</strong>
          </div>

          <div class="meta-card">
            <span>POSICIÓN</span>
            <strong>${build.role}</strong>
          </div>

          <div class="meta-card">
            <span>WIN RATE</span>
            <strong>—</strong>
          </div>

          <div class="meta-card">
            <span>PICK RATE</span>
            <strong>—</strong>
          </div>

        </div>

      </section>


      <section class="build-section">

        <div class="section-label">
          BUILD
        </div>

        <h2>Build recomendada</h2>

        <p class="build-description">
          Configuración recomendada para ${champion.name}.
        </p>

        <div class="build-role">
          POSICIÓN ${build.role}
        </div>


        <div class="items-grid">

          ${build.items.map((item, index) => `

            <div class="item-card">

              <div class="item-number">
                ${index + 1}
              </div>

              <img
                src="${item[1]}"
                alt="${item[0]}"
                class="item-image"
              >

              <div class="item-name">
                ${item[0]}
              </div>

            </div>

          `).join("")}

        </div>

      </section>

    </section>

  `;

}


// ------------------------------------------------------------
// BUILD PARA CAMPEONES QUE TODAVÍA NO HEMOS CONFIGURADO
// ------------------------------------------------------------

function createDefaultBuild(champion) {

  const role = champion.tags?.includes("Support")
    ? "SUPPORT"
    : champion.tags?.includes("Marksman")
      ? "ADC"
      : champion.tags?.includes("Mage")
        ? "MID"
        : "TOP";


  return {

    role: role,

    items: [

      [
        "Objeto inicial",
        "https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/1055.png"
      ],

      [
        "Objeto recomendado",
        "https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/3071.png"
      ],

      [
        "Objeto recomendado",
        "https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/3053.png"
      ],

      [
        "Objeto recomendado",
        "https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/6333.png"
      ],

      [
        "Objeto recomendado",
        "https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/3089.png"
      ],

      [
        "Botas",
        "https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/3047.png"
      ]

    ]

  };

}


// ------------------------------------------------------------
// ERROR
// ------------------------------------------------------------

function showError(title, message) {

  detail.innerHTML = `

    <div class="error-card">

      <div class="section-label">
        ERROR
      </div>

      <h1>${title}</h1>

      <p>${message}</p>

      <a href="index.html" class="back-button">
        ← Volver a campeones
      </a>

    </div>

  `;

}


// ------------------------------------------------------------
// INICIAR
// ------------------------------------------------------------

loadChampion();
