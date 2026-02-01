import {} from "react";
import { Zap, Puzzle, Search, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import { Heading } from "../ui/heading";
import { Text, Eyebrow } from "../ui/text";
import { ContactModal } from "../ui/contact-modal";

// ============================================================
// TYPES
// ============================================================

import { ICustomSectionData } from "@/types";

interface CustomSectionProps {
  data: ICustomSectionData;
}

// ============================================================
// COMPONENT
// ============================================================

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Puzzle,
  Search,
};

/**
 * CustomSection - 3 Cards für Custom Services
 *
 * Animations removed for stability.
 */
const CustomSection: React.FC<CustomSectionProps> = ({ data }) => {
  return (
    <section id={data.id} className="bg-surface-light py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="custom-content mb-12 text-center">
          <Eyebrow colorScheme="light">{data.kicker}</Eyebrow>
          <Heading level={2} variant="display-large" colorScheme="light" className="mb-4">
            {data.headline}
          </Heading>
          <Text variant="body-large" colorScheme="light" muted>
            {data.subline}
          </Text>
        </div>

        {/* Cards */}
        <div className="custom-cards mb-12 grid gap-6 md:grid-cols-3">
          {data.cards.map((card) => {
            const Icon = iconMap[card.icon] || Zap;

            return (
              <motion.div
                key={card.id}
                className="custom-card hover:border-brand-mint/50 rounded-xl border border-brand-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-md"
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.2 }}
                style={{ willChange: "transform" }}
              >
                <div className="bg-brand-mint/10 mb-4 flex h-10 w-10 items-center justify-center rounded-lg">
                  <Icon className="h-5 w-5 text-brand-cyan" />
                </div>
                <Heading level={3} variant="display-medium" colorScheme="light" className="mb-2">
                  {card.headline}
                </Heading>
                <Text variant="body-medium" colorScheme="light" muted>
                  {card.description}
                </Text>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <ContactModal
            trigger={
              <InteractiveHoverButton
                text={data.cta?.text || "Anfrage stellen"}
                variant="primary"
              />
            }
          />
          <p className="mt-3 text-sm text-content-subtle">{data.microcopy}</p>
        </div>
      </div>
    </section>
  );
};

export default CustomSection;
