const DD = 'https://ddragon.leagueoflegends.com';

const id = new URLSearchParams(location.search).get('id');
const page = document.querySelector('#page');

const builds = {

  Aatrox: {
    role: 'TOP',
    items: [
      ['Inicio', '1055', 'Espada de Doran'],
      ['Botas', '3047', 'Placas de Acero'],
      ['Principal', '6692', 'Eclipse'],
      ['Principal', '3071', 'Cuchilla Negra'],
      ['Defensivo', '3053', 'Calibrador de Sterak'],
      ['Final', '6333', 'Cuchilla de la Noche']
    ],
    runes: 'Conquistador · Triunfo · Tenacidad · Último Esfuerzo'
  },

  Ahri: {
    role: 'MID',
    items: [
      ['Inicio', '1056', 'Anillo de Doran'],
      ['Botas', '3020', 'Botas de Hechicero'],
      ['Principal', '6655', 'Malignance'],
      ['Principal', '3089', 'Sombrero Mortal de Rabadon'],
      ['Principal', '4645', 'Tormento de Liandry'],
      ['Final', '3157', 'Reloj de Arena de Zhonya']
    ],
    runes: 'Electrocutar · Impacto Repentino · Colección de Globos · Cazador Definitivo'
  },

  Akali: {
    role: 'MID',
    items: [
      ['Inicio', '1056', 'Anillo de Doran'],
      ['Botas', '3020', 'Botas de Hechicero'],
      ['Principal', '3115', 'Nashor'],
      ['Principal', '4645', 'Tormento de Liandry'],
      ['Principal', '3089', 'Sombrero Mortal de Rabadon'],
      ['Final', '3157', 'Reloj de Arena de Zhonya']
    ],
    runes: 'Electrocutar · Impacto Repentino · Condicionamiento · Sobrecrecimiento'
  },

  Akshan: {
    role: 'MID',
    items: [
      ['Inicio', '1055', 'Espada de Doran'],
      ['Botas', '3006', 'Grebas de Berserker'],
      ['Principal', '6672', 'Kraken Slayer'],
      ['Principal', '6673', 'Arcoescudo Inmortal'],
      ['Principal', '3031', 'Filo Infinito'],
      ['Final', '3036', 'Recuerdos de Lord Dominik']
    ],
    runes: 'Primer golpe · Calzado mágico · Entrega de galletas · Perspicacia cósmica'
  },

  Alistar: {
    role: 'SUPPORT',
    items: [
      ['Inicio', '3865', 'Atlas Mundial'],
      ['Botas', '3117', 'Botas de Movilidad'],
      ['Principal', '3190', 'Medallón de los Solari de Hierro'],
      ['Principal', '3109', 'Convergencia de Zeke'],
      ['Defensivo', '3067', 'Kindlegem'],
      ['Final', '2504', 'Corazón de Acero']
    ],
    runes: 'Guardián · Fuente de Vida · Condicionamiento · Revitalizar'
  },

  Ashe: {
    role: 'ADC',
    items: [
      ['Inicio', '1055', 'Espada de Doran'],
      ['Botas', '3006', 'Grebas de Berserker'],
      ['Principal', '6672', 'Kraken Slayer'],
      ['Principal', '3032', 'Yun Tal'],
      ['Principal', '3031', 'Filo Infinito'],
      ['Final', '3036', 'Recuerdos de Lord Dominik']
    ],
    runes: 'Lluvia de Cuchillas · Sabor a Sangre · Colección de Globos · Cazador de Tesoros'
  },

  Garen: {
    role: 'TOP',
    items: [
      ['Inicio', '1055', 'Espada de Doran'],
      ['Botas', '3047', 'Placas de Acero'],
      ['Principal', '3078', 'Trinidad'],
      ['Principal', '3046', 'Bailarín Espectral'],
      ['Principal', '3748', 'Hidra Titánica'],
      ['Final', '3053', 'Calibrador de Sterak']
    ],
    runes: 'Conquistador · Triunfo · Tenacidad · Último Esfuerzo'
  },

  Jinx: {
    role: 'ADC',
    items: [
      ['Inicio', '1055', 'Espada de Doran'],
      ['Botas', '3006', 'Grebas de Berserker'],
      ['Principal', '3031', 'Filo Infinito'],
      ['Principal', '6672', 'Kraken Slayer'],
      ['Principal', '3085', 'Huracán de Runaan'],
      ['Final', '3036', 'Recuerdos de Lord Dominik']
    ],
    runes: 'Compás Letal · Triunfo · Leyenda: Linaje · Golpe de Gracia'
  },

  Lux: {
    role: 'MID',
    items: [
      ['Inicio', '1056', 'Anillo de Doran'],
      ['Botas', '3020', 'Botas de Hechicero'],
      ['Principal', '6655', 'Malignance'],
      ['Principal', '3089', 'Sombrero Mortal de Rabadon'],
      ['Principal', '4645', 'Tormento de Liandry'],
      ['Final', '3157', 'Reloj de Arena de Zhonya']
    ],
    runes: 'Cometa Arcano · Banda de Maná · Trascendencia · Piroláser'
  },

  Yasuo: {
    role: 'MID',
    items: [
      ['Inicio', '1055', 'Espada de Doran'],
      ['Botas', '3006', 'Grebas de Berserker'],
      ['Principal', '3031', 'Filo Infinito'],
      ['Principal', '6673', 'Arcoescudo Inmortal'],
      ['Principal', '3142', 'Youmuu'],
      ['Final', '6333', 'Cuchilla de la Noche']
    ],
    runes: 'Conquistador · Triunfo · Leyenda: Alacridad · Último Esfuerzo'
  },

  Yone: {
    role: 'MID',
    items: [
      ['Inicio', '1055', 'Espada de Doran'],
      ['Botas', '3006', 'Grebas de Berserker'],
      ['Principal', '6672', 'Kraken Slayer'],
      ['Principal', '3031', 'Filo Infinito'],
      ['Principal', '6673', 'Arcoescudo Inmortal'],
      ['Final', '3053', 'Calibrador de Sterak']
    ],
    runes: 'Conquistador · Triunfo · Leyenda: Alacridad · Último Esfuerzo'
  }

};


/* ============================
   BUILD AUTOMÁTICA
   PARA EL RESTO DE CAMPEONES
============================ */

function automaticBuild(champion) {

  const tags = champion.tags || [];

  if (tags.includes('Mage')) {
    return {
      role: 'MID',
      items: [
        ['Inicio', '1056', 'Anillo de Doran'],
        ['Botas', '3020', 'Botas de Hechicero'],
        ['Principal', '6655', 'Malignance'],
        ['Principal', '3089', 'Sombrero Mortal de Rabadon'],
        ['Principal', '4645', 'Tormento de Liandry'],
        ['Final', '3157', 'Reloj de Arena de Zhonya']
      ],
      runes: 'Cometa Arcano · Banda de Maná · Trascendencia · Piroláser'
    };
  }

  if (tags.includes('Marksman')) {
    return {
      role: 'ADC',
      items: [
        ['Inicio', '1055', 'Espada de Doran'],
        ['Botas', '3006', 'Grebas de Berserker'],
        ['Principal', '3031', 'Filo Infinito'],
        ['Principal', '6672', 'Kraken Slayer'],
        ['Principal', '3085', 'Huracán de Runaan'],
        ['Final', '3036', 'Recuerdos de Lord Dominik']
      ],
      runes: 'Compás Letal · Triunfo · Leyenda: Linaje · Golpe de Gracia'
    };
  }

  if (tags.includes('Tank') && tags.includes('Support')) {
    return {
      role: 'SUPPORT',
      items: [
        ['Inicio', '3865', 'Atlas Mundial'],
        ['Botas', '3117', 'Botas de Movilidad'],
        ['Principal', '3190', 'Medallón de los Solari de Hierro'],
        ['Principal', '3109', 'Convergencia de Zeke'],
        ['Defensivo', '3067', 'Kindlegem'],
        ['Final', '2504', 'Corazón de Acero']
      ],
      runes: 'Guardián · Fuente de Vida · Condicionamiento · Revitalizar'
    };
  }

  if (tags.includes('Assassin')) {
    return {
      role: 'JUNGLE',
      items: [
        ['Inicio', '1035', 'Espada de Espino'],
        ['Botas', '3158', 'Ionianas de Lucidez'],
        ['Principal', '6692', 'Eclipse'],
        ['Principal', '3142', 'Youmuu'],
        ['Principal', '6693', 'Arco Axiomático'],
        ['Final', '3071', 'Cuchilla Negra']
      ],
      runes: 'Electrocutar · Impacto Repentino · Colección de Globos · Cazador Definitivo'
    };
  }

  if (tags.includes('Fighter')) {
    return {
      role: 'TOP',
      items: [
        ['Inicio', '1055', 'Espada de Doran'],
        ['Botas', '3047', 'Placas de Acero'],
        ['Principal', '3078', 'Trinidad'],
        ['Principal', '3071', 'Cuchilla Negra'],
        ['Principal', '3748', 'Hidra Titánica'],
        ['Final', '3053', 'Calibrador de Sterak']
      ],
      runes: 'Conquistador · Triunfo · Tenacidad · Último Esfuerzo'
    };
  }

  return {
    role: 'TOP',
    items: [
      ['Inicio', '1055', 'Espada de Doran'],
      ['Botas', '3047', 'Placas de Acero'],
      ['Principal', '3078', 'Trinidad'],
      ['Principal', '3071', 'Cuchilla Negra'],
      ['Defensivo', '3053', 'Calibrador de Sterak'],
      ['Final', '3748', 'Hidra Titánica']
    ],
    runes: 'Conquistador · Triunfo · Tenacidad · Último Esfuerzo'
  };
}


/* ============================
   CARGAR CAMPEÓN
============================ */

async function loadChampion() {

  if (!id) {
    page.innerHTML = `
      <div class="error-box">
        <h1>Campeón no encontrado</h1>
        <p>No se ha especificado ningún campeón.</p>
      </div>
    `;
    return;
  }

  try {

    const versionResponse = await fetch(
      `${DD}/api/versions.json`
    );

    const versions = await versionResponse.json();
    const version = versions[0];

    const response = await fetch(
      `${DD}/cdn/${version}/data/es_ES/champion/${id}.json`
    );

    if (!response.ok) {
      throw new Error('Campeón no encontrado');
    }

    const data = await response.json();
    const champion = data.data[id];

    if (!champion) {
      throw new Error('Campeón no encontrado');
    }

    const build = builds[champion.name] || automaticBuild(champion);

    renderChampion(champion, build, version);

  } catch (error) {

    console.error(error);

    page.innerHTML = `
      <div class="error-box">
        <h1>No se pudo cargar el campeón</h1>
        <p>${error.message}</p>
        <a href="index.html">Volver a campeones</a>
      </div>
    `;
  }
}


/* ============================
   RENDER
============================ */

function renderChampion(champion, build, version) {

  const image = `${DD}/cdn/${version}/img/champion/${champion.image.full}`;

  const items = build.items.map(item => {

    const [type, id, name] = item;

    return `
      <div class="build-item">
        <img
          src="${DD}/cdn/${version}/img/item/${id}.png"
          alt="${name}"
        >

        <div>
          <span>${type}</span>
          <strong>${name}</strong>
        </div>
      </div>
    `;

  }).join('');

  page.innerHTML = `

    <section class="champion-hero">

      <img
        class="champion-hero-bg"
        src="${image}"
        alt=""
      >

      <div class="champion-hero-content">

        <span class="eyebrow">${build.role}</span>

        <h1>${champion.name}</h1>

        <p class="champion-title">
          ${champion.title}
        </p>

        <p class="champion-blurb">
          ${champion.blurb}
        </p>

      </div>

    </section>


    <main class="champion-page">

      <section class="profile-section">

        <span class="eyebrow">
          PERFIL
        </span>

        <h2>${champion.name}</h2>

        <p class="lore">
          ${champion.lore}
        </p>

        <div class="stats-row">

          <span>
            ATAQUE
            <b>${champion.info.attack}</b>
          </span>

          <span>
            DEFENSA
            <b>${champion.info.defense}</b>
          </span>

          <span>
            MAGIA
            <b>${champion.info.magic}</b>
          </span>

          <span>
            DIFICULTAD
            <b>${champion.info.difficulty}</b>
          </span>

        </div>

      </section>


      <section class="build-section">

        <div class="section-heading">

          <span class="eyebrow">
            BUILD
          </span>

          <h2>
            Build recomendada
          </h2>

          <p>
            Configuración recomendada para ${champion.name}.
          </p>

        </div>


        <div class="build-meta">

          <span>
            POSICIÓN
            <strong>${build.role}</strong>
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
            ${build.runes}
          </p>

        </div>

      </section>

    </main>
  `;
}


loadChampion();
