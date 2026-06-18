'use client';

import { useState } from 'react';
import type { Repartidor } from '../../../generated/prisma/client/client';
import type { FormattedEtiqueta } from "@/types";
import { EtiquetaStatus } from '@/types';
import { Button } from "@/components/ui/button";
import { Bike, LogOut, Plus, ScanBarcode } from "lucide-react";
import Link from 'next/link';
import { HojaDeRutaRepartidor } from './HojaDeRutaRepartidor';
import { AssignEtiqueta } from './AssignEtiqueta';
import { useToast } from '@/hooks/use-toast';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

interface RepartidorDashboardProps {
    repartidor: Repartidor;
    initialEtiquetas: FormattedEtiqueta[];
}

export function RepartidorDashboard({ repartidor, initialEtiquetas }: RepartidorDashboardProps) {
    const [etiquetas, setEtiquetas] = useState(initialEtiquetas);
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const { toast } = useToast();

    const handleStatusChange = (etiquetaId: number, newStatus: EtiquetaStatus) => {
        setEtiquetas(prev => prev.map(e => e.id === etiquetaId ? { ...e, status: newStatus } : e));
    };

    const handleEtiquetaAssigned = (newEtiqueta: FormattedEtiqueta) => {
        // Add or update the etiqueta in the list
        setEtiquetas(prev => {
            const existingIndex = prev.findIndex(e => e.id === newEtiqueta.id);
            if (existingIndex > -1) {
                const updatedList = [...prev];
                updatedList[existingIndex] = newEtiqueta;
                return updatedList;
            } else {
                return [newEtiqueta, ...prev];
            }
        });

        setIsSheetOpen(false);

        toast({
            title: 'Etiqueta Asignada',
            description: `La etiqueta #${newEtiqueta.orderNumber} ha sido añadida a tu hoja de ruta.`,
        });
    };

    return (
        <div className="min-h-screen bg-background text-foreground font-sans pb-24">
            <header className="bg-surface border-b border-white/10 sticky top-0 z-40">
                <div className="container mx-auto px-4 h-16 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="bg-primary/20 p-2 rounded-md border border-primary/30">
                            <Bike className="h-6 w-6 text-primary" />
                        </div>
                        <h1 className="text-lg font-bold font-display uppercase tracking-wider text-white">
                            {repartidor.name.split(' ')[0]}
                        </h1>
                    </div>
                    <Button asChild variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-white/5 rounded-md">
                        <Link href="/repartidor">
                            <LogOut className="mr-2 h-4 w-4" /> Salir
                        </Link>
                    </Button>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                 <HojaDeRutaRepartidor 
                    etiquetas={etiquetas.filter(e => e.repartidorId === repartidor.id)}
                    onStatusChange={handleStatusChange}
                 />
            </main>

            {/* Floating Action Button (FAB) */}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                    <Button
                        size="icon"
                        className="fixed bottom-6 right-6 h-16 w-16 rounded-xl bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-[0_10px_40px_-10px_rgba(255,230,0,0.4)] border-2 border-white/10 z-50 group transition-all active:scale-95"
                        aria-label="Asignar nueva entrega"
                    >
                        <Plus className="h-8 w-8 group-hover:rotate-90 transition-transform duration-300" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="bg-surface border-t border-white/10 rounded-t-xl p-0 overflow-hidden">
                    <div className="p-6">
                        <SheetHeader className="mb-6 text-left">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="bg-primary/20 p-2 rounded-md border border-primary/30">
                                    <ScanBarcode className="h-6 w-6 text-primary" />
                                </div>
                                <SheetTitle className="text-xl font-display font-bold text-white uppercase tracking-tighter">Asignar Entrega</SheetTitle>
                            </div>
                            <SheetDescription className="text-gray-400">
                                Escaneá el código o ingresá el número de orden para agregarla a tu ruta de hoy.
                            </SheetDescription>
                        </SheetHeader>

                        <div className="bg-background/50 border border-white/10 rounded-lg p-1">
                            <AssignEtiqueta
                                repartidorId={repartidor.id}
                                onEtiquetaAssigned={handleEtiquetaAssigned}
                            />
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}
