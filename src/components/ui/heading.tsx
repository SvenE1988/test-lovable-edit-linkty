import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Heading Component - Token-based Typography
 */

const variantClasses = {
  // Core system tokens
  "display-huge": "text-display-huge",
  "display-large": "text-display-large",
  "display-medium": "text-display-medium",
  "heading-1": "text-heading-1",
  "heading-2": "text-heading-2",

  // Named exceptions / specialized roles (centralized)
  "timeline-item": "font-bold text-xl md:text-2xl lg:text-display-medium",
  stat: "text-4xl font-bold md:text-5xl",

  // Subtle & Sleek hierarchy
  // - cta: Footer CTA headline -> display-large (max 44px)
  // - cta-lite: Final CTA -> display-medium (max 32px)
  cta: "text-display-large font-bold tracking-tight",
  "cta-lite": "text-display-medium font-bold",

  "bento-card": "font-bold text-xl",
  "bento-card-large": "font-bold text-3xl",
};

const colorSchemeClasses = {
  dark: "text-white",
  light: "text-brand-dark",
};

const accentColorClasses = {
  dark: "text-brand-mint",
  light: "text-brand-cyan",
};

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: keyof typeof variantClasses;
  accent?: string;
  colorScheme?: keyof typeof colorSchemeClasses;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      level = 2,
      variant = "display-large",
      accent,
      colorScheme = "dark",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const Tag = `h${level}` as React.ElementType;
    const variantClass = variantClasses[variant] || variantClasses["display-large"];

    return (
      <Tag
        ref={ref}
        className={cn(variantClass, colorSchemeClasses[colorScheme], className)}
        {...props}
      >
        {children}
        {accent && <span className={accentColorClasses[colorScheme]}> {accent}</span>}
      </Tag>
    );
  }
);
Heading.displayName = "Heading";

export { Heading };
