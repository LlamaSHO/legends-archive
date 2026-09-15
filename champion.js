<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Aatrox // Legends Archive</title>

  <link rel="stylesheet" href="style.css">

  <style>
    /* =========================
       CHAMPION PAGE
       ========================= */

    .champion-page {
      max-width: 980px;
      margin: 0 auto;
      padding: 55px 24px 100px;
    }

    /* HERO */

    .champion-hero {
      position: relative;
      min-height: 430px;
      overflow: hidden;
      border: 1px solid #263650;
      border-radius: 14px;
      background: #080e17;
      box-shadow: 0 25px 70px rgba(0,0,0,.35);
      margin-bottom: 70px;
    }

    .champion-hero-bg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center 25%;
      opacity: .55;
    }

    .champion-hero::after {
      content: "";
      position: absolute;
      inset: 0;
      background:
        linear-gradient(
          90deg,
          rgba(5,10,18,.98) 0%,
          rgba(5,10,18,.82) 38%,
          rgba(5,10,18,.25) 75%,
          rgba(5,10,18,.45) 100%
        ),
        linear-gradient(
          0deg,
          rgba(5,10,18,.95) 0%,
          transparent 55%
        );
    }

    .champion-hero-content {
      position: relative;
      z-index: 2;
      min-height: 430px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 48px;
    }

    .champion-role {
      color: #e7bd61;
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 4px;
      text-transform: uppercase;
      margin-bottom: 14px;
    }

    .champion-name {
      margin: 0;
      color: #f5f3ee;
      font-family: Georgia, "Times New Roman", serif;
      font-size: clamp(48px, 7vw, 82px);
      line-height: .95;
      letter-spacing: -2px;
    }

    .champion-title {
      margin: 18px 0 10px;
      color: #d5d9e1;
      font-size: 18px;
    }

    .champion-position {
      color: #8f9db2;
      font-size: 14px;
    }

    /* SECTIONS */

    .section {
      margin-bottom: 65px;
    }

    .section-label {
      color: #e7bd61;
      font-size: 11px;
      font-weight: 900;
      letter-spacing: 4px;
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    .section-title {
      margin: 0 0 12px;
      color: #f3f1ec;
      font-family: Georgia, "Times New Roman", serif;
      font-size: 38px;
    }

    .section-description {
      margin: 0 0 28px;
      color: #8998ae;
      line-height: 1.7;
    }

    /* INFO */

    .info-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
    }

    .info-card {
      padding: 22px;
      border: 1px solid #263650;
      border-radius: 10px;
      background: linear-gradient(
        145deg,
        #0c1625,
        #09111d
      );
    }

    .info-card span {
      display: block;
      color: #718198;
      font-size: 11px;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    .info-card strong {
      color: #f0eee9;
      font-size: 16px;
    }

    /* BUILD */

    .build-container {
      padding: 26px;
      border: 1px solid #263650;
      border-radius: 14px;
      background: linear-gradient(
        145deg,
        #0c1625,
        #080f19
      );
    }

    .build-path {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 14px;
    }

    .item-card {
      min-width: 0;
      text-align: center;
      padding: 16px 10px 14px;
      border: 1px solid #263650;
      border-radius: 10px;
      background: #091321;
      transition:
        transform .2s ease,
        border-color .2s ease,
        box-shadow .2s ease;
    }

    .item-card:hover {
      transform: translateY(-4px);
      border-color: #cba85b;
      box-shadow: 0 12px 30px rgba(0,0,0,.3);
    }

    /* OBJETO */

    .item-image {
      display: block;
      width: 64px;
      height: 64px;
      margin: 0 auto 12px;

      object-fit: cover;

      border-radius: 8px;
      border: 1px solid #3b4a62;

      box-shadow:
        0 5px 18px rgba(0,0,0,.4);
    }

    .item-number {
      color: #687990;
      font-size: 10px;
      font-weight: 800;
      letter-spacing: 2px;
      margin-bottom: 6px;
    }

    .item-name {
      color: #e9e7e2;
      font-size: 13px;
      font-weight: 700;
      line-height: 1.3;
    }

    .item-type {
      margin-top: 5px;
      color: #718198;
      font-size: 10px;
    }

    /* BOOTS */

    .boots-row {
      display: flex;
      align-items: center;
      gap: 18px;
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid #1d2b40;
    }

    .boots-image {
      width: 56px;
      height: 56px;
      object-fit: cover;
      border-radius: 7px;
      border: 1px solid #3b4a62;
    }

    .boots-info strong {
      display: block;
      color: #eeeae3;
      margin-bottom: 4px;
    }

    .boots-info span {
      color: #718198;
      font-size: 12px;
    }

    /* RUNES */

    .runes-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }

    .rune-card {
      padding: 20px;
      border: 1px solid #263650;
      border-radius: 10px;
      background: #091321;
    }

    .rune-card span {
      display: block;
      color: #718198;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 7px;
    }

    .rune-card strong {
      color: #e9e6df;
    }

    /* DESCRIPTION */

    .lore {
      max-width: 850px;
      color: #a5afbd;
      font-size: 15px;
      line-height: 1.9;
    }

    /* RESPONSIVE */

    @media (max-width: 800px) {

      .champion-page {
        padding: 35px 16px 70px;
      }

      .champion-hero-content {
        padding: 30px;
      }

      .info-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .build-path {
        grid-template-columns: repeat(2, 1fr);
      }

      .runes-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 500px) {

      .champion-hero {
        min-height: 500px;
      }

      .champion-hero-content {
        min-height: 500px;
        padding: 24px;
      }

      .info-grid {
        grid-template-columns: 1fr;
      }

      .build-path {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  </style>
</head>


<body>

  <!-- =========================
       HEADER
       ========================= -->

  <header class="site-header">

    <div class="header-inner">

      <a href="index.html" class="logo">
        LEGENDS <span>//</span> ARCHIVE
      </a>

      <nav>
        <a href="index.html">CAMPEONES</a>
        <a href="index.html#tier-list">TIER LIST</a>
      </nav>

    </div>

  </header>


  <!-- =========================
       MAIN
       ========================= -->

  <main class="champion-page">


    <!-- HERO -->

    <section class="champion-hero">

      <img
        class="champion-hero-bg"
        src="https://ddragon.leagueoflegends.com/cdn/15.18.1/img/champion/Aatrox.png"
        alt="Aatrox"
      >

      <div class="champion-hero-content">

        <div class="champion-role">
          Fighter
        </div>

        <h1 class="champion-name">
          Aatrox
        </h1>

        <p class="champion-title">
          La Espada de los Oscuros
        </p>

        <div class="champion-position">
          TOP · Luchador
        </div>

      </div>

    </section>


    <!-- PERFIL -->

    <section class="section">

      <div class="section-label">
        Perfil
      </div>

      <h2 class="section-title">
        Aatrox
      </h2>

      <p class="lore">
        Aatrox y sus hermanos, otrora respetados defensores de Shurima
        contra el Vacío, acabarían convirtiéndose en una amenaza aún mayor
        para Runaterra. Ahora, atrapado en un arma mágica, busca recuperar
        su libertad y destruir todo aquello que se interponga en su camino.
      </p>

    </section>


    <!-- META -->

    <section class="section">

      <div class="section-label">
        Meta
      </div>

      <h2 class="section-title">
        Resumen
      </h2>

      <div class="info-grid">

        <div class="info-card">
          <span>Posición</span>
          <strong>TOP</strong>
        </div>

        <div class="info-card">
          <span>Clase</span>
          <strong>Luchador</strong>
        </div>

        <div class="info-card">
          <span>Dificultad</span>
          <strong>Media</strong>
        </div>

        <div class="info-card">
          <span>Estilo</span>
          <strong>AD / Sustain</strong>
        </div>

      </div>

    </section>


    <!-- BUILD -->

    <section class="section">

      <div class="section-label">
        Build
      </div>

      <h2 class="section-title">
        Build recomendada
      </h2>

      <p class="section-description">
        Configuración recomendada para Aatrox en TOP.
      </p>


      <div class="build-container">

        <div class="build-path">


          <!-- ITEM 1 -->

          <div class="item-card">

            <div class="item-number">
              01
            </div>

            <img
              class="item-image"
              src="https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/1055.png"
              alt="Espada de Doran"
            >

            <div class="item-name">
              Espada de Doran
            </div>

            <div class="item-type">
              Inicio
            </div>

          </div>


          <!-- ITEM 2 -->

          <div class="item-card">

            <div class="item-number">
              02
            </div>

            <img
              class="item-image"
              src="https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/6692.png"
              alt="Eclipse"
            >

            <div class="item-name">
              Eclipse
            </div>

            <div class="item-type">
              Mítico / Daño
            </div>

          </div>


          <!-- ITEM 3 -->

          <div class="item-card">

            <div class="item-number">
              03
            </div>

            <img
              class="item-image"
              src="https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/3053.png"
              alt="Fuerza de la Trinidad"
            >

            <div class="item-name">
              Sterak
            </div>

            <div class="item-type">
              Vida / Daño
            </div>

          </div>


          <!-- ITEM 4 -->

          <div class="item-card">

            <div class="item-number">
              04
            </div>

            <img
              class="item-image"
              src="https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/3071.png"
              alt="Cuchilla Negra"
            >

            <div class="item-name">
              Cuchilla Negra
            </div>

            <div class="item-type">
              Daño / Vida
            </div>

          </div>


          <!-- ITEM 5 -->

          <div class="item-card">

            <div class="item-number">
              05
            </div>

            <img
              class="item-image"
              src="https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/3748.png"
              alt="Hidra de Titánica"
            >

            <div class="item-name">
              Hidra de Titánica
            </div>

            <div class="item-type">
              Vida / Daño
            </div>

          </div>

        </div>


        <!-- BOTAS -->

        <div class="boots-row">

          <img
            class="boots-image"
            src="https://ddragon.leagueoflegends.com/cdn/15.18.1/img/item/3047.png"
            alt="Placas de Acero"
          >

          <div class="boots-info">

            <strong>
              Placas de Acero
            </strong>

            <span>
              Botas recomendadas contra daño físico.
            </span>

          </div>

        </div>

      </div>

    </section>


    <!-- RUNAS -->

    <section class="section">

      <div class="section-label">
        Runas
      </div>

      <h2 class="section-title">
        Configuración
      </h2>

      <div class="runes-grid">

        <div class="rune-card">
          <span>Principal</span>
          <strong>Conquistador</strong>
        </div>

        <div class="rune-card">
          <span>Secundaria</span>
          <strong>Revestimiento de Huesos</strong>
        </div>

        <div class="rune-card">
          <span>Fragmento</span>
          <strong>Velocidad de ataque</strong>
        </div>

      </div>

    </section>


  </main>


  <!-- =========================
       FOOTER
       ========================= -->

  <footer>

    <div class="footer-title">
      LEGENDS // ARCHIVE
    </div>

    <p>
      Legends Archive isn't endorsed by Riot Games and doesn't reflect
      the views or opinions of Riot Games or anyone officially involved
      in producing or managing Riot Games properties.
    </p>

  </footer>

</body>
</html>
