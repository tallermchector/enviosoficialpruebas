// src/app/admin/prompts/actions.ts
'use server';

import { z } from 'zod';
import { promises as fs } from 'fs';
import path from 'path';
import { generateReplicationPrompt } from '@/ai/flows/generate-replication-prompt';
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
    const componentsData = components.map((comp: any) => ({
      name: comp.name || comp.label || '',
      path: comp.path || comp.href || '',
    }));
    const result = await generateReplicationPrompt({ 
      pagePath: validatedFields.data.pageName,
      componentsData: componentsData,
    });
    return { prompt: result.structurePrompt || result.componentPrompt || "Error: No se pudo generar el prompt." };
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
        const fullPath = path.resolve(validatedFields.data.componentPath);
        const content = await fs.readFile(fullPath, 'utf-8');
        const result = await generateComponentPrompt({ 
            pagePath: validatedFields.data.componentPath,
            filesContent: [{
                path: validatedFields.data.componentPath,
                content: content,
                name: validatedFields.data.componentName,
            }]
        });
        return { prompt: result.componentPrompt };
    } catch (e: unknown) {
        console.error("Error generating component prompt:", e);
        const errorMessage = e instanceof Error ? e.message : 'Error desconocido.';
        return {
            error: `Hubo un error al generar el prompt del componente: ${errorMessage}`,
        };
    }
}
