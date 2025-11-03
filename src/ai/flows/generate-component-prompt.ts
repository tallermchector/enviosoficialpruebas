
'use server';
/**
 * @fileOverview Flow para generar prompts detallados para reconstruir componentes específicos.
 *
 * - generateComponentPrompt - Genera un prompt para reconstruir un componente.
 * - GenerateComponentPromptInput - El tipo de entrada para la función.
 * - GenerateComponentPromptOutput - El tipo de salida de la función.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateComponentPromptInputSchema = z.object({
  pageName: z.string().describe("El nombre de la página a la que pertenece el componente (ej: 'Página de Inicio')."),
  componentName: z.string().describe("El nombre del componente que se desea reconstruir (ej: 'Header', 'Hero Section')."),
  componentPath: z.string().describe("La ruta original del archivo del componente."),
});
export type GenerateComponentPromptInput = z.infer<typeof GenerateComponentPromptInputSchema>;

const GenerateComponentPromptOutputSchema = z.object({
  prompt: z.string().describe("El prompt detallado y optimizado para instruir a una IA a generar el código de un componente específico."),
});
export type GenerateComponentPromptOutput = z.infer<typeof GenerateComponentPromptOutputSchema>;

export async function generateComponentPrompt(input: GenerateComponentPromptInput): Promise<GenerateComponentPromptOutput> {
  return generateComponentPromptFlow(input);
}

const promptTemplate = ai.definePrompt({
  name: 'generateComponentPromptTemplate',
  input: { schema: GenerateComponentPromptInputSchema },
  output: { schema: GenerateComponentPromptOutputSchema },
  prompt: `
    Tu tarea es actuar como un arquitecto de software y experto en "prompt engineering".
    Debes crear un prompt ultra-detallado para que una IA de desarrollo pueda generar el código de un componente específico: el componente '{{componentName}}' de la '{{pageName}}'.

    **Contexto del Proyecto:**
    - El proyecto es para "Envios DosRuedas", una empresa de mensajería.
    - El tono general es profesional, confiable y moderno.
    - La paleta de colores principal es Azul primario y Amarillo secundario.
    - Stack Tecnológico: Next.js con App Router, React, TypeScript, Tailwind CSS, Framer Motion y componentes de ShadCN UI.

    **Instrucciones para la generación del PROMPT:**
    1.  **Rol y Objetivo Claros:** Comienza el prompt definiendo el rol de la IA (experto desarrollador Frontend) y el objetivo (generar el código del componente '{{componentName}}').
    2.  **No especificar ubicación:** NO indiques en qué ruta o archivo debe crearse el componente. Solo enfócate en la descripción del componente mismo.
    3.  **Descripción Detallada:** Proporciona una descripción exhaustiva del componente. Debes ser muy específico en los siguientes puntos:
        *   **Diseño y Estructura Visual:** Describe el layout (grid, flexbox), las columnas, el espaciado, las sombras, los bordes, los colores exactos de la paleta a usar (primario, secundario, etc.), y la tipografía (fuentes, tamaños, pesos).
        *   **Funcionalidad e Interactividad:** Detalla cómo debe funcionar el componente. ¿Qué pasa al hacer hover? ¿Qué ocurre al hacer clic? ¿Hay menús desplegables, acordeones, sliders? ¿Cómo se comportan?
        *   **Animaciones:** Si aplica, describe las animaciones sutiles y fluidas que debe tener, utilizando Framer Motion. Por ejemplo: "Al hacer hover, el componente debe elevarse ligeramente con una animación de resorte (spring)".
        *   **Contenido y Textos:** Incluye los textos exactos (títulos, párrafos, etiquetas de botones) que debe mostrar el componente.
        *   **Imágenes y Recursos:** Si el componente usa imágenes, especifica la **ruta relativa exacta** desde la carpeta \`public/\`. Por ejemplo: \`src="/bannerenvios.webp"\` o \`src="/hero/delante.webp"\`.
        *   **Responsive Design:** Explica cómo debe adaptarse el diseño a diferentes tamaños de pantalla (móvil, tablet, escritorio).

    **Referencia del Componente Original:**
    - **Página:** {{pageName}}
    - **Componente:** {{componentName}}
    - **Ubicación Actual del Código:** \`{{componentPath}}\`
    - **Instrucción para ti (no para la IA final):** Basa tu descripción detallada en el código y la funcionalidad presentes en el archivo original, traduciendo los conceptos y textos al español.

    **Dependencias de Componentes:**
    - **Instrucción para ti (no para la IA final):** Inspecciona el código en \`{{componentPath}}\`. Si este componente importa y utiliza otros componentes personalizados del proyecto (por ejemplo, un componente 'Card' o 'Button' personalizado), debes listarlos aquí e indicar también su ubicación actual.
    - **Ejemplo:** "Este componente utiliza el componente 'MiBotonPersonalizado', cuyo código se encuentra en \`src/components/ui/mi-boton.tsx\`."

    Ahora, genera el prompt específico y detallado para la IA de desarrollo.
  `,
});


const generateComponentPromptFlow = ai.defineFlow(
  {
    name: 'generateComponentPromptFlow',
    inputSchema: GenerateComponentPromptInputSchema,
    outputSchema: GenerateComponentPromptOutputSchema,
  },
  async (input) => {
    const { output } = await promptTemplate(input);
    return output!;
  }
);
