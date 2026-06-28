# Prompt para Agente de IA - Aplicación de Estilos DosRuedas

## Instrucción Principal

Necesito que apliques los estilos **Soft UI Evolution** y **Glassmorphism Premium** a todas las secciones del sitio web de Envios DosRuedas. Los estilos están definidos en:

- `design-system/alternative-preview.html` - Preview visual de referencia
- `src/styles/soft-ui.css` - Variables y clases Soft UI
- `src/styles/glassmorphism.css` - Variables y clases Glassmorphism

## Paleta de Colores (NO CAMBIAR)

```
Egyptian Blue: #0636A5 (Primary)
Sunbeam Yellow: #FFEC01 (Secondary/Accent)
White: #FFFFFF (Background)
```

## Tipografía (MANTENER)

- **Anton** → Títulos display (heading-display)
- **Bebas Neue** → Subtítulos y botones (heading-section, heading-card)
- **Inter** → Cuerpo y labels (text-body, text-label)

## Regla de Contraste (CRÍTICA)

| Fondo | Texto |
|-------|-------|
| Blanco `#FFFFFF` | Azul `#0636A5` |
| Azul `#0636A5` | Blanco `#FFFFFF` |
| Amarillo `#FFEC01` | Azul `#0636A5` |

## Qué Estilo Aplicar Dónde

### Soft UI Evolution (`data-style="soft-ui"`)
Aplicar a:
- Secciones de contenido general
- Formularios y calculadoras
- Cards de servicios
- Listados y grids
- Secciones con fondo claro

**Características:**
- `border-radius: 12-16px`
- Sombras suaves multicapa (`box-shadow: var(--shadow-md)`)
- Bordes finos (1px) o ausentes
- Transiciones 200-300ms
- Fondos sólidos claros

### Glassmorphism Premium (`data-style="glassmorphism"`)
Aplicar a:
- Secciones Hero
- CTAs principales
- Secciones destacadas con fondo oscuro
- Modales y overlays
- Navegación sticky

**Características:**
- `backdrop-filter: blur(12px)`
- Backgrounds translúcidos (`rgba(6, 54, 165, 0.5)`)
- Bordes translúcidos (`rgba(255, 255, 255, 0.15)`)
- Gradientes de fondo
- Glow effects en CTAs

## Archivos a Modificar

### 1. PÁGINA PRINCIPAL (`/`)

**Componentes:**

| Componente | Archivo | Estilo |
|------------|---------|--------|
| Hero Animado | `src/components/homenew/hero-animado.tsx` | Glassmorphism |
| Vision Section | `src/components/homenew/vision-section.tsx` | Soft UI |
| Services Overview | `src/components/homenew/services-overview.tsx` | Soft UI |
| CTA Section | `src/components/homenew/cta-section.tsx` | Glassmorphism |
| Emprendedores Home | `src/components/homenew/emprendedores-home.tsx` | Soft UI |
| Slider Servicios | `src/components/homenew/slider-servicios.tsx` | Soft UI |
| Carrusel Redes | `src/components/homenew/carrusel-redes.tsx` | Soft UI |
| Pricing Section | `src/components/homenew/pricing-section.tsx` | Soft UI |
| Footer | `src/components/homenew/footer.tsx` | Soft UI |
| Header | `src/components/homenew/optimized-header.tsx` | Glassmorphism |

### 2. SERVICIOS

**Envíos Express (`/servicios/envios-express`):**

| Componente | Archivo | Estilo |
|------------|---------|--------|
| Express Hero | `src/components/express/express-hero.tsx` | Glassmorphism |
| Express Content | `src/components/express/express-content.tsx` | Soft UI |
| Express Benefits | `src/components/express/express-benefits.tsx` | Soft UI |
| Express Pricing | `src/components/express/express-pricing-ranges.tsx` | Soft UI |
| Express CTA | `src/components/express/express-cta.tsx` | Glassmorphism |
| WhatsApp Button | `src/components/express/whatsapp-button.tsx` | Glassmorphism |
| Urgent Scenarios | `src/components/express/urgent-scenarios.tsx` | Soft UI |
| Time Slots | `src/components/express/time-slots.tsx` | Soft UI |

**Envíos LowCost (`/servicios/envios-lowcost`):**

| Componente | Archivo | Estilo |
|------------|---------|--------|
| LowCost Hero | `src/components/lowcost/lowcost-hero.tsx` | Glassmorphism |
| LowCost Content | `src/components/lowcost/lowcost-content.tsx` | Soft UI |
| Pricing Comparison | `src/components/lowcost/pricing-comparison.tsx` | Soft UI |
| LowCost Benefits | `src/components/lowcost/lowcost-benefits.tsx` | Soft UI |
| How LowCost Works | `src/components/lowcost/how-lowcost-works.tsx` | Soft UI |
| LowCost CTA | `src/components/lowcost/lowcost-cta.tsx` | Glassmorphism |

**Envíos Flex (`/servicios/enviosflex`):**
- Hero → Glassmorphism
- Contenido → Soft UI
- CTA → Glassmorphism

**Plan Emprendedores (`/servicios/plan-emprendedores`):**
- Hero → Glassmorphism
- Contenido → Soft UI
- Pricing → Soft UI
- CTA → Glassmorphism

### 3. CALCULADORAS

**Express Calculator (`/cotizar/express`):**

| Componente | Archivo | Estilo |
|------------|---------|--------|
| Calculator Hero | `src/components/calculator/calculator-hero.tsx` | Glassmorphism |
| Express Calculator | `src/components/calculator/express-calculator.tsx` | Soft UI |
| Map Features | `src/components/calculator/map-features.tsx` | Soft UI |
| Pricing Info | `src/components/calculator/pricing-info.tsx` | Soft UI |
| Calculator Tips | `src/components/calculator/calculator-tips.tsx` | Soft UI |
| Calculator Contact | `src/components/calculator/calculator-contact.tsx` | Soft UI |

**LowCost Calculator (`/cotizar/lowcost`):**
- Hero → Glassmorphism
- Calculator → Soft UI
- Componentes restantes → Soft UI

### 4. CONTACTO (`/contacto`)

| Componente | Archivo | Estilo |
|------------|---------|--------|
| Contact Hero | `src/components/contact/contact-hero.tsx` | Glassmorphism |
| Contact Form | `src/components/contact/contact-form.tsx` | Soft UI |
| Contact Info | `src/components/contact/contact-info.tsx` | Soft UI |
| Contact Map | `src/components/contact/contact-map.tsx` | Soft UI |
| Business Hours | `src/components/contact/business-hours.tsx` | Soft UI |

### 5. NOSOTROS

**Sobre Nosotros (`/nosotros/sobre-nosotros`):**

| Componente | Archivo | Estilo |
|------------|---------|--------|
| About Hero | `src/components/about/about-hero.tsx` | Glassmorphism |
| Who We Are | `src/components/about/who-we-are.tsx` | Soft UI |
| Company Values | `src/components/about/company-values.tsx` | Soft UI |
| Company Story | `src/components/about/company-story.tsx` | Soft UI |
| Team Section | `src/components/about/team-section.tsx` | Soft UI |
| Mission Vision | `src/components/about/mission-vision.tsx` | Soft UI |

**Preguntas Frecuentes (`/nosotros/preguntas-frecuentes`):**

| Componente | Archivo | Estilo |
|------------|---------|--------|
| FAQ Hero | `src/components/faq/faq-hero.tsx` | Glassmorphism |
| FAQ Categories | `src/components/faq/faq-categories.tsx` | Soft UI |
| FAQ Item | `src/components/faq/faq-item.tsx` | Soft UI |
| FAQ Contact CTA | `src/components/faq/faq-contact-cta.tsx` | Glassmorphism |

**Nuestras Redes (`/nosotros/nuestras-redes`):**

| Componente | Archivo | Estilo |
|------------|---------|--------|
| Social Hero | `src/components/social/social-hero.tsx` | Glassmorphism |
| Social Connect | `src/components/social/social-connect.tsx` | Soft UI |
| Social Feed | `src/components/social/social-feed.tsx` | Soft UI |
| Social Benefits | `src/components/social/social-benefits.tsx` | Soft UI |
| Newsletter Signup | `src/components/social/newsletter-signup.tsx` | Soft UI |

### 6. LEGALES

**Términos y Condiciones (`/terminos-y-condiciones`):**
- Hero → Glassmorphism
- Contenido → Soft UI

**Política de Privacidad (`/politica-de-privacidad`):**
- Hero → Glassmorphism
- Contenido → Soft UI

### 7. PROPIEDADES (`/propiedades`)

| Componente | Archivo | Estilo |
|------------|---------|--------|
| Tarjeta Propiedad | `src/components/propiedades/TarjetaPropiedad.tsx` | Soft UI |
| Perfil Agente | `src/components/propiedades/PerfilAgente.tsx` | Soft UI |
| Formulario Contacto | `src/components/propiedades/FormularioContacto.tsx` | Soft UI |

### 8. COMPONENTES DE LAYOUT

| Componente | Archivo | Estilo |
|------------|---------|--------|
| Header | `src/components/layout/header.tsx` | Glassmorphism |
| Footer | `src/components/layout/footer.tsx` | Soft UI |

## Cómo Aplicar los Estilos

### Para Soft UI:

```tsx
// Envolver sección
<section data-style="soft-ui" className="bg-[var(--bg-base)]">
  <div className="container mx-auto px-6">
    {/* Card */}
    <div className="card card--accent">
      <h3 className="heading-card">Título</h3>
      <p className="text-body">Contenido</p>
      <button className="btn btn--primary">Acción</button>
    </div>
  </div>
</section>
```

### Para Glassmorphism:

```tsx
// Sección con gradiente
<section data-style="glassmorphism" className="glass-section">
  <div className="container mx-auto px-6 relative z-10">
    {/* Glass Card */}
    <div className="glass-card glass-card--glow">
      <h3 className="heading-card">Título</h3>
      <p className="text-body">Contenido</p>
      <button className="btn btn--primary">CTA</button>
    </div>
  </div>
</section>
```

## Clases Disponibles

### Soft UI
- `.card`, `.card--flat`, `.card--elevated`, `.card--accent`
- `.btn--primary`, `.btn--accent`, `.btn--outline`, `.btn--ghost`
- `.btn--lg`, `.btn--sm`, `.btn--full`
- `.input`, `.input--error`, `.input--success`
- `.badge--primary`, `.btn--accent`, `.badge--success`, `.badge--warning`, `.badge--error`
- `.alert--info`, `.alert--success`, `.alert--warning`, `.alert--error`
- `.heading-display`, `.heading-section`, `.heading-card`
- `.text-body`, `.text-label`

### Glassmorphism
- `.glass-section`, `.glass-section--light`
- `.glass-card`, `.glass-card--glow`, `.glass-card--accent`, `.glass-card--solid`
- `.btn--primary` (amarillo con glow), `.btn--glass`, `.btn--outline`
- `.input` (glass style)
- `.badge--accent`, `.badge--glass`
- `.stat-card`, `.stat-number`, `.stat-label`
- `.animate-float`, `.animate-pulse-glow`

## Reglas Importantes

1. **NO modificar** `src/components/ui/` (shadcn/ui components) - solo los componentes de feature
2. **MANTENER** la funcionalidad existente - solo cambiar estilos visuales
3. **RESPETAR** la lógica de contraste siempre
4. **USAR** las variables CSS definidas en los archivos de estilo
5. **NO CAMBIAR** la paleta de colores base
6. **MANTENER** la tipografía Anton/Bebas Neue/Inter
7. **AGREGAR** `data-style="soft-ui"` o `data-style="glassmorphism"` a las secciones principales
8. **IMPORTAR** los CSS en `globals.css` si no están importados

## Orden de Trabajo

1. Primero importar los CSS en `globals.css`:
   ```css
   @import './styles/soft-ui.css';
   @import './styles/glassmorphism.css';
   ```

2. Modificar componentes de layout (Header, Footer)

3. Modificar página principal (`/`)

4. Modificar servicios (express, lowcost, flex, emprendedores)

5. Modificar calculadoras

6. Modificar contacto

7. Modificar nosotros

8. Modificar legales

9. Modificar propiedades

## Referencia Visual

Abre `design-system/alternative-preview.html` en el navegador para ver exactamente cómo debe quedar cada componente.

---

**Objetivo:** Que el sitio se vea moderno, profesional y consistente, usando Soft UI para contenido general y Glassmorphism para secciones hero y CTAs destacados.
