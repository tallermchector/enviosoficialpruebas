// src/app/admin/crea-imagenes/optimas/page.tsx
import { AdminHeader } from "@/components/layout/AdminHeader";
import { Footer } from "@/components/homenew/footer";
import { OptimalImagePromptGenerator } from "@/components/admin/crea-imagenes/OptimalImagePromptGenerator";
import { Sparkles } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Generador de Imágenes Óptimas",
  description: "Herramienta avanzada con múltiples sugerencias de IA para crear imágenes contextualizadas.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CreaImagenesOptimasPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <AdminHeader />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
         <Card className="max-w-4xl mx-auto mb-8 bg-background shadow-lg">
            <CardHeader className="text-center">
                <div className="flex items-center justify-center gap-3">
                    <Sparkles className="w-7 h-7 text-primary" />
                    <CardTitle className="text-2xl sm:text-3xl font-bold text-primary">
                       Generador de Imágenes Óptimas
                    </CardTitle>
                </div>
                 <CardDescription>
                    Una herramienta de IA que te ofrece múltiples ideas para conceptualizar la imagen perfecta para cada servicio.
                </CardDescription>
            </CardHeader>
        </Card>
        <OptimalImagePromptGenerator />
      </main>
      <Footer />
    </div>
  );
}
