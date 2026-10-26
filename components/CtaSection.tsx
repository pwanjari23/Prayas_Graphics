import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#171717] pt-10 sm:pt-14 md:pt-16 pb-14 sm:pb-18 md:pb-20">
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[350px] bg-white/[0.03] blur-[140px] rounded-full transform-gpu" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 overflow-hidden rounded-[28px] sm:rounded-[36px] bg-zinc-900 border border-zinc-800 px-6 py-8 sm:px-10 sm:py-10 shadow-2xl backdrop-blur-md">
          {/* Left Content */}
          <div className="relative z-10 flex flex-col items-start max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-[11px] sm:text-xs font-bold text-zinc-300 mb-3 backdrop-blur-md">
              <Sparkles className="h-3 w-3 text-zinc-400" />
              <span>Turn Your Storefront Into A Landmark</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-[32px] font-black tracking-tight text-white leading-snug">
              Elevate Your Brand&apos;s Presence with Custom Signboards.
            </h2>

            <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed max-w-xl">
              Custom engineered 3D letters, ACP elevations, and backlit signs designed for maximum visibility across Nagpur.
            </p>
          </div>

          {/* Right CTA Button */}
          <div className="relative z-10 w-full lg:w-auto flex items-center justify-start lg:justify-end shrink-0 pt-2 lg:pt-0">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-zinc-950 uppercase shadow-md transition-all duration-200 hover:bg-zinc-200 hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
            >
              <span>Get a Custom Quote</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
