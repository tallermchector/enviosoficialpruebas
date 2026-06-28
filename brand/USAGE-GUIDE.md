# Guía de Uso - Envios DosRuedas

## 1. Inicio Rápido

### Importar Estilos

En `globals.css`:

```css
@import './styles/soft-ui.css';
@import './styles/glassmorphism.css';
```

### Estructura de Directorios

```
src/
├── app/                    # Páginas
├── components/
│   ├── ui/                 # Componentes shadcn/ui (NO modificar)
│   ├── homenew/            # Componentes home
│   ├── express/            # Componentes express
│   ├── lowcost/            # Componentes lowcost
│   ├── calculator/         # Calculadoras
│   ├── contact/            # Contacto
│   ├── about/              # Nosotros
│   ├── faq/                # FAQ
│   └── social/             # Redes sociales
├── styles/
│   ├── soft-ui.css         # Estilos Soft UI
│   └── glassmorphism.css   # Estilos Glassmorphism
└── brand/                  # Documentación de marca
```

---

## 2. Cuándo Usar Cada Estilo

### Soft UI Evolution

**Usar para:**
- Secciones de contenido general
- Formularios y calculadoras
- Cards de servicios
- Listados y grids
- Secciones con fondo claro
- Dashboards
- Tablas

**Características:**
- `border-radius: 12-16px`
- Sombras suaves multicapa
- Bordes finos (1px) o ausentes
- Transiciones 200-300ms
- Fondos sólidos claros

**Ejemplo:**
```tsx
<div data-style="soft-ui">
  <div className="card card--accent">
    <h3 className="heading-card">Servicio Express</h3>
    <p className="text-body">Entrega en menos de 2 horas</p>
    <button className="btn-blue">Cotizar</button>
  </div>
</div>
```

### Glassmorphism Premium

**Usar para:**
- Secciones Hero
- CTAs principales
- Secciones destacadas con fondo oscuro
- Modales y overlays
- Navegación sticky
- Secciones nocturnas

**Características:**
- `backdrop-filter: blur(12px)`
- Backgrounds translúcidos
- Bordes translúcidos
- Gradientes de fondo
- Glow effects en CTAs

**Ejemplo:**
```tsx
<section className="section-gradient-blue py-20 px-6">
  <div className="container mx-auto relative z-10">
    <div className="card-glass card-glass--glow">
      <h2 className="text-3xl font-anton uppercase">¿Necesitás enviar algo?</h2>
      <button className="btn-yellow mt-4">Cotizar Ahora</button>
    </div>
  </div>
</section>
```

---

## 3. Regla de Contraste

### SIEMPRE aplicar

| Fondo | Texto | Ejemplo |
|-------|-------|---------|
| Blanco `#FFFFFF` | Azul `#0636A5` | Card blanca con texto azul |
| Azul `#0636A5` | Blanco `#FFFFFF` | Hero azul con texto blanco |
| Amarillo `#FFEC01` | Azul `#0636A5` | CTA amarillo con texto azul |

### Ejemplos Correctos

```tsx
// ✅ Correcto: Fondo blanco → texto azul
<div className="card-white">
  <h3 className="text-blue-800">Título</h3>
</div>

// ✅ Correcto: Fondo azul → texto blanco
<div className="card-blue">
  <h3 className="text-white">Título</h3>
</div>

// ✅ Correcto: Fondo amarillo → texto azul
<div className="card-yellow">
  <h3 className="text-blue-800">Título</h3>
</div>
```

### Ejemplos Incorrectos

```tsx
// ❌ Incorrecto: Fondo blanco → texto blanco
<div className="bg-white">
  <h3 className="text-white">Título</h3> // No se ve
</div>

// ❌ Incorrecto: Fondo azul → texto amarillo
<div className="bg-blue-800">
  <h3 className="text-yellow-400">Título</h3> // Bajo contraste
</div>
```

---

## 4. Componentes Disponibles

### Soft UI

| Componente | Clase | Uso |
|------------|-------|-----|
| Card base | `.card` | Contenedor estándar |
| Card accent | `.card--accent` | Con borde izquierdo |
| Card flat | `.card--flat` | Sin sombra |
| Botón blanco | `.btn-white` | Fondo blanco, texto azul |
| Botón azul | `.btn-blue` | Fondo azul, texto blanco |
| Botón amarillo | `.btn-yellow` | Fondo amarillo, texto azul |
| Input | `.input-pro` | Input estándar |
| Input error | `.input-pro--error` | Estado error |
| Input success | `.input-pro--success` | Estado éxito |
| Badge blanco | `.badge-white` | Fondo blanco |
| Badge azul | `.badge-blue` | Fondo azul |
| Badge amarillo | `.badge-yellow` | Fondo amarillo |
| Alert info | `.alert-info` | Información |
| Alert success | `.alert-success` | Éxito |
| Alert warning | `.alert-warning` | Advertencia |
| Alert error | `.alert-error` | Error |

### Glassmorphism

| Componente | Clase | Uso |
|------------|-------|-----|
| Card glass | `.card-glass` | Fondo translúcido |
| Card glow | `.card-glass--glow` | Con resplandor |
| Card accent | `.card-glass--accent-bottom` | Borde inferior amarillo |
| Botón glass | `.btn-glass` | Translúcido |
| Botón outline | `.btn-outline-white` | Borde blanco |
| Input glass | `.input-glass` | Input nocturno |
| Sección gradiente | `.section-gradient-blue` | Hero sections |
| Sección clara | `.section-gradient-light` | Contenido claro |
| Sección amarilla | `.section-yellow` | CTAs |

### Utilidades

| Clase | Uso |
|-------|-----|
| `.shadow-soft-sm` | Sombra suave pequeña |
| `.shadow-soft-md` | Sombra suave mediana |
| `.shadow-soft-lg` | Sombra suave grande |
| `.shadow-accent` | Sombra amarilla |
| `.shadow-glow-blue` | Resplandor azul |
| `.shadow-glow-yellow` | Resplandor amarillo |
| `.transition-smooth` | Transición suave |

---

## 5. Patrones de Componentes

### Hero Section

```tsx
// Hero con Glassmorphism
<section className="section-gradient-blue py-20 md:py-32 px-6">
  <div className="container mx-auto relative z-10">
    <p className="text-sm uppercase tracking-widest text-yellow-400 mb-4">
      Envíos en Mar del Plata
    </p>
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-anton uppercase mb-6">
      Entregas Express
    </h1>
    <p className="text-lg md:text-xl text-blue-200 max-w-xl mb-8">
      Cotizá al instante y recibí en menos de 2 horas
    </p>
    <div className="flex flex-wrap gap-4">
      <button className="btn-yellow text-lg px-8 py-4">
        Cotizar Ahora
      </button>
      <button className="btn-outline-white text-lg px-8 py-4">
        WhatsApp
      </button>
    </div>
  </div>
</section>
```

### Services Grid

```tsx
// Grid de servicios con Soft UI
<section className="bg-[var(--bg-base)] py-16 md:py-24 px-6">
  <div className="container mx-auto">
    <h2 className="text-3xl md:text-4xl font-anton text-center mb-12 text-[var(--dosruedas-blue)]">
      Nuestros Servicios
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="card card--accent hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bebas uppercase mb-3 text-[var(--dosruedas-blue)]">
          Express
        </h3>
        <p className="text-gray-600 mb-4">Entrega en menos de 2 horas</p>
        <button className="btn-blue">Cotizar</button>
      </div>
      {/* Más cards... */}
    </div>
  </div>
</section>
```

### Contact Form

```tsx
// Formulario con Soft UI
<section className="bg-white py-16 px-6">
  <div className="container mx-auto max-w-2xl">
    <div className="card">
      <h2 className="text-3xl font-anton uppercase mb-6 text-[var(--dosruedas-blue)]">
        Contacto
      </h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-blue-800 mb-2">
            Nombre
          </label>
          <input className="input-pro" placeholder="Tu nombre..." />
        </div>
        <div>
          <label className="block text-sm font-medium text-blue-800 mb-2">
            Email
          </label>
          <input className="input-pro" type="email" placeholder="tu@email.com" />
        </div>
        <button className="btn-blue w-full">Enviar</button>
      </form>
    </div>
  </div>
</section>
```

### CTA Section

```tsx
// CTA con Glassmorphism
<section className="section-gradient-blue py-16 px-6">
  <div className="container mx-auto text-center relative z-10">
    <div className="card-glass card-glass--glow max-w-2xl mx-auto p-8 md:p-12">
      <h2 className="text-3xl md:text-4xl font-anton uppercase mb-4">
        ¿Necesitás enviar algo?
      </h2>
      <p className="text-blue-200 text-lg mb-8">
        Cotizá al instante por WhatsApp
      </p>
      <button className="btn-yellow text-lg px-10 py-4">
        WhatsApp
      </button>
    </div>
  </div>
</section>
```

---

## 6. Responsive Design

### Breakpoints

```css
/* Mobile first */
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

### Adaptaciones Comunes

```tsx
// Texto responsive
<h1 className="text-4xl md:text-6xl lg:text-7xl font-anton">
  Título
</h1>

// Grid responsive
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Cards */}
</div>

// Padding responsive
<section className="py-12 md:py-16 lg:py-24 px-4 md:px-6">
  {/* Contenido */}
</section>

// Botones responsive
<div className="flex flex-col sm:flex-row gap-4">
  <button className="btn-yellow w-full sm:w-auto">Cotizar</button>
  <button className="btn-outline-white w-full sm:w-auto">Info</button>
</div>
```

---

## 7. Accesibilidad

### Focus States

```css
/* Siempre visible */
*:focus-visible {
  outline: 2px solid var(--dosruedas-blue);
  outline-offset: 2px;
}

/* Para inputs */
.input-pro:focus {
  border-color: var(--dosruedas-blue);
  box-shadow: 0 0 0 4px rgba(6, 54, 165, 0.15);
}
```

### Touch Targets

```css
/* Mínimo 44x44px */
button, a, input, select, textarea {
  min-height: 44px;
  min-width: 44px;
}
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}
```

### High Contrast

```css
@media (prefers-contrast: high) {
  :root {
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.15);
    --shadow-md: 0 2px 6px rgba(0, 0, 0, 0.2);
    --border-light: #94A3B8;
  }
}
```

---

## 8. Performance

### Optimizaciones

```css
/* Usar transform para animaciones */
.card:hover {
  transform: translateY(-2px); /* GPU accelerated */
  box-shadow: var(--shadow-lg);
}

/* Evitar animar propiedades que causan reflow */
/* ❌ Mal */
.card:hover {
  margin-top: -2px;
}

/* ✅ Bien */
.card:hover {
  transform: translateY(-2px);
}
```

### Lazy Loading

```tsx
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function Page() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
```

---

## 9. Errores Comunes

### ❌ No mezclar estilos

```tsx
// ❌ Mal: mezclar Soft UI y Glassmorphism en el mismo contenedor
<div className="card card-glass">
  {/* Confuso */}
</div>

// ✅ Bien: usar uno u otro
<div className="card card--accent">
  {/* Soft UI */}
</div>

<div className="card-glass">
  {/* Glassmorphism */}
</div>
```

### ❌ Respetar contraste

```tsx
// ❌ Mal: fondo claro con texto claro
<div className="bg-white">
  <p className="text-gray-300">Texto</p> {/* No se lee */}
</div>

// ✅ Bien: contraste adecuado
<div className="bg-white">
  <p className="text-gray-700">Texto</p> {/* Legible */}
</div>
```

### ❌ Usar z-index en glassmorphism

```tsx
// ❌ Mal: sin z-index, blobs cubren contenido
<section className="section-gradient-blue">
  <div className="container">
    <h1>Título</h1> {/* Puede quedar detrás del blob */}
  </div>
</section>

// ✅ Bien: contenido sobre blobs
<section className="section-gradient-blue">
  <div className="container relative z-10">
    <h1>Título</h1> {/* Siempre visible */}
  </div>
</section>
```

---

## 10. Checklist de Desarrollo

### Antes de Entregar

- [ ] **Contraste:** Todos los textos tienen ratio 4.5:1+
- [ ] **Focus states:** Visibles en todos los elementos interactivos
- [ ] **Touch targets:** Mínimo 44x44px
- [ ] **Responsive:** Funciona en 375px, 768px, 1024px, 1440px
- [ ] **Reduced motion:** Respeta preferencias del usuario
- [ ] **Transiciones:** 150-300ms, suaves
- [ ] **Sombras:** Consistentes dentro de cada sección
- [ ] **Border-radius:** 12-16px (Soft UI), 16-20px (Glassmorphism)
- [ ] **Tipografía:** Anton/Bebas Neue/Inter según reglas
- [ ] **Espaciado:** 8px grid system

### Revisión Visual

- [ ] Hero se ve impactante
- [ ] Cards tienen jerarquía clara
- [ ] Botones son clickeables y claros
- [ ] Formularios son fáciles de usar
- [ ] CTAs destacan visualmente
- [ ] Gradientes se ven suaves
- [ ] Sombras dan profundidad sin ser pesadas

---

*Guía de Uso - Envios DosRuedas v2.0*
*Estilos: Soft UI Evolution + Glassmorphism Premium*
