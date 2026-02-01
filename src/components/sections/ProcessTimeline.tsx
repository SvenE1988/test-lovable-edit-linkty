import React from "react";
import {
  Search,
  Rocket,
  SlidersHorizontal,
  RefreshCw,
  LucideIcon,
  Settings,
  Zap,
  TrendingUp,
} from "lucide-react";
import { Heading } from "../ui/heading";
import { Text, Eyebrow } from "../ui/text";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import { IProcessTimelineData, ITimelineStep } from "@/types";

// ============================================================
// ICON MAPPING
// ============================================================
const iconMap: Record<string, LucideIcon> = {
  Search,
  Rocket,
  SlidersHorizontal,
  RefreshCw,
  Settings,
  Zap,
  TrendingUp,
};

// ============================================================
// TYPES
// ============================================================
interface ProcessTimelineProps {
  data: IProcessTimelineData;
}

interface TimelineItemProps {
  step: ITimelineStep;
  index: number;
}

// ============================================================
// TIMELINE ITEM COMPONENT
// ============================================================
const TimelineItem: React.FC<TimelineItemProps> = ({ step }) => {
  const Icon = step.icon && iconMap[step.icon] ? iconMap[step.icon] : Search;

  return (
    <div className="timeline-item relative" data-testid={`timeline-step-${step.id}`}>
      {/* Period Badge */}
      <div className="mb-4 flex items-center gap-3">
        <div className="border-brand-cyan/20 bg-brand-cyan/10 inline-flex items-center rounded-full border px-3 py-1.5 font-mono text-sm font-semibold text-brand-dark">
          {step.period}
        </div>
        {step.badge && (
          <div className="border-brand-mint/20 bg-brand-mint/10 text-brand-dark/70 inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium">
            {step.badge}
          </div>
        )}
      </div>

      {/* Icon + Title */}
      <div className="mb-4 flex items-start gap-4">
        <div className="from-brand-dark/5 to-brand-dark/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br">
          <Icon className="h-5 w-5 text-brand-cyan" />
        </div>
        <Heading level={3} variant="timeline-item" colorScheme="light" className="pt-1">
          {step.headline}
        </Heading>
      </div>

      {/* Description */}
      <Text as="p" variant="timeline-item" colorScheme="light" muted className="pl-0 md:pl-14">
        {step.description}
      </Text>
    </div>
  );
};

// ============================================================
// MAIN COMPONENT
// ============================================================
/**
 * ProcessTimeline - Unified Sticky Timeline Layout
 *
 * DESKTOP: Two-column layout with sticky left content
 * MOBILE: Stacked layout with constrained viewport scrolling
 *
 * Features:
 * - Centered vertical line in right column
 * - Sticky icon that stays visible while scrolling
 * - Consistent with InteractiveTimeline pattern
 * - Updated: Uses InteractiveHoverButton
 */
const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ data }) => {
  return (
    <section
      id={data.id}
      className="bg-white py-16 md:py-24 lg:py-32"
      data-testid="process-timeline-section"
    >
      <div className="global-wrapper">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* ===== LEFT COLUMN: Sticky Header ===== */}
          <div className="relative">
            <div className="lg:sticky lg:top-32 lg:h-fit">
              {data.kicker && (
                <Eyebrow colorScheme="light" className="mb-4">
                  {data.kicker}
                </Eyebrow>
              )}

              <Heading
                level={2}
                variant="display-large"
                colorScheme="light"
                accent={data.headlineAccent}
                className="mb-6"
              >
                {data.headline}
              </Heading>

              <Text variant="body-large" colorScheme="light" muted className="mb-8">
                {data.description}
              </Text>

              {/* Desktop: Scroll indicator */}
              <div className="text-brand-dark/50 hidden items-center gap-3 text-sm lg:flex">
                <div className="h-2 w-2 animate-pulse rounded-full bg-brand-mint" />
                <span>Scrolle, um die Schritte zu entdecken</span>
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
            <div className="sticky top-1/2 z-10 mb-8 h-12 w-12 -translate-y-1/2 md:h-14 md:w-14">
              <div className="shadow-brand-cyan/30 flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-mint text-white shadow-lg">
                <Rocket size={22} className="md:h-6 md:w-6" />
              </div>
            </div>

            {/* Timeline Items */}
            <div className="-mt-6 space-y-16 pl-16 md:space-y-20 md:pl-20 lg:space-y-24">
              {data.steps.map((step, index) => (
                <TimelineItem key={step.id} step={step} index={index} />
              ))}
            </div>

            {/* Bottom Section: Text + CTA */}
            <div className="border-brand-dark/10 mt-8 border-t pl-16 pt-12 md:pl-20 md:pt-16">
              {data.bottomText && (
                <p className="text-brand-dark/60 mb-6 text-base italic md:text-lg">
                  {data.bottomText}
                </p>
              )}

              {data.cta && (
                <InteractiveHoverButton
                  text={data.cta.text}
                  href={data.cta.href}
                  variant="primary"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ProcessTimeline);
