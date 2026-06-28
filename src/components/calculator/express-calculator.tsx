
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, Loader2, PackageCheck, RotateCcw, ThumbsUp } from 'lucide-react';
import React, { useState, FormEvent, useMemo } from 'react';
import RouteMap from './route-map';
import { AddressAutocomplete } from './address-autocomplete';
import { useToast } from '@/hooks/use-toast';
import { quoteShipment } from '@/app/ordenes/actions';
import { ServiceTypeEnum } from '../../../generated/prisma/client/client';
import type { QuoteDetails } from '@/types/order-actions';


export default function ExpressCalculator() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [quoteDetails, setQuoteDetails] = useState<QuoteDetails | null>(null);
  
  const { toast } = useToast();

  const mapCoordinates = useMemo(() => {
    if (!quoteDetails) return null;
    return {
      origin: { lat: quoteDetails.originLat, lng: quoteDetails.originLng },
      destination: { lat: quoteDetails.destinationLat, lng: quoteDetails.destinationLng },
    };
  }, [quoteDetails]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!origin.trim() || !destination.trim()) {
      toast({
        variant: "destructive",
        title: "Campos incompletos",
        description: "Por favor, ingresa la dirección de origen y destino.",
      });
      return;
    }
    setIsCalculating(true);
    setQuoteDetails(null);
    
    const result = await quoteShipment({
        originAddress: origin,
        destinationAddress: destination,
        serviceType: ServiceTypeEnum.EXPRESS,
    });

    setIsCalculating(false);

    if (result.success && result.data) {
        setQuoteDetails(result.data);
        const priceText = result.data.price !== null ? `$${result.data.price.toLocaleString('es-AR')}` : "Consultar";
        toast({
            title: "Cotización Exitosa",
            description: `Distancia: ${result.data.distanceText}. Precio: ${priceText}`,
            variant: "default",
        });
    } else {
        toast({
            variant: "destructive",
            title: "Error de Cálculo",
            description: result.error || "No se pudo calcular la ruta o el precio. Verifica las direcciones o inténtalo más tarde.",
        });
    }
  };

  const handleNewQuote = () => {
    setOrigin('');
    setDestination('');
    setQuoteDetails(null);
    setIsCalculating(false);
  };

  return (
    <section className="w-full py-12 md:py-16 bg-background font-body">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl lg:max-w-3xl">
        <Card className="glassmorphism border border-primary/20 shadow-crate rounded-none overflow-hidden bg-white">
          <CardHeader className="pt-8">
            <CardTitle className="text-headline-lg text-primary font-title uppercase">Calculá tu Envío Express</CardTitle>
            <CardDescription className="text-body-md mt-1 font-body text-primary/70">
              Ingresá las direcciones de origen y destino para obtener una cotización instantánea.
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-8">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="space-y-1.5">
                <Label htmlFor="origin" className="text-label-md font-body text-primary/80">Dirección de Origen</Label>
                <AddressAutocomplete
                  id="origin"
                  placeholder="Ej: Av. Colón 1234, Mar del Plata"
                  value={origin}
                  onChange={setOrigin}
                  required
                  className="text-body-md font-body bg-white border-primary/20 text-primary rounded-none focus-visible:ring-2 focus-visible:ring-secondary/20 hover:border-primary/50"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="destination" className="text-label-md font-body text-primary/80">Dirección de Destino</Label>
                <AddressAutocomplete
                  id="destination"
                  placeholder="Ej: Juan B. Justo 5678, Mar del Plata"
                  value={destination}
                  onChange={setDestination}
                  required
                  className="text-body-md font-body bg-white border-primary/20 text-primary rounded-none focus-visible:ring-2 focus-visible:ring-secondary/20 hover:border-primary/50"
                />
              </div>
              <Button type="submit" className="w-full text-lg py-6 font-subtitle uppercase tracking-wider rounded-none bg-secondary hover:bg-secondary/90 text-primary shadow-industrial border-none" size="lg" disabled={isCalculating}>
                {isCalculating ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Calculando...
                  </>
                ) : (
                  <>
                    <Calculator className="mr-2 h-5 w-5" />
                    Calcular Ruta y Precio Express
                  </>
                )}
              </Button>
            </form>

            {mapCoordinates && (
              <RouteMap
                origin={mapCoordinates.origin}
                destination={mapCoordinates.destination}
              />
            )}
            
            {quoteDetails && !isCalculating && (
              <Card className="mt-6 md:mt-8 bg-primary/10 border border-primary/20 rounded-none overflow-hidden backdrop-blur-sm shadow-crate">
                <CardHeader className="pb-4">
                  <CardTitle className="text-headline-lg-mobile text-primary flex items-center font-title uppercase tracking-tight">
                    <PackageCheck className="mr-2 md:mr-3 h-6 w-6 md:h-7 md:w-7" />
                    Tu Cotización Express
                  </CardTitle>
                  <CardDescription className="text-body-sm mt-1 font-body text-primary/70">
                    Basado en la distancia y tiempo estimados para tu envío.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-body-md font-body text-primary/80">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-primary">Distancia:</span>
                    <span className="text-primary">{quoteDetails.distanceText || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-primary">Tiempo Estimado:</span>
                    <span className="text-primary">{quoteDetails.durationText || 'N/A'}</span>
                  </div>
                  <hr className="my-2 border-primary/10" />
                  <div className="flex justify-between items-center mt-4">
                    <span className="font-bold text-headline-lg text-primary font-title uppercase tracking-tight">Precio Estimado:</span>
                    {quoteDetails.price !== null ? (
                      <span className="text-headline-lg font-black text-primary font-title italic">${quoteDetails.price.toLocaleString('es-AR')}</span>
                    ) : (
                      <span className="text-headline-lg font-black text-primary font-title italic">Consultar</span>
                    )}
                  </div>
                  {quoteDetails.price === null && (
                    <p className="text-label-sm text-primary text-center pt-2 font-body">
                      La distancia excede los rangos estándar o no pudo ser calculada. Contactanos para cotización.
                    </p>
                  )}
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row gap-3 pt-4 md:pt-6">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-primary font-subtitle font-bold uppercase tracking-wider text-lg rounded-none shadow-industrial border-none"
                    disabled={quoteDetails.price === null}
                    onClick={() => alert('Funcionalidad "Confirmar Envío" pendiente de implementación.')}
                  >
                    <ThumbsUp className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Confirmar Envío Express
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto font-subtitle font-bold uppercase tracking-wider text-lg rounded-none border-primary/20 text-primary hover:bg-primary/5" onClick={handleNewQuote}>
                    <RotateCcw className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Nueva Cotización
                  </Button>
                </CardFooter>
              </Card>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
