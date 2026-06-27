# Scope: Implementation sub-orchestration of Envíos DosRuedas visual redesign

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
| # | Name | Scope | Dependencies | Status | Conversation ID / Notes |
|---|---|---|---|---|---|
| M1 | M1: Global Style Setup | Configure tailwind.config.ts, globals.css, and root layout.tsx with colors and fonts | none | IN_PROGRESS | Explorers: 3f928be3, 086b91db, 6331c0e0 |
| M2 | M2: Navigation & Layout | Redesign Header, Footer, and mobile navigation components | M1 | PLANNED | TBD |
| M3 | M3: Home & Vision Page | Redesign app/page.tsx and all components under components/homenew | M2 | PLANNED | TBD |
| M4 | M4: Calculator Pages | Redesign cotizar/express and cotizar/lowcost and component/calculator | M2 | PLANNED | TBD |
| M5 | M5: Services Pages | Redesign services pages: envios-express, envios-lowcost, enviosflex, plan-emprendedores | M2 | PLANNED | TBD |
| M6 | M6: Info & Contact Pages | Redesign contacto, sobre-nosotros, preguntas-frecuentes, nuestras-redes | M2 | PLANNED | TBD |
| M7 | M7: E2E Verification | Pass 100% of opaque-box E2E test suite and adversarial testing | M1-M6 | PLANNED | TBD |

## Interface Contracts
- **Global Theme Class**: Page bodies must contain `.dark` (or as appropriate) and use standard font classes (`font-sans`, `font-display`, `font-anton`, `font-bebas`, `font-inter`).
- **Calculator State**: Calculators must preserve callback signatures and state hooks to prevent breaking calculation flow.
- **Form State**: Contact forms must submit to the existing API endpoints and preserve fields.
