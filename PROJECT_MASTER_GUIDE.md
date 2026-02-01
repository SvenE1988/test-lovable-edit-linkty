# 📋 PROJECT MASTER GUIDE - Linkty Codebase

**Version:** 1.2.0  
**Letzte Aktualisierung:** 01.02.2026  
**Status:** Production Ready  
**Single Source of Truth:** JA

---

## 🎯 Architektur-Philosophie

### Component-First Architecture
- **Location:** Alle Sektionen in `src/components/sections/`
- **Naming:** PascalCase (z.B. `Hero.tsx`, `BentoGridFeatures.tsx`)
- **Daten-Trennung:** Strikte Trennung von UI und Content
  - Komponenten definieren Props
  - Daten liegen in `src/data/content/pages/[page].ts`
  - Keine hardcodierten Texte in Komponenten

### Utility-First Styling
- **Tailwind CSS v3.4** als primäres Styling-Framework
- **Keine** hartkodierten Farben im JSX (außer WhatsApp-Brandfarbe `#25D366`)
- **CSS Variables** für Brand-Tokens in `src/index.css`
- **Tailwind Config** für Typografie-Scale und Spacing-Tokens

---

## 🎨 Design-System

### Brand Farbpalette (CSS Variables)
```css
/* Primary Brand Colors */
--brand-dark: #00203d;        /* Primärer Hintergrund */
--brand-darker: #001528;      /* Tiefere Akzente */
--brand-mint: #2dd4bf;        /* Primäre Brandfarbe */
--brand-mint-light: #9efdef;  /* Highlights */
--brand-cyan: #0891b2;        /* Sekundäre Akzente */
--brand-teal: #14b8a6;        /* Tertiäre Akzente */

/* Semantic Text Colors */
--text-on-dark: #ffffff;
--text-on-dark-muted: rgba(255, 255, 255, 0.7);
--text-on-dark-subtle: rgba(255, 255, 255, 0.5);

/* Glows & Effects */
--glow-mint: rgba(45, 212, 191, 0.3);
--glow-mint-subtle: rgba(45, 212, 191, 0.15);
```

### Typografie-Scale (Tailwind)
| Token | Usage | Max-Size |
|-------|-------|----------|
| `display-huge` | Hero Headlines | 64px |
| `display-large` | Section Headlines | 44px |
| `display-medium` | Statements / Manifesto | 32px |
| `heading-1` | Bento + Card Titles | 22px |
| `heading-2` | Sub Headlines | 20px |
| `body-large` | Lead Text | 19px |
| `body-medium` | Standard Body | 18px |
| `body-small` | Supporting Text | 16px |
| `label` | Eyebrows / Labels | 14px |

### Typografie-Komponenten (Single Source of Truth)

#### Heading Component
```tsx
import { Heading } from "@/components/ui/heading";

<Heading level={1|2|3|4|5|6} variant="display-huge" colorScheme="dark" accent="Text">
```

**Verfügbare Variants:**
| Variant | CSS Class | Verwendung |
|---------|-----------|------------|
| `display-huge` | `text-display-huge` | Hero H1 |
| `display-large` | `text-display-large` | Section H2 |
| `display-medium` | `text-display-medium` | Manifesto, Final CTA |
| `heading-1` | `text-heading-1` | Bento Cards |
| `heading-2` | `text-heading-2` | Sub Headlines |
| `timeline-item` | `font-bold text-xl md:text-2xl lg:text-display-medium` | Timeline Titles |
| `stat` | `text-4xl font-bold md:text-5xl` | StatCard Values |
| `cta` | `text-display-large font-bold tracking-tight` | Footer CTA |
| `cta-lite` | `text-display-medium font-bold` | Final CTA |
| `bento-card` | `font-bold text-xl` | Bento Card Titles |
| `bento-card-large` | `font-bold text-3xl` | Large Bento Titles |

#### Text Component
```tsx
import { Text } from "@/components/ui/text";

<Text variant="body-medium" colorScheme="dark" muted subtle uppercase>
```

**Verfügbare Variants:**
| Variant | CSS Class | Verwendung |
|---------|-----------|------------|
| `body-large` | `text-body-large` | Lead/Subline |
| `body-medium` | `text-body-medium` | Default Paragraph |
| `body-small` | `text-body-small` | Microcopy |
| `label` | `text-label` | Labels |
| `caption` | `text-sm leading-relaxed` | Bento Descriptions |
| `timeline-item` | `text-base leading-relaxed md:text-lg` | Timeline Descriptions |
| `statement` | `text-display-medium font-medium leading-snug md:text-display-large` | Manifesto |

#### Eyebrow Component (Mandatory für Kicker)
```tsx
import { Eyebrow } from "@/components/ui/text";

<Eyebrow colorScheme="dark">KICKER TEXT</Eyebrow>
```
**Output:** Label-Style mit Brand-Mint Akzent, uppercase, tracking-wider

### Spacing-Regeln
```javascript
// Tailwind Config - Section Spacing
spacing: {
  'section-sm': '3rem',
  'section-md': '4rem',
  'section-lg': '6rem',
  'section-xl': '8rem',
  'section-2xl': '10rem',
}
```

### Border Radius
- Cards: `rounded-card` (1rem)
- Hero Sections: `rounded-hero` (1.5rem)
- Standard: `var(--radius)` (0.75rem)

### Shadows
- `shadow-card`: 0 12px 24px rgba(0,0,0,0.15)
- `shadow-card-hover`: 0 20px 40px rgba(0,0,0,0.2)
- `shadow-glow-mint`: 0 0 30px rgba(45,212,191,0.3)
- `shadow-glow-subtle`: 0 0 20px rgba(45,212,191,0.15)

---

## 📦 Content-Schema (Zod)

### Baseline Properties (für ALLE Sektionen)
```typescript
{
  id: string;              // Eindeutige Section-ID
  kicker?: string;         // Eyebrow-Text (optional) - NUTZE <Eyebrow>
  headline: string;        // Hauptüberschrift - NUTZE <Heading>
  headlineAccent?: string; // Farblich hervorgehobener Teil
  description?: string;    // Beschreibungstext - NUTZE <Text>
  cta?: ILink;            // Call-to-Action
}
```

### ❌ VERALTETE Properties (NICHT VERWENDEN)
- ~~`title`~~ → Ersetzt durch `headline`
- ~~`tag`~~ → Ersetzt durch `kicker`
- ~~`topHeadline`~~ → Ersetzt durch `headlineAccent`

### Image-Format
```typescript
// Korrektes Format
image: {
  src: string;   // Pfad zu /assets/ - NUR LOKALE ASSETS!
  alt: string;   // Beschreibung für Accessibility
}

// Oder via ASSETS Registry
image: ASSETS.sections.voice.calendar
```

---

## 🔧 Workflow: Neue Sektion Hinzufügen

### 1. Content-Datei erstellen
```typescript
// In src/data/content/pages/[page].ts
export const neueSektion = {
  id: "einzigartige-id",
  kicker: "EYEBROW TEXT",
  headline: "Hauptüberschrift",
  headlineAccent: "Highlight Teil",
  description: "Beschreibung...",
  // ... weitere spezifische Props
};
```

### 2. Zod-Schema validieren (Optional)
```typescript
// In src/schemas/contentSchemas.ts (falls neuer Typ)
export const NeueSektionSchema = SectionDataSchema.extend({
  // Zusätzliche Properties
});
```

### 3. Komponente erstellen
```typescript
// In src/components/sections/NeueSektion.tsx
import { motion } from "framer-motion";
import { Heading } from "@/components/ui/heading";
import { Text, Eyebrow } from "@/components/ui/text";

interface NeueSektionProps {
  kicker?: string;
  headline: string;
  // ... Props aus Content-Datei
}

export const NeueSektion: React.FC<NeueSektionProps> = (props) => {
  return (
    <section className="py-section-lg">
      {props.kicker && <Eyebrow>{props.kicker}</Eyebrow>}
      <Heading level={2} variant="display-large">
        {props.headline}
      </Heading>
      {props.description && (
        <Text variant="body-medium" muted>
          {props.description}
        </Text>
      )}
      {/* ... */}
    </section>
  );
};
```

### 4. GPU-Optimierung (GOLD STANDARD)
```tsx
<motion.div
  style={{ willChange: 'transform, opacity' }} // IMMER hinzufügen
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }} // Nur einmal animieren
>
```

### 5. GPU-Optimierung Prüfliste
- [ ] `willChange: 'transform, opacity'` bei motion-Elementen
- [ ] `viewport={{ once: true }}` für Performance
- [ ] `transform`-basiert animieren (scale, translate), nicht width/height
- [ ] `prefers-reduced-motion` Respektieren (in index.css)

---

## 📁 Asset-Management

### Central Asset Registry
**Location:** `src/data/assets.ts`

```typescript
export const ASSETS = {
  brand: { /* Logos */ },
  heroes: { /* Hero-Bilder/Videos */ },
  sections: { /* Section-Spezifische Bilder */ },
  team: { /* Team-Fotos */ },
  testimonials: { /* Testimonial-Bilder */ },
} as const;
```

### Ordner-Struktur (public/assets/)
```
public/assets/
├── brand/           # Logos, Favicons
├── hero/           # Hero-Bilder/Videos
├── sections/       # Section-Spezifische Bilder
│   ├── home/
│   ├── about/
│   ├── voice/
│   ├── content/
│   └── insurance/
├── team/           # Team-Mitglieder
└── testimonials/   # Kundenstimmen
```

### Asset-Regeln
- ✅ **NUR lokale Assets** über `/assets/` laden
- ❌ **Keine externen URLs** (Unsplash, CDN, etc.)
- ✅ **WebP bevorzugen** für Fotos
- ✅ **Alt-Text Pflicht** für alle Bilder

---

## 🚀 Performance & Animation

### Framer Motion Best Practices
| Regel | Implementation | Warum |
|-------|---------------|-------|
| GPU Acceleration | `style={{ willChange: 'transform, opacity' }}` | Smooth 60fps |
| Transform-Only | Nutze `scale` statt `width` | Kein Layout-Trash |
| Viewport Trigger | `viewport={{ once: true }}` | CPU schonen |
| Motion Import | `from "framer-motion"` | Kein motion/react |

### Bild-Optimierung
```tsx
<img
  src={image.src}
  alt={image.alt}
  loading="lazy"        // Lazy loading
  className="..."
/>
```

### Smooth Scrolling
- Native `scroll-behavior: smooth` in CSS (index.css:68)
- Lenis Smooth Scroll wurde entfernt

---

## 📝 SEO & Meta-Daten

### Route-Konfiguration
**Location:** `src/config/routes.ts`

```typescript
{
  path: "/",
  component: HomePage,
  meta: {
    title: "Linkty - KI-Plattform für Terminbuchung",
    description: "..."
  }
}
```

### Automatische Meta-Tags
Das System nutzt `react-helmet-async` für:
- `<title>`
- `<meta name="description">`
- Open Graph Tags
- Twitter Cards
- Canonical URLs

---

## 🧪 Build & Deployment

### Scripts
```bash
yarn dev      # Development Server (Port 3000)
yarn build    # Production Build → /dist
yarn preview  # Preview Build
yarn lint     # ESLint Check
yarn format   # Prettier Format
```

### Build-Konfiguration
- **Output:** `/dist` (Vite-Standard)
- **Vite Config:** `vite.config.ts`
- **Netlify Config:** `netlify.toml`

### Pre-Deployment Checklist
- [ ] Alle Assets lokal verfügbar
- [ ] Keine `console.log` im Production-Code
- [ ] Meta-Tags gesetzt
- [ ] OG-Image vorhanden (`public/Images/og-image.svg`)
- [ ] Build erfolgreich

---

## 🔐 Sicherheit

### .gitignore Essentials
```gitignore
# Environment
.env
.env.*
*.env
*.pem
*token.json*
*credentials.json*

# Build
/build
/dist

# Dependencies
node_modules/
```

### DSGVO-Compliance
- Hosting in Deutschland
- Keine Tracking-Scripts ohne Consent
- Datenschutz-Seite verlinkt

---

## 📋 Naming-Konventionen

### Dateien & Komponenten
| Typ | Pattern | Beispiel |
|-----|---------|----------|
| Komponenten | PascalCase | `Hero.tsx`, `FeatureCard.tsx` |
| Hooks | camelCase + use | `useScrollToHash.ts` |
| Utils | camelCase | `cn.ts`, `formatDate.ts` |
| Content | camelCase | `home.ts`, `shared/index.ts` |
| Assets | CONSTANT_CASE | `ASSETS`, `API_URL` |

### CSS-Klassen
- Tailwind-Utility-Klassen bevorzugen
- Custom-Klassen in `kebab-case`
- BEM nur bei komplexen Komponenten

---

## 🔄 Versionskontrolle

### Commit-Messages
```
feat: Neue Hero-Sektion hinzugefügt
fix: Animation auf Mobile deaktiviert
refactor: Content-Extraktion in separate Datei
docs: README aktualisiert
style: Formatierung mit Prettier
```

### Pre-Commit Hooks
- ESLint Auto-Fix
- Prettier Format
- Keine Konsole-Logs im Production-Code

---

## 🆘 Troubleshooting

### Häufige Fehler

**"Module not found" bei Assets**
→ Pfad prüfen: Muss mit `/assets/` beginnen

**Animation ruckelt auf Mobile**
→ `viewport={{ once: true }}` hinzufügen
→ `willChange` Property setzen

**OG-Image wird nicht angezeigt**
→ Pfad prüfen: `/Images/og-image.svg` muss existieren

**Build schlägt fehl**
→ `yarn lint` ausführen
→ TypeScript-Fehler beheben

---

## 📚 Ressourcen

### Empfohlene Komponenten-Quellen
1. **Magic UI** - Komplexe Animationen
2. **Aceternity UI** - Moderne Landing-Page Sektionen
3. **Shadcn/UI** - Basis-Komponenten
4. **21street.dev** - Tailwind-Komponenten

### Interne Dokumentation
- `docs/refactoring/typography-architecture.md` - Detaillierte Typografie-Infos

---

## ✅ Code-Review Checkliste

Vor dem Merge:
- [ ] Daten in separate Content-Datei ausgelagert
- [ ] Props sind typisiert (TypeScript)
- [ ] Keine hardcodierten Farben (außer Brand-Exceptions)
- [ ] GPU-Optimierung für Animationen
- [ ] Alt-Text für alle Bilder
- [ ] Responsive Design geprüft
- [ ] Keine externen Asset-URLs
- [ ] Meta-Daten für neue Seiten
- [ ] Heading/Text/Eyebrow Komponenten verwendet (NICHT raw Tailwind)
- [ ] <Eyebrow> für Kicker verwendet

---

## ⚠️ ARCHIVIERTE DOKUMENTATION

Die folgenden Dateien sind **veraltet** und sollten nicht mehr verwendet werden:
- ~~`design_guidelines.json`~~ - Widersprüchliche Asset-Strategien
- ~~Alle Referenzen auf nicht-existierende Dateien~~

---

*Dieses Dokument ist die Single Source of Truth für die Linkty Codebase. Bei Fragen oder Updates immer hier dokumentieren.*
