import * as React from "react";
import { cn } from "@/lib/utils";
import * as LucideIcons from "lucide-react";

/**
 * FeatureCard Component
 *
 * A card displaying a feature with icon, title, and description.
 * Used in feature grids (like velptec.de "Lern-Experience" section).
 *
 * USAGE:
 * <FeatureCard
 *   icon="GraduationCap"
 *   title="Lerne so, wie du es willst"
 *   description="Gestalte deine Weiterbildung individuell..."
 *   colorScheme="light"
 * />
 *
 * @param {string|ReactNode} icon - Lucide icon name or custom icon
 * @param {string} headline - Card headline
 * @param {string} description - Card description
 * @param {string} badge - Optional badge text
 * @param {string} colorScheme - 'dark' | 'light'
 * @param {string} variant - 'default' | 'bordered' | 'filled'
 */

const colorSchemes = {
  dark: {
    container: "bg-white/5 border-white/10",
    iconBg: "bg-white/10",
    iconColor: "text-brand-mint",
    title: "text-white",
    description: "text-white/70",
    badge: "bg-brand-mint/20 text-brand-mint",
  },
  light: {
    container: "bg-white border-gray-200",
    iconBg: "bg-brand-dark/5",
    iconColor: "text-brand-cyan",
    title: "text-brand-dark",
    description: "text-brand-dark/70",
    badge: "bg-brand-cyan/10 text-brand-cyan",
  },
};

const variantStyles = {
  default: "",
  bordered: "border",
  filled: "",
};

export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: string | React.ReactNode;
  headline: string;
  description: string;
  badge?: string;
  colorScheme?: "dark" | "light";
  variant?: "default" | "bordered" | "filled";
}

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  (
    {
      icon,
      headline,
      description,
      badge,
      colorScheme = "light",
      variant = "bordered",
      className,
      ...props
    },
    ref
  ) => {
    const scheme = colorSchemes[colorScheme];

    // Resolve icon - either string (Lucide name) or ReactNode
    const IconComponent =
      typeof icon === "string"
        ? (LucideIcons as unknown as Record<string, React.ComponentType<unknown>>)[icon] ||
          LucideIcons.Star
        : null;

    return (
      <div
        ref={ref}
        className={cn(
          "feature-card",
          "rounded-2xl p-6 md:p-8",
          "transition-all duration-300",
          "hover:-translate-y-1 hover:shadow-lg",
          scheme.container,
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {/* Icon Container */}
        <div
          className={cn(
            "mb-4 flex h-12 w-12 items-center justify-center rounded-xl",
            scheme.iconBg
          )}
        >
          {IconComponent ? (
            <div className={cn("h-6 w-6 [&>svg]:h-full [&>svg]:w-full", scheme.iconColor)}>
              <IconComponent />
            </div>
          ) : (
            <span className={scheme.iconColor}>{icon}</span>
          )}
        </div>

        {/* Badge (optional) */}
        {badge && (
          <span
            className={cn(
              "mb-3 inline-block rounded-full px-2 py-1 text-xs font-medium",
              scheme.badge
            )}
          >
            {badge}
          </span>
        )}

        {/* Headline */}
        <h3 className={cn("mb-2 text-lg font-semibold md:text-xl", scheme.title)}>{headline}</h3>

        {/* Description */}
        <p className={cn("text-sm leading-relaxed md:text-base", scheme.description)}>
          {description}
        </p>
      </div>
    );
  }
);
FeatureCard.displayName = "FeatureCard";

export { FeatureCard };
