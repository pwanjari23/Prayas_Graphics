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
    <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6 md:py-16">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-14">
        {/* LEFT COLUMN: All 4 Steps in a Compact Vertical Timeline */}
        <div className="w-full lg:w-[58%] order-2 lg:order-1">
          <div className="relative">
            {/* Vertical Spine Line */}
            <div
              className="absolute top-5 bottom-5 w-[2px] bg-zinc-200 left-5 sm:left-6 -z-0"
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
                  {/* Grey Outline Number Node on Vertical Spine */}
                  <div className="absolute left-5 sm:left-6 -translate-x-1/2 z-10 top-4 sm:top-4.5">
                    <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white border-2 border-zinc-300 shadow-2xs flex items-center justify-center transition-all duration-300 hover:border-zinc-400 hover:scale-105">
                      <span className="font-heading text-xs sm:text-sm font-extrabold text-zinc-800 tracking-tight">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Step Card Docked to the Right of the Node */}
                  <div className="w-full pl-12 sm:pl-16">
                    <div className="w-full rounded-2xl border border-zinc-200/90 bg-white p-4.5 sm:p-5 shadow-2xs transition-all duration-300 hover:border-zinc-300 hover:shadow-md group">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-8.5 w-8.5 sm:h-9 sm:w-9 rounded-lg bg-zinc-100 border border-zinc-200/60 flex items-center justify-center shrink-0 text-zinc-800 transition-colors group-hover:bg-zinc-900 group-hover:text-white">
                          <step.icon className="h-4.5 w-4.5" strokeWidth={1.8} />
                        </div>
                        <h3 className="font-heading text-base sm:text-lg font-bold text-zinc-900 tracking-tight">
                          {step.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm leading-relaxed text-zinc-500 font-normal mb-3">
                        {step.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {step.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="inline-flex items-center gap-1.5 rounded-md bg-zinc-50 border border-zinc-200/80 px-2 py-0.5 text-[10.5px] sm:text-[11px] font-semibold text-zinc-600"
                          >
                            <CheckCircle2 className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-zinc-400" />
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
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-700 shadow-2xs mb-3">
              <Sparkles className="h-3 w-3 text-zinc-500" />
              <span>Simple 4-Step Process</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 leading-tight">
              How It Works
            </h2>

            <p className="mt-3 text-sm sm:text-base text-zinc-500 font-medium leading-relaxed">
              From concept to installation, we make getting professional commercial signage effortless. Follow our streamlined process designed for zero friction and complete peace of mind.
            </p>

            {/* Quick Summary / CTA Card */}
            <div className="mt-6 w-full rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-5 sm:p-6">
              <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-zinc-700 mb-3">
                The Prayas Graphics Promise
              </h4>

              <div className="flex flex-col gap-2.5 mb-5 text-xs sm:text-sm text-zinc-600">
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-zinc-500 shrink-0" />
                  <span>Guaranteed WhatsApp quote within 14 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-3.5 w-3.5 text-zinc-500 shrink-0" />
                  <span>Strict NMC compliant fabrication and safety</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wrench className="h-3.5 w-3.5 text-zinc-500 shrink-0" />
                  <span>Turnkey professional installation across Nagpur</span>
                </div>
              </div>

              <Link
                href="/quote"
                className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-zinc-800 hover:shadow-md cursor-pointer"
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
    </section>
  );
}
