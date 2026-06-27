# Original User Request

## 2026-06-24T04:13:01Z

El objetivo es rediseñar y mejorar la interfaz visual y la experiencia de usuario (UI/UX) de todas las páginas públicas del proyecto **ENVÍOS DOSRUEDAS**, aplicando de manera estricta el Brand Book provesto. Se debe conservar la funcionalidad existente y mejorar el diseño visual con animaciones, bordes modernos, efectos glassmorphism, y contrastes de color consistentes.

Working directory: e:/proyectos/enviosoficialpruebas
Integrity mode: demo

## Requirements

### R1. Configuración de Estilo Global (Tailwind y CSS)
- Actualizar `tailwind.config.ts` y `src/app/globals.css` para integrar las variables de color del Brand Book:
  - **Egyptian Blue**: `#0635A6`
  - **Sunbeam Yellow**: `#FFEC00`
  - **White**: `#FFFFFF`
- Configurar las familias tipográficas del Brand Book en la configuración de Tailwind usando variables CSS:
  - Títulos Principales: **Anton** (sans-serif)
  - Subtítulos y Datos Técnicos: **Bebas Neue** (sans-serif)
  - Texto de Cuerpo/Detalles: **Inter** (sans-serif)
- Asegurar que las fuentes se importen mediante `next/font/google` en el layout raíz (`src/app/layout.tsx`).

### R2. Rediseño de Páginas Públicas y Componentes Relacionados
Rediseñar de forma integral aplicando los estilos de marca, mejorando espaciados, contrastes y agregando micro-animaciones (utilizando `framer-motion` o CSS si es necesario) en las siguientes páginas públicas y sus componentes importados:
1. **Home / Inicio:** `src/app/page.tsx`
2. **Contacto:** `src/app/contacto/page.tsx`
3. **Cotizar Express:** `src/app/cotizar/express/page.tsx`
4. **Cotizar Low Cost:** `src/app/cotizar/lowcost/page.tsx`
5. **Servicios Express:** `src/app/servicios/envios-express/page.tsx`
6. **Servicios Low Cost:** `src/app/servicios/envios-lowcost/page.tsx`
7. **Servicios Flex:** `src/app/servicios/enviosflex/page.tsx`
8. **Plan Emprendedores:** `src/app/servicios/plan-emprendedores/page.tsx`
9. **Sobre Nosotros:** `src/app/nosotros/sobre-nosotros/page.tsx`
10. **Preguntas Frecuentes (FAQ):** `src/app/nosotros/preguntas-frecuentes/page.tsx`
11. **Nuestras Redes:** `src/app/nosotros/nuestras-redes/page.tsx`

### R3. Lógica de Negocio e Integridad Funcional
- No se debe alterar la funcionalidad de formularios, navegación, envíos de datos o integraciones existentes (por ejemplo, validaciones de cotización, links a WhatsApp, etc.). Solo se mejora la presentación visual y estética.

## Acceptance Criteria

### Compilación y Calidad Técnica
- [ ] La aplicación compila correctamente sin errores de TypeScript ni errores de compilación de Next.js (`pnpm run build` o `npm run build` finaliza con código 0).
- [ ] No se utiliza el tipo `any` en los archivos modificados.

### Fidelidad Visual y Paleta de Colores
- [ ] La paleta de colores implementada utiliza los códigos hexadecimales exactos: `#0635A6` (Egyptian Blue), `#FFEC00` (Sunbeam Yellow), y `#FFFFFF`.
- [ ] Los encabezados y títulos principales utilizan la tipografía `Anton` (`font-anton` o `font-display`).
- [ ] Los subtítulos y etiquetas de información técnica utilizan la tipografía `Bebas Neue` (`font-bebas`).

### Experiencia y Animaciones
- [ ] El Header y Footer globales están unificados visualmente con los nuevos estilos de marca y proveen transiciones suaves.
- [ ] Los elementos interactivos (botones, cards con enlaces, pestañas de navegación) cuentan con efectos visuales de hover o foco (ej. ligeras elevaciones, cambios de borde, brillo con el color de la marca).

## Follow-up — 2026-06-24T04:13:20Z

You are the Project Orchestrator. Your working directory is e:/proyectos/enviosoficialpruebas/.agents/orchestrator/. The original user request is located at e:/proyectos/enviosoficialpruebas/.agents/ORIGINAL_REQUEST.md. Please initialize your planning document, analyze the project files, and spawn appropriate subagents to fulfill the visual redesign and style configuration requirements.
