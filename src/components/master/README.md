# Master Components

This directory contains the **Master Components** that serve as the "Single Source of Truth" for our design system.

## Philosophy

These components define the global standards for:
- Layout patterns
- Spacing and typography
- Color schemes
- Animation styles
- Interaction patterns

All other components MUST follow the design rules established by these master components.

## Current Master Components

### 1. MasterFooter
**Purpose:** Global footer with integrated CTA section  
**Location:** Used in `PageLayout.tsx`  
**Features:**
- Combined CTA + Footer for all pages
- Gradient background with ellipse effect
- Contact buttons with icons
- Social media links
- Responsive grid layout

**Usage:**
```tsx
<MasterFooter ctaData={{
  headline: "Your Headline",
  headlineAccent: "Accent Text", // Optional
  subline: "Your subline text",
  cta: {
    primary: { text: "Button Text", href: "#link" },
    secondary: { text: "Secondary", href: "#link" } // Optional
  },
  microcopy: "Small print text" // Optional
}} />
```

### 2. ReusableHero (Coming Soon)
Flexible hero component supporting video and image backgrounds

### 3. GlobalNavigation (Coming Soon)
Master navigation component with consistent styling

## Design Principles

1. **Consistency:** All components must match the visual language of master components
2. **Reusability:** Props-based flexibility without compromising design integrity
3. **Maintainability:** Single source of truth = changes propagate globally
4. **Simplicity:** Avoid over-engineering, keep implementations clean

## Adding New Master Components

Before creating a new master component:
1. Ensure it will be used on multiple pages
2. Define clear props interface
3. Document usage examples
4. Test on all viewport sizes
5. Update this README
