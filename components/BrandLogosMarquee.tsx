"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { CLIENT_BRANDS, ClientBrand } from "@/lib/client-projects";
import ClientBrandModal from "./ClientBrandModal";

export interface BrandLogoItem {
  id: string;
  src: string;
  alt: string;
  name: string;
}

export const brandLogos: BrandLogoItem[] = [
  { id: "chola-finance", src: "/clients/logo (1).jpeg", alt: "Chola Finance Signage Client", name: "Chola Finance" },
  { id: "smfg-india-credit", src: "/clients/logo (2).jpeg", alt: "SMFG India Credit Signage Client", name: "SMFG India Credit" },
  { id: "fortune", src: "/clients/logo (3).jpeg", alt: "Fortune Oil & Foods Signage Client", name: "Fortune" },
  { id: "nobroker", src: "/clients/logo (4).jpeg", alt: "NoBroker Branding Client", name: "NoBroker" },
  { id: "pnb", src: "/clients/logo (5).jpeg", alt: "Punjab National Bank Signage Client", name: "PNB" },
  { id: "quickclean", src: "/clients/logo (6).jpeg", alt: "Quickclean Signage Client", name: "Quickclean" },
  { id: "cube-highways", src: "/clients/logo (7).jpeg", alt: "Cube Highways Trust Signage Client", name: "Cube Highways" },
  { id: "eazydiner", src: "/clients/logo (8).jpeg", alt: "EazyDiner Signage Client", name: "EazyDiner" },
  { id: "samsung", src: "/clients/logo (9).jpeg", alt: "Samsung Electronics Signage Client", name: "Samsung" },
  { id: "terex", src: "/clients/logo (10).jpeg", alt: "Terex Corporation Signage Client", name: "Terex" },
  { id: "mankind-pharma", src: "/clients/logo (11).jpeg", alt: "Mankind Pharma Signage Client", name: "Mankind Pharma" },
  { id: "adani-gas", src: "/clients/adani-gas-logo.webp", alt: "Adani Gas Commercial Signage Client", name: "Adani Gas" },
];

export default function BrandLogosMarquee() {
  const [selectedBrand, setSelectedBrand] = useState<ClientBrand | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const activeTriggerRef = useRef<HTMLElement | null>(null);
  // Sequence sized to guarantee 4K / 3840px screens have zero gaps
  const displayLogos = [...brandLogos, ...brandLogos];

  const handleCardClick = (brandId: string, e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => {
    activeTriggerRef.current = e.currentTarget;
    const brand = CLIENT_BRANDS[brandId] || {
      id: brandId,
      name: brandLogos.find((b) => b.id === brandId)?.name || "Client",
      logo: brandLogos.find((b) => b.id === brandId)?.src || "",
      subtitle: "Valued Client",
      projects: [],
    };
    setSelectedBrand(brand);
    setIsModalOpen(true);
  };

  const handleKeyDown = (brandId: string, e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCardClick(brandId, e);
    }
  };

  const renderCard = (logo: BrandLogoItem, index: number, isDuplicate: boolean) => (
    <div
      key={`${isDuplicate ? "clone" : "orig"}-${logo.id}-${index}`}
      role="button"
      tabIndex={isDuplicate ? -1 : 0}
      aria-label={`View signage projects completed for ${logo.name}`}
      aria-hidden={isDuplicate ? true : undefined}
      onClick={(e) => handleCardClick(logo.id, e)}
      onKeyDown={(e) => handleKeyDown(logo.id, e)}
      className="relative aspect-square w-26 h-26 sm:w-30 sm:h-30 md:w-34 md:h-34 rounded-2xl border border-zinc-700/80 bg-white p-3 sm:p-3.5 shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-zinc-300 hover:scale-105 hover:-translate-y-1 active:scale-95 flex flex-col items-center justify-center shrink-0 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 group/card"
    >
      {/* Logo Image */}
      <div className="relative h-full w-full flex items-center justify-center">
        <Image
          src={logo.src}
          alt={logo.alt}
          fill
          sizes="(max-width: 640px) 104px, (max-width: 768px) 120px, 136px"
          className="object-contain p-1 filter contrast-105 opacity-90 transition-all duration-300 group-hover/card:opacity-100 group-hover/card:scale-105"
        />
      </div>

      {/* Subtle Hover / Active Indicator */}
      <span className="absolute bottom-1 text-[9px] font-bold text-zinc-950 opacity-0 group-hover/card:opacity-100 group-focus-visible/card:opacity-100 transition-opacity whitespace-nowrap">
        View Work &rarr;
      </span>
    </div>
  );

  return (
    <>
      <section className="relative w-full pt-12 sm:pt-16 md:pt-20 pb-14 sm:pb-18 md:pb-20 overflow-hidden bg-[#171717]">
        {/* SECTION HEADER: Centered Heading & Supporting Subtitle */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center mb-7 sm:mb-9 px-4 max-w-7xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5">
            Our Valued Clients
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-heading font-extrabold text-white tracking-tight leading-tight">
            Trusted by Leading Brands Across Nagpur
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-zinc-400 max-w-lg leading-relaxed">
            From national finance enterprises and banks to local retail leaders, we engineer signage that commands attention.
          </p>
          <p className="mt-1 text-[11px] sm:text-xs text-zinc-400 font-semibold">
            Click any client card to view completed signage projects
          </p>
        </div>

        {/* INTERACTIVE LOGO CAROUSEL: Infinite Dual-Group Continuous Marquee */}
        <div className="logo-marquee relative z-10 w-full py-3">
          <div className="logo-marquee__track">
            {/* Primary Sequence Group */}
            <div className="logo-marquee__group">
              {displayLogos.map((logo, i) => renderCard(logo, i, false))}
            </div>

            {/* Identical Cloned Group for 100% Seamless -50% Loop */}
            <div className="logo-marquee__group" aria-hidden="true">
              {displayLogos.map((logo, i) => renderCard(logo, i, true))}
            </div>
          </div>

          {/* Left & Right Gradient Overlays for Smooth Edge Fade */}
          <div className="absolute inset-y-0 left-0 w-14 sm:w-24 md:w-32 bg-gradient-to-r from-[#171717] via-[#171717]/85 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-14 sm:w-24 md:w-32 bg-gradient-to-l from-[#171717] via-[#171717]/85 to-transparent pointer-events-none z-10" />
        </div>
      </section>

      {/* PORTFOLIO MODAL: Accessible Dialog with Case Studies */}
      <ClientBrandModal
        brand={selectedBrand}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        triggerElementRef={activeTriggerRef.current}
      />
    </>
  );
}
