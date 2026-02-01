import {} from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Heading } from "../ui/heading";
import { Text, Eyebrow } from "../ui/text";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import { cn } from "@/lib/utils";

import { IFeatureShowcaseData } from "@/types";

interface FeatureShowcaseProps {
  data: IFeatureShowcaseData;
}

const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({ data }) => {
  const isImageRight = data.imagePosition !== "left"; // Default to right

  return (
    <section id={data.id} className="overflow-hidden bg-white py-section-lg">
      <div className="global-wrapper">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Text Content */}
          <div
            className={cn(
              "order-2 flex flex-col justify-center",
              isImageRight ? "lg:order-1" : "lg:order-2"
            )}
          >
            <div className="mb-8">
              <Eyebrow colorScheme="light" className="mb-4">
                {data.kicker}
              </Eyebrow>
              <Heading level={2} variant="display-medium" colorScheme="light" className="mb-6">
                {data.headline}
              </Heading>
              <Text variant="body-large" colorScheme="light" muted className="mb-8">
                {data.description}
              </Text>

              {/* Bullets */}
              <ul className="mb-10 space-y-4">
                {data.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-mint/10 text-brand-mint">
                      <Check className="h-4 w-4" />
                    </span>
                    <Text variant="body-medium" colorScheme="light">
                      {bullet}
                    </Text>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {data.cta && (
                <a href={data.cta.href}>
                  <InteractiveHoverButton text={data.cta.text} variant="primary" />
                </a>
              )}
            </div>
          </div>

          {/* Image Content */}
          <div className={cn("relative order-1", isImageRight ? "lg:order-2" : "lg:order-1")}>
            <motion.div
              className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl lg:aspect-square"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 z-10 bg-brand-dark/10 mix-blend-multiply" />
              <img
                src={typeof data.image === "string" ? data.image : data.image.src}
                alt={typeof data.image === "string" ? data.headline : data.image.alt}
                className="h-full w-full object-cover"
              />
              {/* Optional: Decorate elements could go here */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
