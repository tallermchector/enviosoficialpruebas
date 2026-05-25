# Design System: Dos Ruedas Pro (Envios DosRuedas)
**Version:** 2.0 (Premium Evolution)  
**Target Platform:** Next.js + Tailwind CSS  

---

## 1. Visual Theme & Atmosphere

**Dos Ruedas Pro** is structured on a **Corporate / Modern Futuristic** design aesthetic. It balances the rugged, high-density reliability of industrial logistics with the clean, sophisticated transparency of cutting-edge technology. 

*   **Vibe & Mood**: Hyper-efficient, secure, and fast. The digital presence evokes a premium, 24/7 night-time operations focus through an immersive dark-mode foundation, paired with highly calculated bright accent signals.
*   **Visual Pillars**:
    *   *Glassmorphism (Frosted Glass)*: Panel depth is established using blurred translucent layers that float above topographic/matrix gradients, symbolizing operational clarity.
    *   *Slick Gradients*: Clean, flowing color transitions that simulate speed and kinetic energy.
    *   *High Contrast*: High-visibility colors used sparingly to lead the user’s eye directly to conversion funnels.
*   **Density Strategy**:
    *   *Public Facing*: Spacious layout spacing to ensure high readability and a welcoming onboarding.
    *   *Dashboards (Admin/Courier)*: Medium-to-high data density allowing fast status assessment and minimal scrolling under sunlight.

---

## 2. Color Palette & Roles

The system uses unified CSS variables defined in HSL format within `src/app/globals.css`, letting elements adapt natively between Light and Dark modes.

### 2.1 Color Tokens & Hex Mappings

| Color Token | HSL Value (Light) | Hex (Light) | HSL Value (Dark) | Hex (Dark) | Semantic Role & Purpose |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `background` | `0 0% 100%` | `#FFFFFF` | `222 84% 4.9%` | `#020617` | Base layer of the application canvas. |
| `foreground` | `222.2 84% 4.9%` | `#020617` | `210 40% 98%` | `#F8FAFC` | Main readable typography and titles. |
| `primary` | `221.2 83.2% 53.3%` | `#2563EB` | `217.2 91.2% 59.8%` | `#3B82F6` | **Primary Brand Accent**. Interactive links, icons. |
| `secondary` | `45 93% 47%` | `#E89A17` | `45 93% 47%` | `#E89A17` | **Caution/CTA Gold**. Main call-to-actions, high priority. |
| `muted` | `210 40% 96.1%` | `#F1F5F9` | `217.2 32.6% 17.5%` | `#1E293B` | Secondary container backgrounds and text. |
| `accent` | `210 40% 96.1%` | `#F1F5F9` | `217.2 32.6% 17.5%` | `#1E293B` | Elevated panels, inactive rows, cards. |
| `destructive` | `0 84.2% 60.2%` | `#EF4444` | `0 62.8% 30.6%` | `#7F1D1D` | Error panels, destructive actions, cancel buttons. |
| `border` | `214.3 31.8% 91.4%` | `#E2E8F0` | `217.2 32.6% 17.5%` | `#1E293B` | Content separators and form bounds. |

---

## 3. Typography Rules

The typography system strictly leverages heavy weight variations and specialized font families to communicate technological precision and industrial robustness.

*   **Display / Header Font: Orbitron** (`var(--font-orbitron)`)
    *   *Aesthetic*: Cybernetic, geometric, and speed-oriented.
    *   *Usage*: Main page titles (`H1`, `H2`), high-contrast metrics, tracking codes, price values, and the corporate logo.
    *   *Details*: Weighted at Semibold (`600`) or Extra Bold (`800`). Utilizes tight letter-spacing (`tracking-tighter` / `-0.02em`) to maintain structural density.
*   **Sans-Serif / Body Font: Roboto** (`var(--font-roboto)`)
    *   *Aesthetic*: Highly legible, modern, and low-stress.
    *   *Usage*: Paragraphs, input labels, form fields, descriptive captions, and data tables.
    *   *Details*: Regular (`400`) and Medium (`500`) weights. Spacing scales to `tracking-normal`.

---

## 4. Interactive States & Component Consistency

To prevent visual drift, all custom and shadcn/ui components (calculators, tracking timelines, scanner dashboards) must maintain consistent token states.

### 4.1 Interactive State Matrices

| State | CSS/Tailwind Classes (Light Mode) | CSS/Tailwind Classes (Dark Mode) | Behavioral Transition |
| :--- | :--- | :--- | :--- |
| **Hover** | `hover:bg-primary/90 hover:scale-[1.02] shadow-md` | `hover:bg-primary/80 hover:scale-[1.02] shadow-[0_0_15px_rgba(59,130,246,0.3)]` | Smooth 200ms scale-up and subtle emissive glow. |
| **Active** | `active:scale-[0.98] active:bg-primary/95` | `active:scale-[0.98] active:bg-primary/90` | Scale-down on click to provide tangible physical feedback. |
| **Disabled** | `opacity-50 cursor-not-allowed pointer-events-none` | `opacity-40 cursor-not-allowed pointer-events-none` | Complete reduction of click and hover handlers. |
| **Focus** | `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2` | `focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-slate-900` | Crisp visual ring enclosing the element. |

### 4.2 Component Blueprint Styles

#### 1. Buttons
*   *Primary Blue Button*: `bg-primary text-primary-foreground hover:bg-primary/90 rounded-md transition-all duration-200`
*   *Secondary Gold CTA*: `bg-secondary text-[#451a03] font-bold hover:bg-[#d97706] rounded-md transition-all`
*   *Premium Gradient Button*: `bg-gradient-to-r from-[#2563eb] via-[#3b82f6] to-[#2563eb] bg-[length:200%_auto] text-white hover:bg-[right_center] transition-all duration-500 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] border-none`

#### 2. Cards / Containers
*   *Base Card*: `rounded-lg border bg-card text-card-foreground shadow-sm p-6`
*   *Glassmorphic Panel*: `bg-white/10 dark:bg-slate-950/40 backdrop-blur-md border border-white/20 dark:border-slate-800/50 rounded-lg shadow-2xl`
*   *Accent Logistics Card*: Standard card featuring a solid left-side gold boundary (`border-l-4 border-l-secondary`).

#### 3. Inputs & Forms
*   `w-full bg-slate-50 dark:bg-slate-900 border border-input rounded-md px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`

---

## 5. Layout & Print Principles

*   **Max Container Width**: Centered grids clamped at `1400px` (`2xl` in Tailwind) to ensure readability on wide displays.
*   **Spacing Strategy**:
    *   *Desktop layout margins*: Section paddings set at `4rem` (`py-16`).
    *   *Mobile layout margins*: Condensed padding to `2rem` (`py-8`) to prevent layout clipping.
*   **Print Layout (A4 Format)**:
    *   Under `@media print`, forces A4 size (`size: A4`) with `10mm` margins.
    *   Cards and barcodes must employ `break-inside: avoid` to avoid separation between pages.
    *   Requires zero overflow layouts to ensure printed A4 labels match digital screens with absolute fidelity.
