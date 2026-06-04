# Sistema de Diseño - Envíos DosRuedas (Stitch Design System)

Este documento define el sistema de diseño para **Envíos DosRuedas**, una plataforma de logística y mensajería de última milla. Está optimizado para que desarrolladores y agentes de IA mantengan una visual y funcionalidad coherente y premium en todo el proyecto.

---

## 1. Misión, Visión y Personalidad de Marca

*   **Eslogan**: "Tu Solución Confiable".
*   **Pilares**: Rapidez, Seguridad, Modernidad y Confianza.
*   **Voz**: Profesional, tecnológica, eficiente y de "urgencia controlada".
*   **Personalidad**: Autoritaria y enérgica. Se aleja de los grises planos corporativos tradicionales hacia una estética saturada y de alto contraste inspirada en la señalética industrial y los tableros de alto rendimiento.

---

## 2. Principios de Diseño

1.  **Eficiencia Visual y Densidad**: El usuario debe captar la información clave (rutas, estados, cotizaciones) de un solo vistazo. Se prioriza la densidad de datos sobre los espacios excesivamente abiertos.
2.  **Modernidad de Alto Contraste**: Uso de fondos oscuros profundos y envolventes combinados con acentos amarillos de alta visibilidad para que las alertas y CTAs críticos sean imposibles de pasar por alto.
3.  **Profundidad por Capas Tonales**: En lugar de sombras tradicionales (difíciles de ver sobre fondos oscuros), la jerarquía se establece mediante cambios de color de fondo y bordes nítidos.
4.  **Precisión Geométrica**: Diseños estructurados y alineados a grilla que transmiten precisión milimétrica en la logística.

---

## 3. Identidad Visual

### 3.1 Paleta de Colores Semántica

La paleta está restringida intencionalmente para maximizar el contraste funcional y reducir la fatiga visual durante turnos de trabajo prolongados:

| Rol Semántico | Color Hex | Clase Tailwind de Referencia | Uso |
| :--- | :--- | :--- | :--- |
| **Amarillo de Acción (Primary)** | `#FFE600` / `#FDE400` | `text-secondary` / `text-yellow-400` | Títulos principales, botones de llamada a la acción (CTA) y estados de alerta crítica. |
| **Azul Náutico (Secondary/Surface)** | `#00246B` / `#0A0D16` | `bg-slate-900` / `bg-[#0a0d16]` | Color base para tarjetas, contenedores de interfaz y secciones destacadas. |
| **Azul Cobalto (Tertiary/Accent)** | `#0047AB` / `#001A4D` | `bg-primary` / `text-blue-400` | Estados interactivos (hover), barras de progreso, acentos visuales y bordes secundarios. |
| **Blanco de Alta Visibilidad (Neutral)** | `#FFFFFF` | `text-white` | Texto de cuerpo principal, etiquetas legibles y detalles de íconos. |
| **Fondo Base (Floor/Level 0)** | `#121414` / `#030710` | `bg-background` / `bg-[#030710]` | El fondo más profundo de la aplicación en modo oscuro. |

### 3.2 Tipografía

El sistema emplea una estrategia de doble fuente para equilibrar el carácter de la marca con la utilidad operativa:

*   **Display (Headers & Tracking)**: `Orbitron` (Variable: `--font-orbitron`).
    *   **Uso**: Títulos principales de sección, encabezados Hero, logotipos y códigos de seguimiento. Su estructura geométrica y postura ancha brindan una apariencia técnica, de urgencia y futurista. Deben renderizarse preferentemente en amarillo o blanco.
    *   **Clases**:
        *   `text-display-lg`: Orbitron 48px | Weight 900 | LH 1.1 | LS -0.02em
        *   `text-display-md`: Orbitron 32px | Weight 700 | LH 1.2 | LS -0.01em
        *   `text-headline-lg`: Orbitron 24px | Weight 700 | LH 1.3 | LS 0.02em
        *   `text-headline-lg-mobile`: Orbitron 20px | Weight 700 | LH 1.3
        *   `text-code-tracking`: Orbitron 16px | Weight 400 | LH 1.0 | LS 0.1em
*   **Sans (Body & Labels)**: `Roboto` (Variable: `--font-roboto`).
    *   **Uso**: Párrafos, formularios, etiquetas de botones, tablas e información de métricas. Su legibilidad es excelente incluso en tamaños pequeños. El texto de cuerpo debe permanecer en blanco o plata claro (`text-gray-300`).
    *   **Clases**:
        *   `text-body-lg`: Roboto 18px | Weight 400 | LH 1.6
        *   `text-body-md`: Roboto 16px | Weight 400 | LH 1.5
        *   `text-label-md`: Roboto 14px | Weight 700 | LH 1.2 | LS 0.05em
        *   `text-label-sm`: Roboto 12px | Weight 400 | LH 1.2 | LS 0.1em

---

## 4. Layout, Espaciado y Grilla

*   **Grilla**: 12 columnas fluidas para escritorio (desktop) y 4 columnas para móvil.
*   **Espaciado**: Basado en una escala rítmica de espaciado adaptado al Stitch Design System:
    *   `xs` / `base`: 4px
    *   `sm`: 8px
    *   `md` / `gutter` / `margin-mobile`: 16px
    *   `lg` / `margin-desktop`: 32px
    *   `xl`: 64px
    *   `container-max`: 1400px
*   **Clases de Tailwind**: Se extienden los tokens nativos de Tailwind (`p-xs`, `gap-sm`, `m-md`, `w-container-max`, etc.) para permitir el uso directo de la escala en toda la aplicación.

---

## 5. Elevación y Capas Tonales (Tonal Layering)

Establecemos la jerarquía visual utilizando capas de color en lugar de sombras difusas:

1.  **Capa 0 (Floor - Suelo)**: El color de fondo más oscuro de la aplicación (`#121414` o `#030710`).
2.  **Capa 1 (Surface - Superficie)**: Color base para tarjetas y contenedores (`#00246B` o `#0a0d16`).
3.  **Capa 2 (Raised - Elevado)**: Acento de azul cobalto (`#0047AB`) o uso de bordes nítidos de 1px en blanco con 10% de opacidad (`border-white/10`) para delimitar tarjetas.
4.  **Capa Interactiva (Hover/Enfoque)**: Los estados de selección u hover en las tarjetas deben emplear un brillo sutil o un borde izquierdo sólido de 2px en amarillo de acción.

---

## 6. Formas y Bordes

*   **Radio de Bordes**: Sistema de radios de borde estandarizado:
    *   `rounded-sm`: 0.25rem (4px) para pequeños elementos interactivos.
    *   `rounded` (DEFAULT): 0.5rem (8px) para botones y controles del dashboard.
    *   `rounded-md`: 0.75rem (12px) para componentes medianos.
    *   `rounded-lg`: 1rem (16px) para tarjetas operativas estándar.
    *   `rounded-xl`: 1.5rem (24px) para grandes paneles contenedores y landing sections.
    *   `rounded-full`: 9999px para círculos o avatares.
*   **Botones**: Evitar formas de píldora completas (`rounded-full`) para mantener la alineaición con la grilla y el aspecto técnico de logística.

---

## 7. Componentes Clave

### 7.1 Botones
*   **Primario**: Fondo amarillo de acción (`#FFE600`), texto azul náutico oscuro (`#00246B`), fuente seminegrita.
*   **Secundario**: Fondo transparente con un borde amarillo de acción de 2px y texto amarillo.
*   **Ghost**: Texto blanco sin fondo, para acciones secundarias o de utilidad de baja prioridad.

### 7.2 Campos de Entrada (Inputs)
Fondo ligeramente más oscuro que la tarjeta en la que residen. Borde inicial cobalto de 1px, cambiando a un trazo amarillo de 2px al enfocarse (`focus-visible`). Etiquetas siempre arriba del campo en estilo `label-md`.

### 7.3 Badges y Etiquetas de Estado
De alto contraste para lecturas rápidas de envíos:
*   **En Tránsito / Normal**: Fondo verde/azul cobalto con texto contrastante.
*   **Precaución / Pendiente (Warning)**: Fondo amarillo con texto azul oscuro.
*   **Crítico / Atrasado (Critical)**: Fondo rojo brillante con texto blanco.
*   **Completado (Success)**: Fondo menta brillante con texto azul.

### 7.4 Tablas de Datos
Las filas deben alternar colores (Capa 1 y un azul ligeramente más claro) para facilitar la lectura transversal. Encabezados fijos (`sticky`) en estilo `label-md`.

---

## 8. Do's and Don'ts (Reglas para IA)

### ✅ SÍ Hacer (Do's)
*   Usa siempre `cn()` para concatenar y fusionar dinámicamente clases de Tailwind.
*   Asegura que el texto sobre fondos de color tenga un contraste excelente (`text-white` o `text-gray-300` sobre fondos oscuros).
*   Emplea el amarillo (`text-secondary` o `#FFE600`) únicamente para encabezados, CTAs clave o estados importantes.
*   Mantén las líneas de borde nítidas (`border-white/10` o `border-white/5`) para simular paneles de control técnicos.

### ❌ NO Hacer (Don'ts)
*   No uses colores de fondo claros (`bg-white`, `bg-slate-50`) para componentes globales de la página de inicio que interrumpan la visual oscura premium.
*   No uses botones tipo píldora (`rounded-full`) en interfaces densas o de dashboard.
*   No uses sombras borrosas sobre fondos oscuros profundos; prefiere bordes nítidos (`border-white/10`) y variaciones tonales.
*   No mezcles fuentes display fuera del logotipo y encabezados principales. El cuerpo debe usar la fuente sans (`Hanken Grotesk` / `Montserrat`).
