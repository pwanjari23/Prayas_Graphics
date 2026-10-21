"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-7xl flex-col px-4 pt-24 pb-8 md:px-6">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex w-full flex-col justify-center overflow-hidden rounded-[32px] sm:rounded-[40px] bg-white p-7 sm:p-10 md:p-12 shadow-sm border border-zinc-200/90"
      >
        {/* CAD Blueprint Background Texture: Natural orientation with 3D design on the RIGHT */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/hero/hero-blueprint-bg.jpg"
            alt="Architectural Signage Blueprint Background"
            fill
            priority
            className="object-cover object-right md:object-right-top opacity-85 transition-opacity duration-700"
          />
          {/* Directional gradient: clean smooth white on left behind text, translucent to reveal design on right */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-white via-white/85 via-45% to-white/10 sm:from-white sm:via-white/80 sm:via-48% sm:to-transparent"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/30"
            aria-hidden="true"
          />
          {/* Ambient soft glow on the design side */}
          <div
            className="absolute top-1/4 right-10 h-72 w-72 rounded-full bg-purple-200/20 blur-3xl"
            aria-hidden="true"
          />

          {/* Subtle Angled / Geometric Light Facet in background */}
          <svg
            className="pointer-events-none absolute -bottom-10 left-0 w-2/3 h-44 opacity-35 scale-x-[-1]"
            viewBox="0 0 800 180"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,140 L260,70 L520,130 L800,50 L800,180 L0,180 Z"
              fill="url(#heroCardAngledFacet)"
            />
            <defs>
              <linearGradient id="heroCardAngledFacet" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FAF5FF" stopOpacity="0.8" />
                <stop offset="45%" stopColor="#F3E8FF" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#EDE9FE" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Main Content Area: Left side contains Heading & CTAs, Right side showcases CAD design */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-2 sm:py-4">
          {/* Left Column: Heading, Subtitle & CTAs on the LEFT */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start gap-5 sm:gap-6 text-left lg:pr-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200/90 bg-white/90 backdrop-blur-md px-3.5 py-1 text-[11px] sm:text-xs font-bold text-[#800080] w-fit shadow-2xs">
              <Sparkles className="h-3.5 w-3.5 text-[#800080]" />
              <span>NAGPUR&apos;S PREMIER SIGNAGE MANUFACTURER</span>
              <span className="hidden sm:inline text-purple-300">•</span>
              <span className="hidden sm:inline text-zinc-600 font-semibold">NMC COMPLIANT</span>
            </div>

            <h1 className="font-heading text-3xl font-extrabold leading-[1.12] tracking-tight text-zinc-950 sm:text-4xl md:text-5xl lg:text-[52px]">
              High-Quality{" "}
              <span className="bg-gradient-to-r from-[#800080] via-purple-700 to-[#990099] bg-clip-text text-transparent">
                Signboards
              </span>{" "}
              for Every Business.
            </h1>

            <p className="max-w-xl text-sm sm:text-base md:text-lg text-zinc-600 font-medium leading-relaxed">
              Transform your brand&apos;s visibility with stunning, durable, and captivating signage solutions! From 3D acrylic letters to ACP elevations, we craft impressions that last.
            </p>

            {/* CTAs & Social Proof */}
            <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/services"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-zinc-950 px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-white transition-all duration-300 hover:bg-zinc-900 shadow-md hover:shadow-xl hover:shadow-zinc-950/25 active:scale-[0.98] cursor-pointer"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Our Services
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 z-0 flex h-full w-full justify-center transform-[skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:transform-[skew(-12deg)_translateX(100%)]">
                    <div className="relative h-full w-8 bg-white/20" />
                  </div>
                </Link>

                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-300/80 bg-white/90 backdrop-blur-md px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-zinc-900 transition-all hover:bg-white hover:border-zinc-400 shadow-2xs hover:shadow-sm cursor-pointer"
                >
                  Get a Quote
                </Link>
              </div>

              {/* Star Rating Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 border border-zinc-200/70 backdrop-blur-xs w-fit shadow-2xs">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold text-zinc-800">4.9/5</span>
                <span className="text-[11px] text-zinc-500 hidden sm:inline">(120+ Google Reviews)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual space allowing the 3D architectural CAD design to shine on the RIGHT */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-5" aria-hidden="true" />
        </div>
      </motion.div>

      {/* Light-colored Angled / Subtle Zigzag Background Shapes starting at the end of the Hero Section */}
      <div
        className="pointer-events-none absolute -bottom-10 left-0 right-0 h-28 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <svg
          className="w-full h-full opacity-60"
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="heroSectionBottomRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FAF5FF" stopOpacity="0.8" />
              <stop offset="35%" stopColor="#F3E8FF" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#EDE9FE" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#F8FAFC" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M-50,30 L380,85 L820,20 L1220,75 L1500,15 L1500,120 L-50,120 Z"
            fill="url(#heroSectionBottomRibbon)"
          />
        </svg>
      </div>
    </section>
  );
}
