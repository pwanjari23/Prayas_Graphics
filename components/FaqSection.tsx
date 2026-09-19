"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle, HelpCircle, ShieldCheck, Truck, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

import { faqsData } from "@/lib/faqs-data";

function getCategoryIcon(iconName: string) {
  switch (iconName) {
    case "shield":
      return <ShieldCheck className="w-5 h-5" />;
    case "truck":
      return <Truck className="w-5 h-5" />;
    case "zap":
      return <Zap className="w-5 h-5" />;
    default:
      return <HelpCircle className="w-5 h-5" />;
  }
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<string | null>("0-0");

  const toggleFaq = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-24 overflow-hidden bg-white">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600 blur-[120px]" />
      </div>

      <div className="container relative z-10 px-4 mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6"
          >
            <HelpCircle className="w-4 h-4 text-indigo-600" />
            <span className="text-xs font-bold tracking-wider text-indigo-600 uppercase">Support Center</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight mb-6"
          >
            Got Questions?<br /><span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-blue-600">We&apos;ve Got Answers.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-zinc-500 font-medium"
          >
            Everything you need to know about our premium signage services and manufacturing process.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side: Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="p-8 rounded-[32px] bg-zinc-900 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <MessageCircle className="w-24 h-24 rotate-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-zinc-400 mb-8 font-medium">
                Can&apos;t find what you&apos;re looking for? Reach out to our team of experts directly.
              </p>
              <a 
                href="https://wa.me/918788270495" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-4 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Chat with Us on WhatsApp
              </a>
            </div>

            <div className="p-8 rounded-[32px] border border-zinc-100 bg-zinc-50/50">
              <h4 className="font-bold text-zinc-900 mb-4">Why Choose Prayas Graphics?</h4>
              <ul className="space-y-4">
                {[
                  "Premium Raw Materials",
                  "10+ Years of Experience",
                  "Expert Installation Team",
                  "Fastest Delivery in Nagpur"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-semibold text-zinc-600">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Side: Accordion */}
          <div className="lg:col-span-8 space-y-8">
            {faqsData.map((category, catIdx) => (
              <motion.div 
                key={catIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <h3 className="text-xl font-extrabold text-zinc-900 uppercase tracking-wider">{category.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.items.map((item, itemIdx) => {
                    const uniqueId = `${catIdx}-${itemIdx}`;
                    const isOpen = openIndex === uniqueId;
                    
                    return (
                      <div 
                        key={itemIdx}
                        className={cn(
                          "group rounded-2xl border transition-all duration-300",
                          isOpen ? "border-indigo-200 bg-indigo-50/30 shadow-md" : "border-zinc-100 hover:border-zinc-200 bg-white"
                        )}
                      >
                        <button
                          onClick={() => toggleFaq(uniqueId)}
                          className="flex items-center justify-between w-full p-6 text-left"
                        >
                          <span className={cn(
                            "text-lg font-bold transition-colors",
                            isOpen ? "text-indigo-600" : "text-zinc-800 group-hover:text-zinc-900"
                          )}>
                            {item.q}
                          </span>
                          <div className={cn(
                            "shrink-0 ml-4 p-1.5 rounded-full transition-all duration-300",
                            isOpen ? "bg-indigo-600 text-white rotate-180" : "bg-zinc-100 text-zinc-400 group-hover:bg-zinc-200 group-hover:text-zinc-600"
                          )}>
                            <ChevronDown className="w-5 h-5" />
                          </div>
                        </button>
                        
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6 pt-0">
                                <div className="h-px w-full bg-indigo-100 mb-4" />
                                <p className="text-zinc-600 font-medium leading-relaxed">
                                  {item.a}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
