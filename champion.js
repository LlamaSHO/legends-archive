const DD = 'https://ddragon.leagueoflegends.com';
const id = new URLSearchParams(location.search).get('id');
const page = document.querySelector('#page');

# /*

# BUILDS POR CAMPEÓN

*/

const builds = {

```
Aatrox: {
    role: 'TOP',
    items: [
        ['Inicio', '1055', 'Espada de Doran'],
        ['Botas', '3047', 'Placas de Acero'],
        ['Mítico', '6692', 'Cuchilla Negra'],
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
    runes: 'Electrocutar · Impacto repentino · Colección de globos oculares · Cazador definitivo'
},

Ashe: {
    role: 'ADC',
    items: [
        ['Inicio', '1055', 'Espada de Doran'],
        ['Botas', '3006', 'Grebas de berserker'],
        ['Principal', '6672', 'Kraken Slayer'],
        ['Segundo', '3031', 'Recuerdos de Lord Dominik'],
        ['Crítico', '6673', 'Arcoescudo inmortal'],
        ['Final', '3508', 'Manamune']
    ],
    runes: 'Compás letal · Presencia de ánimo · Leyenda: Linaje · Golpe de gracia'
},

Garen: {
    role: 'TOP',
    items: [
        ['Inicio', '1055', 'Espada de Doran'],
        ['Botas', '3047', 'Placas de Acero'],
        ['Principal', '6631', 'Stridebreaker'],
        ['Segundo', '3748', 'Hidra Titánica'],
        ['Defensivo', '3053', 'Calibrador de Sterak'],
        ['Final', '3071', 'Cuchilla Negra']
    ],
    runes: 'Conquistador · Triunfo · Tenacidad · Último esfuerzo'
},

Jinx: {
    role: 'ADC',
    items: [
        ['Inicio', '1055', 'Espada de Doran'],
        ['Botas', '3006', 'Grebas de berserker'],
        ['Principal', '6672', 'Kraken Slayer'],
        ['Crítico', '3031', 'Filo infinito'],
        ['Velocidad', '3085', 'Huracán de Runaan'],
        ['Final', '3036', 'Recuerdos de Lord Dominik']
    ],
    runes: 'Compás letal · Presencia de ánimo · Leyenda: Linaje · Golpe de gracia'
},

Lux: {
    role: 'MID',
    items: [
        ['Inicio', '1056', 'Anillo de Doran'],
        ['Botas', '3020', 'Botas de hechicero'],
        ['Principal', '6655', 'Compañera de Luden'],
        ['Segundo', '3089', 'Sombrero mortal de Rabadon'],
        ['Poder', '3135', 'Bastón del Vacío'],
        ['Final', '3157', 'Reloj de arena de Zhonya']
    ],
    runes: 'Cometa arcano · Banda de maná · Trascendencia · Piroláser'
},

Yasuo: {
    role: 'MID',
    items: [
        ['Inicio', '1055', 'Espada de Doran'],
        ['Botas', '3006', 'Grebas de berserker'],
        ['Principal', '6673', 'Arcoescudo inmortal'],
        ['Segundo', '3031', 'Filo infinito'],
        ['Crítico', '3085', 'Huracán de Runaan'],
        ['Final', '3072', 'Bloodthirster']
    ],
    runes: 'Compás letal · Triunfo · Leyenda: Alacridad · Último esfuerzo'
},

Yone: {
    role: 'MID',
    items: [
        ['Inicio', '1055', 'Espada de Doran'],
        ['Botas', '3006', 'Grebas de berserker'],
        ['Principal', '6673', 'Arcoescudo inmortal'],
        ['Segundo', '3031', 'Filo infinito'],
        ['Crítico', '3085', 'Huracán de Runaan'],
        ['Final', '3072', 'Bloodthirster']
    ],
    runes: 'Compás letal · Triunfo · Leyenda: Alacridad · Último esfuerzo'
}
```

};

# /*

# DATOS DEL CAMPEÓN

*/

async function getChampion() {

```
if (!id) {
    throw new Error('No se ha indicado ningún campeón');
}

const versions = await fetch(`${DD}/api/versions.json`)
    .then(r => r.json());

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
    version
};
```

}

# /*

# SEGURIDAD

*/

function escapeHTML(text) {

```
const div = document.createElement('div');

div.textContent = text ?? '';

return div.innerHTML;
```

}

# /*

# HABILIDADES

*/

function renderAbilities(champion, version) {

```
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

const spells = champion.spells.map((spell, index) => `

    <div class="ability">

        <img
            src="${DD}/cdn/${version}/img/spell/${spell.image.full}"
            alt="${escapeHTML(spell.name)}"
        >

        <div>

            <strong>${'QWER'[index]}</strong>

            <h3>
                ${escapeHTML(spell.name)}
            </h3>

            <p>
                ${escapeHTML(spell.description)}
            </p>

        </div>

    </div>

`).join('');

return passive + spells;
```

}

# /*

# BUILD

*/

function renderItems(version, champion) {

```
const build = builds[champion.name];

const items = build?.items || [

    ['Inicio', '1055', 'Espada de Doran'],
    ['Botas', '3006', 'Botas'],
    ['Principal', '3078', 'Trinidad'],
    ['Defensivo', '3053', 'Calibrador de Sterak'],
    ['Situacional', '6333', 'Armadura'],
    ['Final', '3156', 'Velo del hada de la muerte']

];

return items.map(([type, itemId, name]) => `

    <div class="item">

        <img
            src="${DD}/cdn/${version}/img/item/${itemId}.png"
            alt="${escapeHTML(name)}"
        >

        <div>

            <small>
                ${escapeHTML(type)}
            </small>

            <strong>
                ${escapeHTML(name)}
            </strong>

        </div>

    </div>

`).join('');
```

}

# /*

# INICIO

*/

async function init() {

```
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
                    '${DD}/cdn/img/champion/splas
```

