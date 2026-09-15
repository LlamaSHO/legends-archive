// ==========================================================
// LEGENDS ARCHIVE
// LISTADO COMPLETO DE CAMPEONES
// ==========================================================

const DDRAGON = "https://ddragon.leagueoflegends.com";


// ----------------------------------------------------------
// ENCONTRAR ELEMENTOS DE LA PÁGINA
// ----------------------------------------------------------

const championGrid =
    document.querySelector("#champion-grid") ||
    document.querySelector("#champions-grid") ||
    document.querySelector("#champion-list") ||
    document.querySelector(".champion-grid") ||
    document.querySelector(".champions-grid") ||
    document.querySelector(".champion-list");

const searchInput =
    document.querySelector("#champion-search") ||
    document.querySelector("#search") ||
    document.querySelector('input[type="search"]');


// ----------------------------------------------------------
// VARIABLES
// ----------------------------------------------------------

let champions = [];

let currentFilter = "TODOS";


// ----------------------------------------------------------
// POSICIONES PRINCIPALES
// ----------------------------------------------------------

const championPositions = {

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
    ChoGath: "TOP",
    Corki: "ADC",

    Darius: "TOP",
    Diana: "JUNGLE",
    DrMundo: "TOP",
    Draven: "ADC",

    Ekko: "MID",
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
    Heimerdinger: "MID",
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

    Kaisa: "ADC",
    KaiSa: "ADC",
    Kalista: "ADC",
    Karma: "SUPPORT",
    Karthus: "JUNGLE",
    Kassadin: "MID",
    Katarina: "MID",
    Kayle: "TOP",
    Kayn: "JUNGLE",
    Kennen: "TOP",
    Khazix: "JUNGLE",
    KhaZix: "JUNGLE",
    Kindred: "JUNGLE",
    Kled: "TOP",
    KogMaw: "ADC",
    KSante: "TOP",

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
    Neeko: "SUPPORT",
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
    Taliyah: "MID",
    Talon: "MID",
    Taric: "SUPPORT",
    Teemo: "TOP",
    Thresh: "SUPPORT",
    Tristana: "ADC",
    Trundle: "JUNGLE",
    Tryndamere: "TOP",
    TwistedFate: "MID",
    Twitch: "ADC",

    Udyr: "JUNGLE",
    Urgot: "TOP",

    Varus: "ADC",
    Vayne: "ADC",
    Veigar: "MID",
    Velkoz: "SUPPORT",
    VelKoz: "SUPPORT",
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
    Yone: "MID",
    Yorick: "TOP",

    Yuumi: "SUPPORT",

    Zac: "JUNGLE",
    Zed: "MID",
    Zeri: "ADC",
    Ziggs: "ADC",
    Zilean: "SUPPORT",
    Zoe: "MID",
    Zyra: "SUPPORT"

};


// ----------------------------------------------------------
// POSICIÓN AUTOMÁTICA DE RESPALDO
// ----------------------------------------------------------

function getPosition(champion) {

    if (championPositions[champion.id]) {
        return championPositions[champion.id];
    }

    if (championPositions[champion.name]) {
        return championPositions[champion.name];
    }

    const tags = champion.tags || [];

    if (tags.includes("Marksman")) {
        return "ADC";
    }

    if (tags.includes("Support")) {
        return "SUPPORT";
    }

    if (tags.includes("Mage")) {
        return "MID";
    }

    if (tags.includes("Assassin")) {
        return "MID";
    }

    if (tags.includes("Tank")) {
        return "TOP";
    }

    return "TOP";
}


// ----------------------------------------------------------
// CARGAR CAMPEONES
// ----------------------------------------------------------

async function loadChampions() {

    if (!championGrid) {

        console.error(
            "No se encontró el contenedor de campeones."
        );

        return;

    }


    try {

        const response = await fetch(
            `${DDRAGON}/api/versions.json`
        );


        if (!response.ok) {
            throw new Error("No se pudo conectar con Data Dragon.");
        }


        const versions = await response.json();

        const version = versions[0];


        const championsResponse = await fetch(
            `${DDRAGON}/cdn/${version}/data/es_ES/champion.json`
        );


        if (!championsResponse.ok) {
            throw new Error("No se pudieron cargar los campeones.");
        }


        const data = await championsResponse.json();


        champions = Object.values(data.data);


        console.log(
            `LEGENDS ARCHIVE: ${champions.length} campeones cargados.`
        );


        renderChampions();


    } catch (error) {

        console.error(error);


        championGrid.innerHTML = `

            <div class="loading-error">

                <strong>No se pudieron cargar los campeones</strong>

                <span>
                    Comprueba tu conexión y recarga la página.
                </span>

            </div>

        `;

    }

}


// ----------------------------------------------------------
// FILTRAR CAMPEONES
// ----------------------------------------------------------

function getFilteredChampions() {

    const search = searchInput
        ? searchInput.value.toLowerCase().trim()
        : "";


    return champions.filter(champion => {

        const position = getPosition(champion);


        const matchesSearch =
            champion.name
                .toLowerCase()
                .includes(search);


        const matchesFilter =
            currentFilter === "TODOS" ||
            currentFilter === "ALL" ||
            position === currentFilter;


        return (
            matchesSearch &&
            matchesFilter
        );

    });

}


// ----------------------------------------------------------
// RENDER CAMPEONES
// ----------------------------------------------------------

function renderChampions() {

    if (!championGrid) {
        return;
    }


    const filtered =
        getFilteredChampions();


    if (filtered.length === 0) {

        championGrid.innerHTML = `

            <div class="loading-error">

                No encontramos ningún campeón.

            </div>

        `;

        return;

    }


    championGrid.innerHTML =
        filtered.map(renderChampionCard).join("");

}


// ----------------------------------------------------------
// TARJETA
// ----------------------------------------------------------

function renderChampionCard(champion) {

    const position =
        getPosition(champion);


    const image =
        `${DDRAGON}/cdn/img/champion/splash/${champion.id}_0.jpg`;


    const tags =
        (champion.tags || []).join(" · ");


    return `

        <article class="champion-card">

            <a
                href="champion.html?id=${encodeURIComponent(champion.id)}"
                class="champion-link"
            >

                <div class="champion-image-wrapper">

                    <img
                        src="${image}"
                        alt="${champion.name}"
                        class="champion-image"
                        loading="lazy"
                    >

                </div>


                <div class="champion-card-content">

                    <div class="champion-role">
                        ${position}
                    </div>


                    <h3>
                        ${champion.name}
                    </h3>


                    <p>
                        ${champion.title}
                    </p>


                    <div class="champion-tags">
                        ${tags}
                    </div>

                </div>

            </a>

        </article>

    `;

}


// ----------------------------------------------------------
// BUSCADOR
// ----------------------------------------------------------

if (searchInput) {

    searchInput.addEventListener(
        "input",
        () => {

            renderChampions();

        }
    );

}


// ----------------------------------------------------------
// BOTONES DE POSICIÓN
// ----------------------------------------------------------

document.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                "[data-position]"
            );


        if (!button) {
            return;
        }


        event.preventDefault();


        currentFilter =
            button.dataset.position;


        document
            .querySelectorAll(
                "[data-position]"
            )
            .forEach(btn => {

                btn.classList.remove(
                    "active"
                );

            });


        button.classList.add(
            "active"
        );


        renderChampions();

    }
);


// ----------------------------------------------------------
// INICIAR
// ----------------------------------------------------------

loadChampions();
