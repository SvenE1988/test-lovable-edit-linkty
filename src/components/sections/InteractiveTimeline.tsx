import React from "react";
import { Send, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Heading } from "../ui/heading";
import { Text, Eyebrow } from "../ui/text";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

// ============================================================
// TYPES
// ============================================================
interface TimelineItem {
  id: string | number;
  period: string;
  headline: string;
  description: string;
}

interface TimelineItemProps {
  item: TimelineItem;
  index: number;
}

interface InteractiveTimelineProps {
  eyebrow?: string;
  headline?: string;
  headlineAccent?: string;
  description?: string;
  items?: TimelineItem[];
  variant?: "light" | "dark";
  cta?: {
    text: string;
    href: string;
  };
}

const TimelineItemComponent: React.FC<TimelineItemProps> = ({ item, index }) => (
  <motion.div
    className="timeline-item relative"
    data-testid={`timeline-item-${item.id}`}
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    style={{ willChange: "transform, opacity" }}
  >
    {/* Year/Period Bubble */}
    <div className="border-brand-mint/20 bg-brand-mint/10 mb-4 inline-block rounded-full border px-3 py-1.5 font-mono text-sm font-semibold text-brand-dark">
      {item.period}
    </div>

    {/* Title */}
    <Heading level={3} variant="timeline-item" colorScheme="light" className="mb-4">
      {item.headline}
    </Heading>

    {/* Description */}
    <Text as="p" variant="timeline-item" colorScheme="light" muted>
      {item.description}
    </Text>
  </motion.div>
);

// ============================================================
// MAIN COMPONENT
// ============================================================
/**
 * InteractiveTimeline - Unified Sticky Timeline Layout
 *
 * DESKTOP: Two-column layout with sticky left content
 * MOBILE: Stacked layout with constrained viewport scrolling
 *
 * Features:
 * - Centered vertical line in right column
 * - Sticky icon that stays visible while scrolling
 * - Consistent with ProcessTimeline pattern
 */
const InteractiveTimeline: React.FC<InteractiveTimelineProps> = ({
  eyebrow,
  headline,
  headlineAccent,
  description,
  items = [],
  variant = "light",
  cta,
}) => {
  const isDark = variant === "dark";
  const colorScheme = isDark ? "dark" : "light";
  const bgClass = isDark ? "bg-brand-dark" : "bg-white";

  return (
    <section
      className={cn("py-16 md:py-24 lg:py-32", bgClass)}
      data-testid="interactive-timeline-section"
    >
      <div className="global-wrapper">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* ===== LEFT COLUMN: Sticky Header ===== */}
          <div className="relative">
            <div className="lg:sticky lg:top-32 lg:h-fit">
              {eyebrow && (
                <Eyebrow colorScheme={colorScheme} className="mb-4">
                  {eyebrow}
                </Eyebrow>
              )}

              <Heading
                level={2}
                variant="display-medium"
                colorScheme={colorScheme}
                accent={headlineAccent}
                className="mb-6"
              >
                {headline}
              </Heading>

              {description && (
                <Text variant="body-large" colorScheme={colorScheme} muted className="mb-8">
                  {description}
                </Text>
              )}

              {/* Desktop: Scroll indicator */}
              <div className="text-brand-dark/50 hidden items-center gap-3 text-sm lg:flex">
                <div className="h-2 w-2 animate-pulse rounded-full bg-brand-cyan" />
                <span>Scrolle, um unsere Geschichte zu entdecken</span>
              </div>
            </div>
          </div>

          {/* ===== RIGHT COLUMN: Timeline Content ===== */}
          <div className="relative">
            {/* Vertical Line - Centered under icon */}
            <div
              className="from-brand-cyan/20 via-brand-cyan/40 to-brand-cyan/20 absolute bottom-0 left-[23px] top-0 w-[2px] bg-gradient-to-b md:left-[27px]"
              aria-hidden="true"
            />

            {/* Sticky Timeline Icon */}
            <motion.div
              className="sticky top-1/2 z-10 mb-8 h-12 w-12 -translate-y-1/2 md:h-14 md:w-14"
              style={{ willChange: "transform" }}
            >
              <div className="shadow-brand-cyan/20 flex h-full w-full -rotate-12 transform items-center justify-center rounded-full bg-brand-cyan text-white shadow-lg transition-transform duration-300 hover:rotate-0 hover:scale-110">
                <Send size={22} className="-ml-0.5 mt-0.5 md:h-6 md:w-6" />
              </div>
            </motion.div>

            {/* Timeline Items */}
            <div className="-mt-6 space-y-16 pl-16 md:space-y-20 md:pl-20 lg:space-y-24">
              {items.map((item, index) => (
                <TimelineItemComponent key={item.id} item={item} index={index} />
              ))}
            </div>

            {/* Optional CTA at bottom */}
            {cta && (
              <div className="border-brand-dark/10 mt-8 border-t pl-16 pt-12 md:pl-20 md:pt-16">
                <Button
                  variant="default"
                  size="lg"
                  className="group bg-brand-dark text-white hover:bg-brand-darker"
                  asChild
                  data-testid="interactive-timeline-cta"
                >
                  <a href={cta.href}>
                    {cta.text}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(InteractiveTimeline);
