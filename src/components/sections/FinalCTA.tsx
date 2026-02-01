import React from "react";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import { Heading } from "../ui/heading";
import { Text } from "../ui/text";
import { IFinalCtaData } from "@/types";

interface FinalCTAProps {
  data: IFinalCtaData;
}

/**
 * FinalCTA - Abschluss-CTA vor Footer
 *
 * Animations removed for stability.
 */
const FinalCTA: React.FC<FinalCTAProps> = ({ data }) => {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <Heading level={2} variant="cta-lite" colorScheme="light" className="mb-4">
            {data.headline}{" "}
            {data.headlineAccent && <span className="text-brand-mint">{data.headlineAccent}</span>}
          </Heading>
          <Text as="p" variant="body-large" colorScheme="light" muted className="mb-8">
            {data.subline}
          </Text>

          {/* CTAs */}
          <div className="mb-4 flex flex-wrap justify-center gap-4">
            {data.cta.primary && (
              <a href={data.cta.primary.href}>
                <InteractiveHoverButton
                  text={data.cta.primary.text}
                  variant="primary"
                  aria-label={data.cta.primary.text}
                />
              </a>
            )}
            {data.cta.secondary && (
              <a href={data.cta.secondary.href}>
                <InteractiveHoverButton
                  text={data.cta.secondary.text}
                  variant="outline"
                  aria-label={data.cta.secondary.text}
                />
              </a>
            )}
          </div>

          <Text as="p" variant="body-small" colorScheme="light" subtle>
            {data.microcopy}
          </Text>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
