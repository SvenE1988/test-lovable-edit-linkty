// ============================================================
// LINKTY - ABOUT US PAGE CONTENT DATA
// Alle Sektionen der Über-uns-Seite - Zentral verwaltet
// ============================================================

import { ASSETS } from "../../assets";
import { sharedCTAs } from "../shared";

// ==================== HERO ====================
export const hero = {
  id: "hero",
  kicker: "WIR SIND LINKTY",
  headline: "Technologie für Menschen,",
  headlineAccent: "nicht gegen sie.",
  description:
    "Wir glauben, dass KI kein Selbstzweck ist. Sie ist das Werkzeug, das Teams den Rücken freihält, damit sie sich wieder auf das Wesentliche konzentrieren können: den persönlichen Kontakt.",
  cta: {
    primary: sharedCTAs.demo,
    secondary: { text: "Unsere Geschichte", href: "#story" },
  },
  backgroundImage: ASSETS.heroes.about.src,
};

// ==================== MANIFESTO ====================
export const manifesto = {
  id: "manifesto",
  kicker: "UNSERE PHILOSOPHIE",
  headline: "Software sollte sich anpassen.",
  headlineAccent: "Nicht umgekehrt.",
  paragraphs: [
    "Wir glauben, dass Vertrieb und Marketing keine Silos sein dürfen.",
    "Zu oft sehen wir Teams, die in Tools ertrinken, aber den Überblick verlieren.",
    "Daten liegen verstreut. Follow-ups sind Glückssache. Der Kunde wartet.",
    "Linkty wurde gebaut, um diese Lücke zu schließen.",
    "Nicht mit noch mehr Features. Sondern mit einem klaren Prozess.",
  ],
};

// ==================== BENTO GRID ====================
export const bentoGrid = {
  id: "team",
  kicker: "Das sind wir",
  headline: "Menschen, Werte & Vision",
  items: [
    {
      id: "vision",
      size: "large", // Tall card spanning 2 rows
      variant: "image",
      label: "Vision",
      headline: "Kontrolle statt Blackbox",
      description:
        "KI ist ein Werkzeug, kein Ersatz. Jede Automatisierung läuft nach deinen Regeln – transparent, nachvollziehbar, mit Übergabe an Menschen.",
      image: {
        src: ASSETS.sections.about.vision,
        alt: "Transparente Technologie-Vision",
      },
    },
    {
      id: "sven",
      size: "normal",
      variant: "founder",
      label: "Gründer",
      headline: "Sven Erkens",
      description: "Sales & Tech",
      author: {
        name: "Sven Erkens",
        role: "Co-Founder",
        image: {
          src: ASSETS.team.sven,
          alt: "Sven Erkens - Co-Founder Linkty",
        },
      },
      bgColor: "slate-900", // Uses brand.slate.900
    },
    {
      id: "emir",
      size: "normal",
      variant: "founder",
      label: "Gründer",
      headline: "Emir Corbo",
      description: "Marketing & GTM",
      author: {
        name: "Emir Corbo",
        role: "Co-Founder",
        image: {
          src: ASSETS.team.emir,
          alt: "Emir Corbo - Co-Founder Linkty",
        },
      },
      bgColor: "slate-900",
    },
    {
      id: "quote",
      size: "wide", // Spans 2 columns
      variant: "quote",
      quote:
        "Linkty ist keine Garage-Idee aus dem Silicon Valley. Es ist das Ergebnis von zwei Leuten, die jahrelang im Vertrieb und Marketing gearbeitet haben.",
      bgGradient: "cyan-to-dark", // Maps to a predefined gradient
    },
  ],
};

// ==================== TIMELINE ====================
export const timeline = {
  id: "timeline",
  kicker: "UNSERE GESCHICHTE",
  headline: "Vom Alltag zur",
  headlineAccent: "Plattform.",
  description:
    "Linkty entstand nicht im Vakuum, sondern aus jahrelanger Praxiserfahrung in Vertrieb und Marketing.",

  steps: [
    {
      id: 1,
      period: "2013–2018",
      headline: "Die Grundlagen",
      description:
        "Sven optimiert als HLKS-Techniker erste Prozesse. Emir lernt im Performance-Marketing, wie man Kampagnen für KMU profitabel steuert.",
    },
    {
      id: 2,
      period: "2018–2023",
      headline: "Vertriebsrealität",
      description:
        "Sven baut bei tecis 400+ Kunden auf und später ein PV-Vertriebsteam. Emir spezialisiert sich auf Funnels und digitale Akquise.",
    },
    {
      id: 3,
      period: "2023",
      headline: "Erste Schnittmengen",
      description:
        'Emir startet "Emco | deine.software". Sven entwickelt KI-Chatbots und Voice Agents. Sie arbeiten immer öfter mit den gleichen Technologien.',
    },
    {
      id: 4,
      period: "2024/25",
      headline: "Linkty entsteht",
      description:
        "Aus Sales + Tech (Sven) und Marketing + Go-to-Market (Emir) wird Linkty. Keine Foliensatz-Automatisierung, sondern Lösungen, die im Alltag funktionieren.",
    },
  ],
};

// ==================== FOUNDERS (Detailed) ====================
export const founders = [
  {
    id: "sven",
    name: "Sven Erkens",
    role: "Brückenbauer zwischen Sales & Tech",
    image: {
      src: ASSETS.team.sven,
      alt: "Sven Erkens - Brückenbauer zwischen Sales & Tech",
    },
    description:
      "Fast ein Jahrzehnt Vertrieb, davor Techniker in der Gebäudetechnik. Bei Linkty sorgt er dafür, dass Automatisierungen nicht nur technisch funktionieren, sondern spürbar entlasten.",
  },
  {
    id: "emir",
    name: "Emir Corbo",
    role: "Marketing-Operator & Software-Vertriebler",
    image: {
      src: ASSETS.team.emir,
      alt: "Emir Corbo - Marketing-Operator & Software-Vertriebler",
    },
    description:
      "15+ Jahre Marketing, aber nicht der Konzept-Typ. Bei Linkty baut er die Brücke zwischen Technologie und Markt – direkt, praxisorientiert, ohne Buzzwords.",
  },
];

// ==================== STATS ====================
export const stats = [
  { id: 1, value: 25, suffix: "+", label: "Jahre kombinierte Erfahrung" },
  { id: 2, value: 400, suffix: "+", label: "Kunden persönlich betreut" },
  { id: 3, value: 1000, suffix: "+", label: "Leads vorqualifiziert" },
];

// ==================== FINAL CTA ====================
export const finalCta = {
  id: "about-cta",
  headline: "Bereit für den",
  headlineAccent: "nächsten Schritt?",
  subline:
    "Lass uns in einer kurzen Demo zeigen, wie Linkty dein Team entlastet – von der ersten Anfrage bis zum gebuchten Termin.",
  cta: {
    primary: {
      text: "Demo buchen",
      href: "#demo",
    },
  },
};

// ==================== COMBINED EXPORT ====================
export const aboutPageData = {
  hero,
  manifesto,
  bentoGrid,
  timeline,
  founders,
  stats,
  finalCta,
};
