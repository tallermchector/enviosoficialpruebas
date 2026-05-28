---
version: "3.0"
theme: "Corporate / Modern Futuristic"
targetPlatform: "Next.js + Tailwind CSS"
tokens:
  colors:
    background:
      light: "hsl(0 0% 100%)"
      dark: "hsl(222 84% 4.9%)"
      hexLight: "#FFFFFF"
      hexDark: "#050810"
    foreground:
      light: "hsl(222.2 84% 4.9%)"
      dark: "hsl(210 40% 98%)"
      hexLight: "#020617"
      hexDark: "#F8FAFC"
    primary:
      light: "hsl(221.2 83.2% 53.3%)"
      dark: "hsl(217.2 91.2% 59.8%)"
      hexLight: "#2563EB"
      hexDark: "#3B82F6"
    secondary:
      light: "hsl(45 93% 47%)"
      dark: "hsl(45 93% 47%)"
      hexLight: "#E89A17"
      hexDark: "#EAB308"
    accent:
      light: "hsl(210 40% 96.1%)"
      dark: "hsl(217.2 32.6% 17.5%)"
      hexLight: "#60A5FA"
      hexDark: "#1E293B"
  typography:
    display: "Orbitron, monospace"
    body: "Roboto, sans-serif"
    weights:
      regular: 400
      medium: 500
      semibold: 600
      extrabold: 800
  effects:
    glassmorphism:
      backdropBlur: "blur(12px)"
      backgroundColor: "rgba(255, 255, 255, 0.1)"
      backgroundColorDark: "rgba(2, 6, 23, 0.4)"
      borderColor: "rgba(255, 255, 255, 0.2)"
      borderColorDark: "rgba(30, 41, 59, 0.5)"
    gradients:
      heroBg: "linear-gradient(to bottom, #050810, #0a0a0a, #121212)"
      primaryButton: "linear-gradient(to right, #2563EB, #3B82F6, #2563EB)"
      secondaryCTA: "linear-gradient(to right, #EAB308, #ca8a04)"
---

# Design System - Envios DosRuedas (Premium Evolution)

Este documento define el sistema de diseño evolucionado para **Envios DosRuedas**, una plataforma de logística y mensajería de última milla. Está estructurado estrictamente en un formato de dos capas (metadatos YAML y especificaciones en Markdown) para ser interpretado nativamente por Google Stitch AI y desarrolladores front-end.

## 1. Misión y Visión de Marca

*   **Eslogan**: "Tu Solución Confiable".
*   **Pilares**: Rapidez, Seguridad, Modernidad y Confianza.
*   **Voz**: Profesional, tecnológica, eficiente y cercana (empleando el voseo argentino: *hablá*, *cotizá*, *tenés*).

## 2. Principios de Diseño Premium

1.  **Eficiencia Visual y Carga Cognitiva Reducida**: El usuario debe encontrar lo que busca rápidamente (seguimiento, cotización, gestión) a través de un contraste de color agresivo pero equilibrado.
2.  **Confianza a través de la Modernidad (Glassmorphism)**: Uso de gradientes sutiles y paneles translúcidos (efectos de cristal) sobre fondos oscuros (ej. `#050810`) para transmitir una imagen tecnológica de vanguardia de logística 24/7.
3.  **Consistencia Estricta**: Uso riguroso de los tokens definidos en el bloque YAML superior y mapeados en `tailwind.config.ts`.
4.  **Mobile-First Innegociable**: Todas las interfaces, desde la landing page hasta el portal de repartidores, deben ser concebidas primero para pantallas táctiles de alta movilidad.

## 3. Guía de Interacción y Estados de Componentes

Para mantener la calidad "Premium", las interacciones del usuario deben ser fluidas y tangibles.

### 3.1 Estados Interactivos Base

*   **Hover**:
    *   *Comportamiento*: Ligero aumento de escala y emisión de brillo.
    *   *Clases*: `hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:bg-primary/90` (para azul primario) o `hover:bg-secondary/90` (para oro secundario).
*   **Active (Click/Tap)**:
    *   *Comportamiento*: Reducción de escala para simular presión física.
    *   *Clases*: `active:scale-[0.98] active:brightness-90`.
*   **Disabled**:
    *   *Comportamiento*: Reducción de opacidad y bloqueo de eventos.
    *   *Clases*: `opacity-50 cursor-not-allowed pointer-events-none`.
*   **Focus**:
    *   *Comportamiento*: Anillo de enfoque claro para accesibilidad.
    *   *Clases*: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background`.

### 3.2 Aplicación por Contexto

*   **Calculadora y Formularios (`/cotizar`)**:
    *   *Inputs*: Fondo `bg-slate-900/50` con borde `border-slate-800`. En focus, el borde cambia a `border-primary` con `ring-primary`.
    *   *Botones de Cotizar*: Usar el estilo "Premium Gradient Button" (definido abajo) para máxima conversión.
*   **Tracking (`/seguimiento`)**:
    *   *Línea de Tiempo*: Marcadores de estado completados en `bg-primary`, en curso en `bg-secondary` (parpadeo `animate-pulse`), pendientes en `bg-slate-800`.
    *   *Mapa*: Paneles superpuestos flotantes usando Glassmorphism (ver sección 4).
*   **Dashboard Repartidor (`/repartidor`)**:
    *   *Densidad*: Botones ultra-grandes (`min-h-[60px]`) para pulsación rápida en movimiento y alto contraste (blanco sobre negro) para visibilidad bajo la luz del sol.

## 4. Patrones de UI y Movimiento

### 4.1 Tratamientos Visuales Premium

*   **Glassmorphism (Frosted Glass)**:
    *   *Implementación*: `bg-white/5 backdrop-blur-md border border-white/10 dark:bg-slate-950/40 dark:border-slate-800/50 rounded-xl`.
    *   *Uso*: Tarjetas flotantes sobre mapas, resúmenes de pago, modales de login.
*   **Zebra Striping y Profundidad de Sección**:
    *   Alternar fondos de sección entre `bg-[#050810]` y `bg-[#0a0f1c]` para demarcar diferentes áreas de información sin usar líneas duras.
*   **Botones Premium Gradientes (Primary CTA)**:
    *   *Clases*: `bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-[length:200%_auto] text-white hover:bg-[right_center] transition-all duration-500 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] border-none rounded-md px-8 py-3 font-semibold tracking-wide`.

### 4.2 Tipografía Avanzada

*   **Títulos Principales (Orbitron)**: Usar siempre con Tracking ajustado `tracking-tighter` para aspecto técnico y en Bold (`font-bold` o `font-extrabold`).
*   **Cuerpos de Texto (Roboto)**: Usar text-slate-300 para fondos oscuros para reducir la fatiga visual frente al blanco puro (`text-white`).

### 4.3 Casos Especiales de Marca

*   **Sección Envíos Flex / Mercado Libre**:
    *   *Fondo*: Estrictamente `#FFF159` (Yellow Mercado Libre).
    *   *Texto*: `#333333` o `text-slate-900`.
    *   *Acentos*: Azul Institucional `#2D3277`.
*   **Logística 3PL (Plan Emprendedores)**:
    *   *Atmósfera*: Uso profundo de azules oscuros, modo nocturno forzado y Glassmorphism pesado (`bg-white/5 border-white/10 backdrop-blur-md`).

## 5. Reglas de Inclusión en Next.js

1.  **Framer Motion**: Si un componente usa animaciones de entrada (`initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}`), DEBE incluir la directiva `'use client';` en la primera línea.
2.  **React Leaflet (Mapas)**: Cualquier componente que renderice mapas debe ser importado dinámicamente usando `next/dynamic(..., { ssr: false })` en las páginas principales para evitar fallas con el objeto `window`.
3.  **Manejo de Errores de BD**: Toda llamada a Prisma en Server Components (`/app/.../page.tsx` o `actions.ts`) debe estar encapsulada en bloques `try...catch` para proveer un *fallback UI* si la base de datos está caída o pausada, asegurando que el diseño de la interfaz siempre pueda ser explorado.
