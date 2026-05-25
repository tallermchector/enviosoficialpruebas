---
tokens:
  colors:
    light:
      primary: "221.2 83.2% 53.3%"
      secondary: "45 93% 47%"
      background: "0 0% 100%"
      foreground: "222.2 84% 4.9%"
      muted: "210 40% 96.1%"
      accent: "210 40% 96.1%"
      destructive: "0 84.2% 60.2%"
      border: "214.3 31.8% 91.4%"
      input: "214.3 31.8% 91.4%"
      ring: "222.2 84% 4.9%"
    dark:
      primary: "217.2 91.2% 59.8%"
      secondary: "45 93% 47%"
      background: "222 84% 4.9%"
      foreground: "210 40% 98%"
      muted: "217.2 32.6% 17.5%"
      accent: "217.2 32.6% 17.5%"
      destructive: "0 62.8% 30.6%"
      border: "217.2 32.6% 17.5%"
      input: "217.2 32.6% 17.5%"
      ring: "217.2 91.2% 59.8%"
    brand:
      dark_bg: "#050810"
      blue_primary: "#2563EB"
      gold_secondary: "#E89A17"
  typography:
    display:
      family: "Orbitron"
      variable: "--font-orbitron"
      weights: [400, 700, 900]
    sans:
      family: "Roboto"
      variable: "--font-roboto"
      weights: [400, 700]
  spacing:
    container_max: "1400px"
    section_padding_desktop: "4rem"
    section_padding_mobile: "2rem"
    gap_standard: "1.5rem"
  radius:
    base: "0.75rem"
---

# Design System: Envios DosRuedas (Dos Ruedas Pro)

## 1. Brand Identity & Atmosphere
**Envios DosRuedas** features a highly professional, modern, and trustworthy design system tailored for high-efficiency logistics. The visual atmosphere balances industrial reliability with cutting-edge technology.

*   **Vibe**: High-tech, reliable, premium, and lightning-fast.
*   **Aesthetic philosophy**: Uses structural elements, subtle kinetic energy, and premium glassmorphic treatments.
*   **Copywriting (Argentine Voseo)**: All customer-facing text MUST leverage natural Argentine *voseo* (e.g., "Cotizá tu envío", "Seguí tu pedido", "Tenés el control").

## 2. Visual Theme
*   **Glassmorphism**: Use of `backdrop-blur-md` combined with semi-transparent borders (`border-white/20`) for panels floating over dark backgrounds.
*   **Dark Mode Foundation**: Primary background for main sections and landing pages is `#050810`.
*   **High Contrast**: High-visibility colors (Blue and Gold) are used sparingly to lead the user's eye to conversion funnels.

## 3. Typography Rules
*   **Display / Header Font (Orbitron)**: Used for main titles, headers, logo, and large numeric readouts. It conveys a futuristic and technological feel.
*   **Sans-Serif / Body Font (Roboto)**: Used for paragraphs, forms, labels, and data tables. It ensures clarity and professionalism.

## 4. Component Stylings
*   **Buttons**:
    *   *Primary Blue*: `bg-primary text-primary-foreground hover:bg-primary/90`.
    *   *Secondary Gold CTA*: `bg-secondary text-[#451a03] font-bold hover:bg-[#d97706]`.
    *   *Elite Gradient*: Blue gradient with glow effects (`shadow-[0_0_20px_rgba(37,99,235,0.3)]`).
*   **Cards**: Standard cards use `rounded-lg` with subtle shadows. Logistics-specific cards often feature a `border-l-4 border-l-secondary` accent.
*   **Inputs**: Spacious rectangular fields with high-contrast focus rings.

## 5. Layout Principles
*   **Max Width**: Containers are capped at `1400px`.
*   **Responsive Scaling**: Mobile-first design. Section padding scales from `2rem` (mobile) to `4rem` (desktop).
*   **Print Fidelity**: Strictly follow A4 format rules for labels and invoices, ensuring zero overflow and 10mm margins.
