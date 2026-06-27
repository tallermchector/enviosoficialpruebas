# Milestone M1 Synthesis: Global Style Setup

This document synthesizes findings from Explorer 1 (`3f928be3-c914-4107-980a-fd62da7a07c2`) and Explorer 2 (`086b91db-9310-4632-a7d8-d22c585c1763`).

## Consensus
- **Colors**: Both explorers agree that primary `#0635A6` and secondary `#FFEC00` are correctly mapped in `globals.css` via HSL. Both recommend exposing direct hex brand values (`brand-blue`, `brand-yellow`, `brand-white`) inside `tailwind.config.ts` under `theme.extend.colors.brand` for clean development utility usage.
- **Font Fallbacks**: Both identify that the custom font overrides inside `globals.css` (:root lines 14-16) override Next.js fonts with undefined fallbacks (`--font-sans-fallback`, etc.). These must be removed.
- **Stitch Design System**: Both agree on adding custom utilities for glassmorphism, transitions, and borders inside `globals.css`.

## Resolved Conflicts
- **Font Variable Naming**:
  - *Conflict*: Explorer 1 suggests keeping `--font-bebas-neue` in `layout.tsx` and mapping it. Explorer 2 suggests renaming it to `--font-bebas` in `layout.tsx`, `tailwind.config.ts`, and `globals.css` references.
  - *Resolution*: Adopt Explorer 2's suggestion to rename the variable to `--font-bebas` to align 1:1 with `font-bebas` class and `font-anton` / `font-inter` patterns.
- **Body Theme Class**:
  - *Conflict*: Explorer 2 recommends adding the `.dark` class to the body tag in `layout.tsx` to support the dark theme globally. Explorer 1 does not mention it explicitly.
  - *Resolution*: Apply `.dark` class to the body in `layout.tsx` to satisfy the visual redesign's dark-mode requirements.

## Synthesized Action Plan for Worker

### 1. `src/app/layout.tsx`
- Rename `variable: "--font-bebas-neue"` to `variable: "--font-bebas"` in the `Bebas_Neue` font loader.
- Add `dark` to the `body` className:
  `className={\`${inter.variable} \${anton.variable} \${bebasNeue.variable} font-sans antialiased dark\`}`

### 2. `tailwind.config.ts`
- Map `bebas` font to `var(--font-bebas)` (it was `var(--font-bebas-neue)`).
- Extend `colors` with explicit brand colors:
  ```typescript
  brand: {
    blue: "#0635A6",
    yellow: "#FFEC00",
    white: "#FFFFFF",
  }
  ```
- Extend `transitionTimingFunction` with:
  `stitch: "cubic-bezier(0.16, 1, 0.3, 1)"`

### 3. `src/app/globals.css`
- Update `--font-subtitle` to use `var(--font-bebas)` instead of `var(--font-bebas-neue)`.
- Remove lines 14-16 (`--font-inter`, `--font-anton`, `--font-bebas-neue` overrides) from `:root`.
- Update all occurrences of `var(--font-bebas-neue)` to `var(--font-bebas)`.
- Append the following utilities inside `@layer utilities`:
  ```css
  /* Stitch Design System - Glassmorphism */
  .glassmorphism {
    background: rgba(5, 8, 16, 0.6);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.08);
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
  .stitch-interactive {
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .stitch-interactive:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.18);
    transform: translateY(-2px);
  }
  ```
