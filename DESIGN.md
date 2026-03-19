# Design System - Envios DosRuedas

Este documento define el sistema de diseño para **Envios DosRuedas**, una plataforma de logística y mensajería de última milla. Está diseñado para ser interpretado por agentes de IA y desarrolladores para mantener la consistencia visual y funcional en todo el proyecto.

## 1. Misión y Visión de Marca

*   **Eslogan**: "Tu Solución Confiable".
*   **Pilares**: Rapidez, Seguridad, Modernidad y Confianza.
*   **Voz**: Profesional, tecnológica, eficiente y cercana.

## 2. Principios de Diseño

1.  **Eficiencia Visual**: El usuario debe encontrar lo que busca rápidamente (seguimiento, cotización, gestión).
2.  **Confianza a través de la Modernidad**: Uso de gradientes sutiles y efectos de cristal (glassmorphism) para transmitir una imagen tecnológica y de vanguardia.
3.  **Accesibilidad**: Alto contraste en elementos críticos y legibilidad clara.
4.  **Consistencia**: Uso riguroso de los tokens definidos en Tailwind.

## 3. Identidad Visual

### 3.1 Paleta de Colores (Tokens HSL)

| Token | HSL (Light Mode) | HSL (Dark Mode) | Uso |
| :--- | :--- | :--- | :--- |
| `primary` | `221.2 83.2% 53.3%` | `217.2 91.2% 59.8%` | Azul principal. Botones primarios, acentos. |
| `secondary` | `45 93% 47%` | `45 93% 47%` | Amarillo/Oro. Llamadas a la acción (CTA), advertencias. |
| `background` | `0 0% 100%` | `222 84% 4.9%` | Fondo principal de la aplicación. |
| `foreground` | `222.2 84% 4.9%` | `210 40% 98%` | Color de texto principal. |
| `accent` | `210 40% 96.1%` | `217.2 32.6% 17.5%` | Fondos de sección suaves. |
| `destructive` | `0 84.2% 60.2%` | `0 62.8% 30.6%` | Errores y acciones peligrosas. |

### 3.2 Tipografía

*   **Display (Headers)**: `Orbitron` (Variable: `--font-orbitron`).
    *   Uso: Títulos de secciones, logotipos de texto, encabezados hero. Transmite un aire futurista y tecnológico.
*   **Sans (Body)**: `Roboto` (Variable: `--font-roboto`).
    *   Uso: Párrafos, formularios, etiquetas de botones, tablas. Transmite claridad y profesionalismo.

### 3.3 Elevación y Formas

*   **Border Radius**: Estándar de `0.75rem` (`var(--radius)`).
*   **Sombras**: `shadow-sm` para tarjetas, `shadow-2xl` para elementos destacados como el Hero.

## 4. Diseño de Interfaz y Layout

*   **Contenedor**: Máximo de `1400px` (`2xl` en Tailwind).
*   **Espaciado**: Padding estándar de sección `2rem` móvil / `4rem` desktop. Gap estándar entre elementos de tarjeta: `1.5rem`.
*   **Layout Responsivo**: Mobile-first siempre. Uso intensivo de Flexbox y CSS Grid.

## 5. Patrones de UI y Movimiento

### 5.1 Tratamientos Visuales

*   **Glassmorphism**: Uso de `backdrop-blur-sm` combinado con bordes semi-transparentes (`border-white/20`) para paneles flotantes sobre fondos de color.
*   **Gradientes**:
    *   *Fondo Hero*: `from-slate-900 via-blue-900 to-slate-800`.
    *   *Botón Primario (Yellow)*: `from-yellow-500 to-yellow-600`.

### 5.2 Animaciones (Tailwind Config)

*   `animate-float`: Movimiento vertical suave (6s).
*   `animate-spin-slow`: Rotación lenta para elementos de fondo (8s).
*   `animate-h-scroll`: Scroll horizontal infinito para carruseles de logotipos/redes (45s).

### 5.3 Framer Motion

*   **Entradas**: `initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}`.
*   **Hovers**: `whileHover={{ scale: 1.05 }}` para tarjetas y botones principales.

## 6. Guía de Componentes

### 6.1 Base (shadcn/ui)
*   **Botones**: Usar variantes `default` (azul) para acciones comunes y botones amarillos personalizados para CTAs críticos.
*   **Tarjetas**: `Card` con bordes suaves y sombra mínima para datos operativos; efectos de cristal para landing pages.

### 6.2 Componentes Personalizados
*   **Calculadora de Envíos**: Interactiva, con mapas integrados y feedbacks inmediatos de precio.
*   **Dashboard Repartidor**: Enfocado en la legibilidad bajo la luz del sol, botones grandes y escáner de fácil acceso.

## 7. Do's and Don'ts (Reglas para IA)

### ✅ Do's
*   Usa siempre `cn()` para concatenar clases de Tailwind.
*   Asegura que el texto sobre fondos de color tenga contraste suficiente.
*   Mantén la coherencia entre los portales (Admin, Cliente, Repartidor) usando los mismos tokens de color.
*   Implementa `dark mode` explícitamente en componentes personalizados.

### ❌ Don'ts
*   No uses colores "hardcodeados" (ej. `bg-[#123456]`). Usa siempre variables de CSS o clases de Tailwind (`bg-primary`).
*   No mezcles fuentes. Si no es un header, usa Roboto.
*   No elimines el `focus-visible` de los elementos interactivos.
*   Evita animaciones excesivas que distraigan de la tarea principal de logística.
