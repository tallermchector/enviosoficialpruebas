# Variantes Profesionales - Paleta DosRuedas

## Colores Base (Inalterables)
- **Egyptian Blue**: `#0636A5` (Primary)
- **Sunbeam Yellow**: `#FFEC01` (Secondary/Accent)
- **White**: `#FFFFFF` (Background)

---

## Variante 1: Neo-Brutalista Corporativo
**Ideal para**: Presentaciones ejecutivas, propuestas comerciales, documentos formales

### Paleta de Aplicación
```
--bg-primary: #FFFFFF
--bg-secondary: #F8FAFE (azul muy claro)
--bg-card: #FFFFFF
--text-primary: #0636A5
--text-secondary: #1E3A8A (azul más suave)
--text-muted: #64748B (gris profesional)
--border-primary: #0636A5
--border-secondary: #BFDBFE (azul claro)
--accent-subtle: rgba(6, 54, 165, 0.08) (fondo sutil)
--shadow: 2px 2px 0px #0636A5 (sombra reducida)
```

### Tipografía
- **Títulos**: Anton, uppercase, letterSpacing: 2px
- **Subtítulos**: Bebas Neue, uppercase, letterSpacing: 1px
- **Cuerpo**: Inter, weight 400-500
- **Etiquetas**: Inter, weight 600, uppercase, letterSpacing: 1px

### Efectos
- Bordes: 2px sólidos (en lugar de 4px)
- Sombras: 2px offset (más sutil)
- Border-radius: 0 (mantiene esencia brutalista)
- Transiciones: 200ms ease-out

---

## Variante 2: Neo-Brutalista Industrial
**Ideal para**: Landing pages, secciones hero, llamadas a la acción fuertes

### Paleta de Aplicación
```
--bg-primary: #FFFFFF
--bg-dark: #0636A5 (secciones alternadas)
--bg-card: #FFFFFF
--bg-card-dark: #1E3A8A
--text-on-light: #0636A5
--text-on-dark: #FFFFFF
--accent-highlight: #FFEC01
--border-heavy: #0636A5
--shadow-primary: 4px 4px 0px #0636A5
--shadow-accent: 4px 4px 0px #FFEC01
```

### Tipografía
- **Display**: Anton, 48-72px, uppercase
- **Headlines**: Bebas Neue, 32-40px
- **Body**: Inter, 16-18px, weight 400
- **Buttons**: Bebas Neue, 18-20px, uppercase

### Efectos
- Bordes: 4px sólidos
- Sombras: 4px-8px offset, sin blur
- Hover: translate(-2px, -2px) + sombra expandida
- Active: translate(2px, 2px) + sombra reducida

---

## Variante 3: Neo-Brutalista Ejecutivo
**Ideal para**: Dashboards, interfaces de administración, aplicaciones de negocio

### Paleta de Aplicación
```
--bg-primary: #F8FAFE
--bg-surface: #FFFFFF
--bg-elevated: #FFFFFF
--text-primary: #0F172A (azul oscuro profesional)
--text-secondary: #334155
--text-muted: #64748B
--border-light: #E2E8F0
--border-medium: #BFDBFE
--border-strong: #0636A5
--accent-primary: #0636A5
--accent-secondary: #FFEC01
--interactive: rgba(6, 54, 165, 0.1)
```

### Tipografía
- **Títulos**: Anton, weight 400
- **Subtítulos**: Bebas Neue, weight 400
- **Cuerpo**: Inter, weight 400, lineHeight 1.6
- **Labels**: Inter, weight 500, size 12-14px

### Efectos
- Bordes: 1px sólidos (más refinado)
- Sombras: 0 1px 3px rgba(6, 54, 165, 0.1)
- Cards: border-left 4px accent
- Hover: background subtle shift

---

## Variante 4: Neo-Brutalista Tech
**Ideal para**: Calculadoras, herramientas interactivas, formularios

### Paleta de Aplicación
```
--bg-canvas: #FFFFFF
--bg-input: #F8FAFE
--bg-focus: #EFF6FF
--text-primary: #0636A5
--text-input: #1E293B
--text-placeholder: #94A3B8
--border-default: #CBD5E1
--border-focus: #0636A5
--ring-focus: rgba(6, 54, 165, 0.2)
--accent-interactive: #FFEC01
--success: #059669
--warning: #D97706
--error: #DC2626
```

### Tipografía
- **Títulos**: Anton, uppercase
- **Labels**: Inter, weight 500, size 14px
- **Inputs**: Inter, weight 400, size 16px
- **Hints**: Inter, weight 400, size 14px, muted

### Efectos
- Inputs: border 2px, focus ring 4px
- Buttons: translate press effect
- Toggle: background-color transition 150ms
- Validation: border-color change + icon

---

## Variante 5: Neo-Brutalista Nocturno
**Ideal para**: Modo oscuro, secciones destacadas,CTAs nocturnos

### Paleta de Aplicación
```
--bg-dark: #0636A5
--bg-darker: #1E3A8A
--bg-card: rgba(255, 255, 255, 0.1)
--text-primary: #FFFFFF
--text-secondary: #BFDBFE
--text-accent: #FFEC01
--border-light: rgba(255, 255, 255, 0.2)
--border-accent: #FFEC01
--glass: backdrop-blur(12px)
--shadow-glow: 0 0 20px rgba(255, 236, 1, 0.3)
```

### Tipografía
- **Títulos**: Anton, uppercase, text-shadow sutil
- **Subtítulos**: Bebas Neue
- **Cuerpo**: Inter, weight 400, color #E2E8F0
- **Acentos**: Bebas Neue, color #FFEC01

### Efectos
- Glassmorphism: bg-white/10, backdrop-blur
- Borders: 1px solid rgba(255,255,255,0.2)
- Glow effects en CTAs
- Transiciones: 300ms ease

---

## Guía de Uso por Contexto

| Contexto | Variante Recomendada | Razón |
|----------|---------------------|-------|
| Landing Page Principal | Industrial | Máximo impacto visual |
| Formulario de Contacto | Tech | Claridad en interacciones |
| Dashboard Admin | Ejecutivo | Profesionalismo y claridad |
| Propuesta Comercial | Corporativo | Formalidad y elegancia |
| Sección Nocturna | Nocturno | Contraste y atmósfera |
| Calculadora de Precios | Tech | Usabilidad y feedback |
| Página Nosotros | Industrial | Storytelling impactante |
| Términos y Condiciones | Corporativo | Legibilidad y formalidad |

---

## Implementación CSS Variables

```css
:root {
  /* Base Colors (Shared) */
  --dosruedas-blue: #0636A5;
  --dosruedas-yellow: #FFEC01;
  --dosruedas-white: #FFFFFF;
  
  /* Variante Corporativo */
  --corp-bg: #FFFFFF;
  --corp-text: #0636A5;
  --corp-muted: #64748B;
  --corp-border: #BFDBFE;
  
  /* Variante Industrial */
  --industrial-shadow: 4px 4px 0px #0636A5;
  --industrial-border: 4px solid #0636A5;
  
  /* Variante Ejecutivo */
  --exec-bg: #F8FAFE;
  --exec-surface: #FFFFFF;
  --exec-border: #E2E8F0;
  
  /* Variante Tech */
  --tech-focus-ring: rgba(6, 54, 165, 0.2);
  --tech-input-bg: #F8FAFE;
  
  /* Variante Nocturno */
  --night-bg: #0636A5;
  --night-glass: rgba(255, 255, 255, 0.1);
  --night-glow: 0 0 20px rgba(255, 236, 1, 0.3);
}
```

---

## Componentes de Ejemplo

### Botón Corporativo
```css
.btn-corporate {
  background: var(--dosruedas-blue);
  color: var(--dosruedas-white);
  border: 2px solid var(--dosruedas-blue);
  padding: 12px 24px;
  font-family: 'Bebas Neue', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 200ms ease-out;
}

.btn-corporate:hover {
  background: transparent;
  color: var(--dosruedas-blue);
  transform: translate(-1px, -1px);
  box-shadow: 2px 2px 0px var(--dosruedas-blue);
}
```

### Card Industrial
```css
.card-industrial {
  background: var(--dosruedas-white);
  border: 4px solid var(--dosruedas-blue);
  padding: 24px;
  position: relative;
}

.card-industrial::after {
  content: '';
  position: absolute;
  top: 4px;
  left: 4px;
  width: 100%;
  height: 100%;
  background: var(--dosruedas-blue);
  z-index: -1;
}
```

### Input Tech
```css
.input-tech {
  background: var(--tech-input-bg);
  border: 2px solid #CBD5E1;
  padding: 12px 16px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  transition: all 150ms ease;
}

.input-tech:focus {
  outline: none;
  border-color: var(--dosruedas-blue);
  box-shadow: 0 0 0 4px var(--tech-focus-ring);
  background: var(--dosruedas-white);
}
```

---

## Principios de Consistencia

1. **Nunca mezclar variantes** en la misma sección
2. **Mantener sombras** consistentes dentro de cada variante
3. **Respetar la tipografía** establecida para cada contexto
4. **Preservar border-radius: 0** en todos los casos
5. **Usar transiciones** coherentes (150-300ms)
6. **Mantener contraste** WCAG AA mínimo (4.5:1)
7. **Conservar la identidad** neo-brutalista en todas las variantes

---

## Referencia Rápida

| Elemento | Corporativo | Industrial | Ejecutivo | Tech | Nocturno |
|----------|-------------|------------|-----------|------|----------|
| Border-width | 2px | 4px | 1px | 2px | 1px |
| Shadow | 2px | 4-8px | Suave | Ring | Glow |
| Background | #FFF | #FFF/#0636A5 | #F8FAFE | #FFF | #0636A5 |
| Text | #0636A5 | #0636A5/#FFF | #0F172A | #0636A5 | #FFF |
| Accent | #FFEC01 | #FFEC01 | #FFEC01 | #FFEC01 | #FFEC01 |
| Radius | 0 | 0 | 0 | 0 | 0 |
| Transición | 200ms | 150ms | 200ms | 150ms | 300ms |

---

*Documento generado para Envios DosRuedas - Paleta base inalterable*
