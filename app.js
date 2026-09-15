const DD = 'https://ddragon.leagueoflegends.com';

const grid = document.querySelector('#grid');
const search = document.querySelector('#search');
const filters = document.querySelectorAll('[data-role]');

let champions = [];
let currentRole = 'all';

async function init() {
    try {
        const versions = await fetch(
            `${DD}/api/versions.json`
        ).then(r => r.json());

        const version = versions[0];

        const response = await fetch(
            `${DD}/cdn/${version}/data/es_ES/champion.json`
        );

        if (!response.ok) {
            throw new Error('No se pudieron cargar los campeones');
        }

        const data = await response.json();

        champions = Object.values(data.data);

        render();

    } catch (error) {

        console.error(error);

        grid.innerHTML = `
            <div class="loading">
                <h2>No se pudieron cargar los campeones</h2>
                <p>Inténtalo de nuevo en unos segundos.</p>
            </div>
        `;
    }
}


function render() {

    const text =
        search?.value
            .trim()
            .toLowerCase() || '';

    const filtered = champions.filter(champion => {

        const matchesSearch =
            champion.name
                .toLowerCase()
                .includes(text) ||

            champion.title
                .toLowerCase()
                .includes(text);

        const matchesRole =
            currentRole === 'all' ||
            champion.tags.includes(currentRole);

        return matchesSearch && matchesRole;
    });


    if (!filtered.length) {

        grid.innerHTML = `
            <div class="loading">
                <h2>No encontramos campeones</h2>
                <p>Prueba con otro nombre o filtro.</p>
            </div>
        `;

        return;
    }


    grid.innerHTML = filtered.map(champion => `

        <a
            class="championCard"
            href="champion.html?id=${encodeURIComponent(champion.id)}"
        >

            <img
                src="${DD}/cdn/img/champion/loading/${champion.id}_0.jpg"
                alt="${champion.name}"
            >

            <div class="championCardContent">

                <span>
                    ${champion.tags.join(' · ')}
                </span>

                <h3>
                    ${champion.name}
                </h3>

                <p>
                    ${champion.title}
                </p>

            </div>

        </a>

    `).join('');
}


if (search) {

    search.addEventListener(
        'input',
        render
    );

}


filters.forEach(button => {

    button.addEventListener(
        'click',
        () => {

            currentRole =
                button.dataset.role;

            filters.forEach(
                b => b.classList.remove('active')
            );

            button.classList.add('active');

            render();
        }
    );

});


init();
