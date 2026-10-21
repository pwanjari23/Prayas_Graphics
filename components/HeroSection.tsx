"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Star,
  Lightbulb,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[92vh] flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 pb-8 overflow-hidden bg-white">
      {/* SVG Definitions for the Organic Wave Clip Path & Glowing Stroke */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="heroOrganicWaveClip" clipPathUnits="objectBoundingBox">
            <path d="M 0.22,0 C 0.04,0.22 0.0,0.48 0.12,0.72 C 0.2,0.88 0.38,0.98 0.5,1 L 1,1 L 1,0 Z" />
          </clipPath>
          <linearGradient id="purpleWaveGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C084FC" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#A855F7" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#818CF8" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Ambient background glows & technical blueprint grid texture */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Subtle CAD grid watermark across the left side */}
        <div
          className="absolute inset-y-0 left-0 w-full lg:w-3/5 opacity-[0.035] bg-[radial-gradient(#800080_1.5px,transparent_1.5px)] [background-size:24px_24px]"
          aria-hidden="true"
        />
        {/* Soft atmospheric lavender bloom behind the wave */}
        <div
          className="absolute top-1/4 right-1/4 h-[420px] w-[420px] rounded-full bg-purple-200/40 blur-[100px]"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-12 right-12 h-80 w-80 rounded-full bg-indigo-100/40 blur-[90px]"
          aria-hidden="true"
        />
      </div>

      {/* TOP & MIDDLE HERO SECTION: Left Content + Right Storefront Showcase */}
      <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center min-h-[500px] lg:min-h-[560px]">
          {/* LEFT COLUMN: Headings, Subtitle, Dual CTAs, Social Proof */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center items-start py-4 lg:py-6 lg:pr-6 z-20"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50/70 backdrop-blur-xs px-3.5 py-1 text-[11px] sm:text-xs font-bold text-[#800080] shadow-2xs tracking-wider uppercase mb-5">
              <Sparkles className="h-3.5 w-3.5 text-[#800080]" />
              <span>PREMIUM SIGNAGE MANUFACTURER</span>
              <span className="text-purple-300">|</span>
              <span className="text-zinc-600 font-semibold">NAGPUR, INDIA</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[54px] xl:text-[62px] font-extrabold tracking-tight text-zinc-950 leading-[1.08] mb-5">
              Signage That Makes <br />
              Your Brand <br />
              <span className="relative inline-block bg-gradient-to-r from-[#800080] via-purple-700 to-indigo-600 bg-clip-text text-transparent pb-1">
                Impossible to Miss
                {/* Purple curved brush underline accent */}
                <svg
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-3 sm:h-4 text-[#990099] pointer-events-none"
                  viewBox="0 0 250 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8.5C55 3.5 155 2 245 8"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-xl text-base sm:text-lg text-zinc-600 font-normal leading-relaxed mb-7">
              Premium 3D letters, ACP elevations, LED signage and custom shop boards
              that elevate your brand and create a lasting impression.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-9">
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
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-zinc-900 transition-all hover:bg-zinc-50 hover:border-zinc-400 shadow-2xs hover:shadow-sm cursor-pointer"
              >
                Get a Quote
              </Link>
            </div>

            {/* Social Proof Row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-5 border-t border-zinc-100 w-full text-xs sm:text-sm text-zinc-600">
              {/* Google Rating */}
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-zinc-900">4.9/5</span>
                <span className="text-zinc-500">Google rating</span>
              </div>

              <span className="text-zinc-300 hidden sm:inline">•</span>

              {/* Reviews */}
              <div className="flex items-center gap-1.5 font-medium text-zinc-700">
                <MessageSquare className="h-4 w-4 text-[#800080]" />
                <span className="font-bold text-zinc-900">120+</span>
                <span>reviews</span>
              </div>

              <span className="text-zinc-300 hidden sm:inline">•</span>

              {/* NMC Compliant */}
              <div className="flex items-center gap-1.5 font-medium text-zinc-700">
                <ShieldCheck className="h-4 w-4 text-[#800080]" />
                <span>NMC compliant</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Storefront Showcase with Organic Wave Mask & Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center min-h-[420px] sm:min-h-[500px] lg:min-h-[580px] p-2 sm:p-4 lg:p-0"
          >
            {/* Ambient Backing Glow & Blueprint Dimension Annotations */}
            <div className="pointer-events-none absolute -inset-6 bg-purple-400/20 blur-3xl rounded-full" />
            <span className="hidden lg:block absolute top-1/4 left-3 text-[11px] font-mono text-purple-400/70 tracking-widest -rotate-90 select-none z-10">
              120mm
            </span>
            <span className="hidden lg:block absolute bottom-1/5 left-14 text-[11px] font-mono text-purple-400/70 tracking-widest select-none z-10">
              340mm
            </span>

            {/* Organic Wave / Arc Shape Container for the Storefront Photo */}
            <div className="relative w-full h-full min-h-[420px] sm:min-h-[500px] lg:min-h-[580px] rounded-3xl lg:rounded-none overflow-hidden [clip-path:none] lg:[clip-path:url(#heroOrganicWaveClip)] shadow-2xl">
              {/* Real Prayas Graphics Storefront Image */}
              <Image
                src="/hero/hero (7).webp"
                alt="Prayas Graphics 3D Illuminated Storefront & ACP Elevation"
                fill
                priority
                className="object-cover object-center lg:object-[68%_center] scale-105"
              />

              {/* Vignette Gradient Overlay to highlight illuminated letters & badges */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/35 z-10" />

              {/* Floating Badge 1: 3D LED Letters (Top-Left pointing to illuminated signage) */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute top-8 left-6 sm:top-10 sm:left-12 z-20 flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-white/80"
              >
                <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-purple-100 text-[#800080] shrink-0">
                  <Lightbulb className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-[13px] font-bold text-zinc-900 leading-tight">
                    3D LED Letters
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-zinc-500 font-medium">
                    Brighter. Bolder. Better.
                  </p>
                </div>
                {/* Pointer Connector Line & Dot */}
                <div className="hidden sm:flex items-center absolute -right-12 top-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="w-10 h-[1.5px] bg-white/90 shadow-sm" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#800080] border-2 border-white shadow-[0_0_8px_#a855f7]" />
                </div>
              </motion.div>

              {/* Floating Badge 2: Built to Last (Bottom-Right pointing to facade) */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="absolute bottom-8 right-6 sm:bottom-12 sm:right-10 z-20 flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-white/80"
              >
                <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-purple-100 text-[#800080] shrink-0">
                  <ShieldCheck className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-[13px] font-bold text-zinc-900 leading-tight">
                    Built to Last
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-zinc-500 font-medium">
                    Weather resistant & durable.
                  </p>
                </div>
                {/* Pointer Connector Line & Dot */}
                <div className="hidden sm:flex items-center absolute -left-12 top-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#800080] border-2 border-white shadow-[0_0_8px_#a855f7]" />
                  <div className="w-10 h-[1.5px] bg-white/90 shadow-sm" />
                </div>
              </motion.div>
            </div>

            {/* Glowing Purple Stroke along the wave boundary on desktop */}
            <svg
              className="pointer-events-none absolute inset-0 w-full h-full z-15 hidden lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M 22,0 C 4,22 0,48 12,72 C 20,88 38,98 50,100"
                fill="none"
                stroke="url(#purpleWaveGlow)"
                strokeWidth="1.8"
                filter="drop-shadow(0 0 8px rgba(168,85,247,0.5))"
              />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM SECTION: End-to-End Signage Solutions Under One Roof + 3 Quick Service Cards */}
      <div className="relative z-20 w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 pt-8 sm:pt-12">
        <div className="pt-6 border-t border-zinc-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Header info */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#800080]">
                  OUR SERVICES
                </span>
                <span className="h-0.5 w-6 bg-purple-300 rounded-full" />
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-950 tracking-tight leading-tight">
                End-to-End Signage Solutions <br />
                <span className="bg-gradient-to-r from-[#800080] to-purple-600 bg-clip-text text-transparent">
                  Under One Roof
                </span>
              </h2>
              <div className="mt-1">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-zinc-700 hover:text-[#800080] transition-colors group cursor-pointer"
                >
                  <span>View All Services</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right: 3 Quick Service Teaser Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
              {/* Card 1: 3D Acrylic Letters */}
              <Link
                href="/services"
                className="group flex items-center gap-3 p-3 rounded-2xl bg-white border border-zinc-200/90 hover:border-purple-300 shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-xl overflow-hidden shrink-0 bg-purple-50 border border-purple-100">
                  <Image
                    src="/services/Golden Acrylic Letters.png"
                    alt="3D Acrylic Letters"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs sm:text-[13px] font-bold text-zinc-900 group-hover:text-[#800080] transition-colors truncate">
                    3D Acrylic Letters
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-zinc-500 truncate mt-0.5">
                    Premium finish. Maximum impact.
                  </p>
                </div>
                <div className="w-6 h-6 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:border-[#800080] group-hover:bg-[#800080] group-hover:text-white transition-all shrink-0">
                  <ArrowRight className="h-3 w-3" />
                </div>
              </Link>

              {/* Card 2: ACP Elevations */}
              <Link
                href="/services"
                className="group flex items-center gap-3 p-3 rounded-2xl bg-white border border-zinc-200/90 hover:border-purple-300 shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-xl overflow-hidden shrink-0 bg-purple-50 border border-purple-100">
                  <Image
                    src="/services/acp-elevation-work.png"
                    alt="ACP Elevations"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs sm:text-[13px] font-bold text-zinc-900 group-hover:text-[#800080] transition-colors truncate">
                    ACP Elevations
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-zinc-500 truncate mt-0.5">
                    Modern facades. Lasting value.
                  </p>
                </div>
                <div className="w-6 h-6 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:border-[#800080] group-hover:bg-[#800080] group-hover:text-white transition-all shrink-0">
                  <ArrowRight className="h-3 w-3" />
                </div>
              </Link>

              {/* Card 3: LED Signage */}
              <Link
                href="/services"
                className="group flex items-center gap-3 p-3 rounded-2xl bg-white border border-zinc-200/90 hover:border-purple-300 shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-xl overflow-hidden shrink-0 bg-purple-50 border border-purple-100">
                  <Image
                    src="/gallery/led-displays/storefront-led-display.webp"
                    alt="LED Signage"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs sm:text-[13px] font-bold text-zinc-900 group-hover:text-[#800080] transition-colors truncate">
                    LED Signage
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-zinc-500 truncate mt-0.5">
                    Bright ideas. Greater visibility.
                  </p>
                </div>
                <div className="w-6 h-6 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:border-[#800080] group-hover:bg-[#800080] group-hover:text-white transition-all shrink-0">
                  <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
