# Estilos Alternativos - DosRuedas

## Colores Base (Inalterables)
- **Egyptian Blue**: `#0636A5` (Primary)
- **Sunbeam Yellow**: `#FFEC01` (Secondary/Accent)
- **White**: `#FFFFFF` (Background)

## Tipografía (Mantiene)
- **Anton** - Títulos display
- **Bebas Neue** - Subtítulos y botones
- **Inter** - Cuerpo y labels

---

## OPCIÓN A: Soft UI Evolution

### Filosofía
Sombras suaves multicapa, bordes redondeados moderados, aspecto moderno y profesional. Evita la dureza del neo-brutalismo manteniendo personalidad y jerarquía visual clara.

### Características Clave
- **Border-radius**: 12-16px (moderado, no extremo)
- **Sombras**: Suaves, multicapa (2-3 capas)
- **Bordes**: Finos (1px) o ausentes
- **Transiciones**: 200-300ms suaves
- **Profundidad**: Sutil, mediante sombras y elevación

### Paleta de Aplicación

```css
:root[data-style="soft-ui"] {
  /* Backgrounds */
  --bg-base: #F8FAFE;
  --bg-surface: #FFFFFF;
  --bg-elevated: #FFFFFF;
  --bg-subtle: #EFF6FF;
  
  /* Text */
  --text-primary: #0F172A;
  --text-secondary: #334155;
  --text-muted: #64748B;
  --text-accent: #0636A5;
  
  /* Borders */
  --border-light: #E2E8F0;
  --border-medium: #CBD5E1;
  --border-focus: #0636A5;
  
  /* Shadows - Soft, Multi-layer */
  --shadow-xs: 0 1px 2px rgba(6, 54, 165, 0.04);
  --shadow-sm: 0 2px 4px rgba(6, 54, 165, 0.06);
  --shadow-md: 0 4px 6px rgba(6, 54, 165, 0.08), 0 2px 4px rgba(6, 54, 165, 0.04);
  --shadow-lg: 0 10px 15px rgba(6, 54, 165, 0.1), 0 4px 6px rgba(6, 54, 165, 0.05);
  --shadow-xl: 0 20px 25px rgba(6, 54, 165, 0.12), 0 10px 10px rgba(6, 54, 165, 0.06);
  
  /* Accent Shadows */
  --shadow-accent-sm: 0 2px 4px rgba(255, 236, 1, 0.2);
  --shadow-accent-md: 0 4px 8px rgba(255, 236, 1, 0.25);
  --shadow-accent-lg: 0 8px 16px rgba(255, 236, 1, 0.3);
  
  /* Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;
  
  /* Transitions */
  --transition-fast: 150ms ease-out;
  --transition-normal: 200ms ease-out;
  --transition-slow: 300ms ease-out;
}
```

### Componentes Ejemplo

**Card Soft UI:**
```css
.card-soft {
  background: var(--bg-surface);
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-light);
  transition: all var(--transition-normal);
}

.card-soft:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

**Botón Soft UI:**
```css
.btn-soft {
  background: var(--dosruedas-blue);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  padding: 12px 24px;
  font-family: 'Bebas Neue', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
}

.btn-soft:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}

.btn-soft:active {
  box-shadow: var(--shadow-xs);
  transform: translateY(0);
}

.btn-soft--accent {
  background: var(--dosruedas-yellow);
  color: var(--gray-900);
  box-shadow: var(--shadow-accent-sm);
}

.btn-soft--accent:hover {
  box-shadow: var(--shadow-accent-md);
}
```

**Input Soft UI:**
```css
.input-soft {
  background: var(--bg-surface);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  padding: 12px 16px;
  font-family: 'Inter', sans-serif;
  transition: all var(--transition-normal);
}

.input-soft:focus {
  outline: none;
  border-color: var(--border-focus);
  box-shadow: 0 0 0 3px rgba(6, 54, 165, 0.1);
}
```

### Uso Ideal
- Dashboards profesionales
- Aplicaciones SaaS
- Interfaces de administración
- Landing pages corporativas
- Formularios de contacto

---

## OPCIÓN B: Glassmorphism Premium

### Filosofía
Efecto cristal esmerilado, capas translúcidas con blur, gradientes sutiles de fondo. Aspecto sofisticado, moderno y high-end. Ideal para destacar secciones especiales.

### Características Clave
- **Backdrop-filter**: blur(12-20px)
- **Backgrounds**: Translúcidos (rgba 8-15% opacity)
- **Bordes**: 1px sólido rgba(255,255,255,0.2)
- **Gradientes**: Fondos vibrantes con blobs de color
- **Profundidad**: Mediante capas y transparencias

### Paleta de Aplicación

```css
:root[data-style="glassmorphism"] {
  /* Backgrounds - Gradient Base */
  --bg-gradient-start: #0636A5;
  --bg-gradient-mid: #1E3A8A;
  --bg-gradient-end: #172554;
  
  /* Glass Surfaces */
  --glass-bg: rgba(255, 255, 255, 0.08);
  --glass-bg-hover: rgba(255, 255, 255, 0.12);
  --glass-bg-active: rgba(255, 255, 255, 0.16);
  --glass-border: rgba(255, 255, 255, 0.15);
  --glass-border-hover: rgba(255, 255, 255, 0.25);
  
  /* Light Glass (para secciones claras) */
  --glass-light-bg: rgba(6, 54, 165, 0.04);
  --glass-light-border: rgba(6, 54, 165, 0.1);
  
  /* Text */
  --text-on-glass: #FFFFFF;
  --text-on-glass-muted: rgba(255, 255, 255, 0.7);
  --text-on-light: #0636A5;
  --text-on-light-muted: #64748B;
  
  /* Accent Effects */
  --accent-glow: 0 0 20px rgba(255, 236, 1, 0.3);
  --accent-glow-lg: 0 0 40px rgba(255, 236, 1, 0.4);
  
  /* Decorative Blobs */
  --blob-1: rgba(255, 236, 1, 0.15);
  --blob-2: rgba(6, 54, 165, 0.2);
  --blob-3: rgba(255, 255, 255, 0.1);
  
  /* Blur */
  --blur-sm: blur(8px);
  --blur-md: blur(12px);
  --blur-lg: blur(20px);
  --blur-xl: blur(40px);
  
  /* Radius */
  --radius-sm: 12px;
  --radius-md: 16px;
  --radius-lg: 20px;
  --radius-xl: 24px;
  
  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-normal: 250ms ease;
  --transition-slow: 400ms ease;
}
```

### Componentes Ejemplo

**Glass Card:**
```css
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: var(--blur-md);
  -webkit-backdrop-filter: var(--blur-md);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  padding: 24px;
  transition: all var(--transition-normal);
}

.glass-card:hover {
  background: var(--glass-bg-hover);
  border-color: var(--glass-border-hover);
}
```

**Glass Button:**
```css
.btn-glass {
  background: var(--dosruedas-yellow);
  color: #0636A5;
  border: none;
  border-radius: var(--radius-md);
  padding: 14px 28px;
  font-family: 'Bebas Neue', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: var(--accent-glow);
  transition: all var(--transition-normal);
}

.btn-glass:hover {
  box-shadow: var(--accent-glow-lg);
  transform: scale(1.02);
}

.btn-glass--outline {
  background: transparent;
  color: white;
  border: 1px solid var(--glass-border);
  box-shadow: none;
}

.btn-glass--outline:hover {
  background: var(--glass-bg);
  border-color: var(--glass-border-hover);
}
```

**Gradient Background with Blobs:**
```css
.glass-section {
  position: relative;
  background: linear-gradient(135deg, 
    var(--bg-gradient-start) 0%, 
    var(--bg-gradient-mid) 50%, 
    var(--bg-gradient-end) 100%
  );
  min-height: 100vh;
  overflow: hidden;
}

.glass-section::before,
.glass-section::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  filter: var(--blur-xl);
}

.glass-section::before {
  width: 400px;
  height: 400px;
  background: var(--blob-1);
  top: -100px;
  right: -100px;
}

.glass-section::after {
  width: 300px;
  height: 300px;
  background: var(--blob-2);
  bottom: -50px;
  left: -50px;
}
```

**Glass Input:**
```css
.input-glass {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  padding: 12px 16px;
  color: white;
  font-family: 'Inter', sans-serif;
  transition: all var(--transition-normal);
}

.input-glass::placeholder {
  color: var(--text-on-glass-muted);
}

.input-glass:focus {
  outline: none;
  border-color: rgba(255, 236, 1, 0.5);
  box-shadow: 0 0 0 3px rgba(255, 236, 1, 0.1);
}
```

### Uso Ideal
- Secciones hero destacadas
- Modales y overlays
- Menús de navegación
- CTAs nocturnos
- Páginas de servicio premium
- Landing de alto impacto

---

## Comparativa Rápida

| Característica | Soft UI Evolution | Glassmorphism Premium |
|----------------|-------------------|----------------------|
| **Estilo** | Moderno, profesional | Sofisticado, high-end |
| **Sombras** | Suaves, multicapa | Glow effects |
| **Bordes** | 1px finos o ausentes | 1px translúcidos |
| **Radius** | 12-16px | 16-24px |
| **Fondos** | Sólidos claros | Gradientes + blur |
| **Transparencia** | No | Sí (8-15%) |
| **Mejor para** | Dashboards, SaaS | Héroes, CTAs premium |
| **Complejidad** | Media | Media-Alta |
| **Performance** | Excelente | Buena (blur cost) |
| **WCAG** | AAA | AA (verificar contraste) |

---

## Implementación Mixta

Puedes combinar ambos estilos en diferentes secciones:

```html
<!-- Hero con Glassmorphism -->
<section data-style="glassmorphism" class="glass-section">
  <div class="glass-card">
    <h1>Envíos Express</h1>
    <button class="btn-glass">Cotizar Ahora</button>
  </div>
</section>

<!-- Contenido con Soft UI -->
<section data-style="soft-ui" class="p-8">
  <div class="card-soft">
    <h2>Servicios</h2>
    <button class="btn-soft">Ver Más</button>
  </div>
</section>
```

---

## Accesibilidad

### Soft UI Evolution
- ✅ Contraste texto: 4.5:1+ garantizado
- ✅ Focus states visibles
- ✅ Respeta prefers-reduced-motion
- ✅ Touch targets 44x44pt+

### Glassmorphism Premium
- ⚠️ Verificar contraste sobre fondos translúcidos
- ✅ Usar text-shadow si es necesario
- ✅ Alternativas sólidas para baja visión
- ✅ Focus rings con glow para visibilidad

---

## Archivos CSS

| Estilo | Archivo |
|--------|---------|
| Soft UI | `src/styles/soft-ui.css` |
| Glassmorphism | `src/styles/glassmorphism.css` |

---

*Documentación generada para Envios DosRuedas*
