'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, BedDouble, Scaling, Bath } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface Propiedad {
  id: string;
  titulo: string;
  precio: string;
  ubicacion: string;
  habitaciones: number;
  baños: number;
  metros: number;
  imagen: string;
  tipo: string;
}

interface TarjetaPropiedadProps {
  propiedad: Propiedad;
}

export function TarjetaPropiedad({ propiedad }: TarjetaPropiedadProps) {
  return (
    <div className="group relative flex flex-col bg-white/10 backdrop-blur-md border border-white/20 rounded-none overflow-hidden shadow-crate hover:border-secondary transition-all duration-300 transform hover:-translate-y-1">
      {/* Aspect Ratio container for Image */}
      <div className="relative w-full h-56 bg-primary/20 shrink-0">
        <Image 
          src={propiedad.imagen} 
          alt={propiedad.titulo} 
          fill 
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-secondary text-primary font-subtitle font-bold text-sm tracking-wider px-3 py-1 uppercase rounded-none">
          {propiedad.tipo}
        </div>
      </div>

      <div className="flex-grow p-6 flex flex-col justify-between bg-primary/60">
        <div>
          {/* Location */}
          <div className="flex items-center text-white/70 text-sm font-body mb-2 gap-1">
            <MapPin className="w-4 h-4 text-secondary shrink-0" />
            <span className="truncate">{propiedad.ubicacion}</span>
          </div>

          {/* Title - Anton Font, Always Uppercase */}
          <h3 className="text-2xl font-black text-white font-title uppercase tracking-wide leading-tight mb-3 line-clamp-2">
            {propiedad.titulo}
          </h3>

          {/* Specs */}
          <div className="grid grid-cols-3 gap-2 border-y border-white/10 py-3 my-4 text-white/80 text-sm font-body">
            <div className="flex items-center gap-1.5 justify-center">
              <BedDouble className="w-4 h-4 text-secondary shrink-0" />
              <span>{propiedad.habitaciones} Amb</span>
            </div>
            <div className="flex items-center gap-1.5 justify-center">
              <Bath className="w-4 h-4 text-secondary shrink-0" />
              <span>{propiedad.baños} {propiedad.baños === 1 ? 'Baño' : 'Baños'}</span>
            </div>
            <div className="flex items-center gap-1.5 justify-center">
              <Scaling className="w-4 h-4 text-secondary shrink-0" />
              <span>{propiedad.metros} m²</span>
            </div>
          </div>
        </div>

        {/* Footer info: Price & CTA */}
        <div className="flex items-center justify-between mt-2 pt-2 gap-2">
          {/* Price - Bebas Neue Font */}
          <span className="text-2xl font-bold text-secondary font-subtitle tracking-wider">
            {propiedad.precio}
          </span>
          <Button 
            className="bg-secondary hover:bg-secondary/90 text-primary font-subtitle font-black tracking-wider uppercase rounded-none border border-secondary transition-all duration-300 px-5 text-base h-10 shrink-0"
          >
            Ver Detalles
          </Button>
        </div>
      </div>
    </div>
  );
}
