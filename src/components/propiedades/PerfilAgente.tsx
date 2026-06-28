'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, Mail, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface Agente {
  id: string;
  nombre: string;
  rol: string;
  telefono: string;
  email: string;
  imagen: string;
  destacado: boolean;
}

interface PerfilAgenteProps {
  agente: Agente;
}

export function PerfilAgente({ agente }: PerfilAgenteProps) {
  return (
    <div className="group relative flex flex-col sm:flex-row bg-white/10 backdrop-blur-md border border-white/20 rounded-none overflow-hidden shadow-crate hover:border-secondary transition-all duration-300 p-6 gap-6 items-center sm:items-stretch">
      {/* Agent Photo Container */}
      <div className="relative w-32 h-32 sm:w-40 sm:h-auto min-h-[160px] bg-primary/20 shrink-0 border border-white/10 rounded-none overflow-hidden">
        <Image 
          src={agente.imagen} 
          alt={agente.nombre} 
          fill 
          sizes="(max-width: 768px) 128px, 160px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {agente.destacado && (
          <div className="absolute bottom-0 inset-x-0 bg-secondary text-primary font-subtitle font-bold text-center text-xs py-1 tracking-wider uppercase">
            Top Asesor
          </div>
        )}
      </div>

      {/* Agent Info */}
      <div className="flex-grow flex flex-col justify-between text-center sm:text-left bg-transparent">
        <div>
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
            <h4 className="text-2xl font-black text-white font-title uppercase tracking-wide">
              {agente.nombre}
            </h4>
            {agente.destacado && (
              <span className="inline-flex items-center justify-center gap-1 text-secondary text-sm font-subtitle font-bold uppercase tracking-wider">
                <Award className="w-4 h-4 text-secondary shrink-0" />
                Agente Oficial
              </span>
            )}
          </div>

          {/* Role - Bebas Neue */}
          <span className="text-secondary font-subtitle font-bold text-lg tracking-wider block mb-4 uppercase">
            {agente.rol}
          </span>

          {/* Contact Methods - Inter */}
          <div className="space-y-2 text-white/80 font-body text-base max-w-md mx-auto sm:mx-0">
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <Phone className="w-4 h-4 text-secondary shrink-0" />
              <span>{agente.telefono}</span>
            </div>
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <Mail className="w-4 h-4 text-secondary shrink-0" />
              <span className="truncate">{agente.email}</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <Button 
            asChild
            className="bg-secondary hover:bg-secondary/90 text-primary font-subtitle font-black tracking-wider uppercase rounded-none border border-secondary transition-all duration-300 px-6 text-base h-10 w-full sm:w-auto"
          >
            <a href={`https://wa.me/${agente.telefono.replace(/[^0-9]/g, '')}?text=Hola%20${encodeURIComponent(agente.nombre)},%20quiero%20hacerte%20una%20consulta%20por%20una%20propiedad`} target="_blank" rel="noopener noreferrer">
              Chateá con {agente.nombre.split(' ')[0]}
            </a>
          </Button>
          <Button 
            variant="outline"
            className="border-white/20 hover:border-white/50 text-white font-subtitle font-bold tracking-wider uppercase rounded-none transition-all duration-300 px-6 text-base h-10 w-full sm:w-auto hover:bg-white/5"
          >
            Escribile un mail
          </Button>
        </div>
      </div>
    </div>
  );
}
