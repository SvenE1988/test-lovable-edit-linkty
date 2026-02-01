// ============================================================
import { ASSETS } from "../../assets";

// ==================== NAVIGATION TYPE DEFINITIONS ====================
export interface NavItem {
  label: string;
  href?: string; // Optional if it has children
  description?: string; // For dropdown content
  icon?: string; // Icon name for dropdowns
  children?: NavItem[];
}

// ==================== NAVIGATION DATA ====================
export const navigation = {
  links: [
    {
      label: "Linkty | Voice",
      href: "/sprach-ki",
      description: "Telefon-KI, Terminbuchung & Erreichbarkeit rund um die Uhr.",
      icon: "Phone",
    },
    {
      label: "Linkty | Content",
      href: "/content-ki",
      description: "Social Media Planung & Content-Erstellung in Ihrer Brand Voice.",
      icon: "PenTool",
    },
    {
      label: "Branchen",
      children: [
        {
          label: "Versicherungsmakler",
          href: "/branchen/versicherungsmakler",
          description: "Die Speziallösung für Maklerbüros: Fokus auf Beratung statt Admin.",
          icon: "Shield",
        },
      ],
    },
  ] as NavItem[],

  cta: {
    primary: { label: "Demo buchen", href: "#demo", icon: "calendar" },
    secondary: {
      label: "Anruf starten",
      href: "tel:+494074302022",
      icon: "phone",
      microcopy: "Mo-Fr 9-18 Uhr",
    },
  },
};

// ==================== FOOTER ====================
export const footer = {
  claim: "Die KI-Plattform, die aus Anfragen Termine macht – automatisch, zuverlässig, 24/7",
  badge: "DSGVO-konforme Datenverarbeitung",

  columns: {
    produkte: {
      headline: "Produkte",
      links: [
        { label: "Linkty | Voice", href: "/sprach-ki" },
        { label: "Linkty | Content", href: "/content-ki" },
      ],
    },
    loesungen: {
      headline: "Lösungen",
      links: [{ label: "Für Versicherungsmakler", href: "/branchen/versicherungsmakler" }],
    },
    company: {
      headline: "Unternehmen",
      links: [
        { label: "Über uns", href: "/ueber-uns" },
        { label: "Kontakt", href: "#kontakt" },
      ],
    },
    rechtliches: {
      headline: "Rechtliches",
      links: [
        { label: "Datenschutz", href: "#datenschutz" },
        { label: "Impressum", href: "#impressum" },
      ],
    },
  },

  contact: {
    email: "info@linkty.ai",
    emailSubtext: "Antwort in <4h",
    phone: "Mo-Fr 9-18 Uhr",
  },

  social: [
    { platform: "linkedin", href: "https://linkedin.com/company/linkty-ai", icon: "Linkedin" },
    { platform: "instagram", href: "https://instagram.com/linkty.ai", icon: "Instagram" },
  ],
};

// ==================== SHARED CTAs ====================
export const sharedCTAs = {
  demo: {
    text: "Kostenlose Demo vereinbaren",
    href: "#demo",
    variant: "primary",
  },
  waitlist: {
    text: "Early Access sichern",
    href: "#demo",
    variant: "secondary",
  },
  contact: {
    text: "Anforderungen besprechen",
    href: "#kontakt",
    variant: "outline",
  },
  call: {
    text: "Unverbindliches Strategiegespräch buchen",
    href: "#demo",
    variant: "primary",
  },
};

// ==================== BRAND ASSETS ====================
export const logos = {
  favicon: ASSETS.brand.favicon,
  darkBg: ASSETS.brand.logoDark,
  whiteBg: ASSETS.brand.logoWhite,
  imgFill: ASSETS.brand.logoImgFill,
};

// ==================== TRUST BADGES ====================
export const trustBadges = {
  homepage: [
    { text: "KI-gestützt seit 2023", icon: "🤖" },
    { text: "DSGVO-konform", icon: "🔒" },
    { text: "Hosting in Deutschland", icon: "🇩🇪" },
  ],
  process: ["DSGVO-orientiert", "Nachvollziehbar", "Mit Leitplanken", "Optional Freigaben"],
};

// ==================== INDUSTRIES (Logo Marquee) ====================
export const industries = [
  { id: "l1", name: "Versicherungsmakler" },
  { id: "l2", name: "Finanzberater" },
  { id: "l3", name: "Immobilienmakler" },
  { id: "l4", name: "Handwerksbetriebe" },
  { id: "l5", name: "Beratungsunternehmen" },
  { id: "l6", name: "Agenturen" },
];
