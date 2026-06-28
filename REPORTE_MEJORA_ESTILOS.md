# REPORTE DE AUDITORÍA DE UI/UX Y PLAN DE MEJORA (IDENTIDAD MDP)

Este reporte contiene un diagnóstico exhaustivo de la interfaz de usuario de **Envíos DosRuedas Pro** frente a las directrices de diseño locales y las especificaciones de marca del **Contraste Urbano MDP**.

---

## 1. RESUMEN EJECUTIVO

Se auditaron las 13 páginas de la aplicación y sus componentes asociados. El diagnóstico revela las siguientes tendencias críticas que desvían la interfaz de la nueva identidad visual:

1. **Uso Indebido de Bordes Redondeados (Anti-Brutalismo):** La mayoría de las tarjetas, botones, badges e inputs utilizan clases de Tailwind como `rounded-xl`, `rounded-lg` y `rounded-md`. Esto atenta contra la identidad brutalista y plana definida en la marca, la cual exige de manera estricta `borderRadius: none` (`rounded-none`).
2. **Desviación en la Paleta de Colores (Falta de Contraste Urbano):** Se detectó el uso recurrente de grises genéricos de Tailwind (`text-gray-400`, `text-gray-300`), azules apagados (`bg-[#050810]`, `bg-[#030710]`) e incluso amarillos externos (`bg-[#FFF159]` de MercadoLibre). El sistema debe reducirse al contraste estricto entre **Egyptian Blue (#0636A5)**, **Sunbeam Yellow (#FFEC01)** y **White (#FFFFFF)**.
3. **Jerarquía Tipográfica Inconsistente:** Se utilizan clases huérfanas de fuentes como `font-sans` y `font-display` en lugar de mapear limpiamente a los tokens semánticos definidos:
   - **Anton** (`font-title`): Títulos (H1-H4) — DEBEN ESTAR SIEMPRE EN MAYÚSCULAS.
   - **Bebas Neue** (`font-subtitle`): Subtítulos destacados y etiquetas de botones (CTA).
   - **Inter** (`font-body`): Textos de cuerpo, inputs y descripciones.
4. **Problemas Críticos de Contraste y Accesibilidad:** Se detectaron combinaciones con bajo contraste, como texto azul oscuro (`text-slate-900` o `text-primary`) sobre fondo azul primario (`bg-primary`), lo que hace que los textos sean completamente ilegibles.

---

## 2. INCONSISTENCIAS DETECTADAS POR PÁGINA

### 1. Página de Inicio (`src/app/page.tsx`)
- **Wrapper Principal:** Utiliza fondo oscuro `bg-[#050810]`, desviándose del Egyptian Blue puro.
- **HeroAnimado (`src/components/homenew/hero-animado.tsx`):**
  - El párrafo descriptivo (línea 29) utiliza `text-gray-400` y `font-sans`.
  - El botón CTA (línea 37) no declara la fuente `font-subtitle` (Bebas Neue), heredando la de cuerpo.
  - Se utilizan badges con clases de opacidad baja como `text-white/40` que comprometen el contraste urbano.
- **VisionSection (`src/components/homenew/vision-section.tsx`):**
  - Mapeo tipográfico inconsistente usando fuentes genéricas del sistema.

### 2. Página de Contacto (`src/app/contacto/page.tsx`)
- **ContactPageClient (`src/components/contact/contact-page-client.tsx`):**
  - Línea 47: El encabezado `h2` utiliza `text-headline-lg-mobile md:text-display-md` sin la clase `font-title` (Anton).
  - Línea 48: El texto de soporte utiliza `text-gray-400`.
- **ContactInfo (`src/components/contact/contact-info.tsx`):**
  - Uso de clases de redondeado y bordes con opacidad que suavizan el estilo neo-brutalista.
  - Textos descriptivos en gris genérico.
- **ContactForm (`src/components/contact/contact-form.tsx`):**
  - Inputs y textareas del formulario utilizan `rounded-md` en lugar de `rounded-none`.

### 3. Nuestras Redes (`src/app/nosotros/nuestras-redes/page.tsx`)
- **SocialFeed (`src/components/social/social-feed.tsx`):**
  - Uso de colores de texto apagados (`text-gray-300`, `text-gray-400`).
  - Tarjetas de publicaciones con bordes curvos.
- **SocialBenefits (`src/components/social/social-benefits.tsx`):**
  - Tarjetas de beneficios con `rounded-xl` / `rounded-2xl` y fondo de marca alternativo `bg-[#030710]`.

### 4. Preguntas Frecuentes (`src/app/nosotros/preguntas-frecuentes/page.tsx`)
- **FaqCategories (`src/components/faq/faq-categories.tsx`):**
  - Las preguntas frecuentes dentro del acordeón usan `rounded-lg` y colores grises.
  - Las respuestas heredan la fuente genérica del sistema en vez de `font-body` (Inter).
  - Títulos de categorías no están en mayúsculas sostenidas.

### 5. Sobre Nosotros (`src/app/nosotros/sobre-nosotros/page.tsx`)
- **WhoWeAre (`src/components/about/who-we-are.tsx`):**
  - Línea 17: `h2` usa texto en minúsculas/mixto (`Quiénes Somos`) y clase `font-display`. Debe ser `font-title` y MAYÚSCULAS.
  - Línea 46: Texto en `font-sans` y color grisáceo.
  - Línea 66: El título `h3` usa texto en minúsculas en el código HTML: `Nuestra Ventaja Injusta`.
- **CompanyValues (`src/components/about/company-values.tsx`):**
  - Tarjetas de valores usan `rounded-xl` y colores de acento fuera de la paleta.

### 6. Envíos Express (`src/app/servicios/envios-express/page.tsx`)
- **ExpressContent (`src/components/express/express-content.tsx`):**
  - Línea 28: El badge usa `bg-primary text-slate-900`. Esto genera una colisión grave de contraste (azul oscuro sobre azul oscuro). Debe ser `text-white` o `text-secondary`.
  - Línea 50: `h3` usa la clase `font-sans` en lugar de `font-title` y no está en mayúsculas en el código.
  - Línea 62: El botón CTA usa `rounded-xl` y la clase `font-display`.

### 7. Envíos Low Cost (`src/app/servicios/envios-lowcost/page.tsx`)
- **LowcostContent (`src/components/lowcost/lowcost-content.tsx`):**
  - Línea 71: Badge utiliza la clase de color no soportada `text-blue-400` y `rounded-full`.
  - Línea 92: Contenedor de iconos utiliza `rounded-2xl`.
  - Línea 108: Botón CTA usa `rounded-xl` y `font-display`.
- **PricingComparison (`src/components/lowcost/pricing-comparison.tsx`):**
  - Línea 64: Título principal usa `font-display` y texto en minúscula/mayúscula mixta.
  - Línea 84: Badge usa `rounded-none` pero declara `font-bebas` (debe ser `font-subtitle`).

### 8. Envíos Flex (`src/app/servicios/enviosflex/page.tsx`)
- **EnviosFlexContent (`src/components/envios-flex/envios-flex-content.tsx`):**
  - Clases hardcodeadas con el amarillo de Mercado Libre (`bg-[#FFF159]/10`, `text-[#FFF159]`, `border-[#FFF159]/20`). Se debe estandarizar usando el token `--color-secondary` (Sunbeam Yellow).
  - Los badges del ruteo usan `rounded-full`.
  - Textos descriptivos usan `font-sans` e H3s usan `font-display` en minúsculas.

### 9. Plan Emprendedores (`src/app/servicios/plan-emprendedores/page.tsx`)
- **PlanInformation (`src/components/entrepreneur/plan-information.tsx`):**
  - Cajas informativas de planes usan `rounded-lg` o `rounded-xl`.
  - Textos de especificaciones técnicas usan `font-sans` en lugar de `font-body`.

### 10. Términos y Condiciones (`src/app/terminos-y-condiciones/page.tsx`)
- **Fondo de Página:** Línea 61 usa `bg-gray-50 dark:bg-gray-900`. Debe adaptarse a los fondos estrictos de la marca.
- **Tipografía General:** Usa `font-sans` para los cuerpos de texto y `font-display` para los títulos.
- **Títulos de Secciones:** Los títulos H3 (línea 94) están escritos en formato mixto ("1. Aceptación de los Términos") en lugar de mayúsculas sostenidas, y usan la clase `font-display`.

### 11. Política de Privacidad (`src/app/politica-de-privacidad/page.tsx`)
- **Fondo de Página:** Línea 69 usa `bg-gray-50 dark:bg-gray-900`.
- **Jerarquía:** Estructura idéntica a Términos y Condiciones, repitiendo las desviaciones de `font-sans`, `font-display` y títulos en minúsculas.

### 12. Cotizar Express (`src/app/cotizar/express/page.tsx`)
- **ExpressCalculator (`src/components/calculator/express-calculator.tsx`):**
  - Línea 84: `CardTitle` usa la clase `font-display`.
  - Línea 85: `CardDescription` usa `font-sans text-gray-400`.
  - Líneas 92 y 103: Las etiquetas usan `font-sans text-gray-300`.
  - Líneas 99 y 110: La clase `AddressAutocomplete` usa `font-sans` e inputs con `rounded-md`.
  - Línea 113: Botón de envío usa `font-bebas` y hover hardcodeado `hover:bg-yellow-400`.
  - Línea 136: Tarjeta de resultados usa `rounded-none bg-primary/10`, pero las etiquetas internas usan `text-gray-300` y `text-gray-400`.

### 13. Cotizar Low Cost (`src/app/cotizar/lowcost/page.tsx`)
- **LowCostCalculator (`src/components/calculator/lowcost-calculator.tsx`):**
  - Mismas inconsistencias que el calculador Express: uso de inputs con `rounded-md`, tipografía de cuerpo en `font-sans` y etiquetas de texto en gris genérico.

---

## 3. PROPUESTA DE REFACTORIZACIÓN DE TAILWIND

Para alinear el código al 100% con el **Stitch Design System** y la nueva identidad de marca, se proponen los siguientes reemplazos de clases de Tailwind:

### A. Estandarización de Fuentes
- **Títulos (H1-H4):** Reemplazar `font-display` o `font-anton` por **`font-title`**. Asegurar la adición de la clase **`uppercase`** o forzar mayúsculas en el texto.
- **Botones y CTAs:** Reemplazar `font-bebas` o `font-sans` por **`font-subtitle`**.
- **Cuerpo y Formularios:** Reemplazar `font-sans` o `font-inter` por **`font-body`**.

### B. Eliminación de Bordes Redondeados (Estilo Plano)
- Reemplazar todas las instancias de `rounded-xl`, `rounded-lg`, `rounded-md` y `rounded-full` en tarjetas, botones y contenedores de iconos por **`rounded-none`**.
- *Nota Excepcional:* Se permite `rounded-none` para mantener la estética neo-brutalista de bordes a 90 grados.

### C. Ajustes de Paleta y Contraste
- Reemplazar grises genéricos (`text-gray-400`, `text-gray-300`, `text-muted-foreground`) por clases basadas en opacidades del color de soporte:
  - Para textos secundarios sobre fondo oscuro: **`text-white/70`** o **`text-white/80`**.
  - Para textos secundarios sobre fondo claro: **`text-primary/70`** o **`text-primary/80`**.
- Corregir el badge de contraste en `ExpressContent`: cambiar `bg-primary text-slate-900` por **`bg-primary text-white`** o **`bg-secondary text-primary`**.
- Estandarizar los colores de Mercado Libre en `EnviosFlexContent`: reemplazar `#FFF159` por la variable de Tailwind de acento de marca **`bg-secondary`** o **`text-secondary`**.

---

## 4. PLAN DE ACCIÓN TÉCNICO

Se sugiere realizar las modificaciones de manera incremental en el siguiente orden para facilitar las pruebas y evitar regresiones:

1. **Fase 1: Componentes Globales e Infraestructura de UI**
   - Modificar [button.tsx](file:///e:/proyectos/enviosoficialpruebas/src/components/ui/button.tsx) para cambiar el redondeado por defecto de `rounded-md` a `rounded-none`.
   - Modificar [HeroSection.tsx](file:///e:/proyectos/enviosoficialpruebas/src/components/ui/HeroSection.tsx) para estandarizar las fuentes a `font-title`, `font-subtitle` y `font-body`.

2. **Fase 2: Páginas Estáticas Legales**
   - Modificar [terminos-y-condiciones/page.tsx](file:///e:/proyectos/enviosoficialpruebas/src/app/terminos-y-condiciones/page.tsx) y [politica-de-privacidad/page.tsx](file:///e:/proyectos/enviosoficialpruebas/src/app/politica-de-privacidad/page.tsx).

3. **Fase 3: Páginas de Servicios y sus Componentes**
   - Modificar componentes de `src/components/express/` y `src/app/servicios/envios-express/page.tsx`.
   - Modificar componentes de `src/components/lowcost/` y `src/app/servicios/envios-lowcost/page.tsx`.
   - Modificar componentes de `src/components/envios-flex/` y `src/app/servicios/enviosflex/page.tsx`.
   - Modificar componentes de `src/components/entrepreneur/` y `src/app/servicios/plan-emprendedores/page.tsx`.

4. **Fase 4: Cotizadores y Formularios Interactivos**
   - Modificar `src/components/calculator/` (calculadores de Express y Low Cost).
   - Modificar `src/components/contact/` (formulario y componentes de contacto).

5. **Fase 5: Página de Inicio e Información Corporativa**
   - Modificar componentes de `src/components/about/` (Sobre Nosotros).
   - Modificar componentes de `src/components/faq/` (Preguntas Frecuentes).
   - Ajustar los últimos detalles y animaciones en la página principal (`src/app/page.tsx`).
