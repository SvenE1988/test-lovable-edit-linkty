import {} from "react";
import { motion } from "framer-motion";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import { cn } from "@/lib/utils";
import { Heading } from "../ui/heading";
import { Text, Eyebrow } from "../ui/text";
import { Link } from "react-router-dom";

import { ISplitSolutionsData } from "@/types";

interface SplitSolutionsSectionProps {
  data: ISplitSolutionsData;
}

/**
 * SplitSolutionsSection - 2-Card Solution Showcase
 *
 * UPDATED: Links now point to new internal pages (/sprach-ki, /content-ki)
 */
const SplitSolutionsSection: React.FC<SplitSolutionsSectionProps> = ({ data }) => {
  // Helper to map IDs to internal routes
  const getRoute = (id: string | number) => {
    if (id === "voice") return "/sprach-ki";
    if (id === "content") return "/content-ki";
    return "#";
  };

  return (
    <section id={data.id} className="bg-white py-section-lg">
      <div className="global-wrapper max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Eyebrow colorScheme="light">{data.kicker}</Eyebrow>

          <Heading level={2} variant="display-large" colorScheme="light" className="mb-6">
            {data.headline}
          </Heading>

          <Text variant="body-large" colorScheme="light" muted>
            {data.subline}
          </Text>
        </div>

        {/* Cards Grid - Mobile: Stack, Desktop: 2 Columns */}
        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {data.tabs.map((card, index) => (
            <motion.div
              key={card.id}
              className="group relative flex min-h-[500px] flex-col overflow-hidden rounded-3xl md:min-h-[600px]"
              whileHover={{ scale: 1.02, y: -8 }}
              transition={{ duration: 0.3 }}
              style={{ willChange: "transform" }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={typeof card.image === "string" ? card.image : card.image.src}
                  alt={typeof card.image === "string" ? card.label : card.image.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/85 to-brand-dark/50" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col justify-between p-8 md:p-10 lg:p-12">
                {/* Badge */}
                <div>
                  <div
                    className={cn(
                      "mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 backdrop-blur-md",
                      index === 0
                        ? "bg-brand-mint/20 text-brand-mint"
                        : "bg-amber-500/20 text-amber-300"
                    )}
                  >
                    <span className="text-sm font-semibold">{card.label}</span>
                  </div>
                </div>

                {/* Main Content */}
                <div className="space-y-6">
                  <div>
                    <Heading level={3} variant="display-large" colorScheme="dark" className="mb-4">
                      {card.headline}
                    </Heading>

                    <Text variant="body-large" colorScheme="dark" className="mb-6">
                      {card.description}
                    </Text>
                  </div>

                  {/* Bullets */}
                  <ul className="mb-6 space-y-3">
                    {card.bullets.slice(0, 3).map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/90">
                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-mint/20">
                          <span className="h-2 w-2 rounded-full bg-brand-mint" />
                        </span>
                        <span className="text-sm md:text-base">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA - Updated to use Link for internal routing */}
                  <div>
                    <Link to={getRoute(card.id)}>
                      <InteractiveHoverButton
                        text={card.cta.primary.text}
                        variant={index === 0 ? "primary" : "outline"}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Microcopy */}
        <p className="text-center text-sm text-content-subtle">{data.microcopy}</p>
      </div>
    </section>
  );
};

export default SplitSolutionsSection;
