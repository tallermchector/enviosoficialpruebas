
// src/app/admin/prompts/page.tsx
'use client';

import { useActionState, useEffect, useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';
import { generatePagePromptAction } from '@/app/admin/prompts/actions';
import type { GeneratePagePromptState } from '@/app/admin/prompts/actions';

import { AdminHeader } from "@/components/layout/AdminHeader";
import { Footer } from "@/components/homenew/footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2, Wand2, Sparkles, Copy, Check, FileText } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Label } from '@/components/ui/label';

const availablePages = [
  'Página de Inicio',
  'Página de Contacto',
  'Página de Servicios',
  'Página Sobre Nosotros',
  'Página de Preguntas Frecuentes',
];

const promptGeneratorSchema = z.object({
  pageName: z.string().min(1, 'Debes seleccionar una página.'),
});

type PromptGeneratorFormValues = z.infer<typeof promptGeneratorSchema>;

const initialState: GeneratePagePromptState = {};

function SubmitButton({ isPending }: { isPending: boolean }) {
  return (
    <Button type="submit" disabled={isPending} className="w-full">
      {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
      {isPending ? 'Generando Prompt...' : 'Generar Prompt Maestro'}
    </Button>
  );
}

export default function PromptsPage() {
  const [state, formAction] = useActionState(generatePagePromptAction, initialState);
  const [isPending, startTransition] = useTransition();
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const form = useForm<PromptGeneratorFormValues>({
    resolver: zodResolver(promptGeneratorSchema),
    defaultValues: { pageName: '' },
  });

  useEffect(() => {
    if (state.error) {
      toast({
        title: 'Error al Generar',
        description: state.error,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  const handleFormSubmit = form.handleSubmit((data) => {
    const formData = new FormData();
    formData.append('pageName', data.pageName);
    startTransition(() => formAction(formData));
  });

  const handleCopy = () => {
    if (state.prompt) {
      navigator.clipboard.writeText(state.prompt);
      setCopied(true);
      toast({ title: 'Copiado', description: 'El prompt se ha copiado al portapapeles.' });
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <AdminHeader />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <Card className="max-w-4xl mx-auto mb-8 bg-background shadow-lg">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-3">
              <FileText className="w-7 h-7 text-primary" />
              <CardTitle className="text-2xl sm:text-3xl font-bold text-primary">
                Generador de Prompts de Página
              </CardTitle>
            </div>
            <CardDescription>
              Crea prompts detallados para reconstruir páginas completas de tu aplicación con IA.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="max-w-4xl mx-auto shadow-lg">
          <Form {...form}>
            <form onSubmit={handleFormSubmit}>
              <CardContent className="p-6 space-y-6">
                <FormField
                  control={form.control}
                  name="pageName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Página a Replicar</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona una página para generar su prompt..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {availablePages.map(page => (
                            <SelectItem key={page} value={page}>{page}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter className="flex flex-col gap-4 p-6 pt-0">
                <SubmitButton isPending={isPending} />
                {state.prompt && (
                   <div className="w-full space-y-2">
                    <Label htmlFor="prompt-output">Prompt Generado</Label>
                    <div className="relative">
                        <Textarea
                            id="prompt-output"
                            readOnly
                            value={state.prompt}
                            className="w-full h-96 font-mono text-sm bg-muted"
                        />
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-2 right-2 h-8 w-8 text-muted-foreground hover:bg-background"
                            onClick={handleCopy}
                            type="button"
                            >
                            {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                        </Button>
                    </div>
                  </div>
                )}
              </CardFooter>
            </form>
          </Form>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
