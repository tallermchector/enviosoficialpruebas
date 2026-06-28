# AGENTS.md — Envios DosRuedas

## Project

Logistics platform for last-mile delivery in Mar del Plata, Argentina. Public-facing site with 14 routes (landing, services, quoters, legal, real estate). Spanish (Argentine voseo) throughout.

## Commands

| Action | Command |
|---|---|
| Dev server (Turbopack) | `pnpm dev` |
| Build | `pnpm build` (runs `--no-lint`) |
| Lint | `pnpm lint` |
| Typecheck | `pnpm typecheck` (`tsc --noEmit`) |
| Format | `pnpm format` (Biome) |
| DB push schema | `pnpm db:push` |
| DB seed | `pnpm db:seed` |
| DB export data | `pnpm db:export` |
| DB import data | `pnpm db:import` |
| E2E tests | `pnpm test:e2e` (Playwright, port 3009) |
| E2E debug UI | `pnpm test:e2e:ui` |
| Genkit AI dev | `pnpm genkit:dev` |
| Regenerate Prisma client | `pnpm prisma generate` (also runs on `postinstall`) |

**Order matters**: `pnpm install` → `prisma generate` (auto via postinstall) → `pnpm db:push` → `pnpm dev`.

## Stack

- **Next.js 16** App Router, React 19, Turbopack dev server
- **TypeScript** strict mode, target ES2023
- **Prisma v7** PostgreSQL, client output at `generated/prisma/client` (gitignored — must be generated)
- **Tailwind CSS v4** with `@tailwindcss/postcss`; config at `tailwind.config.ts`
- **Shadcn/ui** (Radix primitives) — components in `src/components/ui/`
- **Framer Motion** for animations
- **Genkit** (Google AI) for flows in `src/ai/`
- **Leaflet + react-leaflet** for maps
- **pnpm** package manager (NOT npm/yarn)

## Architecture

```
src/
  app/           # Next.js App Router pages (14 public routes)
  components/    # Feature components (about/, calculator/, contact/, etc.)
  components/ui/ # Shadcn/ui primitives (54 components)
  ai/            # Genkit AI flows and utils
  hooks/         # Custom React hooks
  lib/           # Utilities, prisma client, data helpers
  lib/prisma.ts  # Prisma client singleton (uses Accelerate extension)
  context/       # Business domain docs (.md) and data (.json)
prisma/
  schema.prisma  # DB schema (6 models: Client, Order, Repartidor, PriceRange, Etiqueta, SocialPost)
  seed.ts        # Seeds PriceRange + SocialPost via direct pg connection
  datos/         # JSON seed data
  script/        # DB import/export scripts
e2e/             # Playwright E2E tests
generated/       # Prisma generated client (gitignored)
public/          # Static assets
scripts/         # Python analysis/migration scripts
```

**Path alias**: `@/*` → `./src/*`

## Public Routes (14)

| Route | Key Components |
|---|---|
| `/` | HeroAnimado, VisionSection, ServicesOverview, CtaSection, EmprendedoresHome, SliderServicios, CarruselRedes, Footer |
| `/contacto` | ContactPageClient, CarruselRedes, Footer |
| `/nosotros/nuestras-redes` | SocialHero, SocialConnect, SocialFeed, SocialBenefits, NewsletterSignup |
| `/nosotros/preguntas-frecuentes` | FaqHero, FaqCategories, FaqContactCta (JSON-LD schema) |
| `/nosotros/sobre-nosotros` | AboutHero, WhoWeAre, CompanyValues, CompanyStory, TeamSection, MissionVision |
| `/servicios/envios-express` | ExpressPageClient (Prisma: `ServiceTypeEnum.EXPRESS`) |
| `/servicios/envios-lowcost` | LowcostHero, LowcostContent, PricingComparison, LowcostBenefits, HowLowcostWorks, LowcostCta |
| `/servicios/enviosflex` | EnviosFlexHero, EnviosFlexContent, MercadoLibreBenefits, FlexPricingRanges, HowItWorks, Requirements, EnviosFlexCta |
| `/servicios/plan-emprendedores` | EntrepreneurHero, PlanInformation, EntrepreneurBenefits, EntrepreneurPricingRanges, EntrepreneurCta |
| `/propiedades` | Real estate listings page |
| `/cotizar/express` | CalculatorHero, ExpressCalculator, MapFeatures, PricingInfo, CalculatorTips, CalculatorContact |
| `/cotizar/lowcost` | LowCostCalculatorHero, LowCostCalculator, MapFeatures, PricingInfo, CalculatorTips, CalculatorContact |
| `/terminos-y-condiciones` | HeroSection, card-based legal text |
| `/politica-de-privacidad` | HeroSection, card-based legal text |

## Design System (Verified — source of truth: `tailwind.config.ts` + `globals.css`)

**⚠️ There are TWO design docs with conflicting info.** The actual implementation is in `tailwind.config.ts` and `src/app/globals.css`. `DESIGN.md` describes an aspirational dark "Stitch" system with Orbitron/Roboto that is NOT implemented.

### Actual fonts (in `layout.tsx` and `tailwind.config.ts`)
- **Anton** — titles/display (`font-title`, `font-display`, `font-anton`)
- **Bebas Neue** — subtitles/buttons (`font-subtitle`, `font-subhead`, `font-bebas`)
- **Inter** — body/labels (`font-body`, `font-inter`)

### Actual colors (in `tailwind.config.ts`)
- **Egyptian Blue**: `#0636A5` (primary-navy, dark)
- **Sunbeam Yellow**: `#FFEC01` (secondary, accent)
- **White**: `#FFFFFF`

### Style: Neo-brutalista
- **Hard shadows** (no blur): `4px 4px 0px 0px #0636A5` (`shadow-hard-primary`, `shadow-brutal`)
- **Zero border-radius** everywhere (all radius tokens set to `0`)
- Dark mode class exists but `.dark` block in globals.css is currently a copy of light values

### Shadcn/ui setup
- Config: `components.json` (default style, RSC enabled, lucide icons)
- CSS variables for HSL-based semantic tokens in `globals.css`
- All UI primitives in `src/components/ui/`

## Prisma Specifics

- Generator outputs to `generated/prisma/client` (ESM, `.ts` extensions) — **gitignored**, must regenerate
- `src/lib/prisma.ts` uses `@prisma/extension-accelerate` with `accelerateUrl` from `DATABASE_URL`
- `prisma/seed.ts` uses `@prisma/adapter-pg` directly with `DIRECT_URL` or `DATABASE_URL`
- `postinstall` hook runs `prisma generate` automatically
- Env var `DATABASE_URL` required in `.env` (also `DIRECT_URL` optional for direct connections)

## Constraints

- **Argentine voseo**: Use "hablá", "cotizá", "tenés" in all public copy — never tú/usted
- **Tailwind only**: No external CSS libraries (Bootstrap, Bulma, etc.)
- **No internal routes in public pages**: Don't link to `/admin`, `/repartidor`, `/ordenes` from public-facing components
- **Don't delete real content** to "save space" — preserve all text/data
- **Responsive via Flexbox**: Prefer flex layouts for responsive behavior

## Files to Know

| File | Purpose |
|---|---|
| `DESIGN.md` | Aspirational dark Stitch design system (fonts/colors differ from implementation) |
| `src/app/globals.css` | Actual CSS variables, brand colors, font imports |
| `tailwind.config.ts` | Actual Tailwind theme: fonts, colors, shadows, animations |
| `src/lib/prisma.ts` | Prisma client singleton |
| `src/app/layout.tsx` | Root layout: fonts, metadata, JSON-LD, theme |
| `src/app/actions.ts` | Server actions (AI testimonial summary) |
| `components.json` | Shadcn/ui configuration |
| `prisma/schema.prisma` | Database schema |
| `apphosting.yaml` | Firebase App Hosting config |
