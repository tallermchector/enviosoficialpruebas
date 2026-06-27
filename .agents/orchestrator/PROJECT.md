# Project: Envíos DosRuedas UI/UX Redesign

## Architecture
- **Framework**: Next.js 15+ (App Router).
- **Styling**: Tailwind CSS, CSS variables, `globals.css`, and next/font/google.
- **Brand Book Paleta de Colores**:
  - Egyptian Blue: `#0635A6`
  - Sunbeam Yellow: `#FFEC00`
  - White: `#FFFFFF`
- **Brand Book Fuentes**:
  - Títulos Principales: Anton (sans-serif)
  - Subtítulos y Datos Técnicos: Bebas Neue (sans-serif)
  - Texto de Cuerpo/Detalles: Inter (sans-serif)
- **Design System Details**: Stitch Design System (glassmorphism, modern borders, 4px grid spacing scale, smooth transitions).
- **Integrity**: Non-destructive redesign, preserving existing functionalities (calculators, contact forms, WhatsApp links, SEO metadata).

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|---|---|---|---|
| 1 | M1: Global Style Setup | Configure tailwind.config.ts, globals.css, and root layout.tsx with colors and fonts | none | IN_PROGRESS (Conv: 189cd81e-6d91-4bf8-9e7c-8f4e3d6e5c72) |
| 2 | M2: Navigation & Layout | Redesign Header, Footer, and mobile navigation components | M1 | PLANNED (Conv: 189cd81e-6d91-4bf8-9e7c-8f4e3d6e5c72) |
| 3 | M3: Home & Vision Page | Redesign app/page.tsx and all components under components/homenew | M2 | PLANNED (Conv: 189cd81e-6d91-4bf8-9e7c-8f4e3d6e5c72) |
| 4 | M4: Calculator Pages | Redesign cotizar/express and cotizar/lowcost and component/calculator | M2 | PLANNED (Conv: 189cd81e-6d91-4bf8-9e7c-8f4e3d6e5c72) |
| 5 | M5: Services Pages | Redesign services pages: envios-express, envios-lowcost, enviosflex, plan-emprendedores | M2 | PLANNED (Conv: 189cd81e-6d91-4bf8-9e7c-8f4e3d6e5c72) |
| 6 | M6: Info & Contact Pages | Redesign contacto, sobre-nosotros, preguntas-frecuentes, nuestras-redes | M2 | PLANNED (Conv: 189cd81e-6d91-4bf8-9e7c-8f4e3d6e5c72) |
| 7 | M7: E2E Verification | Pass 100% of opaque-box E2E test suite and adversarial testing | M1-M6 | PLANNED (Conv: 189cd81e-6d91-4bf8-9e7c-8f4e3d6e5c72) |
| - | E2E Testing Track | Define and build opaque-box test suite (Tiers 1-4) | none | IN_PROGRESS (Conv: 97e34ac2-01ce-4b7c-ad45-7055fbc7f813) |

## Code Layout
- **Global Config**: `tailwind.config.ts`, `src/app/globals.css`, `src/app/layout.tsx`
- **Layout Components**: `src/components/layout/` and `src/components/homenew/` (Header, Footer, OptimizedHeader)
- **Home Components**: `src/components/homenew/`
- **Calculator Components**: `src/components/calculator/`
- **Contact Components**: `src/components/contact/`
- **Public Pages**:
  - `src/app/page.tsx`
  - `src/app/contacto/page.tsx`
  - `src/app/cotizar/express/page.tsx`
  - `src/app/cotizar/lowcost/page.tsx`
  - `src/app/servicios/envios-express/page.tsx`
  - `src/app/servicios/envios-lowcost/page.tsx`
  - `src/app/servicios/enviosflex/page.tsx`
  - `src/app/servicios/plan-emprendedores/page.tsx`
  - `src/app/nosotros/sobre-nosotros/page.tsx`
  - `src/app/nosotros/preguntas-frecuentes/page.tsx`
  - `src/app/nosotros/nuestras-redes/page.tsx`

## Interface Contracts
- **Global Theme Class**: Page bodies must contain `.dark` (or as appropriate) and use standard font classes (`font-sans`, `font-display`, `font-anton`, `font-bebas`, `font-inter`).
- **Calculator State**: Calculators must preserve callback signatures and state hooks to prevent breaking calculation flow.
- **Form State**: Contact forms must submit to the existing API endpoints and preserve fields.
