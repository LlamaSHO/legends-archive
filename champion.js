const DD = 'https://ddragon.leagueoflegends.com';

const params = new URLSearchParams(location.search);
const id = params.get('id');

const page = document.querySelector('#page');

let versionGlobal = '';

/*
    BUILDS DE EJEMPLO

    Más adelante sustituiremos estas builds
    por datos estadísticos reales.
*/

const builds = {

    Aatrox: {
        role: 'TOP',
        items: [
            1055,
            3047,
            3748,
            3053,
            6333,
            6692
        ],
        runes:
            'Conquistador · Triunfo · Tenacidad · Último esfuerzo'
    },

    Ahri: {
        role: 'MID',
        items: [
            1056,
            3020,
            6655,
            4645,
            3089,
            3135
        ],
        runes:
            'Electrocutar · Impacto repentino · Cazador definitivo'
    },

    Darius: {
        role: 'TOP',
        items: [
            1055,
            3047,
            3078,
            3748,
            3053,
            6333
        ],
        runes:
            'Conquistador · Triunfo · Tenacidad · Último esfuerzo'
    }

};


/* ================================
   CARGAR CAMPEÓN
================================ */

async function getChampion() {

    if (!id) {
        throw new Error('No se indicó ningún campeón');
    }

    const versions = await fetch(
        `${DD}/api/versions.json`
    ).then(response => response.json());

    const version = versions[0];

    versionGlobal = version;

    const response = await fetch(
        `${DD}/cdn/${version}/data/es_ES/champion/${id}.json`
    );

    if (!response.ok) {
        throw new Error('Campeón no encontrado');
    }

    const json = await response.json();

    const champion = json.data[id];

    if (!champion) {
        throw new Error('Campeón no encontrado');
    }

    return {
        champion,
        version
    };
}


/* ================================
   CARGAR OBJETOS
================================ */

async function loadItems(version) {

    const response = await fetch(
        `${DD}/cdn/${version}/data/es_ES/item.json`
    );

    if (!response.ok) {
        throw new Error('No se pudieron cargar los objetos');
    }

    const data = await response.json();

    return data.data;
}


/* ================================
   ESCAPAR HTML
================================ */

function escapeHTML(text) {

    const div = document.createElement('div');

    div.textContent = text ?? '';

    return div.innerHTML;
}


/* ================================
   HABILIDADES
================================ */

function renderAbilities(champion, version) {

    const passive = `
        <div class="ability">

            <img
                src="${DD}/cdn/${version}/img/passive/${champion.passive.image.full}"
                alt="${escapeHTML(champion.passive.name)}"
            >

            <div>

                <strong>PASIVA</strong>

                <h3>
                    ${escapeHTML(champion.passive.name)}
                </h3>

                <p>
                    ${escapeHTML(champion.passive.description)}
                </p>

            </div>

        </div>
    `;


    const spells = champion.spells.map(
        (spell, index) => `

        <div class="ability">

            <img
                src="${DD}/cdn/${version}/img/spell/${spell.image.full}"
                alt="${escapeHTML(spell.name)}"
            >

            <div>

                <strong>
                    ${'QWER'[index]}
                </strong>

                <h3>
                    ${escapeHTML(spell.name)}
                </h3>

                <p>
                    ${escapeHTML(spell.description)}
                </p>

            </div>

        </div>

    `
    ).join('');


    return passive + spells;
}


/* ================================
   BUILD
================================ */

function renderBuild(champion, version, items) {

    const build = builds[champion.name];

    if (!build) {

        return `
            <p class="notice">
                Todavía no tenemos una build configurada
                para este campeón.
            </p>
        `;

    }


    return `

        <div class="buildRole">

            <span>POSICIÓN</span>

            <strong>
                ${build.role}
            </strong>

        </div>


        <div class="items">

            ${
                build.items.map(itemId => {

                    const item = items[itemId];

                    if (!item) {
                        return '';
                    }


                    return `

                        <div class="item">

                            <img
                                src="${DD}/cdn/${version}/img/item/${item.image.full}"
                                alt="${escapeHTML(item.name)}"
                            >

                            <div>

                                <strong>
                                    ${escapeHTML(item.name)}
                                </strong>

                                <small>
                                    ${item.gold?.total ?? ''}
                                    oro
                                </small>

                            </div>

                        </div>

                    `;

                }).join('')
            }

        </div>

    `;

}


/* ================================
   RUNAS
================================ */

function renderRunes(champion) {

    const build = builds[champion.name];

    if (!build) {

        return `
            <p>
                Runas próximamente.
            </p>
        `;

    }


    return `

        <div class="runePlaceholder">

            <strong>
                Configuración recomendada
            </strong>

            <p>
                ${escapeHTML(build.runes)}
            </p>

        </div>

    `;

}


/* ================================
   COUNTERS
================================ */

function renderCounters() {

    return `

        <div class="counterPlaceholder">

            <div>

                <span>
                    MEJORES MATCHUPS
                </span>

                <strong>
                    Próximamente
                </strong>

            </div>


            <div>

                <span>
                    COUNTERS
                </span>

                <strong>
                    Próximamente
                </strong>

            </div>

        </div>

    `;

}


/* ================================
   MOSTRAR CAMPEÓN
================================ */

async function init() {

    try {

        const {
            champion,
            version
        } = await getChampion();


        const items =
            await loadItems(version);


        const build =
            builds[champion.name];


        document.title =
            `${champion.name} — Legends Archive`;


        page.innerHTML = `


            <!-- HERO -->

            <section
                class="champHero"

                style="
                    background-image:
                    linear-gradient(
                        90deg,
                        rgba(5,10,18,.98),
                        rgba(5,10,18,.45)
                    ),
                    url(
                        '${DD}/cdn/img/champion/splash/${champion.id}_0.jpg'
                    );
                "
            >

                <div class="champHeroContent">

                    <p class="eyebrow">

                        ${escapeHTML(
                            champion.tags.join(' · ')
                        )}

                    </p>


                    <h1>

                        ${escapeHTML(
                            champion.name
                        )}

                    </h1>


                    <p class="champTitle">

                        ${escapeHTML(
                            champion.title
                        )}

                    </p>


                    <p class="champDescription">

                        ${escapeHTML(
                            champion.blurb
                        )}

                    </p>

                </div>

            </section>



            <!-- CONTENIDO -->

            <section class="details">


                <!-- PERFIL -->

                <article>

                    <p class="eyebrow">
                        PERFIL
                    </p>


                    <h2>

                        ${escapeHTML(
                            champion.name
                        )}

                    </h2>


                    <p>

                        ${escapeHTML(
                            champion.lore
                        )}

                    </p>


                    <div class="stats">


                        <b>

                            ${champion.info.attack}

                            <small>
                                ATAQUE
                            </small>

                        </b>


                        <b>

                            ${champion.info.defense}

                            <small>
                                DEFENSA
                            </small>

                        </b>


                        <b>

                            ${champion.info.magic}

                            <small>
                                MAGIA
                            </small>

                        </b>


                        <b>

                            ${champion.info.difficulty}

                            <small>
                                DIFICULTAD
                            </small>

                        </b>


                    </div>

                </article>



                <!-- META -->

                <article>

                    <p class="eyebrow">
                        META
                    </p>


                    <h2>
                        Resumen
                    </h2>


                    <div class="metaGrid">


                        <div>

                            <span>
                                PARCHE
                            </span>

                            <strong>
                                ${version}
                            </strong>

                        </div>


                        <div>

                            <span>
                                POSICIÓN
                            </span>

                            <strong>

                                ${
                                    build?.role ||
                                    champion.tags[0] ||
                                    '—'
                                }

                            </strong>

                        </div>


                        <div>

                            <span>
                                WIN RATE
                            </span>

                            <strong>
                                —
                            </strong>

                        </div>


                        <div>

                            <span>
                                PICK RATE
                            </span>

                            <strong>
                                —
                            </strong>

                        </div>


                    </div>


                    <p class="notice">

                        Las estadísticas competitivas
                        se añadirán mediante nuestro
                        sistema de datos.

                    </p>

                </article>



                <!-- BUILD -->

                <article class="wide">

                    <p class="eyebrow">
                        BUILD
                    </p>


                    <h2>
                        Build recomendada
                    </h2>


                    <p class="buildIntro">

                        Configuración para
                        ${escapeHTML(champion.name)}.

                    </p>


                    ${renderBuild(
                        champion,
                        version,
                        items
                    )}

                </article>



                <!-- HABILIDADES -->

                <article class="wide">

                    <p class="eyebrow">
                        HABILIDADES
                    </p>


                    <h2>

                        Kit de
                        ${escapeHTML(champion.name)}

                    </h2>


                    <div class="abilities">

                        ${renderAbilities(
                            champion,
                            version
                        )}

                    </div>

                </article>



                <!-- RUNAS -->

                <article>

                    <p class="eyebrow">
                        RUNAS
                    </p>


                    <h2>
                        Runas
                    </h2>


                    ${renderRunes(
                        champion
                    )}

                </article>



                <!-- COUNTERS -->

                <article>

                    <p class="eyebrow">
                        COUNTERS
                    </p>


                    <h2>
                        Matchups
                    </h2>


                    ${renderCounters()}

                </article>


            </section>

        `;


    } catch (error) {

        console.error(error);


        page.innerHTML = `

            <div class="loading">

                <h2>
                    No se pudo cargar el campeón
                </h2>


                <p>

                    ${escapeHTML(
                        error.message
                    )}

                </p>


                <a href="index.html">

                    Volver a campeones

                </a>

            </div>

        `;

    }

}


init();
