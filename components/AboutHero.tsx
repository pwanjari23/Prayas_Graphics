"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUp, Award } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-white to-[#faf8fc] pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-18">
      {/* Ambient background soft light glow */}
      <div
        className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-purple-100/35 blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-12 lg:flex-row lg:gap-16 px-4 sm:px-6 lg:px-8">
        {/* LEFT COLUMN: Staggered 2-Photo Composition with Floating Overlays (matching reference) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-lg lg:max-w-[540px] shrink-0"
        >
          <div className="relative grid grid-cols-2 gap-4 sm:gap-6 items-start">

            {/* Column 1 (Left Image + Ratings Card below) */}
            <div className="flex flex-col gap-4 sm:gap-5">
              {/* Photo 1: Workshop & Storefront */}
              {/* Photo 1: Lead Craftsman Rohit More */}
              <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-[24px] sm:rounded-[30px] border border-zinc-200/80 bg-zinc-100 shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src="/about/rohitmore.png"
                  alt="Rohit More - Founder Prayas Graphics"
                  fill
                  sizes="(max-width: 768px) 50vw, 280px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Card: Rohit More Founder Card (replaced Best Ratings card) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-2xl border border-zinc-200/80 bg-white/98 p-3 sm:p-3.5 shadow-[0_12px_28px_-6px_rgba(0,0,0,0.08)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 text-left"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-heading text-xs sm:text-sm font-bold text-zinc-950 leading-tight">
                      Rohit More
                    </h3>
                    <p className="text-[10px] sm:text-[11px] font-semibold text-[#800080] mt-0.5">
                      Founder
                    </p>
                  </div>
                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-[#800080] border border-purple-200/60 shadow-2xs">
                    <Award className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </div>
                </div>
                <div className="mt-2.5 flex items-center gap-1.5 pt-2 border-t border-zinc-100 text-[9.5px] sm:text-[10.5px] font-medium text-zinc-500">
                  <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#800080]" />
                  <span className="truncate">Over 10+ Years Dedicated to Nagpur&apos;s Storefronts</span>
                </div>
              </motion.div>
            </div>

            {/* Column 2 (Floating Stats Metric Card + Right Image shifted down) */}
            <div className="flex flex-col gap-4 sm:gap-5 pt-8 sm:pt-10">
              {/* Floating Top Metric Card (matching reference with 30,000+ style) */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="rounded-2xl border border-zinc-200/80 bg-white/98 p-3.5 sm:p-4 shadow-[0_16px_36px_-6px_rgba(128,0,128,0.1),0_4px_16px_rgba(0,0,0,0.06)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-heading text-lg sm:text-xl font-black text-zinc-950">
                    500+
                  </span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <TrendingUp className="h-3.5 w-3.5" />
                  </span>
                </div>
                <p className="mt-1 text-[10.5px] sm:text-[11.5px] font-medium leading-snug text-zinc-500">
                  Projects delivered across Nagpur with 5-star ratings &amp; happy clients.
                </p>

                {/* Overlapping client avatars row */}
                <div className="mt-2.5 flex items-center -space-x-1.5">
                  <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full border border-white bg-purple-100 text-[9px] font-bold text-[#800080]">
                    SG
                  </span>
                  <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full border border-white bg-amber-100 text-[9px] font-bold text-amber-700">
                    RM
                  </span>
                  <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full border border-white bg-emerald-100 text-[9px] font-bold text-emerald-700">
                    PK
                  </span>
                  <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full border border-white bg-blue-100 text-[9px] font-bold text-blue-700">
                    AM
                  </span>
                  <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full border border-white bg-[#800080] text-[8px] font-black text-white">
                    +500
                  </span>
                </div>
              </motion.div>

              {/* Photo 2: Workshop & Storefront (shifted downwards) */}
              <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-[24px] sm:rounded-[30px] border border-zinc-200/80 bg-zinc-100 shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src="/about/prayasgraphicsshop.jpeg"
                  alt="Prayas Graphics Nagpur Workshop"
                  fill
                  sizes="(max-width: 768px) 50vw, 280px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Typography & Action Button (matching reference) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="flex flex-col items-start justify-center max-w-xl text-left"
        >
          {/* Eyebrow: A BIT */}
          <span className="text-xs sm:text-sm font-black uppercase tracking-[0.28em] text-[#800080] mb-2">
            A BIT
          </span>

          {/* Main Headline: ABOUT US */}
          <h1 className="font-heading text-3xl font-black uppercase tracking-tight text-zinc-950 sm:text-4xl md:text-5xl lg:text-[54px] leading-none mb-3">
            ABOUT US
          </h1>

          {/* Secondary Title: Elevating Brands, One Signage at a Time */}
          <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-zinc-800 leading-snug mb-4">
            Elevating Brands, One Signage at a Time
          </h2>

          {/* Body Paragraph: Exact About Us Copy */}
          <p className="text-[15px] sm:text-base leading-relaxed text-zinc-600 font-normal mb-8 max-w-lg">
            Welcome to Prayas Graphics, Nagpur&apos;s leading manufacturer of premium signboards and display solutions. We believe your brand deserves to shine with precision engineering, vibrant illumination, and craftsmanship that stands out day and night.
          </p>

          {/* Button: EXPLORE MORE (Styled in purple pill matching reference image) */}
          <div>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl sm:rounded-2xl bg-[#800080] px-8 py-3.5 sm:px-9 sm:py-4 text-xs sm:text-sm font-bold tracking-wider text-white uppercase shadow-[0_12px_24px_-4px_rgba(128,0,128,0.35)] transition-all duration-200 hover:bg-[#6b006b] hover:shadow-[0_16px_30px_-4px_rgba(128,0,128,0.45)] hover:-translate-y-0.5 cursor-pointer"
            >
              Explore More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
