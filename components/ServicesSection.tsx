"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";
import { servicesData } from "@/lib/services-data";
import { Sparkles } from "lucide-react";

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ServicesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f8f8f8] via-white to-[#f8f8f8] pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 md:pb-24">
      {/* Background CAD Matrix */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden="true">
        {/* CAD dot grid */}
        <div className="absolute inset-0 opacity-[0.20] [background-image:radial-gradient(#a3a3a3_0.75px,transparent_0.75px)] [background-size:24px_24px]" />

        {/* Blueprint Alignment Crosshairs */}
        <div className="absolute top-16 left-8 text-zinc-400/40 text-xs font-mono font-light select-none">+ 01_SERVICES</div>
        <div className="absolute top-16 right-8 text-zinc-400/40 text-xs font-mono font-light select-none">+ 02_CATALOG</div>
        <div className="absolute bottom-16 left-12 text-zinc-400/40 text-xs font-mono font-light select-none">+ 03_FABRICATION</div>
        <div className="absolute bottom-16 right-12 text-zinc-400/40 text-xs font-mono font-light select-none">+ 04_NAGPUR</div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/95 px-4 py-1.5 text-xs font-bold text-zinc-950 shadow-xs backdrop-blur-md mb-4">
            <Sparkles className="h-3.5 w-3.5 text-zinc-950" />
            <span>ALL 14 SIGNAGE & MANUFACTURING SERVICES</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-zinc-950 leading-[1.12] text-center">
            Art that speaks.{" "}
            <span className="block text-zinc-950">
              Services that deliver.
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-600 font-normal text-center max-w-2xl">
            From a single custom print to a large-scale corporate installation, Prayas Graphics has the expertise and infrastructure to bring your vision to life.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4"
        >
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.slug} variants={cardVariants}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-col justify-between rounded-2xl sm:rounded-[24px] bg-white p-4 sm:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-zinc-200 transition-all duration-300 hover:shadow-[0_16px_36px_rgba(0,0,0,0.1)] hover:border-zinc-400 hover:-translate-y-1 h-full"
                >
                  <div>
                    <div className="mb-3 sm:mb-5 flex items-center justify-between gap-1.5">
                      <div className="flex relative items-center justify-center rounded-xl sm:rounded-2xl bg-zinc-100 group-hover:bg-zinc-950 transition-colors duration-300 w-8 h-8 sm:w-11 sm:h-11 shrink-0 text-zinc-900 group-hover:text-white">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5 transition-colors duration-300" />
                      </div>
                      <span className="rounded-full border border-zinc-200 bg-zinc-100 px-2 py-0.5 text-[9px] sm:text-[11px] font-bold text-zinc-700 truncate max-w-[85px] sm:max-w-none">
                        {service.tag}
                      </span>
                    </div>
                    <h2 className="font-heading text-sm sm:text-lg font-bold text-zinc-900 tracking-tight group-hover:text-black transition-colors line-clamp-2 min-h-[2.5rem] sm:min-h-0">
                      {service.title}
                    </h2>
                    <p className="mt-1.5 sm:mt-3 text-[11px] sm:text-[14px] leading-relaxed font-medium text-zinc-500 line-clamp-2">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-3 sm:mt-6 flex flex-col pt-2.5 sm:pt-4 border-t border-zinc-100">
                    <div className="flex items-center justify-between gap-1">
                      <div className="flex flex-col">
                        {service.originalPrice && (
                          <span className="text-[9px] sm:text-[10px] text-zinc-400 line-through font-medium">₹{service.originalPrice.toLocaleString('en-IN')}</span>
                        )}
                        <span className="text-xs sm:text-sm font-bold text-zinc-950">
                          {service.offerPrice ? `₹${service.offerPrice.toLocaleString('en-IN')}` : service.pricing.split(' ')[0] === "Rs." ? service.pricing.split(',')[0].replace("Rs. ", "₹") : service.pricing}
                        </span>
                      </div>
                      <div className="flex items-center text-xs sm:text-sm font-semibold text-zinc-900 group-hover:text-black transition-colors">
                        <span className="hidden sm:inline mr-1.5">Details</span>
                        <span className="group-hover:translate-x-1 transition-transform font-bold">→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
