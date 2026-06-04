# Design System - Envios DosRuedas

This document defines the design system for **Envios DosRuedas**, a last-mile logistics and messaging platform. It is derived from the implementation in `./src` and serves as a reference for maintaining visual and functional consistency.

## 1. Brand Identity

*   **Slogan**: "Tu Solución Confiable".
*   **Pilares**: Rapidez, Seguridad, Modernidad y Confianza.
*   **Voz**: Profesional, tecnológica, eficiente y cercana.

## 2. Design Principles

1.  **Visual Efficiency**: Users should find what they need quickly (tracking, quoting, management).
2.  **Trust through Modernity**: Subtle gradients and glassmorphism effects to convey a technological and cutting-edge image.
3.  **Accessibility**: High contrast in critical elements and clear legibility.
4.  **Consistency**: Rigorous use of Tailwind tokens and components.

## 3. Design Tokens

### 3.1 Colors (HSL)

Defined in `src/app/globals.css` and `tailwind.config.ts`.

| Token | Light Mode | Dark Mode | Usage |
| :--- | :--- | :--- | :--- |
| `primary` | `221.2 83.2% 53.3%` | `217.2 91.2% 59.8%` | Main Blue. Primary buttons, accents. |
| `secondary` | `45 93% 47%` | `45 93% 47%` | Yellow/Gold. CTAs, warnings. |
| `background` | `0 0% 100%` | `222 84% 4.9%` | Main application background. |
| `foreground` | `222.2 84% 4.9%` | `210 40% 98%` | Main text color. |
| `accent` | `210 40% 96.1%` | `217.2 32.6% 17.5%` | Soft section backgrounds. |
| `destructive` | `0 84.2% 60.2%` | `0 62.8% 30.6%` | Errors and dangerous actions. |
| `muted` | `210 40% 96.1%` | `217.2 32.6% 17.5%` | Muted backgrounds and text. |
| `border` | `214.3 31.8% 91.4%` | `217.2 32.6% 17.5%` | Component borders. |

### 3.2 Typography

*   **Display (Headers)**: `Orbitron` (Variable: `--font-orbitron`).
    *   *Usage*: Section titles, text logos, hero headers. Futurist and technological feel.
*   **Sans (Body)**: `Roboto` (Variable: `--font-roboto`).
    *   *Usage*: Paragraphs, forms, button labels, tables. Clarity and professionalism.

### 3.3 Elevation and Shapes

*   **Border Radius**: Standardized to `0.75rem` (`var(--radius)`).
*   **Shadows**: `shadow-sm` for cards, `shadow-2xl` for featured elements like the Hero.

## 4. Layout and Spacing

*   **Container**: Max width of `1400px` (`2xl` in Tailwind).
*   **Spacing**:
    *   Section Padding: `2rem` (mobile) / `4rem` (desktop).
    *   Card Gap: `1.5rem`.
*   **Responsive Strategy**: Mobile-first approach using Flexbox and CSS Grid.

## 5. UI Patterns and Motion

### 5.1 Visual Treatments

*   **Glassmorphism**: `backdrop-blur-sm` combined with semi-transparent borders (e.g., `border-white/20`) for floating panels.
*   **Gradients**:
    *   *Hero Background*: `from-slate-900 via-blue-900 to-slate-800`.
    *   *Primary Button (Yellow)*: `from-yellow-500 to-yellow-600`.

### 5.2 Animations (`tailwind.config.ts`)

*   `animate-float`: Smooth vertical movement (6s).
*   `animate-spin-slow`: Slow rotation for background elements (8s).
*   `animate-h-scroll`: Infinite horizontal scroll for logos/networks (45s).
*   `animate-accordion-down/up`: Standard Radix accordion transitions.

### 5.3 Framer Motion Patterns

*   **Entradas**: `initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}`.
*   **Hovers**: `whileHover={{ scale: 1.05 }}` for cards and main buttons.

## 6. Component Library (`src/components/ui/`)

The system uses **shadcn/ui** as its foundation. Key components include:

*   **Buttons**: Variants include `default` (primary blue), `secondary` (yellow), `destructive`, `outline`, `ghost`, and `link`.
*   **Cards**: Standard `Card` with `shadow-sm` and `rounded-lg`.
*   **Forms**: Consistent usage of `Label`, `Input`, `Select`, `Checkbox`, and `RadioGroup`.
*   **Feedback**: `Toast` (via `sonner`), `Alert`, and `Progress` bars.
*   **Navigation**: `NavigationMenu`, `Tabs`, and `Breadcrumb`.

## 7. Developer Guidelines

### ✅ Do's
*   Use `cn()` for Tailwind class concatenation.
*   Ensure text contrast on colored backgrounds.
*   Maintain consistency across portals (Admin, Client, Courier).
*   Explicitly implement `dark mode` for custom components.
*   Use CSS variables for colors (e.g., `bg-primary` instead of hex codes).

### ❌ Don'ts
*   Avoid hardcoded colors (e.g., `bg-[#123456]`).
*   Do not mix fonts; use `Roboto` for everything except headers.
*   Never remove `focus-visible` styles from interactive elements.
*   Avoid excessive animations that distract from core tasks.
