const DD = "https://ddragon.leagueoflegends.com";

const page = document.querySelector("#page");

async function getData() {
    const versions = await fetch(`${DD}/api/versions.json`)
        .then(r => r.json());

    const version = versions[0];

    const champions = await fetch(
        `${DD}/cdn/${version}/data/es_ES/champion.json`
    ).then(r => r.json());

    return {
        version,
        champions: champions.data
    };
}

function createChampionCard(champion, version) {
    const card = document.createElement("a");

    card.className = "champion-card";
    card.href = `champion.html?id=${champion.id}`;

    card.innerHTML = `
        <img
            src="${DD}/cdn/${version}/img/champion/${champion.image.full}"
            alt="${champion.name}"
        >

        <div class="champion-card-info">
            <h3>${champion.name}</h3>
            <p>${champion.title}</p>
        </div>
    `;

    return card;
}

async function loadChampions() {
    try {
        page.innerHTML = `
            <div class="loading">
                Cargando campeones...
            </div>
        `;

        const { version, champions } = await getData();

        const championList = Object.values(champions);

        championList.sort((a, b) =>
            a.name.localeCompare(b.name, "es")
        );

        page.innerHTML = `
            <section class="champions-page">

                <div class="section-label">
                    LEAGUE OF LEGENDS
                </div>

                <h1>CAMPEONES</h1>

                <p class="description">
                    Todos los campeones de League of Legends.
                </p>

                <div class="champion-controls">

                    <input
                        id="champion-search"
                        type="text"
                        placeholder="Buscar campeón..."
                    >

                    <span id="champion-count">
                        ${championList.length} campeones
                    </span>

                </div>

                <div id="champion-grid" class="champion-grid"></div>

            </section>
        `;

        const grid = document.querySelector("#champion-grid");
        const search = document.querySelector("#champion-search");
        const count = document.querySelector("#champion-count");

        function render(list) {
            grid.innerHTML = "";

            list.forEach(champion => {
                grid.appendChild(
                    createChampionCard(champion, version)
                );
            });

            count.textContent =
                `${list.length} campeones`;
        }

        render(championList);

        search.addEventListener("input", () => {
            const text = search.value
                .toLowerCase()
                .trim();

            const filtered = championList.filter(champion =>
                champion.name
                    .toLowerCase()
                    .includes(text)
            );

            render(filtered);
        });

    } catch (error) {

        console.error(error);

        page.innerHTML = `
            <div class="error">
                <h2>No se pudieron cargar los campeones</h2>
                <p>
                    Comprueba tu conexión a Internet y vuelve a cargar la página.
                </p>
            </div>
        `;
    }
}

loadChampions();
