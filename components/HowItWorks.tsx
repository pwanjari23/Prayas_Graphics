"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  ClipboardPenLine,
  MessageSquareQuote,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Clock,
  Wrench,
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Browse Services",
      description:
        "Explore our wide spectrum of commercial signboards, illuminated 3D letters, ACP claddings, and custom architectural signage.",
      tags: ["15+ Signage Types", "High-Res Previews"],
    },
    {
      number: "02",
      icon: ClipboardPenLine,
      title: "Submit Enquiry",
      description:
        "Share your dimensions, preferred materials, and lighting preferences through our quick 2-minute quote estimator.",
      tags: ["2-Min Quick Form", "Custom Sizing & Specs"],
    },
    {
      number: "03",
      icon: MessageSquareQuote,
      title: "Get Your Quote",
      description:
        "Our engineering team analyzes your requirements and delivers a transparent pricing estimate and digital proof on WhatsApp within 14 hours.",
      tags: ["< 14h SLA Turnaround", "Transparent WhatsApp Pricing"],
    },
    {
      number: "04",
      icon: ShieldCheck,
      title: "We Build & Install",
      description:
        "Relax as our in-house technicians precision-craft your signage and perform secure, weather-resistant on-site mounting anywhere in Nagpur.",
      tags: ["NMC-Compliant", "On-Site Professional Setup"],
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0c0617] via-[#090412] to-[#0c0617] pt-14 sm:pt-18 md:pt-20 pb-16 sm:pb-20 md:pb-24">
      {/* Background Volumetric Glows */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[450px] bg-purple-600/[0.08] blur-[140px] transform-gpu" />
        <div className="absolute bottom-1/4 -right-20 w-[550px] h-[450px] bg-fuchsia-600/[0.06] blur-[140px] transform-gpu" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-14">
          {/* LEFT COLUMN: All 4 Steps in a Compact Vertical Timeline */}
          <div className="w-full lg:w-[58%] order-2 lg:order-1">
            <div className="relative">
              {/* Vertical Spine Line */}
              <div
                className="absolute top-5 bottom-5 w-[2px] bg-zinc-800 left-5 sm:left-6 -z-0"
                aria-hidden="true"
              />

              <div className="flex flex-col gap-4 sm:gap-5">
                {steps.map((step, idx) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="relative flex items-start w-full"
                  >
                    {/* Glowing Number Node on Vertical Spine */}
                    <div className="absolute left-5 sm:left-6 -translate-x-1/2 z-10 top-4 sm:top-4.5">
                      <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-zinc-900 border-2 border-purple-500/50 shadow-md flex items-center justify-center transition-all duration-300 hover:border-purple-400 hover:scale-105">
                        <span className="font-heading text-xs sm:text-sm font-extrabold text-purple-300 tracking-tight">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Step Card Docked to the Right of the Node */}
                    <div className="w-full pl-12 sm:pl-16">
                      <div className="w-full rounded-2xl border border-zinc-800/90 bg-zinc-900/85 backdrop-blur-xs p-4.5 sm:p-5 shadow-lg transition-all duration-300 hover:border-purple-500/40 hover:bg-zinc-900 group">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="h-8.5 w-8.5 sm:h-9 sm:w-9 rounded-lg bg-zinc-800 border border-zinc-700/80 flex items-center justify-center shrink-0 text-purple-300 transition-colors group-hover:bg-[#800080] group-hover:text-white">
                            <step.icon className="h-4.5 w-4.5" strokeWidth={1.8} />
                          </div>
                          <h3 className="font-heading text-base sm:text-lg font-bold text-white tracking-tight">
                            {step.title}
                          </h3>
                        </div>

                        <p className="text-xs sm:text-sm leading-relaxed text-zinc-400 font-normal mb-3">
                          {step.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5">
                          {step.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="inline-flex items-center gap-1.5 rounded-md bg-zinc-800/90 border border-zinc-700/60 px-2 py-0.5 text-[10.5px] sm:text-[11px] font-semibold text-zinc-300"
                            >
                              <CheckCircle2 className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-emerald-400" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Sticky Heading, Subtitle & Value Proposition Card */}
          <div className="w-full lg:w-[42%] order-1 lg:order-2 lg:sticky lg:top-28">
            <div className="flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/60 px-3.5 py-1 text-xs font-semibold text-purple-300 shadow-2xs mb-3">
                <Sparkles className="h-3 w-3 text-purple-400" />
                <span>Simple 4-Step Process</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                How It Works
              </h2>

              <p className="mt-3 text-sm sm:text-base text-zinc-400 font-medium leading-relaxed">
                From concept to installation, we make getting professional commercial signage effortless. Follow our streamlined process designed for zero friction and complete peace of mind.
              </p>

              {/* Quick Summary / CTA Card */}
              <div className="mt-6 w-full rounded-2xl border border-zinc-800/90 bg-zinc-900/90 backdrop-blur-md p-5 sm:p-6 shadow-xl">
                <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-purple-300 mb-3">
                  The Prayas Graphics Promise
                </h4>

                <div className="flex flex-col gap-2.5 mb-5 text-xs sm:text-sm text-zinc-300">
                  <div className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                    <span>Guaranteed WhatsApp quote within 14 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                    <span>Strict NMC compliant fabrication and safety</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wrench className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                    <span>Turnkey professional installation across Nagpur</span>
                  </div>
                </div>

                <Link
                  href="/quote"
                  className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-xs sm:text-sm font-bold text-zinc-950 shadow-md transition-all duration-200 hover:bg-zinc-100 hover:shadow-lg cursor-pointer"
                >
                  <span>Calculate Your Quote Now</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

            {/* Custom Signboards Banner (Placed below Calculate Quote) */}
            <div className="mt-4 w-full relative flex flex-col items-start overflow-hidden rounded-2xl bg-zinc-950 p-5 sm:p-6 shadow-md border border-zinc-800/80">
              {/* Subtle dark ambient gradient */}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-950/30 via-transparent to-transparent"
                aria-hidden="true"
              />

              <div className="relative z-10 flex flex-col items-start text-left w-full">
                <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/25 bg-purple-950/40 px-3 py-1 text-[11px] font-bold text-purple-300 mb-3 backdrop-blur-md">
                  <Sparkles className="h-3 w-3 text-purple-400" />
                  <span>Turn Your Storefront Into A Landmark</span>
                </div>

                <h3 className="font-heading text-lg sm:text-xl font-black tracking-tight text-white leading-snug">
                  Elevate Your Brand&apos;s Presence with Custom Signboards.
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                  Custom engineered 3D letters, ACP elevations, and backlit signs designed for maximum visibility across Nagpur.
                </p>

                <div className="mt-4 w-full">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#800080] px-5 py-3 text-xs sm:text-sm font-bold tracking-wider text-white uppercase shadow-md transition-all duration-200 hover:bg-[#6b006b] hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
                  >
                    <span>Get a Custom Quote</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
