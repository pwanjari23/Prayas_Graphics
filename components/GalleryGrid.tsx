"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, MessageCircle, Sparkles, ShieldCheck, Maximize2 } from "lucide-react";
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
  // Signage (8 items)
  { id: 6, title: "Titanium Finish Letters", category: "Signage", src: "/gallery/signage/titanium-finish-letters.webp", spec: "SS 304 Titanium Gold PVD Coated 3D Letters" },
  { id: 7, title: "Mirror Finish Acrylic", category: "Signage", src: "/gallery/signage/mirror-finish-acrylic.webp", spec: "High-Gloss Mirror Gold Acrylic with 3D Depth" },
  { id: 13, title: "3D Corporate Identity", category: "Signage", src: "/gallery/signage/3d-corporate-identity.webp", spec: "Multi-Layered Acrylic & Brushed Stainless Steel" },
  { id: 16, title: "Precision Cut Metal", category: "Signage", src: "/gallery/signage/precision-cut-metal.webp", spec: "Fiber Laser Cut SS 316 Grade Architectural Sign" },
  { id: 18, title: "High-Rise Signage", category: "Signage", src: "/gallery/signage/high-rise-signage.webp", spec: "Wind-Engineered Structural Roof Signboard" },
  { id: 21, title: "Directional Signage", category: "Signage", src: "/gallery/signage/directional-signage.webp", spec: "Reflective Modular Campus Wayfinding System" },
  { id: 22, title: "Architectural Lettering", category: "Signage", src: "/gallery/signage/architectural-lettering.webp", spec: "Deep-Profile Channel Letters with Halo Lighting" },
  { id: 26, title: "Premium Shop Sign", category: "Signage", src: "/gallery/signage/premium-shop-sign.jpg", spec: "Solid Acrylic 3D Frontlit Letters on Wood ACP" },

  // LED Displays (5 items)
  { id: 1, title: "Backlit LED Signage", category: "LED Displays", src: "/gallery/led-displays/backlit-led-signage.webp", spec: "Cast Acrylic 3D Letters • Samsung LED Modules" },
  { id: 2, title: "Glow Sign Board", category: "LED Displays", src: "/gallery/led-displays/glow-sign-board.webp", spec: "Aluminium Frame • High-Lumen Outdoor Illumination" },
  { id: 9, title: "Neon Flexible Lights", category: "LED Displays", src: "/gallery/led-displays/neon-flexible-lights.webp", spec: "Custom Silicon Neon Flex • 12V Energy Efficient" },
  { id: 15, title: "Storefront LED Display", category: "LED Displays", src: "/gallery/led-displays/storefront-led-display.webp", spec: "Warm-White Commercial Storefront Glow Letters" },
  { id: 19, title: "Fabric Lightbox", category: "LED Displays", src: "/gallery/led-displays/fabric-lightbox.webp", spec: "Edge-lit Frameless SEG Architectural Lightbox" },

  // ACP Work (6 items)
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

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  // Filter items strictly by category with zero extra/fake padding
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

  // Distribute the exact filtered items across the 5 bento columns
  // Column 1 gets bottom image + 4 images in its empty space (taken from the bottom of cols 2-5)
  const col1Bottom: GalleryItem[] = [];
  const col1Space: GalleryItem[] = [];
  const col2: GalleryItem[] = [];
  const col3: GalleryItem[] = [];
  const col4: GalleryItem[] = [];
  const col5: GalleryItem[] = [];

  const spaceCount = filtered.length >= 16 ? 4 : 0;

  filtered.forEach((item, index) => {
    if (index === 0) {
      col1Bottom.push(item);
    } else if (spaceCount > 0 && index >= filtered.length - spaceCount) {
      // The 4 bottom-most images are moved into Column 1's empty space
      col1Space.push(item);
    } else {
      const colIndex = (index - 1) % 4; // Cycles across columns 2, 3, 4, 5
      if (colIndex === 0) col2.push(item);
      else if (colIndex === 1) col3.push(item);
      else if (colIndex === 2) col4.push(item);
      else col5.push(item);
    }
  });

  // Mobile 2-column staggered distribution matching reference image
  const mobCol1 = filtered.filter((_, i) => i % 2 === 0);
  const mobCol2 = filtered.filter((_, i) => i % 2 === 1);

  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8 pb-20">
      {/* Background ambient subtle purple glow */}
      <div
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 h-96 w-[650px] rounded-full bg-purple-100/30 blur-3xl -z-10"
        aria-hidden="true"
      />

      {/* DESKTOP FILTER TABS (STRICT COUNT FOR EACH CATEGORY) */}
      <div className="hidden lg:flex mb-10 flex-wrap items-center justify-between gap-4 border-b border-zinc-200/80 pb-5">
        <div className="no-scrollbar flex items-center gap-2 overflow-x-auto p-0.5">
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
                  "relative flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-200 whitespace-nowrap cursor-pointer select-none",
                  isActive
                    ? "bg-zinc-950 text-white shadow-xs"
                    : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
                )}
              >
                <span>{cat}</span>
                <span
                  className={cn(
                    "rounded-full px-1.5 py-0.2 text-[10px] font-bold",
                    isActive ? "bg-white/20 text-white" : "bg-zinc-100 text-zinc-500"
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="text-xs font-semibold text-zinc-500">
          Showing <span className="font-bold text-zinc-950">{filtered.length}</span> {activeCategory === "All" ? "Total Projects" : `${activeCategory} Projects`}
        </div>
      </div>

      {/* ======================================================== */}
      {/* LAPTOP / DESKTOP VIEW: EXACT 5-COLUMN BENTO GRID         */}
      {/* (Zero Dummy Text, Exact Filter Count, Perfect Alignment)  */}
      {/* ======================================================== */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.35 }}
          className="hidden lg:grid grid-cols-[1.38fr_1fr_1fr_1fr_1fr] gap-3.5 xl:gap-4 items-end"
        >
          {/* ==================== COLUMN 1 ==================== */}
          {/* Title (Big like About Us), Subtitle (Small like now), Purple Button, and Bottom Image */}
          <div className="flex flex-col justify-between h-full space-y-6">
            <div className="pt-1">
              <h1 className="font-heading text-[30px] sm:text-[38px] md:text-[44px] lg:text-[48px] xl:text-[54px] font-black tracking-tight text-zinc-950 leading-tight mb-3 whitespace-nowrap">
                The Signage <span className="text-[#800080]">Vault.</span>
              </h1>
              <p className="mt-3 text-xs sm:text-[13.5px] text-zinc-600 leading-relaxed font-normal max-w-sm">
                From precision-cut 3D titanium letters to commercial ACP elevations, explore real project installations crafted at our Tukdoji Square workshop.
              </p>
              <div className="mt-5">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.contact.whatsappNumber}?text=${encodeURIComponent("Hello Prayas Graphics! I saw your portfolio and would like to get a quote for my business in Nagpur.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl sm:rounded-2xl bg-[#800080] px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white uppercase shadow-[0_12px_24px_-4px_rgba(128,0,128,0.35)] transition-all duration-200 hover:bg-[#6b006b] hover:shadow-[0_16px_30px_-4px_rgba(128,0,128,0.45)] hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
                >
                  Get a Custom Quote
                </a>
              </div>
            </div>

            {/* Grouped photos with tight, consistent bento spacing */}
            <div className="space-y-3.5 xl:space-y-4 pt-4">
              {/* 4 Photos rendered into the empty space of Column 1 */}
              {col1Space.length > 0 && (
                <div className="grid grid-cols-2 gap-3 xl:gap-3.5">
                  {col1Space.map((item) => (
                    <div
                      key={`col1-space-${item.id}`}
                      onClick={() => setLightboxItem(item)}
                      className="group relative aspect-[4/3] w-full overflow-hidden rounded-[22px] border border-zinc-200/90 bg-zinc-100 shadow-sm transition-all duration-500 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-950/10 cursor-pointer"
                    >
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        sizes="20vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 text-left opacity-0 transition-all duration-300 group-hover:opacity-100">
                        <p className="text-xs font-bold text-white leading-tight line-clamp-1">{item.title}</p>
                        <p className="text-[10px] text-purple-300 font-semibold mt-0.5">{item.category}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Col 1 Bottom Image (Slot 0) */}
              {col1Bottom[0] && (
                <div
                  onClick={() => setLightboxItem(col1Bottom[0])}
                  className="group relative aspect-[16/10] w-full overflow-hidden rounded-[28px] border border-zinc-200/90 bg-zinc-100 shadow-sm transition-all duration-500 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-950/10 cursor-pointer"
                >
                  <Image
                    src={col1Bottom[0].src}
                    alt={col1Bottom[0].title}
                    fill
                    sizes="30vw"
                    priority
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-3 left-3 right-3 text-left opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <p className="text-xs font-bold text-white leading-tight">{col1Bottom[0].title}</p>
                    <p className="text-[10px] text-purple-300 font-semibold mt-0.5">{col1Bottom[0].category}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ==================== COLUMN 2 ==================== */}
          <div className="flex flex-col space-y-3.5 xl:space-y-4 justify-end h-full">
            {col2.map((item, idx) => (
              <div
                key={`col2-${item.id}`}
                onClick={() => setLightboxItem(item)}
                className={cn(
                  "group relative w-full overflow-hidden rounded-[28px] border border-zinc-200/90 bg-zinc-100 shadow-sm transition-all duration-500 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-950/10 cursor-pointer",
                  idx === 0 && col2.length > 1 ? "aspect-[3/3.8]" : "aspect-[4/3]"
                )}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="20vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-3 left-3 right-3 text-left opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <p className="text-xs font-bold text-white leading-tight">{item.title}</p>
                  <p className="text-[10px] text-purple-300 font-semibold mt-0.5">{item.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ==================== COLUMN 3 ==================== */}
          <div className="flex flex-col space-y-3.5 xl:space-y-4 justify-end h-full">
            {col3.map((item, idx) => (
              <div
                key={`col3-${item.id}`}
                onClick={() => setLightboxItem(item)}
                className={cn(
                  "group relative w-full overflow-hidden rounded-[28px] border border-zinc-200/90 bg-zinc-100 shadow-sm transition-all duration-500 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-950/10 cursor-pointer",
                  idx === 0 && col3.length > 1 ? "aspect-[3/4.2]" : "aspect-[3/3.6]"
                )}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="20vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-3 left-3 right-3 text-left opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <p className="text-xs font-bold text-white leading-tight">{item.title}</p>
                  <p className="text-[10px] text-purple-300 font-semibold mt-0.5">{item.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ==================== COLUMN 4 ==================== */}
          <div className="flex flex-col space-y-3.5 xl:space-y-4 justify-end h-full">
            {col4.map((item, idx) => (
              <div
                key={`col4-${item.id}`}
                onClick={() => setLightboxItem(item)}
                className={cn(
                  "group relative w-full overflow-hidden rounded-[28px] border border-zinc-200/90 bg-zinc-100 shadow-sm transition-all duration-500 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-950/10 cursor-pointer",
                  idx === 0 && col4.length > 1 ? "aspect-[3/4]" : "aspect-[3/4.4]"
                )}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="20vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-3 left-3 right-3 text-left opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <p className="text-xs font-bold text-white leading-tight">{item.title}</p>
                  <p className="text-[10px] text-purple-300 font-semibold mt-0.5">{item.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ==================== COLUMN 5 ==================== */}
          <div className="flex flex-col space-y-3 xl:space-y-3.5 justify-end h-full">
            {col5.map((item, idx) => (
              <div
                key={`col5-${item.id}`}
                onClick={() => setLightboxItem(item)}
                className={cn(
                  "group relative w-full overflow-hidden rounded-[26px] border border-zinc-200/90 bg-zinc-100 shadow-sm transition-all duration-500 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-950/10 cursor-pointer",
                  idx === 0 ? "aspect-[16/10]" : "aspect-[3/4.6]"
                )}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="20vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-2.5 left-2.5 right-10 text-left opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <p className="text-[11px] font-bold text-white leading-tight">{item.title}</p>
                  <p className="text-[9px] text-purple-300 font-semibold">{item.category}</p>
                </div>

                {/* Frosted Glass Circular Action Button on Featured Cards */}
                {idx === 0 ? (
                  <div
                    className="absolute bottom-2.5 right-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-zinc-900 backdrop-blur-md border border-white/60 shadow-sm transition-all duration-300 group-hover:bg-[#800080] group-hover:text-white"
                    aria-label="Explore details"
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                  </div>
                ) : (
                  <div
                    className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-zinc-900 backdrop-blur-md border border-white/60 shadow-md transition-all duration-300 group-hover:bg-[#800080] group-hover:text-white group-hover:scale-110"
                    aria-label="Expand photo"
                  >
                    <Maximize2 className="h-4 w-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ======================================================== */}
      {/* MOBILE / TABLET VIEW (EXACT MATCH TO REFERENCE IMAGE)     */}
      {/* ======================================================== */}
      <div className="lg:hidden space-y-6">
        <div className="text-left">
          <h1 className="font-heading text-2xl sm:text-3xl font-black tracking-tight text-zinc-950 leading-tight">
            The Signage <span className="text-[#800080]">Vault.</span>
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
            From precision-cut 3D titanium letters to commercial ACP elevations, explore real project installations crafted at our Tukdoji Square workshop.
          </p>
          <div className="mt-4">
            <a
              href={`https://wa.me/${BUSINESS_INFO.contact.whatsappNumber}?text=${encodeURIComponent("Hello Prayas Graphics! I saw your portfolio and would like to get a quote for my business in Nagpur.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#800080] px-6 py-3 text-xs font-bold tracking-wider text-white uppercase shadow-[0_12px_24px_-4px_rgba(128,0,128,0.35)] active:scale-95 transition-transform"
            >
              Get a Custom Quote
            </a>
          </div>
        </div>

        {/* Mobile Filter Carousel Pills (Positioned below the heading & button) */}
        <div className="no-scrollbar flex items-center gap-2 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? allGalleryItems.length
                : allGalleryItems.filter((i) => i.category === cat).length;
            const isActive = activeCategory === cat;

            return (
              <button
                key={`mob-filter-${cat}`}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "relative flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-200 whitespace-nowrap cursor-pointer select-none shrink-0",
                  isActive
                    ? "bg-zinc-950 text-white shadow-xs"
                    : "text-zinc-600 hover:text-zinc-950 bg-zinc-100"
                )}
              >
                <span>{cat}</span>
                <span
                  className={cn(
                    "rounded-full px-1.5 py-0.2 text-[10px] font-bold",
                    isActive ? "bg-white/20 text-white" : "bg-zinc-200 text-zinc-600"
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Mobile 2-Column Staggered Bento Grid matching reference image */}
        <div className="grid grid-cols-2 gap-3 sm:gap-3.5 items-start">
          {/* Column 1 (Left Column: starts tall, then landscape, alternating) */}
          <div className="flex flex-col gap-3 sm:gap-3.5">
            {mobCol1.map((item, idx) => (
              <div
                key={`mob-col1-${item.id}`}
                onClick={() => setLightboxItem(item)}
                className={cn(
                  "group relative w-full overflow-hidden rounded-[20px] border border-zinc-200/90 bg-zinc-100 shadow-xs cursor-pointer active:scale-[0.98] transition-transform",
                  idx % 2 === 0 ? "aspect-[3/4.2]" : "aspect-[4/3]"
                )}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
                {/* Top-Right Glassmorphism Badge from reference image */}
                <div className="absolute top-2.5 right-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-black/45 text-white/95 backdrop-blur-md border border-white/20 shadow-xs pointer-events-none">
                  <Maximize2 className="h-3.5 w-3.5" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-left pointer-events-none">
                  <p className="text-xs font-bold text-white leading-tight drop-shadow-sm line-clamp-1">{item.title}</p>
                  <p className="text-[10px] text-purple-300 font-medium mt-0.5">{item.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 (Right Column: starts landscape, then tall, alternating) */}
          <div className="flex flex-col gap-3 sm:gap-3.5">
            {mobCol2.map((item, idx) => (
              <div
                key={`mob-col2-${item.id}`}
                onClick={() => setLightboxItem(item)}
                className={cn(
                  "group relative w-full overflow-hidden rounded-[20px] border border-zinc-200/90 bg-zinc-100 shadow-xs cursor-pointer active:scale-[0.98] transition-transform",
                  idx % 2 === 0 ? "aspect-[4/3]" : "aspect-[3/4.4]"
                )}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
                {/* Top-Right Glassmorphism Badge from reference image */}
                <div className="absolute top-2.5 right-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-black/45 text-white/95 backdrop-blur-md border border-white/20 shadow-xs pointer-events-none">
                  <Maximize2 className="h-3.5 w-3.5" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-left pointer-events-none">
                  <p className="text-xs font-bold text-white leading-tight drop-shadow-sm line-clamp-1">{item.title}</p>
                  <p className="text-[10px] text-purple-300 font-medium mt-0.5">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* LUXURY EXHIBITION LIGHTBOX DIALOG                        */}
      {/* ======================================================== */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/85 p-4 backdrop-blur-xl"
            onClick={() => setLightboxItem(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 16 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md border border-white/10 transition-colors hover:bg-white hover:text-zinc-950 cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Photo Frame */}
                <div className="relative aspect-[4/3] w-full md:aspect-auto md:min-h-[460px] md:col-span-7 bg-zinc-950">
                  <Image
                    src={lightboxItem.src}
                    alt={lightboxItem.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Information Panel */}
                <div className="flex flex-col justify-between p-6 sm:p-8 md:col-span-5 bg-gradient-to-b from-zinc-900 to-zinc-950 text-left">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-bold text-purple-300 border border-purple-500/30">
                        {lightboxItem.category}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-400">
                        <ShieldCheck className="h-3.5 w-3.5" /> 100% Real Project
                      </span>
                    </div>

                    <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold text-white">
                      {lightboxItem.title}
                    </h3>

                    <div className="mt-4 space-y-2 border-t border-zinc-800 pt-4 text-xs text-zinc-300">
                      <div className="flex justify-between">
                        <span className="text-zinc-500">Fabrication:</span>
                        <span className="font-semibold text-zinc-200">{lightboxItem.spec}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-500">Location:</span>
                        <span className="font-semibold text-zinc-200">Nagpur, Maharashtra</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-500">Workshop:</span>
                        <span className="font-semibold text-zinc-200">Prayas Graphics, Tukdoji Sq.</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-zinc-800">
                    <a
                      href={getWhatsAppUrl(lightboxItem.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#800080] py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-purple-950/30 transition-all hover:bg-[#6b006b] hover:shadow-purple-950/50 cursor-pointer"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Get WhatsApp Quote For This
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
