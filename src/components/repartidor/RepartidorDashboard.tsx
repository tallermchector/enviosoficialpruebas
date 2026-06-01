// src/components/repartidor/RepartidorDashboard.tsx
'use client';

import { useState, useMemo } from 'react';
import type { Repartidor } from '../../../generated/prisma/client/client';
import type { FormattedEtiqueta } from "@/types";
import { EtiquetaStatus } from '@/types';
import { Button } from "@/components/ui/button";
import { Bike, LogOut, Plus, ScanBarcode, User, History, Wallet, PackageCheck } from "lucide-react";
import Link from 'next/link';
import { HojaDeRutaRepartidor } from './HojaDeRutaRepartidor';
import { AssignEtiqueta } from './AssignEtiqueta';
import { useToast } from '@/hooks/use-toast';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { BottomNav, type NavTab } from './BottomNav';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface RepartidorDashboardProps {
    repartidor: Repartidor;
    initialEtiquetas: FormattedEtiqueta[];
}

export function RepartidorDashboard({ repartidor, initialEtiquetas }: RepartidorDashboardProps) {
    const [etiquetas, setEtiquetas] = useState(initialEtiquetas);
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<NavTab>('route');
    const { toast } = useToast();

    const handleStatusChange = (etiquetaId: number, newStatus: EtiquetaStatus) => {
        setEtiquetas(prev => prev.map(e => e.id === etiquetaId ? { ...e, status: newStatus } : e));
    };

    const handleEtiquetaAssigned = (newEtiqueta: FormattedEtiqueta) => {
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
            className: 'bg-green-100 border-green-400 text-green-700',
        });
    };

    const stats = useMemo(() => {
        const myEtiquetas = etiquetas.filter(e => e.repartidorId === repartidor.id);
        const delivered = myEtiquetas.filter(e => e.status === EtiquetaStatus.ENTREGADA);
        const totalCash = delivered.reduce((acc, curr) => acc + (curr.montoACobrar || 0), 0);

        return {
            total: myEtiquetas.length,
            delivered: delivered.length,
            pending: myEtiquetas.filter(e => e.status === EtiquetaStatus.IMPRESA || e.status === EtiquetaStatus.EN_CAMINO).length,
            cash: totalCash
        };
    }, [etiquetas, repartidor.id]);

    return (
        <div className="min-h-screen bg-background text-foreground font-sans pb-32">
            <header className="bg-primary text-white shadow-xl sticky top-0 z-40 border-b border-primary/20">
                <div className="container mx-auto px-4 h-16 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="bg-white/10 p-1.5 border border-white/20">
                            <Bike className="h-6 w-6" />
                        </div>
                        <h1 className="text-lg font-bold font-display uppercase tracking-wider">
                            {repartidor.name.split(' ')[0]}
                        </h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <nav className="hidden lg:flex items-center mr-4 bg-white/10 p-1 rounded-none border border-white/20">
                            <button
                                onClick={() => setActiveTab('route')}
                                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-widest transition-colors ${activeTab === 'route' ? 'bg-secondary text-white' : 'text-white/70 hover:text-white'}`}
                            >
                                Ruta
                            </button>
                            <button
                                onClick={() => setActiveTab('stats')}
                                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-widest transition-colors ${activeTab === 'stats' ? 'bg-secondary text-white' : 'text-white/70 hover:text-white'}`}
                            >
                                Resumen
                            </button>
                            <button
                                onClick={() => setActiveTab('profile')}
                                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-widest transition-colors ${activeTab === 'profile' ? 'bg-secondary text-white' : 'text-white/70 hover:text-white'}`}
                            >
                                Perfil
                            </button>
                        </nav>
                        <Button asChild variant="ghost" size="sm" className="hover:bg-white/10 text-white rounded-none border border-transparent hover:border-white/20">
                            <Link href="/repartidor">
                                <LogOut className="mr-2 h-4 w-4" /> Salir
                            </Link>
                        </Button>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                {activeTab === 'route' && (
                    <HojaDeRutaRepartidor
                        etiquetas={etiquetas.filter(e => e.repartidorId === repartidor.id)}
                        onStatusChange={handleStatusChange}
                    />
                )}

                {activeTab === 'stats' && (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-display font-bold text-primary uppercase tracking-tighter">Resumen del Día</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <Card className="bg-card border-border rounded-none">
                                <CardHeader className="p-4 pb-0">
                                    <CardTitle className="text-[10px] font-display uppercase tracking-widest text-slate-500 flex items-center gap-2">
                                        <PackageCheck className="h-3 w-3" /> Entregas
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-4 pt-2">
                                    <div className="text-2xl font-black text-white">{stats.delivered} / {stats.total}</div>
                                </CardContent>
                            </Card>
                            <Card className="bg-card border-border rounded-none">
                                <CardHeader className="p-4 pb-0">
                                    <CardTitle className="text-[10px] font-display uppercase tracking-widest text-slate-500 flex items-center gap-2">
                                        <Wallet className="h-3 w-3" /> Recaudado
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-4 pt-2">
                                    <div className="text-2xl font-black text-secondary">${stats.cash.toLocaleString('es-AR')}</div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="bg-card border border-border p-6 rounded-none space-y-4">
                            <h3 className="font-display font-bold text-white uppercase text-sm tracking-widest">Historial Reciente</h3>
                            <div className="space-y-3">
                                {etiquetas
                                    .filter(e => e.repartidorId === repartidor.id && e.status === EtiquetaStatus.ENTREGADA)
                                    .slice(0, 5)
                                    .map(e => (
                                        <div key={e.id} className="flex justify-between items-center text-sm border-b border-border/50 pb-2">
                                            <div className="text-slate-300 truncate mr-4">{e.destinatarioNombre}</div>
                                            <div className="text-secondary font-mono font-bold">${e.montoACobrar?.toLocaleString('es-AR') || 0}</div>
                                        </div>
                                    ))
                                }
                                {stats.delivered === 0 && (
                                    <div className="text-slate-500 text-xs italic">Aún no has completado entregas hoy.</div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'profile' && (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-display font-bold text-primary uppercase tracking-tighter">Mi Perfil</h2>
                        <div className="bg-card border border-border p-8 rounded-none text-center">
                            <div className="w-20 h-20 bg-primary/20 rounded-none border border-primary/40 flex items-center justify-center mx-auto mb-4">
                                <User className="h-10 w-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground uppercase">{repartidor.name}</h3>
                            <p className="text-slate-500 text-sm mt-1">{repartidor.vehicleType} - {repartidor.licensePlate}</p>

                            <div className="mt-8 grid grid-cols-1 gap-3">
                                <Button variant="outline" className="rounded-none border-border hover:bg-primary/5 text-primary w-full h-12">
                                    Configuración de Cuenta
                                </Button>
                                <Button variant="outline" className="rounded-none border-border hover:bg-primary/5 text-primary w-full h-12" asChild>
                                    <Link href="/repartidor">Cerrar Sesión</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            {/* Floating Action Button (FAB) - Only on Route tab */}
            {activeTab === 'route' && (
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                    <SheetTrigger asChild>
                        <Button
                            size="icon"
                            className="fixed bottom-20 right-6 h-16 w-16 rounded-none bg-secondary hover:bg-secondary/90 text-white shadow-[0_0_20px_rgba(232,154,23,0.3)] border-2 border-white/10 z-40 group transition-all active:scale-95 lg:bottom-6"
                        >
                            <Plus className="h-8 w-8 group-hover:rotate-90 transition-transform duration-300" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="bottom" className="h-[auto] bg-background border-t border-border rounded-none p-0 overflow-hidden">
                        <div className="p-6">
                            <SheetHeader className="mb-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="bg-primary p-2 border border-primary/20">
                                        <ScanBarcode className="h-6 w-6 text-white" />
                                    </div>
                                    <SheetTitle className="text-xl font-display font-bold text-white uppercase">Asignar Entrega</SheetTitle>
                                </div>
                                <SheetDescription className="text-muted-foreground">
                                    Escaneá el código o ingresá el número de orden para agregarla a tu ruta de hoy.
                                </SheetDescription>
                            </SheetHeader>

                            <div className="bg-card/50 border border-border p-1">
                                <AssignEtiqueta
                                    repartidorId={repartidor.id}
                                    onEtiquetaAssigned={handleEtiquetaAssigned}
                                />
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            )}

            <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
    );
}
