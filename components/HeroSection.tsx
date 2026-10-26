"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Star, Users } from "lucide-react";
import { motion } from "framer-motion";
import { BUSINESS_INFO } from "@/lib/business-info";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-white pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 overflow-hidden isolate">
      {/* Precision Architectural Studio Background Effect */}
      <div
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        {/* 1. Subtle Architectural Dot Grid with Center Feathering */}
        <div
          className="absolute inset-0 opacity-[0.38]"
          style={{
            backgroundImage: "radial-gradient(#A1A1AA 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 70% 65% at 50% 30%, #000 25%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 65% at 50% 30%, #000 25%, transparent 85%)",
          }}
        />

        {/* 2. Precision Engineering Hairline Grid */}
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #D4D4D8 1px, transparent 1px), linear-gradient(to bottom, #D4D4D8 1px, transparent 1px)",
            backgroundSize: "112px 112px",
            maskImage:
              "radial-gradient(ellipse 65% 55% at 50% 25%, #000 20%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 65% 55% at 50% 25%, #000 20%, transparent 80%)",
          }}
        />

        {/* 3. Ambient Top Spotlight Beam */}
        <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[720px] sm:w-[980px] lg:w-[1300px] h-[480px] sm:h-[560px] bg-gradient-to-b from-zinc-200/50 via-zinc-100/25 to-transparent blur-3xl rounded-full pointer-events-none" />

        {/* 4. Floating Ambient Luminous Depth Spheres */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-1/4 -right-24 w-[420px] h-[420px] rounded-full bg-zinc-100/70 blur-[100px] pointer-events-none"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-1/3 -left-24 w-[380px] h-[380px] rounded-full bg-zinc-100/60 blur-[90px] pointer-events-none"
        />

        {/* 5. Architectural Studio Alignment Markers & Technical Coordinates */}
        <div className="absolute top-24 left-6 sm:left-10 lg:left-14 hidden sm:flex items-center gap-2.5 text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400 select-none">
          <span className="text-zinc-300 font-sans font-bold text-xs">+</span>
          <span>NAGPUR · MH</span>
          <span className="w-8 h-px bg-zinc-200" />
        </div>

        <div className="absolute top-24 right-6 sm:right-10 lg:right-14 hidden sm:flex items-center gap-2.5 text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400 select-none">
          <span className="w-8 h-px bg-zinc-200" />
          <span>SIGNAGE STUDIO · 2026</span>
          <span className="text-zinc-300 font-sans font-bold text-xs">+</span>
        </div>

        {/* Corner Precision Alignment Crosshairs */}
        <div className="absolute bottom-12 left-8 hidden lg:block text-zinc-300 text-xs font-mono select-none">
          +
        </div>
        <div className="absolute bottom-12 right-8 hidden lg:block text-zinc-300 text-xs font-mono select-none">
          +
        </div>

        {/* 6. Seamless Bottom Gradient Fade into Pure White */}
        <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          {/* LEFT COLUMN: Trust Badge, Headline, CTAs, Reviews */}
          <motion.div
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left lg:pr-2 xl:pr-4"
          >
            {/* 1. Trust & Compliance Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E5E5] bg-white px-3.5 sm:px-4 py-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
              <Sparkles className="h-3.5 w-3.5 text-[#080808] shrink-0" />
              <span className="text-[10px] sm:text-[11.5px] font-black uppercase tracking-wider text-[#080808]">
                Nagpur&apos;s Premier Signage Manufacturer
              </span>
              <span className="text-zinc-300 font-bold">•</span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-zinc-600 uppercase tracking-wide">
                NMC Compliant
              </span>
            </div>

            {/* 2. Main Hero Headline */}
            <h1 className="mt-4 sm:mt-5 font-heading text-4xl xs:text-5xl sm:text-6xl md:text-[62px] lg:text-[54px] xl:text-[66px] 2xl:text-[72px] font-black leading-[1.03] sm:leading-[1.04] tracking-tight text-[#080808] text-balance">
              High-Quality{" "}
              <br className="hidden sm:inline" />
              <span className="text-[#080808]">
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
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#080808] px-7 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-zinc-800 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#080808] cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#E5E5E5] bg-white px-7 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-[#080808] shadow-2xs transition-all duration-200 hover:bg-zinc-50 hover:border-zinc-400 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#080808] cursor-pointer"
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
                aria-label="Read our 120+ verified Google Reviews with 5 out of 5 rating"
                className="group inline-flex items-center gap-2 select-none rounded-full py-1 text-zinc-800 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#080808]"
              >
                <div className="flex items-center gap-0.5 text-[#080808]" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#080808] text-[#080808]" />
                  ))}
                </div>
                <span className="text-sm font-bold text-[#080808]">5/5</span>
                <span className="text-xs sm:text-sm font-medium text-zinc-500 group-hover:underline">
                  (130+ Google Reviews)
                </span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Curated Asymmetrical Signage Image Collage */}
          <div className="lg:col-span-6 xl:col-span-6 w-full">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-4 xl:gap-5 w-full items-start">
              {/* Column A: Left stack of collage */}
              <div className="flex flex-col gap-3 sm:gap-4 lg:gap-4 xl:gap-5">
                {/* Image 1: Storefront LED Display */}
                <motion.div
                  initial={{ y: 14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative w-full aspect-[16/11] overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E5E5E5] bg-zinc-900 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_36px_-10px_rgba(0,0,0,0.12)]"
                >
                  <Image
                    src="/hero/collage/storefront-led.jpg"
                    alt="Storefront LED Display manufactured by Prayas Graphics"
                    fill
                    sizes="(max-width: 640px) 46vw, (max-width: 1024px) 45vw, 24vw"
                    priority
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 z-10 pointer-events-none">
                    <span className="inline-flex items-center rounded-full bg-[#080808]/85 backdrop-blur-md border border-white/15 px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold text-white tracking-wide shadow-xs">
                      Storefront LED Display
                    </span>
                  </div>
                </motion.div>

                {/* Image 3: Lollipop Signboard */}
                <motion.div
                  initial={{ y: 14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative w-full aspect-[4/3.5] overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E5E5E5] bg-zinc-900 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_36px_-10px_rgba(0,0,0,0.12)]"
                >
                  <Image
                    src="/hero/collage/lollipop-signboard.png"
                    alt="Circular Double Sided Lollipop Signboard"
                    fill
                    sizes="(max-width: 640px) 46vw, (max-width: 1024px) 45vw, 24vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 z-10 pointer-events-none">
                    <span className="inline-flex items-center rounded-full bg-[#080808]/85 backdrop-blur-md border border-white/15 px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold text-white tracking-wide shadow-xs">
                      Lollipop Signboard
                    </span>
                  </div>
                </motion.div>

                {/* Image 5: Halo Glow Letters */}
                <motion.div
                  initial={{ y: 14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative w-full aspect-[16/10] overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E5E5E5] bg-zinc-900 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_36px_-10px_rgba(0,0,0,0.12)]"
                >
                  <Image
                    src="/hero/collage/halo-glow.jpg"
                    alt="3D Halo Glow Letters on textured facade"
                    fill
                    sizes="(max-width: 640px) 46vw, (max-width: 1024px) 45vw, 24vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 z-10 pointer-events-none">
                    <span className="inline-flex items-center rounded-full bg-[#080808]/85 backdrop-blur-md border border-white/15 px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold text-white tracking-wide shadow-xs">
                      Halo Glow Letters
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Column B: Right stack of collage with prominent Neon feature */}
              <div className="flex flex-col gap-3 sm:gap-4 lg:gap-4 xl:gap-5 pt-3 sm:pt-4 lg:pt-5">
                {/* Image 2: Neon Flexible Lights (Featured with elevated prominence) */}
                <motion.div
                  initial={{ y: 14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative w-full aspect-[4/5.2] overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E5E5E5] bg-zinc-900 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.1),0_2px_8px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_44px_-10px_rgba(0,0,0,0.18)]"
                >
                  <Image
                    src="/hero/collage/neon-flexible.jpg"
                    alt="Warm Neon Flexible Lights Good Vibes Only"
                    fill
                    sizes="(max-width: 640px) 46vw, (max-width: 1024px) 45vw, 24vw"
                    priority
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 z-10 pointer-events-none">
                    <span className="inline-flex items-center rounded-full bg-[#080808]/85 backdrop-blur-md border border-white/15 px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold text-white tracking-wide shadow-xs">
                      Neon Flexible Lights
                    </span>
                  </div>
                </motion.div>

                {/* Image 4: Flex Backlit Sign */}
                <motion.div
                  initial={{ y: 14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative w-full aspect-[16/8.5] overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E5E5E5] bg-zinc-900 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_36px_-10px_rgba(0,0,0,0.12)]"
                >
                  <Image
                    src="/hero/collage/flex-backlit.jpg"
                    alt="Flex Backlit Signboard on storefront facade"
                    fill
                    sizes="(max-width: 640px) 46vw, (max-width: 1024px) 45vw, 24vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 z-10 pointer-events-none">
                    <span className="inline-flex items-center rounded-full bg-[#080808]/85 backdrop-blur-md border border-white/15 px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold text-white tracking-wide shadow-xs">
                      Flex Backlit Sign
                    </span>
                  </div>
                </motion.div>

                {/* Image 6: Architectural / Corporate Identity */}
                <motion.div
                  initial={{ y: 14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative w-full aspect-[4/3.4] overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E5E5E5] bg-zinc-900 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_36px_-10px_rgba(0,0,0,0.12)]"
                >
                  <Image
                    src="/hero/collage/architectural.jpg"
                    alt="Corporate Reception 3D Architectural Wall Branding"
                    fill
                    sizes="(max-width: 640px) 46vw, (max-width: 1024px) 45vw, 24vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 z-10 pointer-events-none">
                    <span className="inline-flex items-center rounded-full bg-[#080808]/85 backdrop-blur-md border border-white/15 px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold text-white tracking-wide shadow-xs">
                      Architectural
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicator: 500+ Businesses Served */}
      <div className="relative z-10 flex justify-center mt-8 sm:mt-10 md:mt-12 mb-2 sm:mb-3">
        <div className="inline-flex items-center gap-2.5 rounded-full bg-white border border-[#E5E5E5] px-4 sm:px-5 py-1.5 sm:py-2 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
          <Users className="h-4 w-4 text-[#080808]" />
          <span className="text-[10.5px] sm:text-xs font-black uppercase tracking-wider text-[#080808]">
            500+ Businesses Served
          </span>
        </div>
      </div>
    </section>
  );
}
