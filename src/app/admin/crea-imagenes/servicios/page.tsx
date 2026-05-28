// src/app/admin/crea-imagenes/servicios/page.tsx
import { AdminHeader } from "@/components/layout/AdminHeader";
import { Footer } from "@/components/homenew/footer";
import { ServiceImagePromptGenerator } from "@/components/admin/crea-imagenes/ServiceImagePromptGenerator";
import { Wand2, Truck } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Generador de Imágenes para Servicios",
  description: "Herramienta de IA para crear imágenes impactantes y contextualizadas para cada servicio.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CreaImagenesServiciosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <AdminHeader />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
         <Card className="max-w-4xl mx-auto mb-8 bg-background shadow-lg">
            <CardHeader className="text-center">
                <div className="flex items-center justify-center gap-3">
                    <Truck className="w-7 h-7 text-primary" />
                    <CardTitle className="text-2xl sm:text-3xl font-bold text-primary">
                       Generador de Imágenes para Servicios
                    </CardTitle>
                </div>
                 <CardDescription>
                    Crea imágenes impactantes y 100% contextualizadas para promocionar cada servicio. La IA sugiere los detalles por ti.
                </CardDescription>
            </CardHeader>
        </Card>
        <ServiceImagePromptGenerator />
      </main>
      <Footer />
    </div>
  );
}
