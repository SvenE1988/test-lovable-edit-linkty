import {} from "react";
import { cn } from "@/lib/utils";
import { Text } from "../ui/text";
import { ILogoMarqueeData } from "@/types";

interface LogoMarqueeProps {
  data: ILogoMarqueeData;
}

/**
 * LogoMarquee - Infinite Scrolling Logos
 *
 * Replaced GSAP with pure CSS Animation for better performance.
 */
const LogoMarquee: React.FC<LogoMarqueeProps> = ({ data }) => {
  // Duplicate items for seamless loop
  const items = data.items || data.logos || [];
  // Triple the items to ensure smooth loop even on wide screens
  const allItems = [...items, ...items, ...items];

  return (
    <section
      className={cn(
        "overflow-hidden py-12",
        data.theme === "dark" ? "bg-brand-dark" : "bg-surface-light"
      )}
    >
      <div className="mx-auto mb-8 max-w-6xl px-6">
        <Text
          as="p"
          variant="label"
          colorScheme={data.theme === "dark" ? "dark" : "light"}
          subtle
          className="text-center font-medium"
        >
          {data.headline}
        </Text>
      </div>

      <div className="group relative">
        {/* Gradient Fade Edges */}
        <div
          className={cn(
            "pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-32",
            data.theme === "dark"
              ? "bg-gradient-to-r from-brand-dark to-transparent"
              : "bg-gradient-to-r from-surface-light to-transparent"
          )}
        />
        <div
          className={cn(
            "pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-32",
            data.theme === "dark"
              ? "bg-gradient-to-l from-brand-dark to-transparent"
              : "bg-gradient-to-l from-surface-light to-transparent"
          )}
        />

        {/* Scrolling Track - CSS Animation */}
        <div className="flex overflow-hidden">
          <div
            className="flex animate-marquee items-center gap-12 whitespace-nowrap py-4"
            style={{ willChange: "transform" }}
          >
            {allItems.map(
              (
                item: string | { name: string; image?: string; id?: string | number },
                index: number
              ) => {
                const name = typeof item === "string" ? item : item.name;
                const image = typeof item === "object" ? item.image : null;
                const id = typeof item === "object" ? item.id : index;

                return (
                  <div
                    key={`${id}-${index}`}
                    className="flex h-12 flex-shrink-0 items-center justify-center"
                  >
                    {image ? (
                      <img
                        src={image}
                        alt={name}
                        className={cn(
                          "h-8 w-auto object-contain transition-all duration-300",
                          data.theme === "dark"
                            ? "opacity-50 grayscale hover:opacity-100 hover:grayscale-0"
                            : "opacity-60 grayscale hover:opacity-100 hover:grayscale-0"
                        )}
                      />
                    ) : (
                      <span
                        className={cn(
                          "text-lg font-semibold",
                          data.theme === "dark" ? "text-white/40" : "text-brand-slate-400"
                        )}
                      >
                        {name}
                      </span>
                    )}
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>

      {/* Add CSS for Marquee if not in global css */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); } /* Move 1/3 since we tripled items */
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
            animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default LogoMarquee;
