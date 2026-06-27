---
name: Envios DosRuedas
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#444653'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#747685'
  outline-variant: '#c4c5d5'
  surface-tint: '#3455c4'
  primary: '#002276'
  on-primary: '#ffffff'
  primary-container: '#0635a6'
  on-primary-container: '#95a9ff'
  inverse-primary: '#b7c4ff'
  secondary: '#686000'
  on-secondary: '#ffffff'
  secondary-container: '#f5e300'
  on-secondary-container: '#6d6400'
  tertiary: '#0f2668'
  on-tertiary: '#ffffff'
  tertiary-container: '#293d7f'
  on-tertiary-container: '#98aaf4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001552'
  on-primary-fixed-variant: '#133bab'
  secondary-fixed: '#f8e600'
  secondary-fixed-dim: '#d9c900'
  on-secondary-fixed: '#1f1c00'
  on-secondary-fixed-variant: '#4e4800'
  tertiary-fixed: '#dce1ff'
  tertiary-fixed-dim: '#b6c4ff'
  on-tertiary-fixed: '#001550'
  on-tertiary-fixed-variant: '#2f4285'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  headline-xl:
    fontFamily: Anton
    fontSize: 80px
    fontWeight: '400'
    lineHeight: 80px
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Anton
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Anton
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 36px
  subtitle-lg:
    fontFamily: Bebas Neue
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.05em
  data-display:
    fontFamily: Bebas Neue
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0.05em
  body-lg:
    fontFamily: Bebas Neue
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.03em
  label-caps:
    fontFamily: Bebas Neue
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 14px
    letterSpacing: 0.1em
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 64px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The design system is engineered for **ENVÍOS DOSRUEDAS**, a high-energy delivery service operating in the coastal urban environment of Mar del Plata. The brand personality is professional yet urgently kinetic, balancing the reliability of a logistics giant with the agile spirit of a local courier.

The design style is **High-Contrast / Bold**, utilizing large-scale typography and aggressive color blocks to simulate motion and speed. It draws inspiration from modern editorial sports design, focusing on clarity and impact. The UI should evoke a sense of "moving parts" working in harmony, emphasizing human connection through large imagery of couriers integrated with sharp, technical UI overlays.

## Colors

The palette is built on the high-contrast tension between **Egyptian Blue** and **Sunbeam Yellow**. 

- **Primary (Egyptian Blue):** Used for structural elements, headers, and primary actions. It represents trust, professionalism, and the coastal identity of Mar del Plata.
- **Secondary (Sunbeam Yellow):** Used sparingly for high-impact calls to action, status indicators (like "In Transit"), and highlights. It represents speed, energy, and visibility.
- **Tertiary (Deep Navy):** A darker shade of the primary blue used for text and grounding elements to ensure AAA accessibility against white backgrounds.
- **Surface:** A clean, absolute white is used to provide maximum breathing room for the heavy typography and bold blocks.

## Typography

This system uses a purely condensed and impactful typographic stack. 

- **Anton** is reserved for hero headlines and primary section titles. It should always be used in uppercase to maintain its architectural strength. 
- **Bebas Neue** handles all secondary information, technical data (tracking numbers, timestamps), and navigation labels. Its condensed nature allows for high-density information display without losing the "fast" aesthetic.

For long-form reading (though rare in this application), increase the line height of Bebas Neue to 1.4x to ensure legibility. All technical data should be set with a slight tracking increase (5%) to improve glanceability.

## Layout & Spacing

The layout follows a **Fluid Grid** model with an emphasis on verticality. 

- **Grid:** Use a 12-column grid for desktop and a 4-column grid for mobile. 
- **Gutters:** Tight 16px gutters reinforce the "industrial" and efficient feel of the logistics service.
- **Visual Rhythm:** Use 4px base increments. Blocks of content should be separated by aggressive margins (48px+) to allow the bold typography to breathe. 
- **Alignment:** Use heavy left-alignment. Indentations are used only for sub-data to maintain a strong "power line" down the left side of the screen.

## Elevation & Depth

This design system eschews soft shadows in favor of **Tonal Layers** and **Bold Borders**. 

- **Flat Depth:** Depth is communicated through color blocking rather than shadows. A Sunbeam Yellow card sits directly on an Egyptian Blue background without a shadow, relying on color contrast for separation.
- **Hard Offsets:** When an element needs to "pop" (like a primary action button), use a hard 4px offset "drop shadow" in a solid contrasting color (e.g., a Blue button with a solid Yellow offset) rather than a blurred shadow.
- **Overlays:** Use 90% opacity Egyptian Blue for modals to keep the context of the map or dashboard visible while maintaining a high-contrast environment.

## Shapes

The shape language is **Sharp (0px)**. To convey speed, precision, and the mechanical nature of "two wheels," all corners are kept strictly at 90 degrees. 

Square edges emphasize the grid and the "building block" nature of the logistics chain. For interactive elements like buttons, the sharp corners should be paired with thick 2px or 3px borders to ensure they feel tactile and robust.

## Components

- **Buttons:** Rectangular and bold. Primary buttons are Egyptian Blue with white Bebas Neue text. On hover, they shift to Sunbeam Yellow with Blue text.
- **Tracking Input:** Large, full-width fields with a 2px Egyptian Blue bottom border. The text should be set in Bebas Neue at the `data-display` size.
- **Status Chips:** Rectangular tags using high-contrast fills. "In Delivery" uses Sunbeam Yellow; "Completed" uses Egyptian Blue; "Delayed" uses a high-visibility Red.
- **Cards:** Cards do not use shadows. They use a 1px solid border in Egyptian Blue or a solid fill in a very light grey (#F2F2F2) to differentiate from the white surface.
- **Icons:** Use thick-stroke (2px) monolinear icons. Avoid rounded icon sets; choose geometric, sharp-edged icons that match the typography.
- **The "Speed Line" Component:** A decorative element consisting of three horizontal bars of varying lengths in Sunbeam Yellow, used to indicate motion next to delivery status updates.