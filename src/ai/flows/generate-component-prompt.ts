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
    1.  **Rol y Objetivo Claros:** Comienza el prompt definiendo el rol de la IA (experto desarrollador Frontend) y el objetivo (generar el componente '{{componentName}}').
    2.  **No especificar ubicación:** NO indiques en qué ruta o archivo debe crearse el componente. Solo enfócate en la descripción del componente mismo.
    3.  **Descripción Detallada:** Proporciona una descripción exhaustiva del componente. Debes ser muy específico en los siguientes puntos:
        *   **Diseño y Estructura Visual:** Describe el layout (grid, flexbox), las columnas, el espaciado, las sombras, los bordes, los colores exactos de la paleta a usar (primario, secundario, etc.), y la tipografía (fuentes, tamaños, pesos).
        *   **Funcionalidad e Interactividad:** Detalla cómo debe funcionar el componente. ¿Qué pasa al hacer hover? ¿Qué ocurre al hacer clic? ¿Hay menús desplegables, acordeones, sliders? ¿Cómo se comportan?
        *   **Animaciones:** Si aplica, describe las animaciones sutiles y fluidas que debe tener, utilizando Framer Motion. Por ejemplo: "Al hacer hover, el componente debe elevarse ligeramente con una animación de resorte (spring)".
        *   **Contenido y Textos:** Incluye los textos exactos (títulos, párrafos, etiquetas de botones) que debe mostrar el componente.
        *   **Imágenes y Recursos:** Si el componente usa imágenes, especifica la **ruta relativa exacta** desde la carpeta \`public/\`. Por ejemplo: \`src="/bannerenvios.webp"\` o \`src="/hero/delante.webp"\`.
        *   **Responsive Design:** Explica cómo debe adaptarse el diseño a diferentes tamaños de pantalla (móvil, tablet, escritorio).

    **Ejemplo Conceptual (si te pidieran el prompt para un 'Footer'):**
    *   **Prompt que generarías:**
        "**Rol:** Eres un experto desarrollador Frontend... **Objetivo:** Generar el componente 'Footer'...
        **Descripción Detallada:**
        - **Diseño:** Un grid de 4 columnas en escritorio que se apila a 1 columna en móvil. Fondo de color azul primario.
        - **Columna 1:** Debe mostrar el logo de la empresa usando la imagen en \`/LogoEnviosDosRuedas.webp\`, un párrafo descriptivo y los íconos de redes sociales.
        - **Columna 2 y 3:** Listas de enlaces de navegación...
        - **Columna 4:** Información de contacto...
        - **Sección Inferior:** Un área con el copyright y enlaces a 'Política de Privacidad' y 'Términos y Condiciones'.
        - **Funcionalidad:** Incluye un botón flotante 'Volver Arriba' que aparece en la esquina inferior derecha al hacer scroll hacia abajo y que, al hacer clic, desplaza la página suavemente hacia el inicio."

    Ahora, genera el prompt específico y detallado para la siguiente solicitud:
    - **Página:** {{pageName}}
    - **Componente:** {{componentName}}
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
