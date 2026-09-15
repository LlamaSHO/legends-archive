const DD = 'https://ddragon.leagueoflegends.com';

const container =
    document.querySelector('#tierList');

const buttons =
    document.querySelectorAll('[data-role]');


let champions = [];

let currentRole = 'all';


const tiers = {

    TOP: {
        S: [
            'Aatrox',
            'Darius',
            'Garen'
        ],

        A: [
            'Camille',
            'Fiora',
            'Renekton'
        ],

        B: [
            'Malphite',
            'Shen',
            'Ornn'
        ]
    },


    JUNGLE: {
        S: [
            'LeeSin',
            'Viego',
            'Kindred'
        ],

        A: [
            'JarvanIV',
            'Vi',
            'KhaZix'
        ],

        B: [
            'Amumu',
            'Warwick',
            'Rammus'
        ]
    },


    MID: {
        S: [
            'Ahri',
            'Azir',
            'Syndra'
        ],

        A: [
            'Orianna',
            'Viktor',
            'Akali'
        ],

        B: [
            'Lux',
            'Veigar',
            'Anivia'
        ]
    },


    ADC: {
        S: [
            'Jinx',
            'KaiSa',
            'Caitlyn'
        ],

        A: [
            'Ezreal',
            'Xayah',
            'Ashe'
        ],

        B: [
            'Varus',
            'Sivir',
            'MissFortune'
        ]
    },


    SUPPORT: {
        S: [
            'Thresh',
            'Nautilus',
            'Lulu'
        ],

        A: [
            'Leona',
            'Morgana',
            'Nami'
        ],

        B: [
            'Soraka',
            'Janna',
            'Braum'
        ]
    }

};


async function init() {

    try {

        const versions =
            await fetch(
                `${DD}/api/versions.json`
            ).then(r => r.json());


        const version =
            versions[0];


        const response =
            await fetch(
                `${DD}/cdn/${version}/data/es_ES/champion.json`
            );


        const data =
            await response.json();


        champions =
            Object.values(data.data);


        render();

    } catch (error) {

        console.error(error);

        container.innerHTML = `
            <div class="loading">
                No se pudo cargar la tier list.
            </div>
        `;

    }

}


function renderChampion(id) {

    const champion =
        champions.find(
            champion =>
                champion.id === id
        );


    if (!champion) {
        return '';
    }


    return `

        <a
            class="tierChampion"
            href="champion.html?id=${encodeURIComponent(champion.id)}"
        >

            <img
                src="${DD}/cdn/img/champion/loading/${champion.id}_0.jpg"
                alt="${champion.name}"
            >

            <span>
                ${champion.name}
            </span>

        </a>

    `;

}


function renderRole(role) {

    const roleData =
        tiers[role];


    if (!roleData) {
        return '';
    }


    return `

        <section class="tierRole">

            <div class="tierRoleHeader">

                <h2>
                    ${role}
                </h2>

                <span>
                    PARCHE ACTUAL
                </span>

            </div>


            ${renderTier(
                'S',
                roleData.S
            )}


            ${renderTier(
                'A',
                roleData.A
            )}


            ${renderTier(
                'B',
                roleData.B
            )}

        </section>

    `;

}


function renderTier(tier, championIds) {

    return `

        <div class="tierRow">

            <div class="tierRank">
                ${tier}
            </div>

            <div class="tierChampions">

                ${
                    championIds
                        .map(renderChampion)
                        .join('')
                }

            </div>

        </div>

    `;

}


function render() {

    if (currentRole === 'all') {

        container.innerHTML = [

            'TOP',
            'JUNGLE',
            'MID',
            'ADC',
            'SUPPORT'

        ]
        .map(renderRole)
        .join('');

    } else {

        container.innerHTML =
            renderRole(currentRole);

    }

}


buttons.forEach(button => {

    button.addEventListener(
        'click',
        () => {

            currentRole =
                button.dataset.role;


            buttons.forEach(
                b =>
                    b.classList.remove('active')
            );


            button.classList.add('active');


            render();

        }
    );

});


init();
