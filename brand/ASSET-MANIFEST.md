# Manifiesto de Activos - Envios DosRuedas

## 1. Archivos de Estilo

### CSS Principal

| Archivo | Ruta | Descripción |
|---------|------|-------------|
| `soft-ui.css` | `src/styles/soft-ui.css` | Variables y componentes Soft UI |
| `glassmorphism.css` | `src/styles/glassmorphism.css` | Variables y componentes Glassmorphism |
| `design-variants.css` | `src/styles/design-variants.css` | Variantes adicionales |
| `globals.css` | `src/app/globals.css` | Estilos globales y Tailwind |

### Configuración

| Archivo | Ruta | Descripción |
|---------|------|-------------|
| `tailwind.config.ts` | `tailwind.config.ts` | Configuración de Tailwind |
| `components.json` | `components.json` | Configuración shadcn/ui |

---

## 2. Documentación de Marca

### Archivos de Documentación

| Archivo | Ruta | Descripción |
|---------|------|-------------|
| `BRAND-IDENTITY.md` | `brand/BRAND-IDENTITY.md` | Identidad de marca completa |
| `VISUAL-IDENTITY.md` | `brand/VISUAL-IDENTITY.md` | Identidad visual y paleta |
| `DESIGN-SYSTEM.md` | `brand/DESIGN-SYSTEM.md` | Sistema de diseño documentado |
| `VOICE-TONE.md` | `brand/VOICE-TONE.md` | Voz y tono de comunicación |
| `USAGE-GUIDE.md` | `brand/USAGE-GUIDE.md` | Guía de uso para desarrolladores |
| `ASSET-MANIFEST.md` | `brand/ASSET-MANIFEST.md` | Este documento |
| `PROMPT-AFAGENTE.md` | `brand/PROMPT-AFAGENTE.md` | Prompt para agente de IA |

### Previews

| Archivo | Ruta | Descripción |
|---------|------|-------------|
| `preview.html` | `design-system/preview.html` | Preview neo-brutalismo |
| `alternative-preview.html` | `design-system/alternative-preview.html` | Preview Soft UI + Glassmorphism |
| `variants.md` | `design-system/variants.md` | Documentación de variantes |

---

## 3. Colores

### Paleta Principal

| Color | Hex | RGB | Variable CSS |
|-------|-----|-----|--------------|
| Egyptian Blue | `#0636A5` | 6, 54, 165 | `--dosruedas-blue` |
| Sunbeam Yellow | `#FFEC01` | 255, 236, 1 | `--dosruedas-yellow` |
| White | `#FFFFFF` | 255, 255, 255 | `--dosruedas-white` |

### Escala de Azules

| Token | Hex | Variable |
|-------|-----|----------|
| Blue 50 | `#EFF6FF` | `--blue-50` |
| Blue 100 | `#DBEAFE` | `--blue-100` |
| Blue 200 | `#BFDBFE` | `--blue-200` |
| Blue 300 | `#93C5FD` | `--blue-300` |
| Blue 400 | `#60A5FA` | `--blue-400` |
| Blue 500 | `#3B82F6` | `--blue-500` |
| Blue 600 | `#2563EB` | `--blue-600` |
| Blue 700 | `#1D4ED8` | `--blue-700` |
| Blue 800 | `#1E3A8A` | `--blue-800` |
| Blue 900 | `#1E40AF` | `--blue-900` |
| Blue 950 | `#172554` | `--blue-950` |

### Escala de Grises

| Token | Hex | Variable |
|-------|-----|----------|
| Gray 50 | `#F8FAFC` | `--gray-50` |
| Gray 100 | `#F1F5F9` | `--gray-100` |
| Gray 200 | `#E2E8F0` | `--gray-200` |
| Gray 300 | `#CBD5E1` | `--gray-300` |
| Gray 400 | `#94A3B8` | `--gray-400` |
| Gray 500 | `#64748B` | `--gray-500` |
| Gray 600 | `#475569` | `--gray-600` |
| Gray 700 | `#334155` | `--gray-700` |
| Gray 800 | `#1E293B` | `--gray-800` |
| Gray 900 | `#0F172A` | `--gray-900` |

### Colores Semánticos

| Color | Hex | Variable |
|-------|-----|----------|
| Success | `#059669` | `--text-success` |
| Warning | `#D97706` | `--text-warning` |
| Error | `#DC2626` | `--text-error` |
| Info | `#0636A5` | `--text-primary` |

---

## 4. Tipografía

### Fuentes

| Fuente | Google Fonts | Variable | Uso |
|--------|--------------|----------|-----|
| Anton | [Link](https://fonts.google.com/specimen/Anton) | `--font-anton` | Display |
| Bebas Neue | [Link](https://fonts.google.com/specimen/Bebas+Neue) | `--font-bebas` | Subheadings |
| Inter | [Link](https://fonts.google.com/specimen/Inter) | `--font-inter` | Body |

### Pesos

| Fuente | Pesos Disponibles |
|--------|-------------------|
| Anton | 400 |
| Bebas Neue | 400 |
| Inter | 400, 500, 600, 700 |

---

## 5. Componentes Soft UI

### Cards

| Clase | Descripción | Archivo CSS |
|-------|-------------|-------------|
| `.card` | Card base | `soft-ui.css` |
| `.card--accent` | Con borde izquierdo | `soft-ui.css` |
| `.card--flat` | Sin sombra | `soft-ui.css` |

### Botones

| Clase | Fondo | Texto | Borde | Archivo CSS |
|-------|-------|-------|-------|-------------|
| `.btn-white` | `#FFFFFF` | `#0636A5` | `#0636A5` | `soft-ui.css` |
| `.btn-blue` | `#0636A5` | `#FFFFFF` | `#0636A5` | `soft-ui.css` |
| `.btn-yellow` | `#FFEC01` | `#0636A5` | `#FFEC01` | `soft-ui.css` |

### Inputs

| Clase | Descripción | Archivo CSS |
|-------|-------------|-------------|
| `.input-pro` | Input estándar | `soft-ui.css` |
| `.input-pro--error` | Estado error | `soft-ui.css` |
| `.input-pro--success` | Estado éxito | `soft-ui.css` |

### Badges

| Clase | Fondo | Texto | Archivo CSS |
|-------|-------|-------|-------------|
| `.badge-white` | `#FFFFFF` | `#0636A5` | `soft-ui.css` |
| `.badge-blue` | `#0636A5` | `#FFFFFF` | `soft-ui.css` |
| `.badge-yellow` | `#FFEC01` | `#0636A5` | `soft-ui.css` |
| `.badge-success` | `#D1FAE5` | `#059669` | `soft-ui.css` |
| `.badge-warning` | `#FEF3C7` | `#D97706` | `soft-ui.css` |
| `.badge-error` | `#FEE2E2` | `#DC2626` | `soft-ui.css` |

### Alertas

| Clase | Fondo | Borde | Texto | Archivo CSS |
|-------|-------|-------|-------|-------------|
| `.alert-info` | `#EFF6FF` | `#BFDBFE` | `#0636A5` | `soft-ui.css` |
| `.alert-success` | `#D1FAE5` | `#6EE7B7` | `#059669` | `soft-ui.css` |
| `.alert-warning` | `#FEF3C7` | `#FCD34D` | `#D97706` | `soft-ui.css` |
| `.alert-error` | `#FEE2E2` | `#FCA5A5` | `#DC2626` | `soft-ui.css` |

---

## 6. Componentes Glassmorphism

### Cards

| Clase | Descripción | Archivo CSS |
|-------|-------------|-------------|
| `.card-glass` | Card translúcida | `glassmorphism.css` |
| `.card-glass--glow` | Con resplandor | `glassmorphism.css` |
| `.card-glass--accent-bottom` | Borde inferior amarillo | `glassmorphism.css` |

### Botones

| Clase | Fondo | Texto | Archivo CSS |
|-------|-------|-------|-------------|
| `.btn-glass` | `rgba(6,54,165,0.6)` | `#FFFFFF` | `glassmorphism.css` |
| `.btn-outline-white` | transparent | `#FFFFFF` | `glassmorphism.css` |

### Inputs

| Clase | Fondo | Texto | Archivo CSS |
|-------|-------|-------|-------------|
| `.input-glass` | `rgba(6,54,165,0.4)` | `#FFFFFF` | `glassmorphism.css` |

### Secciones

| Clase | Fondo | Texto | Archivo CSS |
|-------|-------|-------|-------------|
| `.section-gradient-blue` | Gradiente azul | `#FFFFFF` | `glassmorphism.css` |
| `.section-gradient-light` | Gradiente azul claro | `#0636A5` | `glassmorphism.css` |
| `.section-yellow` | `#FFEC01` | `#0636A5` | `glassmorphism.css` |

---

## 7. Gradientes

### Gradientes Principales

| Token | CSS | Uso |
|-------|-----|-----|
| `gradient-blue` | `linear-gradient(135deg, #0636A5, #1E3A8A, #172554)` | Heroes |
| `gradient-blue-light` | `linear-gradient(135deg, #EFF6FF, #DBEAFE, #BFDBFE)` | Fondos claros |
| `gradient-yellow` | `linear-gradient(135deg, #FFEC01, #F59E0B)` | CTAs |
| `gradient-mixed` | `linear-gradient(135deg, #0636A5, #1E40AF, #FFEC01)` | Destacados |
| `gradient-surface` | `linear-gradient(180deg, #FFFFFF, #F8FAFC)` | Fondos sutiles |
| `gradient-dark` | `linear-gradient(180deg, #0F172A, #1E293B, #334155)` | Fondos oscuros |

---

## 8. Sombras

### Sombras Profesionales

| Token | CSS | Uso |
|-------|-----|-----|
| `shadow-xs` | `0 1px 2px rgba(6,54,165,0.06)` | Elevación mínima |
| `shadow-sm` | `0 2px 4px rgba(6,54,165,0.08), 0 1px 2px rgba(6,54,165,0.04)` | Cards sutiles |
| `shadow-md` | `0 4px 8px rgba(6,54,165,0.1), 0 2px 4px rgba(6,54,165,0.06)` | Cards hover |
| `shadow-lg` | `0 8px 16px rgba(6,54,165,0.12), 0 4px 8px rgba(6,54,165,0.08)` | Modals |
| `shadow-xl` | `0 16px 32px rgba(6,54,165,0.15), 0 8px 16px rgba(6,54,165,0.1)` | Popovers |

### Sombras de Acento

| Token | CSS | Uso |
|-------|-----|-----|
| `shadow-accent-sm` | `0 2px 4px rgba(255,236,1,0.2)` | Elementos sutiles |
| `shadow-accent-md` | `0 4px 8px rgba(255,236,1,0.25), 0 2px 4px rgba(255,236,1,0.15)` | CTAs |
| `shadow-accent-lg` | `0 8px 16px rgba(255,236,1,0.3), 0 4px 8px rgba(255,236,1,0.2)` | Hover |

### Efectos Glow

| Token | CSS | Uso |
|-------|-----|-----|
| `glow-blue` | `0 0 20px rgba(6,54,165,0.3)` | Elementos azules |
| `glow-yellow` | `0 0 20px rgba(255,236,1,0.4)` | CTAs nocturnos |
| `glow-blue-lg` | `0 0 40px rgba(6,54,165,0.4)` | Hover azules |
| `glow-yellow-lg` | `0 0 40px rgba(255,236,1,0.5)` | Hover CTAs |

---

## 9. Espaciado

### Tokens de Espaciado

| Token | Valor | Uso |
|-------|-------|-----|
| `space-1` | `4px` | Espacios mínimos |
| `space-2` | `8px` | Gaps pequeños |
| `space-3` | `12px` | Gaps entre elementos |
| `space-4` | `16px` | Padding interno |
| `space-5` | `20px` | Padding mediano |
| `space-6` | `24px` | Padding cards |
| `space-8` | `32px` | Separación secciones |
| `space-10` | `40px` | Separación mayor |
| `space-12` | `48px` | Separación bloques |
| `space-16` | `64px` | Separación secciones |

---

## 10. Bordes y Radios

### Border Radius

| Token | Valor | Uso |
|-------|-------|-----|
| `radius-sm` | `8px` | Elementos pequeños |
| `radius-md` | `12px` | Cards, inputs, botones |
| `radius-lg` | `16px` | Cards grandes, modals |
| `radius-xl` | `20px` | Secciones destacadas |
| `radius-full` | `9999px` | Badges, avatares |

### Border Width

| Token | Valor | Uso |
|-------|-------|-----|
| `border-thin` | `1px` | Bordes sutiles |
| `border-default` | `2px` | Bordes estándar |
| `border-thick` | `3px` | Bordes accent |
| `border-heavy` | `4px` | Bordes de sección |

---

## 11. Transiciones

### Tokens de Transición

| Token | Valor | Uso |
|-------|-------|-----|
| `transition-fast` | `150ms ease` | Micro-interacciones |
| `transition-normal` | `200ms ease` | Hover states |
| `transition-slow` | `300ms ease` | Modals, dropdowns |

### Easing Functions

| Token | Valor | Uso |
|-------|-------|-----|
| `ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Entradas |
| `ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Salidas |
| `ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Transiciones |

---

## 12. Breakpoints

### Tokens de Breakpoint

| Token | Valor | Uso |
|-------|-------|-----|
| `sm` | `640px` | Mobile landscape |
| `md` | `768px` | Tablet |
| `lg` | `1024px` | Desktop |
| `xl` | `1280px` | Large desktop |
| `2xl` | `1536px` | Extra large |

---

## 13. Iconografía

### Iconos Recomendados

| Librería | Estilo | Tamaño Base |
|----------|--------|-------------|
| Phosphor Icons | Regular (outline) | 24px |
| Lucide | Outline | 24px |

### Tamaños de Iconos

| Token | Tamaño | Uso |
|-------|--------|-----|
| `icon-xs` | `16px` | Inline text |
| `icon-sm` | `20px` | Botones pequeños |
| `icon-md` | `24px` | Estándar |
| `icon-lg` | `32px` | Destacados |
| `icon-xl` | `48px` | Features |

---

## 14. Animaciones

### Animaciones Definidas

| Animación | Duración | Easing | Uso |
|-----------|----------|--------|-----|
| Hover | 200ms | ease-out | Botones, cards |
| Focus | 150ms | ease-out | Inputs |
| Enter | 300ms | ease-out | Modals |
| Exit | 200ms | ease-in | Cerrar |
| Page | 400ms | ease-in-out | Transiciones |

### Efectos Especiales

| Efecto | Descripción | Uso |
|--------|-------------|-----|
| Shimmer | Brillo deslizante | Botones azules hover |
| Float | Flotación suave | Cards glassmorphism |
| Glow Pulse | Pulso de resplandor | CTAs nocturnos |

---

*Manifiesto de Activos - Envios DosRuedas v2.0*
*Última actualización: Junio 2026*
