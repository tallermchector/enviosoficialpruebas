
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, Loader2, Package, ThumbsUp } from 'lucide-react';
import React, { useState, FormEvent, useMemo } from 'react';
import RouteMap from './route-map';
import { AddressAutocomplete } from './address-autocomplete';
import { useToast } from '@/hooks/use-toast';
import { quoteShipment } from '@/app/cotizar/actions';
import { ServiceTypeEnum } from '@prisma/client';
import type { QuoteDetails } from '@/types/order-actions';


export default function LowCostCalculator() {
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
      serviceType: ServiceTypeEnum.LOW_COST,
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
    <section data-style="soft-ui" className="bg-[var(--bg-base)] w-full py-12 md:py-16 bg-background font-body">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl lg:max-w-3xl">
        <Card className="glassmorphism border border-primary/20 shadow-crate rounded-none overflow-hidden bg-white">
          <CardHeader className="pt-8">
            <CardTitle className="text-headline-lg text-primary font-title uppercase">Calculá tu Envío Low Cost</CardTitle>
            <CardDescription className="font-body text-body-md mt-1 text-primary/70">
              Ingresá las direcciones de origen y destino para obtener una cotización para envíos programados.
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
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
              <div className="space-y-2">
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
                    Calcular Ruta y Precio Low Cost
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
              <Card className="mt-8 bg-primary/10 border border-primary/20 rounded-none overflow-hidden backdrop-blur-sm shadow-crate">
                <CardHeader className="pb-4">
                  <CardTitle className="text-headline-lg-mobile text-primary flex items-center font-title uppercase tracking-tight">
                    <Package className="mr-3 h-7 w-7" />
                    Tu Cotización Low Cost
                  </CardTitle>
                  <CardDescription className="text-body-sm font-body text-primary/70 mt-1">
                    Basado en la distancia y tiempo estimados para tu envío económico.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-body-md font-body text-primary/80">
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
                      La distancia excede nuestros rangos de precios estándar o no pudo ser calculada. Por favor, contactanos para una cotización personalizada.
                    </p>
                  )}
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row gap-3 pt-4 md:pt-6 font-body">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-primary font-subtitle font-bold uppercase tracking-wider text-lg rounded-none shadow-industrial border-none"
                    disabled={quoteDetails.price === null}
                    onClick={() => alert('Funcionalidad "Confirmar Envío Low Cost" pendiente de implementación.')}
                  >
                    <ThumbsUp className="mr-2 h-5 w-5" />
                    Confirmar Envío Low Cost
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto font-subtitle font-bold uppercase tracking-wider text-lg rounded-none border-primary/20 text-primary hover:bg-primary/5" onClick={handleNewQuote}>
                    <Loader2 className="mr-2 h-5 w-5" />
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
