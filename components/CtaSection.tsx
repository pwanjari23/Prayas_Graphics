import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-6 md:px-6">
      <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 overflow-hidden rounded-[28px] sm:rounded-[32px] bg-zinc-950 px-6 py-8 sm:px-10 sm:py-10 shadow-lg border border-zinc-800/80">
        {/* Subtle dark ambient gradient */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-purple-950/20 via-transparent to-transparent"
          aria-hidden="true"
        />

        {/* Left Content */}
        <div className="relative z-10 flex flex-col items-start max-w-2xl text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/25 bg-purple-950/40 px-3 py-1 text-[11px] sm:text-xs font-bold text-purple-300 mb-3 backdrop-blur-md">
            <Sparkles className="h-3 w-3 text-purple-400" />
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
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#800080] px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white uppercase shadow-md transition-all duration-200 hover:bg-[#6b006b] hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
          >
            <span>Get a Custom Quote</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
