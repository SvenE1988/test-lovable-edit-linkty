import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Text Component - Token-based Body Typography
 */

const variantClasses = {
  // Core system tokens
  "body-large": "text-body-large",
  "body-medium": "text-body-medium",
  "body-small": "text-body-small",
  label: "text-label",

  // Named exceptions / specialized roles (centralized)
  caption: "text-sm leading-relaxed",
  "timeline-item": "text-base leading-relaxed md:text-lg",
  statement: "text-display-medium font-medium leading-snug md:text-display-large",
};

const getColorClass = (colorScheme: "dark" | "light", muted: boolean, subtle: boolean) => {
  if (colorScheme === "dark") {
    if (subtle) return "text-white/50";
    if (muted) return "text-white/70";
    return "text-white";
  } else {
    if (subtle) return "text-brand-dark/50";
    if (muted) return "text-brand-dark/70";
    return "text-brand-dark";
  }
};

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: keyof typeof variantClasses;
  colorScheme?: "dark" | "light";
  muted?: boolean;
  subtle?: boolean;
  uppercase?: boolean;
  as?: React.ElementType;
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      variant = "body-medium",
      colorScheme = "dark",
      muted = false,
      subtle = false,
      uppercase = false,
      as: Component = "p",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          variantClasses[variant],
          getColorClass(colorScheme, muted, subtle),
          uppercase && "uppercase tracking-wider",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Text.displayName = "Text";

export interface EyebrowProps extends React.HTMLAttributes<HTMLParagraphElement> {
  colorScheme?: "dark" | "light";
}

// Convenience component for eyebrow/label text
const Eyebrow = React.forwardRef<HTMLParagraphElement, EyebrowProps>(
  ({ colorScheme = "dark", className, children, ...props }, ref) => {
    const accentColor = colorScheme === "dark" ? "text-brand-mint" : "text-brand-cyan";

    return (
      <p
        ref={ref}
        className={cn(
          "mb-4 text-label font-medium uppercase tracking-wider",
          accentColor,
          className
        )}
        {...props}
      >
        {children}
      </p>
    );
  }
);
Eyebrow.displayName = "Eyebrow";

export { Text, Eyebrow };
