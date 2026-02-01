# Aceternity UI Components

This directory contains Aceternity UI components copied from https://ui.aceternity.com

## Installation Method

Aceternity UI is a **copy-paste component library** - no npm package needed.

Components are copied directly from the website and adapted for our project.

## Dependencies Already Installed

✅ framer-motion  
✅ lucide-react  
✅ class-variance-authority  
✅ clsx  
✅ tailwind-merge

## How to Add Components

1. Visit https://ui.aceternity.com
2. Browse and select desired component
3. Copy the component code (TypeScript)
4. Paste into this directory
5. Convert TypeScript to JavaScript if needed (remove type annotations)
6. Fix imports:
   - Use `@/lib/utils` for `cn` utility
   - Use `framer-motion` for animations
   - Use `lucide-react` for icons

## Usage Example

```tsx
import { CardStack } from '@/components/aceternity/CardStack';

function MyComponent() {
  return <CardStack items={items} />;
}
```

## Notes

- All components should follow our design system (colors, spacing, etc.)
- Test components thoroughly before using in production
- Keep this folder organized by component type
