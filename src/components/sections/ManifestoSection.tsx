import React from "react";
import { Heading } from "../ui/heading";
import { Text, Eyebrow } from "../ui/text";
import { AnimatedSection } from "../ui/animated-section";

// ============================================================
// TYPES
// ============================================================

interface ManifestoSectionProps {
  kicker?: string;
  headline: string;
  headlineAccent?: string;
  text: string[];
}

// ============================================================
// COMPONENT
// ============================================================

/**
 * ManifestoSection - Manifesto-Text mit großen Absätzen
 *
 * Updated: Typography migrated to Heading/Text components
 */
const ManifestoSection: React.FC<ManifestoSectionProps> = ({
  kicker,
  headline,
  headlineAccent,
  text,
}) => {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="global-wrapper mx-auto max-w-4xl px-6">
        {/* Header */}
        <AnimatedSection delay={0} direction="up">
          <div className="mb-20 text-center">
            {kicker && (
              <Eyebrow colorScheme="light" className="mb-6">
                {kicker}
              </Eyebrow>
            )}
            <Heading level={2} variant="display-huge" colorScheme="light" accent={headlineAccent}>
              {headline}
            </Heading>
          </div>
        </AnimatedSection>

        {/* Text Body */}
        <div className="space-y-8 md:space-y-12">
          {text.map((paragraph, index) => (
            <AnimatedSection key={index} delay={0.2 + index * 0.15} direction="up">
              <Text variant="statement" colorScheme="light" muted={false}>
                {paragraph}
              </Text>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Background Decor */}
      <div className="bg-brand-cyan/5 pointer-events-none absolute left-0 top-1/2 h-1/2 w-1/3 -translate-y-1/2 blur-[120px]" />
      <div className="bg-brand-mint/5 pointer-events-none absolute bottom-0 right-0 h-1/2 w-1/3 blur-[120px]" />
    </section>
  );
};

export default ManifestoSection;
