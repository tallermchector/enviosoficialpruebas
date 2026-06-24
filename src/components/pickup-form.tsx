
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import type { Dispatch, SetStateAction } from 'react';

interface PickupFormProps {
  pickupFullName: string;
  setPickupFullName: Dispatch<SetStateAction<string>>;
  phoneNumber: string;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
  pickupStreetAddress: string;
  setPickupStreetAddress: Dispatch<SetStateAction<string>>;
  pickupTime: string;
  setPickupTime: Dispatch<SetStateAction<string>>;
  rememberInfo: boolean;
  setRememberInfo: Dispatch<SetStateAction<boolean>>;
}

export function PickupForm({
  pickupFullName,
  setPickupFullName,
  phoneNumber,
  setPhoneNumber,
  pickupStreetAddress,
  setPickupStreetAddress,
  pickupTime,
  setPickupTime,
  rememberInfo,
  setRememberInfo,
}: PickupFormProps) {
  return (
    <div className="glassmorphism border border-white/10 shadow-crate rounded-none p-4 sm:p-6 mb-4">
      <label className="pb-3 block text-base font-bebas font-black tracking-wider text-secondary uppercase">
        RECOGIDA DESDE
      </label>
      <div className="space-y-4">
        <Input
          type="text"
          required
          value={pickupFullName}
          onChange={(e) => setPickupFullName(e.target.value)}
          placeholder="Nombre completo del punto de recogida/persona"
          className="w-full bg-[#030710]/50 border border-white/10 hover:border-primary/50 focus:border-secondary focus:ring-2 focus:ring-secondary/20 text-white rounded-none transition-all duration-300 font-sans"
        />
        <Input
          type="tel"
          required
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Número de teléfono del punto de recogida/persona"
          className="w-full bg-[#030710]/50 border border-white/10 hover:border-primary/50 focus:border-secondary focus:ring-2 focus:ring-secondary/20 text-white rounded-none transition-all duration-300 font-sans"
        />
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            type="text"
            required
            value={pickupStreetAddress}
            onChange={(e) => setPickupStreetAddress(e.target.value)}
            placeholder="Dirección de la calle del punto de recogida/persona"
            className="flex-1 bg-[#030710]/50 border border-white/10 hover:border-primary/50 focus:border-secondary focus:ring-2 focus:ring-secondary/20 text-white rounded-none transition-all duration-300 font-sans"
          />
           <Button
            type="button"
            variant="outline"
            size="sm"
            className="border-white/10 hover:border-primary/50 bg-[#030710]/50 text-white rounded-none self-start w-full sm:w-auto transition-all"
            title="Ubicar en mapa"
          >
            <Image
              src="https://ext.same-assets.com/4138676004/439059459.svg"
              alt="Ubicar en mapa"
              width={24}
              height={24}
              data-ai-hint="location pin"
            />
            <span className="ml-2 sm:hidden">Ubicar en mapa</span>
          </Button>
        </div>
        <Input
          type="time"
          required
          value={pickupTime}
          onChange={(e) => setPickupTime(e.target.value)}
          className="w-full bg-[#030710]/50 border border-white/10 hover:border-primary/50 focus:border-secondary focus:ring-2 focus:ring-secondary/20 text-white rounded-none transition-all duration-300 font-sans"
        />
      </div>
      <div className="mt-4 flex items-center space-x-2">
        <Checkbox
          id="remember-pickup"
          checked={rememberInfo}
          onCheckedChange={(checked) => setRememberInfo(checked === true)}
        />
        <label
          htmlFor="remember-pickup"
          className="text-sm text-gray-300 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-sans"
        >
          Recordar información de lugar de recogida
        </label>
      </div>
    </div>
  );
}