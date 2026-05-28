// src/app/admin/crea-imagenes/actions.ts
"use server";

import { z } from "zod";
import { generateImagePrompt } from "@/ai/flows/generate-image-prompt";
import type { GenerateImagePromptInput } from "@/ai/flows/generate-image-prompt";
import { suggestImageParams } from "@/ai/flows/suggest-image-params";
import type { SuggestImageParamsOutput } from "@/ai/flows/suggest-image-params";
import imageProfiles from "@/lib/imagenes.json";

// --- Action to generate the final prompt ---
const generateImagePromptSchema = z.object({
  sectionType: z.string().min(1, "El tipo de sección es requerido."),
  service: z.string().min(1, "El servicio es requerido."),
  serviceContext: z.string().optional(),
  aspectRatio: z.string().min(1, "La relación de aspecto es requerida."),
  style: z.string().min(1, "El estilo visual es requerido."),
  background: z.string().optional(),
  details: z.string().optional(),
  inspirationImageName: z.string().optional(),
  textToInclude: z.string().optional(),
});

export interface GenerateImagePromptState {
  prompt?: string;
  error?: string;
}

export async function generateImagePromptAction(
  prevState: GenerateImagePromptState,
  formData: FormData,
): Promise<GenerateImagePromptState> {
  const validatedFields = generateImagePromptSchema.safeParse({
    sectionType: formData.get("sectionType"),
    service: formData.get("service"),
    serviceContext: formData.get("serviceContext"),
    aspectRatio: formData.get("aspectRatio"),
    style: formData.get("style"),
    background: formData.get("background"),
    details: formData.get("details"),
    inspirationImageName: formData.get("inspirationImageName"),
    textToInclude: formData.get("textToInclude"),
  });

  if (!validatedFields.success) {
    return {
      error: "Por favor, completa todos los campos requeridos.",
    };
  }

  try {
    const input: GenerateImagePromptInput = {
      sectionType: validatedFields.data.sectionType,
      serviceName: validatedFields.data.service,
      serviceContext: validatedFields.data.serviceContext,
      aspectRatio: validatedFields.data.aspectRatio,
      style: validatedFields.data.style,
      background: validatedFields.data.background,
      additionalDetails: validatedFields.data.details || "",
      inspirationImageName: validatedFields.data.inspirationImageName,
      textToInclude: validatedFields.data.textToInclude,
    };

    const result = await generateImagePrompt(input);

    return { prompt: result.prompt };
  } catch (e: unknown) {
    console.error("Error generating image prompt:", e);
    const errorMessage = e instanceof Error ? e.message : "Error desconocido.";
    return {
      error: `Hubo un error al generar el prompt: ${errorMessage}`,
    };
  }
}

// --- Action to get suggestions based on an inspiration image ---
export async function suggestImageParamsAction(
  imageName: string,
): Promise<{
  success: boolean;
  data?: SuggestImageParamsOutput;
  error?: string;
}> {
  if (!imageName || imageName === "none") {
    return { success: false, error: "Nombre de imagen no válido." };
  }

  const imageProfile = imageProfiles.image_profiles.find(
    (img) => img.name === imageName,
  );

  if (!imageProfile) {
    return {
      success: false,
      error: `No se encontró el perfil para la imagen: ${imageName}`,
    };
  }

  try {
    const result = await suggestImageParams({
      description: imageProfile.description,
      tags: imageProfile.tags,
    });
    return { success: true, data: result };
  } catch (e: unknown) {
    console.error("Error suggesting image params:", e);
    const errorMessage = e instanceof Error ? e.message : "Error desconocido.";
    return {
      success: false,
      error: `Hubo un error al obtener sugerencias: ${errorMessage}`,
    };
  }
}
