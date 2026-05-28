# Informe Técnico: Lógica del Flujo `generate-replication-prompt.ts`

## 1. Propósito General

El archivo `src/ai/flows/generate-replication-prompt.ts` contiene un flujo de Genkit diseñado para actuar como una herramienta de **meta-prompting**. Su objetivo principal no es generar código directamente, sino **crear prompts dinámicos y contextualizados** que pueden ser utilizados para instruir a una IA de desarrollo (como el propio asistente de Firebase Studio) sobre cómo replicar páginas o componentes de la aplicación existente.

En resumen, es un "generador de instrucciones para la IA".

## 2. Arquitectura y Lógica de Funcionamiento

El flujo tiene dos modos de operación principales, que se activan según el tipo de datos que recibe como entrada.

### Modo 1: Generación de Prompt para **Estructura de Página**

Este modo se activa cuando el flujo recibe información sobre la estructura de una página, pero no el código de componentes específicos.

-   **Activación**: Se llama a la función `generateReplicationPrompt` con el `pagePath` y un array `componentsData` (que contiene los nombres de los componentes principales de la página).
-   **Lógica del Prompt**:
    1.  **Contexto del Stack Tecnológico**: El prompt establece que el nuevo proyecto debe usar Next.js, App Router, TypeScript, React Server Components, Tailwind CSS y ShadCN.
    2.  **Instrucción de Estructura**: Le pide a la IA que cree el archivo de la página principal (`page.tsx`) como un Server Component.
    3.  **Orquestación de Componentes**: Indica que la página debe importar y renderizar una lista de componentes principales (proporcionados en `componentsData`). Crucialmente, le instruye que use `<Suspense>` de React con un `<Skeleton>` de ShadCN como `fallback` para cada componente, promoviendo así un patrón de carga asíncrona y mejorando la UX.
    4.  **Flexibilidad de Rutas**: De forma inteligente, el prompt **no exige rutas de importación exactas**. En su lugar, le pide a la IA que importe los componentes desde "rutas lógicas (ej: `@/components/home/...`)" y que aplique las "mejores prácticas de organización de archivos del proyecto de destino". Esto le da a la IA la flexibilidad para adaptarse a la estructura del nuevo proyecto.

-   **Salida**: Un objeto JSON que contiene la propiedad `structurePrompt` con el texto completo del prompt generado.

### Modo 2: Generación de Prompt para **Replicación de Componentes**

Este modo es más detallado y se activa cuando el objetivo es replicar uno o más componentes específicos, incluyendo sus dependencias.

-   **Activación**: Se llama a la función `generateReplicationPrompt` con `pagePath`, `componentPaths` (las rutas de los componentes a replicar) y, lo más importante, `filesContent` (un array con el código fuente del componente principal y todos sus sub-componentes).
-   **Lógica del Prompt**:
    1.  **Análisis de Código**: El prompt le instruye a la IA que primero analice el código fuente de todos los componentes proporcionados para entender su propósito, sus props y cómo se interrelacionan.
    2.  **Instrucciones de Reimplementación**:
        *   Define el stack tecnológico a utilizar (React, TypeScript, Next.js, ShadCN, Tailwind).
        *   Pide que se preste atención al diseño responsivo (`mobile-first`), el manejo de estado con hooks y la definición de `props` con TypeScript.
        *   Especifica que si hay rutas de imágenes hardcodeadas (ej. `/hero/imagen.webp`), se deben mantener las mismas.
    3.  **Contexto Completo**: La parte más potente de este modo es que el prompt **incluye el código fuente completo** de todos los archivos relevantes (el componente principal y sus "hijos"). Cada bloque de código está claramente delimitado y etiquetado con el nombre del archivo, lo que le da a la IA todo el contexto necesario para entender la composición y la lógica.
    4.  **Organización de Archivos**: Al igual que en el modo estructura, se le pide a la IA que coloque los nuevos archivos en un "directorio lógico y apropiado", fomentando una buena arquitectura de software.

-   **Salida**: Un objeto JSON que contiene la propiedad `componentPrompt` con el texto del prompt detallado.

## 3. Funciones y Tipos Clave

-   `ReplicationPromptInputSchema` (Zod): Define la estructura de entrada, permitiendo que el flujo reciba `componentsData` (para el modo estructura) o `filesContent` (para el modo componente).
-   `ReplicationPromptOutputSchema` (Zod): Define la estructura de salida, que contendrá `structurePrompt` o `componentPrompt`.
-   `getComponentName(path)`: Una función de utilidad para extraer el nombre de un componente (ej. `hero-animado`) de su ruta de archivo completa.
-   `generateReplicationPrompt(input)`: La función principal exportada que actúa como punto de entrada al flujo. Pre-procesa los datos (como obtener el nombre de la página) antes de invocar al flujo de Genkit.
-   `generateReplicationPromptFlow`: El flujo principal de Genkit (`ai.defineFlow`) que, basándose en la entrada, utiliza una plantilla de Handlebars para construir el prompt final.
-   **Plantilla de Handlebars**: El corazón del flujo. Utiliza lógica condicional (`{{#if}}...{{else}}...{{/if}}`) para decidir qué tipo de prompt generar (estructura o componente) basándose en la presencia de `componentPaths`.

## 4. Conclusión

El flujo `generate-replication-prompt.ts` es una pieza de ingeniería de software sofisticada que automatiza la creación de instrucciones complejas para una IA. Su diseño de doble modo y el enriquecimiento de los prompts con contexto (como el código fuente) lo convierten en una herramienta muy poderosa para acelerar el desarrollo y la refactorización de la aplicación, asegurando al mismo tiempo la coherencia con el stack tecnológico y las mejores prácticas del proyecto.