import { lazy } from "react";

// Lazy load all pages for performance
const HomePage = lazy(() => import("../pages/HomePage"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const VoicePage = lazy(() => import("../pages/VoicePage"));
const ContentPage = lazy(() => import("../pages/ContentPage"));
const InsurancePage = lazy(() => import("../pages/InsurancePage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));

export interface AppRoute {
  path: string;
  component: React.LazyExoticComponent<React.ComponentType<Record<string, unknown>>>;
  meta?: {
    title: string;
    description?: string;
  };
}

export const routes: AppRoute[] = [
  {
    path: "/",
    component: HomePage,
    meta: {
      title: "Linkty - KI-Plattform für Terminbuchung & Content Automation",
      description:
        "Linkty vereint Telefonie, Marketing und Kundenmanagement. Unsere KI übernimmt Anrufe, bucht Termine und erstellt Content – automatisch, 24/7, DSGVO-konform.",
    },
  },
  {
    path: "/ueber-uns",
    component: AboutUs,
    meta: {
      title: "Über uns | Linkty - Menschen, Werte & Vision",
      description:
        "Lernen Sie das Team hinter Linkty kennen. Wir bauen KI-Lösungen aus der Vertriebsrealität für messbare Ergebnisse.",
    },
  },
  {
    path: "/sprach-ki",
    component: VoicePage,
    meta: {
      title: "Linkty | Voice AI - Nie wieder Anrufe verpassen",
      description:
        "Unsere Sprach-KI qualifiziert Anrufe und bucht Termine direkt in Ihren Kalender – 24/7, DSGVO-konform und in Ihrer Brandvoice.",
    },
  },
  {
    path: "/content-ki",
    component: ContentPage,
    meta: {
      title: "Linkty | Content AI - Sichtbarkeit auf Autopilot",
      description:
        "Erstellen und planen Sie Social Media Content in Ihrem Stil. Linkty übernimmt die Erstellung und das Auto-Posting.",
    },
  },
  {
    path: "/branchen/versicherungsmakler",
    component: InsurancePage,
    meta: {
      title: "Linkty für Versicherungsmakler | Automatisierte Terminierung",
      description:
        "Spezialisierte KI-Lösungen für Makler. Qualifizieren Sie Interessenten automatisch und steigern Sie Ihre Abschlussquote um bis zu 28%.",
    },
  },
  {
    path: "/kontakt",
    component: ContactPage,
    meta: {
      title: "Kontakt | Linkty - Lassen Sie uns sprechen",
      description:
        "Fragen zu unseren KI-Lösungen? Kontaktieren Sie unser Expertenteam für eine unverbindliche Beratung.",
    },
  },
];
