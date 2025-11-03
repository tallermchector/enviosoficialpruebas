{// src/app/admin/prompts/actions.ts
'use server';

import { z } from 'zod';
import { generatePagePrompt } from '@/ai/flows/generate-page-prompt';
import { generateComponentPrompt } from '@/ai/flows/generate-component-prompt';

// Schema for Page Prompt Generation
const generatePagePromptSchema = z.object({
  pageName: z.string().min(1, 'El nombre de la página es requerido.'),
  components: z.string().min(1, 'La lista de componentes es requerida.'), // JSON string
});

export interface GeneratePagePromptState {
  prompt?: string;
  error?: string;
}

export async function generatePagePromptAction(
  prevState: GeneratePagePromptState,
  formData: FormData
): Promise<GeneratePagePromptState> {
  const validatedFields = generatePagePromptSchema.safeParse({
    pageName: formData.get('pageName'),
    components: formData.get('components'),
  });

  if (!validatedFields.success) {
    return {
      error: 'Por favor, selecciona una página válida.',
    };
  }

  try {
    const components = JSON.parse(validatedFields.data.components);
    const result = await generatePagePrompt({ 
      pageName: validatedFields.data.pageName,
      components: components
    });
    return { prompt: result.prompt };
  } catch (e: unknown) {
    console.error("Error generating page prompt:", e);
    const errorMessage = e instanceof Error ? e.message : 'Error desconocido.';
    return {
      error: `Hubo un error al generar el prompt: ${errorMessage}`,
    };
  }
}

// Schema for Component Prompt Generation
const generateComponentPromptSchema = z.object({
  pageName: z.string().min(1, 'El nombre de la página es requerido.'),
  componentName: z.string().min(1, 'El nombre del componente es requerido.'),
  componentPath: z.string().min(1, 'La ruta del componente es requerida.'),
});

export interface GenerateComponentPromptState {
    prompt?: string;
    error?: string;
}

export async function generateComponentPromptAction(
    prevState: GenerateComponentPromptState,
    formData: FormData
): Promise<GenerateComponentPromptState> {
    const validatedFields = generateComponentPromptSchema.safeParse({
        pageName: formData.get('pageName'),
        componentName: formData.get('componentName'),
        componentPath: formData.get('componentPath'),
    });

    if (!validatedFields.success) {
        return {
            error: 'Por favor, completa todos los campos requeridos.',
        };
    }

    try {
        const result = await generateComponentPrompt({ 
            pageName: validatedFields.data.pageName,
            componentName: validatedFields.data.componentName,
            componentPath: validatedFields.data.componentPath,
        });
        return { prompt: result.prompt };
    } catch (e: unknown) {
        console.error("Error generating component prompt:", e);
        const errorMessage = e instanceof Error ? e.message : 'Error desconocido.';
        return {
            error: `Hubo un error al generar el prompt del componente: ${errorMessage}`,
        };
    }
}
