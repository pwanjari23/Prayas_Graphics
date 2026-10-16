"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Handshake,
  ShieldCheck,
  Lightbulb,
  BookOpen,
  Quote,
  Wrench,
  Layers,
} from "lucide-react";

export default function MeetTheMaker() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Background ambient light */}
      <div
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 h-80 w-[600px] rounded-full bg-purple-100/30 blur-3xl -z-10"
        aria-hidden="true"
      />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="mb-8 sm:mb-10 text-center flex flex-col items-center justify-center"
      >

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight leading-[1.12]">
          Our Identity, <br className="hidden sm:inline" />
          Vision and Values
        </h2>
      </motion.div>

      {/* Wrapper for the overlapping pill card and bottom card */}
      <div className="relative mx-auto w-full max-w-6xl">
        {/* TOP FLOATING PILL CARD: Black & White Theme (replacing green in reference) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 mx-auto w-[92%] sm:w-[80%] md:w-[70%] max-w-3xl rounded-2xl sm:rounded-[28px] bg-zinc-950 px-5 py-5 sm:px-8 sm:py-6 text-white shadow-[0_20px_45px_-10px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.08)] border border-zinc-800"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-center justify-items-center text-center">
            {/* Value 1 */}
            <div className="flex flex-col items-center gap-2 group/val">
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-white/10 text-purple-300 transition-transform duration-200 group-hover/val:scale-110">
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <span className="text-[11px] sm:text-xs font-bold tracking-wide text-zinc-200">
                Precision Quality
              </span>
            </div>

            {/* Value 2 */}
            <div className="flex flex-col items-center gap-2 group/val">
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-white/10 text-purple-300 transition-transform duration-200 group-hover/val:scale-110">
                <Handshake className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <span className="text-[11px] sm:text-xs font-bold tracking-wide text-zinc-200">
                Trust &amp; Transparency
              </span>
            </div>

            {/* Value 3 */}
            <div className="flex flex-col items-center gap-2 group/val">
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-white/10 text-purple-300 transition-transform duration-200 group-hover/val:scale-110">
                <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <span className="text-[11px] sm:text-xs font-bold tracking-wide text-zinc-200">
                Weatherproof Build
              </span>
            </div>

            {/* Value 4 */}
            <div className="flex flex-col items-center gap-2 group/val">
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-white/10 text-purple-300 transition-transform duration-200 group-hover/val:scale-110">
                <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <span className="text-[11px] sm:text-xs font-bold tracking-wide text-zinc-200">
                Design Innovation
              </span>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM OVERLAPPING MAIN WHITE CARD (Expanded Width) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative z-10 -mt-7 sm:-mt-9 w-full rounded-[36px] border border-zinc-200/90 bg-white pt-16 sm:pt-20 pb-10 sm:pb-12 px-6 sm:px-12 lg:px-16 shadow-[0_16px_45px_rgba(0,0,0,0.06)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 divide-y md:divide-y-0 md:divide-x divide-zinc-200/80 items-stretch">

            {/* LEFT COLUMN: Our Story (Data from Image 3) */}
            <div className="flex flex-col justify-between pt-2 md:pt-0 md:pr-10 lg:pr-14">
              <div>
                <div className="flex items-center gap-2.5 mb-3.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-50 text-[#800080]">
                    <BookOpen className="h-4 w-4" />
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-black text-zinc-950 tracking-tight">
                    Our Story
                  </h3>
                </div>

                <p className="text-[13.5px] sm:text-[14.5px] leading-relaxed text-zinc-600 font-normal">
                  Founded in Nagpur with a passion for high-impact visual communication, Prayas Graphics was built on the principle of quality manufacturing. We believe that signage is the face of your business, and it should reflect excellence. What started as a local printing shop has grown into a full-scale manufacturing unit specializing in ACP, LED, and complex display solutions.
                </p>

                {/* Capability badges */}
                <div className="mt-5 grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2 rounded-xl bg-zinc-50 border border-zinc-100 p-2.5 text-xs font-semibold text-zinc-700">
                    <Wrench className="h-3.5 w-3.5 text-[#800080] shrink-0" />
                    <span className="truncate">Laser &amp; CNC Cut</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-zinc-50 border border-zinc-100 p-2.5 text-xs font-semibold text-zinc-700">
                    <Layers className="h-3.5 w-3.5 text-[#800080] shrink-0" />
                    <span className="truncate">ACP &amp; SS Facades</span>
                  </div>
                </div>
              </div>

              {/* Social Channels Row */}
              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                  Connect With Us:
                </span>
                <div className="flex items-center gap-2">
                  {/* Google Reviews */}
                  <a
                    href="https://g.page/r/CbL_ssLkBR47EAI/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Google Reviews"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-all duration-200 hover:bg-[#4285F4] hover:text-white hover:-translate-y-0.5"
                  >
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-2.21 5.39-7.84 5.39-4.84 0-8.79-4.01-8.79-8.97s3.95-8.97 8.79-8.97c2.75 0 4.59 1.17 5.65 2.18l2.58-2.49c-1.66-1.55-3.82-2.5-8.23-2.5-6.63 0-12 5.37-12 12s5.37 12 12 12c6.92 0 11.52-4.87 11.52-11.72 0-.79-.08-1.39-.18-1.99h-11.34z" />
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/prayas_graphics_77/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-all duration-200 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 hover:text-white hover:-translate-y-0.5"
                  >
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                    </svg>
                  </a>
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/prayasgraphics/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-all duration-200 hover:bg-[#1877F2] hover:text-white hover:-translate-y-0.5"
                  >
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8.55 9.8V14.8h-2.6v-2.8h2.6v-2.15c0-2.57 1.52-3.98 3.86-3.98 1.12 0 2.3.2 2.3.2v2.53h-1.3c-1.27 0-1.67.79-1.67 1.6v1.8h2.85l-.45 2.8h-2.4V21.8c5.11-.93 8.55-4.96 8.55-9.8z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Maker's Vision (Data from Image 2) */}
            <div className="flex flex-col justify-between pt-6 md:pt-0 md:pl-10 lg:pl-14">
              <div>
                <div className="flex items-center gap-2.5 mb-3.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-50 text-[#800080]">
                    <Quote className="h-4 w-4" />
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-black text-zinc-950 tracking-tight">
                    Maker&apos;s Vision
                  </h3>
                </div>

                <blockquote className="font-heading text-base sm:text-lg md:text-xl font-bold leading-relaxed tracking-tight text-zinc-950">
                  &ldquo;I believe art has the power to transform not just spaces, but the way we feel in them. At Prayas Graphics, my goal is to make beautiful, inspiring designs accessible to everyone, so every wall can tell a story that connects with who you are.&rdquo;
                </blockquote>
              </div>

              {/* Attribution Signature */}
              <div className="mt-6 pt-4 border-t border-zinc-100 flex flex-col">
                <span className="font-heading text-xs sm:text-sm font-black text-zinc-950 uppercase tracking-tight">
                  Rohit More &amp; The Team
                </span>
                <span className="text-[11px] font-bold text-[#800080] mt-0.5">
                  Prayas Graphics • Nagpur
                </span>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
