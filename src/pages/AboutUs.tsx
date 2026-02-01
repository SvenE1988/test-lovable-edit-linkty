import { useMemo, lazy, Suspense } from "react";
import { PageLayout } from "../components/layout";
import { Hero, TeamSection, TrustBadges } from "../components/sections";
import ManifestoSection from "../components/sections/ManifestoSection";
import BentoGridFeatures from "../components/sections/BentoGridFeatures";
import StatsSection from "../components/sections/StatsSection";

// Lazy load heavy timeline component
const InteractiveTimeline = lazy(() => import("../components/sections/InteractiveTimeline"));

import { aboutPageData } from "../data/content/pages/about";
import { trustBadges } from "../data/content/shared";

/**
 * AboutUs Page - Über Uns
 *
 * STRUKTUR:
 * 1. Hero (Bild-Background)
 * 2. TrustBadges (Vertrauensfaktoren)
 * 3. ManifestoSection (Philosophie)
 * 4. BentoGridFeatures (Gründer, Vision, Werte)
 * 5. TeamSection (Die Köpfe hinter Linkty)
 * 6. InteractiveTimeline (Unternehmensgeschichte)
 * 7. StatsSection (Statistiken)
 * 8. MasterFooter (CTA + Footer global via PageLayout)
 */
const AboutUs = () => {
  const ctaData = useMemo(
    () => ({
      headline: aboutPageData.finalCta.headline,
      headlineAccent: aboutPageData.finalCta.headlineAccent,
      subline: aboutPageData.finalCta.subline,
      cta: aboutPageData.finalCta.cta,
    }),
    []
  );

  const bentoData = aboutPageData.bentoGrid;

  // Map founder data for TeamSection
  const teamMembers = aboutPageData.founders.map((f) => ({
    id: f.id,
    name: f.name,
    role: f.role,
    image: f.image.src,
    description: f.description,
  }));

  return (
    <PageLayout ctaData={ctaData}>
      {/* 1. Hero Section */}
      <div className="relative overflow-hidden">
        <Hero
          headline={aboutPageData.hero.headline}
          headlineAccent={aboutPageData.hero.headlineAccent}
          description={aboutPageData.hero.description}
          backgroundImage={aboutPageData.hero.backgroundImage}
          primaryCta={aboutPageData.hero.cta.primary}
          secondaryCta={aboutPageData.hero.cta.secondary}
          className="min-h-[80vh]"
        />

        {/* 2. Trust Badges overlay/below Hero */}
        <div className="pointer-events-none absolute bottom-16 left-0 right-0 z-20">
          <div className="global-wrapper flex justify-center">
            <TrustBadges badges={trustBadges.homepage} className="mt-0 scale-90 opacity-80" />
          </div>
        </div>
      </div>

      {/* 3. Manifesto - Philosophie */}
      <ManifestoSection
        kicker={aboutPageData.manifesto.kicker}
        headline={aboutPageData.manifesto.headline}
        headlineAccent={aboutPageData.manifesto.headlineAccent}
        text={aboutPageData.manifesto.paragraphs}
      />

      {/* 4. Bento Grid - Gründer, Vision, Werte */}
      <BentoGridFeatures data={bentoData} variant="surface" centered={true} />

      {/* 5. Team Section - Die Köpfe hinter Linkty */}
      <TeamSection
        eyebrow="DIE GRÜNDER"
        headline="Wer hinter Linkty"
        headlineAccent="steckt."
        members={teamMembers}
        variant="white"
        columns={2}
      />

      {/* 6. Interactive Timeline - Geschichte (Lazy Loaded) */}
      <Suspense fallback={<div className="min-h-[600px]" />}>
        <InteractiveTimeline
          eyebrow={aboutPageData.timeline.kicker}
          headline={aboutPageData.timeline.headline}
          headlineAccent={aboutPageData.timeline.headlineAccent}
          description={aboutPageData.timeline.description}
          items={aboutPageData.timeline.steps}
          variant="light"
        />
      </Suspense>

      {/* 7. Stats Section - Statistiken */}
      <StatsSection
        data={{
          id: "stats",
          headline: "Linkty in Zahlen",
          stats: aboutPageData.stats,
          variant: "dark",
          columns: 3,
        }}
      />
    </PageLayout>
  );
};

export default AboutUs;
