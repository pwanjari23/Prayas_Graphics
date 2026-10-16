"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ChevronDown,
  Layers,
  Building2,
  Tag,
  FileText,
  ShieldCheck,
  Sun,
  Sparkles,
} from "lucide-react";
import { getServiceBySlug } from "@/lib/services-data";
import QuoteDrawer from "./QuoteDrawer";

export default function ServiceDetailView({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Accordion state for Concept 2 mobile view (Pricing open, others closed by default)
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    pricing: true,
  });

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!service) return null;

  return (
    <>
      {/* ============================================================== */}
      {/* MOBILE SCREEN VIEW (CONCEPT 2: iOS-STYLE INTERACTIVE SHEET)    */}
      {/* ============================================================== */}
      <div className="block lg:hidden w-full -mt-4 pb-28">
        {/* Cinematic Backdrop Hero */}
        <div className="relative w-full aspect-[4/3.2] min-h-[300px] sm:min-h-[360px] overflow-hidden bg-zinc-950">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          {/* Dual Dark Gradients for Maximum Contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-zinc-950/90" />

          {/* Top Floating Navigation */}
          <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
            <Link
              href="/services"
              className="flex h-10 items-center gap-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 px-3.5 text-xs font-semibold text-white shadow-lg active:scale-95 transition-transform"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </Link>

            <span className="rounded-full bg-black/40 backdrop-blur-md border border-white/20 px-3 py-1 text-[11px] font-bold text-purple-200 shadow-lg">
              {service.tag}
            </span>
          </div>

          {/* Hero Bottom Overlay: Brand & Title */}
          <div className="absolute bottom-10 left-5 right-5 z-20">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 px-3 py-1 text-[11px] font-bold text-white mb-2 shadow-sm">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#800080] text-[10px] font-black">
                P
              </span>
              <span>Prayas Graphics</span>
            </div>
            <h1 className="font-heading text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight">
              {service.title}
            </h1>
          </div>
        </div>

        {/* Overlapping Curved Interactive Bottom Sheet */}
        <div className="-mt-7 relative z-20 rounded-t-[32px] bg-white px-4 sm:px-6 pt-3 pb-8 shadow-2xl border-t border-zinc-100">
          {/* Sheet Handle */}
          <div className="w-12 h-1.5 rounded-full bg-zinc-300 mx-auto my-2" />

          {/* Quick Trust Feature Pills (Horizontal Scrollable) */}
          <div className="no-scrollbar flex items-center gap-2 overflow-x-auto py-3">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 border border-zinc-200/80 px-3 py-1 text-[11px] font-bold text-zinc-700 whitespace-nowrap shadow-2xs">
              <Sun className="h-3 w-3 text-amber-500" />
              <span>Weather-Proof</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 border border-zinc-200/80 px-3 py-1 text-[11px] font-bold text-zinc-700 whitespace-nowrap shadow-2xs">
              <ShieldCheck className="h-3 w-3 text-green-600" />
              <span>8–10 Yr Life</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 border border-purple-200 px-3 py-1 text-[11px] font-bold text-[#800080] whitespace-nowrap shadow-2xs">
              <Sparkles className="h-3 w-3 text-[#800080]" />
              <span>Custom 3D Fabrication</span>
            </div>
          </div>

          {/* Expandable Accordion List */}
          <div className="mt-3 space-y-3">
            {/* Accordion 1: Pricing */}
            <div className="rounded-2xl border border-zinc-200/90 bg-white overflow-hidden shadow-xs">
              <button
                type="button"
                onClick={() => toggleAccordion("pricing")}
                className="w-full flex items-center justify-between p-4 text-left font-heading font-bold text-zinc-900 cursor-pointer bg-zinc-50/50"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#800080]/10 text-[#800080]">
                    <Tag className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-extrabold text-zinc-900">Pricing & Rates</span>
                </div>
                <ChevronDown
                  className={`h-4 w-4 text-zinc-500 transition-transform duration-200 ${
                    openAccordions.pricing ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openAccordions.pricing && (
                <div className="p-4 pt-1 border-t border-zinc-100 bg-white">
                  {service.originalPrice && (
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Original Rate:</span>
                      <span className="text-xs text-zinc-400 line-through font-semibold">
                        ₹{service.originalPrice.toLocaleString("en-IN")}
                      </span>
                    </div>
                  )}
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-black text-[#800080]">
                      {service.pricing}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-zinc-500 leading-relaxed font-normal">
                    Estimates vary based on installation complexity, size, and material tier.
                  </p>
                </div>
              )}
            </div>

            {/* Accordion 2: Materials & Specifications */}
            <div className="rounded-2xl border border-zinc-200/90 bg-white overflow-hidden shadow-xs">
              <button
                type="button"
                onClick={() => toggleAccordion("specs")}
                className="w-full flex items-center justify-between p-4 text-left font-heading font-bold text-zinc-900 cursor-pointer bg-zinc-50/50"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-100 text-[#800080]">
                    <Layers className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-extrabold text-zinc-900">Materials & Finish</span>
                </div>
                <ChevronDown
                  className={`h-4 w-4 text-zinc-500 transition-transform duration-200 ${
                    openAccordions.specs ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openAccordions.specs && (
                <div className="p-4 pt-2 border-t border-zinc-100 bg-white">
                  <ul className="space-y-2">
                    {service.materials.map((mat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-700 font-medium">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#800080] shrink-0 mt-1.5" />
                        <span>{mat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Accordion 3: Common Use Cases */}
            <div className="rounded-2xl border border-zinc-200/90 bg-white overflow-hidden shadow-xs">
              <button
                type="button"
                onClick={() => toggleAccordion("useCases")}
                className="w-full flex items-center justify-between p-4 text-left font-heading font-bold text-zinc-900 cursor-pointer bg-zinc-50/50"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-green-100 text-green-700">
                    <Building2 className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-extrabold text-zinc-900">Where It&apos;s Used</span>
                </div>
                <ChevronDown
                  className={`h-4 w-4 text-zinc-500 transition-transform duration-200 ${
                    openAccordions.useCases ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openAccordions.useCases && (
                <div className="p-4 pt-2 border-t border-zinc-100 bg-white">
                  <ul className="space-y-2">
                    {service.useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-zinc-700 font-medium">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Accordion 4: About / Description */}
            {service.longDescription && (
              <div className="rounded-2xl border border-zinc-200/90 bg-white overflow-hidden shadow-xs">
                <button
                  type="button"
                  onClick={() => toggleAccordion("overview")}
                  className="w-full flex items-center justify-between p-4 text-left font-heading font-bold text-zinc-900 cursor-pointer bg-zinc-50/50"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700">
                      <FileText className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-extrabold text-zinc-900">About this Signboard</span>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 text-zinc-500 transition-transform duration-200 ${
                      openAccordions.overview ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openAccordions.overview && (
                  <div className="p-4 pt-2 border-t border-zinc-100 bg-white">
                    <p className="text-xs text-zinc-600 leading-relaxed font-normal whitespace-pre-line">
                      {service.longDescription}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Fixed Bottom Action Dock (Thumb-Zone Trigger) */}
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-zinc-200/90 p-3.5 px-4 flex items-center justify-between gap-3 shadow-2xl">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Starting Rate</span>
            <span className="text-sm font-black text-[#800080]">
              {service.offerPrice ? `₹${service.offerPrice.toLocaleString("en-IN")}` : service.pricing.split(",")[0]}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            className="flex-1 max-w-[210px] inline-flex items-center justify-center gap-2 rounded-xl bg-[#800080] py-3 text-xs font-bold tracking-wider text-white uppercase shadow-lg shadow-purple-900/30 transition-all hover:bg-[#6b006b] active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <span>Get Custom Quote</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* ============================================================== */}
      {/* LAPTOP / DESKTOP VIEW (PRESERVED EXACTLY AS PER YOUR DESIGN)    */}
      {/* ============================================================== */}
      <div className="hidden lg:flex lg:flex-col lg:items-center w-full">
        {/* Back to Services Navigation */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 mb-4 sm:mb-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-white/90 backdrop-blur-xs px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-600 hover:text-[#800080] hover:border-purple-200 hover:bg-white transition-all shadow-xs group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 text-zinc-500 group-hover:text-[#800080]" />
            <span>Back to All Services</span>
          </Link>
        </div>

        {/* Hero Showcase Card (Immersive Image Hero) */}
        <section className="w-full max-w-7xl mx-auto px-4 md:px-6 mb-8 sm:mb-12">
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] min-h-[380px] sm:min-h-[440px] overflow-hidden rounded-[28px] sm:rounded-[36px] bg-zinc-950 shadow-2xl">
            {/* Background Image */}
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
            />
            {/* Cinematic Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/50 to-zinc-950/20 sm:bg-gradient-to-r sm:from-zinc-950/95 sm:via-zinc-950/60 sm:to-transparent" />

            {/* Content Overlay */}
            <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14">
              {/* Top-Left: Brand Logo & Category Tag */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 px-3.5 py-1.5 shadow-sm">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#800080] text-[11px] font-black text-white">
                    P
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                    Prayas Graphics
                  </span>
                </div>
                <span className="rounded-full bg-white/15 backdrop-blur-md border border-white/10 px-3 py-1 text-[11px] sm:text-xs font-semibold text-purple-200">
                  {service.tag}
                </span>
              </div>

              {/* Bottom-Left: Title & CTA Button */}
              <div className="max-w-xl">
                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6">
                  {service.title}
                </h1>
                <div>
                  <button
                    type="button"
                    onClick={() => setIsDrawerOpen(true)}
                    className="inline-flex items-center justify-center rounded-full bg-[#800080] px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white uppercase shadow-lg shadow-purple-900/40 transition-all duration-200 hover:bg-[#6b006b] hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
                  >
                    Get a Quote for This
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Details & Specifications Section */}
        <section className="w-full max-w-7xl mx-auto px-4 md:px-6 mb-14 sm:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Left Column: Description / Overview Box with Embedded CTA */}
            {service.longDescription && (
              <div className="lg:col-span-7 rounded-2xl sm:rounded-[28px] bg-white p-6 sm:p-8 lg:p-10 shadow-sm border border-zinc-100 flex flex-col justify-between h-full">
                <div>
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#800080] mb-3">
                    Overview
                  </span>
                  <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-extrabold text-zinc-900 tracking-tight mb-4">
                    About {service.title}
                  </h2>
                  <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed whitespace-pre-line">
                    {service.longDescription}
                  </p>
                </div>

                {/* Embedded CTA Banner filling the bottom of this card */}
                <div className="mt-8 relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 overflow-hidden rounded-2xl bg-zinc-950 p-6 sm:p-7 shadow-md border border-zinc-800/80">
                  {/* Subtle dark ambient gradient */}
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-r from-purple-950/20 via-transparent to-transparent"
                    aria-hidden="true"
                  />

                  <div className="relative z-10 flex flex-col items-start max-w-md text-left">
                    <h3 className="font-heading text-lg sm:text-xl font-bold tracking-tight text-white leading-snug">
                      Ready to elevate your brand presence?
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                      Send us your requirements, and we&apos;ll provide a custom quote for your {service.title} project within 14 hours.
                    </p>
                  </div>

                  <div className="relative z-10 shrink-0 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => setIsDrawerOpen(true)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#800080] px-6 py-3 text-xs sm:text-sm font-bold tracking-wider text-white uppercase shadow-md transition-all duration-200 hover:bg-[#6b006b] hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
                    >
                      <span>Request Custom Quote</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Right Column: Stacked Pricing, Common Use Cases, Materials & Finish */}
            <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6">
              {/* 1. Pricing Box */}
              <div className="rounded-2xl sm:rounded-[24px] bg-white p-6 sm:p-7 shadow-sm border border-zinc-100">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-zinc-900 mb-3 sm:mb-4">Pricing</h3>
                <div className="flex flex-col gap-1 mb-2">
                  {service.originalPrice && (
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-400">Original Rate</span>
                      <span className="text-xs sm:text-sm text-zinc-400 line-through font-semibold">
                        ₹{service.originalPrice.toLocaleString("en-IN")}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col">
                    {service.originalPrice && (
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#800080] opacity-70">
                        Offer Price
                      </span>
                    )}
                    <p className="text-xl sm:text-2xl font-bold text-[#800080] leading-tight">
                      {service.pricing}
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-zinc-500 mt-3 sm:mt-4 leading-relaxed">
                  Estimates may vary based on installation complexity, size, and material tier.
                </p>
              </div>

              {/* 2. Common Use Cases Box (Below Pricing) */}
              <div className="rounded-2xl sm:rounded-[24px] bg-white p-6 sm:p-7 shadow-sm border border-zinc-100">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-zinc-900 mb-3 sm:mb-4">Common Use Cases</h3>
                <ul className="space-y-2.5 sm:space-y-3">
                  {service.useCases.map((useCase, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
                      <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm md:text-base text-zinc-600 font-medium leading-snug">
                        {useCase}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. Materials & Finish Box (Below Common Use Cases) */}
              <div className="rounded-2xl sm:rounded-[24px] bg-white p-6 sm:p-7 shadow-sm border border-zinc-100">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-zinc-900 mb-3 sm:mb-4">Materials & Finish</h3>
                <ul className="space-y-2.5 sm:space-y-3">
                  {service.materials.map((material, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
                      <div className="h-2 w-2 rounded-full bg-[#800080]/70 shrink-0 mt-1.5" />
                      <span className="text-xs sm:text-sm md:text-base text-zinc-600 font-medium leading-snug">
                        {material}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Right Side Quote Drawer */}
      <QuoteDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        serviceSlug={service.slug}
        serviceTitle={service.title}
      />
    </>
  );
}
