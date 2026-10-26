"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { History, ExternalLink, ShieldCheck, Wrench, Layers } from "lucide-react";

export default function AboutStory() {
  return (
    <section className="relative mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 md:flex-row md:items-stretch md:px-6">
      {/* Left Card: Story & Social Links (Slides in from Left) */}
      <motion.div
        initial={{ opacity: 0, x: -36 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="group relative flex flex-1 flex-col justify-between rounded-[32px] border border-zinc-200/90 bg-white p-7 sm:p-10 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-lg"
      >
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-zinc-100 px-3.5 py-1.5 text-xs font-bold text-zinc-900 shadow-2xs mb-6">
            <History className="h-3.5 w-3.5 text-zinc-900" />
            <span>Our Heritage</span>
          </div>

          <h2 className="font-heading text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl md:text-5xl leading-[1.1]">
            Our Story
          </h2>

          <p className="mt-5 text-[15px] sm:text-base leading-relaxed text-zinc-600 font-normal max-w-xl">
            Founded in Nagpur with a passion for high-impact visual communication, Prayas Graphics was built on the principle of quality manufacturing. We believe that signage is the face of your business, and it should reflect excellence. What started as a local printing shop has grown into a full-scale manufacturing unit specializing in ACP, LED, and complex display solutions.
          </p>

          {/* Capabilities Strip */}
          <div className="mt-8 grid grid-cols-2 gap-3.5 pt-4 border-t border-zinc-100 max-w-md">
            <div className="flex items-center gap-2.5 rounded-xl bg-zinc-50 p-3 text-xs sm:text-sm font-semibold text-zinc-700 border border-zinc-100">
              <Wrench className="h-4 w-4 text-zinc-900" />
              <span>Laser &amp; CNC Cut</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl bg-zinc-50 p-3 text-xs sm:text-sm font-semibold text-zinc-700 border border-zinc-100">
              <Layers className="h-4 w-4 text-zinc-900" />
              <span>ACP &amp; SS Facades</span>
            </div>
          </div>
        </div>

        {/* Social Proof & Follow Links */}
        <div className="mt-9 flex flex-wrap items-center gap-4 pt-4 border-t border-zinc-100">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-400">
            Connect With Us:
          </span>
          <div className="flex items-center gap-2.5">
            {/* Google Reviews */}
            <a
              href="https://g.page/r/CbL_ssLkBR47EAI/review"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Review Prayas Graphics on Google"
              className="group/social flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-all duration-200 hover:bg-zinc-950 hover:text-white hover:-translate-y-1 hover:shadow-md"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-200 group-hover/social:scale-110" fill="currentColor" aria-hidden="true">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-2.21 5.39-7.84 5.39-4.84 0-8.79-4.01-8.79-8.97s3.95-8.97 8.79-8.97c2.75 0 4.59 1.17 5.65 2.18l2.58-2.49c-1.66-1.55-3.82-2.5-8.23-2.5-6.63 0-12 5.37-12 12s5.37 12 12 12c6.92 0 11.52-4.87 11.52-11.72 0-.79-.08-1.39-.18-1.99h-11.34z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/prayas_graphics_77/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Prayas Graphics on Instagram"
              className="group/social flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-all duration-200 hover:bg-zinc-950 hover:text-white hover:-translate-y-1 hover:shadow-md"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-200 group-hover/social:scale-110" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/prayasgraphics/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Prayas Graphics on Facebook"
              className="group/social flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-all duration-200 hover:bg-zinc-950 hover:text-white hover:-translate-y-1 hover:shadow-md"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-200 group-hover/social:scale-110" fill="currentColor" aria-hidden="true">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8.55 9.8V14.8h-2.6v-2.8h2.6v-2.15c0-2.57 1.52-3.98 3.86-3.98 1.12 0 2.3.2 2.3.2v2.53h-1.3c-1.27 0-1.67.79-1.67 1.6v1.8h2.85l-.45 2.8h-2.4V21.8c5.11-.93 8.55-4.96 8.55-9.8z"/>
              </svg>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Right Card: Dynamic Showcase Frame (Slides in from Right) */}
      <motion.div
        initial={{ opacity: 0, x: 36 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="group relative flex flex-1 items-center justify-center overflow-hidden rounded-[32px] border border-zinc-200/90 bg-gradient-to-br from-stone-50 via-zinc-100 to-zinc-100 p-6 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] min-h-[380px] sm:min-h-[440px] md:min-h-[520px]"
      >
        {/* Subtle patterned backdrop */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#18181b 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
          aria-hidden="true"
        />

        {/* Floating Architectural Poster Display */}
        <div className="relative aspect-4/5 w-full max-w-[320px] rounded-2xl bg-white p-3 shadow-2xl border border-zinc-200/80 transition-transform duration-500 group-hover:scale-[1.03] group-hover:-rotate-1">
          <div className="relative h-full w-full overflow-hidden rounded-xl bg-zinc-900">
            <Image
              src="/about/prayasgraphicsshop.jpeg"
              alt="Prayas Graphics Production Facility"
              fill
              sizes="320px"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Subtle glass reflection highlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10" />
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-zinc-950 px-4 py-1.5 text-[11px] font-bold text-white shadow-lg border border-zinc-800 flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-white" />
            <span>Genuine Quality Craftsmanship</span>
          </div>
        </div>

        {/* Soft ground shadow blur */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 h-8 w-48 rounded-full bg-zinc-950/15 blur-xl -z-10" />
      </motion.div>
    </section>
  );
}
