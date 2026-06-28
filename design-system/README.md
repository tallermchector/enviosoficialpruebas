# Sistema de Diseño - Envios DosRuedas

## Archivos del Sistema

```
design-system/
├── variants.md              # 5 variantes neo-brutalistas
├── alternative-styles.md    # 2 estilos alternativos (Soft UI + Glassmorphism)
├── preview.html             # Preview neo-brutalismo
├── alternative-preview.html # Preview estilos alternativos
└── README.md                # Esta guía

src/styles/
├── design-variants.css      # Variables neo-brutalistas
├── soft-ui.css              # Estilo Soft UI Evolution
└── glassmorphism.css        # Estilo Glassmorphism Premium
```

---

## Paleta Base (Inalterable)

```css
--dosruedas-blue: #0636A5;    /* Egyptian Blue */
--dosruedas-yellow: #FFEC01;  /* Sunbeam Yellow */
--dosruedas-white: #FFFFFF;   /* White */
```

**Tipografía:** Anton (títulos) · Bebas Neue (subtítulos) · Inter (cuerpo)

---

## Opciones de Estilo

### Opción 1: Neo-Brutalismo (Actual)

| Variante | Uso | Características |
|----------|-----|-----------------|
| Corporativo | Documentos formales | Sombras 2px, bordes finos |
| Industrial | Landing, CTAs | Sombras 4-8px, máximo impacto |
| Ejecutivo | Dashboards | Sombras suaves, borde accent |
| Tech | Formularios | Focus rings, validación |
| Nocturno | Modo oscuro | Glassmorphism, glow |

**Uso:**
```html
<div data-variant="corporate">...</div>
<button class="btn-industrial">Cotizar</button>
<div class="card-executive">...</div>
```

---

### Opción 2: Soft UI Evolution ⭐ NUEVO

Sombras suaves multicapa, bordes redondeados (12-16px), aspecto moderno profesional.

**Ideal para:** Dashboards, SaaS, aplicaciones corporativas

**Características:**
- Border-radius: 12-16px
- Sombras: Suaves, multicapa
- Bordes: 1px finos
- Transiciones: 200-300ms

**Uso:**
```html
<div data-style="soft-ui">
  <div class="card">
    <h3 class="heading-card">Título</h3>
    <p class="text-body">Contenido</p>
    <button class="btn btn--primary">Acción</button>
  </div>
</div>
```

**Componentes disponibles:**
- `.card`, `.card--flat`, `.card--elevated`, `.card--accent`
- `.btn--primary`, `.btn--accent`, `.btn--outline`, `.btn--ghost`
- `.input`, `.input--error`, `.input--success`
- `.badge--primary`, `.badge--accent`, `.badge--success`
- `.alert--info`, `.alert--success`, `.alert--warning`, `.alert--error`

---

### Opción 3: Glassmorphism Premium ⭐ NUEVO

Efecto cristal esmerilado, blur, gradientes de fondo, aspecto sofisticado high-end.

**Ideal para:** Héroes, secciones destacadas, CTAs premium

**Características:**
- Backdrop-filter: blur(12-20px)
- Backgrounds: Translúcidos (8-15% opacity)
- Bordes: 1px rgba(255,255,255,0.15)
- Glow effects para acentos

**Uso:**
```html
<section data-style="glassmorphism" class="glass-section">
  <div class="glass-card">
    <h3 class="heading-card">Título</h3>
    <p class="text-body">Contenido</p>
    <button class="btn btn--primary">CTA</button>
  </div>
</section>
```

**Componentes disponibles:**
- `.glass-card`, `.glass-card--glow`, `.glass-card--accent`, `.glass-card--solid`
- `.btn--primary`, `.btn--glass`, `.btn--outline`
- `.input` (glass style)
- `.badge--accent`, `.badge--glass`
- `.stat-card`, `.stat-number`, `.stat-label`

---

## Comparativa Rápida

| Característica | Neo-Brutalismo | Soft UI | Glassmorphism |
|----------------|----------------|---------|---------------|
| **Estilo** | Agresivo, urbano | Moderno, profesional | Sofisticado, premium |
| **Sombras** | Duras, offset | Suaves, multicapa | Glow effects |
| **Bordes** | 2-4px sólidos | 1px o ausentes | 1px translúcidos |
| **Radius** | 0px | 12-16px | 16-24px |
| **Fondos** | Sólidos | Sólidos claros | Gradientes + blur |
| **Mejor para** | Landing, branding | Dashboards, SaaS | Héroes, CTAs premium |
| **Performance** | ⚡ Excelente | ⚡ Excelente | ⚠ Buena |
| **WCAG** | AAA | AAA | AA (verificar) |

---

## Uso Mixto Recomendado

Puedes combinar estilos en diferentes secciones:

```html
<!-- Hero con Glassmorphism -->
<section data-style="glassmorphism" class="glass-section">
  <h1 class="heading-display">Envíos Express</h1>
  <button class="btn btn--primary">Cotizar Ahora</button>
</section>

<!-- Contenido con Soft UI -->
<section data-style="soft-ui" style="background: #F8FAFE;">
  <div class="card">
    <h3 class="heading-card">Servicios</h3>
    <p class="text-body">Detalles...</p>
  </div>
</section>

<!-- Sección de marcas con Neo-Brutalismo -->
<section data-variant="industrial">
  <div class="card-executive">...</div>
</section>
```

---

## Ejemplo Completo: Landing Page

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <link rel="stylesheet" href="src/styles/soft-ui.css">
  <link rel="stylesheet" href="src/styles/glassmorphism.css">
</head>
<body>
  
  <!-- Hero con Glassmorphism -->
  <section data-style="glassmorphism" class="glass-section" style="min-height: 80vh;">
    <div class="container" style="padding-top: 120px;">
      <p class="text-label">Envíos en Mar del Plata</p>
      <h1 class="heading-display">Entregas Express</h1>
      <p class="text-body" style="max-width: 500px; margin: 24px 0;">
        Cotizá al instante y recibí en menos de 2 horas
      </p>
      <div style="display: flex; gap: 16px;">
        <button class="btn btn--primary btn--lg">Cotizar Ahora</button>
        <button class="btn btn--glass">WhatsApp</button>
      </div>
    </div>
  </section>
  
  <!-- Servicios con Soft UI -->
  <section data-style="soft-ui" style="padding: 80px 24px; background: #F8FAFE;">
    <div class="container">
      <h2 class="heading-section" style="text-align: center;">Servicios</h2>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 48px;">
        <div class="card">
          <h3 class="heading-card">Express</h3>
          <p class="text-body">Entrega en 2 horas</p>
          <button class="btn btn--primary" style="margin-top: 16px;">Cotizar</button>
        </div>
        <div class="card card--accent">
          <h3 class="heading-card">Low Cost</h3>
          <p class="text-body">Económico y confiable</p>
          <button class="btn btn--accent" style="margin-top: 16px;">Cotizar</button>
        </div>
        <div class="card">
          <h3 class="heading-card">Flex</h3>
          <p class="text-body">Para MercadoLibre</p>
          <button class="btn btn--outline" style="margin-top: 16px;">Cotizar</button>
        </div>
      </div>
    </div>
  </section>
  
</body>
</html>
```

---

## Accesibilidad

| Estilo | Contraste | Focus States | Reduced Motion |
|--------|-----------|--------------|----------------|
| Neo-Brutalismo | ✅ AAA | ✅ Visible | ✅ Respeta |
| Soft UI | ✅ AAA | ✅ Ring 3px | ✅ Respeta |
| Glassmorphism | ⚠️ AA | ✅ Glow | ✅ Respeta |

---

## Convenciones

1. **Nunca mezclar** `data-variant` con `data-style` en el mismo contenedor
2. **Mantener consistencia** dentro de cada sección
3. **Respetar tipografía** Anton/Bebas Neue/Inter
4. **Usar transiciones** coherentes (150-300ms)
5. **Verificar contraste** especialmente en Glassmorphism

---

*Generado para Envios DosRuedas*
