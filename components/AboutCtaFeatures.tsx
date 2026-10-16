"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Package,
  Truck,
  RotateCcw,
  Lock,
  ArrowRight,
  Sparkles,
  PhoneCall,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/business-info";

export default function AboutCtaFeatures() {
  const features = [
    {
      icon: <Package className="h-6 w-6 text-purple-400" strokeWidth={1.75} />,
      title: "Premium Materials",
      desc: "Cast Acrylic, ACP & SS",
    },
    {
      icon: <Truck className="h-6 w-6 text-purple-400" strokeWidth={1.75} />,
      title: "Fast Delivery",
      desc: "Prompt on-time turnaround",
    },
    {
      icon: <RotateCcw className="h-6 w-6 text-purple-400" strokeWidth={1.75} />,
      title: "Expert Installation",
      desc: "Certified on-site mounting",
    },
    {
      icon: <Lock className="h-6 w-6 text-purple-400" strokeWidth={1.75} />,
      title: "Weather Resistant",
      desc: "UV, heat & rain durable",
    },
  ];

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto w-full flex flex-col items-center justify-center overflow-hidden rounded-[32px] sm:rounded-[36px] bg-zinc-950 px-5 py-10 sm:px-10 sm:py-12 md:py-14 shadow-2xl border border-zinc-800 text-center"
      >
        {/* Subtle radial purple gradient overlay for modern depth */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(128,0,128,0.22),transparent_70%)]"
          aria-hidden="true"
        />

        {/* Ambient dot pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden="true"
        />

        {/* Eyebrow Badge */}
        <div className="relative z-10 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3.5 py-1 text-[11px] sm:text-xs font-bold text-purple-300 mb-3.5 shadow-sm backdrop-blur-md">
          <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-purple-400" />
          <span>Quality • Precision • Longevity</span>
        </div>

        {/* Main Headline (from Image 2) */}
        <h2 className="relative z-10 font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-black tracking-tight leading-[1.12] max-w-3xl text-white">
          Elevate Your Brand&apos;s Presence with Custom Signboards.
        </h2>

        {/* Sub-headline (from Image 1) */}
        <p className="relative z-10 mt-3 max-w-2xl text-xs sm:text-sm md:text-[15px] leading-relaxed text-zinc-400 font-normal">
          High-quality materials, precision engineering, and professional installation ensure your signage lasts for years across Nagpur.
        </p>

        {/* 4 Core Features Grid (Compact landscape pills) */}
        <div className="relative z-10 mt-7 sm:mt-8 grid w-full grid-cols-2 gap-2.5 sm:gap-3.5 md:grid-cols-4 md:gap-4 max-w-5xl">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="group/feat flex flex-col items-center justify-center gap-1.5 rounded-xl sm:rounded-2xl border border-zinc-800/90 bg-zinc-900/60 p-3 sm:p-4 text-center backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:bg-zinc-900 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-950/30"
            >
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-purple-950/60 border border-purple-500/20 text-purple-300 transition-transform duration-300 group-hover/feat:scale-110">
                {feature.icon}
              </div>
              <span className="text-xs sm:text-[13px] font-bold text-white tracking-tight mt-0.5">
                {feature.title}
              </span>
              <span className="text-[10px] sm:text-[11px] text-zinc-400 font-medium">
                {feature.desc}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Action Call To Action Buttons (Strictly side-by-side) */}
        <div className="relative z-10 mt-7 sm:mt-8 flex flex-row items-center justify-center gap-3 sm:gap-4 flex-nowrap">
          <Link
            href="/contact"
            className="group/btn inline-flex items-center justify-center gap-2 rounded-xl bg-[#800080] px-5 sm:px-7 py-3 text-xs sm:text-sm font-bold tracking-wider text-white uppercase shadow-lg shadow-purple-600/35 transition-all duration-200 hover:bg-[#6b006b] hover:shadow-xl hover:shadow-purple-600/45 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
          >
            <span>Get a Custom Quote</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </Link>

          <a
            href={`tel:${BUSINESS_INFO.contact.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-5 sm:px-6 py-3 text-xs sm:text-sm font-bold tracking-wider text-white uppercase border border-white/15 backdrop-blur-md transition-all duration-200 hover:bg-white/15 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
          >
            <PhoneCall className="h-4 w-4 text-purple-300" />
            <span>Call Workshop</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
