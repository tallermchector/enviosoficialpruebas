import { genkit } from "genkit";
import { googleAI } from "@genkit-ai/google-genai"; // Paquete correcto actualizado

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.GEMINIENLACE,
    }),
  ],
  model: googleAI.model("gemini-2.0-flash"),
});
