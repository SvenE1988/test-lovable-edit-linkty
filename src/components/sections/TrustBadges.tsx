/**
 * TrustBadges Component - Modernized
 *
 * GPU optimized and styled for Linkty Brand.
 */
import {} from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

// ============================================================
// TYPES
// ============================================================

interface TrustBadge {
  text?: string;
  icon?: string;
  image?: string;
}

interface TrustBadgesProps {
  badges: TrustBadge[];
  className?: string;
}

// ============================================================
// COMPONENT
// ============================================================

const TrustBadges: React.FC<TrustBadgesProps> = ({ badges, className }) => {
  return (
    <motion.div
      className={cn("mt-12 flex flex-wrap items-center justify-center gap-8", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      style={{ willChange: "transform, opacity" }}
    >
      {badges.map((badge, index) => (
        <motion.div
          key={index}
          className="trust-badge-item group flex items-center gap-3 transition-all duration-300"
          variants={fadeInUp}
          style={{ willChange: "transform, opacity" }}
        >
          {badge.image ? (
            <div className="opacity-50 transition-opacity duration-300 group-hover:opacity-100">
              <img
                src={badge.image}
                alt={badge.text || "Trust Badge"}
                className="h-10 w-auto grayscale transition-all duration-500 group-hover:grayscale-0"
              />
            </div>
          ) : (
            <span className="flex items-center gap-2 text-sm font-medium text-white/40 transition-colors duration-300 group-hover:text-brand-mint">
              {badge.icon && (
                <span className="text-brand-mint/60 group-hover:text-brand-mint">{badge.icon}</span>
              )}
              {badge.text}
            </span>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TrustBadges;
