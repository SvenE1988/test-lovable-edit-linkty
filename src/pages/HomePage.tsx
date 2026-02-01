import { lazy, Suspense } from "react";
import { PageLayout } from "../components/layout";
import { Hero } from "../components/sections";

import LogoMarquee from "../components/sections/LogoMarquee";
import SplitSolutionsSection from "../components/sections/SplitSolutionsSection";
import ProcessTimeline from "../components/sections/ProcessTimeline";
import CustomSection from "../components/sections/CustomSection";
import FAQSection from "../components/sections/FAQSection";

// Lazy load heavy components below the fold
const CardStackSection = lazy(() => import("../components/sections/CardStackSection"));
const TestimonialsSection = lazy(() => import("../components/sections/TestimonialsSection"));

import { homePageData } from "../data/content/pages/home";

/**
 * HomePage - Linkty Landing Page
 *
 * STRUKTUR:
 * 1. Hero (Video-Background)
 * 2. LogoMarquee (Branchen)
 * 3. SplitSolutions (Voice & Content)
 * 4. CardStack (Linkty Connect)
 * 5. ProcessTimeline (4-Schritte Prozess)
 * 6. Testimonials (Kundenstimmen)
 * 7. CustomSection (Linkty Custom)
 * 8. FAQ (Häufige Fragen)
 * 9. MasterFooter (CTA + Footer global via PageLayout)
 */
const HomePage = () => {
  return (
    <PageLayout ctaData={homePageData.finalCta}>
      {/* 1. Hero Section */}
      <Hero
        headline={homePageData.hero.headline}
        headlineAccent={homePageData.hero.headlineAccent}
        description={homePageData.hero.description}
        backgroundVideo={homePageData.hero.backgroundVideo}
        primaryCta={homePageData.hero.cta.primary}
        secondaryCta={homePageData.hero.cta.secondary}
        trustBadges={homePageData.hero.trustBadges}
      />

      {/* 2. Logo Marquee - Branchen */}
      <LogoMarquee data={homePageData.logoMarquee} />

      {/* 3. Split Solutions - Voice & Content */}
      <SplitSolutionsSection data={homePageData.solutions} />

      {/* 4. Card Stack - Linkty Connect (Lazy Loaded) */}
      <Suspense fallback={<div className="min-h-[600px]" />}>
        <CardStackSection data={homePageData.linktyConnect} />
      </Suspense>

      {/* 5. Process Timeline - 4 Schritte */}
      <ProcessTimeline data={homePageData.process} />

      {/* 6. Testimonials - Kundenstimmen (Lazy Loaded) */}
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <TestimonialsSection data={homePageData.testimonials} />
      </Suspense>

      {/* 7. Custom Section - Linkty Custom */}
      <CustomSection data={homePageData.custom} />

      {/* 8. FAQ Section */}
      <FAQSection data={homePageData.faq} />
    </PageLayout>
  );
};

export default HomePage;
