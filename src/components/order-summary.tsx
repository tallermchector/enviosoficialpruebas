
"use client";

import { Button } from "@/components/ui/button";
import { Clock, Loader2, MapPin, User, Phone, Mail, DollarSign, FileText } from "lucide-react";

interface OrderSummaryProps {
  pickupFullAddress: string;
  pickupContactName: string;
  pickupPhoneNumber: string;
  pickupFormattedDateTime: string;

  deliveryFullAddress: string;
  deliveryContactName: string;
  deliveryPhoneNumber: string;
  deliveryEmail?: string;
  deliveryFormattedDateTime: string;

  distance: string;
  deliveryNoteText: string;
  shippingCostFormatted: string;
  deliveryTipFormatted: string;
  totalCostFormatted: string;

  onMakeOrder: () => void;
  isSubmitting?: boolean;
}

export function OrderSummary({
  pickupFullAddress,
  pickupContactName,
  pickupPhoneNumber,
  pickupFormattedDateTime,
  deliveryFullAddress,
  deliveryContactName,
  deliveryPhoneNumber,
  deliveryEmail,
  deliveryFormattedDateTime,
  distance,
  deliveryNoteText,
  shippingCostFormatted,
  deliveryTipFormatted,
  totalCostFormatted,
  onMakeOrder,
  isSubmitting = false,
}: OrderSummaryProps) {
  return (
    <div className="glassmorphism border border-white/10 shadow-crate rounded-none p-6 mb-4 space-y-6">
      <div>
        <h3 className="pb-3 block text-base font-bebas font-black tracking-wider text-secondary uppercase">
          DETALLES DE RECOGIDA
        </h3>
        <div className="space-y-2 text-gray-300 font-sans text-sm">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
            <span>{pickupFullAddress}</span>
          </div>
          <div className="flex items-center">
            <User className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
            <span>{pickupContactName}</span>
          </div>
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
            <span>{pickupPhoneNumber}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
            <span className="font-medium">{pickupFormattedDateTime}</span>
          </div>
        </div>
      </div>

      <hr className="border-white/10" />

      <div>
        <h3 className="pb-3 block text-base font-bebas font-black tracking-wider text-secondary uppercase">
          DETALLES DE LA ENTREGA
        </h3>
        <div className="space-y-2 text-gray-300 font-sans text-sm">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
            <span>{deliveryFullAddress}</span>
          </div>
          <div className="flex items-center">
            <User className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
            <span>{deliveryContactName}</span>
          </div>
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
            <span>{deliveryPhoneNumber}</span>
          </div>
          {deliveryEmail && (
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
              <span>{deliveryEmail}</span>
            </div>
          )}
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
            <span className="font-medium">{deliveryFormattedDateTime}</span>
          </div>
        </div>
      </div>

      <hr className="border-white/10" />

      <div>
        <h3 className="pb-3 block text-base font-bebas font-black tracking-wider text-secondary uppercase">
          RESUMEN DEL PEDIDO
        </h3>
        <div className="space-y-2 text-gray-300 font-sans text-sm">
          <div className="flex justify-between">
            <span>Distancia:</span>
            <span className="font-medium text-white">{distance}</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="flex-shrink-0 mr-2">Nota de entrega:</span>
            <span className="font-medium text-right break-all text-white">{deliveryNoteText || "-"}</span>
          </div>
        </div>
      </div>
      
      <hr className="border-white/10" />

      <div className="space-y-2 text-gray-300 font-sans text-sm">
        <div className="flex justify-between">
          <span>Costes de envío</span>
          <span className="font-medium text-white">{shippingCostFormatted}</span>
        </div>
        <div className="flex justify-between">
          <span>Propina de entrega</span>
          <span className="font-medium text-white">{deliveryTipFormatted}</span>
        </div>
        <div className="flex justify-between text-xl font-bold font-bebas text-secondary tracking-wide uppercase pt-2">
          <span>Total</span>
          <span className="text-2xl italic">{totalCostFormatted}</span>
        </div>
      </div>

      <div className="text-center mt-8 mb-2 mx-2">
        <Button
          type="button"
          onClick={onMakeOrder}
          disabled={isSubmitting}
          className="bg-secondary hover:bg-yellow-400 text-black px-8 py-4 w-full text-lg font-bebas font-bold tracking-wider rounded-none uppercase transition-all shadow-lg"
        >
          {isSubmitting && <Loader2 className="mr-2 h-4 w-5 animate-spin" />}
          {isSubmitting ? "Procesando..." : "Hacer pedido"}
        </Button>
      </div>
    </div>
  );
}