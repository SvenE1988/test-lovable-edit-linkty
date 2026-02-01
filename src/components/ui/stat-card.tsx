import * as React from "react";
import { cn } from "@/lib/utils";
import { Heading } from "./heading";
import { Text } from "./text";

/**
 * StatCard Component
 */

const colorSchemes = {
  dark: {
    border: "border-white/10 bg-white/5",
    valueColor: "text-brand-mint",
    colorScheme: "dark" as const,
  },
  light: {
    border: "border-brand-dark/10 bg-brand-dark/5",
    valueColor: "text-brand-cyan",
    colorScheme: "light" as const,
  },
};

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string | number;
  label: string;
  prefix?: string;
  suffix?: string;
  description?: string;
  colorScheme?: keyof typeof colorSchemes;
}

const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  (
    { value, label, prefix, suffix, description, colorScheme = "light", className, ...props },
    ref
  ) => {
    const scheme = colorSchemes[colorScheme];

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-3xl border p-8 transition-all duration-300 hover:shadow-lg",
          scheme.border,
          className
        )}
        {...props}
      >
        <Heading
          level={3}
          variant="stat"
          colorScheme={scheme.colorScheme}
          className={cn("mb-2", scheme.valueColor)}
        >
          {prefix && <span className="mr-1">{prefix}</span>}
          {value}
          {suffix && <span className="ml-1">{suffix}</span>}
        </Heading>
        <Text
          as="div"
          variant="body-large"
          colorScheme={scheme.colorScheme}
          className="mb-2 font-semibold"
        >
          {label}
        </Text>
        {description && (
          <Text as="div" variant="body-small" colorScheme={scheme.colorScheme} muted>
            {description}
          </Text>
        )}
      </div>
    );
  }
);
StatCard.displayName = "StatCard";

export { StatCard };
