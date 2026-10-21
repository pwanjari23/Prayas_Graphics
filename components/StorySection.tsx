"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import BrandStoryOrbit from "@/components/BrandStoryOrbit";

export default function StorySection() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col px-4 py-8 md:py-14 lg:px-6">
      {/* SINGLE UNIFIED CARD: 2-Column Banner with Text on Left, 4 Moving Rings on Right */}
      <div className="relative flex w-full flex-col overflow-hidden rounded-[36px] sm:rounded-[44px] bg-white p-7 sm:p-10 md:p-12 lg:p-14 shadow-sm border border-zinc-200/90">
        {/* Subtle Ambient Background Glows */}
        <div
          className="pointer-events-none absolute -left-20 -top-20 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-purple-200/25 via-purple-100/10 to-transparent blur-3xl -z-0"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-20 -bottom-20 h-[400px] w-[400px] rounded-full bg-gradient-to-tl from-purple-200/25 via-purple-100/10 to-transparent blur-3xl -z-0"
          aria-hidden="true"
        />

        {/* 2-Column Grid: Text on Left, 4 Orbiting Rings on Right */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center w-full">
          {/* Left Column: Heading, Subtitle, Highlights, Action Buttons */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left">
            {/* Pill Badge */}
            <div className="mb-4 sm:mb-5 inline-flex items-center gap-2 rounded-full border border-purple-200/90 bg-purple-50/80 px-4 py-1.5 text-xs font-bold text-[#800080]">
              <Sparkles className="h-3.5 w-3.5 text-[#800080]" />
              <span>MODERN SIGNAGE SOLUTIONS</span>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.14] tracking-tight text-zinc-950">
              Let Your Signage{" "}
              <span className="bg-gradient-to-r from-[#800080] via-purple-700 to-[#990099] bg-clip-text text-transparent">
                Tell Your Brand&apos;s Story!
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-base md:text-lg text-zinc-600 font-medium leading-relaxed">
              Elevate your commercial space with bespoke indoor and outdoor signs designed to capture attention and reflect your unique identity. From 3D acrylic engineering to ACP elevations, we build lasting brand impressions.
            </p>

            {/* Value Highlights */}
            <div className="mt-6 flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs sm:text-sm font-semibold text-zinc-700">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100/80 px-3.5 py-1.5 border border-zinc-200/70">
                <CheckCircle2 className="h-4 w-4 text-[#800080]" />
                In-House CNC & Laser
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100/80 px-3.5 py-1.5 border border-zinc-200/70">
                <ShieldCheck className="h-4 w-4 text-[#800080]" />
                Weatherproof Acrylic & ACP
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100/80 px-3.5 py-1.5 border border-zinc-200/70">
                <Zap className="h-4 w-4 text-[#800080]" />
                Samsung-Grade LED Modules
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                href="/services"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-zinc-950 px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-white transition-all duration-300 hover:bg-zinc-900 shadow-md hover:shadow-xl hover:shadow-zinc-950/20 active:scale-[0.98] cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Our Signage
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 z-0 flex h-full w-full justify-center transform-[skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:transform-[skew(-12deg)_translateX(100%)]">
                  <div className="relative h-full w-8 bg-white/20" />
                </div>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-zinc-800 transition-colors hover:bg-zinc-50 hover:border-zinc-300 shadow-2xs cursor-pointer"
              >
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Concentric Moving Rings with Mini Logo Circles */}
          <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center overflow-visible py-4">
            <BrandStoryOrbit />
          </div>
        </div>
      </div>
    </section>
  );
}
