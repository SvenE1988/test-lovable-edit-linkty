import React, { useState, useEffect, useRef } from "react";
import { Heading } from "../ui/heading";
import { Eyebrow } from "../ui/text";
import { StatCard } from "../ui/stat-card";

// ============================================================
// TYPES
// ============================================================

import { IStatsSectionData } from "@/types";

interface StatsSectionProps {
  data: IStatsSectionData;
}

// ============================================================
// COMPONENT
// ============================================================

/**
 * StatsSection - Statistics Grid with Counter Animation
 *
 * Framer Motion removed, keeping native JS counter animation.
 */
const StatsSection: React.FC<StatsSectionProps> = ({ data }) => {
  const displayStats = data.stats;
  const displayVariant = data.variant || "dark";
  const displayColumns = data.columns || 3;

  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [countersStarted, setCountersStarted] = useState(false);
  const [counts, setCounts] = useState<number[]>(displayStats.map(() => 0));

  // Simple IntersectionObserver instead of Framer Motion useInView
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView && !countersStarted) {
      setCountersStarted(true);
    }
  }, [isInView, countersStarted]);

  useEffect(() => {
    if (countersStarted) {
      displayStats.forEach((stat, index) => {
        const duration = 2000;
        const startTime = Date.now();
        const endValue = typeof stat.value === "string" ? parseFloat(stat.value) : stat.value;

        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out cubic
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const currentValue = Math.round(easeProgress * (endValue as number));

          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = currentValue;
            return newCounts;
          });

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      });
    }
  }, [countersStarted, displayStats]);

  const bgClass = displayVariant === "dark" ? "bg-brand-dark" : "bg-white";
  const colorScheme = displayVariant === "dark" ? "dark" : "light";

  const gridCols: Record<number, string> = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  };

  return (
    <section id={data.id} ref={ref} className={`py-section-lg ${bgClass}`}>
      <div className="global-wrapper">
        {/* Header */}
        {(data?.kicker || data?.headline) && (
          <div className="mb-16 text-center">
            {data?.kicker && <Eyebrow colorScheme={colorScheme}>{data.kicker}</Eyebrow>}
            {data?.headline && (
              <Heading
                level={2}
                variant="display-medium"
                colorScheme={colorScheme}
                accent={data.headlineAccent}
              >
                {data.headline}
              </Heading>
            )}
          </div>
        )}

        {/* Stats Grid */}
        <div
          className={`grid grid-cols-1 ${gridCols[displayColumns] || `md:grid-cols-${displayColumns}`} gap-8`}
        >
          {displayStats.map((stat, index) => (
            <div
              key={stat.id || index}
              style={{ willChange: "transform, opacity" }}
              className="transition-all duration-300"
            >
              <StatCard
                value={counts[index]}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
                colorScheme={displayVariant}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(StatsSection);
