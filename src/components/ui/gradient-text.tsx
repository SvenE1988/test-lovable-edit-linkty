import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * GradientText Component
 *
 * Renders text with a gradient color effect (background-clip: text).
 *
 * USAGE:
 * <GradientText variant="mint">Hervorgehobener Text</GradientText>
 *
 * // Inside a heading:
 * <Heading>Finde deine perfekte <GradientText>Weiterbildung</GradientText></Heading>
 *
 * @param {string} variant - 'mint' | 'teal' | 'cyan'
 * @param {string} as - HTML element to render ('span' | 'div' | 'p')
 */

const gradientVariants = {
  mint: "bg-gradient-to-r from-brand-mint to-cyan-400",
  teal: "bg-gradient-to-r from-brand-teal to-brand-cyan",
  cyan: "bg-gradient-to-r from-cyan-400 to-blue-500",
};

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "mint" | "teal" | "cyan";
  as?: React.ElementType;
}

const GradientText = React.forwardRef<HTMLSpanElement, GradientTextProps>(
  ({ variant = "mint", as: Component = "span", className, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "bg-clip-text text-transparent",
          gradientVariants[variant as keyof typeof gradientVariants],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
GradientText.displayName = "GradientText";

export { GradientText };
