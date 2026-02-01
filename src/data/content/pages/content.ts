// ============================================================
// LINKTY - CONTENT AI PAGE CONTENT DATA
// ============================================================

import { sharedCTAs, trustBadges } from "../shared";
import { ASSETS } from "../../assets";

// ==================== HERO ====================
export const hero = {
  id: "content-hero",
  headline: "Sichtbarkeit, die nicht",
  headlineAccent: "im Alltag untergeht.",
  description:
    'Nie wieder "Was soll ich heute posten?". Linkty | Content plant, schreibt und veröffentlicht Beiträge in Ihrer Brand Voice – automatisch, aber immer unter Ihrer Kontrolle.',

  cta: {
    primary: {
      text: "Auf die Warteliste",
      href: "#demo",
      variant: "primary",
    },
    secondary: {
      text: "So funktioniert es",
      href: "#features",
      variant: "outline",
    },
  },

  trustBadges: trustBadges.homepage, // Reuse existing badges

  // Placeholder image - content planning / dashboard vibe
  backgroundImage: {
    src: ASSETS.heroes.content.src,
    alt: "Linkty Content Planner",
  },
};

// ==================== HIGHLIGHT (Brand Voice) ====================
export const brandVoiceHighlight = {
  id: "brand-voice",
  kicker: "BRAND VOICE ENGINE",
  headline: "Klingt wie Sie – nur schneller.",
  description:
    'Der größte Einwand gegen KI-Texte? "Das klingt so generisch." Nicht bei uns. Wir trainieren die Engine initial auf Ihre besten bestehenden Inhalte, Ihre Website und Ihre Persönlichkeit. Das Ergebnis: Entwürfe, die sich zu 95% "richtig" anfühlen.',

  bullets: [
    "Training auf Ihre spezifische Tonalität",
    'Kein "KI-Geschwafel" mehr',
    "Konsistente Kommunikation über alle Kanäle",
  ],

  cta: { text: "Mehr zur Brand Voice", href: "#faq" },

  image: {
    src: ASSETS.sections.content.brandVoice,
    alt: "Kreative Content-Erstellung am Laptop",
  },
  imagePosition: "left" as const, // Flip layout compared to Voice page
};

// ==================== FEATURES (Bento) ====================
export const features = {
  id: "features",
  kicker: "FUNKTIONEN",
  headline: "Ihre Redaktion",
  headlineAccent: "auf Autopilot.",
  description: "Ein komplettes Content-Team in einer Software. Von der Idee bis zur Analyse.",

  items: [
    {
      id: "multi-channel",
      size: "large", // 2x2
      headline: "Multi-Channel Publishing",
      description:
        "Einmal erstellen, überall posten. Linkty passt Formate automatisch für LinkedIn, Instagram, Facebook und Google My Business an.",
      image: {
        src: ASSETS.sections.content.multiChannel,
        alt: "Social Media Kanäle Übersicht",
      },
      label: "Alle Kanäle",
    },
    {
      id: "visuals",
      size: "normal",
      headline: "On-Brand Visuals",
      description:
        "Automatische Generierung von passenden Bildern oder Grafiken im Corporate Design.",
      image: {
        src: ASSETS.sections.content.scripting,
        alt: "KI-gestützte Content-Skripte und Visuals",
      },
    },
    {
      id: "approval",
      size: "normal",
      headline: "Human-in-the-Loop",
      description: 'Nichts geht online ohne Ihr "Ok". Die KI schlägt vor, Sie geben frei.',
      image: {
        src: ASSETS.sections.content.humanInTheLoop,
        alt: "Manueller Freigabeprozess in der Linkty App",
      },
    },
    {
      id: "calendar",
      size: "wide", // 2x1
      headline: "Der Redaktionsplan",
      description:
        "Die volle Übersicht. Planen Sie Wochen im Voraus und sehen Sie genau, wann welche Story online geht. Lücken werden von der KI automatisch erkannt und gefüllt.",
      label: "Übersicht",
      image: {
        src: ASSETS.sections.content.team,
        alt: "Linkty Redaktions-Team Übersicht",
      },
    },
  ],
};

// ==================== FAQ ====================
export const faq = {
  id: "faq",
  kicker: "FRAGEN ZUR CONTENT AI",
  headline: "Häufige Fragen zu Linkty Content",
  subline: "Content-Marketing ohne Kopfzerbrechen.",
  ctaText: "Andere Frage?",
  cta: sharedCTAs.contact,

  items: [
    {
      id: "c1",
      question: "Klingt das nicht total nach Roboter?",
      answer:
        'Nein. Durch unser "Brand Voice Training" lernt die KI Ihren Schreibstil. Wir analysieren Ihre alten Posts und E-Mails. Das Ergebnis sind Texte, die Ihre Kunden wiedererkennen – nur dass Sie sie nicht selbst tippen mussten.',
    },
    {
      id: "c2",
      question: "Kann ich eigene Bilder verwenden?",
      answer:
        "Absolut. Sie können eigene Fotos hochladen, und Linkty schreibt den passenden Text dazu. Oder Sie lassen Linkty passende Stock-Bilder oder KI-Visuals vorschlagen.",
    },
    {
      id: "c3",
      question: "Welche Plattformen werden unterstützt?",
      answer:
        "Zum Start unterstützen wir LinkedIn (Persönlich & Company), Instagram (Feed), Facebook Pages und Google My Business. Weitere folgen.",
    },
    {
      id: "c4",
      question: "Was bedeutet Early Access?",
      answer:
        "Wir rollen Linkty | Content aktuell schrittweise aus, um die Qualität für jeden Kunden sicherzustellen. Wenn Sie sich auf die Warteliste setzen, kontaktieren wir Sie, sobald ein Slot für das Onboarding frei wird.",
    },
  ],
};

// ==================== FINAL CTA ====================
export const finalCta = {
  id: "waitlist",
  headline: "Sichern Sie sich Ihren",
  headlineAccent: "Platz in der ersten Reihe.",
  subline:
    "Die Plätze für das Q1 Onboarding sind limitiert. Tragen Sie sich jetzt unverbindlich ein.",
  cta: {
    primary: { text: "Jetzt auf die Warteliste", href: "#demo" },
    secondary: { text: "Mehr erfahren", href: "#features" },
  },
};

// ==================== EXPORT ====================
export const contentPageData = {
  hero,
  brandVoiceHighlight,
  features,
  faq,
  finalCta,
};
