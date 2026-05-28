"use server";
/**
 * @fileOverview Flow to suggest form parameters for image generation based on an existing image's profile.
 *
 * - suggestImageParams - A function that suggests parameters.
 * - SuggestImageParamsInput - The input type for the function.
 * - SuggestImageParamsOutput - The return type for the function.
 */

import { ai } from "@/ai/genkit";
import { z } from "genkit";

const SuggestImageParamsInputSchema = z.object({
  description: z
    .string()
    .describe("The detailed description of the inspiration image."),
  tags: z
    .array(z.string())
    .describe("A list of tags associated with the inspiration image."),
});
export type SuggestImageParamsInput = z.infer<
  typeof SuggestImageParamsInputSchema
>;

const SuggestImageParamsOutputSchema = z.object({
  sectionType: z
    .string()
    .describe(
      "A suggested section type like 'Hero', 'Card', 'Banner', 'General', 'Ilustración'.",
    ),
  serviceName: z
    .string()
    .describe(
      "A suggested service name like 'General', 'Envios Express', etc.",
    ),
  aspectRatio: z
    .string()
    .describe(
      "A suggested aspect ratio like '16:9 (Panorámica)', '1:1 (Cuadrada)', '9:16 (Vertical)'.",
    ),
  style: z
    .string()
    .describe(
      "A suggested visual style like 'Fotografía Realista', 'Ilustración Digital', 'Arte 3D'.",
    ),
  background: z
    .string()
    .describe(
      "A concise suggestion for an improved or more professional version of the image background.",
    ),
  details: z
    .string()
    .describe(
      "A concise suggestion for an improved or more professional version of the main content details.",
    ),
});
export type SuggestImageParamsOutput = z.infer<
  typeof SuggestImageParamsOutputSchema
>;

export async function suggestImageParams(
  input: SuggestImageParamsInput,
): Promise<SuggestImageParamsOutput> {
  return suggestImageParamsFlow(input);
}

const promptTemplate = ai.definePrompt({
  name: "suggestImageParamsTemplate",
  input: { schema: SuggestImageParamsInputSchema },
  output: { schema: SuggestImageParamsOutputSchema },
  prompt: `
    You are an expert creative assistant. Your task is to analyze the description and tags of an existing image and suggest a set of parameters to create a new, similar but **improved and more professional** image.

    Analyze the following information from the inspiration image:
    - Description: "{{description}}"
    - Tags: [{{#each tags}}'{{this}}'{{#unless @last}}, {{/unless}}{{/each}}]

    Based on this information, provide creative and professional suggestions for the following fields. Your suggestions should aim to create a *new version*, not an exact copy. Be concise and direct.

    1.  **sectionType**: Based on tags like 'banner', 'web', 'presentación', suggest 'Banner', 'Hero', or 'Card'. If it's a general image, suggest 'General'.
    2.  **serviceName**: Infer the most relevant service. If tags mention 'envios', 'delivery', suggest a related service. If it's generic, suggest 'General'.
    3.  **aspectRatio**: Infer from the description. If it mentions 'banner' or 'web', suggest '16:9 (Panorámica)'. If it seems square, suggest '1:1 (Cuadrada)'. Otherwise, default to '16:9 (Panorámica)'.
    4.  **style**: Infer from tags like 'fotografía', 'digital', '3d'. Suggest 'Fotografía Realista', 'Ilustración Digital', or 'Arte 3D'. Default to 'Fotografía Realista' if unsure.
    5.  **background**: Instead of just summarizing, suggest an **improvement**. For example, if the description says "fondo abstracto con degradado azul", suggest "fondo abstracto dinámico con degradado azul y brillos sutiles" or "fondo minimalista con textura de papel y formas geométricas suaves".
    6.  **details**: Instead of just summarizing, suggest an **improvement or variation** of the main subject. For example, if it's "un repartidor en moto", suggest "repartidor amigable con casco en motocicleta eléctrica moderna, en una calle costera de la ciudad" or "primer plano de una caja de entrega siendo recibida por un cliente satisfecho". **Crucially, if a person is a delivery driver ('repartidor'), always suggest they wear a helmet ('con casco') to obscure their face.**

    Provide your output in the required JSON format.
  `,
});

const suggestImageParamsFlow = ai.defineFlow(
  {
    name: "suggestImageParamsFlow",
    inputSchema: SuggestImageParamsInputSchema,
    outputSchema: SuggestImageParamsOutputSchema,
  },
  async (input) => {
    const { output } = await promptTemplate(input);
    return output!;
  },
);
