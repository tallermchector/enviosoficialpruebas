'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Home } from 'lucide-react';
import { TarjetaPropiedad, Propiedad } from '@/components/propiedades/TarjetaPropiedad';
import { Button } from '@/components/ui/button';

const propiedadesPreviewMock: Propiedad[] = [
  {
    id: 'prop-1',
    titulo: 'Chalet Clásico Stella Maris',
    precio: 'U$S 180.000',
    ubicacion: 'Stella Maris, Mar del Plata',
    habitaciones: 4,
    baños: 2,
    metros: 180,
    imagen: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80',
    tipo: 'Venta',
  },
  {
    id: 'prop-2',
    titulo: 'Departamento Vista al Mar Playa Grande',
    precio: 'U$S 135.000',
    ubicacion: 'Playa Grande, Mar del Plata',
    habitaciones: 2,
    baños: 1,
    metros: 65,
    imagen: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80',
    tipo: 'Venta',
  },
];

export function PropertiesPreviewSection() {
  return (
    <section className="py-20 px-4 bg-primary text-white border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/10 text-secondary text-xxs font-black tracking-[0.2em] mb-4 uppercase font-subtitle">
              <Home className="w-3.5 h-3.5 text-secondary shrink-0" />
              Novedades MDP
            </div>
            {/* Title - Anton Font, Uppercase */}
            <h2 className="text-3xl md:text-5xl font-black font-title uppercase tracking-wide leading-none text-white">
              PROPIEDADES DESTACADAS
            </h2>
          </div>
          
          <Button 
            asChild
            className="bg-secondary hover:bg-secondary/90 text-primary font-subtitle font-black tracking-wider uppercase rounded-none border border-secondary transition-all duration-300 px-6 text-base h-12"
          >
            <Link href="/propiedades" className="flex items-center gap-2">
              Ver Todas las Propiedades
              <ArrowRight className="w-5 h-5 shrink-0" />
            </Link>
          </Button>
        </div>

        {/* 2-column grid for preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {propiedadesPreviewMock.map((propiedad) => (
            <TarjetaPropiedad key={propiedad.id} propiedad={propiedad} />
          ))}
        </div>
      </div>
    </section>
  );
}
