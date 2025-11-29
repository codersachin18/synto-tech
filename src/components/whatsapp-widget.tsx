"use client";

import Link from "next/link";
import { FaWhatsapp } from 'react-icons/fa';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface WhatsAppWidgetProps {
  phoneNumber: string;
  message?: string;
}

export function WhatsAppWidget({ phoneNumber, message }: WhatsAppWidgetProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform duration-300 hover:scale-110"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp className="h-8 w-8" />
          </Link>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>WhatsApp Us</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
