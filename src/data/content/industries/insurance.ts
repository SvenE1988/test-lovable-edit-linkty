// ============================================================
// LINKTY - INSURANCE INDUSTRY PAGE CONTENT DATA
// ============================================================

import { sharedCTAs, trustBadges } from "../shared";
import { ASSETS } from "../../assets";

// ==================== HERO ====================
export const hero = {
  id: "insurance-hero",
  headline: "Der KI-Mitarbeiter für",
  headlineAccent: "moderne Versicherungsmakler.",
  description:
    "Telefon-Assistenz & Content-Maschine in einem. Entlasten Sie Ihren Innendienst, beenden Sie den Telefon-Terror und sichern Sie sich 5-10 Stunden Beratungswoche zurück.",

  cta: {
    primary: {
      text: "Demo-Termin vereinbaren",
      href: "#demo",
      variant: "primary",
    },
    secondary: {
      text: "System live testen",
      href: "#story",
      variant: "outline",
    },
  },

  trustBadges: trustBadges.homepage,

  // Professional insurance broker office setting
  backgroundImage: {
    src: ASSETS.heroes.insurance.src,
    alt: "Modernes Maklerbüro",
  },
};

// ==================== PAIN POINTS (Bento Grid) ====================
export const painPoints = {
  id: "pain-points",
  kicker: "HERAUSFORDERUNGEN",
  headline: "Gefangen zwischen",
  headlineAccent: "Service & Akquise?",
  description: "Makler sind heute oft Getriebene ihrer eigenen Prozesse. Erkennen Sie sich wieder?",

  items: [
    {
      id: "phone-terror",
      size: "large", // 2x2
      headline: 'Der "Telefon-Terror"',
      description:
        "Ständige Unterbrechungen durch Routinefragen (Schadenstatus, Adressänderung). Das zerstört den Fokus für komplexe Beratungen.",
      image: ASSETS.sections.insurance.phoneTerror,
      label: "Fokus-Killer #1",
    },
    {
      id: "staff-shortage",
      size: "normal",
      headline: "Fachkräftemangel",
      description:
        "Qualifiziertes Personal für den Innendienst ist kaum zu finden. Der Bestand wächst, aber das Team nicht.",
      bgColor: "slate-800",
    },
    {
      id: "agency-trap",
      size: "normal",
      headline: 'Die "Agentur-Falle"',
      description:
        "Externe Agenturen verstehen den Unterschied zwischen BU und DU nicht. Der Content wirkt unauthentisch.",
      bgColor: "dark",
    },
    {
      id: "visibility",
      size: "wide", // 2x1
      headline: "Sichtbarkeits-Stress",
      description:
        "Nach 10 Stunden Arbeit fehlt die Energie für LinkedIn. Dabei wissen Sie: Ohne Sichtbarkeit keine Neukunden.",
      label: "Keine Zeit",
      bgColor: "cyan-to-dark",
    },
  ],
};

// ==================== STORY (Monday Morning) ====================
export const mondayStory = {
  id: "story",
  kicker: "VISION",
  headline: "Stell dir vor, es ist Montagmorgen...",
  description:
    "Dein KI-Agent hat am Wochenende drei Schadenmeldungen vorerfasst und zwei Termine für Vorsorgegespräche gebucht. Du setzt dich an den PC, bestätigst mit einem Klick die Content-Vorschläge für die ganze Woche – erstellt in deiner Stimme – und startest entspannt in dein erstes Beratungsgespräch.",

  bullets: [
    "Kein Rückruf-Stau vom Wochenende",
    "Content für die ganze Woche in 5 Minuten geplant",
    "Volle Konzentration auf Umsatz-Termine",
  ],

  cta: { text: "Diese Vision realisieren", href: "#solution" },

  // Relaxed professional with coffee/tablet
  image: ASSETS.sections.insurance.mondayMorning,
  imagePosition: "left" as const, // Strict literal for Zod
};

// ==================== SOLUTION (2 Pillars) ====================
export const solution = {
  id: "solution",
  kicker: "DIE LÖSUNG",
  headline: "KI als Co-Pilot",
  headlineAccent: "für Makler.",
  description:
    "Unsere KI-Lösung Linkty | Voice integriert sich nahtlos in Ihren Workflow. Sie übernimmt die lästigen Telefonate, während Sie die Kontrolle behalten.",

  bullets: [
    "24/7 telefonische Erreichbarkeit ohne Personalaufwand",
    "Strukturierte Qualifizierung nach Makler-Kriterien",
    "Direkte Terminbuchung in Ihren MS Outlook oder Google Kalender",
    "Automatische Übergabe der Gesprächsnotizen in Ihr CRM",
  ],

  cta: { text: "Voice-Demo ansehen", href: "#demo" },

  // Dashboard or Technology visualization
  image: ASSETS.sections.solutions.voice,
  imagePosition: "right" as const, // Strict literal for Zod
};

// ==================== PROCESS TIMELINE ====================
export const process = {
  id: "process",
  kicker: "DER WEG ZUM ERFOLG",
  headline: "In 3 Schritten zur",
  headlineAccent: "digitalen Dominanz.",
  description:
    "Wir wissen, dass du wenig Zeit hast. Deshalb ist unser Onboarding-Prozess auf minimale Zeitinvestition deinerseits optimiert.",

  steps: [
    {
      id: 1,
      period: "Schritt 1",
      headline: "Onboarding & Training",
      description:
        "Wir trainieren die KI auf deine Arbeitsweise und deine Stimme. Wir definieren Fachbegriffe und Gesprächsleitfäden, damit die KI wie ein langjähriger Mitarbeiter klingt.",
      icon: "Settings",
    },
    {
      id: 2,
      period: "Schritt 2",
      headline: "Automatisierung & Go-Live",
      description:
        "Der Sprachassistent übernimmt den Erstkontakt am Telefon. Die Content-KI plant deine Posts vor. Du gibst nur noch final frei.",
      badge: "Sofortige Entlastung",
      icon: "Zap",
    },
    {
      id: 3,
      period: "Schritt 3",
      headline: "Wachstum & Beratung",
      description:
        "Du fokussierst dich zu 100% auf Termine und Beratung. Dein System generiert im Hintergrund Leads, pflegt Bestandskunden und hält dir den Rücken frei.",
      icon: "TrendingUp",
    },
  ],

  bottomText: "Starten Sie jetzt in die Zukunft der Versicherungsberatung.",
  cta: { text: "Strategiegespräch buchen", href: "#demo", variant: "primary" },
};

// ==================== FINAL CTA ====================
export const finalCta = {
  id: "demo",
  headline: "Sichere dir den Vorsprung",
  headlineAccent: "vor den großen Vertrieben.",
  subline:
    "Die Technologie, die bisher nur Konzernen zur Verfügung stand, jetzt für dein Maklerbüro. Inklusive Q1 2026 Beta-Zugang zum Beratungs-Agenten.",
  cta: {
    primary: sharedCTAs.demo,
    secondary: { text: "Fragen stellen", href: "/kontakt" },
  },
  microcopy: "Unverbindliches Gespräch. Wir zeigen dir live, wie die KI Fachfragen beantwortet.",
};

// ==================== EXPORT ====================
export const insurancePageData = {
  hero,
  painPoints,
  mondayStory,
  solution,
  process,
  finalCta,
};
