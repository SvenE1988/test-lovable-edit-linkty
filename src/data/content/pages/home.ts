// ============================================================
// LINKTY - HOMEPAGE CONTENT DATA
// Alle Sektionen der Startseite - Zentral verwaltet
// ============================================================

import { sharedCTAs, trustBadges, industries } from "../shared";
import { ASSETS } from "../../assets";

// ==================== HERO ====================
export const hero = {
  id: 'hero',
  headline: 'Verbinden.\nAutomatisieren.\nWachsen.',
  headlineAccent: 'Dein Unternehmer-Vorsprung',
  description: 'Linkty ist die Plattform für Teams mit Kundenanfragen. Wir strukturieren Anfragen, automatisieren Routine und bringen Kommunikation, Termine und Content in eine Schaltzentrale – KI‑unterstützt, mit klarer Kontrolle.',

  cta: {
    primary: {
      text: "Kostenlose Demo vereinbaren",
      href: "#demo",
      variant: "outline",
      icon: "arrow",
      microcopy: "15-Minuten-Demo. Keine Installation. Sofort einsetzbar.",
    },
    secondary: {
      text: "In 90 Sekunden verstehen",
      href: "#ablauf",
      icon: "down",
    },
  },

  trustBadges: trustBadges.homepage,

  backgroundVideo: ASSETS.heroes.home.video,
};

// ==================== LOGO MARQUEE ====================
export const logoMarquee = {
  id: "trust",
  headline: "Vertrauen von Teams in verschiedenen Branchen",
  theme: "light" as const,
  items: industries,
};

// ==================== LÖSUNGEN (Split Solutions) ====================
export const solutions = {
  id: "loesungen",
  kicker: "ZWEI WEGE ZUM ZIEL",
  headline: "Mehr Termine oder mehr Sichtbarkeit?",
  subline: "Bei Linkty startest du mit einem klaren Outcome – nicht mit einer leeren Software.",
  microcopy:
    "15 Minuten Live-Demo. Wir zeigen Ihnen echte Abläufe in Ihrer Branche, keine PowerPoint.",

  tabs: [
    {
      id: "voice",
      label: "Linkty | Voice",
      badge: { text: "Sofort verfügbar", variant: "mint" },
      headline: "Aus Anfragen werden Termine.",
      description:
        "Linkty | Voice nimmt Anrufe entgegen, qualifiziert Anfragen nach deinen Regeln und bucht auch außerhalb der Geschäftszeiten Termine. So wird dein Team entlastet, ohne dass die Kontrolle verloren geht.",
      bullets: [
        "Anrufe annehmen – auch außerhalb der Zeiten",
        "Anfragen qualifizieren und priorisieren",
        "Termine direkt in euren Kalender buchen",
        "Übergabe an Menschen, wenn es persönlich werden muss",
      ],
      cta: {
        primary: { text: "Voice-Demo buchen", href: "#demo", variant: "primary" },
        secondary: { text: "Ablauf ansehen", href: "#ablauf" },
      },
      image: {
        src: ASSETS.sections.solutions.voice,
        alt: "Abstrakte Soundwelle Technologie Visualisierung",
      },
    },
    {
      id: "content",
      label: "Linkty | Content",
      badge: { text: "Early Access – Q1 2025", variant: "amber" },
      headline: "Sichtbarkeit, die nicht im Alltag untergeht.",
      description:
        "Viele Teams posten gar nicht – nicht weil sie keine Ideen haben, sondern weil es im Alltag untergeht. Linkty | Content erstellt Inhalte in deiner Brandvoice, plant sie und veröffentlicht automatisch.",
      bullets: [
        "Content-Erstellung in deiner Brandvoice (Text + Visuals)",
        "Planner für alle Kanäle (LinkedIn, Instagram, Facebook, Google Business)",
        "Auto-Posting nach Freigabe",
        "Interaktionen und Leads zentral in Linkty sichtbar",
      ],
      cta: {
        primary: { text: "Early Access sichern – Q1 2025", href: "#demo", variant: "primary" },
        secondary: sharedCTAs.demo,
      },
      image: {
        src: ASSETS.sections.solutions.content,
        alt: "Social Media Content Creation Arbeitsplatz",
      },
    },
  ],
};

// ==================== LINKTY CONNECT (Card Stack) ====================
export const linktyConnect = {
  id: "plattform",
  kicker: "LINKTY CONNECT",
  headline: "Die Schaltzentrale für dein Wachstum.",
  description:
    "Alle Module laufen in einer zentralen App zusammen und garantieren dir bei jeder Buchung die volle Übersicht.",

  cards: [
    {
      id: "hub",
      icon: "Layers",
      headline: "Die Zentrale",
      description:
        "Keine Insellösungen mehr. Linkty | Connect bündelt Anrufe, Nachrichten, Termine und Kundendaten an einem Ort. Wenn Voice einen Termin bucht, siehst du es hier.",
      image: {
        src: ASSETS.sections.connect.hub,
        alt: "Zentrales Dashboard für Datenvisualisierung",
      },
      cta: { text: "Connect entdecken", href: "#plattform" },
    },
    {
      id: "modular",
      icon: "Zap",
      headline: "Modular & Flexibel",
      description:
        "Du zahlst nur, was du nutzt. Starte mit Voice, ergänze Content später. Die Linkty Connect App ist immer inklusive, unabhängig davon, ob du ein Modul oder vier nutzt.",
      image: {
        src: ASSETS.sections.connect.modular,
        alt: "Modulare Technologie Schnittstellen",
      },
      cta: { text: "Module ansehen", href: "#loesungen" },
    },
    {
      id: "integrations",
      icon: "Globe",
      headline: "Verbindet deine Tools",
      description:
        "Linkty arbeitet nicht gegen dein Setup, sondern mit ihm. Integrationen zu Outlook, Google, Social Media und mehr sorgen für nahtlose Workflows.",
      image: {
        src: ASSETS.sections.connect.integrations,
        alt: "Vernetzte digitale Workflows",
      },
      cta: { text: "Alle Integrationen", href: "#plattform" },
    },
    {
      id: "mobile",
      icon: "Smartphone",
      headline: "Web & Mobile App",
      description:
        "Dein Business in der Hosentasche. Mit der leistungsstarken Linkty Mobile App hast du auch unterwegs volle Kontrolle über alle Anfragen und Termine.",
      image: {
        src: ASSETS.sections.connect.mobile,
        alt: "Linkty Mobile App auf einem Smartphone",
      },
      cta: { text: "App Preview", href: "#plattform" },
    },
  ],
};

// ==================== PROCESS (Timeline) ====================
export const process = {
  id: "ablauf",
  kicker: "UNSER PROZESS",
  headline: "Dein Weg zu",
  headlineAccent: "mehr Umsatz durch Automation.",
  description:
    "Ein KI-Tool allein reicht selten für konstante Business-Ergebnisse. Es braucht Know-how, Tests und eine feine Abstimmung auf dein Brand-Design und deine Unternehmenssprache. Wir bei Linkty schlagen diese Brücke, damit du dich auf dein Geschäft konzentrieren kannst.",

  steps: [
    {
      id: 1,
      period: "Schritt 1",
      headline: "Audit & Strategie-Briefing",
      description:
        "Wir machen ein kurzes Audit, identifizieren die Haupt-Pain-Points und legen die passende Lösung fest. In einem Briefing definieren wir gemeinsam die Unternehmenssprache, die Brand-Voice und den Außenauftritt, die Grundlage für alles, was folgt.",
      icon: "Search",
    },
    {
      id: 2,
      period: "Schritt 2",
      headline: "Setup & Go-Live",
      description:
        "Das ist unsere Hauptarbeit. Wir setzen die gebuchte Dienstleistung technisch auf und trainieren das System auf deine Anforderungen. Innerhalb von nur zwei Wochen steht die erste Live-Version bereit für die Testphase.",
      badge: "Live in 14 Tagen",
      icon: "Rocket",
    },
    {
      id: 3,
      period: "Schritt 3",
      headline: "Adaption, Training & Feintuning",
      description:
        "Nach dem Go-Live sammeln wir Ergebnisse. Wir optimieren die Einstellungen und passen alles exakt an, bis die Zuverlässigkeit und Qualität perfekt sind. Das schafft das nötige Vertrauen in die KI-Unterstützung.",
      icon: "SlidersHorizontal",
    },
    {
      id: 4,
      period: "Schritt 4",
      headline: "Kontinuierliche Betreuung & Innovation",
      description:
        "Auch nach der Übergabe bleiben wir an Bord. Wir kümmern uns im Hintergrund um die Entwicklung, Datenpflege und halten das System durch Updates auf dem neuesten Stand, inklusive der neuesten KI-Modelle und Marktentwicklungen.",
      icon: "RefreshCw",
    },
  ],

  bottomText:
    "Ihr Zeitaufwand: ca. 2 Stunden über 4 Wochen verteilt. Wir übernehmen die gesamte technische Umsetzung und Qualitätssicherung.",
  cta: { text: "Unverbindliches Strategiegespräch buchen", href: "#demo", variant: "primary" },
};

// ==================== TESTIMONIALS ====================
export const testimonials = {
  id: "testimonials",
  kicker: "KUNDENSTIMMEN",
  headline: "Was unsere Kunden",
  headlineAccent: "über Linkty sagen.",
  subline: "Durchschnittlich 38% mehr gebuchte Termine in den ersten 90 Tagen",
  cta: { text: "Alle Erfolgsgeschichten", href: "#testimonials" },

  items: [
    {
      id: "t1",
      rating: 5,
      quote:
        "In den ersten 3 Monaten mit Linkty haben wir 43% mehr Termine gebucht. Die automatische Qualifizierung spart uns täglich 2-3 Stunden – und wir verpassen keine Anfrage mehr, auch nicht nach Feierabend.",
      author: {
        name: "Thomas Berger",
        role: "Vertriebsleiter",
        company: "Finanzberatung Süd",
        image: ASSETS.testimonials.t1,
      },
    },
    {
      id: "t2",
      rating: 5,
      quote:
        "Endlich eine Lösung, die nicht nach CRM aussieht, aber alles kann, was wir brauchen. Die Übergabe an unser Team funktioniert nahtlos.",
      author: {
        name: "Sandra Müller",
        role: "Geschäftsführerin",
        company: "Müller Consulting",
        image: ASSETS.testimonials.t2,
      },
    },
    {
      id: "t3",
      rating: 5,
      quote:
        "Voice nimmt Anrufe an, auch wenn wir im Kundengespräch sind. Die Anfragen kommen qualifiziert bei uns an – das hat unsere Abschlussquote um 28% verbessert.",
      author: {
        name: "Michael Schmidt",
        role: "Inhaber",
        company: "Schmidt Versicherungsmakler",
        image: ASSETS.testimonials.t3,
      },
    },
    {
      id: "t4",
      rating: 5,
      quote:
        "Wir wollten Content posten, aber es ging immer unter. Mit Linkty | Content läuft das jetzt automatisch – in unserem Stil, ohne Agentur.",
      author: {
        name: "Julia Weber",
        role: "Marketing Managerin",
        company: "TechStart GmbH",
        image: ASSETS.testimonials.t4,
      },
    },
    {
      id: "t5",
      rating: 5,
      quote:
        "Die Implementierung war erstaunlich schnell. Nach 10 Tagen war alles live und unser Team konnte sofort mit der KI arbeiten.",
      author: {
        name: "Lisa Hoffmann",
        role: "Operations Manager",
        company: "Immobilien Plus",
      },
    },
    {
      id: "t6",
      rating: 5,
      quote:
        "Unsere Kunden merken den Unterschied. Die Reaktionszeit hat sich halbiert und die Zufriedenheit ist spürbar gestiegen.",
      author: {
        name: "Markus Keller",
        role: "Kundenservice Leiter",
        company: "Beratungsdienste AG",
      },
    },
  ],
};

// ==================== CUSTOM SECTION ====================
export const custom = {
  id: "custom",
  kicker: "LINKTY | CUSTOM",
  headline: "Wenn's komplex wird.",
  subline:
    "Für Sonderprozesse und Integrationen bauen wir Lösungen, die sauber in die Linkty Plattform passen.",

  cards: [
    {
      id: "workflows",
      icon: "Zap",
      headline: "Sonder-Workflows",
      description:
        "Automationen und Prozesse, die über Standard hinausgehen. Umsetzung ab 3 Wochen.",
    },
    {
      id: "integrationen",
      icon: "Puzzle",
      headline: "Integrationen",
      description:
        "Anbindung an dein bestehendes Setup – CRM, Tools, Datenquellen. Umsetzung ab 2 Wochen.",
    },
    {
      id: "research",
      icon: "Search",
      headline: "Research & Spezialfälle",
      description:
        "Scraper, Research Agents oder individuelle KI-Anwendungen. Umsetzung ab 4 Wochen.",
    },
  ],

  cta: { text: "Anforderungen besprechen", href: "#kontakt", variant: "outline" },
  microcopy:
    "Antwort innerhalb von 4 Geschäftsstunden. Wir prüfen die technische Machbarkeit und erstellen Ihnen innerhalb von 2 Werktagen ein unverbindliches Konzept.",
};

export const stats = {
  id: "stats",
  kicker: "ZAHLEN & FAKTEN",
  headline: "Linkty in Zahlen",
  stats: [
    {
      value: 38,
      suffix: "%",
      label: "mehr gebuchte Termine",
    },
    {
      value: 24,
      suffix: "/7",
      label: "Erreichbarkeit",
    },
    {
      value: 14,
      suffix: " Tage",
      label: "Go-Live",
    },
  ],
};

// ==================== FAQ ====================
export const faq = {
  id: "faq",
  kicker: "HÄUFIGE FRAGEN",
  headline: "Du hast noch Fragen?",
  subline:
    "Hier findest du Antworten auf die häufigsten Fragen. Falls nicht – schreib uns einfach.",
  ctaText: "Deine Frage ist nicht dabei?",
  cta: sharedCTAs.contact,

  items: [
    {
      id: "faq1",
      question: "Löst Linkty wirklich mein Anfragenproblem?",
      answer:
        "Linkty ist eine Plattform für Teams mit Kundenanfragen. Wir helfen dabei, Anfragen zu strukturieren, Termine zu generieren und Sichtbarkeit aufzubauen – mit KI-Unterstützung, aber immer mit Ihrer Kontrolle. Voice und Content sind die Module, die Linkty Plattform ist das Fundament. Unsere Kunden berichten von durchschnittlich 38% mehr gebuchten Terminen in den ersten 90 Tagen.",
    },
    {
      id: "faq2",
      question: "Verliere ich die Kontrolle über meine Kundenbeziehungen?",
      answer:
        "Im Gegenteil. Linkty übernimmt nur die Routinearbeit – Anrufannahme, Qualifizierung, Terminvorschläge. Jede wichtige Entscheidung und jeder persönliche Kundenkontakt bleibt bei Ihrem Team. Sie definieren die Regeln, wann die KI übergibt. Über 87% unserer Kunden berichten von mehr Zeit für wertvolle Kundengespräche.",
    },
    {
      id: "faq3",
      question: "Wie funktioniert die Kontrolle über die KI?",
      answer:
        "Sie definieren die Regeln: Welche Anfragen werden wie priorisiert? Wann gibt es eine Übergabe? Braucht es Freigaben? Die KI arbeitet innerhalb dieser Leitplanken – transparent und nachvollziehbar. Jede Aktion der KI ist dokumentiert und Sie können jederzeit manuell eingreifen.",
    },
    {
      id: "faq4",
      question: "Ist Linkty DSGVO-konform?",
      answer:
        "Wir arbeiten DSGVO-konform und legen größten Wert auf Datenschutz. Alle Daten werden in Deutschland gehostet und verarbeitet. Details zu spezifischen Anforderungen Ihrer Branche besprechen wir gerne im persönlichen Gespräch.",
    },
    {
      id: "faq5",
      question: "Was kostet Linkty im Vergleich zu einem Teilzeit-Mitarbeiter?",
      answer:
        "Linkty startet bei einem Bruchteil der Kosten einer Teilzeitkraft und arbeitet 24/7. Die genauen Kosten hängen von Teamgröße und gewählten Modulen ab. In der Demo erstellen wir gemeinsam eine Kalkulation für Ihren spezifischen Use Case. Die meisten Kunden amortisieren die Investition durch gewonnene Termine innerhalb von 8-12 Wochen.",
    },
    {
      id: "faq6",
      question: "Wann startet Linkty | Content?",
      answer:
        "Linkty | Content (inkl. Planner) geht Q1 2025 in den Early Access. Sie können sich jetzt auf die Warteliste setzen und gehören zu den Ersten, die es nutzen können. Wir informieren Sie 2 Wochen vor Start.",
    },
  ],
};

// ==================== FINAL CTA ====================
export const finalCta = {
  id: "cta",
  headline: "Sehen Sie Linkty live in Aktion",
  headlineAccent: "– konfiguriert für Ihre Branche",
  subline:
    "In 15 Minuten zeigen wir Ihnen, wie Linkty konkret in Ihrem Unternehmen funktioniert. Mit echten Beispiel-Anfragen aus Ihrer Branche, nicht mit PowerPoint-Folien.",
  cta: {
    primary: sharedCTAs.demo,
    secondary: sharedCTAs.waitlist,
  },
  microcopy:
    "Kostenfrei & unverbindlich. Kein Verkaufsdruck. Sie entscheiden danach in Ruhe. Die meisten Kunden starten innerhalb von 14 Tagen nach der Demo.",
};

// ==================== COMBINED EXPORT ====================
// For backward compatibility with existing imports
export const homePageData = {
  hero,
  logoMarquee,
  solutions,
  linktyConnect,
  process,
  testimonials,
  custom,
  faq,
  finalCta,
};
