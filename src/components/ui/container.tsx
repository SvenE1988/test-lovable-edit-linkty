import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Container Component - Consistent Content Wrapper
 *
 * Provides consistent max-width and padding across all sections.
 * Uses the global-wrapper pattern but as a component.
 *
 * USAGE:
 * <Container>Content here</Container>
 * <Container size="narrow">Narrow content</Container>
 * <Container size="wide">Wide content</Container>
 *
 * @param {string} size - 'narrow' | 'default' | 'wide' | 'full'
 */

const sizeClasses = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
  full: "max-w-none",
};

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { size?: keyof typeof sizeClasses }
>(({ size = "default", className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("mx-auto px-4 sm:px-6 lg:px-8", sizeClasses[size], className)}
      {...props}
    >
      {children}
    </div>
  );
});
Container.displayName = "Container";

export { Container };
