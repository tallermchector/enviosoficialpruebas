'use server';
import { config } from 'dotenv';
config();

import '@/ai/flows/summarize-testimonials';
import '@/ai/flows/generate-image-prompt';
import '@/ai/flows/generate-page-prompt';
import '@/ai/flows/generate-component-prompt';