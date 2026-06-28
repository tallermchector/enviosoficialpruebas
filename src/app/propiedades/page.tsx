import type { Metadata } from 'next';
import { OptimizedHeader } from '@/components/homenew/optimized-header';
import { CarruselRedes } from '@/components/homenew/carrusel-redes';
import { Footer } from '@/components/homenew/footer';
import { TarjetaPropiedad, Propiedad } from '@/components/propiedades/TarjetaPropiedad';
import { PerfilAgente, Agente } from '@/components/propiedades/PerfilAgente';
import { FormularioContacto } from '@/components/propiedades/FormularioContacto';
import { Home, Phone, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Propiedades MDP | Alquiler y Venta con Envíos DosRuedas',
  description: 'Portal de propiedades seleccionadas en Mar del Plata. Encontrá tu próximo hogar o local comercial y gestioná la logística de entrega de llaves y contratos con Envíos DosRuedas.',
  alternates: { canonical: 'https://www.enviosdosruedas.com/propiedades' },
  openGraph: {
    title: 'Propiedades MDP | Alquiler y Venta con Envíos DosRuedas',
    description: 'Portal de propiedades seleccionadas en Mar del Plata. Encontrá tu próximo hogar o local comercial.',
    url: 'https://www.enviosdosruedas.com/propiedades',
    images: [{ url: '/og-image.jpg' }],
  },
};

const propiedadesMock: Propiedad[] = [
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
  {
    id: 'prop-3',
    titulo: 'Local Comercial Zona Güemes',
    precio: '$ 450.000 / mes',
    ubicacion: 'Zona Güemes, Mar del Plata',
    habitaciones: 3,
    baños: 2,
    metros: 110,
    imagen: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
    tipo: 'Alquiler',
  },
  {
    id: 'prop-4',
    titulo: 'PH Moderno Completo La Perla',
    precio: 'U$S 88.000',
    ubicacion: 'La Perla, Mar del Plata',
    habitaciones: 3,
    baños: 1,
    metros: 85,
    imagen: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
    tipo: 'Venta',
  },
];

const agentesMock: Agente[] = [
  {
    id: 'agent-1',
    nombre: 'Juan Carlos Pérez',
    rol: 'Director de Ventas y Negocios',
    telefono: '+54 223 660 2699',
    email: 'contacto@enviosdosruedas.com',
    imagen: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    destacado: true,
  },
  {
    id: 'agent-2',
    nombre: 'María Luz Domínguez',
    rol: 'Asesora Residencial Playa Grande',
    telefono: '+54 223 555 1234',
    email: 'marialuz@enviosdosruedas.com',
    imagen: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    destacado: false,
  },
];

export default function PropiedadesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-primary text-white selection:bg-secondary/30">
      <OptimizedHeader />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-primary text-center overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#0636A5,transparent_60%)] opacity-50" />
          <div className="container mx-auto max-w-4xl relative z-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-none bg-white/[0.03] backdrop-blur-md border border-white/10 text-secondary text-xxs font-black tracking-[0.3em] mb-6 uppercase font-subtitle">
              <Home className="w-4 h-4 text-secondary shrink-0" />
              Portal Inmobiliario
            </div>
            
            {/* Title - Anton Font, Uppercase */}
            <h1 className="text-4xl md:text-6xl font-black font-title uppercase tracking-wider mb-6 text-white leading-none">
              Elegí tu próximo hogar
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-body max-w-2xl mx-auto leading-relaxed">
              Encontrá propiedades destacadas en Mar del Plata. Con Envíos DosRuedas te aseguramos el envío rápido y seguro de llaves, contratos y documentación directamente a tu puerta.
            </p>
            <div className="w-24 h-1.5 bg-secondary mx-auto mt-8 rounded-none"></div>
          </div>
        </section>

        {/* Properties Grid Section */}
        <section className="py-16 px-4 bg-primary">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black font-title uppercase tracking-wide text-white mb-4">
                PROPIEDADES DESTACADAS
              </h2>
              <p className="text-white/70 font-body text-base max-w-xl mx-auto">
                Selección exclusiva de inmuebles disponibles en los mejores barrios de la ciudad de Mar del Plata.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {propiedadesMock.map((propiedad) => (
                <TarjetaPropiedad key={propiedad.id} propiedad={propiedad} />
              ))}
            </div>
          </div>
        </section>

        {/* Agents Section */}
        <section className="py-16 px-4 bg-primary/95 border-y border-white/10">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black font-title uppercase tracking-wide text-white mb-4">
                NUESTROS ASESORES
              </h2>
              <p className="text-white/70 font-body text-base max-w-xl mx-auto">
                Ponete en contacto con nuestro equipo oficial para coordinar visitas y resolver tus dudas al instante.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {agentesMock.map((agente) => (
                <PerfilAgente key={agente.id} agente={agente} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 px-4 bg-primary">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              
              {/* Contact Info Block */}
              <div className="lg:col-span-5 flex flex-col justify-between p-8 bg-white/5 border border-white/15 rounded-none shadow-crate">
                <div>
                  <h3 className="text-3xl font-black font-title uppercase tracking-wide mb-6 text-white">
                    ¿TENÉS DUDAS?
                  </h3>
                  <p className="text-white/80 font-body text-base leading-relaxed mb-8">
                    Escribinos o visítanos en nuestras oficinas comerciales. Gestionamos todos los traslados de documentación con seguridad y confidencialidad absoluta.
                  </p>

                  <div className="space-y-5 text-white/80 font-body">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-secondary shrink-0 mt-1" />
                      <div>
                        <strong className="block text-white font-subtitle font-bold text-lg uppercase tracking-wider">Dirección</strong>
                        <span>Friuli 1972, Mar del Plata, Argentina</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Phone className="w-5 h-5 text-secondary shrink-0 mt-1" />
                      <div>
                        <strong className="block text-white font-subtitle font-bold text-lg uppercase tracking-wider">Teléfono de Atención</strong>
                        <span>+54 223 660 2699</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Clock className="w-5 h-5 text-secondary shrink-0 mt-1" />
                      <div>
                        <strong className="block text-white font-subtitle font-bold text-lg uppercase tracking-wider">Horario de Servicio</strong>
                        <span>Lunes a Viernes: 8 a 18 hs | Sábados: 9 a 15 hs</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6 mt-8">
                  <span className="text-secondary font-subtitle font-bold tracking-wider text-lg uppercase">
                    Envíos DosRuedas Pro
                  </span>
                </div>
              </div>

              {/* Form Block */}
              <div className="lg:col-span-7 bg-white p-0.5 rounded-none">
                <FormularioContacto />
              </div>

            </div>
          </div>
        </section>
      </main>

      <CarruselRedes />
      <Footer />
    </div>
  );
}
