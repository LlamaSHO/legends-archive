const DD = "https://ddragon.leagueoflegends.com";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const page = document.querySelector("#page");

/* =========================================================
   BUILDS
========================================================= */

const builds = {

    Aatrox: {
        role: "TOP",
        items: [
            ["Inicio", "1055", "Espada de Doran"],
            ["Botas", "3047", "Placas de Acero"],
            ["Principal", "6692", "Eclipse"],
            ["Segundo", "3748", "Hidra Titánica"],
            ["Defensivo", "3053", "Calibrador de Sterak"],
            ["Final", "3071", "Cuchilla Negra"]
        ],
        runes:
            "Conquistador · Triunfo · Tenacidad · Último esfuerzo"
    },

    Ahri: {
        role: "MID",
        items: [
            ["Inicio", "1056", "Anillo de Doran"],
            ["Botas", "3020", "Botas de hechicero"],
            ["Principal", "6655", "Compañera de Luden"],
            ["Segundo", "4645", "Tormento de Liandry"],
            ["Poder", "3089", "Sombrero mortal de Rabadon"],
            ["Final", "3135", "Bastón del Vacío"]
        ],
        runes:
            "Electrocutar · Impacto repentino · Colección de globos oculares · Cazador definitivo"
    },

    Akali: {
        role: "MID",
        items: [
            ["Inicio", "1056", "Anillo de Doran"],
            ["Botas", "3020", "Botas de hechicero"],
            ["Principal", "3115", "Nashor's Tooth"],
            ["Segundo", "3157", "Reloj de arena de Zhonya"],
            ["Poder", "3089", "Sombrero mortal de Rabadon"],
            ["Final", "3135", "Bastón del Vacío"]
        ],
        runes:
            "Electrocutar · Impacto repentino · Colección de globos oculares · Cazador definitivo"
    },

    Ashe: {
        role: "ADC",
        items: [
            ["Inicio", "1055", "Espada de Doran"],
            ["Botas", "3006", "Grebas de berserker"],
            ["Principal", "6672", "Kraken Slayer"],
            ["Segundo", "3031", "Filo infinito"],
            ["Crítico", "3036", "Recuerdos de Lord Dominik"],
            ["Final", "6673", "Arcoescudo inmortal"]
        ],
        runes:
            "Compás letal · Presencia de ánimo · Leyenda: Linaje · Golpe de gracia"
    },

    Garen: {
        role: "TOP",
        items: [
            ["Inicio", "1055", "Espada de Doran"],
            ["Botas", "3047", "Placas de Acero"],
            ["Principal", "6631", "Stridebreaker"],
            ["Segundo", "3748", "Hidra Titánica"],
            ["Defensivo", "3053", "Calibrador de Sterak"],
            ["Final", "3071", "Cuchilla Negra"]
        ],
        runes:
            "Conquistador · Triunfo · Tenacidad · Último esfuerzo"
    },

    Jinx: {
        role: "ADC",
        items: [
            ["Inicio", "1055", "Espada de Doran"],
            ["Botas", "3006", "Grebas de berserker"],
            ["Principal", "6672", "Kraken Slayer"],
            ["Crítico", "3031", "Filo infinito"],
            ["Velocidad", "3085", "Huracán de Runaan"],
            ["Final", "3036", "Recuerdos de Lord Dominik"]
        ],
        runes:
            "Compás letal · Presencia de ánimo · Leyenda: Linaje · Golpe de gracia"
    },

    Lux: {
        role: "MID",
        items: [
            ["Inicio", "1056", "Anillo de Doran"],
            ["Botas", "3020", "Botas de hechicero"],
            ["Principal", "6655", "Compañera de Luden"],
            ["Segundo", "3089", "Sombrero mortal de Rabadon"],
            ["Poder", "3135", "Bastón del Vacío"],
            ["Final", "3157", "Reloj de arena de Zhonya"]
        ],
        runes:
            "Cometa arcano · Banda de maná · Trascendencia · Piroláser"
    },

    Yasuo: {
        role: "MID",
        items: [
            ["Inicio", "1055", "Espada de Doran"],
            ["Botas", "3006", "Grebas de berserker"],
            ["Principal", "6673", "Arcoescudo inmortal"],
            ["Segundo", "3031", "Filo infinito"],
            ["Crítico", "3085", "Huracán de Runaan"],
            ["Final", "3072", "Bloodthirster"]
        ],
        runes:
            "Compás letal · Triunfo · Leyenda: Alacridad · Último esfuerzo"
    },

    Yone: {
        role: "MID",
        items: [
            ["Inicio", "1055", "Espada de Doran"],
            ["Botas", "3006", "Grebas de berserker"],
            ["Principal", "6673", "Arcoescudo inmortal"],
            ["Segundo", "3031", "Filo infinito"],
            ["Crítico", "3085", "Huracán de Runaan"],
            ["Final", "3072", "Bloodthirster"]
        ],
        runes:
            "Compás letal · Triunfo · Leyenda: Alacridad · Último esfuerzo"
    }

};


/* =========================================================
   SEGURIDAD
========================================================= */

function escapeHTML(value) {

    const div = document.createElement("div");

    div.textContent = value ?? "";

    return div.innerHTML;
}


/* =========================================================
   DATOS DEL CAMPEÓN
========================================================= */

async function getChampion() {

    if (!id) {
        throw new Error("No se ha indicado ningún campeón.");
    }

    const versionsResponse =
        await fetch(`${DD}/api/versions.json`);

    if (!versionsResponse.ok) {
        throw new Error("No se pudieron obtener las versiones.");
    }

    const versions =
        await versionsResponse.json();

    const version = versions[0];

    const response = await fetch(
        `${DD}/cdn/${version}/data/es_ES/champion/${id}.json`
    );

    if (!response.ok) {
        throw new Error("Campeón no encontrado.");
    }

    const data = await response.json();

    const champion = data.data[id];

    if (!champion) {
        throw new Error("Campeón no encontrado.");
    }

    return {
        champion,
        version
    };
}


/* =========================================================
   BUILD
========================================================= */

function renderBuild(champion, version) {

    const build = builds[champion.name];

    if (!build) {

        return `
            <div class="build-section">

                <div class="section-heading">

                    <span class="eyebrow">
                        BUILD
                    </span>

                    <h2>
                        Build recomendada
                    </h2>

                    <p>
                        Estamos preparando la build específica
                        para ${escapeHTML(champion.name)}.
                    </p>

                </div>

            </div>
        `;
    }

    const items = build.items.map(item => {

        const [type, itemId, name] = item;

        return `
            <div class="build-item">

                <img
                    src="${DD}/cdn/${version}/img/item/${itemId}.png"
                    alt="${escapeHTML(name)}"
                    loading="lazy"
                >

                <div>

                    <span>
                        ${escapeHTML(type)}
                    </span>

                    <strong>
                        ${escapeHTML(name)}
                    </strong>

                </div>

            </div>
        `;

    }).join("");


    return `

        <div class="build-section">

            <div class="section-heading">

                <span class="eyebrow">
                    BUILD
                </span>

                <h2>
                    Build recomendada
                </h2>

                <p>
                    Configuración recomendada para
                    ${escapeHTML(champion.name)}.
                </p>

            </div>


            <div class="build-meta">

                <span>
                    POSICIÓN

                    <strong>
                        ${escapeHTML(build.role)}
                    </strong>
                </span>

            </div>


            <div class="build-grid">

                ${items}

            </div>


            <div class="runes">

                <span class="eyebrow">
                    RUNAS
                </span>

                <p>
                    ${escapeHTML(build.runes)}
                </p>

            </div>

        </div>

    `;
}


/* =========================================================
   HABILIDADES
========================================================= */

function renderAbilities(champion, version) {

    const passive = `
        <div class="ability">

            <img
                src="${DD}/cdn/${version}/img/passive/${champion.passive.image.full}"
                alt="${escapeHTML(champion.passive.name)}"
            >

            <div>

                <strong>
                    PASIVA
                </strong>

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
        (spell, index) => {

            return `
                <div class="ability">

                    <img
                        src="${DD}/cdn/${version}/img/spell/${spell.image.full}"
                        alt="${escapeHTML(spell.name)}"
                    >

                    <div>

                        <strong>
                            ${"QWER"[index]}
                        </strong>

                        <h3>
                            ${escapeHTML(spell.name)}
                        </h3>

                        <p>
                            ${escapeHTML(spell.description)}
                        </p>

                    </div>

                </div>
            `;

        }
    ).join("");


    return passive + spells;
}


/* =========================================================
   PÁGINA
========================================================= */

async function init() {

    try {

        const {
            champion,
            version
        } = await getChampion();


        const build =
            builds[champion.name];


        document.title =
            `${champion.name} — Legends Archive`;


        page.innerHTML = `

            <!-- HERO PREMIUM -->

            <section class="champion-hero">

                <img
                    class="champion-hero-bg"
                    src="${DD}/cdn/${version}/img/champion/splash/${champion.id}_0.jpg"
                    alt=""
                >

                <div class="champion-hero-content">

                    <span class="eyebrow">
                        ${escapeHTML(
                            champion.tags.join(" · ")
                        )}
                    </span>

                    <h1>
                        ${escapeHTML(champion.name)}
                    </h1>

                    <p class="champion-title">
                        ${escapeHTML(champion.title)}
                    </p>

                    <p class="champion-blurb">
                        ${escapeHTML(champion.blurb)}
                    </p>

                </div>

            </section>


            <!-- PERFIL -->

            <section class="profile-section">

                <span class="eyebrow">
                    PERFIL
                </span>

                <h2>
                    ${escapeHTML(champion.name)}
                </h2>

                <p class="lore">
                    ${escapeHTML(champion.lore)}
                </p>


                <div class="stats-row">

                    <span>
                        ATAQUE

                        <b>
                            ${champion.info.attack}
                        </b>
                    </span>


                    <span>
                        DEFENSA

                        <b>
                            ${champion.info.defense}
                        </b>
                    </span>


                    <span>
                        MAGIA

                        <b>
                            ${champion.info.magic}
                        </b>
                    </span>


                    <span>
                        DIFICULTAD

                        <b>
                            ${champion.info.difficulty}
                        </b>
                    </span>

                </div>

            </section>


            <!-- META -->

            <section class="profile-section">

                <span class="eyebrow">
                    META
                </span>

                <h2>
                    Resumen
                </h2>


                <div class="stats-row">

                    <span>
                        PARCHE

                        <b>
                            ${version}
                        </b>
                    </span>


                    <span>
                        POSICIÓN

                        <b>
                            ${escapeHTML(
                                build?.role ||
                                champion.tags[0] ||
                                "—"
                            )}
                        </b>
                    </span>


                    <span>
                        WIN RATE

                        <b>
                            —
                        </b>
                    </span>


                    <span>
                        PICK RATE

                        <b>
                            —
                        </b>
                    </span>

                </div>

            </section>


            <!-- BUILD -->

            ${renderBuild(champion, version)}


            <!-- HABILIDADES -->

            <section class="build-section">

                <div class="section-heading">

                    <span class="eyebrow">
                        HABILIDADES
                    </span>

                    <h2>
                        Kit de ${escapeHTML(champion.name)}
                    </h2>

                </div>


                <div class="abilities">

                    ${renderAbilities(
                        champion,
                        version
                    )}

                </div>

            </section>

        `;


    } catch (error) {

        console.error(error);


        page.innerHTML = `

            <div class="error-box">

                <h1>
                    No se pudo cargar el campeón
                </h1>

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
