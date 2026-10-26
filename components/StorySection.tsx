"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function StorySection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f8f8f8] via-white to-[#f8f8f8] pt-14 sm:pt-18 md:pt-20 pb-14 sm:pb-18 md:pb-20">
      {/* Background CAD Matrix */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 opacity-[0.20] [background-image:radial-gradient(#a3a3a3_0.75px,transparent_0.75px)] [background-size:24px_24px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 md:px-6">
        {/* Luminous Pearl Banner Card */}
        <div className="relative flex w-full flex-col overflow-hidden rounded-[36px] sm:rounded-[44px] bg-white p-7 sm:p-10 md:p-12 lg:p-14 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-zinc-200">
          {/* Subtle Ambient Background Glows */}
          <div
            className="pointer-events-none absolute -left-20 -top-20 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-zinc-100/50 to-transparent blur-3xl -z-0"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-20 -bottom-20 h-[400px] w-[400px] rounded-full bg-gradient-to-tl from-zinc-100/50 to-transparent blur-3xl -z-0"
            aria-hidden="true"
          />

          {/* Centered Hero Content */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto w-full">
            {/* Pill Badge */}
            <div className="mb-4 sm:mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-4 py-1.5 text-xs font-bold text-zinc-950">
              <Sparkles className="h-3.5 w-3.5 text-zinc-950" />
              <span>MODERN SIGNAGE SOLUTIONS</span>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.14] tracking-tight text-zinc-950">
              Let Your Signage Tell Your Brand&apos;s Story!
            </h2>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base md:text-lg text-zinc-600 font-medium leading-relaxed">
              Elevate your commercial space with bespoke indoor and outdoor signs designed to capture attention and reflect your unique identity. From 3D acrylic engineering to ACP elevations, we build lasting brand impressions.
            </p>

            {/* Value Highlights */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-xs sm:text-sm font-semibold text-zinc-700">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100/80 px-3.5 py-1.5 border border-zinc-200/70">
                <CheckCircle2 className="h-4 w-4 text-zinc-800" />
                In-House CNC & Laser
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100/80 px-3.5 py-1.5 border border-zinc-200/70">
                <ShieldCheck className="h-4 w-4 text-zinc-800" />
                Weatherproof Acrylic & ACP
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100/80 px-3.5 py-1.5 border border-zinc-200/70">
                <Zap className="h-4 w-4 text-zinc-800" />
                Samsung-Grade LED Modules
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <Link
                href="/services"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-zinc-950 px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-white transition-all duration-300 hover:bg-zinc-800 shadow-md hover:shadow-xl active:scale-[0.98] cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Our Signage
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-zinc-800 transition-colors hover:bg-zinc-100 hover:border-zinc-400 shadow-2xs cursor-pointer"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
