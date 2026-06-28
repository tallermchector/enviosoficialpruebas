# Identidad Visual - Envios DosRuedas

## 1. Paleta de Colores

### Colores Primarios

| Color | Hex | RGB | Uso |
|-------|-----|-----|-----|
| **Egyptian Blue** | `#0636A5` | 6, 54, 165 | Color principal, textos sobre fondo claro |
| **Sunbeam Yellow** | `#FFEC01` | 255, 236, 1 | Acentos, CTAs, badges |
| **White** | `#FFFFFF` | 255, 255, 255 | Fondos, textos sobre fondo oscuro |

### Escala de Azules

| Token | Hex | Uso |
|-------|-----|-----|
| `--blue-50` | `#EFF6FF` | Fondos sutiles |
| `--blue-100` | `#DBEAFE` | Hover states |
| `--blue-200` | `#BFDBFE` | Bordes |
| `--blue-300` | `#93C5FD` | Texto secundario oscuro |
| `--blue-400` | `#60A5FA` | Iconos |
| `--blue-500` | `#3B82F6` | Interactive |
| `--blue-600` | `#2563EB` | Hover primary |
| `--blue-700` | `#1D4ED8` | Active states |
| `--blue-800` | `#1E3A8A` | Texto secundario |
| `--blue-900` | `#1E40AF` | Headers |
| `--blue-950` | `#172554` | Fondos oscuros |

### Escala de Grises

| Token | Hex | Uso |
|-------|-----|-----|
| `--gray-50` | `#F8FAFC` | Fondos claros |
| `--gray-100` | `#F1F5F9` | Fondos alternos |
| `--gray-200` | `#E2E8F0` | Bordes sutiles |
| `--gray-300` | `#CBD5E1` | Borders |
| `--gray-400` | `#94A3B8` | Texto placeholder |
| `--gray-500` | `#64748B` | Texto muted |
| `--gray-600` | `#475569` | Texto secundario |
| `--gray-700` | `#334155` | Texto body |
| `--gray-800` | `#1E293B` | Texto primary |
| `--gray-900` | `#0F172A` | Headers |

### Colores Semánticos

| Color | Hex | Uso |
|-------|-----|-----|
| **Success** | `#059669` | Estados exitosos |
| **Warning** | `#D97706` | Advertencias |
| **Error** | `#DC2626` | Errores |
| **Info** | `#0636A5` | Información (mismo que primary) |

### Regla de Contraste

| Fondo | Texto | Ratio |
|-------|-------|-------|
| Blanco `#FFFFFF` | Azul `#0636A5` | 7.5:1 (AAA) |
| Azul `#0636A5` | Blanco `#FFFFFF` | 7.5:1 (AAA) |
| Amarillo `#FFEC01` | Azul `#0636A5` | 6.2:1 (AAA) |

---

## 2. Tipografía

### Fuentes Principales

| Fuente | Rol | Peso | Uso |
|--------|-----|------|-----|
| **Anton** | Display | 400 | Títulos principales, heroes |
| **Bebas Neue** | Subheading | 400 | Subtítulos, botones, labels |
| **Inter** | Body | 400-700 | Texto cuerpo, formularios |

### Escala Tipográfica

| Token | Tamaño | Line Height | Letter Spacing | Uso |
|-------|--------|-------------|----------------|-----|
| `text-display` | 48-72px | 1.1 | 0.02em | Heroes, títulos principales |
| `text-h1` | 36-48px | 1.2 | 0.02em | Títulos de página |
| `text-h2` | 28-36px | 1.3 | 0.03em | Títulos de sección |
| `text-h3` | 20-24px | 1.4 | 0.04em | Títulos de card |
| `text-body-lg` | 18-20px | 1.6 | 0 | Texto destacado |
| `text-body` | 16px | 1.6 | 0 | Texto cuerpo |
| `text-body-sm` | 14px | 1.5 | 0 | Texto secundario |
| `text-caption` | 12px | 1.4 | 0.05em | Labels, badges |

### Uso de Tipografía

**Anton:**
- Títulos de heroes
- Números grandes (estadísticas)
- CTAs principales
- Siempre en mayúsculas

**Bebas Neue:**
- Subtítulos
- Texto de botones
- Labels de navegación
- Siempre en mayúsculas

**Inter:**
- Texto cuerpo
- Formularios
- Descripciones
- Párrafos largos

---

## 3. Sistema de Sombras

### Sombras Profesionales (Soft UI)

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
| `shadow-accent-sm` | `0 2px 4px rgba(255,236,1,0.2)` | Elementos amarillos sutiles |
| `shadow-accent-md` | `0 4px 8px rgba(255,236,1,0.25), 0 2px 4px rgba(255,236,1,0.15)` | CTAs amarillos |
| `shadow-accent-lg` | `0 8px 16px rgba(255,236,1,0.3), 0 4px 8px rgba(255,236,1,0.2)` | Hover CTAs |

### Efectos Glow (Glassmorphism)

| Token | CSS | Uso |
|-------|-----|-----|
| `glow-blue` | `0 0 20px rgba(6,54,165,0.3)` | Elementos azules nocturnos |
| `glow-yellow` | `0 0 20px rgba(255,236,1,0.4)` | CTAs nocturnos |
| `glow-blue-lg` | `0 0 40px rgba(6,54,165,0.4)` | Hover azules |
| `glow-yellow-lg` | `0 0 40px rgba(255,236,1,0.5)` | Hover CTAs |

---

## 4. Bordes y Radios

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

## 5. Espaciado

### Escala de Espaciado

| Token | Valor | Uso |
|-------|-------|-----|
| `space-1` | `4px` | Espacios mínimos |
| `space-2` | `8px` | Gaps pequeños |
| `space-3` | `12px` | Gaps entre elementos |
| `space-4` | `16px` | Padding interno |
| `space-5` | `20px` | Padding mediano |
| `space-6` | `24px` | Padding cards |
| `space-8` | `32px` | Separación entre secciones |
| `space-10` | `40px` | Separación mayor |
| `space-12` | `48px` | Separación de bloques |
| `space-16` | `64px` | Separación de secciones |

---

## 6. Gradientes

### Gradientes Principales

| Token | CSS | Uso |
|-------|-----|-----|
| `gradient-blue` | `linear-gradient(135deg, #0636A5 0%, #1E3A8A 50%, #172554 100%)` | Heroes, secciones oscuras |
| `gradient-blue-light` | `linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #BFDBFE 100%)` | Secciones claras |
| `gradient-yellow` | `linear-gradient(135deg, #FFEC01 0%, #F59E0B 100%)` | CTAs amarillos |
| `gradient-mixed` | `linear-gradient(135deg, #0636A5 0%, #1E40AF 40%, #FFEC01 100%)` | Secciones destacadas |
| `gradient-surface` | `linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)` | Fondos sutiles |
| `gradient-dark` | `linear-gradient(180deg, #0F172A 0%, #1E293B 50%, #334155 100%)` | Secciones oscuras |

### Efectos de Fondo

**Glassmorphism:**
- `backdrop-filter: blur(12px)`
- `background: rgba(6, 54, 165, 0.5)`
- `border: 1px solid rgba(255, 255, 255, 0.15)`

**Decorative Blobs:**
- Amarillo: `rgba(255, 236, 1, 0.12)` con `filter: blur(80px)`
- Azul: `rgba(6, 54, 165, 0.3)` con `filter: blur(60px)`

---

## 7. Iconografía

### Estilo de Iconos
- **Familia:** Phosphor Icons (primario), Lucide (secundario)
- **Estilo:** Regular (outline)
- **Tamaño base:** 24px
- **Stroke width:** 1.5px

### Tamaños de Iconos

| Token | Tamaño | Uso |
|-------|--------|-----|
| `icon-xs` | `16px` | Inline text |
| `icon-sm` | `20px` | Botones pequeños |
| `icon-md` | `24px` | Estándar |
| `icon-lg` | `32px` | Destacados |
| `icon-xl` | `48px` | Features |

### Colores de Iconos
- **Sobre fondo claro:** `#0636A5`
- **Sobre fondo oscuro:** `#FFFFFF`
- **Acento:** `#FFEC01`
- **Muted:** `#64748B`

---

## 8. Imágenes

### Fotografía
- **Estilo:** Urbano, movimiento, calles de MDP
- **Tono:** Cálido, dinámico, profesional
- **Filtros:** Alto contraste, saturación media

### Ilustraciones
- **Estilo:** Flat design con sombras suaves
- **Colores:** Paleta de marca
- **Temas:** Delivery, motos, paquetes, mapas

### Videos
- **Estilo:** Dinámico, rápido
- **Duración:** 15-30 segundos (social), 60-90 segundos (web)
- **Música:** Energética, moderna

---

## 9. Animaciones

### Principios
- **Rapidez:** 150-300ms para micro-interacciones
- **Suavidad:** Easing `ease-out` o `cubic-bezier(0.16, 1, 0.3, 1)`
- **Propósito:** Cada animación debe tener función

### Animaciones Estándar

| Animación | Duración | Easing | Uso |
|-----------|----------|--------|-----|
| Hover | 200ms | ease-out | Botones, cards |
| Focus | 150ms | ease-out | Inputs |
| Enter | 300ms | ease-out | Modals, dropdowns |
| Exit | 200ms | ease-in | Cerrar elementos |
| Page | 400ms | ease-in-out | Transiciones de página |

### Efectos Especiales
- **Shimmer:** En botones azules al hover
- **Float:** En cards glassmorphism
- **Glow Pulse:** En CTAs nocturnos

---

## 10. Grid y Layout

### Sistema de Grid
- **Columnas:** 12
- **Gutter:** 24px
- **Margen:** 24px (mobile), 48px (desktop)
- **Max-width:** 1200px

### Breakpoints

| Token | Tamaño | Uso |
|-------|--------|-----|
| `sm` | `640px` | Mobile landscape |
| `md` | `768px` | Tablet |
| `lg` | `1024px` | Desktop |
| `xl` | `1280px` | Large desktop |
| `2xl` | `1536px` | Extra large |

### Espaciado de Secciones
- **Entre secciones:** 64-96px
- **Dentro de secciones:** 32-48px
- **Entre elementos:** 16-24px

---

*Documento de Identidad Visual - Envios DosRuedas*
*Versión 2.0 - Nuevo Estilo: Soft UI + Glassmorphism*
