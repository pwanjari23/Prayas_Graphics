"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const brandLogos = [
  { src: "/clients/logo (1).jpeg", alt: "Chola Finance Signage Client", name: "Chola Finance" },
  { src: "/clients/logo (2).jpeg", alt: "SMFG India Credit Signage Client", name: "SMFG India Credit" },
  { src: "/clients/logo (3).jpeg", alt: "Fortune Oil & Foods Signage Client", name: "Fortune" },
  { src: "/clients/logo (4).jpeg", alt: "NoBroker Branding Client", name: "NoBroker" },
  { src: "/clients/logo (5).jpeg", alt: "Punjab National Bank Signage Client", name: "PNB" },
  { src: "/clients/logo (6).jpeg", alt: "Quickclean Signage Client", name: "Quickclean" },
  { src: "/clients/logo (7).jpeg", alt: "Cube Highways Trust Signage Client", name: "Cube Highways" },
  { src: "/clients/logo (8).jpeg", alt: "EazyDiner Signage Client", name: "EazyDiner" },
  { src: "/clients/logo (9).jpeg", alt: "Samsung Electronics Signage Client", name: "Samsung" },
  { src: "/clients/logo (10).jpeg", alt: "Terex Corporation Signage Client", name: "Terex" },
  { src: "/clients/logo (11).jpeg", alt: "Mankind Pharma Signage Client", name: "Mankind Pharma" },
];

export default function BrandLogosMarquee() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 py-8 sm:py-12 md:px-6">
      <div className="flex flex-col items-center justify-center text-center mb-8 px-4">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#800080]/10 text-[#800080] text-xs font-bold uppercase tracking-wider mb-3">
          500+ Businesses Served
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-zinc-900 tracking-tight">
          Trusted by Leading Brands Across Nagpur
        </h2>
        <p className="mt-2 text-sm text-zinc-500 max-w-md">
          From national finance enterprises and banks to local retail leaders, we engineer signage that commands attention.
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group py-4">
        <motion.div
          className="flex gap-4 sm:gap-6 items-center"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: "max-content" }}
        >
          {/* Duplicated list for seamless infinite horizontal sliding */}
          {[...brandLogos, ...brandLogos].map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="relative aspect-square w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl border border-zinc-200/85 bg-white p-3.5 sm:p-4 shadow-xs hover:shadow-xl hover:border-[#800080]/30 hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center shrink-0 group/card cursor-pointer"
            >
              <div className="relative h-full w-full flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 144px"
                  className="object-contain p-1 filter grayscale-[15%] contrast-105 opacity-85 group-hover/card:grayscale-0 group-hover/card:opacity-100 group-hover/card:scale-105 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Left & Right Gradient Overlays for Smooth Edge Fade */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-32 md:w-40 bg-gradient-to-r from-stone-50 via-stone-50/80 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-32 md:w-40 bg-gradient-to-l from-stone-50 via-stone-50/80 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
