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
  on-surface-variant: '#444653'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#747684'
  outline-variant: '#c4c5d5'
  surface-tint: '#3456c3'
  primary: '#002376'
  on-primary: '#ffffff'
  primary-container: '#0636a5'
  on-primary-container: '#95aaff'
  inverse-primary: '#b7c4ff'
  secondary: '#686000'
  on-secondary: '#ffffff'
  secondary-container: '#f5e300'
  on-secondary-container: '#6d6400'
  tertiary: '#012473'
  on-tertiary: '#ffffff'
  tertiary-container: '#223c8a'
  on-tertiary-container: '#94aaff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001551'
  on-primary-fixed-variant: '#123caa'
  secondary-fixed: '#f8e600'
  secondary-fixed-dim: '#dac900'
  on-secondary-fixed: '#1f1c00'
  on-secondary-fixed-variant: '#4e4800'
  tertiary-fixed: '#dce1ff'
  tertiary-fixed-dim: '#b6c4ff'
  on-tertiary-fixed: '#00164f'
  on-tertiary-fixed-variant: '#28418f'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
  egyptian-blue: '#0636A5'
  sunbeam-yellow: '#FFEC01'
  caution-orange: '#F37021'
  asphalt-gray: '#333333'
typography:
  headline-lg:
    fontFamily: Anton
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: 0.05em
  headline-md:
    fontFamily: Anton
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: 0.05em
  headline-sm:
    fontFamily: Anton
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Anton
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: 0.05em
  subtitle-lg:
    fontFamily: Bebas Neue
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  button-text:
    fontFamily: Bebas Neue
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1'
    letterSpacing: 0.03em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  container-max: 1280px
---

## Brand & Style

The brand identity for this design system is built on "Envios DosRuedas"—a concept that balances the raw energy of urban logistics with the unwavering reliability of institutional security. It is designed to resonate with the Mar del Plata e-commerce sector, projecting a professional, industrial, and high-impact presence.

The visual style is **High-Contrast / Industrial**. It avoids "tech-utopian" or futuristic aesthetics in favor of professional realism. The design utilizes heavy geometric forms, architectural grid lines, and physical depth through realistic shadows. The interface should feel like a piece of high-visibility equipment: utilitarian, durable, and impossible to ignore.

Key visual pillars include:
- **High-Contrast Visibility:** Aggressive use of primary colors to ensure legibility in high-speed urban environments.
- **Structural Integrity:** Heavy use of rectangular containers and thick borders that mimic industrial crates and shipping containers.
- **Physical Realism:** Use of shadows and depth that suggest physical weight rather than digital transparency.

## Colors

The palette is dominated by **Egyptian Blue**, serving as the bedrock of the identity to convey authority and institutional trust. **Sunbeam Yellow** is reserved for high-impact interactions, alerts, and key branding elements, acting as a visual "siren" that cuts through the blue.

- **Primary (Egyptian Blue):** Used for large background surfaces, headers, and primary branding.
- **Secondary (Sunbeam Yellow):** Strictly for CTAs, critical status indicators, and movement-related accents.
- **Tertiary (Deep Navy):** Used for grid lines and subtle depth variations within blue surfaces.
- **Neutral (Off-White/Asphalt):** High-legibility backgrounds for data-heavy sections and dark text for technical documentation.

Color application should follow a 70/20/10 distribution to maintain the "Industrial" high-contrast look without overwhelming the user.

## Typography

The typographic system is built for instant recognition at high speeds. 

**Anton** is the voice of the brand. It must always be rendered in **UPPERCASE** with a slight positive letter-spacing (0.05em) to maintain readability despite its heavy weight. It is used exclusively for slogans and primary section headers.

**Bebas Neue** provides a condensed, technical contrast for secondary information and action-oriented elements. It excels in buttons and numerical data displays where vertical efficiency is required.

**Inter** handles all utilitarian tasks. It is the workhorse for body copy, technical descriptions, and input labels, ensuring that the "Industrial" aesthetic doesn't compromise the clarity of complex logistics data.

## Layout & Spacing

This design system employs a **Fixed Grid** model on desktop to mimic the structured nature of shipping manifests and cargo loading. 

- **The Grid:** A 12-column system with 24px gutters. Elements should align strictly to the grid to maintain a "built" rather than "flowed" feel.
- **Rhythm:** An 8px base unit drives all padding and margin decisions. 
- **Industrial Borders:** Instead of whitespace alone, use thin (1px) borders in high-contrast or subtle tonal variations to define zones, much like technical blueprints.
- **Verticality:** Use vertical text anchors (rendered in low-opacity Anton) on the far edges of the layout to reinforce the "Envios DosRuedas" theme.

Across mobile, the layout collapses into a single column with 16px side margins, prioritizing large-scale touch targets for couriers and users on the move.

## Elevation & Depth

Elevation is conveyed through **Tonal Layers** and **Physical Shadows**, rejecting the ethereal blurs of modern SaaS apps in favor of structural weight.

- **Stacking:** Use Egyptian Blue as the base level (Level 0). Cards and containers (Level 1) use slight tonal shifts or 1px solid borders.
- **Physical Shadows:** When an element must "pop" (like a logistics crate or a CTA), use a crisp, directional shadow (e.g., 4px 4px 0px) or a diffused, low-position shadow with a slight blue tint.
- **Geometric Depth:** Use 45-degree angled patterns or fine grid lines in the background to simulate the floor of a warehouse or the texture of the urban environment.
- **Zero Transparency:** Avoid backdrop blurs. All surfaces should feel opaque and solid.

## Shapes

The shape language is strictly **Sharp (0px roundedness)**. 

To reflect the industrial realism of logistics—boxes, trucks, and shipping containers—every UI element features hard 90-degree corners. This reinforces the brand’s "structured" and "secure" identity.

Large rectangular blocks should be used for all containers. If a visual "break" is needed, use 45-degree chamfered corners on specific accent elements (like status badges) rather than curves.

## Components

### Buttons
Industrial scale is key. Buttons use **Bebas Neue**, are always rectangular (sharp corners), and feature high-contrast fills. The primary CTA is Sunbeam Yellow with Egyptian Blue text. On hover, apply a hard "pressed" effect (reducing shadow or shifting position by 2px) to simulate physical machinery.

### Chips & Status Badges
High-visibility markers for delivery status. Use a black background with Sunbeam Yellow text for "Urgent" or "In Transit." Use "Egyptian Blue" for "Delivered." They should look like physical labels slapped onto a box.

### Lists & Data Grids
Technical and dense. Use 1px borders between items. Headlines within lists use `label-sm` (Inter Bold, Uppercase) to denote data categories (e.g., TRACKING ID, DESTINATION).

### Input Fields
Large, bold outlines (2px) in Egyptian Blue. Labels are placed above the field in `label-sm`. Focus states should swap the border to Sunbeam Yellow for immediate visual feedback.

### Cards
"Crate-style" containers. Cards should have a 1px border. For featured content, include a "Shadow" that is a solid block of color offset by 4px, giving it a 3D physical presence on the grid.

### Logistics Tracker
A custom component featuring a thick linear path in Sunbeam Yellow, with sharp diamond-shaped nodes indicating progress. Use high-contrast icons for "Warehouse," "In Transit," and "Delivered."