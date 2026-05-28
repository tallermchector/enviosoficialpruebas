// src/app/admin/crea-imagenes/page.tsx
import { AdminHeader } from "@/components/layout/AdminHeader";
import { Footer } from "@/components/homenew/footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ImageIcon, ArrowRight, Truck, Sparkles, Palette, View, FileCode } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Herramientas de Creación de Imágenes",
  description: "Selecciona una herramienta de IA para generar imágenes para tu marca.",
  robots: {
    index: false,
    follow: false,
  },
};

const tools = [
    {
        href: "/admin/crea-imagenes/generales",
        icon: ImageIcon,
        title: "Imágenes Generales",
        description: "Generador de prompts para imágenes de marca, banners y contenido general."
    },
    {
        href: "/admin/crea-imagenes/servicios",
        icon: Truck,
        title: "Imágenes de Servicios",
        description: "Generador inteligente de imágenes específicas para cada servicio de la empresa."
    },
    {
        href: "/admin/crea-imagenes/optimas",
        icon: Sparkles,
        title: "Imágenes Óptimas",
        description: "Herramienta avanzada que ofrece múltiples sugerencias de IA para crear la imagen perfecta."
    },
    {
        href: "/admin/crea-imagenes/hero",
        icon: View,
        title: "Refactor de Hero",
        description: "Genera prompts para solicitar la estandarización de los componentes Hero del sitio."
    },
    {
        href: "/admin/crea-imagenes/ui-optimizer",
        icon: Palette,
        title: "Optimizador UI (Páginas)",
        description: "Analiza páginas completas o componentes principales para sugerir mejoras de UI/UX."
    },
    {
        href: "/admin/crea-imagenes/ui-optimizer/componentes",
        icon: FileCode,
        title: "Optimizador de Componentes",
        description: "Selecciona componentes específicos de una página para una refactorización detallada."
    }
];

export default function CreaImagenesDashboardPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <AdminHeader />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
         <Card className="max-w-4xl mx-auto mb-8 bg-background shadow-lg">
            <CardHeader className="text-center">
                <div className="flex items-center justify-center gap-3">
                    <ImageIcon className="w-7 h-7 text-primary" />
                    <CardTitle className="text-2xl sm:text-3xl font-bold text-primary">
                       Herramientas de Creación con IA
                    </CardTitle>
                </div>
                 <CardDescription>
                    Selecciona una categoría para empezar a generar contenido con IA.
                </CardDescription>
            </CardHeader>
        </Card>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map(tool => {
                const Icon = tool.icon;
                return (
                    <Link href={tool.href} key={tool.title} className="group block h-full">
                        <Card className="h-full flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
                            <CardHeader>
                                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/15 transition-colors">
                                    <Icon className="w-7 h-7 text-primary transition-transform duration-300 group-hover:scale-110" />
                                </div>
                                <CardTitle className="text-xl font-bold text-foreground">
                                    {tool.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <CardDescription className="leading-relaxed">
                                    {tool.description}
                                </CardDescription>
                            </CardContent>
                             <CardFooter>
                                <div className="flex items-center text-sm font-semibold text-primary group-hover:text-secondary transition-colors">
                                    Acceder a la herramienta
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </div>
                            </CardFooter>
                        </Card>
                    </Link>
                );
            })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
