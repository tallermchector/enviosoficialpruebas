# Design System: Envios DosRuedas
**Project ID:** projects/4997545405057467149

## 1. Visual Theme & Atmosphere

**Envios DosRuedas** features a highly professional, modern, and trustworthy design system tailored for a high-efficiency logistics and 24/7 delivery operation. The visual atmosphere is divided into two distinct, high-contrast modes:

*   **Atmosphere Vibe**: Clean, precise, and technologically advanced.
*   **Aesthetic Philosophy**: Employs structural elements, subtle kinetic energy, and premium glassmorphic treatments. It utilizes depth layering and radiant accents to highlight crucial conversion points (tracking, booking, operations) without introducing visual noise.
*   **Density**: Balanced and responsive—providing high-density, easily scannable data layouts for administrators and courier dashboards, and clean, spacious layouts for public-facing client pages.

---

## 2. Color Palette & Roles

The system operates on a robust light-and-dark dual color system defined by flexible HSL design tokens, allowing for clean thematic transitions.

### 2.1 Light Mode Colors
*   **Vibrant Cobalt Blue** (`#2563EB` / `hsl(221.2 83.2% 53.3%)`): **Primary Action Color**. Applied to primary buttons, interactive links, brand indicators, and key navigation highlights.
*   **Industrial Gold** (`#E89A17` / `hsl(45 93% 47%)`): **High-Priority Accent**. Reserved strictly for critical calls-to-action (CTAs), important warnings, primary badges, and high-visibility markers.
*   **Crisp Studio White** (`#FFFFFF` / `hsl(0 0% 100%)`): **Global Background**. Provides a clean, open, and modern canvas that maximizes text readability.
*   **Deep Charcoal Slate** (`#020617` / `hsl(222.2 84% 4.9%)`): **Primary Foreground**. Delivers sharp, high-contrast body copy and readable typography.
*   **Soft Lavender Grey** (`#F1F5F9` / `hsl(210 40% 96.1%)`): **Muted Background & Accents**. Used for secondary panels, borders, and input fields to prevent visual overload.
*   **Alert Crimson Red** (`#EF4444` / `hsl(0 84.2% 60.2%)`): **Destructive Action**. Used for errors, alert messages, cancel buttons, and dangerous operational states.

### 2.2 Dark Mode Colors (Theme class `.dark`)
*   **Deep Midnight Space** (`#020617` / `hsl(222 84% 4.9%)`): **Primary Dark Background**. Creates an immersive, low-glare environment that optimizes energy efficiency and focus for operational users.
*   **Ice White** (`#F8FAFC` / `hsl(210 40% 98%)`): **Primary Dark Foreground**. Ensures excellent visual contrast and readability for all text elements against the midnight background.
*   **Electric Neon Blue** (`#3B82F6` / `hsl(217.2 91.2% 59.8%)`): **Primary Dark Interactive Accent**. Acts as the primary interactive cue for hover states, select indicators, and focus rings.
*   **Golden Flare** (`#E89A17` / `hsl(45 93% 47%)`): **Dark Mode CTA Accent**. Provides a striking warm beacon against dark layouts, highlighting buttons and critical order statuses.
*   **Slate Core** (`#1E293B` / `hsl(217.2 32.6% 17.5%)`): **Dark Card Surface & Borders**. Standardizes the layout of cards, input backgrounds, and dividers, segregating elements from the main background.
*   **Deep Crimson** (`#7F1D1D` / `hsl(0 62.8% 30.6%)`): **Dark Destructive Accent**. Softened dark-red tone for warning panels, error outlines, and destructive statuses.

---

## 3. Typography Rules

Typography acts as a structural element, striking a perfect balance between forward-looking industrial aesthetics and high-readability utilitarian formats.

*   **Display / Header Font (Orbitron)**:
    *   *System Reference*: `--font-orbitron`
    *   *Role & Vibe*: Tech-forward, geometric, and futuristic. Used exclusively for prominent titles, main section headers, logo typography, hero displays, and large numeric readouts (like tracking stats or prices).
    *   *Usage constraints*: Set in Bold (`700`) or Extra Bold (`800`) weights. Utilizes tight letter-spacing (`tracking-tight` or `tracking-tighter`) to enforce a solid block format.
*   **Sans-Serif / Body Font (Roboto)**:
    *   *System Reference*: `--font-roboto`
    *   *Role & Vibe*: Crisp, low-stress, and universal. Utilized for body copy, paragraphs, table entries, form labels, input texts, and utility descriptions.
    *   *Usage constraints*: Used in Regular (`400`) and Medium (`500`) weights for optimal legibility at any size.

---

## 4. Component Stylings

All UI elements strictly align with predefined Tailwind tokens to maintain uniform layout profiles.

### 4.1 Buttons
*   **Default Button**: Crisp, clean rectangles with moderately rounded corners (`rounded-md` = `0.375rem`). Uses a background of primary blue (`bg-primary`) with ice white text, transitioning with smooth color changes on hover (`hover:bg-primary/90`).
*   **Secondary CTA Button**: Utilizes the Industrial Gold palette (`bg-secondary` with text `#451a03`), indicating urgent processes like "Cotizar Envío" or "Confirmar Pedido".
*   **Elite Gradient Button**: A premium, high-impact component built with a flowing horizontal gradient `from-[#2563eb] via-[#3b82f6] to-[#2563eb]` with `bg-[length:200%_auto]`. It casts an immersive visual glow via `shadow-[0_0_20px_rgba(37,99,235,0.3)]` and increases its depth on hover.

### 4.2 Cards / Containers
*   **Operational Cards**: Uses a light container structure (`rounded-lg` = `0.5rem`) with a thin border outline (`#E2E8F0` in light mode, `#1E293B` in dark mode) and a soft shadow (`shadow-sm`) to lift elements from the background.
*   **Glassmorphic Cards**: Reserved for floating landing sections and promotional headers. Crafted using a semi-transparent background fill (`white/10` or dark equivalent), a highly detailed translucent boundary stroke (`border-white/20`), and a frosted glass filter (`backdrop-blur-sm`).

### 4.3 Inputs / Forms
*   Spacious rectangular fields (`rounded-md` = `0.375rem`) with a 1px border stroke.
*   *Interaction State*: On focus, the input border glows in electric neon blue `#3B82F6` and applies a high-contrast offset ring structure (`focus-visible:ring-2 focus-visible:ring-ring`).

---

## 5. Layout Principles

Spacing and layout strategies are designed using mobile-first practices to ensure perfect scaling across all devices.

*   **Max Container Width**: Grid and content wrappers center and cap at `1400px` (`2xl` in Tailwind), ensuring balanced readable widths on ultra-wide screens.
*   **Visual Margin Rhythm**:
    *   *Desktop layouts*: Generous `4rem` padding margins between parent sections to allow visual patterns to breathe.
    *   *Mobile layouts*: Condensed `2rem` margins to maximize screen real estate for vital operational widgets and lists.
*   **Whitespace & Gaps**: Grid columns employ a strict `1.5rem` (`gap-6`) standard, ensuring unified spacing in dashboards, product previews, and forms.
