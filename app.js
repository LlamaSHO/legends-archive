/* =========================================================
   LEGENDS // ARCHIVE
   APP.JS - ROSTER + CAMPEONES + BUILDS
   Sin depender de JSON externo para pintar la página
   ========================================================= */

const CHAMPION_IMAGE =
  "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/";

const champions = [
  {
    name: "Aatrox",
    role: "Fighter",
    position: "TOP",
    title: "La Espada de los Oscuros",
    build: ["Eclipse", "Placas del Hombre Muerto", "Cuchilla Negra", "Sterak", "Malla de Espinas"]
  },
  {
    name: "Ahri",
    role: "Mage · Assassin",
    position: "MID",
    title: "La Mujer Zorro de nueve Colas",
    build: ["Malignidad", "Tormenta de Luden", "Sombrero Mortal de Rabadon", "Bastón del Vacío", "Zhonya"]
  },
  {
    name: "Akali",
    role: "Assassin",
    position: "MID",
    title: "La Asesina Sigilosa",
    build: ["Creación de Tormenta", "Crepuscular de Draktharr", "Sombrero Mortal de Rabadon", "Zhonya", "Bastón del Vacío"]
  },
  {
    name: "Akshan",
    role: "Marksman · Assassin",
    position: "MID",
    title: "El Centinela Rebelde",
    build: ["Filo de la Noche", "Huracán de Runaan", "Recuerdos de Lord Dominik", "Filo Infinito", "Ángel Guardián"]
  },
  {
    name: "Alistar",
    role: "Tank · Support",
    position: "SUPPORT",
    title: "El Minotauro",
    build: ["Solari de Hierro", "Promesa del Caballero", "Medallón de los Solari de Hierro", "Malla de Espinas", "Protector de los Sueños"]
  },
  {
    name: "Ambessa",
    role: "Fighter",
    position: "TOP",
    title: "La Matriarca de la Guerra",
    build: ["Cuchilla Negra", "Hidra Profana", "Sterak", "Baile de la Muerte", "Ángel Guardián"]
  },
  {
    name: "Amumu",
    role: "Tank · Mage",
    position: "JUNGLE",
    title: "La Momia Triste",
    build: ["Liandry", "Cetro de Cristal de Rylai", "Corazón de Hielo", "Jak'Sho", "Reloj de Arena de Zhonya"]
  },
  {
    name: "Anivia",
    role: "Mage",
    position: "MID",
    title: "La Criofénix",
    build: ["Compañera de Luden", "Abrazo del Serafín", "Reloj de Arena de Zhonya", "Sombrero Mortal de Rabadon", "Bastón del Vacío"]
  },
  {
    name: "Annie",
    role: "Mage",
    position: "MID",
    title: "La Hija de la Oscuridad",
    build: ["Compañera de Luden", "Llama de las Sombras", "Sombrero Mortal de Rabadon", "Bastón del Vacío", "Zhonya"]
  },
  {
    name: "Aphelios",
    role: "Marksman",
    position: "ADC",
    title: "El Arma de los Devotos",
    build: ["Filo Infinito", "Huracán de Runaan", "Recuerdos de Lord Dominik", "Bloodthirster", "Ángel Guardián"]
  },
  {
    name: "Ashe",
    role: "Marksman · Support",
    position: "ADC",
    title: "La Arquera de Hielo",
    build: ["Espada del Rey Arruinado", "Huracán de Runaan", "Filo Infinito", "Recuerdos de Lord Dominik", "Ángel Guardián"]
  },
  {
    name: "Aurelion Sol",
    role: "Mage",
    position: "MID",
    title: "El Forjador de Estrellas",
    build: ["Compañera de Luden", "Abrazo del Serafín", "Reloj de Arena de Zhonya", "Sombrero Mortal de Rabadon", "Bastón del Vacío"]
  },
  {
    name: "Aurora",
    role: "Mage",
    position: "MID",
    title: "La Bruja entre Mundos",
    build: ["Compañera de Luden", "Llama de las Sombras", "Sombrero Mortal de Rabadon", "Bastón del Vacío", "Zhonya"]
  },
  {
    name: "Azir",
    role: "Mage",
    position: "MID",
    title: "El Emperador de las Arenas",
    build: ["Tormenta de Luden", "Nashor", "Sombrero Mortal de Rabadon", "Bastón del Vacío", "Zhonya"]
  },
  {
    name: "Bard",
    role: "Support",
    position: "SUPPORT",
    title: "El Guardián Trotamundos",
    build: ["Mandato Imperial", "Piedra Lunar", "Redención", "Incensario Ardiente", "Mikael"]
  },
  {
    name: "Bel'Veth",
    role: "Fighter",
    position: "JUNGLE",
    title: "La Emperatriz del Vacío",
    build: ["Hoja del Rey Arruinado", "Cuchilla Negra", "Sterak", "Baile de la Muerte", "Ángel Guardián"]
  },
  {
    name: "Blitzcrank",
    role: "Tank · Support",
    position: "SUPPORT",
    title: "El Gran Golem de Vapor",
    build: ["Guantelete de Hielo", "Solari de Hierro", "Promesa del Caballero", "Malla de Espinas", "Corazón de Hielo"]
  },
  {
    name: "Brand",
    role: "Mage",
    position: "JUNGLE",
    title: "La Llama Inmortal",
    build: ["Liandry", "Cetro de Cristal de Rylai", "Morellonomicon", "Zhonya", "Sombrero Mortal de Rabadon"]
  },
  {
    name: "Braum",
    role: "Tank · Support",
    position: "SUPPORT",
    title: "El Corazón del Fréljord",
    build: ["Solari de Hierro", "Promesa del Caballero", "Mikael", "Redención", "Warmog"]
  },
  {
    name: "Briar",
    role: "Fighter · Assassin",
    position: "JUNGLE",
    title: "El Hambre Contenida",
    build: ["Cuchilla Negra", "Hidra Profana", "Sterak", "Baile de la Muerte", "Ángel Guardián"]
  },
  {
    name: "Caitlyn",
    role: "Marksman",
    position: "ADC",
    title: "La Sheriff de Piltóver",
    build: ["Filo Infinito", "Recuerdos de Lord Dominik", "Huracán de Runaan", "Bloodthirster", "Ángel Guardián"]
  },
  {
    name: "Camille",
    role: "Fighter · Assassin",
    position: "TOP",
    title: "La Sombra de Acero",
    build: ["Trinidad", "Hidra Voraz", "Sterak", "Baile de la Muerte", "Ángel Guardián"]
  },
  {
    name: "Cassiopeia",
    role: "Mage",
    position: "MID",
    title: "El Abrazo de la Serpiente",
    build: ["Abrazo del Serafín", "Liandry", "Rylai", "Zhonya", "Sombrero Mortal de Rabadon"]
  },
  {
    name: "Cho'Gath",
    role: "Tank · Mage",
    position: "TOP",
    title: "El Terror del Vacío",
    build: ["Corazón de Acero", "Guantelete de Hielo", "Jak'Sho", "Warmog", "Malla de Espinas"]
  },
  {
    name: "Corki",
    role: "Marksman",
    position: "MID",
    title: "El Bombardero Osado",
    build: ["Filo Infinito", "Manamune", "Recuerdos de Lord Dominik", "Bloodthirster", "Ángel Guardián"]
  },
  {
    name: "Darius",
    role: "Fighter",
    position: "TOP",
    title: "La Mano de Noxus",
    build: ["Cuchilla Negra", "Fuerza de la Naturaleza", "Sterak", "Baile de la Muerte", "Malla de Espinas"]
  },
  {
    name: "Diana",
    role: "Fighter · Assassin",
    position: "JUNGLE",
    title: "El Desdén de la Luna",
    build: ["Creación de Tormenta", "Nashor", "Reloj de Arena de Zhonya", "Sombrero Mortal de Rabadon", "Bastón del Vacío"]
  },
  {
    name: "Draven",
    role: "Marksman",
    position: "ADC",
    title: "El Glorioso Ejecutor",
    build: ["Bloodthirster", "Filo Infinito", "Recuerdos de Lord Dominik", "Cañón de Fuego Rápido", "Ángel Guardián"]
  },
  {
    name: "Ekko",
    role: "Assassin · Mage",
    position: "JUNGLE",
    title: "El Muchacho que Quebró el Tiempo",
    build: ["Creación de Tormenta", "Lich Bane", "Sombrero Mortal de Rabadon", "Zhonya", "Bastón del Vacío"]
  },
  {
    name: "Elise",
    role: "Mage · Assassin",
    position: "JUNGLE",
    title: "La Reina Araña",
    build: ["Compañera de Luden", "Lich Bane", "Reloj de Arena de Zhonya", "Sombrero Mortal de Rabadon", "Bastón del Vacío"]
  },
  {
    name: "Evelynn",
    role: "Assassin · Mage",
    position: "JUNGLE",
    title: "El Abrazo de la Agonía",
    build: ["Creación de Tormenta", "Lich Bane", "Sombrero Mortal de Rabadon", "Bastón del Vacío", "Zhonya"]
  },
  {
    name: "Ezreal",
    role: "Marksman · Mage",
    position: "ADC",
    title: "El Explorador Pródigo",
    build: ["Manamune", "Trinidad", "Serylda", "Filo de la Noche", "Ángel Guardián"]
  },
  {
    name: "Fiddlesticks",
    role: "Mage",
    position: "JUNGLE",
    title: "El Terror Ancestral",
    build: ["Compañera de Luden", "Zhonya", "Sombrero Mortal de Rabadon", "Bastón del Vacío", "Morellonomicon"]
  },
  {
    name: "Fiora",
    role: "Fighter",
    position: "TOP",
    title: "La Gran Duelista",
    build: ["Hidra Voraz", "Trinidad", "Manamune", "Baile de la Muerte", "Ángel Guardián"]
  },
  {
    name: "Fizz",
    role: "Assassin · Fighter",
    position: "MID",
    title: "El Bromista de las Mareas",
    build: ["Creación de Tormenta", "Lich Bane", "Zhonya", "Sombrero Mortal de Rabadon", "Bastón del Vacío"]
  },
  {
    name: "Galio",
    role: "Tank · Mage",
    position: "MID",
    title: "El Coloso",
    build: ["Compañera de Luden", "Reloj de Arena de Zhonya", "Corazón de Hielo", "Jak'Sho", "Placa del Hombre Muerto"]
  },
  {
    name: "Gangplank",
    role: "Fighter",
    position: "TOP",
    title: "El Azote de los Mares",
    build: ["Manamune", "Filo Infinito", "Recuerdos de Lord Dominik", "Trinidad", "Ángel Guardián"]
  },
  {
    name: "Garen",
    role: "Fighter",
    position: "TOP",
    title: "El Poder de Demacia",
    build: ["Fuerza de la Naturaleza", "Cuchilla Negra", "Placa del Hombre Muerto", "Sterak", "Malla de Espinas"]
  },
  {
    name: "Gnar",
    role: "Fighter · Tank",
    position: "TOP",
    title: "El Eslabón Perdido",
    build: ["Cuchilla Negra", "Guantelete de Hielo", "Sterak", "Fuerza de la Naturaleza", "Malla de Espinas"]
  },
  {
    name: "Gragas",
    role: "Fighter · Mage",
    position: "TOP",
    title: "El Camorrista",
    build: ["Creación de Tormenta", "Lich Bane", "Zhonya", "Sombrero Mortal de Rabadon", "Bastón del Vacío"]
  },
  {
    name: "Graves",
    role: "Marksman",
    position: "JUNGLE",
    title: "El Forajido",
    build: ["Cuchilla Negra", "Filo de la Noche", "Bloodthirster", "Filo Infinito", "Ángel Guardián"]
  },
  {
    name: "Gwen",
    role: "Fighter · Mage",
    position: "TOP",
    title: "La Costurera Consagrada",
    build: ["Nashor", "Creación de Tormenta", "Reloj de Arena de Zhonya", "Sombrero Mortal de Rabadon", "Bastón del Vacío"]
  },
  {
    name: "Hecarim",
    role: "Fighter",
    position: "JUNGLE",
    title: "La Sombra de la Guerra",
    build: ["Manamune", "Trinidad", "Cuchilla Negra", "Sterak", "Baile de la Muerte"]
  },
  {
    name: "Heimerdinger",
    role: "Mage · Support",
    position: "MID",
    title: "El Inventor Inspirado",
    build: ["Liandry", "Rylai", "Zhonya", "Morellonomicon", "Sombrero Mortal de Rabadon"]
  },
  {
    name: "Hwei",
    role: "Mage",
    position: "MID",
    title: "El Artista Visionario",
    build: ["Compañera de Luden", "Rylai", "Zhonya", "Bastón del Vacío", "Sombrero Mortal de Rabadon"]
  },
  {
    name: "Illaoi",
    role: "Fighter",
    position: "TOP",
    title: "La Sacerdotisa del Kraken",
    build: ["Cuchilla Negra", "Desgarrador Divino", "Sterak", "Baile de la Muerte", "Malla de Espinas"]
  },
  {
    name: "Irelia",
    role: "Fighter · Assassin",
    position: "TOP",
    title: "La Bailarina de las Cuchillas",
    build: ["Hoja del Rey Arruinado", "Trinidad", "Wit's End", "Baile de la Muerte", "Ángel Guardián"]
  },
  {
    name: "Ivern",
    role: "Support · Mage",
    position: "JUNGLE",
    title: "El Padre Arborescente",
    build: ["Mandato Imperial", "Piedra Lunar", "Redención", "Incensario Ardiente", "Mikael"]
  },
  {
    name: "Janna",
    role: "Support · Mage",
    position: "SUPPORT",
    title: "La Furia de la Tormenta",
    build: ["Helia de los Solari", "Incensario Ardiente", "Redención", "Piedra Lunar", "Mikael"]
  },
  {
    name: "Jarvan IV",
    role: "Tank · Fighter",
    position: "JUNGLE",
    title: "El Ejemplo de Demacia",
    build: ["Cuchilla Negra", "Goredrinker", "Sterak", "Placa del Hombre Muerto", "Ángel Guardián"]
  },
  {
    name: "Jax",
    role: "Fighter",
    position: "TOP",
    title: "El Gran Maestro de Armas",
    build: ["Trinidad", "Hoja del Rey Arruinado", "Sterak", "Reloj de Arena de Zhonya", "Ángel Guardián"]
  },
  {
    name: "Jayce",
    role: "Artillery · Fighter",
    position: "TOP",
    title: "El Defensor del Mañana",
    build: ["Manamune", "Cuchilla Negra", "Serylda", "Filo de la Noche", "Ángel Guardián"]
  },
  {
    name: "Jhin",
    role: "Marksman",
    position: "ADC",
    title: "El Virtuoso",
    build: ["Filo Infinito", "Cañón de Fuego Rápido", "Recuerdos de Lord Dominik", "Bloodthirster", "Ángel Guardián"]
  },
  {
    name: "Jinx",
    role: "Marksman",
    position: "ADC",
    title: "La Bala Perdida",
    build: ["Filo Infinito", "Huracán de Runaan", "Recuerdos de Lord Dominik", "Bloodthirster", "Ángel Guardián"]
  },
  {
    name: "K'Sante",
    role: "Tank · Fighter",
    position: "TOP",
    title: "El Orgullo de Nazumah",
    build: ["Guantelete de Hielo", "Jak'Sho", "Sterak", "Fuerza de la Naturaleza", "Malla de Espinas"]
  },
  {
    name: "Kai'Sa",
    role: "Marksman",
    position: "ADC",
    title: "La Hija del Vacío",
    build: ["Navaja de Guinsoo", "Hoja del Rey Arruinado", "Filo Infinito", "Huracán de Runaan", "Ángel Guardián"]
  },
  {
    name: "Kalista",
    role: "Marksman",
    position: "ADC",
    title: "La Lanza de la Venganza",
    build: ["Hoja del Rey Arruinado", "Huracán de Runaan", "Guinsoo", "Filo Infinito", "Ángel Guardián"]
  },
  {
    name: "Karma",
    role: "Mage · Support",
    position: "SUPPORT",
    title: "La Iluminada",
    build: ["Mandato Imperial", "Piedra Lunar", "Incensario Ardiente", "Redención", "Mikael"]
  },
  {
    name: "Karthus",
    role: "Mage",
    position: "JUNGLE",
    title: "El Canto de la Muerte",
    build: ["Liandry", "Abrazo del Serafín", "Zhonya", "Sombrero Mortal de Rabadon", "Bastón del Vacío"]
  },
  {
    name: "Kassadin",
    role: "Assassin · Mage",
    position: "MID",
    title: "El Caminante del Vacío",
    build: ["Compañera de Luden", "Abrazo del Serafín", "Reloj de Arena de Zhonya", "Sombrero Mortal de Rabadon", "Bastón del Vacío"]
  },
  {
    name: "Katarina",
    role: "Assassin · Mage",
    position: "MID",
    title: "La Daga Siniestra",
    build: ["Creación de Tormenta", "Nashor", "Reloj de Arena de Zhonya", "Sombrero Mortal de Rabadon", "Bastón del Vacío"]
  },
  {
    name: "Kayle",
    role: "Fighter · Mage",
    position: "TOP",
    title: "La Justa",
    build: ["Nashor", "Guinsoo", "Sombrero Mortal de Rabadon", "Reloj de Arena de Zhonya", "Bastón del Vacío"]
  },
  {
    name: "Kayn",
    role: "Fighter · Assassin",
    position: "JUNGLE",
    title: "El Segador de las Sombras",
    build: ["Manamune", "Cuchilla Negra", "Filo de la Noche", "Ángel Guardián", "Baile de la Muerte"]
  },
  {
    name: "Kennen",
    role: "Mage",
    position: "TOP",
    title: "El Corazón de la Tempestad",
    build: ["Creación de Tormenta", "Zhonya", "Rabadon", "Bastón del Vacío", "Rylai"]
  },
  {
    name: "Kha'Zix",
    role: "Assassin",
    position: "JUNGLE",
    title: "El Saqueador del Vacío",
    build: ["Manamune", "Filo de la Noche", "Cuchilla Negra", "Ángel Guardián", "Serylda"]
  },
  {
    name: "Kindred",
    role: "Marksman",
    position: "JUNGLE",
    title: "Los Cazadores Eternos",
    build: ["Hoja del Rey Arruinado", "Huracán de Runaan", "Filo Infinito", "Recuerdos de Lord Dominik", "Ángel Guardián"]
  },
  {
    name: "Kled",
    role: "Fighter",
    position: "TOP",
    title: "El Jinete Cascarrabias",
    build: ["Cuchilla Negra", "Hidra Profana", "Sterak", "Baile de la Muerte", "Ángel Guardián"]
  },
  {
    name: "Kog'Maw",
    role: "Marksman · Mage",
    position: "ADC",
    title: "La Boca del Abismo",
    build: ["Guinsoo", "Huracán de Runaan", "Hoja del Rey Arruinado", "Wit's End", "Terminus"]
  },
  {
    name: "LeBlanc",
    role: "Mage · Assassin",
    position: "MID",
    title: "La Maquiavélica",
    build: ["Creación de Tormenta", "Lich Bane", "Sombrero Mortal de Rabadon", "Bastón del Vacío", "Zhonya"]
  },
  {
    name: "Lee Sin",
    role: "Fighter",
    position: "JUNGLE",
    title: "El Monje Ciego",
    build: ["Cuchilla Negra", "Goredrinker", "Sterak", "Baile de la Muerte", "Ángel Guardián"]
  },
  {
    name: "Leona",
    role: "Tank · Support",
    position: "SUPPORT",
    title: "El Amanecer Radiante",
    build: ["Solari de Hierro", "Promesa del Caballero", "Malla de Espinas", "Warmog", "Corazón de Hielo"]
  },
  {
    name: "Lillia",
    role: "Fighter · Mage",
    position: "JUNGLE",
    title: "La Flor Tímida",
    build: ["Liandry", "Rylai", "Zhonya", "Abrazo del Serafín", "Sombrero Mortal de Rabadon"]
  },
  {
    name: "Lissandra",
    role: "Mage",
    position: "MID",
    title: "La Bruja de Hielo",
    build: ["Compañera de Luden", "Zhonya", "Rylai", "Bastón del Vacío", "Rabadon"]
  },
  {
    name: "Lucian",
    role: "Marksman",
    position: "ADC",
    title: "El Purificador",
    build: ["Filo Infinito", "Navaja de Statikk", "Recuerdos de Lord Dominik", "Bloodthirster", "Ángel Guardián"]
  },
  {
    name: "Lulu",
    role: "Support · Mage",
    position: "SUPPORT",
    title: "La Hechicera Hada",
    build: ["Incensario Ardiente", "Piedra Lunar", "Redención", "Mikael", "Ardent"]
  },
  {
    name: "Lux",
    role: "Mage · Support",
    position: "MID",
    title: "La Dama Luminosa",
    build: ["Compañera de Luden", "Llama de las Sombras", "Rabadon", "Bastón del Vacío", "Zhonya"]
  },
  {
    name: "Malphite",
    role: "Tank · Fighter",
    position: "TOP",
    title: "El Fragmento del Monolito",
    build: ["Guantelete de Hielo", "Jak'Sho", "Malla de Espinas", "Fuerza de la Naturaleza", "Warmog"]
  },
  {
    name: "Malzahar",
    role: "Mage",
    position: "MID",
    title: "El Profeta del Vacío",
    build: ["Liandry", "Rylai", "Abrazo del Serafín", "Rabadon", "Bastón del Vacío"]
  },
  {
    name: "Maokai",
    role: "Tank · Support",
    position: "SUPPORT",
    title: "El Treant Retorcido",
    build: ["Solari de Hierro", "Promesa del Caballero", "Jak'Sho", "Warmog", "Malla de Espinas"]
  },
  {
    name: "Master Yi",
    role: "Assassin · Fighter",
    position: "JUNGLE",
    title: "El Espadachín Wuju",
    build: ["Hoja del Rey Arruinado", "Guinsoo", "Terminus", "Sterak", "Ángel Guardián"]
  },
  {
    name: "Mel",
    role: "Mage",
    position: "MID",
    title: "La Consejera",
    build: ["Compañera de Luden", "Llama de las Sombras", "Rabadon", "Bastón del Vacío", "Zhonya"]
  },
  {
    name: "Milio",
    role: "Support",
    position: "SUPPORT",
    title: "La Llama Gentil",
    build: ["Helia de los Solari", "Incensario Ardiente", "Piedra Lunar", "Redención", "Mikael"]
  },
  {
    name: "Miss Fortune",
    role: "Marksman",
    position: "ADC",
    title: "La Cazarrecompensas",
    build: ["Filo Infinito", "Recuerdos de Lord Dominik", "Bloodthirster", "Cañón de Fuego Rápido", "Ángel Guardián"]
  },
  {
    name: "Mordekaiser",
    role: "Fighter · Mage",
    position: "TOP",
    title: "El Revenant de Hierro",
    build: ["Creación de Tormenta", "Rylai", "Riftmaker", "Zhonya", "Rabadon"]
  },
  {
    name: "Morgana",
    role: "Mage · Support",
    position: "SUPPORT",
    title: "La Caída",
    build: ["Liandry", "Rylai", "Zhonya", "Morellonomicon", "Rabadon"]
  },
  {
    name: "Naafiri",
    role: "Assassin",
    position: "MID",
    title: "Los Sabuesos de Hierro",
    build: ["Cuchilla Negra", "Filo de la Noche", "Serylda", "Ángel Guardián", "Baile de la Muerte"]
  },
  {
    name: "Nami",
    role: "Support · Mage",
    position: "SUPPORT",
    title: "La Invocadora de Mareas",
    build: ["Mandato Imperial", "Incensario Ardiente", "Piedra Lunar", "Redención", "Mikael"]
  },
  {
    name: "Nasus",
    role: "Fighter · Tank",
    position: "TOP",
    title: "El Curador de las Arenas",
    build: ["Guantelete de Hielo", "Desgarrador Divino", "Corazón de Hielo", "Fuerza de la Naturaleza", "Sterak"]
  },
  {
    name: "Nautilus",
    role: "Tank · Support",
    position: "SUPPORT",
    title: "El Titán de las Profundidades",
    build: ["Solari de Hierro", "Promesa del Caballero", "Corazón de Hielo", "Malla de Espinas", "Warmog"]
  },
  {
    name: "Neeko",
    role: "Mage",
    position: "MID",
    title: "La Camaleona Curiosa",
    build: ["Compañera de Luden", "Zhonya", "Rylai", "Rabadon", "Bastón del Vacío"]
  },
  {
    name: "Nidalee",
    role: "Assassin · Mage",
    position: "JUNGLE",
    title: "La Cazadora Bestial",
    build: ["Compañera de Luden", "Lich Bane", "Zhonya", "Rabadon", "Bastón del Vacío"]
  },
  {
    name: "Nilah",
    role: "Marksman",
    position: "ADC",
    title: "La Alegría Desatada",
    build: ["Filo Infinito", "Bloodthirster", "Recuerdos de Lord Dominik", "Navaja de Statikk", "Ángel Guardián"]
  },
  {
    name: "Nocturne",
    role: "Assassin · Fighter",
    position: "JUNGLE",
    title: "La Pesadilla Eterna",
    build: ["Manamune", "Cuchilla Negra", "Filo de la Noche", "Baile de la Muerte", "Ángel Guardián"]
  },
  {
    name: "Nunu & Willump",
    role: "Tank · Fighter",
    position: "JUNGLE",
    title: "El Niño y su Yeti",
    build: ["Jak'Sho", "Corazón de Hielo", "Rylai", "Fuerza de la Naturaleza", "Warmog"]
  },
  {
    name: "Olaf",
    role: "Fighter",
    position: "TOP",
    title: "El Berserker",
    build: ["Cuchilla Negra", "Sterak", "Baile de la Muerte", "Fuerza de la Naturaleza", "Ángel Guardián"]
  },
  {
    name: "Orianna",
    role: "Mage",
    position: "MID",
    title: "La Dama Mecánica",
    build: ["Compañera de Luden", "Rabadon", "Bastón del Vacío", "Zhonya", "Llama de las Sombras"]
  },
  {
    name: "Ornn",
    role: "Tank · Fighter",
    position: "TOP",
    title: "El Fuego bajo la Montaña",
    build: ["Jak'Sho", "Guantelete de Hielo", "Warmog", "Malla de Espinas", "Fuerza de la Naturaleza"]
  },
  {
    name: "Pantheon",
    role: "Fighter · Assassin",
    position: "TOP",
    title: "La Lanza Inquebrantable",
    build: ["Cuchilla Negra", "Manamune", "Filo de la Noche", "Ángel Guardián", "Serylda"]
  },
  {
    name: "Poppy",
    role: "Tank · Fighter",
    position: "TOP",
    title: "La Guardiana del Martillo",
    build: ["Guantelete de Hielo", "Jak'Sho", "Malla de Espinas", "Warmog", "Fuerza de la Naturaleza"]
  },
  {
    name: "Pyke",
    role: "Support · Assassin",
    position: "SUPPORT",
    title: "El Destripador del Muelle Rojo",
    build: ["Filo de la Noche", "Umbral Glaive", "Youmuu", "Serylda", "Ángel Guardián"]
  },
  {
    name: "Qiyana",
    role: "Assassin",
    position: "MID",
    title: "La Emperatriz de los Elementos",
    build: ["Manamune", "Filo de la Noche", "Serylda", "Cuchilla Negra", "Ángel Guardián"]
  },
  {
    name: "Quinn",
    role: "Marksman",
    position: "TOP",
    title: "Las Alas de Demacia",
    build: ["Filo Infinito", "Cañón de Fuego Rápido", "Recuerdos de Lord Dominik", "Bloodthirster", "Ángel Guardián"]
  },
  {
    name: "Rakan",
    role: "Support",
    position: "SUPPORT",
    title: "El Encantador",
    build: ["Solari de Hierro", "Promesa del Caballero", "Redención", "Mikael", "Piedra Lunar"]
  },
  {
    name: "Rammus",
    role: "Tank",
    position: "JUNGLE",
    title: "El Armadurillo",
    build: ["Malla de Espinas", "Corazón de Hielo", "Jak'Sho", "Warmog", "Fuerza de la Naturaleza"]
  },
  {
    name: "Rek'Sai",
    role: "Fighter",
    position: "JUNGLE",
    title: "La Excavadora del Vacío",
    build: ["Cuchilla Negra", "Sterak", "Baile de la Muerte", "Placa del Hombre Muerto", "Ángel Guardián"]
  },
  {
    name: "Rell",
    role: "Tank · Support",
    position: "SUPPORT",
    title: "La Doncella de Hierro",
    build: ["Solari de Hierro", "Promesa del Caballero", "Malla de Espinas", "Jak'Sho", "Warmog"]
  },
  {
    name: "Renata Glasc",
    role: "Support",
    position: "SUPPORT",
    title: "La Baronesa Química",
    build: ["Mandato Imperial", "Redención", "Piedra Lunar", "Mikael", "Incensario Ardiente"]
  },
  {
    name: "Renekton",
    role: "Fighter",
    position: "TOP",
    title: "El Carnicero de las Arenas",
    build: ["Cuchilla Negra", "Hidra Profana", "Sterak", "Baile de la Muerte", "Ángel Guardián"]
  },
  {
    name: "Rengar",
    role: "Assassin · Fighter",
    position: "JUNGLE",
    title: "El Orgullo Acechante",
    build: ["Filo de la Noche", "Youmuu", "Serylda", "Ángel Guardián", "Cuchilla Negra"]
  },
  {
    name: "Riven",
    role: "Fighter · Assassin",
    position: "TOP",
    title: "La Exiliada",
    build: ["Cuchilla Negra", "Hidra Profana", "Baile de la Muerte", "Sterak", "Ángel Guardián"]
  },
  {
    name: "Rumble",
    role: "Fighter · Mage",
    position: "TOP",
    title: "La Amenaza Mecánica",
    build: ["Liandry", "Rylai", "Zhonya", "Rabadon", "Bastón del Vacío"]
  },
  {
    name: "Ryze",
    role: "Mage",
    position: "MID",
    title: "El Hechicero Rúnico",
    build: ["Abrazo del Serafín", "Riftmaker", "Zhonya", "Rabadon", "Bastón del Vacío"]
  },
  {
    name: "Samira",
    role: "Marksman",
    position: "ADC",
    title: "La Rosa del Desierto",
    build: ["Filo Infinito", "Bloodthirster", "Recuerdos de Lord Dominik", "Ángel Guardián", "Cuchilla Negra"]
  },
  {
    name: "Sejuani",
    role: "Tank · Fighter",
    position: "JUNGLE",
    title: "La Furia del Norte",
    build: ["Jak'Sho", "Corazón de Hielo", "Malla de Espinas", "Warmog", "Fuerza de la Naturaleza"]
  },
  {
    name: "Senna",
    role: "Marksman · Support",
    position: "SUPPORT",
    title: "La Redentora",
    build: ["Filo de la Noche", "Huracán de Runaan", "Filo Infinito", "Recuerdos de Lord Dominik", "Ángel Guardián"]
  },
  {
    name: "Seraphine",
    role: "Mage · Support",
    position: "SUPPORT",
    title: "La Cantante Soñadora",
    build: ["Helia de los Solari", "Mandato Imperial", "Redención", "Piedra Lunar", "Mikael"]
  },
  {
    name: "Sett",
    role: "Fighter",
    position: "TOP",
    title: "El Jefe",
    build: ["Cuchilla Negra", "Sterak", "Baile de la Muerte", "Placa del Hombre Muerto", "Malla de Espinas"]
  },
  {
    name: "Shaco",
    role: "Assassin",
    position: "JUNGLE",
    title: "El Bufón Siniestro",
    build: ["Creación de Tormenta", "Lich Bane", "Filo de la Noche", "Zhonya", "Rabadon"]
  },
  {
    name: "Shen",
    role: "Tank",
    position: "TOP",
    title: "El Ojo del Crepúsculo",
    build: ["Guantelete de Hielo", "Jak'Sho", "Malla de Espinas", "Fuerza de la Naturaleza", "Warmog"]
  },
  {
    name: "Shyvana",
    role: "Fighter · Mage",
    position: "JUNGLE",
    title: "La Medio Dragón",
    build: ["Liandry", "Rylai", "Riftmaker", "Zhonya", "Rabadon"]
  },
  {
    name: "Singed",
    role: "Tank · Fighter",
    position: "TOP",
    title: "El Químico Loco",
    build: ["Rylai", "Liandry", "Jak'Sho", "Riftmaker", "Warmog"]
  },
  {
    name: "Sion",
    role: "Tank · Fighter",
    position: "TOP",
    title: "El Coloso No Muerto",
    build: ["Corazón de Acero", "Jak'Sho", "Malla de Espinas", "Warmog", "Fuerza de la Naturaleza"]
  },
  {
    name: "Sivir",
    role: "Marksman",
    position: "ADC",
    title: "La Señora de la Batalla",
    build: ["Filo Infinito", "Huracán de Runaan", "Recuerdos de Lord Dominik", "Bloodthirster", "Ángel Guardián"]
  },
  {
    name: "Skarner",
    role: "Tank · Fighter",
    position: "JUNGLE",
    title: "El Soberano Primigenio",
    build: ["Guantelete de Hielo", "Jak'Sho", "Corazón de Hielo", "Warmog", "Fuerza de la Naturaleza"]
  },
  {
    name: "Smolder",
    role: "Marksman",
    position: "ADC",
    title: "El Dragón Incipiente",
    build: ["Manamune", "Trinidad", "Filo Infinito", "Serylda", "Ángel Guardián"]
  },
  {
    name: "Sona",
    role: "Support · Mage",
    position: "SUPPORT",
    title: "La Virtuosa de las Cuerdas",
    build: ["Helia de los Solari", "Piedra Lunar", "Incensario Ardiente", "Redención", "Mikael"]
  },
  {
    name: "Soraka",
    role: "Support · Mage",
    position: "SUPPORT",
    title: "La Hija de las Estrellas",
    build: ["Helia de los Solari", "Piedra Lunar", "Redención", "Mikael", "Incensario Ardiente"]
  },
  {
    name: "Swain",
    role: "Mage · Fighter",
    position: "SUPPORT",
    title: "El Gran General de Noxus",
    build: ["Liandry", "Rylai", "Zhonya", "Morellonomicon", "Rabadon"]
  },
  {
    name: "Sylas",
    role: "Mage · Fighter",
    position: "MID",
    title: "El Usurpador",
    build: ["Creación de Tormenta", "Zhonya", "Lich Bane", "Rabadon", "Bastón del Vacío"]
  },
  {
    name: "Syndra",
    role: "Mage",
    position: "MID",
    title: "La Soberana Oscura",
    build: ["Compañera de Luden", "Llama de las Sombras", "Rabadon", "Bastón del Vacío", "Zhonya"]
  },
  {
    name: "Tahm Kench",
    role: "Support · Tank",
    position: "SUPPORT",
    title: "El Rey del Río",
    build: ["Guantelete de Hielo", "Warmog", "Jak'Sho", "Malla de Espinas", "Fuerza de la Naturaleza"]
  },
  {
    name: "Taliyah",
    role: "Mage",
    position: "MID",
    title: "La Tejedora de Piedra",
    build: ["Compañera de Luden", "Rylai", "Zhonya", "Rabadon", "Bastón del Vacío"]
  },
  {
    name: "Talon",
    role: "Assassin",
    position: "MID",
    title: "La Sombra de la Espada",
    build: ["Manamune", "Filo de la Noche", "Youmuu", "Serylda", "Ángel Guardián"]
  },
  {
    name: "Taric",
    role: "Support · Fighter",
    position: "SUPPORT",
    title: "El Escudo de Valoran",
    build: ["Solari de Hierro", "Piedra Lunar", "Redención", "Mikael", "Promesa del Caballero"]
  },
  {
    name: "Teemo",
    role: "Marksman · Mage",
    position: "TOP",
    title: "El Explorador Veloz",
    build: ["Liandry", "Nashor", "Rylai", "Rabadon", "Bastón del Vacío"]
  },
  {
    name: "Thresh",
    role: "Support · Tank",
    position: "SUPPORT",
    title: "El Carcelero Implacable",
    build: ["Solari de Hierro", "Promesa del Caballero", "Mikael", "Redención", "Corazón de Hielo"]
  },
  {
    name: "Tristana",
    role: "Marksman",
    position: "ADC",
    title: "La Artillera Yordle",
    build: ["Filo Infinito", "Cañón de Fuego Rápido", "Recuerdos de Lord Dominik", "Bloodthirster", "Ángel Guardián"]
  },
  {
    name: "Trundle",
    role: "Fighter · Tank",
    position: "TOP",
    title: "El Rey de los Trolls",
    build: ["Trinidad", "Cuchilla Negra", "Sterak", "Baile de la Muerte", "Fuerza de la Naturaleza"]
  },
  {
    name: "Tryndamere",
    role: "Fighter · Assassin",
    position: "TOP",
    title: "El Rey Bárbaro",
    build: ["Filo Infinito", "Navaja de Statikk", "Hidra Profana", "Baile de la Muerte", "Ángel Guardián"]
  },
  {
    name: "Twisted Fate",
    role: "Mage",
    position: "MID",
    title: "El Maestro de las Cartas",
    build: ["Trinidad", "Nashor", "Lich Bane", "Rabadon", "Zhonya"]
  },
  {
    name: "Twitch",
    role: "Marksman",
    position: "ADC",
    title: "La Rata Mutada",
    build: ["Huracán de Runaan", "Filo Infinito", "Recuerdos de Lord Dominik", "Bloodthirster", "Ángel Guardián"]
  },
  {
    name: "Udyr",
    role: "Fighter · Tank",
    position: "JUNGLE",
    title: "El Caminante Espiritual",
    build: ["Liandry", "Jak'Sho", "Rylai", "Fuerza de la Naturaleza", "Warmog"]
  },
  {
    name: "Urgot",
    role: "Fighter · Tank",
    position: "TOP",
    title: "El Heraldo de la Química",
    build: ["Cuchilla Negra", "Hidra Profana", "Sterak", "Baile de la Muerte", "Malla de Espinas"]
  },
  {
    name: "Varus",
    role: "Marksman · Mage",
    position: "ADC",
    title: "La Flecha del Castigo",
    build: ["Arcoescudo Inmortal", "Filo Infinito", "Recuerdos de Lord Dominik", "Huracán de Runaan", "Ángel Guardián"]
  },
  {
    name: "Vayne",
    role: "Marksman · Assassin",
    position: "ADC",
    title: "La Cazadora Nocturna",
    build: ["Hoja del Rey Arruinado", "Guinsoo", "Huracán de Runaan", "Filo Infinito", "Ángel Guardián"]
  },
  {
    name: "Veigar",
    role: "Mage",
    position: "MID",
    title: "El Pequeño Maestro del Mal",
    build: ["Compañera de Luden", "Rabadon", "Bastón del Vacío", "Zhonya", "Llama de las Sombras"]
  },
  {
    name: "Vel'Koz",
    role: "Mage",
    position: "SUPPORT",
    title: "El Ojo del Vacío",
    build: ["Compañera de Luden", "Liandry", "Rylai", "Rabadon", "Bastón del Vacío"]
  },
  {
    name: "Vex",
    role: "Mage",
    position: "MID",
    title: "La Tristona",
    build: ["Compañera de Luden", "Llama de las Sombras", "Rabadon", "Bastón del Vacío", "Zhonya"]
  },
  {
    name: "Vi",
    role: "Fighter",
    position: "JUNGLE",
    title: "La Agente de Piltover",
    build: ["Desgarrador Divino", "Cuchilla Negra", "Sterak", "Baile de la Muerte", "Ángel Guardián"]
  },
  {
    name: "Viego",
    role: "Fighter · Assassin",
    position: "JUNGLE",
    title: "El Rey Arruinado",
    build: ["Hoja del Rey Arruinado", "Cuchilla Negra", "Sterak", "Baile de la Muerte", "Ángel Guardián"]
  },
  {
    name: "Viktor",
    role: "Mage",
    position: "MID",
    title: "El Heraldo de las Máquinas",
    build: ["Compañera de Luden", "Llama de las Sombras", "Rabadon", "Bastón del Vacío", "Zhonya"]
  },
  {
    name: "Vladimir",
    role: "Mage",
    position: "MID",
    title: "El Segador Carmesí",
    build: ["Creación de Tormenta", "Riftmaker", "Rabadon", "Zhonya", "Bastón del Vacío"]
  },
  {
    name: "Volibear",
    role: "Fighter · Tank",
    position: "TOP",
    title: "La Tormenta Implacable",
    build: ["Trinidad", "Nashor", "Jak'Sho", "Riftmaker", "Sterak"]
  },
  {
    name: "Warwick",
    role: "Fighter · Tank",
    position: "JUNGLE",
    title: "La Furia Desatada de Zaun",
    build: ["Hoja del Rey Arruinado", "Trinidad", "Sterak", "Baile de la Muerte", "Malla de Espinas"]
  },
  {
    name: "Wukong",
    role: "Fighter",
    position: "JUNGLE",
    title: "El Rey Mono",
    build: ["Cuchilla Negra", "Hidra Profana", "Sterak", "Baile de la Muerte", "Ángel Guardián"]
  },
  {
    name: "Xayah",
    role: "Marksman",
    position: "ADC",
    title: "La Rebelde",
    build: ["Filo Infinito", "Huracán de Runaan", "Recuerdos de Lord Dominik", "Bloodthirster", "Ángel Guardián"]
  },
  {
    name: "Xerath",
    role: "Mage",
    position: "MID",
    title: "El Hechicero Ascendido",
    build: ["Compañera de Luden", "Llama de las Sombras", "Rabadon", "Bastón del Vacío", "Zhonya"]
  },
  {
    name: "Xin Zhao",
    role: "Fighter",
    position: "JUNGLE",
    title: "El Senescal de Demacia",
    build: ["Trinidad", "Cuchilla Negra", "Sterak", "Baile de la Muerte", "Ángel Guardián"]
  },
  {
    name: "Yasuo",
    role: "Fighter · Assassin",
    position: "MID",
    title: "El Imperdonable",
    build: ["Filo Infinito", "Bailarín Espectral", "Bloodthirster", "Recuerdos de Lord Dominik", "Ángel Guardián"]
  },
  {
    name: "Yone",
    role: "Fighter · Assassin",
    position: "MID",
    title: "El Inolvidable",
    build: ["Filo Infinito", "Bailarín Espectral", "Bloodthirster", "Recuerdos de Lord Dominik", "Ángel Guardián"]
  },
  {
    name: "Yorick",
    role: "Fighter",
    position: "TOP",
    title: "El Pastor de Almas",
    build: ["Cuchilla Negra", "Hidra Profana", "Sterak", "Baile de la Muerte", "Ángel Guardián"]
  },
  {
    name: "Yunara",
    role: "Marksman",
    position: "ADC",
    title: "La Virtuosa de Jonia",
    build: ["Filo Infinito", "Huracán de Runaan", "Recuerdos de Lord Dominik", "Bloodthirster", "Ángel Guardián"]
  },
  {
    name: "Yuumi",
    role: "Support",
    position: "SUPPORT",
    title: "La Gata Mágica",
    build: ["Helia de los Solari", "Piedra Lunar", "Incensario Ardiente", "Redención", "Mikael"]
  },
  {
    name: "Zac",
    role: "Tank · Fighter",
    position: "JUNGLE",
    title: "El Arma Secreta",
    build: ["Jak'Sho", "Liandry", "Rylai", "Warmog", "Malla de Espinas"]
  },
  {
    name: "Zed",
    role: "Assassin",
    position: "MID",
    title: "El Maestro de las Sombras",
    build: ["Manamune", "Filo de la Noche", "Serylda", "Youmuu", "Ángel Guardián"]
  },
  {
    name: "Zeri",
    role: "Marksman",
    position: "ADC",
    title: "La Chispa de Zaun",
    build: ["Huracán de Runaan", "Filo Infinito", "Bloodthirster", "Recuerdos de Lord Dominik", "Ángel Guardián"]
  },
  {
    name: "Ziggs",
    role: "Mage",
    position: "MID",
    title: "El Experto en Hexplosivos",
    build: ["Compañera de Luden", "Llama de las Sombras", "Rabadon", "Bastón del Vacío", "Zhonya"]
  },
  {
    name: "Zilean",
    role: "Support · Mage",
    position: "SUPPORT",
    title: "El Guardián del Tiempo",
    build: ["Mandato Imperial", "Redención", "Piedra Lunar", "Mikael", "Rabadon"]
  },
  {
    name: "Zoe",
    role: "Mage",
    position: "MID",
    title: "El Aspecto del Crepúsculo",
    build: ["Compañera de Luden", "Llama de las Sombras", "Rabadon", "Bastón del Vacío", "Zhonya"]
  },
  {
    name: "Zyra",
    role: "Mage · Support",
    position: "SUPPORT",
    title: "La Dama de las Zarzas",
    build: ["Liandry", "Rylai", "Morellonomicon", "Rabadon", "Bastón del Vacío"]
  }
];


/* =========================================================
   UTILIDADES
   ========================================================= */

function slug(name) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/'/g, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();
}


/*
  Data Dragon usa nombres especiales para algunos campeones.
*/
function ddragonName(name) {
  const special = {
    "Wukong": "MonkeyKing",
    "Nunu & Willump": "Nunu",
    "Renata Glasc": "Renata",
    "Bel'Veth": "Belveth",
    "K'Sante": "KSante",
    "Kai'Sa": "Kaisa",
    "Kha'Zix": "Khazix",
    "Kog'Maw": "KogMaw",
    "LeBlanc": "Leblanc",
    "Vel'Koz": "Velkoz",
    "Rek'Sai": "RekSai",
    "Cho'Gath": "Chogath",
    "Tahm Kench": "TahmKench"
  };

  return special[name] || name.replace(/[^a-zA-Z0-9]/g, "");
}


function imageUrl(champion) {
  return CHAMPION_IMAGE + ddragonName(champion.name) + ".png";
}


/* =========================================================
   ROSTER
   ========================================================= */

function renderRoster(list = champions) {

  const container =
    document.querySelector("#champion-grid") ||
    document.querySelector(".champion-grid") ||
    document.querySelector("#champions");

  if (!container) return;

  if (!list.length) {
    container.innerHTML = `
      <div class="empty-state">
        No se encontraron campeones.
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(champion => `
    <a
      class="champion-card"
      href="champion.html?champion=${encodeURIComponent(champion.name)}"
    >
      <div class="champion-card-image">
        <img
          src="${imageUrl(champion)}"
          alt="${champion.name}"
          loading="lazy"
          onerror="this.style.opacity='0'"
        >
      </div>

      <div class="champion-card-content">

        <div class="champion-role">
          ${champion.role}
        </div>

        <h3>${champion.name}</h3>

        <p>${champion.title}</p>

        <div class="champion-position">
          ${champion.position}
        </div>

      </div>
    </a>
  `).join("");
}


/* =========================================================
   FILTROS
   ========================================================= */

function setupFilters() {

  const search =
    document.querySelector("#champion-search") ||
    document.querySelector('input[type="search"]') ||
    document.querySelector('input[placeholder*="campeón"]');

  const buttons =
    document.querySelectorAll(
      "[data-role], [data-position], .filter-button"
    );

  if (search) {
    search.addEventListener("input", () => {

      const query = search.value
        .toLowerCase()
        .trim();

      const filtered = champions.filter(champion =>
        champion.name.toLowerCase().includes(query) ||
        champion.role.toLowerCase().includes(query) ||
        champion.position.toLowerCase().includes(query)
      );

      renderRoster(filtered);
    });
  }

  buttons.forEach(button => {

    button.addEventListener("click", () => {

      buttons.forEach(btn =>
        btn.classList.remove("active")
      );

      button.classList.add("active");

      const filter =
        button.dataset.role ||
        button.dataset.position ||
        button.textContent.trim().toUpperCase();

      if (
        filter === "TODOS" ||
        filter === "ALL"
      ) {
        renderRoster(champions);
        return;
      }

      const filtered = champions.filter(champion =>
        champion.role
          .toUpperCase()
          .includes(filter) ||
        champion.position === filter
      );

      renderRoster(filtered);
    });
  });
}


/* =========================================================
   PÁGINA DE CAMPEÓN
   ========================================================= */

function getChampionFromUrl() {

  const params = new URLSearchParams(
    window.location.search
  );

  return params.get("champion");
}


function renderChampionPage() {

  const container =
    document.querySelector("#champion-detail");

  if (!container) return;

  const requested = getChampionFromUrl();

  if (!requested) {
    container.innerHTML = `
      <div class="empty-state">
        No se ha seleccionado ningún campeón.
      </div>
    `;
    return;
  }

  const champion = champions.find(
    c =>
      c.name.toLowerCase() ===
      requested.toLowerCase()
  );

  if (!champion) {
    container.innerHTML = `
      <div class="empty-state">
        Campeón no encontrado.
      </div>
    `;
    return;
  }

  container.innerHTML = `

    <section class="champion-hero">

      <div class="champion-hero-image">
        <img
          src="${imageUrl(champion)}"
          alt="${champion.name}"
        >
      </div>

      <div class="champion-hero-content">

        <div class="eyebrow">
          ${champion.role}
        </div>

        <h1>${champion.name}</h1>

        <p class="champion-subtitle">
          ${champion.title}
        </p>

        <div class="champion-meta">
          <span>${champion.position}</span>
          <span>${champion.role}</span>
        </div>

      </div>

    </section>


    <section class="champion-section">

      <div class="eyebrow">
        BUILD
      </div>

      <h2>
        Build recomendada
      </h2>

      <p class="section-description">
        Configuración recomendada para
        ${champion.name}.
      </p>

      <div class="build-grid">

        ${champion.build.map((item, index) => `

          <div class="build-item">

            <div class="build-number">
              ${String(index + 1).padStart(2, "0")}
            </div>

            <div class="build-item-info">
              <strong>${item}</strong>
              <span>
                ${index === 0
                  ? "Objeto inicial"
                  : "Objeto recomendado"}
              </span>
            </div>

          </div>

        `).join("")}

      </div>

    </section>


    <section class="champion-section">

      <div class="eyebrow">
        META
      </div>

      <h2>
        Resumen
      </h2>

      <div class="stats-grid">

        <div class="stat-card">
          <span>POSICIÓN</span>
          <strong>${champion.position}</strong>
        </div>

        <div class="stat-card">
          <span>ROL</span>
          <strong>${champion.role}</strong>
        </div>

        <div class="stat-card">
          <span>WIN RATE</span>
          <strong>—</strong>
        </div>

        <div class="stat-card">
          <span>PICK RATE</span>
          <strong>—</strong>
        </div>

      </div>

    </section>

  `;
}


/* =========================================================
   TIER LIST
   ========================================================= */

function renderTierList() {

  const container =
    document.querySelector("#tier-list-grid") ||
    document.querySelector(".tier-list-grid");

  if (!container) return;

  const positions = [
    {
      position: "TOP",
      champions: ["Aatrox", "Darius", "Garen"]
    },
    {
      position: "JUNGLE",
      champions: ["Lee Sin", "Viego", "Jarvan IV"]
    },
    {
      position: "MID",
      champions: ["Ahri", "Orianna", "Syndra"]
    },
    {
      position: "ADC",
      champions: ["Jinx", "Kai'Sa", "Ashe"]
    },
    {
      position: "SUPPORT",
      champions: ["Leona", "Thresh", "Lulu"]
    }
  ];

  container.innerHTML = positions.map(row => `

    <div class="tier-card">

      <div class="tier-rank">
        S
      </div>

      <div class="tier-info">

        <strong>
          ${row.position}
        </strong>

        <span>
          ${row.champions.join(" · ")}
        </span>

      </div>

    </div>

  `).join("");
}


/* =========================================================
   INICIO
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    /*
      MUY IMPORTANTE:
      No hacemos fetch().
      La página puede cargar aunque GitHub,
      Data Dragon o cualquier JSON externo falle.
    */

    renderRoster();
    setupFilters();
    renderChampionPage();
    renderTierList();

    console.log(
      `Legends Archive cargado: ${champions.length} campeones`
    );

  }
);
