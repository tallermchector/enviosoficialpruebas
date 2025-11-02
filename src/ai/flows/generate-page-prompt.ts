'use server';
/**
 * @fileOverview Flow para generar prompts detallados para reconstruir páginas completas.
 *
 * - generatePagePrompt - Genera un prompt para reconstruir una página.
 * - GeneratePagePromptInput - El tipo de entrada para la función.
 * - GeneratePagePromptOutput - El tipo de salida de la función.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GeneratePagePromptInputSchema = z.object({
  pageName: z.string().describe("El nombre de la página que se desea reconstruir (ej: 'Página de Inicio', 'Página de Contacto')."),
});
export type GeneratePagePromptInput = z.infer<typeof GeneratePagePromptInputSchema>;

const GeneratePagePromptOutputSchema = z.object({
  prompt: z.string().describe("El prompt detallado y optimizado para instruir a una IA a generar el código de la página y sus componentes."),
});
export type GeneratePagePromptOutput = z.infer<typeof GeneratePagePromptOutputSchema>;

export async function generatePagePrompt(input: GeneratePagePromptInput): Promise<GeneratePagePromptOutput> {
  return generatePagePromptFlow(input);
}

const promptTemplate = ai.definePrompt({
  name: 'generatePagePromptTemplate',
  input: { schema: GeneratePagePromptInputSchema },
  output: { schema: GeneratePagePromptOutputSchema },
  prompt: `
    Tu tarea es actuar como un arquitecto de software y experto en "prompt engineering".
    Debes crear un prompt maestro, completo y detallado, que sirva como guía para que una IA de desarrollo pueda generar el código completo para la '{{pageName}}' de un proyecto web y todos sus componentes asociados.

    **Contexto del Proyecto:**
    - El proyecto es para "Envios DosRuedas", una empresa de mensajería.
    - El tono general es profesional, confiable y moderno.
    - La paleta de colores principal es Azul primario y Amarillo secundario.

    **Instrucciones para la generación del PROMPT MAESTRO:**
    1.  **Rol y Objetivo Claros:** Comienza el prompt definiendo el rol de la IA (experto desarrollador Full-Stack) y el objetivo principal (generar la '{{pageName}}' y sus componentes).
    2.  **Stack Tecnológico Específico:** Indica de forma obligatoria el uso de:
        -   Next.js con App Router.
        -   React con TypeScript.
        -   Tailwind CSS para estilos.
        -   Framer Motion para animaciones.
        -   Componentes de ShadCN UI como base (Button, Card, etc.).
    3.  **Estructura de Archivos Modular:**
        -   Instruye a la IA para que genere cada componente en su propio archivo.
        -   Especifica una estructura de directorios lógica para la página. Por ejemplo, para la '{{pageName}}', todos sus componentes específicos deben ir en un nuevo directorio: \`src/components/pagina-nueva/\`. La IA debe inferir el nombre del directorio a partir del nombre de la página.
        -   Define la ruta del archivo principal de la página (ej: \`src/app/nueva-pagina/page.tsx\`).
    4.  **Directrices de Codificación (Buenas Prácticas):**
        -   El código debe estar en **ESPAÑOL** (nombres de variables, comentarios si los hubiera, etc.).
        -   Debe ser limpio, reutilizable y bien estructurado.
        -   Utilizar componentes funcionales de React y Hooks.
        -   Asegurar que el diseño sea adaptable (responsive) a dispositivos móviles y de escritorio.
    5.  **Desglose de Componentes:**
        -   Para la '{{pageName}}', describe cada sección o componente principal que debe tener. Sé conceptual y no entres en detalles de implementación de bajo nivel.
        -   Por ejemplo, para una "Página de Inicio", podrías detallar: "Una sección 'Hero' impactante", "Una sección de 'Servicios Principales'", "Una sección de 'Testimonios'", "Un 'Llamado a la Acción (CTA)'", y un "Footer".
        -   Para una "Página de Contacto", podrías detallar: "Un 'Hero' con título", "Un formulario de contacto funcional", "Información de contacto (mapa, teléfono, email)" y "Horarios de atención".
        -   Para cada componente descrito, especifica su propósito general y el tipo de contenido que debe mostrar.
    6.  **Contenido y Estilo General:**
        -   Menciona que se deben usar imágenes de marcador de posición (\`https://picsum.photos/\`) si no se especifican imágenes reales.
        -   Recuerda a la IA que debe adherirse a la paleta de colores del proyecto (Azul y Amarillo).

    **Ejemplo de cómo pensarías para la 'Página de Inicio':**
    -   **Prompt generado por ti:** "Rol: Eres un experto desarrollador... Objetivo: Crear la página de inicio... Stack: Next.js, etc... Estructura: Los componentes irán en \`src/components/inicio/\`. El archivo principal será \`src/app/page.tsx\`... Desglose: 1. Hero (con título y CTA). 2. Servicios (tarjetas para 3 servicios). 3. Testimonios (un carrusel)..."

    Ahora, genera el prompt maestro para la siguiente solicitud:
    - **Página a generar:** {{pageName}}
  `,
});

const generatePagePromptFlow = ai.defineFlow(
  {
    name: 'generatePagePromptFlow',
    inputSchema: GeneratePagePromptInputSchema,
    outputSchema: GeneratePagePromptOutputSchema,
  },
  async (input) => {
    const { output } = await promptTemplate(input);
    return output!;
  }
);
