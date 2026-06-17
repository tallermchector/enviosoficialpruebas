// src/components/repartidor/AssignEtiqueta.tsx
'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { assignEtiquetaByOrderNumber } from '@/app/admin/repartidores/actions';
import type { FormattedEtiqueta } from '@/types';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Loader2, Search, Camera } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { BarcodeScanner } from './BarcodeScanner';

interface AssignEtiquetaProps {
  repartidorId: number;
  onEtiquetaAssigned: (etiqueta: FormattedEtiqueta) => void;
}

const assignSchema = z.object({
  orderNumber: z.string().min(3, { message: 'El número de orden es requerido.' }),
});

type AssignFormValues = z.infer<typeof assignSchema>;

export function AssignEtiqueta({ repartidorId, onEtiquetaAssigned }: AssignEtiquetaProps) {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const [isScannerOpen, setIsScannerOpen] = useState(false);

  const form = useForm<AssignFormValues>({
    resolver: zodResolver(assignSchema),
    defaultValues: { orderNumber: '' },
  });

  const onSubmit = (data: AssignFormValues) => {
    startTransition(async () => {
      const result = await assignEtiquetaByOrderNumber(repartidorId, data.orderNumber);

      if (result.success && result.etiqueta) {
        onEtiquetaAssigned(result.etiqueta);
        form.reset();
      } else {
        toast({
          title: 'Error al Asignar',
          description: result.error || 'No se pudo asignar la etiqueta.',
          variant: 'destructive',
        });
      }
    });
  };
  
  const handleBarcodeScanned = (barcode: string) => {
    if (barcode) {
        form.setValue('orderNumber', barcode);
        setIsScannerOpen(false);
        // Automatically submit the form after scanning
        form.handleSubmit(onSubmit)();
    }
  };

  return (
    <>
      <div className="p-4 bg-surface">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="orderNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs uppercase tracking-widest text-gray-400 font-bold">Número de Orden</FormLabel>
                    <div className="flex gap-2">
                      <FormControl>
                        <Input
                            placeholder="EXP-1722..."
                            className="h-14 bg-background border-white/10 rounded-md text-white focus:ring-[#2563EB]"
                            {...field}
                        />
                      </FormControl>
                      <Button
                        type="button"
                        variant="outline"
                        className="h-14 w-14 rounded-md border-white/10 bg-surface text-white hover:bg-primary/80"
                        onClick={() => setIsScannerOpen(true)}
                        title="Escanear Código de Barras"
                      >
                        <Camera className="h-6 w-6" />
                      </Button>
                    </div>
                    <FormMessage className="text-destructive text-xs" />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full h-14 rounded-md bg-[#2563EB] hover:bg-[#1e40af] text-white font-bold text-lg"
                disabled={isPending}
              >
                {isPending ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Search className="mr-2 h-5 w-5" />}
                {isPending ? 'BUSCANDO...' : 'ASIGNAR A MI RUTA'}
              </Button>
            </form>
          </Form>
      </div>
      
      <Dialog open={isScannerOpen} onOpenChange={setIsScannerOpen}>
        <DialogContent className="sm:max-w-[425px] bg-surface border-white/10 rounded-md text-white p-0 overflow-hidden">
          <DialogHeader className="p-6 border-b border-white/10">
            <DialogTitle className="font-display uppercase tracking-wider text-xl">Escáner de Barras</DialogTitle>
            <DialogDescription className="text-gray-400">
              Alineá el código de barras dentro del recuadro para escanear automáticamente.
            </DialogDescription>
          </DialogHeader>
          <div className="p-4">
             <BarcodeScanner onScan={handleBarcodeScanned} />
          </div>
          <div className="p-4 bg-background flex justify-end">
              <Button variant="ghost" className="rounded-md text-gray-400 hover:text-white" onClick={() => setIsScannerOpen(false)}>
                  CANCELAR
              </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
