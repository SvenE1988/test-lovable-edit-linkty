import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Section - Token-based Section Wrapper
 * 
 * Provides consistent spacing and background colors for page sections.
 */

const variantClasses = {
  dark: 'bg-brand-dark',
  darker: 'bg-brand-darker',
  light: 'bg-white',
  'surface-light': 'bg-surface-light',
  gradient: 'bg-gradient-to-br from-brand-dark to-brand-darker',
  'gradient-mint': 'bg-surface-light',
  transparent: '',
};

const spacingClasses = {
  none: '',
  sm: 'py-section-sm',
  md: 'py-section-md',
  lg: 'py-section-lg',
  xl: 'py-section-xl',
  '2xl': 'py-section-2xl',
};

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: keyof typeof variantClasses;
  spacing?: keyof typeof spacingClasses;
  id?: string;
  fullWidth?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  variant = 'transparent',
  spacing = 'lg',
  id,
  fullWidth = false,
  className = '',
  ...props
}) => {
  return (
    <section
      id={id}
      className={cn(
        variantClasses[variant],
        spacingClasses[spacing],
        className
      )}
      {...props}
    >
      {fullWidth ? children : <div className="global-wrapper">{children}</div>}
    </section>
  );
};

export default Section;
