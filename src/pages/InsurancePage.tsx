import { PageLayout } from "../components/layout";
import { Hero } from "../components/sections";
import FeatureShowcase from "../components/sections/FeatureShowcase";
import BentoGridFeatures from "../components/sections/BentoGridFeatures";
import ProcessTimeline from "../components/sections/ProcessTimeline";

import { insurancePageData } from "../data/content/industries/insurance";

/**
 * InsurancePage - Landing Page for Insurance Brokers
 */
const InsurancePage = () => {
  return (
    <PageLayout ctaData={insurancePageData.finalCta}>
      {/* 1. Hero Section */}
      <Hero
        headline={insurancePageData.hero.headline}
        headlineAccent={insurancePageData.hero.headlineAccent}
        description={insurancePageData.hero.description}
        backgroundImage={insurancePageData.hero.backgroundImage}
        primaryCta={insurancePageData.hero.cta.primary}
        secondaryCta={insurancePageData.hero.cta.secondary}
        trustBadges={insurancePageData.hero.trustBadges}
        className="min-h-[85vh]"
      />

      {/* 2. Pain Points (Bento Grid) */}
      <BentoGridFeatures data={insurancePageData.painPoints} />

      {/* 3. Vision Story (Monday Morning) */}
      <FeatureShowcase data={insurancePageData.mondayStory} />

      {/* 4. Solution Pillars */}
      <FeatureShowcase data={insurancePageData.solution} />

      {/* 5. Process Timeline */}
      <ProcessTimeline data={insurancePageData.process} />
    </PageLayout>
  );
};

export default InsurancePage;
