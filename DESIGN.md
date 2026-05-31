---
design_tokens:
  colors:
    primary_foundation:
      core_background: "#2264E3"
      header_surface_blue: "#1E56C5"
    accent_interactive:
      primary_brand_accent: "#F8CC0B"
      fab_background: "#F8CC0B"
      fab_icon: "#333333"
    typography_text_hierarchy:
      primary_headers: "#F8CC0B"
      section_headers: "#FFFFFF"
      body_content: "#FFFFFF"
      secondary_text: "#E2E8F0"
    functional_states:
      social_containers: "rgba(255, 255, 255, 0.15)"
      section_dividers: "#F8CC0B"
  typography:
    hierarchy_weights:
      logo_branding: "Wide-set, geometric Sans-Serif, heavy weight, uppercase-leaning"
      section_titles: "Geometric Sans-Serif, ~24px, bold weight"
      body_text: "Modern, neutral Sans-Serif (Inter, Roboto, Helvetica), ~16px, regular weight"
      icon_labels: "Medium weight Sans-Serif"
    spacing_principles:
      line_height: "1.5rem"
      letter_spacing: "Increased tracking on headers"
  components:
    buttons:
      social_media: "Circular, ~48px diameter, subtle stroke or low-opacity fill"
      fab: "56px circular, bottom-right position"
    cards_containers:
      service_lists: "Non-bordered, transparent, fixed-width icon area left, text right"
      header: "Full-width, subtle shadow"
    navigation:
      mobile_menu: "3-bar hamburger, white, top-right"
      contextual_anchors: "Left-aligned text links"
    domain_specific:
      service_icons: "Minimalist line-art/glyph, Yellow"
      section_underline: "~40px wide, 3px tall, placed beneath first word of section headers"
  layout:
    grid_structure:
      mobile_first: "Centered vertical stack, ~24px side margins"
      vertical_rhythm: "40px-60px vertical gaps between major sections"
    whitespace_strategy:
      negative_space: "Heavily reliant on blue background voids to contrast yellow/white"
      internal_padding: "16px horizontal padding between icons and labels"
    alignment_balance:
      text_alignment: "Left-aligned almost entirely (F-pattern)"
      asymmetric_balance: "Left-aligned text balanced by right-aligned menu and FAB"
---
# Design System: Envíos DosRuedas

## 1. Visual Theme & Atmosphere
The Envíos DosRuedas design system is built on a foundation of high-contrast, energetic utility. It adopts a "Logistics Tech" aesthetic, utilizing a vibrant royal blue and safety yellow palette that evokes speed, reliability, and automotive services. The atmosphere is professional yet urgent, designed to communicate efficiency to users looking for immediate delivery solutions in an urban environment.

The design philosophy prioritizes legibility and rapid information scanning. By using a dark, saturated blue background, the white and yellow elements "pop" with high luminous contrast. The interface feels modern and mobile-centric, employing wide-track geometric typography for branding and clean, functional sans-serif for service details.

## 2. Color Palette & Roles
### Primary Foundation
- **Core Background:** `#2264E3` (Vibrant Royal Blue). Used for the entire page canvas to establish brand identity and depth.
- **Header/Surface Blue:** `#1E56C5` (Slightly darker blue). Used for the sticky header or subtle section separation.

### Accent & Interactive
- **Primary Brand Accent:** `#F8CC0B` (Safety Yellow). Used for the main brand name, service icons, and primary action triggers.
- **Floating Action Button (FAB):** `#F8CC0B` background with `#333333` icon for maximum visibility.

### Typography & Text Hierarchy
- **Primary Headers:** `#F8CC0B` (Yellow). Used for the main logo text.
- **Section Headers:** `#FFFFFF` (White). Used for "Servicios" and "Cotizar" with a yellow underline.
- **Body / Content:** `#FFFFFF` (White). High-readability white for service descriptions and list items.
- **Secondary Text:** `#E2E8F0` (Light Gray/Blue). Used for sub-captions like "Tu Solución Confiable".

### Functional States
- **Social Containers:** `rgba(255, 255, 255, 0.15)` (Semi-transparent white/blue). Used for circular icon backdrops.
- **Section Dividers:** `#F8CC0B` (Yellow). 2px thick horizontal rules under section titles.

## 3. Typography Rules
### Hierarchy & Weights
- **Logo/Branding:** Wide-set, geometric Sans-Serif (reminiscent of industrial or racing fonts). Heavy weight, uppercase-leaning.
- **Section Titles:** Similar geometric Sans-Serif. Large scale (~24px), bold weight.
- **Body Text:** Modern, neutral Sans-Serif (e.g., Inter, Roboto, or Helvetica). Regular weight (~16px) with generous tracking for readability.
- **Icon Labels:** Medium weight Sans-Serif, vertically centered with icons.

### Spacing Principles
- **Line Height:** 1.5rem for body text to prevent density issues on mobile.
- **Letter Spacing:** Increased tracking on headers to enhance the "tech" and "wide" aesthetic.

## 4. Component Stylings
### Buttons
- **Social Media Buttons:** Circular, approximately 48px diameter. Features a subtle stroke or low-opacity fill to allow the background blue to bleed through.
- **FAB (Floating Action Button):** 56px circular yellow button positioned in the bottom-right corner. Contains a dark chevron-up or action icon.

### Cards & Containers
- **Service Lists:** Non-bordered, transparent containers. Each item is a row consisting of a fixed-width icon area (left) and text (right).
- **Header:** Full-width container with a subtle shadow to separate it from the scrolling content.

### Navigation
- **Mobile Menu:** "Hamburger" icon (3-bar) in white, positioned top-right.
- **Contextual Anchors:** Left-aligned text links that function as service categories.

### Domain-Specific Components
- **Service Icons:** Minimalist line-art or glyph-style icons in Yellow. Each icon represents a specific delivery type (Lightning bolt for Express, Dollar sign for LowCost, etc.).
- **Section Underline:** A decorative yellow bar (approx. 40px wide, 3px tall) placed directly under the first word of section headers.

## 5. Layout Principles
### Grid & Structure
- **Mobile-First Single Column:** A centered vertical stack with generous side margins (approx. 24px).
- **Vertical Rhythm:** Large vertical gaps (40px-60px) between major sections ("Servicios" to "Cotizar") to provide breathing room.

### Whitespace Strategy
- **Negative Space:** The design leans heavily on the blue background to create "void" spaces, which focus the user's eye on the bright yellow and white text elements.
- **Internal Padding:** Icons are given significant horizontal padding (16px) from their labels.

### Alignment & Visual Balance
- **Left-Alignment:** Almost all text and list elements are left-aligned to follow a natural reading F-pattern.
- **Asymmetric Balance:** The heavy left-aligned text is balanced by the right-aligned hamburger menu and the bottom-right FAB.

## 6. Design System Notes for Stitch Generation
### Language to Use
- When describing UI, use terms like "High-contrast," "Industrial-Geometric," "Safety-Yellow Accents," and "Mobile-Optimized Utility."

### Color References
- Use `bg-[#2264E3]` for the main background.
- Use `text-[#F8CC0B]` for primary accents and icons.
- Use `text-white` for primary body copy.

### Component Prompts
- "Create a service list item with a yellow [icon name] and white sans-serif text."
- "Design a section header with a short, thick yellow underline directly beneath the text."
- "Generate a circular yellow FAB with a dark arrow-up icon."

### Incremental Iteration
- Focus first on the background and typography hierarchy.
- Add the decorative yellow underlines and circular social icons in the second pass.
- Ensure the floating action button remains sticky in the bottom right corner for all views.
