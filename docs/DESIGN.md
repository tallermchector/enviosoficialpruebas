---
name: Envios DosRuedas
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#434651'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#737783'
  outline-variant: '#c3c6d3'
  surface-tint: '#315bae'
  primary: '#00357e'
  on-primary: '#ffffff'
  primary-container: '#1d4c9e'
  on-primary-container: '#a8c1ff'
  inverse-primary: '#afc6ff'
  secondary: '#785a00'
  on-secondary: '#ffffff'
  secondary-container: '#fdc428'
  on-secondary-container: '#6e5200'
  tertiary: '#1e3b53'
  on-tertiary: '#ffffff'
  tertiary-container: '#36526b'
  on-tertiary-container: '#a8c5e2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d9e2ff'
  primary-fixed-dim: '#afc6ff'
  on-primary-fixed: '#001944'
  on-primary-fixed-variant: '#0e4395'
  secondary-fixed: '#ffdf9c'
  secondary-fixed-dim: '#f7be21'
  on-secondary-fixed: '#251a00'
  on-secondary-fixed-variant: '#5b4300'
  tertiary-fixed: '#cde5ff'
  tertiary-fixed-dim: '#adcae7'
  on-tertiary-fixed: '#001d32'
  on-tertiary-fixed-variant: '#2d4962'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 20px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The brand personality is authoritative, efficient, and technologically advanced. It targets logistics managers and supply chain operators who require high-density information processed with speed and reliability.

The design style is **Corporate / Modern** with a focus on high-utility density. It utilizes a structured, systematic approach inspired by industrial dashboards, ensuring every element serves a functional purpose. The aesthetic balances the weight of heavy industry with the precision of modern SaaS, using purposeful color accents to guide user attention through complex data environments.

## Colors
This design system utilizes a high-contrast palette tailored for clarity in professional environments.

- **Steel Azure (#1D4C9E):** The core brand color. Used for primary surfaces, headers, and active states. It communicates stability and corporate trust.
- **Sunflower Gold (#E7B008):** A functional accent. Reserved for high-priority interactive elements, status icons, and strategic underlines. It provides a sharp visual break from the blue-heavy environment.
- **Yale Blue (#2F4B64):** Used for secondary navigation, muted containers, and depth-building layers. It offers a softer alternative to the primary blue for long-form reading or background grouping.
- **Neutral:** A range of cool grays (from #F8F9FA to #212529) handles typography and layout boundaries, ensuring the brand colors remain impactful.

Text on primary surfaces (Steel Azure) or secondary surfaces (Yale Blue) must always be white (#FFFFFF) to maintain AAA accessibility.

## Typography
The typography system prioritizes legibility and technical precision.

- **Hanken Grotesk** is used for headlines to provide a sharp, contemporary look that feels engineered.
- **Inter** is the workhorse for body content and data entry, chosen for its exceptional readability at small sizes.
- **JetBrains Mono** is utilized for labels, serial numbers, and technical metadata. Its monospaced nature ensures that alphanumeric logistics codes are easily scannable and vertically aligned in data tables.

Line heights are kept generous to prevent "wall of text" fatigue in data-rich views, while negative letter spacing is applied to large headlines to maintain a compact, "machine-like" feel.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for desktop to ensure dashboard widgets maintain consistent proportions, transitioning to a fluid model for mobile.

- **Desktop:** 12-column grid, 1200px max-width, 20px gutters.
- **Tablet:** 8-column grid, fluid width, 16px gutters.
- **Mobile:** 4-column grid, fluid width, 12px gutters.

Spacing is based on a **4px baseline grid**. All paddings and margins must be multiples of 4 (4, 8, 12, 16, 24, 32, 48, 64). Internal component spacing typically uses 8px (sm) or 16px (md) to maintain a dense but organized information architecture.

## Elevation & Depth
This design system uses **Tonal Layers** combined with **Low-Contrast Outlines** rather than heavy shadows.

- **Level 0 (Background):** Neutral Light (#F8F9FA).
- **Level 1 (Cards/Containers):** Pure White (#FFFFFF) with a 1px border (#DEE2E6).
- **Level 2 (Modals/Popovers):** Pure White with a subtle, 15% opacity Steel Azure ambient shadow (Blur: 12px, Y: 4px).

Depth is communicated through surface color shifts. Yale Blue (#2F4B64) is used for sidebars or "sunken" areas like footer summaries to provide clear structural hierarchy without relying on skeuomorphic effects.

## Shapes
The shape language is **Soft (0.25rem)**. This slight rounding takes the edge off the industrial aesthetic, making the professional environment feel modern and accessible without becoming playful.

- **Buttons & Inputs:** 4px (0.25rem) radius.
- **Cards & Dashboard Widgets:** 8px (0.5rem) radius.
- **Status Badges:** 2px (0.125rem) radius or sharp for a more "tag-like" industrial feel.

Interactive elements should maintain consistent corner radii to reinforce the systematic nature of the UI.

## Components
- **Buttons:** Primary buttons use Steel Azure with white text. "Action-critical" buttons (like 'Ship' or 'Confirm') may use Sunflower Gold with black text for maximum visibility. Ghost buttons use a 1px Steel Azure border.
- **Input Fields:** Use 1px borders (#CED4DA) that transition to Steel Azure on focus. Labels use Inter (Bold, 12px) for clarity.
- **Chips/Badges:** Small, rectangular tags with Yale Blue backgrounds for categories. Status badges use semantic colors (Green for delivered, Red for delayed) but maintain the system's typography.
- **Cards:** White backgrounds, 1px light gray borders, and a Yale Blue "header strip" for internal grouping.
- **Data Tables:** High-density, using JetBrains Mono for numeric columns. Row highlighting on hover uses a 5% opacity Steel Azure tint.
- **Underlines:** Sunflower Gold is used as a 2px thick "accent bar" under active navigation items or header titles to provide a high-contrast focal point.
