"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, MessageCircle, Sparkles, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { BUSINESS_INFO } from "@/lib/business-info";

export interface GalleryItem {
  id: number;
  title: string;
  category: "Signage" | "LED Displays" | "ACP Work" | "Printing" | "Facade";
  src: string;
  spec: string;
}

export const allGalleryItems: GalleryItem[] = [
  // Signage (11 items)
  { id: 27, title: "Aarti Wines Storefront", category: "Signage", src: "/gallery/signage/aarti-wines-acp-signboard.webp", spec: "High-Gloss Black ACP Box Fascia with Solid 3D Acrylic Frontlit Lettering" },
  { id: 28, title: "Glam by Aish Studio Sign", category: "Signage", src: "/gallery/signage/glam-by-aish-acrylic-signboard.webp", spec: "White ACP Fascia with Dual-Tone 3D Acrylic Raised Letters & Red Trim" },
  { id: 29, title: "Scope Corporate Values Wall", category: "Signage", src: "/gallery/signage/scope-corporate-values-branding.webp", spec: "Multi-Panel Frosted Cast Acrylic Corporate Wall Plaques" },
  { id: 6, title: "Titanium Finish Letters", category: "Signage", src: "/gallery/signage/titanium-finish-letters.webp", spec: "SS 304 Titanium Gold PVD Coated 3D Letters" },
  { id: 7, title: "Mirror Finish Acrylic", category: "Signage", src: "/gallery/signage/mirror-finish-acrylic.webp", spec: "High-Gloss Mirror Gold Acrylic with 3D Depth" },
  { id: 13, title: "3D Corporate Identity", category: "Signage", src: "/gallery/signage/3d-corporate-identity.webp", spec: "Multi-Layered Acrylic & Brushed Stainless Steel" },
  { id: 16, title: "Precision Cut Metal", category: "Signage", src: "/gallery/signage/precision-cut-metal.webp", spec: "Fiber Laser Cut SS 316 Grade Architectural Sign" },
  { id: 18, title: "High-Rise Signage", category: "Signage", src: "/gallery/signage/high-rise-signage.webp", spec: "Wind-Engineered Structural Roof Signboard" },
  { id: 21, title: "Directional Signage", category: "Signage", src: "/gallery/signage/directional-signage.webp", spec: "Reflective Modular Campus Wayfinding System" },
  { id: 22, title: "Architectural Lettering", category: "Signage", src: "/gallery/signage/architectural-lettering.webp", spec: "Deep-Profile Channel Letters with Halo Lighting" },
  { id: 26, title: "Premium Shop Sign", category: "Signage", src: "/gallery/signage/premium-shop-sign.jpg", spec: "Solid Acrylic 3D Frontlit Letters on Wood ACP" },

  // LED Displays (6 items)
  { id: 31, title: "Laundry Bros LED Signboard", category: "LED Displays", src: "/gallery/led-displays/laundry-bros-led-signboard.webp", spec: "Cobalt Blue ACP Fascia Box with High-Lumen 3D Acrylic LED Glow Letters" },
  { id: 1, title: "Backlit LED Signage", category: "LED Displays", src: "/gallery/led-displays/backlit-led-signage.webp", spec: "Cast Acrylic 3D Letters • Samsung LED Modules" },
  { id: 2, title: "Glow Sign Board", category: "LED Displays", src: "/gallery/led-displays/glow-sign-board.webp", spec: "Aluminium Frame • High-Lumen Outdoor Illumination" },
  { id: 9, title: "Neon Flexible Lights", category: "LED Displays", src: "/gallery/led-displays/neon-flexible-lights.webp", spec: "Custom Silicon Neon Flex • 12V Energy Efficient" },
  { id: 15, title: "Storefront LED Display", category: "LED Displays", src: "/gallery/led-displays/storefront-led-display.webp", spec: "Warm-White Commercial Storefront Glow Letters" },
  { id: 19, title: "Fabric Lightbox", category: "LED Displays", src: "/gallery/led-displays/fabric-lightbox.webp", spec: "Edge-lit Frameless SEG Architectural Lightbox" },

  // ACP Work (7 items)
  { id: 30, title: "Aarti Wines Entrance Canopy", category: "ACP Work", src: "/gallery/acp-work/aarti-wines-entrance-canopy-acp.webp", spec: "Architectural ACP Entrance Canopy with Pylon Pillars & Integrated Letters" },
  { id: 3, title: "Silver ACP Finish", category: "ACP Work", src: "/gallery/acp-work/silver-acp-finish.webp", spec: "3mm Metallic ACP Sheet • CNC Grooving & Beveling" },
  { id: 8, title: "Louvered ACP Cladding", category: "ACP Work", src: "/gallery/acp-work/louvered-acp-cladding.webp", spec: "Exterior Architectural Louver Panel Profiles" },
  { id: 10, title: "Marble Texture ACP", category: "ACP Work", src: "/gallery/acp-work/marble-texture-acp.webp", spec: "Premium Marble Pattern Exterior ACP Facade" },
  { id: 11, title: "CNC Router Cutting", category: "ACP Work", src: "/gallery/acp-work/cnc-router-cutting.webp", spec: "High-Precision CNC Jali & Architectural Lattice" },
  { id: 20, title: "Glass ACP Cladding", category: "ACP Work", src: "/gallery/acp-work/glass-acp-cladding.webp", spec: "Composite Glass & Gloss Black ACP Facade Work" },
  { id: 23, title: "Matte Finish ACP", category: "ACP Work", src: "/gallery/acp-work/matte-finish-acp.webp", spec: "Dark Charcoal Matte Architectural Elevation Cladding" },

  // Printing (5 items)
  { id: 4, title: "Custom Poster Printing", category: "Printing", src: "/gallery/printing/custom-poster-printing.webp", spec: "1440 DPI High-Resolution Eco-Solvent Print" },
  { id: 12, title: "Mesh Banner Print", category: "Printing", src: "/gallery/printing/mesh-banner-print.webp", spec: "Wind-Resistant Outdoor Perforated Mesh Banner" },
  { id: 17, title: "Vinyl Graphics Print", category: "Printing", src: "/gallery/printing/vinyl-graphics-print.webp", spec: "UV-Resistant Cast Vinyl with Gloss Overlaminate" },
  { id: 24, title: "Multi-Color Printing", category: "Printing", src: "/gallery/printing/multi-color-printing.png", spec: "6-Color Wide-Format Precision Solvent Printing" },
  { id: 25, title: "Exhibition Branding", category: "Printing", src: "/gallery/printing/exhibition-branding.png", spec: "Modular Standee & Trade Fair Exhibition Systems" },

  // Facade (2 items)
  { id: 5, title: "Structural Glass Glazing", category: "Facade", src: "/gallery/facade/structural-glass-glazing.webp", spec: "Toughened Architectural Glass & Heavy Framework" },
  { id: 14, title: "Exterior Facade Panel", category: "Facade", src: "/gallery/facade/exterior-facade-panel.webp", spec: "Heavy-Gauge Weather-Shield ACP Panel Cladding" },
];

const categories = ["All", "Signage", "LED Displays", "ACP Work", "Printing", "Facade"] as const;

// Calibrated aspect ratios for natural optical masonry rhythm
const itemAspectRatios: Record<number, string> = {
  27: "aspect-[3/4.2]",
  28: "aspect-[3/4.4]",
  29: "aspect-[3/3.8]",
  6: "aspect-[4/3]",
  7: "aspect-[3/4]",
  13: "aspect-[16/10]",
  16: "aspect-[4/3.2]",
  18: "aspect-[16/11]",
  21: "aspect-[3/4]",
  22: "aspect-[4/3]",
  26: "aspect-[3/4.2]",
  31: "aspect-[3/4.2]",
  1: "aspect-[16/10]",
  2: "aspect-[4/3]",
  9: "aspect-[3/4]",
  15: "aspect-[16/11]",
  19: "aspect-[4/3]",
  30: "aspect-[3/4]",
  3: "aspect-[16/10]",
  8: "aspect-[3/4]",
  10: "aspect-[4/3.2]",
  11: "aspect-[1/1]",
  20: "aspect-[16/10]",
  23: "aspect-[3/4]",
  4: "aspect-[3/4.4]",
  12: "aspect-[16/10]",
  17: "aspect-[4/3]",
  24: "aspect-[3/4]",
  25: "aspect-[3/4.2]",
  5: "aspect-[16/10]",
  14: "aspect-[4/3]",
};

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  // Filter items strictly by category
  const filtered =
    activeCategory === "All"
      ? allGalleryItems
      : allGalleryItems.filter((item) => item.category === activeCategory);

  function getWhatsAppUrl(title: string) {
    const text = encodeURIComponent(
      `Hello Prayas Graphics! I saw your project "${title}" in your gallery and would like to get a quote and details for my business in Nagpur.`
    );
    return `https://wa.me/${BUSINESS_INFO.contact.whatsappNumber}?text=${text}`;
  }

  return (
    <section className="relative mx-auto w-full max-w-[1680px] px-3.5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 pt-2 sm:pt-4 pb-20">
      {/* ======================================================== */}
      {/* 1. HEADER & INTRO SECTION (Full-Width, Left-Aligned)     */}
      {/* ======================================================== */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-3.5 py-1 text-xs font-bold text-zinc-950 mb-3">
            <Sparkles className="h-3.5 w-3.5 text-zinc-950" />
            <span>VERIFIED INSTALLATION ARCHIVE</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight text-zinc-950 leading-tight">
            The Signage <span className="text-zinc-950">Vault.</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed font-normal max-w-2xl">
            From precision-cut 3D titanium letters to commercial ACP elevations, explore real project installations crafted at our Tukdoji Square workshop in Nagpur.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4 shrink-0">
          <a
            href={`https://wa.me/${BUSINESS_INFO.contact.whatsappNumber}?text=${encodeURIComponent("Hello Prayas Graphics! I saw your portfolio and would like to get a quote for my business in Nagpur.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl sm:rounded-2xl bg-zinc-950 px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white uppercase shadow-md transition-all duration-200 hover:bg-zinc-800 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap"
          >
            Get a Custom Quote
          </a>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. FILTER TABS & COUNT BAR                               */}
      {/* ======================================================== */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200/80 pb-5 mb-8 sm:mb-10">
        <div className="no-scrollbar flex items-center gap-2 overflow-x-auto p-0.5 -mx-3.5 px-3.5 sm:mx-0 sm:px-0">
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? allGalleryItems.length
                : allGalleryItems.filter((i) => i.category === cat).length;
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "relative flex items-center gap-1.5 rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap cursor-pointer select-none shrink-0",
                  isActive
                    ? "bg-zinc-950 text-white shadow-sm"
                    : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 bg-zinc-100/70"
                )}
              >
                <span>{cat}</span>
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-[10px] sm:text-xs font-bold",
                    isActive ? "bg-white/20 text-white" : "bg-zinc-200 text-zinc-600"
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="text-xs sm:text-sm font-semibold text-zinc-500 hidden sm:block">
          Showing <span className="font-bold text-zinc-950">{filtered.length}</span>{" "}
          {activeCategory === "All" ? "Total Projects" : `${activeCategory} Projects`}
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. FLUID MASONRY GALLERY GRID (Framer Motion Layout)     */}
      {/* (Fills available width edge-to-edge, starting at left)   */}
      {/* ======================================================== */}
      <motion.div
        layout
        className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-3.5 sm:gap-4 xl:gap-5 w-full"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item, index) => {
            const aspectClass = itemAspectRatios[item.id] || "aspect-[4/3]";

            return (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{
                  opacity: { duration: 0.25 },
                  layout: { type: "spring", stiffness: 300, damping: 28 },
                }}
                className="break-inside-avoid mb-3.5 sm:mb-4 xl:mb-5"
              >
                <div
                  onClick={() => setLightboxItem(item)}
                  className={cn(
                    "group relative w-full overflow-hidden rounded-[20px] sm:rounded-[24px] xl:rounded-[26px] border border-zinc-200/90 bg-zinc-100 shadow-xs transition-all duration-500 hover:border-zinc-400 hover:shadow-xl cursor-pointer select-none",
                    aspectClass
                  )}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    priority={index < 8}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1440px) 25vw, 20vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                  />

                  {/* Top-Right Quick Expand Icon Badge */}
                  <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-black/45 text-white/95 backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-xs pointer-events-none">
                    <Maximize2 className="h-3.5 w-3.5" />
                  </div>

                  {/* Gradient Hover Protection */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

                  {/* Bottom Information Overlay */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 text-left opacity-0 transition-all duration-300 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 pointer-events-none">
                    <p className="text-xs sm:text-sm font-bold text-white leading-tight line-clamp-1 drop-shadow-xs">
                      {item.title}
                    </p>
                    <p className="text-[10px] sm:text-xs text-zinc-300 font-semibold mt-0.5 line-clamp-1">
                      {item.spec}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* ======================================================== */}
      {/* 4. HIGH-RESOLUTION LIGHTBOX MODAL WITH INSTANT ACTION     */}
      {/* ======================================================== */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-3 sm:p-6 md:p-8 backdrop-blur-md"
            onClick={() => setLightboxItem(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative flex flex-col items-center justify-center max-w-5xl max-h-[92vh] overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-zinc-950 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-3.5 right-3.5 z-20 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-black/75 text-white backdrop-blur-md border border-white/20 transition-all hover:bg-white hover:text-zinc-950 cursor-pointer shadow-lg"
                aria-label="Close image modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Main Photo */}
              <div className="relative flex items-center justify-center max-h-[75vh] max-w-[90vw]">
                <Image
                  src={lightboxItem.src}
                  alt={lightboxItem.title}
                  width={1400}
                  height={1050}
                  className="max-h-[75vh] max-w-[90vw] w-auto h-auto object-contain rounded-t-2xl sm:rounded-t-3xl"
                  priority
                />
              </div>

              {/* Bottom Caption & WhatsApp Trigger */}
              <div className="w-full bg-zinc-900/95 border-t border-white/10 px-4 sm:px-6 py-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                    {lightboxItem.title}
                  </h3>
                  <p className="text-xs text-zinc-300 font-medium mt-0.5">
                    {lightboxItem.spec}
                  </p>
                </div>

                <a
                  href={getWhatsAppUrl(lightboxItem.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 px-4 py-2 text-xs font-bold transition-all shadow-md active:scale-95 whitespace-nowrap"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Inquire About This Sign</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
