import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * IconButton Component - Circular Icon Buttons
 *
 * Used for social links, contact buttons, and icon-only actions.
 */

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  href?: string;
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  ariaLabel?: string;
}

const IconButton = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, IconButtonProps>(
  ({ icon, href, variant = "dark", size = "md", ariaLabel, className, ...props }, ref) => {
    const sizeClasses = {
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-12 w-12",
    };

    const variantClasses = {
      dark: {
        base: "bg-white/10 text-white border-white/20",
        hover: "hover:bg-brand-mint hover:text-brand-dark hover:border-brand-mint",
      },
      light: {
        base: "bg-brand-dark/10 text-brand-dark border-brand-dark/20",
        hover: "hover:bg-brand-dark hover:text-white hover:border-brand-dark",
      },
    };

    const classes = cn(
      "flex items-center justify-center rounded-full border transition-all duration-300",
      sizeClasses[size],
      variantClasses[variant].base,
      variantClasses[variant].hover,
      className
    );

    const content = (
      <div
        className={cn(
          "[&_svg]:h-5 [&_svg]:w-5",
          size === "sm" && "[&_svg]:h-4 [&_svg]:w-4",
          size === "lg" && "[&_svg]:h-6 [&_svg]:w-6"
        )}
      >
        {icon}
      </div>
    );

    if (href) {
      const { type: _type, ...anchorProps } =
        props as React.AnchorHTMLAttributes<HTMLAnchorElement> & { type?: never };
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          aria-label={ariaLabel}
          {...anchorProps}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type="button"
        className={classes}
        aria-label={ariaLabel}
        {...props}
      >
        {content}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

export { IconButton };
