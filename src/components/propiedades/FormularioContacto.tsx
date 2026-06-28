'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FormularioContacto() {
  const [enviado, setEnviado] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API submission
    setTimeout(() => {
      setEnviado(true);
    }, 800);
  };

  if (enviado) {
    return (
      <div className="bg-green-50 border border-green-300 p-8 text-center rounded-none shadow-crate">
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h4 className="text-2xl font-bold text-green-700 font-title uppercase mb-2">¡Consulta Recibida!</h4>
        <p className="text-green-600 font-body text-base mb-4">
          Muchas gracias, <strong>{formData.nombre}</strong>. En breve uno de nuestros asesores de Envíos DosRuedas se pondrá en contacto con vos.
        </p>
        <Button 
          onClick={() => { setEnviado(false); setFormData({ nombre: '', email: '', telefono: '', mensaje: '' }); }}
          className="bg-primary hover:bg-primary/95 text-white font-subtitle font-bold tracking-wider uppercase rounded-none border border-primary text-base px-6 h-10"
        >
          Enviar otra consulta
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-white border border-primary/20 p-6 sm:p-8 rounded-none shadow-crate text-primary">
      <h3 className="text-2xl font-black text-primary font-title uppercase tracking-wide mb-2">
        Escribinos tu consulta
      </h3>
      <p className="text-primary/70 text-sm font-body mb-6 leading-relaxed">
        Contanos qué estás buscando y te asesoramos para elegir tu próximo hogar o local en Mar del Plata.
      </p>

      {/* Nombre */}
      <div className="flex flex-col">
        <label htmlFor="nombre" className="text-label-md font-bold uppercase text-primary/80 mb-2 font-body">
          Nombre y Apellido *
        </label>
        <input
          required
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Ingresá tu nombre"
          className="h-11 px-4 text-base bg-white border border-primary/30 hover:border-primary/50 focus:border-secondary focus:ring-2 focus:ring-secondary/20 text-primary rounded-none transition-all duration-300 font-body outline-none"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label htmlFor="email" className="text-label-md font-bold uppercase text-primary/80 mb-2 font-body">
          Email de Contacto *
        </label>
        <input
          required
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="tu@email.com"
          className="h-11 px-4 text-base bg-white border border-primary/30 hover:border-primary/50 focus:border-secondary focus:ring-2 focus:ring-secondary/20 text-primary rounded-none transition-all duration-300 font-body outline-none"
        />
      </div>

      {/* Telefono */}
      <div className="flex flex-col">
        <label htmlFor="telefono" className="text-label-md font-bold uppercase text-primary/80 mb-2 font-body">
          Tu Teléfono *
        </label>
        <input
          required
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          placeholder="Ej: 223 660 2699"
          className="h-11 px-4 text-base bg-white border border-primary/30 hover:border-primary/50 focus:border-secondary focus:ring-2 focus:ring-secondary/20 text-primary rounded-none transition-all duration-300 font-body outline-none"
        />
      </div>

      {/* Mensaje */}
      <div className="flex flex-col">
        <label htmlFor="mensaje" className="text-label-md font-bold uppercase text-primary/80 mb-2 font-body">
          Tu Consulta / Requisitos *
        </label>
        <textarea
          required
          id="mensaje"
          name="mensaje"
          rows={4}
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Contanos sobre tu consulta..."
          className="p-4 text-base bg-white border border-primary/30 hover:border-primary/50 focus:border-secondary focus:ring-2 focus:ring-secondary/20 text-primary rounded-none transition-all duration-300 font-body outline-none"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button 
          type="submit" 
          className="w-full bg-secondary hover:bg-secondary/90 text-primary py-4 uppercase font-subtitle font-black tracking-wider rounded-none transition-all duration-300 transform active:scale-95 text-lg h-auto border-none"
        >
          <Send className="mr-2 h-5 w-5" />
          Ponete en contacto
        </Button>
      </div>
    </form>
  );
}
