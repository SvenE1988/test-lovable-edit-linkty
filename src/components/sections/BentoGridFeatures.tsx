import {} from "react";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Heading } from "../ui/heading";
import { Text, Eyebrow } from "../ui/text";

// ============================================================
// TYPES
// ============================================================

import { IBentoGridData } from "@/types";

interface BentoGridFeaturesProps {
  data: IBentoGridData;
  variant?: "light" | "dark" | "surface";
  centered?: boolean;
}

// ============================================================
// HELPERS
// ============================================================

const getGridClass = (size?: string): string => {
  switch (size) {
    case "large": // 2x2
      return "md:col-span-1 md:row-span-2 min-h-[500px] md:min-h-0";
    case "wide": // 2x1
      return "md:col-span-2 md:row-span-1 min-h-[250px] md:min-h-0";
    case "tall": // 1x2
      return "md:col-span-1 md:row-span-2 min-h-[500px] md:min-h-0";
    case "normal": // 1x1
    default:
      return "md:col-span-1 md:row-span-1 min-h-[250px] md:min-h-0";
  }
};

const getBgColorClass = (colorName?: string): string => {
  const colorMap: Record<string, string> = {
    "slate-900": "bg-brand-slate-900",
    "slate-800": "bg-brand-slate-800",
    dark: "bg-brand-dark",
    "cyan-to-dark": "bg-gradient-to-r from-brand-cyan to-brand-dark",
  };
  return colorName ? colorMap[colorName] || "bg-brand-dark" : "bg-brand-dark";
};

// ============================================================
// COMPONENT
// ============================================================

/**
 * BentoGridFeatures - Generic Bento Grid for Features, Values, or Vision
 */
const BentoGridFeatures: React.FC<BentoGridFeaturesProps> = ({
  data,
  variant = "surface",
  centered = true,
}) => {
  const bgClass =
    variant === "dark" ? "bg-brand-dark" : variant === "light" ? "bg-white" : "bg-surface-light";
  const colorScheme = variant === "dark" ? "dark" : "light";

  return (
    <section
      id={data.id}
      className={cn("py-24", bgClass)}
      data-testid="bento-grid-features-section"
    >
      <div className="global-wrapper">
        {/* Header */}
        <div className={cn("mb-16 max-w-3xl", centered ? "mx-auto text-center" : "text-left")}>
          {data.kicker && (
            <Eyebrow colorScheme={colorScheme} className="mb-4">
              {data.kicker}
            </Eyebrow>
          )}

          <Heading level={2} variant="display-medium" colorScheme={colorScheme} className="mb-6">
            {data.headline}{" "}
            {data.headlineAccent && <span className="text-brand-cyan">{data.headlineAccent}</span>}
          </Heading>

          {data.description && (
            <Text variant="body-large" colorScheme={colorScheme} muted>
              {data.description}
            </Text>
          )}
        </div>

        {/* Grid */}
        <div className="grid auto-rows-[280px] grid-cols-1 gap-6 md:grid-cols-3">
          {data.items.map((item, index) => (
            <motion.div
              key={item.id || index}
              className={cn(
                "bento-item group relative overflow-hidden rounded-3xl shadow-sm transition-all duration-300 hover:shadow-xl",
                getGridClass(item.size)
              )}
              whileHover={{ y: -4, scale: 1.01 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ willChange: "transform, opacity" }}
            >
              {/* Background */}
              {item.image ? (
                <>
                  <img
                    src={typeof item.image === "string" ? item.image : item.image.src}
                    alt={typeof item.image === "string" ? item.headline || "" : item.image.alt}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="via-brand-dark/40 absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-90" />
                </>
              ) : (
                <div className={`absolute inset-0 ${getBgColorClass(item.bgColor)}`} />
              )}

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                {item.label && (
                  <span className="mb-4 inline-block w-fit rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-brand-mint backdrop-blur-sm">
                    {item.label}
                  </span>
                )}

                {item.headline && (
                  <Heading
                    level={3}
                    variant={item.size === "large" ? "bento-card-large" : "bento-card"}
                    colorScheme="dark"
                    className="mb-3"
                  >
                    {item.headline}
                  </Heading>
                )}

                {item.description && (
                  <Text as="p" variant="caption" colorScheme="dark" muted className="max-w-sm">
                    {item.description}
                  </Text>
                )}

                {item.quote && (
                  <div className="relative">
                    <Quote className="text-brand-mint/20 absolute -left-2 -top-10 mb-4 h-8 w-8" />
                    <blockquote className="relative z-10 text-xl font-medium leading-relaxed text-white md:text-2xl">
                      “{item.quote}”
                    </blockquote>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGridFeatures;
