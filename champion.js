const DD = 'https://ddragon.leagueoflegends.com';

const id = new URLSearchParams(location.search).get('id');

const page = document.querySelector('#page');

const builds = {
    Aatrox: {
        role: 'TOP',
        items: [
            ['Inicio', '1055', 'Espada de Doran'],
            ['Botas', '3047', 'Placas de Acero'],
            ['Principal', '3748', 'Hidra Titánica'],
            ['Defensivo', '3053', 'Calibrador de Sterak'],
            ['Final', '6333', 'Cuchilla Oscura']
        ],
        runes: 'Conquistador · Triunfo · Tenacidad · Último esfuerzo'
    },

    Ahri: {
        role: 'MID',
        items: [
            ['Inicio', '1056', 'Anillo de Doran'],
            ['Botas', '3020', 'Botas de hechicero'],
            ['Principal', '6655', 'Compañera de Luden'],
            ['Segundo', '4645', 'Tormento de Liandry'],
            ['Poder', '3089', 'Sombrero mortal de Rabadon'],
            ['Final', '3135', 'Bastón del Vacío']
        ],
        runes: 'Electrocutar · Impacto repentino · Cazador definitivo'
    }
};

function escapeHTML(text) {
    const div = document.createElement('div');
    div.textContent = text ?? '';
    return div.innerHTML;
}

async function getChampion() {

    if (!id) {
        throw new Error('No se ha indicado ningún campeón');
    }

    const versions = await fetch(
        `${DD}/api/versions.json`
    ).then(r => r.json());

    const version = versions[0];

    const response = await fetch(
        `${DD}/cdn/${version}/data/es_ES/champion/${id}.json`
    );

    if (!response.ok) {
        throw new Error('Campeón no encontrado');
    }

    const data = await response.json();

    if (!data.data[id]) {
        throw new Error('Campeón no encontrado');
    }

    return {
        champion: data.data[id],
        version: version
    };
}

function renderAbilities(champion, version) {

    const passive = `
        <div class="ability">
            <img
                src="${DD}/cdn/${version}/img/passive/${champion.passive.image.full}"
                alt="${escapeHTML(champion.passive.name)}"
            >

            <div>
                <strong>PASIVA</strong>
                <h3>${escapeHTML(champion.passive.name)}</h3>
                <p>${escapeHTML(champion.passive.description)}</p>
            </div>
        </div>
    `;

    const spells = champion.spells.map((spell, index) => `
        <div class="ability">
            <img
                src="${DD}/cdn/${version}/img/spell/${spell.image.full}"
                alt="${escapeHTML(spell.name)}"
            >

            <div>
                <strong>${'QWER'[index]}</strong>
                <h3>${escapeHTML(spell.name)}</h3>
                <p>${escapeHTML(spell.description)}</p>
            </div>
        </div>
    `).join('');

    return passive + spells;
}

function renderItems(version, champion) {

    const build = builds[champion.name];

    const items = build?.items || [
        ['Inicio', '1055', 'Espada de Doran'],
        ['Botas', '3006', 'Botas'],
        ['Principal', '3078', 'Trinidad'],
        ['Defensivo', '3053', 'Calibrador de Sterak'],
        ['Situacional', '6333', 'Cuchilla Oscura'],
        ['Final', '3156', 'Velo del hada de la muerte']
    ];

    return items.map(([type, itemId, name]) => `
        <div class="item">
            <img
                src="${DD}/cdn/${version}/img/item/${itemId}.png"
                alt="${escapeHTML(name)}"
            >

            <div>
                <small>${escapeHTML(type)}</small>
                <strong>${escapeHTML(name)}</strong>
            </div>
        </div>
    `).join('');
}

async function init() {

    try {

        const { champion, version } = await getChampion();

        const build = builds[champion.name];

        document.title =
            `${champion.name} — Legends Archive`;

        page.innerHTML = `

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
                    )
                "
            >

                <div class="champHeroContent">

                    <p class="eyebrow">
                        ${escapeHTML(champion.tags.join(' · '))}
                    </p>

                    <h1>
                        ${escapeHTML(champion.name)}
                    </h1>

                    <p class="champTitle">
                        ${escapeHTML(champion.title)}
                    </p>

                    <p class="champDescription">
                        ${escapeHTML(champion.blurb)}
                    </p>

                </div>

            </section>

            <section class="details">

                <article>

                    <p class="eyebrow">
                        PERFIL
                    </p>

                    <h2>
                        ${escapeHTML(champion.name)}
                    </h2>

                    <p>
                        ${escapeHTML(champion.blurb)}
                    </p>

                    <div class="stats">

                        <b>
                            ${champion.info.attack}
                            <small>ATAQUE</small>
                        </b>

                        <b>
                            ${champion.info.defense}
                            <small>DEFENSA</small>
                        </b>

                        <b>
                            ${champion.info.magic}
                            <small>MAGIA</small>
                        </b>

                        <b>
                            ${champion.info.difficulty}
                            <small>DIFICULTAD</small>
                        </b>

                    </div>

                </article>


                <article>

                    <p class="eyebrow">
                        META
                    </p>

                    <h2>
                        Resumen
                    </h2>

                    <div class="metaGrid">

                        <div>
                            <span>PARCHE</span>
                            <strong>${version}</strong>
                        </div>

                        <div>
                            <span>POSICIÓN</span>
                            <strong>
                                ${escapeHTML(
                                    build?.role ||
                                    champion.tags[0] ||
                                    '—'
                                )}
                            </strong>
                        </div>

                        <div>
                            <span>WIN RATE</span>
                            <strong>—</strong>
                        </div>

                        <div>
                            <span>PICK RATE</span>
                            <strong>—</strong>
                        </div>

                    </div>

                    <p class="notice">
                        Las estadísticas competitivas se añadirán
                        posteriormente.
                    </p>

                </article>


                <article class="wide">

                    <p class="eyebrow">
                        BUILD
                    </p>

                    <h2>
                        Build recomendada
                    </h2>

                    <p class="buildIntro">
                        Configuración recomendada para
                        ${escapeHTML(champion.name)}.
                    </p>

                    <div class="items">
                        ${renderItems(version, champion)}
                    </div>

                </article>


                <article class="wide">

                    <p class="eyebrow">
                        HABILIDADES
                    </p>

                    <h2>
                        Kit de ${escapeHTML(champion.name)}
                    </h2>

                    <div class="abilities">
                        ${renderAbilities(champion, version)}
                    </div>

                </article>


                <article>

                    <p class="eyebrow">
                        RUNAS
                    </p>

                    <h2>
                        Runas
                    </h2>

                    <div class="runePlaceholder">

                        <strong>
                            Configuración recomendada
                        </strong>

                        <p>
                            ${escapeHTML(
                                build?.runes ||
                                'Configuración próximamente'
                            )}
                        </p>

                    </div>

                </article>


                <article>

                    <p class="eyebrow">
                        COUNTERS
                    </p>

                    <h2>
                        Matchups
                    </h2>

                    <div class="counterPlaceholder">

                        <div>
                            <span>MEJORES MATCHUPS</span>
                            <strong>Próximamente</strong>
                        </div>

                        <div>
                            <span>COUNTERS</span>
                            <strong>Próximamente</strong>
                        </div>

                    </div>

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
                    Comprueba que el nombre del campeón sea correcto.
                </p>

                <a href="index.html">
                    Volver a campeones
                </a>

            </div>
        `;
    }
}

init();
