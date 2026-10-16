"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";
import { servicesData } from "@/lib/services-data";

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
    <section className="mx-auto w-full max-w-7xl px-4 pt-20 pb-12 sm:pt-24 md:px-6">
      {/* Editorial Services Header (Centered layout matching Blog header) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-12 sm:mb-14"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-1 text-xs font-bold text-[#800080] mb-3">
          <span>What We Offer</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight text-zinc-950 leading-[1.12] text-center">
          Art that speaks.
          <span className="block text-zinc-950">Services that deliver.</span>
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
        className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
      >
        {servicesData.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div key={service.slug} variants={cardVariants}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex flex-col justify-between rounded-2xl sm:rounded-[24px] bg-white p-3.5 sm:p-6 shadow-sm border border-zinc-100 transition-all duration-300 hover:shadow-md hover:border-zinc-200 h-full"
              >
                <div>
                  <div className="mb-3 sm:mb-5 flex items-center justify-between gap-1.5">
                    <div className="flex relative items-center justify-center rounded-xl sm:rounded-2xl bg-zinc-100 group-hover:bg-zinc-950 transition-colors duration-300 w-8 h-8 sm:w-11 sm:h-11 shrink-0">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-zinc-700 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="rounded-full border border-zinc-200 px-2 py-0.5 text-[9px] sm:text-[11px] font-semibold text-zinc-500 truncate max-w-[85px] sm:max-w-none">
                      {service.tag}
                    </span>
                  </div>
                  <h2 className="font-heading text-sm sm:text-lg font-bold text-zinc-900 tracking-tight group-hover:text-[#800080] transition-colors line-clamp-2 min-h-[2.5rem] sm:min-h-0">
                    {service.title}
                  </h2>
                  <p className="mt-1.5 sm:mt-3 text-[11px] sm:text-[14px] leading-relaxed font-medium text-zinc-500 line-clamp-2">
                    {service.description}
                  </p>
                </div>
                
                <div className="mt-3 sm:mt-6 flex flex-col pt-2.5 sm:pt-4 border-t border-zinc-50">
                  <div className="flex items-center justify-between gap-1">
                    <div className="flex flex-col">
                      {service.originalPrice && (
                        <span className="text-[9px] sm:text-[10px] text-zinc-400 line-through font-medium">₹{service.originalPrice.toLocaleString('en-IN')}</span>
                      )}
                      <span className="text-xs sm:text-sm font-bold text-[#800080]">
                         {service.offerPrice ? `₹${service.offerPrice.toLocaleString('en-IN')}` : service.pricing.split(' ')[0] === "Rs." ? service.pricing.split(',')[0].replace("Rs. ", "₹") : service.pricing}
                      </span>
                    </div>
                    <div className="flex items-center text-xs sm:text-sm font-semibold text-zinc-900 group-hover:text-[#800080] transition-colors">
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
    </section>
  );
}
