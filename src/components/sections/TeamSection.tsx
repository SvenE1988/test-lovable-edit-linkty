/**
 * TeamSection Component - Modernized
 *
 * Optimized for GPU performance and Linkty Brand consistency.
 */
import {} from "react";
import { motion } from "framer-motion";
import { Heading } from "../ui/heading";
import { Text, Eyebrow } from "../ui/text";
import { fadeInUp, staggerContainer } from "@/lib/animations";

// ============================================================
// TYPES
// ============================================================

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  description?: string;
}

interface TeamSectionProps {
  eyebrow?: string;
  headline?: string;
  headlineAccent?: string;
  members?: TeamMember[];
  variant?: "muted" | "white" | "surface";
  columns?: 2 | 3 | 4;
}

// ============================================================
// COMPONENT
// ============================================================

const TeamSection: React.FC<TeamSectionProps> = ({
  eyebrow,
  headline,
  headlineAccent,
  members = [],
  variant = "muted",
  columns = 2,
}) => {
  const bgClass =
    variant === "muted"
      ? "bg-surface-light"
      : variant === "surface"
        ? "bg-surface-light"
        : "bg-white";

  const gridCols: Record<number, string> = {
    2: "md:grid-cols-2 max-w-5xl",
    3: "md:grid-cols-3 max-w-6xl",
    4: "md:grid-cols-4 max-w-7xl",
  };

  return (
    <section className={`py-24 ${bgClass}`}>
      <div className="global-wrapper">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={fadeInUp}
          style={{ willChange: "transform, opacity" }}
        >
          {eyebrow && (
            <Eyebrow colorScheme="light" className="mb-4">
              {eyebrow}
            </Eyebrow>
          )}
          <Heading level={2} variant="display-medium" colorScheme="light" accent={headlineAccent}>
            {headline}
          </Heading>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className={`grid grid-cols-1 ${gridCols[columns]} mx-auto gap-8`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
        >
          {members.map((member) => (
            <motion.div
              key={member.id}
              className="team-card group"
              variants={fadeInUp}
              style={{ willChange: "transform, opacity" }}
            >
              {/* Image Container */}
              <div className="relative mb-6 aspect-square overflow-hidden rounded-3xl shadow-sm transition-all duration-500 group-hover:shadow-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover grayscale filter transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Info */}
              <Heading level={3} variant="heading-1" colorScheme="light" className="mb-1">
                {member.name}
              </Heading>
              <p className="mb-4 text-sm font-medium text-brand-cyan">{member.role}</p>
              {member.description && (
                <Text variant="body-medium" colorScheme="light" muted className="leading-relaxed">
                  {member.description}
                </Text>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
