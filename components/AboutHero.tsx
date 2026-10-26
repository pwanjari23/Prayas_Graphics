"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  TrendingUp,
  User,
  Briefcase,
  Award,
  Target,
  ArrowRight,
} from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-18">
      {/* 1. Oversized Bold Cropped Background Typography: ABOUT US */}
      <div
        className="pointer-events-none absolute top-12 sm:top-14 md:top-16 left-1/2 -translate-x-1/2 w-full text-center whitespace-nowrap overflow-hidden select-none z-0"
        aria-hidden="true"
      >
        <span className="block font-heading font-black text-[20vw] sm:text-[21vw] lg:text-[22vw] leading-none tracking-tighter text-[#F2F2F2] opacity-80 sm:opacity-90">
          ABOUT US
        </span>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Two-Column Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* LEFT COLUMN: Cohesive Editorial Photo Composition (Founder + Storefront) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 w-full relative"
          >
            <div className="relative grid grid-cols-2 gap-3.5 sm:gap-5 items-start">
              {/* Photo 1: Lead Craftsman Rohit More & Bio Card */}
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E5E5E5] bg-[#F7F7F7] shadow-lg transition-transform duration-500 hover:scale-[1.02]">
                  <Image
                    src="/about/rohitmore.png"
                    alt="Rohit More — Founder of Prayas Graphics"
                    fill
                    sizes="(max-width: 640px) 48vw, (max-width: 1024px) 42vw, 300px"
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-50" />
                </div>

                {/* Founder Bio Card */}
                <div className="rounded-2xl border border-[#E5E5E5] bg-white p-3.5 sm:p-4 shadow-sm text-left">
                  <h3 className="font-heading text-xs sm:text-sm font-bold text-[#0A0A0A] leading-tight">
                    Rohit More
                  </h3>
                  <p className="text-[10px] sm:text-[11px] font-semibold text-[#737373] mt-0.5">
                    Founder
                  </p>
                  <p className="mt-2 text-[10.5px] sm:text-[11.5px] leading-relaxed text-[#262626]">
                    A passionate entrepreneur dedicated to transforming Nagpur&apos;s business spaces with impactful signage solutions.
                  </p>
                  <div className="mt-2.5 flex items-center gap-1.5 pt-2 border-t border-[#E5E5E5] text-[10px] sm:text-[11px] font-semibold text-[#0A0A0A]">
                    <User className="h-3 w-3 text-[#737373] shrink-0" />
                    <span>10+ Years of Experience</span>
                  </div>
                </div>
              </div>

              {/* Photo 2: Workshop/Storefront & Floating Stat Metric Card */}
              <div className="relative flex flex-col gap-3 sm:gap-4 pt-6 sm:pt-10">
                {/* Floating Metric Card (500+ Projects) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.2 }}
                  className="rounded-2xl border border-[#E5E5E5] bg-white/95 p-3 sm:p-3.5 shadow-md backdrop-blur-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-lg sm:text-xl font-black text-[#0A0A0A]">
                      500+
                    </span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F7F7F7] text-[#0A0A0A] border border-[#E5E5E5]">
                      <TrendingUp className="h-3.5 w-3.5" />
                    </span>
                  </div>
                  <p className="mt-1 text-[10px] sm:text-[11px] font-medium leading-snug text-[#737373]">
                    Projects delivered across Nagpur with 5-star ratings &amp; happy clients.
                  </p>
                </motion.div>

                {/* Photo 2: Prayas Graphics Storefront / Workshop */}
                <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E5E5E5] bg-[#F7F7F7] shadow-lg transition-transform duration-500 hover:scale-[1.02]">
                  <Image
                    src="/about/prayasgraphicsshop.jpeg"
                    alt="Prayas Graphics Nagpur Workshop and Storefront Signboard"
                    fill
                    sizes="(max-width: 640px) 48vw, (max-width: 1024px) 42vw, 300px"
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-50" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Headline, Story Introduction & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-6 flex flex-col justify-center text-left lg:pt-2"
          >
            {/* Eyebrow and Design-Manufacture-Install Rubric */}
            <div className="flex items-center justify-between w-full mb-3 pb-1">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#737373]">
                OUR STORY · NAGPUR, INDIA
              </span>
              <div className="flex items-center gap-2 border-l border-zinc-300 pl-3">
                <div className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-widest text-[#737373] leading-tight text-left">
                  <span>DESIGN</span>
                  <br />
                  <span>MANUFACTURE</span>
                  <br />
                  <span>INSTALL</span>
                </div>
              </div>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[54px] font-black tracking-tight text-[#0A0A0A] leading-[1.08] mb-4">
              We Make Brands Impossible to Miss.
            </h1>

            {/* Concise Supporting Copy */}
            <p className="text-sm sm:text-base leading-relaxed text-[#262626] font-normal mb-8 max-w-xl">
              Welcome to Prayas Graphics, Nagpur&apos;s leading manufacturer of premium signboards and display solutions. We believe your brand deserves to shine with precision engineering, vibrant illumination, and craftsmanship that stands out day and night.
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
              <a
                href="#our-values"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0A0A0A] px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-[#262626] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A0A0A]"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                href="/gallery"
                className="inline-flex items-center justify-center rounded-full border border-[#E5E5E5] bg-white px-7 py-3.5 text-xs sm:text-sm font-bold text-[#0A0A0A] shadow-2xs transition-all duration-200 hover:bg-[#F7F7F7] hover:border-zinc-400 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A0A0A]"
              >
                Explore Our Work
              </Link>
            </div>
          </motion.div>
        </div>

        {/* 2. Three Restrained Metric Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-[#E5E5E5] grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 w-full"
        >
          {/* Metric 1: Projects Delivered */}
          <div className="flex items-start gap-4 rounded-2xl bg-[#F7F7F7] border border-[#E5E5E5] p-5 sm:p-6 transition-all duration-300 hover:border-zinc-300 hover:bg-white hover:shadow-sm">
            <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-white border border-[#E5E5E5] text-[#0A0A0A] shadow-2xs">
              <Briefcase className="h-5 w-5" />
            </div>
            <div className="text-left">
              <div className="flex items-baseline gap-2">
                <span className="font-heading text-xl sm:text-2xl font-black text-[#0A0A0A]">
                  500+
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#0A0A0A]">
                  Projects Delivered
                </span>
              </div>
              <p className="mt-1 text-xs text-[#737373] leading-relaxed">
                Across Nagpur with 5-star ratings &amp; happy clients.
              </p>
            </div>
          </div>

          {/* Metric 2: Years of Experience */}
          <div className="flex items-start gap-4 rounded-2xl bg-[#F7F7F7] border border-[#E5E5E5] p-5 sm:p-6 transition-all duration-300 hover:border-zinc-300 hover:bg-white hover:shadow-sm">
            <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-white border border-[#E5E5E5] text-[#0A0A0A] shadow-2xs">
              <Award className="h-5 w-5" />
            </div>
            <div className="text-left">
              <div className="flex items-baseline gap-2">
                <span className="font-heading text-xl sm:text-2xl font-black text-[#0A0A0A]">
                  10+
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#0A0A0A]">
                  Years of Experience
                </span>
              </div>
              <p className="mt-1 text-xs text-[#737373] leading-relaxed">
                Dedicated to Nagpur&apos;s business growth.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-2xl bg-[#F7F7F7] border border-[#E5E5E5] p-5 sm:p-6 transition-all duration-300 hover:border-zinc-300 hover:bg-white hover:shadow-sm">
            <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-white border border-[#E5E5E5] text-[#0A0A0A] shadow-2xs">
              <Target className="h-5 w-5" />
            </div>
            <div className="text-left">
              <div className="flex items-baseline gap-2">
                <span className="font-heading text-xl sm:text-2xl font-black text-[#0A0A0A]">
                  360°
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#0A0A0A]">
                  Signage Solutions
                </span>
              </div>
              <p className="mt-1 text-xs text-[#737373] leading-relaxed">
                From design to installation under one roof.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
