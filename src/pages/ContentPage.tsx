import { PageLayout } from "../components/layout";
import { Hero } from "../components/sections";
import FeatureShowcase from "../components/sections/FeatureShowcase";
import BentoGridFeatures from "../components/sections/BentoGridFeatures";
import FAQSection from "../components/sections/FAQSection";

import { contentPageData } from "../data/content/pages/content";

/**
 * ContentPage - Linkty Content AI Product Page
 */
const ContentPage = () => {
  return (
    <PageLayout ctaData={contentPageData.finalCta}>
      {/* 1. Hero Section */}
      <Hero
        headline={contentPageData.hero.headline}
        headlineAccent={contentPageData.hero.headlineAccent}
        description={contentPageData.hero.description}
        backgroundImage={contentPageData.hero.backgroundImage}
        primaryCta={contentPageData.hero.cta.primary}
        secondaryCta={contentPageData.hero.cta.secondary}
        trustBadges={contentPageData.hero.trustBadges}
        className="min-h-[85vh]"
      />

      {/* 2. Brand Voice Highlight (Spiegelverkehrt zu Voice) */}
      <FeatureShowcase
        data={{
          ...contentPageData.brandVoiceHighlight,
          imagePosition: "left", // Explicitly set left here as well, though defined in data
        }}
      />

      {/* 3. Features Bento Grid */}
      <BentoGridFeatures data={contentPageData.features} />

      {/* 4. FAQ Section */}
      <FAQSection data={contentPageData.faq} />
    </PageLayout>
  );
};

export default ContentPage;
