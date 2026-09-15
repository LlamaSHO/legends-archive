const DATA_DRAGON =
  "https://ddragon.leagueoflegends.com/cdn/16.18.1";


/* =========================================================
   BASE DE DATOS DE POSICIONES
   ========================================================= */

const championRoles = {

  Aatrox: "TOP",
  Ahri: "MID",
  Akali: "MID",
  Akshan: "MID",
  Alistar: "SUPPORT",
  Ambessa: "TOP",
  Amumu: "JUNGLE",
  Anivia: "MID",
  Annie: "MID",
  Aphelios: "ADC",
  Ashe: "ADC",
  AurelionSol: "MID",
  Aurora: "MID",
  Azir: "MID",

  Bard: "SUPPORT",
  Belveth: "JUNGLE",
  Blitzcrank: "SUPPORT",
  Brand: "SUPPORT",
  Braum: "SUPPORT",
  Briar: "JUNGLE",

  Caitlyn: "ADC",
  Camille: "TOP",
  Cassiopeia: "MID",
  Chogath: "TOP",
  Corki: "MID",

  Darius: "TOP",
  Diana: "JUNGLE",
  Draven: "ADC",
  DrMundo: "TOP",

  Ekko: "JUNGLE",
  Elise: "JUNGLE",
  Evelynn: "JUNGLE",
  Ezreal: "ADC",

  Fiora: "TOP",
  Fizz: "MID",

  Galio: "MID",
  Gangplank: "TOP",
  Garen: "TOP",
  Gnar: "TOP",
  Gragas: "TOP",
  Graves: "JUNGLE",
  Gwen: "TOP",

  Hecarim: "JUNGLE",
  Heimerdinger: "TOP",
  Hwei: "MID",

  Illaoi: "TOP",
  Irelia: "TOP",
  Ivern: "JUNGLE",

  Janna: "SUPPORT",
  JarvanIV: "JUNGLE",
  Jax: "TOP",
  Jayce: "TOP",
  Jhin: "ADC",
  Jinx: "ADC",

  KSante: "TOP",
  Kalista: "ADC",
  Karma: "SUPPORT",
  Karthus: "JUNGLE",
  Kassadin: "MID",
  Katarina: "MID",
  Kayle: "TOP",
  Kayn: "JUNGLE",
  Kennen: "TOP",
  Khazix: "JUNGLE",
  Kindred: "JUNGLE",
  Kled: "TOP",
  KogMaw: "ADC",

  LeBlanc: "MID",
  LeeSin: "JUNGLE",
  Leona: "SUPPORT",
  Lillia: "JUNGLE",
  Lissandra: "MID",
  Lucian: "ADC",
  Lulu: "SUPPORT",
  Lux: "SUPPORT",

  Malphite: "TOP",
  Malzahar: "MID",
  Maokai: "SUPPORT",
  MasterYi: "JUNGLE",
  Mel: "MID",
  Milio: "SUPPORT",
  MissFortune: "ADC",
  Mordekaiser: "TOP",
  Morgana: "SUPPORT",

  Naafiri: "MID",
  Nami: "SUPPORT",
  Nasus: "TOP",
  Nautilus: "SUPPORT",
  Neeko: "MID",
  Nidalee: "JUNGLE",
  Nilah: "ADC",
  Nocturne: "JUNGLE",
  Nunu: "JUNGLE",

  Olaf: "TOP",
  Orianna: "MID",
  Ornn: "TOP",

  Pantheon: "TOP",
  Poppy: "TOP",
  Pyke: "SUPPORT",

  Qiyana: "MID",
  Quinn: "TOP",

  Rakan: "SUPPORT",
  Rammus: "JUNGLE",
  RekSai: "JUNGLE",
  Rell: "SUPPORT",
  Renata: "SUPPORT",
  Renekton: "TOP",
  Rengar: "JUNGLE",
  Riven: "TOP",
  Rumble: "TOP",
  Ryze: "MID",

  Samira: "ADC",
  Sejuani: "JUNGLE",
  Senna: "SUPPORT",
  Seraphine: "SUPPORT",
  Sett: "TOP",
  Shaco: "JUNGLE",
  Shen: "TOP",
  Shyvana: "JUNGLE",
  Singed: "TOP",
  Sion: "TOP",
  Sivir: "ADC",
  Skarner: "JUNGLE",
  Smolder: "ADC",
  Sona: "SUPPORT",
  Soraka: "SUPPORT",
  Swain: "SUPPORT",
  Sylas: "MID",
  Syndra: "MID",

  TahmKench: "SUPPORT",
  Taliyah: "JUNGLE",
  Talon: "MID",
  Taric: "SUPPORT",
  Teemo: "TOP",
  Thresh: "SUPPORT",
  Tristana: "ADC",
  Trundle: "TOP",
  Tryndamere: "TOP",
  TwistedFate: "MID",
  Twitch: "ADC",

  Udyr: "JUNGLE",
  Urgot: "TOP",

  Varus: "ADC",
  Vayne: "ADC",
  Veigar: "MID",
  Velkoz: "SUPPORT",
  Vex: "MID",
  Vi: "JUNGLE",
  Viego: "JUNGLE",
  Viktor: "MID",
  Vladimir: "TOP",
  Volibear: "TOP",

  Warwick: "JUNGLE",
  Wukong: "JUNGLE",

  Xayah: "ADC",
  Xerath: "SUPPORT",
  XinZhao: "JUNGLE",

  Yasuo: "MID",
  Yone: "TOP",
  Yorick: "TOP",

  Yuumi: "SUPPORT",

  Zac: "JUNGLE",
  Zed: "MID",
  Zeri: "ADC",
  Ziggs: "MID",
  Zilean: "SUPPORT",
  Zoe: "MID",
  Zyra: "SUPPORT"

};


/* =========================================================
   BUILDS
   ========================================================= */

const builds = {

  fighter: [
    ["1055", "Espada de Doran"],
    ["6692", "Eclipse"],
    ["6610", "Cielo Desgarrado"],
    ["3053", "Sterak"],
    ["3071", "Cuchilla Negra"],
    ["3047", "Placas de Acero"]
  ],

  tank: [
    ["1054", "Escudo de Doran"],
    ["3068", "Corazón de Acero"],
    ["6662", "Guantelete de Hielo"],
    ["2504", "Kaenic Rookern"],
    ["3742", "Cimitarra Pétrea"],
    ["3047", "Placas de Acero"]
  ],

  assassin: [
    ["1055", "Espada de Doran"],
    ["6692", "Eclipse"],
    ["3142", "Youmuu"],
    ["6693", "Arcoescudo"],
    ["3071", "Cuchilla Negra"],
    ["3158", "Botas de hechicero"]
  ],

  mage: [
    ["1056", "Anillo de Doran"],
    ["6655", "Luden"],
    ["4645", "Tormento de Liandry"],
    ["3089", "Sombrero de Rabadon"],
    ["3135", "Bastón del Vacío"],
    ["3020", "Botas de hechicero"]
  ],

  marksman: [
    ["1055", "Espada de Doran"],
    ["6672", "Kraken"],
    ["3031", "Filo del Infinito"],
    ["6673", "Arcoescudo"],
    ["3094", "Huracán de Runaan"],
    ["3006", "Grebas de Berserker"]
  ],

  support: [
    ["3850", "Atlas mundial"],
    ["6617", "Regalo del Espectro"],
    ["3107", "Redención"],
    ["3190", "Medallón de los Solari"],
    ["3504", "Ardent"],
    ["3117", "Botas de movilidad"]
  ]

};


/* =========================================================
   OBTENER BUILD
   ========================================================= */

function getBuild(champion) {

  const role =
    championRoles[champion.id];

  const tags =
    champion.tags || [];


  if (role === "ADC") {
    return builds.marksman;
  }

  if (role === "SUPPORT") {
    return builds.support;
  }

  if (tags.includes("Tank")) {
    return builds.tank;
  }

  if (tags.includes("Assassin")) {
    return builds.assassin;
  }

  if (tags.includes("Mage")) {
    return builds.mage;
  }

  if (tags.includes("Marksman")) {
    return builds.marksman;
  }

  return builds.fighter;

}


/* =========================================================
   PÁGINA DE CAMPEÓN
   ========================================================= */

async function loadChampion() {

  const container =
    document.getElementById("champion-content");


  if (!container) {
    return;
  }


  const params =
    new URLSearchParams(
      window.location.search
    );


  const championId =
    params.get("champion");


  if (!championId) {

    showChampionError(
      "No se ha seleccionado ningún campeón."
    );

    return;
  }


  try {

    const response = await fetch(
      `${DATA_DRAGON}/data/es_ES/champion/${championId}.json`
    );


    if (!response.ok) {
      throw new Error("Campeón no encontrado");
    }


    const data =
      await response.json();


    const champion =
      data.data[championId];


    if (!champion) {
      throw new Error("Campeón no encontrado");
    }


    renderChampion(
      champion,
      container
    );


  } catch (error) {

    console.error(error);

    showChampionError(
      "No se ha podido cargar el campeón."
    );

  }

}


/* =========================================================
   MOSTRAR CAMPEÓN
   ========================================================= */

function renderChampion(
  champion,
  container
) {

  const role =
    championRoles[champion.id] || "MID";


  const build =
    getBuild(champion);


  const splash =
    `${DATA_DRAGON}/img/champion/${champion.id}.png`;


  container.innerHTML = `

    <section class="champion-hero">

      <img
        class="champion-splash"
        src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg"
        alt="${champion.name}"
      >

      <div class="champion-hero-overlay"></div>

      <div class="champion-hero-content">

        <span class="eyebrow">
          ${champion.tags.join(" · ")}
        </span>

        <h1>
          ${champion.name}
        </h1>

        <p class="champion-title">
          ${champion.title}
        </p>

        <div class="champion-position">

          <span>
            ${role}
          </span>

        </div>

      </div>

    </section>


    <section class="champion-section">

      <span class="eyebrow">
        PERFIL
      </span>

      <h2>
        ${champion.name}
      </h2>

      <p class="champion-description">
        ${champion.blurb}
      </p>


      <div class="champion-stats">

        <div>
          <strong>
            ${champion.info.attack}
          </strong>
          <span>ATAQUE</span>
        </div>

        <div>
          <strong>
            ${champion.info.defense}
          </strong>
          <span>DEFENSA</span>
        </div>

        <div>
          <strong>
            ${champion.info.magic}
          </strong>
          <span>MAGIA</span>
        </div>

        <div>
          <strong>
            ${champion.info.difficulty}
          </strong>
          <span>DIFICULTAD</span>
        </div>

      </div>

    </section>


    <section class="champion-section">

      <span class="eyebrow">
        BUILD
      </span>

      <h2>
        Build recomendada
      </h2>

      <p>
        Build recomendada para
        ${champion.name}
        en ${role}.
      </p>


      <div class="build-grid">

        ${build.map((item, index) => `

          <div class="item-card">

            <div class="item-number">
              ${String(index + 1).padStart(2, "0")}
            </div>

            <img
              src="${DATA_DRAGON}/img/item/${item[0]}.png"
              alt="${item[1]}"
            >

            <div class="item-info">

              <h3>
                ${item[1]}
              </h3>

            </div>

          </div>

        `).join("")}

      </div>

    </section>


    <section class="champion-section">

      <span class="eyebrow">
        META
      </span>

      <h2>
        Información
      </h2>

      <div class="meta-grid">

        <div class="meta-card">
          <span>CAMPEÓN</span>
          <strong>${champion.name}</strong>
        </div>

        <div class="meta-card">
          <span>POSICIÓN</span>
          <strong>${role}</strong>
        </div>

        <div class="meta-card">
          <span>ROL</span>
          <strong>${champion.tags.join(" / ")}</strong>
        </div>

        <div class="meta-card">
          <span>PARCHE</span>
          <strong>16.18.1</strong>
        </div>

      </div>

    </section>

  `;


  document.title =
    `${champion.name} // Legends Archive`;

}


/* =========================================================
   ERROR
   ========================================================= */

function showChampionError(message) {

  const container =
    document.getElementById(
      "champion-content"
    );


  if (!container) {
    return;
  }


  container.innerHTML = `

    <div class="error-screen">

      <h1>
        ERROR
      </h1>

      <p>
        ${message}
      </p>

      <a href="index.html">
        VOLVER A CAMPEONES
      </a>

    </div>

  `;

}


/* =========================================================
   LISTADO DE CAMPEONES — INDEX
   ========================================================= */

async function loadChampionList() {

  const grid =
    document.getElementById(
      "champions-grid"
    );


  if (!grid) {
    return;
  }


  try {

    const response = await fetch(
      `${DATA_DRAGON}/data/es_ES/champion.json`
    );


    if (!response.ok) {
      throw new Error(
        "No se pudo cargar la lista"
      );
    }


    const data =
      await response.json();


    let champions =
      Object.values(data.data);


    champions.sort(
      (a, b) =>
        a.name.localeCompare(
          b.name,
          "es"
        )
    );


    renderChampionList(
      champions
    );


  } catch (error) {

    console.error(error);

    grid.innerHTML = `
      <div class="error-screen">

        <h2>
          Error cargando campeones
        </h2>

        <p>
          Comprueba tu conexión.
        </p>

      </div>
    `;

  }

}


function renderChampionList(
  champions
) {

  const grid =
    document.getElementById(
      "champions-grid"
    );


  if (!grid) {
    return;
  }


  grid.innerHTML =
    champions.map(
      champion => {

        const role =
          championRoles[
            champion.id
          ] || "MID";


        return `

          <a
            href="champion.html?champion=${champion.id}"
            class="champion-card"
          >

            <div class="champion-card-image">

              <img
                src="${DATA_DRAGON}/img/champion/${champion.id}.png"
                alt="${champion.name}"
              >

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

      }
    ).join("");

}


/* =========================================================
   INICIAR
   ========================================================= */

loadChampion();

loadChampionList();
