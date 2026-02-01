// ============================================================
// LINKTY - VOICE AI PAGE CONTENT DATA
// ============================================================

import { sharedCTAs, trustBadges } from "../shared";
import { ASSETS } from "../../assets";

// ==================== HERO ====================
export const hero = {
  id: "voice-hero",
  headline: "Ihr Telefonsekretariat,",
  headlineAccent: "das niemals schläft.",
  description:
    "Linkty | Voice nimmt jeden Anruf an – freundlich, kompetent und rund um die Uhr. Entlasten Sie Ihren Innendienst und verlieren Sie nie wieder einen potenziellen Kunden.",

  cta: {
    primary: {
      text: "Voice-Demo anhören",
      href: "#demo",
      variant: "primary",
    },
    secondary: {
      text: "Funktionen ansehen",
      href: "#funktionen",
      variant: "outline",
    },
  },

  trustBadges: trustBadges.homepage, // Reuse existing badges

  // Placeholder image - ideally a visualization of voice/audio
  backgroundImage: {
    src: ASSETS.heroes.voice.src,
    alt: "Linkty Voice Dashboard",
  },
};

// ==================== HIGHLIGHT (Entlastung) ====================
export const reliefHighlight = {
  id: "entlastung",
  kicker: "ENORME ENTLASTUNG",
  headline: "Stille im Büro – Ergebnisse im Kalender.",
  description:
    "Das ständige Telefonklingeln reißt Ihr Team aus der Konzentration. Linkty | Voice fängt 100% der Anrufe ab. Spam wird blockiert, einfache Fragen sofort beantwortet und Termine direkt gebucht. Ihr Team spricht nur noch mit Kunden, die bereits qualifiziert sind.",

  bullets: [
    "Keine Unterbrechungen mehr durch Routine-Anrufe",
    "Volle Konzentration auf die Arbeit vor Ort",
    "Automatische Dokumentation jedes Gesprächs",
  ],

  cta: { text: "Mehr zur Entlastung erfahren", href: "#features", variant: "outline" },

  image: ASSETS.sections.voice.office,
  imagePosition: "right" as const,
};

// ==================== FEATURES (Bento) ====================
export const features = {
  id: "funktionen",
  kicker: "FUNKTIONEN",
  headline: "Mehr als nur ein",
  headlineAccent: "Anrufbeantworter.",
  description:
    "Linkty | Voice ist ein intelligenter Mitarbeiter, der Ihre Prozesse versteht und integriert.",

  items: [
    {
      id: "calendar",
      size: "large", // 2x2
      headline: "Direkte Terminbuchung",
      description:
        "Linkty prüft Ihren Kalender in Echtzeit und bucht Termine nur dort, wo Sie es wollen. Keine Doppelbuchungen, kein E-Mail-Ping-Pong.",
      image: {
        src: ASSETS.sections.voice.calendar,
        alt: "Digitaler Kalender für die Terminplanung",
      },
      label: "Kalender-Sync",
    },
    {
      id: "qualify",
      size: "normal",
      headline: "Smarte Vorqualifizierung",
      description:
        'Die KI fragt gezielt nach: "Sind Sie Neukunde?", "Welche Versicherung?" – und leitet entsprechend weiter.',
      image: {
        src: ASSETS.sections.voice.qualification,
        alt: "KI-basierte Anrufer-Qualifizierung",
      },
    },
    {
      id: "247",
      size: "normal",
      headline: "24/7 Erreichbarkeit",
      description: "Verkaufen Sie Termine auch am Sonntagabend. Linkty ist immer wach.",
      image: {
        src: ASSETS.sections.voice.alwayson,
        alt: "Rund-um-die-Uhr Service-Verfügbarkeit",
      },
    },
    {
      id: "crm",
      size: "wide", // 2x1
      headline: "CRM Integration",
      description:
        "Jeder Anruf landet als strukturierter Datensatz in Ihrem System. Name, Anliegen, Stimmung – alles automatisch erfasst.",
      label: "Nahtlos",
      image: {
        src: ASSETS.sections.voice.hub,
        alt: "Integration in bestehende CRM-Systeme",
      },
    },
  ],
};

// ==================== FAQ ====================
export const faq = {
  id: "faq",
  kicker: "FRAGEN ZUR VOICE AI",
  headline: "Häufige Fragen zu Linkty Voice",
  subline: "Alles was Sie über die Einrichtung und Nutzung wissen müssen.",
  ctaText: "Andere Frage?",
  cta: sharedCTAs.contact,

  items: [
    {
      id: "v1",
      question: "Klingt das wie ein Roboter?",
      answer:
        'Nein. Wir nutzen die neuesten KI-Stimmen, die Pausen machen, "Ähms" verstehen und natürlich intonieren. Viele Anrufer merken gar nicht, dass sie mit einer KI sprechen.',
    },
    {
      id: "v2",
      question: "Was passiert, wenn die KI etwas nicht versteht?",
      answer:
        "Wie ein guter Mitarbeiter fragt die KI höflich nach. Sollte es gar nicht weitergehen, wird der Anruf an einen menschlichen Kollegen weitergeleitet oder ein Rückruf vereinbart.",
    },
    {
      id: "v3",
      question: "Kann ich die KI selbst anpassen?",
      answer:
        "Ja. Im Linkty Dashboard können Sie Öffnungszeiten, Skripte und Kalender-Regeln jederzeit anpassen.",
    },
    {
      id: "v4",
      question: "Wie schnell ist das eingerichtet?",
      answer:
        "Für Standard-Branchen (Zahnärzte, Makler, Handwerk) haben wir Vorlagen. Das Setup dauert oft nur 24 Stunden.",
    },
  ],
};

// ==================== FINAL CTA ====================
export const finalCta = {
  id: "cta",
  headline: "Testen Sie Linkty Voice",
  headlineAccent: "jetzt kostenlos.",
  subline:
    "Rufen Sie unsere Demo-Nummer an oder buchen Sie direkt einen Termin, um das System für Ihr Unternehmen zu besprechen.",
  cta: {
    primary: sharedCTAs.demo,
    secondary: { text: "Demo-Nummer anrufen", href: "tel:+491234567890" }, // Placeholder number
  },
};

// ==================== EXPORT ====================
export const voicePageData = {
  hero,
  reliefHighlight,
  features,
  faq,
  finalCta,
};
