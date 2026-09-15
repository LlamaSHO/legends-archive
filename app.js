/* =========================================================
   LEGENDS // ARCHIVE
   CHAMPION DATABASE
   ========================================================= */

const DATA_DRAGON =
  "https://ddragon.leagueoflegends.com/cdn/16.18.1";

const championContainer =
  document.getElementById("champion-content");


/* =========================================================
   BUILDS
   ========================================================= */

const builds = {

  fighter: [
    ["1055", "Espada de Doran", "Inicio"],
    ["6692", "Eclipse", "Daño"],
    ["6610", "Cielo Desgarrado", "Daño"],
    ["3053", "Sterak", "Supervivencia"],
    ["3071", "Cuchilla Negra", "Daño"],
    ["3047", "Placas de Acero", "Botas"]
  ],

  tank: [
    ["1054", "Escudo de Doran", "Inicio"],
    ["3068", "Corazón de Acero", "Vida"],
    ["6662", "Guantelete de Hielo", "Defensa"],
    ["2504", "Kaenic Rookern", "Resistencia"],
    ["3742", "Cimitarra Pétrea", "Defensa"],
    ["3047", "Placas de Acero", "Botas"]
  ],

  assassin: [
    ["1055", "Espada de Doran", "Inicio"],
    ["6692", "Eclipse", "Daño"],
    ["3142", "Youmuu", "Letalidad"],
    ["6693", "Arcoescudo", "Daño"],
    ["3071", "Cuchilla Negra", "Daño"],
    ["3158", "Botas de hechicero", "Botas"]
  ],

  mage: [
    ["1056", "Anillo de Doran", "Inicio"],
    ["6655", "Luden", "Poder de habilidad"],
    ["4645", "Tormento de Liandry", "Poder de habilidad"],
    ["3089", "Sombrero mortal de Rabadon", "AP"],
    ["3135", "Bastón del Vacío", "Penetración"],
    ["3020", "Botas de hechicero", "Botas"]
  ],

  marksman: [
    ["1055", "Espada de Doran", "Inicio"],
    ["6672", "Kraken", "Daño"],
    ["3031", "Filo del Infinito", "Crítico"],
    ["6673", "Arcoescudo Inmortal", "Supervivencia"],
    ["3094", "Huracán de Runaan", "Velocidad"],
    ["3006", "Grebas de Berserker", "Botas"]
  ],

  support: [
    ["3850", "Atlas mundial", "Inicio"],
    ["6617", "Regalo del Espectro", "Utilidad"],
    ["3107", "Redención", "Curación"],
    ["3190", "Medallón de los Solari", "Defensa"],
    ["3504", "Ardent", "Utilidad"],
    ["3117", "Botas de movilidad", "Botas"]
  ]

};


/* =========================================================
   POSICIONES / TIPOS
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
  Fiddlesticks: "JUNGLE",
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
  Yunara: "ADC",
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
   DETERMINAR BUILD
   ========================================================= */

function getBuild(champion) {

  const role = championRoles[champion.id];

  const tags = champion.tags || [];

  if (tags.includes("Tank")) {
    return builds.tank;
  }

  if (tags.includes("Marksman")) {
    return builds.marksman;
  }

  if (tags.includes("Assassin")) {
    return builds.assassin;
  }

  if (tags.includes("Mage")) {
    return builds.mage;
  }

  if (tags.includes("Support")) {
    return builds.support;
  }

  if (role === "ADC") {
    return builds.marksman;
  }

  if (role === "SUPPORT") {
    return builds.support;
  }

  return builds.fighter;
}


/* =========================================================
   CARGAR CAMPEÓN
   ========================================================= */

async function loadChampion() {

  const params =
    new URLSearchParams(window.location.search);

  const championId =
    params.get("champion");


  if (!championId) {

    showError(
      "No se ha seleccionado ningún campeón."
    );

    return;
  }


  try {

    const response = await fetch(
      `${DATA_DRAGON}/data/es_ES/champion/${championId}.json`
    );


    if (!response.ok) {

      throw new Error(
        "Campeón no encontrado"
      );

    }


    const json =
      await response.json();


    const champion =
      json.data[championId];


    renderChampion(champion);


  } catch (error) {

    console.error(error);

    showError(
      "No se ha podido cargar el campeón."
    );

  }

}


/* =========================================================
   RENDER CAMPEÓN
   ========================================================= */

function renderChampion(champion) {

  const position =
    championRoles[champion.id] || "MID";


  const build =
    getBuild(champion);


  const splash =
    `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`;


  championContainer.innerHTML = `

    <section class="champion-hero">

      <img
        class="champion-splash"
        src="${splash}"
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
          ${position}
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
          <strong>${champion.info.attack}</strong>
          <span>ATAQUE</span>
        </div>

        <div>
          <strong>${champion.info.defense}</strong>
          <span>DEFENSA</span>
        </div>

        <div>
          <strong>${champion.info.magic}</strong>
          <span>MAGIA</span>
        </div>

        <div>
          <strong>${champion.info.difficulty}</strong>
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
        Configuración recomendada para
        ${champion.name} en ${position}.
      </p>


      <div class="build-grid">

        ${build.map((item, index) => `

          <div class="item-card">

            <div class="item-number">
              ${String(index + 1).padStart(2, "0")}
            </div>

            <img
              class="item-image"
              src="${DATA_DRAGON}/img/item/${item[0]}.png"
              alt="${item[1]}"
            >

            <div class="item-info">

              <h3>
                ${item[1]}
              </h3>

              <span>
                ${item[2]}
              </span>

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
          <strong>${position}</strong>
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

function showError(message) {

  championContainer.innerHTML = `

    <div class="error-screen">

      <h1>
        Oops
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
   INICIAR
   ========================================================= */

loadChampion();
