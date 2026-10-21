"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
import { servicesData } from "@/lib/services-data";

export default function PopularPosters() {
  const featuredSlugs = ["acrylic-acp-signboard", "ss-letter-backlit-golden", "flex-roll-up-standee"];
  const featuredServices = servicesData.filter((s) => featuredSlugs.includes(s.slug));

  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = featuredServices[activeIndex] || featuredServices[0];

  // Specific curated material/feature tags for each featured service
  const serviceBadgesMap: Record<string, string[]> = {
    "acrylic-acp-signboard": ["3D Acrylic Letters", "ACP Background", "Warm LED Halo-Lit", "Weatherproof IP65"],
    "ss-letter-backlit-golden": ["Grade 304 Stainless Steel", "Golden Titanium Coating", "Halo Backlit LED", "Zero Rust Guarantee"],
    "flex-roll-up-standee": ["High-Res Star Flex", "Anodized Aluminum Base", "Portable Carry Bag", "Fast 24h Setup"],
  };

  const servicePillBadge: Record<string, string> = {
    "acrylic-acp-signboard": "Core Commercial Service",
    "ss-letter-backlit-golden": "Ultra-Luxury Branding",
    "flex-roll-up-standee": "Event & Exhibition",
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-6 md:py-24">
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-200/80 bg-purple-50 px-3.5 py-1 text-xs font-bold text-[#800080] mb-3.5">
          <Sparkles className="h-3.5 w-3.5" />
          <span>FLAGSHIP SIGNAGE SOLUTIONS</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 leading-tight">
          Featured Services
        </h2>
        <p className="mt-3.5 text-sm sm:text-base text-zinc-500 font-normal leading-relaxed">
          Discover our most requested manufacturing and signage services in Nagpur. Select any service to explore specifications and configure pricing.
        </p>
      </div>

      {/* Concept 1: Interactive Vertical Split Showcase (Image on Left, Text on Right) */}
      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-12">
        {/* LEFT COLUMN: Expansive Showcase Stage Card with Image */}
        <div className="w-full lg:w-[58%] flex order-1 lg:order-1">
          <div className="w-full rounded-[28px] sm:rounded-[36px] border border-zinc-200/90 bg-white p-5 sm:p-7 shadow-xs flex flex-col justify-between">
            <div>
              {/* Header inside Stage */}
              <div className="flex items-center justify-between mb-4 px-1">
                <div className="flex items-center gap-2.5">
                  <span className="font-heading text-sm font-extrabold text-zinc-400">
                    0{activeIndex + 1}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-zinc-300" />
                  <h4 className="font-heading text-base sm:text-lg font-bold text-zinc-900">
                    {activeService.title}
                  </h4>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full">
                  <ShieldCheck className="h-3 w-3" />
                  NMC Verified
                </span>
              </div>

              {/* Dynamic Image Display with Smooth Crossfade */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full overflow-hidden rounded-2xl bg-zinc-100 border border-zinc-100 shadow-inner mb-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.slug}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={activeService.image}
                      alt={activeService.title}
                      fill
                      priority
                      className={`${
                        activeService.imageFit === "contain" ? "object-contain p-4" : "object-cover"
                      } transition-transform duration-500 hover:scale-105`}
                      sizes="(max-width: 1024px) 100vw, 650px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent pointer-events-none" />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Material & Feature Specification Chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                {(serviceBadgesMap[activeService.slug] || activeService.materials.slice(0, 4)).map((badge, bIdx) => (
                  <span
                    key={bIdx}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-50 border border-zinc-200/80 px-2.5 py-1 text-xs font-semibold text-zinc-700"
                  >
                    <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Action & Pricing Bar */}
            <div className="pt-4 border-t border-zinc-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-0.5">
                  Starting Offer Price
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-heading text-2xl font-black text-zinc-950">
                    ₹{activeService.offerPrice?.toLocaleString() || activeService.demoRatePerSqFt}
                  </span>
                  <span className="text-xs font-medium text-zinc-500">
                    {activeService.slug === "flex-roll-up-standee" ? "/unit" : "/sq ft"}
                  </span>
                  {activeService.originalPrice && (
                    <span className="text-xs text-zinc-400 line-through">
                      ₹{activeService.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <Link
                  href={`/services/${activeService.slug}`}
                  className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-950 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#800080] hover:shadow-md cursor-pointer"
                >
                  <span>Configure & Quote</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Vertical Service Selector with Text (Horizontal Scroll on Mobile) */}
        <div className="w-full lg:w-[42%] flex flex-col justify-between order-2 lg:order-2 overflow-hidden lg:overflow-visible">
          <div className="flex flex-row overflow-x-auto pb-4 pt-1 gap-3.5 snap-x snap-mandatory scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0 lg:flex-col lg:overflow-visible lg:pb-0 lg:pt-0 lg:gap-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {featuredServices.map((service, idx) => {
              const isActive = activeIndex === idx;
              const stepNumber = `0${idx + 1}`;

              return (
                <button
                  key={service.slug}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`group relative flex items-start gap-3.5 sm:gap-4 p-4.5 sm:p-6 rounded-2xl md:rounded-[24px] text-left transition-all duration-300 border cursor-pointer shrink-0 snap-start w-[84vw] sm:w-[340px] lg:w-full ${
                    isActive
                      ? "bg-white border-zinc-300/90 shadow-md ring-1 ring-zinc-200/60"
                      : "bg-zinc-50/70 border-zinc-200/60 hover:bg-white hover:border-zinc-300 hover:shadow-xs"
                  }`}
                >
                  {/* Left Active Indicator Bar */}
                  <div
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-10 rounded-r-full transition-all duration-300 ${
                      isActive ? "bg-[#800080]" : "bg-transparent group-hover:bg-zinc-300"
                    }`}
                  />

                  {/* Step Number */}
                  <span
                    className={`font-heading text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight transition-colors duration-200 ${
                      isActive ? "text-zinc-900" : "text-zinc-400 group-hover:text-zinc-600"
                    }`}
                  >
                    {stepNumber}
                  </span>

                  {/* Title & Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#800080] bg-[#800080]/10 px-2 py-0.5 rounded-full">
                        {servicePillBadge[service.slug] || service.tag}
                      </span>
                    </div>

                    <h3
                      className={`font-heading text-base sm:text-lg lg:text-xl font-bold tracking-tight transition-colors duration-200 ${
                        isActive ? "text-zinc-950" : "text-zinc-700 group-hover:text-zinc-950"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p className="mt-1.5 text-xs sm:text-sm text-zinc-500 font-normal line-clamp-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Mobile Indicator Dots */}
          <div className="flex lg:hidden items-center justify-center gap-1.5 mt-2 mb-4">
            {featuredServices.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setActiveIndex(dotIdx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === dotIdx ? "w-6 bg-[#800080]" : "w-1.5 bg-zinc-300"
                }`}
                aria-label={`Go to service ${dotIdx + 1}`}
              />
            ))}
          </div>

          {/* Bottom All Services Link */}
          <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-zinc-200/80 flex items-center justify-between">
            <span className="text-xs text-zinc-500 font-medium">Looking for customized fabrication?</span>
            <Link
              href="/services"
              className="group inline-flex items-center gap-1.5 text-xs font-bold text-zinc-900 hover:text-[#800080] transition-colors"
            >
              <span>Explore All 12 Services</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
