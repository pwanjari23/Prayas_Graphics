"use client";

import { useState } from "react";
import { ChevronDown, ShieldCheck, Truck, Zap, HelpCircle, MessageCircle, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { faqsData } from "@/lib/faqs-data";

function getCategoryIcon(iconName: string, isActive: boolean) {
  const iconClass = cn("w-4 h-4 transition-colors", isActive ? "text-purple-300" : "text-[#800080]");
  switch (iconName) {
    case "shield":
      return <ShieldCheck className={iconClass} />;
    case "truck":
      return <Truck className={iconClass} />;
    case "zap":
      return <Zap className={iconClass} />;
    default:
      return <HelpCircle className={iconClass} />;
  }
}

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCategoryChange = (index: number) => {
    setActiveCategory(index);
    setOpenIndex(0); // Open first question of newly selected category
  };

  const currentCategory = faqsData[activeCategory] || faqsData[0];

  return (
    <section className="relative w-full pt-6 sm:pt-8 pb-16 sm:pb-24 overflow-hidden border-t border-zinc-200/80 bg-[#FAFAF9]">
      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header - Left-aligned matching Contact Prayas Graphics style */}
        <div className="mb-8 max-w-3xl text-left">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-zinc-950 tracking-tight leading-[1.12] mb-3"
          >
            Got Questions?<br />
            <span className="text-zinc-500 font-bold">We&apos;ve Got Answers.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed"
          >
            Everything you need to know about our premium signage services and manufacturing process.
          </motion.p>
        </div>

        {/* 2-Column Split: FAQ (Tabs + Accordion) on LEFT (lg:col-span-8), Two Cards on RIGHT (lg:col-span-4) */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8 items-start">
          {/* LEFT: FAQ Category Tabs & Accordion (8 cols) */}
          <div className="lg:col-span-8 flex flex-col">
            {/* 3 Category Tabs in One Line (Guaranteed Single Line) */}
            <div className="flex items-center gap-2 sm:gap-2.5 mb-6 overflow-x-auto pb-1 no-scrollbar">
              {faqsData.map((category, idx) => {
                const isActive = activeCategory === idx;
                return (
                  <button
                    key={category.category}
                    type="button"
                    onClick={() => handleCategoryChange(idx)}
                    className={cn(
                      "group relative shrink-0 inline-flex items-center gap-2 rounded-full px-3.5 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 active:scale-[0.98]",
                      isActive
                        ? "bg-zinc-950 text-white shadow-md"
                        : "bg-white text-zinc-600 border border-zinc-200/90 hover:border-zinc-400 hover:text-zinc-950 hover:bg-zinc-50"
                    )}
                    aria-selected={isActive}
                    role="tab"
                  >
                    {getCategoryIcon(category.iconName, isActive)}
                    <span>{category.category}</span>
                    <span
                      className={cn(
                        "ml-0.5 flex h-4.5 min-w-[18px] sm:h-5 sm:min-w-[20px] items-center justify-center rounded-full px-1 text-[11px] font-bold tabular-nums transition-colors",
                        isActive ? "bg-white/20 text-white" : "bg-zinc-100 text-zinc-500 group-hover:bg-zinc-200"
                      )}
                    >
                      {category.items.length}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Accordion for Selected Category */}
            <div className="min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  {currentCategory.items.map((item, itemIdx) => {
                    const isOpen = openIndex === itemIdx;

                    return (
                      <div
                        key={itemIdx}
                        className={cn(
                          "group rounded-2xl border transition-all duration-200 overflow-hidden",
                          isOpen
                            ? "border-zinc-900 bg-white shadow-xs"
                            : "border-zinc-200/90 bg-white hover:border-zinc-300"
                        )}
                      >
                        <button
                          type="button"
                          onClick={() => toggleFaq(itemIdx)}
                          className="flex items-center justify-between w-full p-4 sm:p-5 text-left cursor-pointer"
                          aria-expanded={isOpen}
                        >
                          <span
                            className={cn(
                              "text-sm sm:text-base font-bold transition-colors pr-4",
                              isOpen ? "text-zinc-950" : "text-zinc-800 group-hover:text-zinc-950"
                            )}
                          >
                            {item.q}
                          </span>
                          <div
                            className={cn(
                              "shrink-0 p-1.5 rounded-full transition-transform duration-200",
                              isOpen
                                ? "bg-zinc-950 text-white rotate-180"
                                : "bg-zinc-100 text-zinc-500 group-hover:bg-zinc-200"
                            )}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0">
                                <div className="h-px w-full bg-zinc-100 mb-3" />
                                <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
                                  {item.a}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT: The Two Cards (Side-by-side on responsive, stacked vertically on desktop) */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:flex lg:flex-col lg:col-span-4 lg:sticky lg:top-24">
            {/* WhatsApp Quick Consultation Card (Black Card - Compact) */}
            <div className="flex flex-col justify-between p-4 sm:p-6 rounded-[20px] sm:rounded-[24px] bg-zinc-950 text-white shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-2 sm:p-3 opacity-5 group-hover:opacity-10 transition-opacity">
                <MessageCircle className="w-14 h-14 sm:w-20 sm:h-20 rotate-12" />
              </div>
              <div>
                <h3 className="text-sm sm:text-lg lg:text-xl font-heading font-bold mb-1.5 sm:mb-2">Still have questions?</h3>
                <p className="text-zinc-400 text-[11px] sm:text-xs lg:text-sm mb-3.5 sm:mb-5 leading-relaxed font-normal">
                  Can&apos;t find what you&apos;re looking for? Reach out to our team of experts directly.
                </p>
              </div>
              <a
                href="https://wa.me/918788270495"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-2.5 sm:py-3 px-3 sm:px-5 rounded-full bg-white hover:bg-zinc-100 text-zinc-950 text-[11px] sm:text-xs lg:text-sm font-bold transition-all shadow-sm active:scale-[0.98] text-center"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Why Choose Prayas Graphics Card (White Card - Compact) */}
            <div className="flex flex-col justify-between p-4 sm:p-6 rounded-[20px] sm:rounded-[24px] border border-zinc-200/90 bg-white shadow-2xs">
              <div>
                <h4 className="font-heading font-bold text-xs sm:text-sm lg:text-base text-zinc-950 mb-2.5 sm:mb-3.5">
                  Why Choose Us?
                </h4>
                <ul className="space-y-2 sm:space-y-2.5">
                  {[
                    "Premium Raw Materials",
                    "10+ Years of Experience",
                    "Expert Installation Team",
                    "Fastest Delivery in Nagpur",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-1.5 sm:gap-2.5 text-[11px] sm:text-xs lg:text-sm font-semibold text-zinc-700">
                      <div className="shrink-0 w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                        <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      </div>
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
