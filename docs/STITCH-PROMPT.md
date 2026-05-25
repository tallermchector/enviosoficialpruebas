# Master Prompt for Google Stitch AI: Web Redesign System
**Role**: Expert Design Engineer & Lead UI Architect  
**Objective**: Generate highly consistent, premium frontend screens for *Dos Ruedas Pro / Envios DosRuedas* that align exactly with the existing repository architecture, database schemas, and visual guides.

---

## 1. Brand Identity & Copywriting Tone

When generating UI text, titles, button labels, and marketing copy, strictly enforce the following brand framework:
*   **Vibe**: High-tech, reliable, premium, and lightning-fast. A digital "beacon" guiding urban logistics in Mar del Plata.
*   **Copywriting (Argentine Voseo)**: All customer-facing text must leverage natural Argentine *voseo* (*cotizá tu envío*, *seguí tu pedido en tiempo real*, *tenés el control absoluto*, *hablá con nosotros*). Never use neutral Spanish or *tuteo* (*cotiza tu envío*, *tienes el control*).
*   **Values**: Focus on speed, security, and real-time operational feedback.

---

## 2. Visual Hierarchy & Core Layouts

Structure generated pages using a clear hierarchy, dividing sections horizontally to allow background gradients to breathe.

### 2.1 Critical Page Structuring
1.  **Above-the-Fold (LCP Critical Area)**:
    *   *Hero Section*: Dark space background (`#050810`), prominent displays featuring the **Orbitron** font, italics skews, and glowing gradients. Key action CTA: a secondary Gold button (`#E89A17`) leading to the Cotizador.
2.  **Below-the-Fold (Modular Services Overview)**:
    *   Grid sections detailing the four services: *Express*, *Low-Cost*, *Flex MercadoLibre*, and *Plan Emprendedores*.
    *   Use low-opacity frosted glass cards (`bg-white/10` with `backdrop-blur-md` and `border-white/20`) to separate items.
3.  **Utility Integrations**:
    *   *Cotizador (Calculator)*: Sleek split-view. Form input controls on the left; geocoded Google Maps frame showing routing vectors on the right.
    *   *Seguimiento (Tracking Timeline)*: Vertical kinetic timeline. Complete milestones (PENDIENTE ➡️ EN_CURSO ➡️ ENTREGADO) colored dynamically based on current order status.

---

## 3. Technical Constraints & Design Rules

Stitch must maintain absolute technical compliance with the repository's configuration:
*   **Mobile-First Tailwind CSS**: Design interfaces starting from mobile layouts (`sm`, standard single column, tight horizontal padding), scaling out fluidly to desktop sizes (`lg`/`xl`, 12-column grids, centered max-width `1400px`).
*   **Type Safety**: Strictly implement typed props using TypeScript interfaces. Avoid using the `any` keyword.
*   **No Placeholders Policy**: Never write dummy text ("Lorem Ipsum") or generic image tags. Use real descriptions, actual prices from the database models, and authentic copy.
*   **Tailwind-Only styling**: Never write inline `<style>` tags or import external CSS stylesheets. Rely 100% on Tailwind CSS native classes and arbitrary properties when needed.

---

## 4. Instructions for System & File Inheritance (Context Matching)

To guarantee that new screens integrate perfectly with existing logical structures, Stitch must read and inherit data from the repository's main blueprints:

```markdown
### STEP 1: READ THE SOURCE OF TRUTH
Before writing any code:
1. Load **docs/DESIGN.md** to import HSL color tokens, typography rules (Orbitron display + Roboto body), and interactive transitions (Hover, Active, Focus, Disabled states).
2. Load **docs/BLUEPRINT.md** to verify page navigation paths, database Prisma models, and folder structures.

### STEP 2: INHERIT COMPONENT HOOKS
1. Use the class merger utility: `cn()` imported from `@/lib/utils` for conditional styles.
2. Form inputs must hook into `React Hook Form` and validate schemas via `Zod`.
3. Database mutations must always call the server actions inside `src/app/actions.ts`. Never perform inline database updates.

### STEP 3: PRESERVE PRINT FIDELITY
*   When editing labels or invoice documents, use the `@media print` rules declared inside `src/app/globals.css` ensuring perfect A4 pagination and avoiding column clipping.
```
