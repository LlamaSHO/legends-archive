// ============================================================
// LEGENDS ARCHIVE
// CARGADOR COMPLETO DE CAMPEONES
// ============================================================

const DDRAGON = "https://ddragon.leagueoflegends.com";

const championGrid = document.querySelector("#champion-grid");
const searchInput = document.querySelector("#champion-search");

let champions = [];
let currentFilter = "ALL";


// ============================================================
// POSICIONES
// ============================================================

const positions = {

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
    ChoGath: "TOP",
    Corki: "ADC",
    Darius: "TOP",
    Diana: "JUNGLE",
    DrMundo: "TOP",
    Draven: "ADC",

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
    K'Sante: "TOP",
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

    Pantheon: "SUPPORT",
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
    Yunara: "ADC",
    Yuumi: "SUPPORT",

    Zac: "JUNGLE",
    Zed: "MID",
    Zeri: "ADC",
    Ziggs: "ADC",
    Zilean: "SUPPORT",
    Zoe: "MID",
    Zyra: "SUPPORT"

};


// ============================================================
// CARGAR TODOS LOS CAMPEONES
// ============================================================

async function loadChampions() {

    if (!championGrid) {
        return;
    }

    try {

        const versionsResponse = await fetch(
            `${DDRAGON}/api/versions.json`
        );

        const versions = await versionsResponse.json();

        const version = versions[0];

        const response = await fetch(
            `${DDRAGON}/cdn/${version}/data/es_ES/champion.json`
        );

        const data = await response.json();

        champions = Object.values(data.data);

        renderChampions();

    } catch (error) {

        console.error("Error cargando campeones:", error);

        championGrid.innerHTML = `
            <div class="error-card">
                No se pudieron cargar los campeones.
                <br>
                Recarga la página.
            </div>
        `;

    }

}


// ============================================================
// RENDER
// ============================================================

function renderChampions() {

    if (!championGrid) {
        return;
    }

    const search = searchInput
        ? searchInput.value.toLowerCase().trim()
        : "";

    const filtered = champions.filter(champion => {

        const name = champion.name.toLowerCase();

        const position =
            positions[champion.id] ||
            positions[champion.name] ||
            "";

        const matchesSearch =
            !search ||
            name.includes(search);

        const matchesPosition =
            currentFilter === "ALL" ||
            position === currentFilter;

        return matchesSearch && matchesPosition;

    });


    championGrid.innerHTML = filtered.map(champion => {

        const position =
            positions[champion.id] ||
            positions[champion.name] ||
            "MID";


        const image =
            `${DDRAGON}/cdn/img/champion/splash/${champion.id}_0.jpg`;


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

                    </div>

                </a>

            </article>

        `;

    }).join("");

}


// ============================================================
// FILTROS
// ============================================================

document.addEventListener("click", event => {

    const button = event.target.closest("[data-position]");

    if (!button) {
        return;
    }

    currentFilter =
        button.dataset.position;

    document
        .querySelectorAll("[data-position]")
        .forEach(btn => {

            btn.classList.remove("active");

        });


    button.classList.add("active");

    renderChampions();

});


// ============================================================
// BUSCADOR
// ============================================================

if (searchInput) {

    searchInput.addEventListener(
        "input",
        renderChampions
    );

}


// ============================================================
// INICIO
// ============================================================

loadChampions();
