# Handoff Report: Milestone M1 — Global Style Setup

## 1. Observation

During the read-only codebase investigation, the following files, configurations, and documentations were located and analyzed:
- **Tailwind Configuration**: `e:/proyectos/enviosoficialpruebas/tailwind.config.ts`
- **Global Stylesheet**: `e:/proyectos/enviosoficialpruebas/src/app/globals.css`
- **Root Layout**: `e:/proyectos/enviosoficialpruebas/src/app/layout.tsx`
- **Stitch Design System Guidelines**: `e:/proyectos/enviosoficialpruebas/DESIGN.md`

### Key Code Observations

#### A. Fonts Loading and Overrides in `src/app/layout.tsx` and `src/app/globals.css`
In `src/app/layout.tsx` (lines 14-19), the font Bebas Neue is loaded with the variable name `--font-bebas-neue`:
```typescript
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
  display: "swap",
});
```
However, in `tailwind.config.ts` (line 127), Tailwind's `fontFamily` maps `bebas` to `var(--font-bebas-neue)`:
```typescript
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-anton)", "sans-serif"],
        anton: ["var(--font-anton)", "sans-serif"],
        bebas: ["var(--font-bebas-neue)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
```
Additionally, `src/app/globals.css` (lines 14-16) contains redundant overrides that reference undefined variables:
```css
    --font-inter: var(--font-sans-fallback);
    --font-anton: var(--font-display-fallback);
    --font-bebas-neue: var(--font-display-fallback);
```
Furthermore, `globals.css` contains compatibility mappings (lines 18-21) to translate old fonts (`Orbitron` and `Roboto`) to the new brand fonts (`Anton` and `Inter`):
```css
    --font-roboto: var(--font-inter);
    --font-orbitron: var(--font-anton);
    --font-sans: var(--font-inter);
    --font-display: var(--font-anton);
```

#### B. Brand Book Color Configuration
`globals.css` specifies the brand book colors inside `:root` (lines 8-10, 29, 31):
```css
    --color-primary: #0635A6;
    --color-secondary: #FFEC00;
    --color-white: #FFFFFF;
...
    --primary: 222 93% 34%; /* Egyptian Blue #0635A6 */
...
    --secondary: 56 100% 50%; /* #FFEC00 - Sunbeam Yellow */
```
The HSL values `222 93% 34%` and `56 100% 50%` are the exact representations of the brand colors `#0635A6` and `#FFEC00` respectively.

#### C. Stitch Design System Details and Discrepancies
- **Border Radius**: In `tailwind.config.ts` (lines 56-67), all standard Tailwind border-radius values are hardcoded to `0px`:
  ```typescript
        borderRadius: {
          none: "0px",
          xs: "0px",
          sm: "0px",
          DEFAULT: "0px",
          md: "0px",
          lg: "0px",
          xl: "0px",
          "2xl": "0px",
          "3xl": "0px",
          full: "9999px",
        },
  ```
  However, Section 6 of `DESIGN.md` explicitly lists a standard scale of rounded corners:
  ```markdown
  *   **Radio de Bordes**: Sistema de radios de borde estandarizado:
      *   `rounded-sm`: 0.25rem (4px) para pequeños elementos interactivos.
      *   `rounded` (DEFAULT): 0.5rem (8px) para botones y controles del dashboard.
      *   `rounded-md`: 0.75rem (12px) para componentes medianos.
      *   `rounded-lg`: 1rem (16px) para tarjetas operativas estándar.
      *   `rounded-xl`: 1.5rem (24px) para grandes paneles contenedores y landing sections.
      *   `rounded-full`: 9999px para círculos o avatares.
  ```
- **Glassmorphism**: Components in the project (e.g. `src/components/homenew/footer.tsx`, `src/components/homenew/optimized-header.tsx`, etc.) use the class `glass-card`. However, **this class is not defined anywhere in the codebase**.
- **Max Width Container**: `tailwind.config.ts` (line 73) defines `"container-max": "1280px"`, while Section 4 of `DESIGN.md` defines it as `1400px`.

---

## 2. Logic Chain

1. **Consistent Font Naming**:
   - Rename the Bebas Neue variable to `--font-bebas` throughout `layout.tsx`, `globals.css`, and `tailwind.config.ts`. This simplifies naming conventions, ensures consistent patterns (matching `--font-anton` and `--font-inter`), and prevents mismatch issues.
2. **Prevent Font Loader Collision**:
   - The overrides `--font-inter: var(--font-sans-fallback)` etc., on `:root` reference undefined variables and interfere with Next.js font loading. Removing them prevents potential breaks.
   - Retain `--font-roboto: var(--font-inter)` and `--font-orbitron: var(--font-anton)` to ensure that any component that still references these variables is automatically mapped to the new typography without breaking.
3. **Explicit Brand Utility Colors**:
   - To make it easier for developers to apply brand colors directly (e.g. `text-brand-yellow`, `bg-brand-blue`), add explicit Tailwind configurations for `brand-blue`, `brand-yellow`, and `brand-white` in `tailwind.config.ts`, while maintaining the HSL-based `primary` and `secondary` variables for shadcn compatibility.
4. **Restore Border Radius & Container Size**:
   - Restoring the `borderRadius` scale in `tailwind.config.ts` to match `DESIGN.md` prevents components from rendering with sharp square corners.
   - Updating `container-max` to `1400px` aligns the Tailwind container utility with the Stitch Design System grid specifications.
5. **Implement `glass-card` & Stitch Utility Classes**:
   - Define the `.glass-card` class inside `@layer utilities` in `globals.css` to activate glassmorphism styles on existing components that reference it.
   - Add `.glassmorphism`, `.border-modern`, and `.transition-stitch` utility classes to build a foundation for the design system.

---

## 3. Caveats

- **Dark Mode Selection**: Tailwind config uses class-based dark mode (`darkMode: ["class"]`). Applying the `dark` class to the `<html>` element statically in `src/app/layout.tsx` is recommended since the platform is designed with a premium dark visual layout.
- **Old Font References**: Any legacy components still referencing `Roboto` or `Orbitron` via custom styles will be successfully mapped to `Inter` and `Anton` through the CSS variables declared in `globals.css`.

---

## 4. Conclusion & Actionable Code Changes

We recommend the following non-destructive modifications to complete Milestone M1:

### A. Proposed Changes to `src/app/layout.tsx`
- Rename the Bebas Neue variable to `--font-bebas`.
- Statically apply the `.dark` class to the `<html>` tag to enforce the dark mode theme.

```typescript
// Replace lines 14-19 with:
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas", // Updated from --font-bebas-neue
  display: "swap",
});

// Replace lines 151-152 with:
    <html lang="es" className="dark" suppressHydrationWarning>
```

### B. Proposed Changes to `tailwind.config.ts`
- Add brand colors under `extend.colors`.
- Map `bebas` to `var(--font-bebas)`.
- Restore the `borderRadius` configuration to match `DESIGN.md`.
- Set `"container-max"` to `"1400px"`.
- Define a custom `stitch` transition timing function.

```typescript
// Proposed Replacement Chunk for extend.colors (around line 21):
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom Brand Book Colors
        brand: {
          blue: "#0635A6",
          yellow: "#FFEC00",
          white: "#FFFFFF",
        },
      },

// Proposed Replacement Chunk for extend.borderRadius (around line 56):
      borderRadius: {
        none: "0px",
        xs: "2px",
        sm: "4px", // rounded-sm (4px)
        DEFAULT: "8px", // rounded (8px)
        md: "12px", // rounded-md (12px)
        lg: "16px", // rounded-lg (16px)
        xl: "24px", // rounded-xl (24px)
        "2xl": "32px",
        "3xl": "40px",
        full: "9999px",
      },

// Proposed Replacement for extend.spacing container-max (around line 73):
        "container-max": "1400px",

// Proposed Replacement Chunk for extend.fontFamily (around line 123):
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-anton)", "sans-serif"],
        anton: ["var(--font-anton)", "sans-serif"],
        bebas: ["var(--font-bebas)", "sans-serif"], // Updated variable
        inter: ["var(--font-inter)", "sans-serif"],
      },

// Add transitionTimingFunction inside extend (around line 122):
      transitionTimingFunction: {
        'stitch': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
```

### C. Proposed Changes to `src/app/globals.css`
- Remove lines 14-16 containing the undefined variable assignments.
- Rename `--font-subtitle` and utility font-families to use `var(--font-bebas)`.
- Define `.glass-card` and other Stitch utilities in `@layer utilities`.

```css
/* Replace the top portion inside @layer base :root with: */
  :root {
    /* Brand Book Colors & Fonts */
    --color-primary: #0635A6;
    --color-secondary: #FFEC00;
    --color-white: #FFFFFF;
    --font-title: var(--font-anton), sans-serif;
    --font-subtitle: var(--font-bebas), sans-serif; /* Updated */

    --font-roboto: var(--font-inter);
    --font-orbitron: var(--font-anton);
    --font-sans: var(--font-inter);
    --font-display: var(--font-anton);

    --background: 210 12% 98%;
    /* ... rest of base variables ... */
  }

/* Update Bebas Neue font references in utility layer: */
  .text-subtitle-lg {
    font-family: var(--font-bebas); /* Updated */
    font-size: 24px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0.02em;
  }

  .text-button-text {
    font-family: var(--font-bebas); /* Updated */
    font-size: 20px;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0.03em;
  }

/* Append Stitch Design System utilities inside @layer utilities: */
  /* Stitch Design System - Glassmorphism & Cards */
  .glass-card {
    background: rgba(5, 8, 16, 0.6);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  .glassmorphism {
    @apply glass-card;
  }

  .glassmorphism-primary {
    background: rgba(6, 53, 166, 0.15);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(6, 53, 166, 0.25);
  }

  .glassmorphism-secondary {
    background: rgba(255, 236, 0, 0.05);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 236, 0, 0.15);
  }

  /* Stitch Design System - Modern Borders */
  .border-modern {
    border-width: 1px;
    border-color: rgba(255, 255, 255, 0.08);
  }

  .border-glow-primary {
    border-color: rgba(6, 53, 166, 0.4);
    box-shadow: 0 0 15px rgba(6, 53, 166, 0.2);
  }

  .border-glow-secondary {
    border-color: rgba(255, 236, 0, 0.4);
    box-shadow: 0 0 15px rgba(255, 236, 0, 0.2);
  }

  /* Stitch Design System - Smooth Transitions */
  .transition-stitch {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    transition-duration: 300ms;
  }
```

---

## 5. Verification Method

To independently verify this configuration post-implementation:

1. **TypeScript & Build Check**:
   Run the following commands in the workspace root to ensure type safety and successful Next.js build compilation:
   ```bash
   pnpm run typecheck
   pnpm run build
   ```
2. **E2E Test Suite Execution**:
   Verify that the proposed changes are correctly integrated and pass visual/metadata requirements by running the E2E test suite:
   ```bash
   pnpm run test:e2e
   ```
3. **Inspector Inspection**:
   - Inspect elements with standard fonts (e.g. `font-bebas`, `font-anton`, `font-inter`) and verify that they resolve to their respective next/font/google CSS variables (`--font-bebas`, `--font-anton`, `--font-inter`).
   - Inspect components using the `glass-card` class and verify they receive the backdrop filter blur and correct translucent borders.
   - Inspect elements using `rounded-lg` or `rounded` and verify their border-radius correlates with `DESIGN.md` (e.g. `16px` or `8px` instead of `0px`).
