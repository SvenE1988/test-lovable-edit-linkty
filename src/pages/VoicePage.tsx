import { PageLayout } from "../components/layout";
import { Hero } from "../components/sections";
import FeatureShowcase from "../components/sections/FeatureShowcase";
import BentoGridFeatures from "../components/sections/BentoGridFeatures";
import FAQSection from "../components/sections/FAQSection";

import { voicePageData } from "../data/content/pages/voice";

/**
 * VoicePage - Linkty Voice AI Product Page
 */
const VoicePage = () => {
  return (
    <PageLayout ctaData={voicePageData.finalCta}>
      {/* 1. Hero Section */}
      <Hero
        headline={voicePageData.hero.headline}
        headlineAccent={voicePageData.hero.headlineAccent}
        description={voicePageData.hero.description}
        backgroundImage={voicePageData.hero.backgroundImage}
        primaryCta={voicePageData.hero.cta.primary}
        secondaryCta={voicePageData.hero.cta.secondary}
        trustBadges={voicePageData.hero.trustBadges}
        className="min-h-[85vh]"
      />

      {/* 2. Relief Highlight (Entlastung) */}
      <FeatureShowcase data={voicePageData.reliefHighlight} />

      {/* 3. Features Bento Grid */}
      <BentoGridFeatures data={voicePageData.features} />

      {/* 4. FAQ Section */}
      <FAQSection data={voicePageData.faq} />
    </PageLayout>
  );
};

export default VoicePage;
