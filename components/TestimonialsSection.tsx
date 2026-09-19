"use client";

import Image from "next/image";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Sahil Khobragade",
    role: "Local Guide",
    quote: "Excellent service from Prayas Graphics! The quality of printing and design work is outstanding. They are very professional, responsive, and deliver work on time. Highly recommended for reliable and high-quality printing services. 👍✨",
    gradient: "from-amber-500/10 to-orange-500/5",
  },
  {
    name: "Praharsh Lukhey",
    role: "Verified Client",
    quote: "I'm very satisfied with the banner printing service. The print quality, color accuracy, and finishing were excellent. They truly understand customer requirements perfectly.",
    gradient: "from-primary/10 to-indigo-500/5",
  },
  {
    name: "Tanushree Borkar",
    role: "Verified Client",
    quote: "Quick and efficient work and reasonable prices. I got my order within a day. The staff is friendly and professional.",
    gradient: "from-emerald-500/10 to-teal-500/5",
  },
  {
    name: "Satyawan Shivankar",
    role: "Local Guide",
    quote: "Quick and Quality Service with wonderful Nature. They Use Quality Material for all their signage and printing work.",
    gradient: "from-purple-500/10 to-pink-500/5",
  },
  {
    name: "Manish Chandwani",
    role: "Local Guide",
    quote: "Great prices and excellent service! They truly know how to build strong customer relationships and deliver exactly what's promised.",
    gradient: "from-rose-500/10 to-red-500/5",
  },
  {
    name: "Pawankumar D",
    role: "Local Guide",
    quote: "Excellent service provided by Prayas Graphics! They designed banners and standees for us with great precision and delivered on time.",
    gradient: "from-cyan-500/10 to-primary/5",
  },
  {
    name: "Rajesh Wadhaikar",
    role: "Verified Client",
    quote: "On time done work and very good quality. Highly recommended for anyone looking for reliable graphic services in Nagpur.",
    gradient: "from-blue-500/10 to-indigo-500/5",
  },
  {
    name: "Gaurav ranjan Thakur",
    role: "Local Guide",
    quote: "Excellent work, Good staff service. The attention to detail in their signage work is impressive.",
    gradient: "from-orange-500/10 to-red-500/5",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className={cn(
    "relative flex flex-col w-[350px] shrink-0 p-8 rounded-3xl border border-zinc-200/50 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group overflow-hidden",
  )}>
    <div className={cn("absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500", testimonial.gradient)} />
    
    <div className="relative z-10">
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <Quote className="h-8 w-8 text-zinc-100 group-hover:text-zinc-200 transition-colors" />
      </div>

      <p className="text-[15px] leading-relaxed text-zinc-600 font-medium mb-8">
        "{testimonial.quote}"
      </p>
      
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-linear-to-b from-zinc-100 to-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 font-bold text-xs uppercase tracking-wider">
          {testimonial.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-bold text-zinc-900">{testimonial.name}</span>
            <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
          </div>
          <span className="text-xs font-semibold text-zinc-400 uppercase tracking-tight">{testimonial.role}</span>
        </div>
      </div>
    </div>
  </div>
);

const brandLogos = [
  { src: "/clients/logo (1).jpeg", alt: "Chola Finance Signage Client", name: "Chola Finance" },
  { src: "/clients/logo (2).jpeg", alt: "SMFG India Credit Signage Client", name: "SMFG India Credit" },
  { src: "/clients/logo (3).jpeg", alt: "Fortune Oil & Foods Signage Client", name: "Fortune" },
  { src: "/clients/logo (4).jpeg", alt: "NoBroker Branding Client", name: "NoBroker" },
  { src: "/clients/logo (5).jpeg", alt: "Punjab National Bank Signage Client", name: "PNB" },
  { src: "/clients/logo (6).jpeg", alt: "Quickclean Signage Client", name: "Quickclean" },
  { src: "/clients/logo (7).jpeg", alt: "Cube Highways Trust Signage Client", name: "Cube Highways" },
  { src: "/clients/logo (8).jpeg", alt: "EazyDiner Signage Client", name: "EazyDiner" },
  { src: "/clients/logo (9).jpeg", alt: "Samsung Electronics Signage Client", name: "Samsung" },
  { src: "/clients/logo (10).jpeg", alt: "Terex Corporation Signage Client", name: "Terex" },
  { src: "/clients/logo (11).jpeg", alt: "Mankind Pharma Signage Client", name: "Mankind Pharma" },
];

export default function TestimonialsSection() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-white">
      <div className="container mx-auto px-4 mb-16 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 text-xs font-bold uppercase tracking-wider mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Our Success Stories
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-zinc-900 mb-6"
          >
            Real Stories From <span className="text-zinc-400 underline decoration-zinc-200 decoration-offset-4">Happy Clients</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-500 font-medium"
          >
            Join hundreds of businesses that have transformed their visibility with Prayas Graphics.
          </motion.p>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <motion.div 
          className="flex gap-6 animate-marquee py-12"
          animate={{
            x: [0, -1 * (350 * testimonials.length + 24 * testimonials.length)]
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: "fit-content" }}
        >
          {/* First set */}
          {testimonials.map((t, idx) => (
            <TestimonialCard key={`first-${idx}`} testimonial={t} />
          ))}
          {/* Second set for infinite effect */}
          {testimonials.map((t, idx) => (
            <TestimonialCard key={`second-${idx}`} testimonial={t} />
          ))}
        </motion.div>

        {/* Gradient overlays for smooth fade */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>

      {/* Brand Logos Horizontal Sliding Marquee */}
      <div className="mt-20 border-t border-zinc-100 pt-16">
        <div className="flex flex-col items-center justify-center text-center mb-10 px-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#800080]/10 text-[#800080] text-xs font-bold uppercase tracking-wider mb-3">
            500+ Businesses Served
          </span>
          <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-zinc-900 tracking-tight">
            Trusted by Leading Brands Across Nagpur
          </h3>
          <p className="mt-2 text-sm text-zinc-500 max-w-md">
            From national finance enterprises and banks to local retail leaders, we engineer signage that commands attention.
          </p>
        </div>

        <div className="relative flex overflow-x-hidden group py-4">
          <motion.div
            className="flex gap-5 sm:gap-6 items-center"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ width: "max-content" }}
          >
            {/* Duplicated list for seamless infinite horizontal sliding */}
            {[...brandLogos, ...brandLogos].map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="relative aspect-square w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl border border-zinc-200/85 bg-white p-3.5 sm:p-4 shadow-xs hover:shadow-xl hover:border-[#800080]/30 hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center shrink-0 group/card cursor-pointer"
              >
                <div className="relative h-full w-full flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, 144px"
                    className="object-contain p-1 filter grayscale-[15%] contrast-105 opacity-85 group-hover/card:grayscale-0 group-hover/card:opacity-100 group-hover/card:scale-105 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Left & Right Gradient Overlays for Smooth Edge Fade */}
          <div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}
