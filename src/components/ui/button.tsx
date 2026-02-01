import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight, ArrowDown, Calendar, ArrowUpRight, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Button Component - Extended with Linkty Design System
 *
 * Accessibility:
 * - All buttons have min 44px touch target for mobile
 * - Visible focus states with ring-2
 * - Proper focus-visible for keyboard navigation
 */

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group",
  {
    variants: {
      variant: {
        // === Shadcn Defaults ===
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90 rounded-md",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 rounded-md",
        outline:
          "border border-input shadow-sm hover:bg-accent hover:text-accent-foreground rounded-md",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 rounded-md",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-md",
        link: "text-primary underline-offset-4 hover:underline",

        // === Linkty Variants (Pill-Shape like velptec.de) ===
        "linkty-primary":
          "magnetic-btn rounded-full bg-brand-mint text-brand-dark hover:bg-brand-dark hover:text-white hover:shadow-glow-mint border border-transparent focus-visible:ring-offset-brand-dark",
        "linkty-primary-dark":
          "magnetic-btn rounded-full bg-brand-dark text-white hover:bg-brand-mint hover:text-brand-dark border border-transparent focus-visible:ring-offset-white",
        "linkty-outline":
          "magnetic-btn rounded-full bg-white/5 border border-white/30 text-white hover:bg-white hover:text-brand-dark backdrop-blur-sm focus-visible:ring-offset-brand-dark",
        "linkty-outline-dark":
          "magnetic-btn rounded-full bg-transparent border border-brand-dark/20 text-brand-dark hover:border-brand-dark/40 focus-visible:ring-offset-white",
        "linkty-ghost":
          "rounded-full bg-transparent text-white/80 border border-white/20 hover:border-white/40 hover:text-white focus-visible:ring-offset-brand-dark",
        "linkty-ghost-dark":
          "rounded-full bg-transparent text-brand-dark/70 border border-brand-dark/20 hover:border-brand-dark/40 hover:text-brand-dark focus-visible:ring-offset-white",
        "linkty-gradient":
          "magnetic-btn rounded-full bg-gradient-to-r from-brand-cyan to-brand-mint text-brand-dark hover:shadow-glow-mint hover:scale-[1.02] border-none focus-visible:ring-offset-brand-dark",
      },
      size: {
        // === Shadcn Defaults (with min touch target) ===
        default: "min-h-[44px] h-11 px-4 py-2 text-sm",
        sm: "min-h-[44px] h-10 px-3 text-xs",
        lg: "min-h-[44px] h-11 px-8 text-sm",
        icon: "min-h-[44px] min-w-[44px] h-11 w-11",

        // === Linkty Sizes (with min touch target) ===
        cta: "min-h-[44px] py-4 px-8 text-base",
        "cta-sm": "min-h-[44px] py-3 px-6 text-sm",
        "cta-lg": "min-h-[52px] py-5 px-10 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const iconMap = {
  arrow: ArrowRight,
  down: ArrowDown,
  calendar: Calendar,
  external: ArrowUpRight,
  phone: Phone,
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: keyof typeof iconMap;
  iconPosition?: "left" | "right";
  iconSize?: number;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      icon,
      iconPosition = "right",
      iconSize = 18,
      asChild = false,
      href,
      children,
      ...props
    },
    ref
  ) => {
    const IconComponent = icon ? iconMap[icon] : null;

    const iconAnimationClass =
      icon === "down" ? "group-hover:translate-y-1" : "group-hover:translate-x-1";

    // If href is provided, render as anchor
    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {IconComponent && iconPosition === "left" && (
            <IconComponent size={iconSize} className="transition-transform" />
          )}
          {children}
          {IconComponent && iconPosition === "right" && (
            <IconComponent
              size={iconSize}
              className={cn("transition-transform", iconAnimationClass)}
            />
          )}
        </a>
      );
    }

    // If asChild is true, we need to handle it differently
    if (asChild) {
      return (
        <Slot
          ref={ref as React.Ref<HTMLButtonElement>}
          className={cn(buttonVariants({ variant, size, className }))}
          {...props}
        >
          {children}
        </Slot>
      );
    }

    // Default: render as button
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {IconComponent && iconPosition === "left" && (
          <IconComponent size={iconSize} className="transition-transform" />
        )}
        {children}
        {IconComponent && iconPosition === "right" && (
          <IconComponent
            size={iconSize}
            className={cn("transition-transform", iconAnimationClass)}
          />
        )}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
