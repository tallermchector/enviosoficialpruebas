import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Nueva Experiencia | Envíos DosRuedas",
  description: "Descubrí la nueva interfaz y servicios express de Envíos DosRuedas en Mar del Plata.",
};

export default function NuevaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-variant="industrial" className="min-h-screen bg-white text-primary font-body antialiased relative overflow-x-hidden">
      {children}
    </div>
  );
}
