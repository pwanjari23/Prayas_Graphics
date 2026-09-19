"use client";

import { MessageCircle } from "lucide-react";
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
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgb(37,211,102,0.3)] transition-transform hover:scale-110 active:scale-95 group"
      aria-label="Chat on WhatsApp with Prayas Graphics"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40" />

      {/* Tooltip */}
      <div className="absolute right-full mr-4 w-max rounded-xl bg-white px-4 py-2 text-sm font-semibold text-zinc-800 opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 pointer-events-none transform translate-x-2 group-hover:translate-x-0">
        Get an Instant Quote!
        <div className="absolute top-1/2 -right-1.5 h-3 w-3 -translate-y-1/2 rotate-45 bg-white" />
      </div>

      <MessageCircle className="h-8 w-8 relative z-10" />
    </a>
  );
}
