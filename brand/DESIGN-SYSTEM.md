# Sistema de Diseño - Envios DosRuedas

## 1. Arquitectura del Sistema

### Capas del Sistema

```
┌─────────────────────────────────────────┐
│           Tokens Primitivos             │
│  (Colores, espaciado, tipografía)       │
├─────────────────────────────────────────┤
│          Tokens Semánticos              │
│  (bg-primary, text-accent, shadow-md)   │
├─────────────────────────────────────────┤
│         Componentes de Estilo           │
│  (Soft UI, Glassmorphism)               │
├─────────────────────────────────────────┤
│           Componentes UI                │
│  (Cards, Buttons, Inputs, Badges)       │
└─────────────────────────────────────────┘
```

---

## 2. Tokens Semánticos

### Backgrounds

| Token | Soft UI | Glassmorphism |
|-------|---------|---------------|
| `--bg-base` | `#F8FAFE` | `gradient-blue` |
| `--bg-surface` | `#FFFFFF` | `rgba(6,54,165,0.5)` |
| `--bg-elevated` | `#FFFFFF` | `rgba(255,255,255,0.08)` |
| `--bg-subtle` | `#EFF6FF` | N/A |
| `--bg-gradient` | `gradient-surface` | `gradient-blue` |

### Textos

| Token | Sobre Claro | Sobre Oscuro |
|-------|-------------|--------------|
| `--text-primary` | `#0636A5` | `#FFFFFF` |
| `--text-secondary` | `#334155` | `var(--blue-200)` |
| `--text-muted` | `#64748B` | `var(--blue-300)` |
| `--text-accent` | `#0636A5` | `#FFEC01` |

### Bordes

| Token | Valor |
|-------|-------|
| `--border-light` | `var(--gray-200)` |
| `--border-medium` | `var(--blue-200)` |
| `--border-strong` | `#0636A5` |
| `--border-glass` | `rgba(255,255,255,0.15)` |

---

## 3. Componentes Soft UI

### Cards

```css
/* Card base */
.card {
  background: var(--bg-surface);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-light);
  transition: all var(--transition);
}

/* Card con borde accent */
.card--accent {
  border-left: 4px solid var(--dosruedas-blue);
}

/* Card plana */
.card--flat {
  box-shadow: none;
  border: 1px solid var(--border-light);
}
```

### Botones

```css
/* Botón primario (Fondo Blanco → Texto Azul) */
.btn-white {
  background: var(--dosruedas-white);
  color: var(--dosruedas-blue);
  border: 2px solid var(--dosruedas-blue);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
}

/* Botón azul (Fondo Azul → Texto Blanco) */
.btn-blue {
  background: var(--dosruedas-blue);
  color: var(--dosruedas-white);
  border: 2px solid var(--dosruedas-blue);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
}

/* Botón amarillo (Fondo Amarillo → Texto Azul) */
.btn-yellow {
  background: var(--dosruedas-yellow);
  color: var(--dosruedas-blue);
  border: 2px solid var(--dosruedas-yellow);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-accent-md);
}
```

### Inputs

```css
/* Input estándar */
.input-pro {
  background: var(--dosruedas-white);
  border: 2px solid var(--gray-300);
  border-radius: var(--radius-md);
  color: var(--dosruedas-blue);
  transition: all var(--transition);
}

.input-pro:focus {
  border-color: var(--dosruedas-blue);
  box-shadow: 0 0 0 4px rgba(6,54,165,0.15), var(--shadow-sm);
}
```

### Badges

```css
/* Badge blanco */
.badge-white {
  background: var(--dosruedas-white);
  color: var(--dosruedas-blue);
  border: 1px solid var(--blue-200);
  border-radius: var(--radius-full);
}

/* Badge azul */
.badge-blue {
  background: var(--dosruedas-blue);
  color: var(--dosruedas-white);
  border-radius: var(--radius-full);
}

/* Badge amarillo */
.badge-yellow {
  background: var(--dosruedas-yellow);
  color: var(--dosruedas-blue);
  border-radius: var(--radius-full);
}
```

---

## 4. Componentes Glassmorphism

### Glass Cards

```css
/* Card glass */
.card-glass {
  background: rgba(6, 54, 165, 0.5);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  color: var(--dosruedas-white);
}

/* Card glass con glow */
.card-glass--glow {
  box-shadow: var(--glow-yellow);
}

/* Card glass con accent */
.card-glass--accent-bottom {
  border-bottom: 3px solid var(--dosruedas-yellow);
}
```

### Botones Glass

```css
/* Botón glass */
.btn-glass {
  background: rgba(6, 54, 165, 0.6);
  color: var(--dosruedas-white);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-md);
  backdrop-filter: blur(8px);
}

/* Botón outline blanco */
.btn-outline-white {
  background: transparent;
  color: var(--dosruedas-white);
  border: 2px solid var(--dosruedas-white);
  border-radius: var(--radius-md);
}
```

### Inputs Glass

```css
/* Input glass */
.input-glass {
  background: rgba(6, 54, 165, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-md);
  color: var(--dosruedas-white);
  backdrop-filter: blur(8px);
}

.input-glass:focus {
  border-color: var(--dosruedas-yellow);
  box-shadow: 0 0 0 4px rgba(255, 236, 1, 0.15);
}
```

---

## 5. Secciones

### Secciones con Gradiente

```css
/* Sección gradiente azul */
.section-gradient-blue {
  background: linear-gradient(135deg, #0636A5 0%, #1E3A8A 50%, #172554 100%);
  color: var(--dosruedas-white);
  position: relative;
  overflow: hidden;
}

/* Sección gradiente claro */
.section-gradient-light {
  background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #BFDBFE 100%);
  color: var(--dosruedas-blue);
}

/* Sección amarilla */
.section-yellow {
  background: var(--dosruedas-yellow);
  color: var(--dosruedas-blue);
}
```

### Decorativos

```css
/* Blob decorativo */
.section-gradient-blue::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(255,236,1,0.12) 0%, transparent 70%);
  pointer-events: none;
}
```

---

## 6. Patrones de Uso

### Hero Section (Glassmorphism)

```tsx
<section className="section-gradient-blue py-20 px-6">
  <div className="container mx-auto relative z-10">
    <p className="text-sm uppercase tracking-widest text-yellow-400 mb-4">
      Envíos en Mar del Plata
    </p>
    <h1 className="text-5xl md:text-7xl font-anton uppercase mb-6">
      Entregas Express
    </h1>
    <p className="text-xl text-blue-200 max-w-xl mb-8">
      Cotizá al instante y recibí en menos de 2 horas
    </p>
    <div className="flex gap-4 flex-wrap">
      <button className="btn-yellow">Cotizar Ahora</button>
      <button className="btn-outline-white">WhatsApp</button>
    </div>
  </div>
</section>
```

### Content Section (Soft UI)

```tsx
<section className="bg-[var(--bg-base)] py-16 px-6">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="card card--accent">
        <h3 className="text-xl font-bebas uppercase mb-3">Servicio Express</h3>
        <p className="text-gray-600">Entrega en menos de 2 horas</p>
        <button className="btn-blue mt-4">Cotizar</button>
      </div>
      {/* Más cards... */}
    </div>
  </div>
</section>
```

### Form Section (Soft UI)

```tsx
<section className="bg-white py-16 px-6">
  <div className="container mx-auto max-w-2xl">
    <div className="card">
      <h2 className="text-3xl font-anton uppercase mb-6">Contacto</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-blue-800 mb-2">
            Nombre
          </label>
          <input className="input-pro" placeholder="Tu nombre..." />
        </div>
        <button className="btn-blue w-full">Enviar</button>
      </div>
    </div>
  </div>
</section>
```

### CTA Section (Glassmorphism)

```tsx
<section className="section-gradient-blue py-16 px-6">
  <div className="container mx-auto text-center relative z-10">
    <div className="card-glass card-glass--glow max-w-2xl mx-auto p-8">
      <h2 className="text-3xl font-anton uppercase mb-4">
        ¿Necesitás enviar algo?
      </h2>
      <p className="text-blue-200 mb-6">
        Cotizá al instante por WhatsApp
      </p>
      <button className="btn-yellow text-lg px-8 py-4">
        WhatsApp
      </button>
    </div>
  </div>
</section>
```

---

## 7. Accesibilidad

### Requisitos WCAG

- **Contraste:** Mínimo 4.5:1 para texto normal, 3:1 para texto grande
- **Focus states:** Siempre visibles, con ring de 4px
- **Touch targets:** Mínimo 44x44px
- **Reduced motion:** Respetar `prefers-reduced-motion`

### Implementación

```css
@media (prefers-reduced-motion: reduce) {
  * {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}

@media (prefers-contrast: high) {
  :root {
    --shadow-sm: 0 1px 3px rgba(0,0,0,0.15);
    --shadow-md: 0 2px 6px rgba(0,0,0,0.2);
  }
}
```

---

## 8. Responsive Design

### Breakpoints

```css
/* Mobile first */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

### Adaptaciones

| Elemento | Mobile | Desktop |
|----------|--------|---------|
| Padding sección | 32px | 64px |
| Tamaño hero | 36px | 72px |
| Grid columns | 1 | 3-4 |
| Card padding | 16px | 24px |

---

## 9. Performance

### Optimizaciones

- **CSS Variables:** Para temas dinámicos
- **Transiciones:** Solo `transform` y `opacity`
- **Blur:** Usar con moderación en mobile
- **Shadows:** Preferir sombras simples en mobile

### Métricas

- **FCP:** < 1.5s
- **LCP:** < 2.5s
- **CLS:** < 0.1
- **INP:** < 200ms

---

## 10. Archivos del Sistema

### Estructura

```
src/styles/
├── soft-ui.css          # Variables y componentes Soft UI
├── glassmorphism.css    # Variables y componentes Glassmorphism
└── design-variants.css  # Variantes adicionales

brand/
├── BRAND-IDENTITY.md    # Identidad de marca
├── VISUAL-IDENTITY.md   # Identidad visual
├── DESIGN-SYSTEM.md     # Este documento
├── VOICE-TONE.md        # Voz y tono
└── USAGE-GUIDE.md       # Guía de uso
```

### Importación

```css
/* globals.css */
@import './styles/soft-ui.css';
@import './styles/glassmorphism.css';
```

---

*Sistema de Diseño - Envios DosRuedas v2.0*
*Estilos: Soft UI Evolution + Glassmorphism Premium*
