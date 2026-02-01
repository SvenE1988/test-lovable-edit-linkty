import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';
import typography from '@tailwindcss/typography';

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      // ===== BRAND COLORS (Mapped to CSS Variables) =====
      colors: {
        brand: {
          dark: 'var(--brand-dark)',
          darker: 'var(--brand-darker)',
          mint: 'var(--brand-mint)',
          'mint-light': 'var(--brand-mint-light)',
          cyan: 'var(--brand-cyan)',
          teal: 'var(--brand-teal)',
          // Neutral scale (slate)
          slate: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
            950: '#020617',
          },
        },
        // Semantic Surface Colors
        surface: {
          dark: 'var(--surface-dark)',
          light: 'var(--surface-light)',
          muted: 'var(--surface-muted, #f0f4f8)',
          white: 'var(--surface-white)',
          card: 'var(--surface-card)',
        },
        // Semantic Text Colors
        content: {
          DEFAULT: 'var(--content-primary)',
          muted: 'var(--content-muted)',
          subtle: 'var(--content-subtle)',
          accent: 'var(--content-accent)',
        },
        // Shadcn defaults (keep for compatibility)
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },

      // ===== SPACING TOKENS =====
      spacing: {
        'section-sm': '3rem',
        'section-md': '4rem',
        'section-lg': '6rem',
        'section-xl': '8rem',
        'section-2xl': '10rem',
      },

      // ===== TYPOGRAPHY (Subtle & Sleek / SaaS-Excellence) =====
      fontSize: {
        // Hero headline (max 64px)
        'display-huge': ['clamp(2.25rem, 5vw, 4rem)', {
          lineHeight: '1.05',
          letterSpacing: '-0.03em',
          fontWeight: '700',
        }],

        // Section headlines + Footer CTA (max 44px)
        'display-large': ['clamp(1.75rem, 4vw, 2.75rem)', {
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        }],

        // Statements / Manifesto (max 32px)
        'display-medium': ['clamp(1.5rem, 3vw, 2rem)', {
          lineHeight: '1.15',
          letterSpacing: '-0.01em',
          fontWeight: '600',
        }],

        // Bento + Card titles (max 22px)
        'heading-1': ['clamp(1.125rem, 2vw, 1.375rem)', {
          lineHeight: '1.25',
          fontWeight: '600',
        }],

        // Sub headlines (max 20px)
        'heading-2': ['clamp(1rem, 1.5vw, 1.25rem)', {
          lineHeight: '1.3',
          fontWeight: '600',
        }],

        // Lead text / Footer claim
        'body-large': ['clamp(1.0625rem, 1.25vw, 1.1875rem)', {
          lineHeight: '1.6',
          fontWeight: '400',
        }],

        // Standard body (18px)
        'body-medium': ['1.125rem', {
          lineHeight: '1.6',
          fontWeight: '400',
        }],

        // Supporting text
        'body-small': ['1rem', {
          lineHeight: '1.5',
          fontWeight: '400',
        }],

        // Eyebrows / labels
        'label': ['0.875rem', {
          lineHeight: '1.2',
          letterSpacing: '0.05em',
          fontWeight: '500',
        }],
      },

      // ===== BORDER RADIUS =====
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        'card': '1rem',
        'hero': '1.5rem',
      },

      // ===== SHADOWS =====
      boxShadow: {
        'card': '0 12px 24px rgba(0,0,0,0.15)',
        'card-hover': '0 20px 40px rgba(0,0,0,0.2)',
        'glow-mint': '0 0 30px rgba(45,212,191,0.3)',
        'glow-subtle': '0 0 20px rgba(45,212,191,0.15)',
      },

      // ===== BACKGROUND GRADIENTS =====
      backgroundImage: {
        // Text Gradients (for gradient text effect)
        'gradient-text-mint': 'linear-gradient(90deg, #2dd4bf 0%, #06b6d4 100%)',
        'gradient-text-teal': 'linear-gradient(90deg, #14b8a6 0%, #0891b2 100%)',

        // Section Gradients
        'gradient-subline': 'linear-gradient(180deg, #00203d 0%, #003049 40%, #0a4d5c 70%, #14b8a6 100%)',
        'gradient-footer': 'linear-gradient(180deg, #14b8a6 0%, #0d9488 50%, #0f766e 100%)',

        // Overlays
        'gradient-dark-overlay': 'linear-gradient(180deg, rgba(0,32,61,0) 0%, rgba(0,32,61,0.8) 100%)',
      },

      // ===== TRANSITIONS =====
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
      transitionDuration: {
        '400': '400ms',
      },

      // ===== ANIMATIONS =====
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.9' },
          '50%': { opacity: '1' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 8s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'gradient-shift': 'gradient-shift 6s ease infinite',
      }
    }
  },
  plugins: [tailwindcssAnimate, typography],
};

export default config;
