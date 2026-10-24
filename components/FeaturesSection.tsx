"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Clock, 
  Layers, 
  Wrench, 
  CheckCircle2, 
  Sparkles,
  ArrowRight 
} from "lucide-react";

export default function FeaturesSection() {
  const [activeSlab, setActiveSlab] = useState(0);

  const slabs = [
    {
      number: "01",
      title: "Premium Materials",
      shortSubtitle: "Cast Acrylic & 304 Steel",
      description: "We use high-grade virgin cast acrylic and non-corrosive Grade-304 stainless steel that never degrades, rusts, or yellows under Nagpur's intense sun.",
      highlights: ["Cast Virgin Acrylic (3-10mm)", "Grade-304 Stainless Steel", "Zero Discoloration Formula"],
      accent: "text-purple-400",
      borderAccent: "border-purple-500/40",
      tag: "Material Grade",
      icon: Layers,
    },
    {
      number: "02",
      title: "Fast Delivery",
      shortSubtitle: "24–48h Turnaround",
      description: "In-house laser routing, CNC fabrication, and instant LED assembly ensure high-speed dispatch with zero third-party delays.",
      highlights: ["CNC In-House Routing", "Automated Letter Bending", "Real-Time WhatsApp Updates"],
      accent: "text-amber-400",
      borderAccent: "border-amber-500/40",
      tag: "Speed SLA",
      icon: Clock,
    },
    {
      number: "03",
      title: "Expert Installation",
      shortSubtitle: "Laser Precision Setup",
      description: "Our licensed technicians use digital laser levels and heavy-duty anchor hardware for millimeter-accurate, secure facade mounting.",
      highlights: ["Millimeter Laser Alignment", "Certified Rigging Hardware", "100% NMC Compliant"],
      accent: "text-blue-400",
      borderAccent: "border-blue-500/40",
      tag: "Precision",
      icon: Wrench,
    },
    {
      number: "04",
      title: "Weather Resistant",
      shortSubtitle: "IP68 UV & Rain Shield",
      description: "Fully sealed IP68 waterproof LED modules and thermal dissipation ACP backings built specifically for 48°C heat and heavy monsoon rain.",
      highlights: ["IP68 Waterproof Modules", "48°C Heat Tolerant ACP", "Surge Protected Power Units"],
      accent: "text-emerald-400",
      borderAccent: "border-emerald-500/40",
      tag: "Durability",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0c0617] via-[#090412] to-[#0c0617] pt-10 sm:pt-14 md:pt-16 pb-14 sm:pb-18 md:pb-20">
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/3 w-[600px] h-[350px] bg-purple-600/[0.08] blur-[140px] rounded-full transform-gpu" />
        <div className="absolute bottom-1/4 -right-16 w-[500px] h-[350px] bg-fuchsia-600/[0.06] blur-[130px] rounded-full transform-gpu" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="rounded-[28px] sm:rounded-[36px] bg-zinc-900/90 border border-zinc-800/90 p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-md">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 pb-5 border-b border-zinc-800 gap-4">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-xs font-bold uppercase tracking-wider mb-2.5">
                <Sparkles className="h-3 w-3" />
                <span>Engineering Standard</span>
              </div>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white leading-snug">
                High-quality materials, precision engineering, and professional installation ensure your signage lasts for years.
              </h2>
            </div>
            <p className="text-xs text-zinc-400 font-medium shrink-0 hidden md:block">
              Hover or tap any pillar to inspect specs
            </p>
          </div>

          {/* Compact Kinetic Slabs (decreased height: md:h-[310px]) */}
          <div className="flex flex-col md:flex-row gap-3 h-auto md:h-[310px] w-full">
            {slabs.map((slab, idx) => {
              const isExpanded = activeSlab === idx;

              return (
                <motion.div
                  key={slab.number}
                  layout
                  onClick={() => setActiveSlab(idx)}
                  onMouseEnter={() => setActiveSlab(idx)}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  className={`relative rounded-2xl p-5 sm:p-5.5 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-300 border ${
                    isExpanded
                      ? `md:flex-[2.6] bg-zinc-950 text-white ${slab.borderAccent} shadow-2xl ring-1 ring-purple-500/30`
                      : "md:flex-1 bg-zinc-800/60 hover:bg-zinc-800 text-zinc-300 border-zinc-700/60 shadow-xs"
                  }`}
                >
                  {/* Ambient glow in expanded state */}
                  {isExpanded && (
                    <div
                      className="absolute -top-16 -right-16 w-52 h-52 bg-purple-500/20 rounded-full blur-2xl pointer-events-none"
                      aria-hidden="true"
                    />
                  )}

                  {/* Top Details */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2.5">
                      <span
                        className={`font-heading text-base font-black tracking-tight ${
                          isExpanded ? slab.accent : "text-zinc-500"
                        }`}
                      >
                        {slab.number}
                      </span>
                      <span
                        className={`text-[9.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                          isExpanded
                            ? "bg-white/10 text-white/90 border-white/20"
                            : "bg-zinc-800/90 text-zinc-300 border-zinc-700"
                        }`}
                      >
                        {slab.tag}
                      </span>
                    </div>

                    <h3
                      className={`font-heading font-extrabold tracking-tight transition-all duration-200 ${
                        isExpanded
                          ? "text-lg sm:text-xl text-white mb-1.5"
                          : "text-sm sm:text-base text-zinc-100"
                      }`}
                    >
                      {slab.title}
                    </h3>

                    {!isExpanded && (
                      <p className="hidden md:block text-[11px] text-zinc-400 font-medium mt-1">
                        {slab.shortSubtitle}
                      </p>
                    )}

                    {/* Expanded Content */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.08 }}
                        className="mt-2"
                      >
                        <p className="text-xs text-zinc-300 leading-relaxed font-normal mb-3 max-w-sm">
                          {slab.description}
                        </p>

                        <div className="flex flex-col gap-1.5">
                          {slab.highlights.map((item, hIdx) => (
                            <div key={hIdx} className="flex items-center gap-1.5 text-[11px] text-zinc-200">
                              <CheckCircle2 className={`h-3 w-3 shrink-0 ${slab.accent}`} />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Bottom Icon */}
                  <div className="relative z-10 pt-3 mt-3 flex items-center justify-between">
                    <div
                      className={`h-8 w-8 rounded-lg flex items-center justify-center transition-all ${
                        isExpanded
                          ? "bg-white/10 text-white border border-white/15"
                          : "bg-zinc-800/90 text-zinc-300 border border-zinc-700 shadow-2xs"
                      }`}
                    >
                      <slab.icon className="h-4 w-4" />
                    </div>

                    {isExpanded && (
                      <span className="text-[10px] font-bold text-zinc-400 flex items-center gap-1">
                        <span>Inspected</span>
                        <ArrowRight className="h-2.5 w-2.5" />
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
