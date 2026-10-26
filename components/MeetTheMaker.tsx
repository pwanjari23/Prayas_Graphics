"use client";

import { motion } from "framer-motion";
import { Box, Eye, Gem } from "lucide-react";

export default function MeetTheMaker() {
  const pillars = [
    {
      number: "01",
      icon: <Box className="h-5 w-5 text-white" strokeWidth={1.8} />,
      title: "Our Identity",
      desc: "We are a signage design and manufacturing company based in Nagpur, committed to creating high-quality, durable and visually striking brand experiences.",
    },
    {
      number: "02",
      icon: <Eye className="h-5 w-5 text-white" strokeWidth={1.8} />,
      title: "Our Vision",
      desc: "To be the most trusted and innovative signage partner in Central India, known for quality, creativity and customer satisfaction.",
    },
    {
      number: "03",
      icon: <Gem className="h-5 w-5 text-white" strokeWidth={1.8} />,
      title: "Our Values",
      desc: "Quality craftsmanship, on-time delivery, transparent communication and a long-term commitment to our clients' success.",
    },
  ];

  return (
    <section
      id="our-values"
      className="relative w-full overflow-hidden bg-[#0A0A0A] py-16 sm:py-20 md:py-24 border-t border-zinc-800/80"
    >
      {/* Subtle atmospheric ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/[0.02] blur-[140px] rounded-full transform-gpu" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header: Two-column layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-8 pb-10 sm:pb-12 border-b border-zinc-800/80 text-left"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block w-6 h-[1.5px] bg-zinc-500" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#737373]">
                OUR HERITAGE &amp; MISSION
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Our Identity, Vision &amp; Values
            </h2>
          </div>

          <p className="text-xs sm:text-sm md:text-[15px] leading-relaxed text-[#737373] max-w-md font-normal">
            Driven by creativity, built on trust, and focused on long-term partnerships, our identity, vision and values shape everything we create.
          </p>
        </motion.div>

        {/* 3 Pillar Cards: 01 Our Identity, 02 Our Vision, 03 Our Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-8 sm:mt-10">
          {pillars.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col justify-between rounded-2xl bg-zinc-950/60 border border-zinc-800/80 p-6 sm:p-7 md:p-8 text-left transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/40 hover:-translate-y-1 shadow-sm"
            >
              <div>
                {/* Top Row: Icon & Serial Number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-white transition-transform duration-300 group-hover:scale-105">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-zinc-500">
                    {item.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight mb-2.5">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13.5px] leading-relaxed text-zinc-400 font-normal">
                  {item.desc}
                </p>
              </div>

              {/* Subtle hover accent line */}
              <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-semibold text-zinc-500 group-hover:text-zinc-300 transition-colors">
                <span>Core Pillar</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
