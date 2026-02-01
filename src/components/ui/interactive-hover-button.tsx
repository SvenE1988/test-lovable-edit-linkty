import {} from "react";
import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { BookingModal } from "@/components/ui/booking-modal";

interface InteractiveHoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  variant?: "primary" | "outline";
  href?: string;
  isBookingCTA?: boolean;
}

type ButtonRef = HTMLButtonElement;
type AnchorRef = HTMLAnchorElement;

/**
 * InteractiveHoverButton - Linkty Custom (Fixed Animation)
 *
 * Features:
 * - Expanding circle (Dot) acts as the background fill on hover
 * - Text slides out to the right
 * - New Text slides in from the left
 * - Accessibility: min 44px touch target, visible focus states
 * - Optional: Opens BookingModal for demo CTAs
 */
export const InteractiveHoverButton = React.forwardRef<
  ButtonRef | AnchorRef,
  InteractiveHoverButtonProps
>(({ text = "Button", className, variant = "primary", isBookingCTA = false, ...props }, ref) => {
  const isPrimary = variant === "primary";

  // ... (rest of logic remains similar, but ensure types match for button vs a)
  const containerClasses = isPrimary
    ? "bg-brand-mint border-brand-mint text-brand-dark"
    : "bg-white/5 border-white/30 text-white backdrop-blur-sm";

  const hoverCircleColor = isPrimary ? "bg-brand-dark" : "bg-white";
  const hoverTextColor = isPrimary ? "text-brand-mint" : "text-brand-dark";
  const focusRingColor = isPrimary
    ? "focus-visible:ring-brand-dark focus-visible:ring-offset-brand-mint"
    : "focus-visible:ring-white focus-visible:ring-offset-brand-dark";

  const baseClasses = cn(
    "group relative w-auto cursor-pointer overflow-hidden rounded-full border px-6 text-center font-semibold",
    "min-h-[44px] h-11",
    "transition-colors duration-300 flex items-center justify-center",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    focusRingColor,
    containerClasses,
    className
  );

  const buttonContent = (
    <>
      <div
        className={cn(
          "absolute left-3 top-1/2 z-0 h-2 w-2 -translate-y-1/2 rounded-full transition-all duration-500 group-hover:scale-[150]",
          hoverCircleColor
        )}
        style={{ willChange: "transform" }}
        aria-hidden="true"
      />
      <div className="relative z-10 flex items-center justify-center pl-4 transition-all duration-300 group-hover:translate-x-[120%] group-hover:opacity-0">
        <span>{text}</span>
      </div>
      <div
        className={cn(
          "absolute inset-0 z-10 flex h-full w-full items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100",
          hoverTextColor
        )}
        aria-hidden="true"
      >
        <span className="translate-x-[-10px] transition-transform duration-300 group-hover:translate-x-0">
          {text}
        </span>
        <ArrowRight className="h-4 w-4 translate-x-[-10px] transition-transform duration-300 group-hover:translate-x-0" />
      </div>
    </>
  );

  if (isBookingCTA) {
    return (
      <BookingModal
        trigger={
          <button
            ref={ref as React.Ref<HTMLButtonElement>}
            className={baseClasses}
            data-testid="booking-cta-btn"
            type="button"
            {...props}
          >
            {buttonContent}
          </button>
        }
      />
    );
  }

  if (props.href) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { type: _typeCTA, ...anchorProps } =
      props as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={props.href}
        className={baseClasses}
        {...anchorProps}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={baseClasses}
      type={props.type || "button"}
      {...props}
    >
      {buttonContent}
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
