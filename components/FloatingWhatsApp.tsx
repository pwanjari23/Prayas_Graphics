"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BUSINESS_INFO } from "@/lib/business-info";
import { trackWhatsAppClick } from "@/lib/analytics";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappNumber = BUSINESS_INFO.contact.whatsappNumber;

  useEffect(() => {
    // Small delay before showing so it doesn't pop in immediately
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        "Hi Prayas Graphics, I'd like to enquire about your signboard and display services in Nagpur."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick("floating_whatsapp_widget")}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white border border-zinc-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_36px_rgba(0,0,0,0.32)] active:scale-95 group"
      aria-label="Chat on WhatsApp with Prayas Graphics"
    >
      <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-20 group-hover:opacity-35 pointer-events-none" />

      {/* Tooltip */}
      <div className="absolute right-full mr-4 w-max rounded-xl bg-white px-4 py-2 text-sm font-semibold text-zinc-900 opacity-0 shadow-lg border border-zinc-200 transition-all duration-300 group-hover:opacity-100 pointer-events-none transform translate-x-2 group-hover:translate-x-0">
        Get an Instant Quote!
        <div className="absolute top-1/2 -right-1.5 h-3 w-3 -translate-y-1/2 rotate-45 bg-white border-t border-r border-zinc-200" />
      </div>

      <div className="relative h-9 w-9 sm:h-11 sm:w-11 z-10 flex items-center justify-center">
        <Image
          src="/whatsapp-icon.png"
          alt="WhatsApp Logo"
          fill
          sizes="(max-width: 640px) 36px, 44px"
          className="object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>
    </a>
  );
}
