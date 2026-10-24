"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Star, Users } from "lucide-react";
import { motion } from "framer-motion";
import { BUSINESS_INFO } from "@/lib/business-info";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white via-white to-[#faf8fc] pt-24 sm:pt-28 md:pt-32 pb-6 sm:pb-8">
      {/* ========================================================
          BACKGROUND: Architectural Blueprint & Ambient Illumination
          Isolated strictly within an overflow-hidden background container
          so that it never interferes with content layout or clips shadows
          ======================================================== */}
      <div
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Subtle Architectural Blueprint Texture */}
        <Image
          src="/hero/hero-blueprint-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center md:object-right-top opacity-[1] transition-opacity"
        />

        {/* Soft radial and linear masks so text remains crisp and readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-transparent to-white" />

        {/* Luminous purple ambient illumination behind right collage */}
        <div className="absolute top-1/4 -right-16 md:right-4 w-[480px] sm:w-[650px] lg:w-[780px] h-[480px] sm:h-[600px] rounded-full bg-purple-400/[0.12] blur-[100px] transform-gpu pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[360px] sm:w-[480px] h-[360px] rounded-full bg-fuchsia-300/[0.08] blur-[90px] transform-gpu pointer-events-none" />
      </div>

      {/* ========================================================
          1. MAIN HERO CONTENT: Content-Driven 2-Column Grid
          ======================================================== */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">

          {/* ----------------------------------------------------
              LEFT COLUMN: Trust Badge, Headline, CTAs, Reviews
              ---------------------------------------------------- */}
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left lg:pr-2 xl:pr-4"
          >
            {/* 1. Trust & Compliance Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200/90 bg-white/95 px-3.5 sm:px-4 py-1.5 shadow-[0_2px_8px_rgba(128,0,128,0.06)] backdrop-blur-xs">
              <Sparkles className="h-3.5 w-3.5 text-[#800080] shrink-0" />
              <span className="text-[10px] sm:text-[11.5px] font-extrabold uppercase tracking-wider text-[#800080]">
                Nagpur&apos;s Premier Signage Manufacturer
              </span>
              <span className="text-purple-300 font-bold">•</span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-zinc-600 uppercase tracking-wide">
                NMC Compliant
              </span>
            </div>

            {/* 2. Main Hero Headline */}
            <h1 className="mt-4 sm:mt-5 font-heading text-4xl xs:text-5xl sm:text-6xl md:text-[62px] lg:text-[54px] xl:text-[66px] 2xl:text-[72px] font-black leading-[1.04] sm:leading-[1.05] tracking-tight text-zinc-950 text-balance">
              High-Quality{" "}
              <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#800080] via-[#990099] to-[#c026d3] bg-clip-text text-transparent">
                Signboards in Nagpur
              </span>{" "}
              <br className="hidden sm:inline" />
              for Every Business.
            </h1>

            {/* 3. Supporting Description */}
            <p className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-base md:text-lg text-zinc-600 font-normal leading-relaxed">
              Transform your brand&apos;s visibility with stunning, durable, and captivating signage solutions! From 3D acrylic letters to ACP elevations, we craft impressions that last.
            </p>

            {/* 4. Primary & Secondary CTA Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-7 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-zinc-800 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-7 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-zinc-900 shadow-2xs transition-all duration-200 hover:bg-zinc-50 hover:border-zinc-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#800080] cursor-pointer"
              >
                Get a Quote
              </Link>
            </div>

            {/* 5. Google Review / Rating Social Proof */}
            <div className="mt-5 sm:mt-6">
              <a
                href={BUSINESS_INFO.socials.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read our 120+ verified Google Reviews with 4.9 out of 5 rating"
                className="group inline-flex items-center gap-2 select-none rounded-full py-1 text-zinc-800 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#800080]"
              >
                <div className="flex items-center gap-0.5 text-amber-500" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-bold text-zinc-900">4.9/5</span>
                <span className="text-xs sm:text-sm font-medium text-zinc-500 group-hover:underline">
                  (120+ Google Reviews)
                </span>
              </a>
            </div>
          </motion.div>

          {/* ----------------------------------------------------
              RIGHT COLUMN: Bespoke 6-Signage Image Collage
              ---------------------------------------------------- */}
          <motion.div
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6 w-full"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-4 xl:gap-5 w-full items-start">

              {/* Column A: Left stack of collage */}
              <div className="flex flex-col gap-3 sm:gap-4 lg:gap-4 xl:gap-5">
                {/* Image 1: Storefront LED Display */}
                <div className="group relative w-full aspect-[16/11] overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200/60 bg-zinc-900 shadow-[0_8px_22px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-8px_rgba(128,0,128,0.18)]">
                  <Image
                    src="/hero/collage/storefront-led.jpg"
                    alt="Storefront LED Display manufactured by Prayas Graphics"
                    fill
                    sizes="(max-width: 640px) 46vw, (max-width: 1024px) 45vw, 24vw"
                    priority
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 z-10 pointer-events-none">
                    <span className="inline-flex items-center rounded-full bg-black/60 backdrop-blur-md border border-white/15 px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold text-white tracking-wide shadow-xs">
                      Storefront LED Display
                    </span>
                  </div>
                </div>

                {/* Image 3: Lollipop Signboard */}
                <div className="group relative w-full aspect-[4/3.5] overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200/60 bg-zinc-900 shadow-[0_8px_22px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-8px_rgba(128,0,128,0.18)]">
                  <Image
                    src="/hero/collage/lollipop-signboard.png"
                    alt="Circular Double Sided Lollipop Signboard"
                    fill
                    sizes="(max-width: 640px) 46vw, (max-width: 1024px) 45vw, 24vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 z-10 pointer-events-none">
                    <span className="inline-flex items-center rounded-full bg-black/60 backdrop-blur-md border border-white/15 px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold text-white tracking-wide shadow-xs">
                      Lollipop Signboard
                    </span>
                  </div>
                </div>

                {/* Image 5: Halo Glow Letters */}
                <div className="group relative w-full aspect-[16/10] overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200/60 bg-zinc-900 shadow-[0_8px_22px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-8px_rgba(128,0,128,0.18)]">
                  <Image
                    src="/hero/collage/halo-glow.jpg"
                    alt="3D Halo Glow Letters on textured facade"
                    fill
                    sizes="(max-width: 640px) 46vw, (max-width: 1024px) 45vw, 24vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 z-10 pointer-events-none">
                    <span className="inline-flex items-center rounded-full bg-black/60 backdrop-blur-md border border-white/15 px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold text-white tracking-wide shadow-xs">
                      Halo Glow Letters
                    </span>
                  </div>
                </div>
              </div>

              {/* Column B: Right stack of collage (with gentle staggered offset) */}
              <div className="flex flex-col gap-3 sm:gap-4 lg:gap-4 xl:gap-5 pt-3 sm:pt-4 lg:pt-5">
                {/* Image 2: Neon Flexible Lights */}
                <div className="group relative w-full aspect-[4/4.8] overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200/60 bg-zinc-900 shadow-[0_8px_22px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-8px_rgba(128,0,128,0.18)]">
                  <Image
                    src="/hero/collage/neon-flexible.jpg"
                    alt="Warm Neon Flexible Lights Good Vibes Only"
                    fill
                    sizes="(max-width: 640px) 46vw, (max-width: 1024px) 45vw, 24vw"
                    priority
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 z-10 pointer-events-none">
                    <span className="inline-flex items-center rounded-full bg-black/60 backdrop-blur-md border border-white/15 px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold text-white tracking-wide shadow-xs">
                      Neon Flexible Lights
                    </span>
                  </div>
                </div>

                {/* Image 4: Flex Backlit Sign */}
                <div className="group relative w-full aspect-[16/8] overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200/60 bg-zinc-900 shadow-[0_8px_22px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-8px_rgba(128,0,128,0.18)]">
                  <Image
                    src="/hero/collage/flex-backlit.jpg"
                    alt="Flex Backlit Signboard on storefront facade"
                    fill
                    sizes="(max-width: 640px) 46vw, (max-width: 1024px) 45vw, 24vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 z-10 pointer-events-none">
                    <span className="inline-flex items-center rounded-full bg-black/60 backdrop-blur-md border border-white/15 px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold text-white tracking-wide shadow-xs">
                      Flex Backlit Sign
                    </span>
                  </div>
                </div>

                {/* Image 6: Architectural / Corporate Identity */}
                <div className="group relative w-full aspect-[4/3.5] overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200/60 bg-zinc-900 shadow-[0_8px_22px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-8px_rgba(128,0,128,0.18)]">
                  <Image
                    src="/hero/collage/architectural.jpg"
                    alt="Corporate Reception 3D Architectural Wall Branding"
                    fill
                    sizes="(max-width: 640px) 46vw, (max-width: 1024px) 45vw, 24vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 z-10 pointer-events-none">
                    <span className="inline-flex items-center rounded-full bg-black/60 backdrop-blur-md border border-white/15 px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold text-white tracking-wide shadow-xs">
                      Architectural
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* ========================================================
      {/* 2. HERO TRUST INDICATOR: "500+ Businesses Served" */}
      <div className="relative z-10 flex justify-center mt-7 sm:mt-9 md:mt-11 mb-2 sm:mb-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/95 border border-purple-200/90 px-4 sm:px-5 py-1.5 sm:py-2 shadow-[0_2px_10px_rgba(128,0,128,0.06)] backdrop-blur-xs">
          <Users className="h-4 w-4 text-[#800080]" />
          <span className="text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider text-[#800080]">
            500+ Businesses Served
          </span>
        </div>
      </div>
    </section>
  );
}
