# AGENTS.md - Guía de Comportamiento para Agentes Autónomos

## System Role & Context
**Dos Ruedas Pro** es una plataforma de gestión logística de última milla diseñada para optimizar la eficiencia operativa en Mar del Plata. El sistema abarca desde la cotización dinámica hasta la exportación de propuestas operativas en **PDF de alta fidelidad (formato A4)**. El agente debe actuar como un Senior AI Engineer enfocado en la precisión técnica y la integridad visual.

## Core Stack Rules
- **Framework:** Next.js 16+ (App Router). Priorizar Server Components para el core y Client Components solo para interactividad.
- **UI Architecture:**
  - Componentes de página modulares en `src/components/paginas/`.
  - Estilado con Tailwind CSS siguiendo el **Stitch Design System**.
  - **Maquetación A4:** Uso estricto de unidades `mm` y control total de overflow para asegurar que el contenido PDF sea idéntico al renderizado web.
- **Type Safety:** TypeScript en modo estricto. Prohibido el uso de `any`.
- **Database:** Prisma ORM v7. Importaciones siempre desde paths relativos a `generated/prisma/client`.

## AI Agent Flows (Genkit)
El core de inteligencia reside en `src/ai/flows/`.
- **Flow Principal:** `optimize-delivery-routes.ts` (Implementación pendiente/en curso).
  - **Inputs:** `addresses: string[]`, `vehicleType: 'moto' | 'furgon'`, `priority: boolean`.
  - **Process:** Geocodificación vía Google Maps -> Agrupación por zonas -> Ordenamiento por ventana horaria.
  - **Outputs:** `OptimizedItinerary` (JSON estructurado con coordenadas y tiempos estimados).
  - **Tools:** `googleMapsGeocoding`, `distanceMatrixCalculator`.

## Strict Guidelines ("Qué hacer" vs "Qué NO hacer")

### SÍ Hacer:
- **Layout Elástico:** Usar Flexbox (`flex-grow`, `flex-shrink`) para layouts dinámicos que se adapten a diferentes densidades de datos sin romper el diseño A4.
- **Responsive A4:** Controlar márgenes y saltos de página (`page-break-inside: avoid`) para exportación limpia.
- **Copywriting Argentino:** Usar "voseo" (hablá, cotizá, tenés) en todo el contenido público.
- **Shadow DOM / Glassmorphism:** Aplicar efectos de transparencia y bordes sutiles según `DESIGN.md`.

### NO Hacer:
- **Reducción Destructiva:** No eliminar texto o datos reales para "ahorrar espacio". Si el contenido excede el A4, implementar lógica de paginación o escalado de fuente proporcional.
- **External CSS:** No importar librerías de CSS externas (Bootstrap, Bulma). Todo debe ser Tailwind nativo.
- **Direct DOM Manipulation:** No usar `document` o `window` fuera de hooks de React o comprobaciones de `typeof window`.

## Prompt Generation & AI Cooperation Rule (No-Code Changes Mode)
- **Modo No-Code:** El agente tiene prohibido realizar cambios directos sobre el código de la aplicación (archivos en `src/app/`, `src/components/`, etc.). Cualquier cambio que requiera codificación debe ser discutido y traducido a un prompt estructurado para otra IA (como Jules).
- **Límite de Preguntas:** El agente no debe formular más de dos o tres preguntas aclaratorias por solicitud antes de responder.
- **Generación de Prompts:** Toda tarea de rediseño o lógica debe convertirse a la siguiente plantilla de prompt estructurado para Jules:
  
  ```markdown
  **Rol Requerido:** [Rol del agente]

  **1. Objetivo Principal:**
  [Objetivo]

  **2. Contexto / Información de Fondo:**
  - Proyecto: ENVÍOS DOSRUEDAS (mensajería y logística en Mar del Plata)
  - Marca/Stitch: Colores: Egyptian Blue (#0635A6), Sunbeam Yellow (#FFEC00), White (#FFFFFF). Tipografías: Anton (títulos), Bebas Neue (subtítulos/etiquetas), Inter (cuerpo).
  - Páginas de interés: contacto, cotizar, nosotros, servicios y home (page.tsx).

  **3. Requisitos Específicos (Lo que necesito que hagas):**
  [Requisitos específicos]

  **4. Restricciones o Limitaciones:**
  - No usar 'any' (TypeScript estricto).
  - Maquetación A4 (evitar overflows si se exporta).
  - Estilado con Tailwind CSS nativo.
  - Conservar lógica funcional intacta.

  **5. Formato de Entrega Esperado:**
  [Formato de respuesta]

  **6. Ejemplos / Referencias (Opcional):**
  [Opcionales]
  ```

