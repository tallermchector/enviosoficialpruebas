
# Blueprint de Implementación: Página Principal (Homepage)

Este documento guía la creación de la página principal (`src/app/page.tsx`) del proyecto "Envios DosRuedas".

## 1. Visión General del Proyecto

-   **Objetivo:** Crear una plataforma web moderna, rápida y confiable para "Envios DosRuedas", que permita a los usuarios cotizar envíos, conocer los servicios y contactar a la empresa.
-   **Stack Tecnológico:** Next.js (App Router), TypeScript, React (Server Components por defecto), Tailwind CSS, ShadCN UI.
-   **Estilo Visual:**
    -   **Colores:** Primario Azul (`#1E40AF`), Acento Amarillo (`#FBBF24`).
    -   **Tipografía:** Titulares con `Orbitron`, cuerpo con `Roboto`.
    -   **Iconos:** `lucide-react`.

## 2. Estructura de la Homepage (`src/app/page.tsx`)

La página principal debe ser un **Server Component** que orqueste la carga de los siguientes componentes principales. Se recomienda el uso de **`React.Suspense`** con un componente `<Skeleton>` de ShadCN como `fallback` para una carga progresiva y una mejor experiencia de usuario.

### Componentes a Crear y Orquestar:

1.  **`OptimizedHeader`**:
    -   **Propósito:** La barra de navegación principal.
    -   **Contenido:** Logo de la empresa, enlaces a las secciones principales (Servicios, Nosotros, Contacto) y un botón destacado "Cotizar Envío".

2.  **`HeroAnimado`**:
    -   **Propósito:** Captar la atención del visitante.
    -   **Contenido:**
        -   Titular: "Servicio de mensajería y delivery".
        -   Marca: "Envios Dosruedas".
        -   Subtítulo: Propuesta de valor.
        -   Visual: Un componente `RotatingCard` que muestre la marca de forma dinámica.
        -   CTAs: "Solicitar Servicio" y "Ver Servicios".

3.  **`VisionSection`**:
    -   **Propósito:** Generar confianza mostrando la experiencia de la empresa.
    -   **Contenido:** Estadísticas clave (Clientes, Puntualidad) y un carrusel de imágenes relacionadas con el negocio.

4.  **`ServicesOverview`**:
    -   **Propósito:** Presentar los 3 servicios principales.
    -   **Contenido:** Tarjetas para "Express", "Low Cost" y "Moto Fija", cada una con un ícono, título, descripción y enlace a su respectiva página.

5.  **`CtaSection`**:
    -   **Propósito:** Una llamada a la acción intermedia.
    -   **Contenido:** Titular persuasivo y botones para "Solicitar Cotización" y "Contactanos".

6.  **`EmprendedoresHome`**:
    -   **Propósito:** Dirigirse al segmento de negocios y e-commerce.
    -   **Contenido:** Destacar servicios como "Plan Emprendedores", "Flex" y "Moto Fija" con un CTA específico.

7.  **`SliderServicios`**:
    -   **Propósito:** Mostrar dinámicamente otros servicios para negocios.
    -   **Contenido:** Un carrusel interactivo que presente planes para empresas.

8.  **`CarruselRedes`**:
    -   **Propósito:** Fomentar la comunidad y mostrar presencia en redes sociales.
    -   **Contenido:** Un carrusel dinámico que invite a seguir la marca.

9.  **`Footer`**:
    -   **Propósito:** Pie de página estándar.
    -   **Contenido:** Información de contacto, enlaces de navegación y legales (copyright, políticas).

### Acción Inmediata:

-   Crea el archivo `src/app/page.tsx` como un Server Component.
-   Crea los archivos para cada uno de los componentes mencionados arriba en directorios lógicos (ej. `src/components/homenew/...`).
-   En `page.tsx`, importa los componentes (usando `dynamic` para los pesados) y organízalos en el orden descrito, utilizando `<Suspense>` y `<Skeleton>` para la carga asíncrona.
