// src/app/admin/prompts/page.tsx
'use client';

import { useActionState, useEffect, useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';
import { generatePagePromptAction, generateComponentPromptAction } from '@/app/admin/prompts/actions';
import type { GeneratePagePromptState, GenerateComponentPromptState } from '@/app/admin/prompts/actions';

import { AdminHeader } from "@/components/layout/AdminHeader";
import { Footer } from "@/components/homenew/footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, Wand2, Copy, Check, FileText, Component } from 'lucide-react';
import { Label } from '@/components/ui/label';

import { navGroups } from '@/lib/navigation';
import { adminNavItems } from '@/lib/navigation-admin';
import { pageComponentMap } from '@/lib/page-components';

// Helper para procesar la navegación principal
const mainSitePages = navGroups.map(group => ({
  label: group.label,
  pages: group.items.map(item => ({ value: item.label, label: item.label }))
}));

// Helper para procesar la navegación de admin
const adminSitePages = adminNavItems.flatMap(item => 'href' in item ? { label: 'Admin', pages: [{ value: item.label, label: item.label }] } : {
      label: `Admin: ${item.label}`,
      pages: item.items.map(subItem => ({ value: subItem.label, label: subItem.label }))
    }
).reduce((acc, group) => {
    const existingGroup = acc.find(g => g.label === group.label);
    if (existingGroup) {
        existingGroup.pages.push(...group.pages);
    } else {
        acc.push(group);
    }
    return acc;
}, [] as { label: string; pages: { value: string; label: string }[] }[]);

const allPagesForSelection = [...mainSitePages, ...adminSitePages];

// --- Page Prompt Form ---
const pagePromptSchema = z.object({ pageName: z.string().min(1, 'Debes seleccionar una página.') });
type PagePromptFormValues = z.infer<typeof pagePromptSchema>;
const initialPageState: GeneratePagePromptState = {};

// --- Component Prompt Form ---
const componentPromptSchema = z.object({
  pageName: z.string().min(1, 'Debes seleccionar una página.'),
  componentName: z.string().min(1, 'Debes seleccionar un componente.'),
});
type ComponentPromptFormValues = z.infer<typeof componentPromptSchema>;
const initialComponentState: GenerateComponentPromptState = {};


function SubmitButton({ isPending, text = 'Generar' }: { isPending: boolean, text?: string }) {
  return (
    <Button type="submit" disabled={isPending} className="w-full">
      {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
      {isPending ? 'Generando...' : text}
    </Button>
  );
}

function PromptResult({ prompt }: { prompt?: string }) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = () => {
    if (prompt) {
      navigator.clipboard.writeText(prompt);
      setCopied(true);
      toast({ title: 'Copiado', description: 'El prompt se ha copiado al portapapeles.' });
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!prompt) return null;

  return (
    <div className="w-full space-y-2 mt-4">
      <Label htmlFor="prompt-output">Prompt Generado</Label>
      <div className="relative">
        <Textarea
          id="prompt-output"
          readOnly
          value={prompt}
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
  );
}

function PagePromptGenerator() {
  const [state, formAction] = useActionState(generatePagePromptAction, initialPageState);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<PagePromptFormValues>({
    resolver: zodResolver(pagePromptSchema),
    defaultValues: { pageName: '' },
  });

  useEffect(() => {
    if (state.error) toast({ title: 'Error', description: state.error, variant: 'destructive' });
  }, [state, toast]);

  const handleFormSubmit = form.handleSubmit((data) => {
    const formData = new FormData();
    formData.append('pageName', data.pageName);
    startTransition(() => formAction(formData));
  });

  return (
     <Form {...form}>
        <form onSubmit={handleFormSubmit}>
            <CardContent className="space-y-6">
                <FormField control={form.control} name="pageName" render={({ field }) => (
                    <FormItem>
                    <FormLabel>Página a Replicar</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl><SelectTrigger><SelectValue placeholder="Selecciona una página..." /></SelectTrigger></FormControl>
                        <SelectContent>
                            {allPagesForSelection.map(group => (
                                <SelectGroup key={group.label}>
                                    <SelectLabel className="pl-4 text-xs font-semibold text-muted-foreground">{group.label}</SelectLabel>
                                    {group.pages.map(page => <SelectItem key={page.value} value={page.value}>{page.label}</SelectItem>)}
                                </SelectGroup>
                            ))}
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )} />
            </CardContent>
            <CardFooter className="flex flex-col">
                <SubmitButton isPending={isPending} text="Generar Prompt de Página" />
                <PromptResult prompt={state.prompt} />
            </CardFooter>
        </form>
    </Form>
  )
}

function ComponentPromptGenerator() {
  const [state, formAction] = useActionState(generateComponentPromptAction, initialComponentState);
  const [isPending, startTransition] = useTransition();
  const [selectedPage, setSelectedPage] = useState<string>('');
  const { toast } = useToast();

  const form = useForm<ComponentPromptFormValues>({
    resolver: zodResolver(componentPromptSchema),
    defaultValues: { pageName: '', componentName: '' },
  });

  useEffect(() => {
    if (state.error) toast({ title: 'Error', description: state.error, variant: 'destructive' });
  }, [state, toast]);

  const handleFormSubmit = form.handleSubmit((data) => {
    const formData = new FormData();
    formData.append('pageName', data.pageName);
    formData.append('componentName', data.componentName);
    startTransition(() => formAction(formData));
  });

  const availableComponents = pageComponentMap[selectedPage] || [];

  return (
    <Form {...form}>
        <form onSubmit={handleFormSubmit}>
            <CardContent className="space-y-6">
                <FormField control={form.control} name="pageName" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Página</FormLabel>
                        <Select onValueChange={(value) => { field.onChange(value); setSelectedPage(value); form.resetField('componentName'); }} defaultValue={field.value}>
                            <FormControl><SelectTrigger><SelectValue placeholder="Selecciona una página..." /></SelectTrigger></FormControl>
                            <SelectContent>
                                {Object.keys(pageComponentMap).map(page => <SelectItem key={page} value={page}>{page}</SelectItem>)}
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )} />
                 <FormField control={form.control} name="componentName" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Componente</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value} disabled={!selectedPage}>
                            <FormControl><SelectTrigger><SelectValue placeholder="Selecciona un componente..." /></SelectTrigger></FormControl>
                            <SelectContent>
                                {availableComponents.map(component => <SelectItem key={component} value={component}>{component}</SelectItem>)}
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                 )} />
            </CardContent>
            <CardFooter className="flex flex-col">
                <SubmitButton isPending={isPending} text="Generar Prompt de Componente" />
                <PromptResult prompt={state.prompt} />
            </CardFooter>
        </form>
    </Form>
  )
}

export default function PromptsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <AdminHeader />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <Card className="max-w-4xl mx-auto mb-8 bg-background shadow-lg">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-3">
              <FileText className="w-7 h-7 text-primary" />
              <CardTitle className="text-2xl sm:text-3xl font-bold text-primary">Generador de Prompts</CardTitle>
            </div>
            <CardDescription>Crea prompts detallados para reconstruir partes de tu aplicación con IA.</CardDescription>
          </CardHeader>
        </Card>

        <Tabs defaultValue="page" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="page"><FileText className="mr-2 h-4 w-4"/>Prompt por Página</TabsTrigger>
                <TabsTrigger value="component"><Component className="mr-2 h-4 w-4"/>Prompt por Componente</TabsTrigger>
            </TabsList>
            <TabsContent value="page">
                <Card className="shadow-lg">
                    <CardHeader><CardTitle>Generar Prompt para una Página Completa</CardTitle></CardHeader>
                    <PagePromptGenerator />
                </Card>
            </TabsContent>
            <TabsContent value="component">
                 <Card className="shadow-lg">
                    <CardHeader><CardTitle>Generar Prompt para un Componente Específico</CardTitle></CardHeader>
                    <ComponentPromptGenerator />
                </Card>
            </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
}