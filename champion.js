const DD = 'https://ddragon.leagueoflegends.com';

const params = new URLSearchParams(location.search);
const id = params.get('id');

const page = document.querySelector('#page');

async function init() {
    try {
        if (!id) {
            throw new Error('No se indicó ningún campeón');
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

        const json = await response.json();
        const champion = json.data[id];

        if (!champion) {
            throw new Error('Campeón no encontrado');
        }

        document.title =
            `${champion.name} — Legends Archive`;

        page.innerHTML = `
            <section class="champHero"
                style="
                    background-image:
                    linear-gradient(
                        90deg,
                        rgba(5,10,18,.95),
                        rgba(5,10,18,.45)
                    ),
                    url('${DD}/cdn/img/champion/splash/${champion.id}_0.jpg');
                "
            >
                <div class="champHeroContent">
                    <p class="eyebrow">
                        ${champion.tags.join(' · ')}
                    </p>

                    <h1>
                        ${champion.name}
                    </h1>

                    <p class="champTitle">
                        ${champion.title}
                    </p>

                    <p class="champDescription">
                        ${champion.blurb}
                    </p>
                </div>
            </section>

            <section class="details">

                <article>
                    <p class="eyebrow">PERFIL</p>

                    <h2>
                        ${champion.name}
                    </h2>

                    <p>
                        ${champion.lore}
                    </p>
                </article>

                <article>
                    <p class="eyebrow">ESTADÍSTICAS</p>

                    <h2>
                        Información
                    </h2>

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

                <article class="wide">

                    <p class="eyebrow">
                        HABILIDADES
                    </p>

                    <h2>
                        Habilidades de ${champion.name}
                    </h2>

                    <div class="abilities">

                        <div class="ability">
                            <img
                                src="${DD}/cdn/${version}/img/passive/${champion.passive.image.full}"
                                alt=""
                            >

                            <div>
                                <strong>PASIVA</strong>

                                <h3>
                                    ${champion.passive.name}
                                </h3>

                                <p>
                                    ${champion.passive.description}
                                </p>
                            </div>
                        </div>

                        ${champion.spells.map((spell, i) => `
                            <div class="ability">

                                <img
                                    src="${DD}/cdn/${version}/img/spell/${spell.image.full}"
                                    alt=""
                                >

                                <div>
                                    <strong>
                                        ${'QWER'[i]}
                                    </strong>

                                    <h3>
                                        ${spell.name}
                                    </h3>

                                    <p>
                                        ${spell.description}
                                    </p>
                                </div>

                            </div>
                        `).join('')}

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
                    ${error.message}
                </p>

                <a href="index.html">
                    Volver a campeones
                </a>

            </div>
        `;
    }
}

init();
