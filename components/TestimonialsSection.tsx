"use client";

import { Star, Quote, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Sahil Khobragade",
    role: "Local Guide",
    quote: "Excellent service from Prayas Graphics! The quality of printing and design work is outstanding. They are very professional, responsive, and deliver work on time. Highly recommended for reliable and high-quality printing services. 👍✨",
    gradient: "from-purple-50/80 to-amber-50/50",
  },
  {
    name: "Praharsh Lukhey",
    role: "Verified Client",
    quote: "I'm very satisfied with the banner printing service. The print quality, color accuracy, and finishing were excellent. They truly understand customer requirements perfectly.",
    gradient: "from-purple-50/80 to-indigo-50/50",
  },
  {
    name: "Tanushree Borkar",
    role: "Verified Client",
    quote: "Quick and efficient work and reasonable prices. I got my order within a day. The staff is friendly and professional.",
    gradient: "from-emerald-50/70 to-purple-50/50",
  },
  {
    name: "Satyawan Shivankar",
    role: "Local Guide",
    quote: "Quick and Quality Service with wonderful Nature. They Use Quality Material for all their signage and printing work.",
    gradient: "from-purple-50/80 to-pink-50/50",
  },
  {
    name: "Manish Chandwani",
    role: "Local Guide",
    quote: "Great prices and excellent service! They truly know how to build strong customer relationships and deliver exactly what's promised.",
    gradient: "from-rose-50/70 to-purple-50/50",
  },
  {
    name: "Pawankumar D",
    role: "Local Guide",
    quote: "Excellent service provided by Prayas Graphics! They designed banners and standees for us with great precision and delivered on time.",
    gradient: "from-cyan-50/70 to-purple-50/50",
  },
  {
    name: "Rajesh Wadhaikar",
    role: "Verified Client",
    quote: "On time done work and very good quality. Highly recommended for anyone looking for reliable graphic services in Nagpur.",
    gradient: "from-blue-50/70 to-purple-50/50",
  },
  {
    name: "Gaurav ranjan Thakur",
    role: "Local Guide",
    quote: "Excellent work, Good staff service. The attention to detail in their signage work is impressive.",
    gradient: "from-orange-50/70 to-purple-50/50",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div
    className={cn(
      "relative flex flex-col w-[350px] shrink-0 p-7 sm:p-8 rounded-3xl border border-purple-200/80 bg-white/95 shadow-md transition-all duration-300 hover:shadow-2xl hover:border-purple-300 hover:-translate-y-1.5 group overflow-hidden"
    )}
  >
    {/* Subtle soft lavender/magenta ambient hover sheen */}
    <div
      className={cn(
        "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
        testimonial.gradient || "from-purple-50/70 to-fuchsia-50/50"
      )}
    />

    <div className="relative z-10">
      <div className="flex items-center justify-between mb-5">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <Quote className="h-7 w-7 text-purple-200 group-hover:text-purple-300 transition-colors" />
      </div>

      <p className="text-[14px] sm:text-[14.5px] leading-relaxed text-zinc-700 font-normal mb-6">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="flex items-center gap-3 pt-3 border-t border-purple-100/90">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-100 to-fuchsia-50 border border-purple-200 flex items-center justify-center text-[#800080] font-bold text-xs uppercase tracking-wider shrink-0 shadow-2xs">
          {testimonial.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-bold text-zinc-950 truncate">{testimonial.name}</span>
            <CheckCircle2 className="h-3.5 w-3.5 text-[#800080] shrink-0" />
          </div>
          <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-tight block">
            {testimonial.role}
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default function TestimonialsSection() {
  return (
    <section className="relative w-full py-18 sm:py-22 md:py-26 overflow-hidden bg-gradient-to-b from-[#0c0617] via-[#090412] to-[#0c0617]">
      {/* Background Volumetric Glows */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-600/[0.10] blur-[150px] rounded-full transform-gpu" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-fuchsia-600/[0.08] blur-[140px] rounded-full transform-gpu" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:radial-gradient(#a855f7_0.75px,transparent_0.75px)] [background-size:28px_28px]" />
      </div>

      <div className="container mx-auto px-4 mb-12 sm:mb-14 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider shadow-2xs mb-5 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Our Success Stories
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-white mb-4"
          >
            Real Stories From{" "}
            <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-white bg-clip-text text-transparent">
              Happy Clients
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-zinc-400 font-normal max-w-xl mx-auto leading-relaxed"
          >
            Join hundreds of businesses that have transformed their visibility with Prayas Graphics.
          </motion.p>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="flex gap-6 animate-gpu-marquee py-4 sm:py-6">
          {/* First set */}
          {testimonials.map((t, idx) => (
            <TestimonialCard key={`first-${idx}`} testimonial={t} />
          ))}
          {/* Second set for infinite effect */}
          {testimonials.map((t, idx) => (
            <TestimonialCard key={`second-${idx}`} testimonial={t} />
          ))}
        </div>

        {/* Gradient overlays matching the section background for smooth fade */}
        <div className="absolute inset-y-0 left-0 w-28 sm:w-36 bg-gradient-to-r from-[#0c0617] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-28 sm:w-36 bg-gradient-to-l from-[#0c0617] to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
