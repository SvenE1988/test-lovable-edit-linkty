"use client";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/ui/heading";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export interface StackingCardItem {
  id: string;
  headline: string;
  description: string;
  image: { src: string; alt: string } | string;
  icon?: React.ReactNode;
  cta?: { text: string; href: string };
  className?: string; // For background colors/gradients
  textColor?: string; // 'text-white' or 'text-brand-dark'
}

interface CardProps {
  i: number;
  item: StackingCardItem;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const Card = ({ i, item, progress, range, targetScale }: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="sticky top-0 flex h-screen items-center justify-center">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          willChange: "transform",
        }}
        className={cn(
          "relative -top-[25%] flex h-[60vh] w-full max-w-5xl origin-top flex-col overflow-hidden rounded-3xl shadow-2xl",
          "border border-white/50 backdrop-blur-sm",
          item.className || "bg-white"
        )}
      >
        <div className="grid h-full grid-cols-1 md:grid-cols-2">
          {/* Text Content */}
          <div
            className={cn(
              "flex h-full flex-col justify-center p-8 md:p-12",
              item.textColor || "text-brand-dark"
            )}
          >
            <div className="mb-auto">
              {item.icon && <div className="mb-6">{item.icon}</div>}

              <Heading
                level={3}
                variant="display-medium"
                colorScheme={item.textColor === "text-white" ? "dark" : "light"}
                className="mb-4"
              >
                {item.headline}
              </Heading>
              <p className={cn("text-lg leading-relaxed opacity-90")}>{item.description}</p>
            </div>

            {item.cta && (
              <a href={item.cta.href}>
                <InteractiveHoverButton
                  text={item.cta.text}
                  variant={item.textColor === "text-white" ? "outline" : "primary"}
                />
              </a>
            )}
          </div>

          {/* Image / Visual Side */}
          <div className="relative hidden h-full overflow-hidden bg-surface-card md:block">
            <motion.div className="h-full w-full" style={{ scale: imageScale }}>
              <img
                src={typeof item.image === "string" ? item.image : item.image.src}
                alt={typeof item.image === "string" ? item.headline : item.image.alt}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface StackingCardsProps {
  items: StackingCardItem[];
}

export const StackingCards = ({ items }: StackingCardsProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <>
      {/* Mobile View: Simple Vertical Stack (Performance Optimized) */}
      <div className="flex w-full flex-col gap-6 md:hidden">
        {items.map((item) => (
          <div
            key={item.id}
            className={cn(
              "flex w-full flex-col overflow-hidden rounded-3xl border border-white/50 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl",
              item.className || "bg-white"
            )}
          >
            {/* Image Section */}
            <div className="relative h-48 w-full overflow-hidden bg-surface-card">
              <img
                src={typeof item.image === "string" ? item.image : item.image.src}
                alt={typeof item.image === "string" ? item.headline : item.image.alt}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className={cn("flex flex-col p-6", item.textColor || "text-brand-dark")}>
              {item.icon && <div className="mb-4">{item.icon}</div>}

              <Heading
                level={3}
                variant="display-medium"
                colorScheme={item.textColor === "text-white" ? "dark" : "light"}
                className="mb-3"
              >
                {item.headline}
              </Heading>
              <p className={cn("mb-6 text-base leading-relaxed opacity-90")}>{item.description}</p>

              {item.cta && (
                <div className="mt-auto">
                  <a href={item.cta.href}>
                    <InteractiveHoverButton
                      text={item.cta.text}
                      variant={item.textColor === "text-white" ? "outline" : "primary"}
                      className="w-full justify-center"
                    />
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View: Sticky Scroll Effect */}
      <div ref={container} className="relative hidden w-full md:block">
        {items.map((item, i) => {
          const targetScale = 1 - (items.length - i) * 0.05;
          return (
            <Card
              key={item.id}
              i={i}
              item={item}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </>
  );
};

export default StackingCards;
