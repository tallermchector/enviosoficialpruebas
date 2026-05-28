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
  components: z.array(z.object({
    name: z.string().describe("Nombre del componente."),
    path: z.string().describe("Ruta del archivo del componente."),
  })).describe("Lista de componentes que conforman la página y su ubicación.")
});
export type GeneratePagePromptInput = z.infer<typeof GeneratePagePromptInputSchema>;

const GeneratePagePromptOutputSchema = z.object({
  prompt: z.string().describe("El prompt detallado y optimizado para instruir a una IA a generar el código de la página y sus componentes."),
});
export type GeneratePagePromptOutput = z.infer<typeof GeneratePagePromptOutputSchema>;

export async function generatePagePrompt(input: GeneratePagePromptInput): Promise<GeneratePagePromptOutput> {
  return generatePagePromptFlow(input);
}

ai.definePrompt({
  name: 'generatePagePromptTemplate',
  input: { schema: GeneratePagePromptInputSchema },
  output: { schema: GeneratePagePromptOutputSchema },
  prompt: `
    Tu tarea es actuar como un arquitecto de software y experto en "prompt engineering".
    Debes crear un prompt maestro para una IA de desarrollo, con el objetivo de reestructurar y regenerar la '{{pageName}}' de un proyecto web.

    **Contexto del Proyecto:**
    - El proyecto es "Envios DosRuedas", una empresa de mensajería.
    - Se busca migrar y mejorar el código a un nuevo proyecto.
    - El tono es profesional, confiable y moderno.
    - Paleta de colores: Azul primario, Amarillo secundario.

    **Instrucciones para la generación del PROMPT MAESTRO:**

    1.  **Rol y Objetivo Claros:**
        -   Define el rol de la IA como "experto desarrollador Full-Stack".
        -   El objetivo es: "Reestructurar la '{{pageName}}' y sus componentes, traduciendo nombres de archivos y variables al español, y aplicando buenas prácticas".

    2.  **Stack Tecnológico Específico:**
        -   Indica el uso obligatorio de: Next.js con App Router, React, TypeScript, Tailwind CSS, y componentes de ShadCN UI.

    3.  **Plan de Reestructuración Detallado:**
        -   Instruye a la IA para que cree un nuevo directorio para los componentes de esta página. El nombre debe estar en español y ser coherente con el nombre de la página (ej: \`src/components/principal/\` para la 'Página de Inicio').
        -   Proporciona una lista de los componentes actuales y su ubicación original.
        -   Pide a la IA que, para cada componente, proponga un **nuevo nombre de archivo en español** dentro del nuevo directorio (ej: \`hero-principal.tsx\`).
        -   **Crucial:** La IA debe tomar el código existente de cada componente, pero debe **refactorizarlo y traducirlo**, cambiando nombres de variables, funciones y props al español para mantener consistencia. No debe simplemente copiar y pegar.

        **Componentes a Reestructurar para la '{{pageName}}':**
        {{#each components}}
        - **Componente Original:** {{name}}
          - **Ubicación Actual:** \`{{path}}\`
          - **Instrucción:** Proponer un nuevo nombre de archivo en español (ej: \`hero-principal.tsx\`) y refactorizar su código interno al español.
        {{/each}}

    4.  **Consideraciones de Backend (Supabase):**
        -   Añade una sección específica que indique: "Si alguno de los componentes requiere lógica de backend (acceso a base de datos, autenticación), esta debe ser implementada utilizando **Supabase**".
        -   Detalla que la configuración de Supabase en el nuevo proyecto se encontrará en los siguientes archivos, y que la IA debe utilizarlos para cualquier interacción con el backend:
            -   \`src/lib/supabase-types.ts\` (para los tipos generados de la DB).
            -   \`src/lib/supabase/client.ts\` (para crear un cliente de Supabase en el lado del cliente).
            -   \`src/lib/supabase/server.ts\` (para crear un cliente de Supabase en el lado del servidor, como en Server Actions).

    5.  **Buenas Prácticas de Codificación:**
        -   Recuerda a la IA que el código final debe ser limpio, modular, reutilizable y adaptable (responsive).
        -   Debe usar componentes funcionales de React con Hooks.

    **Ejemplo Conceptual de Salida (para una página 'About Us'):**

    *   **Prompt que generarías:**
        "**Rol:** Eres un experto desarrollador... **Objetivo:** Reestructurar la página 'Sobre Nosotros'...
        **Stack:** Next.js, etc.
        **Plan de Reestructuración:**
        - Crea el directorio \`src/components/sobre-nosotros/\`.
        - Componentes a migrar:
            - **Componente Original:** AboutHero
              - **Ubicación Actual:** \`src/components/about/about-hero.tsx\`
              - **Instrucción:** Renombrar a \`hero-nosotros.tsx\`, tomar su código y traducir variables y lógica al español.
            - ... (más componentes) ...
        **Consideraciones de Backend (Supabase):**
        - Si necesitas obtener datos dinámicos, como testimonios de una base de datos, utiliza el cliente de Supabase que se encuentra en \`src/lib/supabase/server.ts\`..."

    Ahora, genera el prompt maestro específico y detallado para la siguiente solicitud:
    - **Página a reestructurar:** {{pageName}}
  `,
});

const generatePagePromptFlow = ai.defineFlow(
  {
    name: 'generatePagePromptFlow',
    inputSchema: GeneratePagePromptInputSchema,
    outputSchema: GeneratePagePromptOutputSchema,
  },
  async (input) => {
    // Generate prompt completely offline using high-fidelity local template compilation
    const componentsList = input.components.map(comp => 
      `- **Componente Original:** ${comp.name}\n  - **Ubicación Actual:** \`${comp.path}\`\n  - **Instrucción:** Proponer un nuevo nombre de archivo en español (ej: \`${comp.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-principal.tsx\`) y refactorizar su código interno al español, traduciendo variables y lógica visual.`
    ).join('\n');

    const promptText = `Escribí código de alta calidad en base a las siguientes especificaciones:

**Rol y Objetivo:**
Eres un desarrollador Full-Stack experto. Tu objetivo es reestructurar la página '${input.pageName}' y sus componentes, traduciendo nombres de archivos y variables al español, y aplicando las mejores prácticas de Next.js y Tailwind CSS.

**Stack Tecnológico Requerido:**
- Next.js 16+ (App Router)
- React 19 / TypeScript (Modo estricto, sin 'any')
- Tailwind CSS (Diseño adaptable, elástico y mobile-first)
- Componentes de ShadCN UI para elementos interactivos
- Estilo premium según Stitch Design System (glassmorphism, gradientes sutiles y micro-animaciones)

**Directorio de Destino:**
Crea un nuevo directorio para los componentes de esta página. El nombre del directorio debe estar en español y ser coherente con la página (ej: \`src/components/${input.pageName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}/\`).

**Plan de Reestructuración de Componentes:**
${componentsList}

**Consideraciones de Backend (Supabase):**
Si alguno de los componentes requiere lógica de backend (acceso a base de datos, autenticación), esta debe ser implementada utilizando Supabase.
Utiliza la configuración global del proyecto ubicada en:
- \`src/lib/supabase-types.ts\` (para los tipos generados de la DB).
- \`src/lib/supabase/client.ts\` (cliente en componentes de cliente).
- \`src/lib/supabase/server.ts\` (cliente en componentes de servidor o Server Actions).

**Buenas Prácticas de Codificación:**
- Todo el código debe ser limpio, modular, reutilizable y adaptable.
- Conserva la lógica original de negocio e interactividad, pero traduce el copy y las variables internas relevantes al español de Mar del Plata ("voseo" para contenido visible).`;

    return { prompt: promptText };
  }
);
