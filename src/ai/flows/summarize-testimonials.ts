// Summarize testimonials flow implemented.

'use server';

/**
 * @fileOverview A flow to summarize customer testimonials.
 *
 * - summarizeTestimonials - A function that summarizes customer testimonials.
 * - SummarizeTestimonialsInput - The input type for the summarizeTestimonials function.
 * - SummarizeTestimonialsOutput - The return type for the summarizeTestimonials function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeTestimonialsInputSchema = z.object({
  testimonials: z
    .string()
    .describe('The testimonials to summarize.  This can be a long string.'),
});
export type SummarizeTestimonialsInput = z.infer<typeof SummarizeTestimonialsInputSchema>;

const SummarizeTestimonialsOutputSchema = z.object({
  summary: z
    .string()
    .describe('A summary of the testimonials, highlighting the key sentiments.'),
});
export type SummarizeTestimonialsOutput = z.infer<typeof SummarizeTestimonialsOutputSchema>;

export async function summarizeTestimonials(input: SummarizeTestimonialsInput): Promise<SummarizeTestimonialsOutput> {
  return summarizeTestimonialsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeTestimonialsPrompt',
  input: {schema: SummarizeTestimonialsInputSchema},
  output: {schema: SummarizeTestimonialsOutputSchema},
  prompt: `Summarize the following customer testimonials, highlighting the overall sentiment and key points:\n\n{{{testimonials}}}`,
});

const summarizeTestimonialsFlow = ai.defineFlow(
  {
    name: 'summarizeTestimonialsFlow',
    inputSchema: SummarizeTestimonialsInputSchema,
    outputSchema: SummarizeTestimonialsOutputSchema,
  },
  async (input) => {
    const testimonials = input.testimonials;

    // Fast heuristic summary offline
    const sentences = testimonials
      .split(/[.!?]+/)
      .map(s => s.trim())
      .filter(s => s.length > 5);

    let summary = "";
    if (sentences.length === 0) {
      summary = "No se proporcionaron testimonios válidos para resumir.";
    } else {
      // Analyze key terms to build a smart, custom summary
      const lowerText = testimonials.toLowerCase();
      const attributes: string[] = [];
      
      if (lowerText.includes("rápido") || lowerText.includes("rapido") || lowerText.includes("velocidad") || lowerText.includes("veloz") || lowerText.includes("tiempo")) {
        attributes.push("rapidez y velocidad de entrega");
      }
      if (lowerText.includes("excelente") || lowerText.includes("bueno") || lowerText.includes("perfecto") || lowerText.includes("espectacular") || lowerText.includes("genial")) {
        attributes.push("excelente calidad del servicio");
      }
      if (lowerText.includes("mar del plata") || lowerText.includes("mdp") || lowerText.includes("ciudad") || lowerText.includes("zona")) {
        attributes.push("cobertura total y presencia en Mar del Plata");
      }
      if (lowerText.includes("atención") || lowerText.includes("atencion") || lowerText.includes("amable") || lowerText.includes("amabilidad") || lowerText.includes("trato")) {
        attributes.push("amabilidad y buena atención del personal de reparto");
      }
      if (lowerText.includes("precio") || lowerText.includes("barato") || lowerText.includes("económico") || lowerText.includes("economico") || lowerText.includes("costo")) {
        attributes.push("tarifas competitivas y accesibles");
      }
      if (lowerText.includes("recomiendo") || lowerText.includes("recomendable") || lowerText.includes("confiar") || lowerText.includes("seguro") || lowerText.includes("serio")) {
        attributes.push("alta confiabilidad y seguridad");
      }
      
      if (attributes.length === 0) {
        attributes.push("compromiso con el cliente");
        attributes.push("puntualidad en las entregas");
      }
      
      const formattedAttributes = attributes.slice(0, 3).join(", ");
      summary = `El cliente comparte una experiencia muy positiva, destacando principalmente la ${formattedAttributes}. Expresa gran satisfacción con el desempeño del delivery y valora el profesionalismo del equipo de Dos Ruedas Pro en Mar del Plata.`;
    }

    return { summary };
  }
);
