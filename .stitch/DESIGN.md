---
name: Envios DosRuedas
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#37393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#cdc7aa'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#979177'
  outline-variant: '#4b4731'
  surface-tint: '#dec800'
  primary: '#ffffff'
  on-primary: '#373100'
  primary-container: '#fde400'
  on-primary-container: '#716500'
  inverse-primary: '#6a5f00'
  secondary: '#b4c5ff'
  on-secondary: '#0b2b71'
  secondary-container: '#2b458b'
  on-secondary-container: '#a0b6ff'
  tertiary: '#ffffff'
  on-tertiary: '#002c70'
  tertiary-container: '#dae2ff'
  on-tertiary-container: '#2d60c4'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#fde400'
  primary-fixed-dim: '#dec800'
  on-primary-fixed: '#201c00'
  on-primary-fixed-variant: '#504700'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#294389'
  tertiary-fixed: '#dae2ff'
  tertiary-fixed-dim: '#b1c5ff'
  on-tertiary-fixed: '#001946'
  on-tertiary-fixed-variant: '#00419e'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

This design system is built for a modern logistics and supply chain environment that prioritizes speed, clarity, and decisive action. The brand personality is **authoritative and energetic**, moving away from the sterile greys of traditional enterprise software toward a more saturated, high-contrast aesthetic.

The design style combines **Corporate Modernism** with **High-Contrast Boldness**. It utilizes a deep, immersive blue background to establish a sense of stable "night-mode" professional focus, punctuated by high-visibility yellow accents that mimic industrial hazard markings and priority signaling. The emotional response should be one of "controlled urgency"—the user should feel they are operating a high-performance engine where critical information is impossible to miss.

## Colors

The palette is intentionally restricted to maximize functional contrast. 

- **Primary (Action Yellow):** A vibrant, saturated yellow (#FFE600) used exclusively for headings, primary call-to-actions, and mission-critical status indicators.
- **Secondary (Deep Nautical):** The foundation of the system. This deep blue (#00246B) acts as the primary surface color, providing a professional and calming backdrop that reduces eye strain during long shifts.
- **Tertiary (Cobalt Accent):** A brighter blue (#0047AB) used for interactive states, progress bars, and subtle layering to differentiate surfaces.
- **Neutral (High-Vis White):** Pure white is reserved for body text and icon details to ensure maximum readability against the dark blue backgrounds.

## Typography

This design system employs a dual-font strategy to balance character with utility.

**Sora** is the display typeface. Its geometric structure and wide stance provide a technical, futuristic feel perfect for large-scale data and bold headers. All headers should be rendered in the primary yellow color to pop against the blue background.

**Hanken Grotesk** serves as the workhorse for body text and data labels. It is highly legible at small sizes and maintains a contemporary, professional look. Body text should remain white or a very light silver for secondary information. Use uppercase labels for metadata and technical specs to mimic industrial labeling conventions.

## Layout & Spacing

The layout philosophy follows a **strict functional grid** optimized for dashboard density. We utilize a 12-column fluid grid for desktop and a 4-column grid for mobile.

Spacing is based on an 8px rhythmic scale. For logistics-heavy screens, use "md" (24px) for gutter consistency between cards to maintain a structured, organized feel. Negative space is used strategically to group related data points, but density is prioritized over airiness to allow users to see more information at once.

**Breakpoints:**
- **Mobile:** < 600px (Margins: 16px)
- **Tablet:** 600px - 1024px (Margins: 32px)
- **Desktop:** > 1024px (Margins: 64px)

## Elevation & Depth

Depth in this design system is created through **Tonal Layering** rather than traditional shadows. Shadows are difficult to see on very dark backgrounds, so we use color shifts and borders to indicate hierarchy.

1.  **Floor (Level 0):** The deepest blue (#001A4D or similar dark navy) for the main application background.
2.  **Surface (Level 1):** The primary blue (#00246B) for cards and main UI containers.
3.  **Raised (Level 2):** A lighter cobalt (#0047AB) or a 1px inner stroke of white at 10% opacity to define edges.
4.  **Interactive:** Hover states on cards should use a subtle glow or a 2px yellow left-border to indicate focus.

Avoid heavy blurs; maintain crisp, clean lines to reflect precision in logistics.

## Shapes

The shape language is **Soft (Level 1)**. This uses subtle 0.25rem (4px) corner radii. This approach maintains the professional, architectural feel of a logistics platform while removing the "harshness" of sharp 90-degree angles. 

Buttons and input fields should follow this consistent 4px rounding. Avoid pill-shapes for buttons to maintain a structured, grid-aligned aesthetic that feels more like a dashboard and less like a social app.

## Components

### Buttons
- **Primary:** Background in Action Yellow (#FFE600), Text in Deep Blue (#00246B), Semi-bold.
- **Secondary:** Transparent background with a 2px Action Yellow border.
- **Ghost:** White text with no background, used for low-priority utility actions.

### Input Fields
Inputs should have a background slightly darker than the surface they sit on. The border should be a subtle 1px cobalt, turning into a 2px yellow stroke upon focus. Labels are always positioned above the field in `label-md` style.

### Chips & Badges
Used for status (e.g., "In Transit," "Delayed"). Status colors should be high-contrast:
- **Warning:** Yellow background with Blue text.
- **Critical:** Bright Red background with White text.
- **Success:** Bright Mint background with Blue text.

### Cards
Cards are the primary container. They should use the "Surface" color with a clear hierarchy: Header (Sora, Yellow), Body (Hanken, White), and Footer (separated by a 1px Cobalt line).

### Data Tables
Tables are central to this design system. Use alternating row stripes (Level 1 Surface and a slightly lighter blue) to help the eye track across wide data sets. Headers should be sticky and use the `label-md` typography.