import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// cargar recursos inline para simplicidad; puedes moverlos a archivos JSON si prefieres
const resources = {
  en: {
    translation: {
      "app.title": "Aliens in Valheim",
      "tabs": {
        "intro": "Introduction",
        "items": "Items & Rules",
        "phase1": "Phase 1 - Abduction",
        "phase2": "Phase 2 - Attack",
        "phase3": "Phase 3 - Signals",
        "phase4": "Phase 4 - Hive"
      },
      "intro": {
        "summaryTitle": "Summary",
        "summaryText": "Aliens in Valheim is a narrative mod divided into phases combining science fiction with Norse mythology. Content evolves progressively emphasizing cooperation, progression and global server events."
      },
      "items": {
        "worldTitle": "World items",
        "characters": "Characters: grey aliens, mutated humanoids and biomechanical soldiers.",
        "objects": "Objects: tech fragments, experimental weapons (beams, shields, control chips), narrative progression items.",
        "rulesTitle": "Business rules",
        "rules": [
          "Detect solitary players for events.",
          "Cooperation as core mechanic.",
          "Linear phase progression synchronized with the server."
        ]
      },
      "phase1": {
        "title": "Phase 1 - Abduction",
        "text": "At dark nights a UFO appears that detects solitary players and starts an abduction sequence. The abducted player must resist with a minigame; allies can intervene to save them.",
        "mechanics": "Key mechanics: resistance minigame, cooperative intervention, ship shield, dynamic crash and unpredictable events."
      },
      "phase2": {
        "title": "Phase 2 - Full Attack",
        "text": "After abductions the invasion scales to coordinated attacks against player concentrations: lightning strikes, biotech creatures and elite ground troops with psychic powers."
      },
      "phase3": {
        "title": "Phase 3 - Signals & Exploration",
        "text": "After the attack comes exploration: players must locate signals, fragments and ruins pointing to the hive. Scanning tools, glyph translation and collective discovery progression are introduced."
      },
      "phase4": {
        "title": "Phase 4 - Final Combat: The Hive",
        "text": "The hive is a living megastructure; the final encounter is split into stages with node deactivation mechanics, boss clones combat and a core phase with energy and gravity manipulation.",
        "rewards": "Rewards: epic alien armors, tech weapons and the secret legendary weapon \"Thor's Hammer\"."
      },
      "lang.en": "EN",
      "lang.es": "ES"
    }
  },
  es: {
    translation: {
      "app.title": "Aliens in Valheim",
      "tabs": {
        "intro": "Introducción",
        "items": "Items & Reglas",
        "phase1": "Fase 1 - Abducción",
        "phase2": "Fase 2 - Ataque",
        "phase3": "Fase 3 - Señales",
        "phase4": "Fase 4 - Colmena"
      },
      "intro": {
        "summaryTitle": "Resumen",
        "summaryText": "Aliens in Valheim es un mod narrativo dividido en fases que integra ciencia ficción con la mitología nórdica. El contenido evoluciona progresivamente y enfatiza la cooperación, la progresión y eventos globales en el servidor."
      },
      "items": {
        "worldTitle": "Items del mundo",
        "characters": "Personajes: alienígenas grises, humanoides mutados y soldados biomecánicos.",
        "objects": "Objetos: fragmentos tecnológicos, armas experimentales (rayos, escudos, chips de control), ítems de progresión narrativa.",
        "rulesTitle": "Reglas de negocio",
        "rules": [
          "Detección de jugadores solitarios para eventos.",
          "Cooperación como mecánica central.",
          "Progresión lineal de fases sincronizada con el servidor."
        ]
      },
      "phase1": {
        "title": "Fase 1 - Abducción",
        "text": "Durante noches oscuras aparece un OVNI que detecta jugadores solitarios y comienza una secuencia de abducción. El jugador abducido debe resistir mediante un minijuego; aliados pueden intervenir para salvarlo.",
        "mechanics": "Mecánicas clave: minijuego de resistencia, intervención cooperativa, escudo de la nave, crash dinámico y eventos impredecibles."
      },
      "phase2": {
        "title": "Fase 2 - Ataque Total",
        "text": "Tras las abducciones la invasión escala a ataques coordinados contra concentraciones de jugadores: lluvia de rayos, criaturas biotecnológicas y tropas élite en tierra con poderes psíquicos."
      },
      "phase3": {
        "title": "Fase 3 - Señales y Exploración",
        "text": "Tras el ataque viene la exploración: los jugadores deben localizar señales, fragmentos y ruinas que apuntan a la colmena. Se introducen herramientas de escaneo, traducción de glifos y una progresión colectiva de descubrimiento."
      },
      "phase4": {
        "title": "Fase 4 - Combate Final: La Colmena",
        "text": "La colmena es una megastructura viviente; el enfrentamiento final se divide en etapas con mecánicas de desactivación de nodos, combate contra copias del jefe y una fase núcleo con manipulación de energía y gravedad.",
        "rewards": "Recompensas: armaduras alienígenas épicas, armas tecnológicas y el arma legendaria \"Martillo de Thor\" como recompensa secreta."
      },
      "lang.en": "EN",
      "lang.es": "ES"
    }
  }
};

i18n
  .use(LanguageDetector) // detect browser language (optional)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;