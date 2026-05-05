const fs = require('fs');

// Fix prompts/page.tsx
let promptsFile = 'src/app/admin/prompts/page.tsx';
let promptsContent = fs.readFileSync(promptsFile, 'utf8');
promptsContent = promptsContent.replace(/const form = useForm<PagePromptFormValues>\(\{\s*resolver:\s*zodResolver\(\)\s*as\s+any,/g, 'const form = useForm<PagePromptFormValues>({\n    resolver: zodResolver(pagePromptSchema) as any,');
promptsContent = promptsContent.replace(/const form = useForm<ComponentPromptFormValues>\(\{\s*resolver:\s*zodResolver\(\)\s*as\s+any,/g, 'const form = useForm<ComponentPromptFormValues>({\n    resolver: zodResolver(componentPromptSchema) as any,');
fs.writeFileSync(promptsFile, promptsContent);
console.log('Fixed prompts/page.tsx');

// Fix the Zod enum errors by removing the second argument to nativeEnum and enum
function removeZodOptions(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/,\s*\{\s*(invalid_type_error|errorMap)\s*:\s*('[^']+'|\"[^\"]+\")\s*\}/g, '');
  fs.writeFileSync(file, content);
  console.log('Fixed zod enum options in ' + file);
}

removeZodOptions('src/app/admin/etiquetas/actions.ts');
removeZodOptions('src/app/ordenes/actions.ts');
removeZodOptions('src/components/admin/AddPostForm.tsx');
removeZodOptions('src/components/admin/etiquetas/EtiquetaForm.tsx');
