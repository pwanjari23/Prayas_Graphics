"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Building2,
  Tag,
  ShieldCheck,
  Sun,
  Sparkles,
  ChevronDown,
  MessageCircle,
  Wrench,
  ThermometerSun,
  Clock,
  MapPin,
  Phone,
  Zap,
  Layers,
  Award,
} from "lucide-react";
import { servicesData, getServiceBySlug } from "@/lib/services-data";
import { BUSINESS_INFO } from "@/lib/business-info";
import { cn } from "@/lib/utils";
import { trackWhatsAppClick } from "@/lib/analytics";
import QuoteDrawer from "./QuoteDrawer";

export default function ServiceDetailView({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!service) return null;

  // Filter 3 related services to recommend at the bottom
  const relatedServices = servicesData
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `Hi Prayas Graphics, I would like to get a custom quote and site consultation for ${service.title} in Nagpur.`
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      {/* ─── 1. Architectural Breadcrumbs & Workshop Status Ribbon ─────── */}
      <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-purple-200/80 bg-white/90 backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold text-zinc-700 hover:text-[#800080] hover:border-purple-300 hover:bg-white transition-all shadow-2xs group"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1 text-[#800080]" />
            <span>Back to All Services</span>
          </Link>

          <span className="text-zinc-300 text-xs hidden sm:inline">/</span>
          <span className="text-xs font-medium text-zinc-500 hidden sm:inline truncate max-w-[200px]">
            {service.title}
          </span>
        </div>

        {/* Live Status Indicators */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 px-3 py-1 text-[11px] font-bold text-emerald-800 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Tukdoji Sq. Workshop Open</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 border border-purple-200/80 px-3 py-1 text-[11px] font-bold text-[#800080] shadow-2xs">
            <ShieldCheck className="h-3 w-3 text-[#800080]" />
            <span>NMC By-Law Compliant</span>
          </div>
        </div>
      </nav>

      {/* ─── 2. Flagship Hero Split Showcase ────────────────────────────── */}
      <section className="mb-12 sm:mb-16">
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-white border border-purple-100/90 shadow-[0_12px_44px_rgba(128,0,128,0.06)] p-6 sm:p-8 lg:p-12">
          {/* Subtle Ambient Background Gradient Inside Card */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-purple-200/40 via-fuchsia-100/20 to-transparent blur-3xl -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Semantic Headline, Positioning & Actions (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Category Tag Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50/70 px-3.5 py-1 text-xs font-bold text-[#800080] mb-4">
                <Sparkles className="h-3.5 w-3.5 text-[#800080]" />
                <span>{service.tag} · NAGPUR MANUFACTURING</span>
              </div>

              {/* Primary Single Semantic Heading */}
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight text-zinc-950 leading-[1.14] mb-4">
                {service.title}{" "}
                <span className="block bg-gradient-to-r from-[#800080] via-purple-700 to-[#990099] bg-clip-text text-transparent">
                  Crafted for Nagpur Storefronts
                </span>
              </h1>

              {/* Lead Paragraph */}
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal mb-6 max-w-xl">
                {service.description} Engineered specifically to endure Nagpur&apos;s peak 47°C summer heatwaves, heavy monsoon rains, and dusty seasonal winds without fading or letter distortion.
              </p>

              {/* Pricing Callout Badge */}
              <div className="mb-8 flex items-baseline gap-3 rounded-2xl bg-stone-50 border border-purple-100/90 px-4 py-2.5">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Turnkey Pricing:</span>
                <span className="text-xl sm:text-2xl font-black text-[#800080]">
                  {service.offerPrice ? `₹${service.offerPrice.toLocaleString("en-IN")}` : service.pricing}
                </span>
                {service.originalPrice && (
                  <span className="text-xs text-zinc-400 line-through font-medium">
                    ₹{service.originalPrice.toLocaleString("en-IN")}
                  </span>
                )}
                <span className="text-[11px] text-zinc-400 font-medium hidden sm:inline">(Excl. GST)</span>
              </div>

              {/* Primary Dual Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setIsDrawerOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#800080] px-7 py-4 text-xs sm:text-sm font-bold tracking-wider text-white uppercase shadow-md shadow-purple-900/20 transition-all duration-200 hover:bg-[#6b006b] hover:-translate-y-0.5 active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  <span>Instant Price Calculator</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.contact.whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick(`service_hero_${service.slug}`)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 px-6 py-4 text-xs sm:text-sm font-bold text-emerald-800 transition-all duration-200 active:scale-95 shadow-2xs"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-600" />
                  <span>WhatsApp Quote</span>
                </a>
              </div>

              {/* Micro Trust Bullet Points */}
              <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-zinc-500 font-medium">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> Free On-Site Measurement in Nagpur
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> 1-Year Full Electrical Warranty
                </span>
              </div>
            </div>

            {/* Right Column: High-Res Glassmorphic Media Showcase (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full overflow-hidden rounded-[24px] sm:rounded-[32px] bg-zinc-950 shadow-2xl border border-purple-200/60 group">
                <Image
                  src={service.image}
                  alt={`${service.title} in Nagpur — Prayas Graphics`}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 480px"
                  priority
                />

                {/* Subtle Image Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-black/20" />

                {/* Top Corner Badge: 100% Real Fabrication */}
                <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 px-3 py-1 text-[11px] font-bold text-white shadow-md">
                  <Award className="h-3.5 w-3.5 text-amber-400" />
                  <span>100% Workshop Fabricated</span>
                </div>

                {/* Bottom Corner Caption */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[11px] text-zinc-300 font-medium block">Manufacturing Hub</span>
                    <span className="text-xs font-bold text-white block">Tukdoji Square, Nagpur</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-purple-200 font-medium block">Lead Time</span>
                    <span className="text-xs font-bold text-white block">4–6 Working Days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. Engineering Metrics Ribbon Strip ───────────────────────── */}
      <section className="mb-12 sm:mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
          <div className="rounded-2xl bg-white border border-purple-100/90 p-4 sm:p-5 shadow-xs flex flex-col justify-between">
            <div className="h-8 w-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
              <Sun className="h-4 w-4" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-0.5">Weather Rating</span>
              <span className="text-sm sm:text-base font-extrabold text-zinc-900 block">47°C Heat Tested</span>
              <span className="text-[11px] text-zinc-500 font-medium">Zero warpage or delamination</span>
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-purple-100/90 p-4 sm:p-5 shadow-xs flex flex-col justify-between">
            <div className="h-8 w-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
              <Zap className="h-4 w-4" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-0.5">Lighting Modules</span>
              <span className="text-sm sm:text-base font-extrabold text-zinc-900 block">IP67 Waterproof</span>
              <span className="text-[11px] text-zinc-500 font-medium">Samsung/Osram 12V LEDs</span>
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-purple-100/90 p-4 sm:p-5 shadow-xs flex flex-col justify-between">
            <div className="h-8 w-8 rounded-xl bg-purple-50 text-[#800080] flex items-center justify-center mb-3">
              <Clock className="h-4 w-4" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-0.5">Turnaround Time</span>
              <span className="text-sm sm:text-base font-extrabold text-zinc-900 block">4–6 Working Days</span>
              <span className="text-[11px] text-zinc-500 font-medium">Express delivery across Vidarbha</span>
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-purple-100/90 p-4 sm:p-5 shadow-xs flex flex-col justify-between">
            <div className="h-8 w-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-0.5">Guarantee</span>
              <span className="text-sm sm:text-base font-extrabold text-zinc-900 block">1-Year Warranty</span>
              <span className="text-[11px] text-zinc-500 font-medium">Complete replacement backing</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. Main Two-Column Split: Specs & Sticky Sidebar ──────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Left Column: Deep Technical Copy, Specs Table & Durability (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          {/* Section A: Deep Technical Overview */}
          <article className="rounded-[28px] bg-white p-7 sm:p-10 shadow-xs border border-purple-100/90">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200/80 bg-purple-50/60 px-3 py-1 text-xs font-bold text-[#800080] mb-3">
              <Wrench className="h-3 w-3 text-[#800080]" />
              <span>TECHNICAL BLUEPRINT & FABRICATION</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight mb-4">
              How We Engineer Your {service.title} in Nagpur
            </h2>
            <div className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed whitespace-pre-line space-y-4">
              {service.longDescription}
            </div>
          </article>

          {/* Section B: Technical Specifications Grid Table */}
          {service.specifications && service.specifications.length > 0 && (
            <div className="rounded-[28px] bg-white p-7 sm:p-10 shadow-xs border border-purple-100/90">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-zinc-900 tracking-tight">
                    Technical Specifications
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 font-normal mt-0.5">
                    Standard laboratory & fabrication parameters for {service.title}
                  </p>
                </div>
                <div className="h-9 w-9 rounded-xl bg-purple-50 flex items-center justify-center text-[#800080]">
                  <Layers className="h-5 w-5" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 divide-y sm:divide-y-0 sm:gap-x-6">
                {service.specifications.map((spec, idx) => (
                  <div key={idx} className="pt-3 sm:pt-0 pb-3 border-b border-zinc-100">
                    <dt className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                      {spec.label}
                    </dt>
                    <dd className="mt-1 text-sm sm:text-[15px] font-bold text-zinc-900">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section C: Nagpur Extreme Climate Resilience Matrix (Obsidian Luxury Card) */}
          {service.durability && service.durability.length > 0 && (
            <div className="rounded-[28px] bg-gradient-to-br from-[#0c0617] via-zinc-900 to-[#1a0826] p-7 sm:p-10 shadow-2xl border border-purple-900/40 text-white relative overflow-hidden">
              {/* Subtle Ambient Purplish Glow */}
              <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl" />

              <div className="relative z-10 flex items-center justify-between gap-3 mb-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-bold text-amber-400">
                  <ThermometerSun className="h-3.5 w-3.5 text-amber-400" />
                  <span>NAGPUR 47°C CLIMATE RESILIENCE</span>
                </div>
              </div>

              <h3 className="relative z-10 font-heading text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
                Engineered for Vidarbha Weather Extremes
              </h3>
              <p className="relative z-10 text-zinc-400 text-xs sm:text-sm mb-6 font-normal max-w-xl">
                Commercial signage in Nagpur faces extreme radiant heat, heavy monsoons, and high wind squalls. Here is how our fabrication prevents failure:
              </p>

              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {service.durability.map((item, idx) => (
                  <div key={idx} className="rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur-md">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-purple-300 block mb-1">
                      {item.factor}
                    </span>
                    <span className="text-sm font-extrabold text-white block mb-1.5">
                      {item.grade}
                    </span>
                    <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section D: Interactive Frequently Asked Questions */}
          {service.faqs && service.faqs.length > 0 && (
            <div className="rounded-[28px] bg-white p-7 sm:p-10 shadow-xs border border-purple-100/90">
              <div className="mb-6">
                <h3 className="font-heading text-xl sm:text-2xl font-black text-zinc-900 tracking-tight">
                  Frequently Asked Questions
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 font-normal mt-0.5">
                  Clear answers to common questions about {service.title} in Nagpur
                </p>
              </div>

              <div className="space-y-3">
                {service.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className={cn(
                        "rounded-2xl border transition-all duration-200 overflow-hidden",
                        isOpen ? "border-purple-300 bg-purple-50/20" : "border-zinc-200/80 bg-white"
                      )}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="flex items-center justify-between w-full text-left p-4 sm:p-5 font-bold text-sm sm:text-base text-zinc-900 cursor-pointer"
                      >
                        <span className="pr-4">{faq.q}</span>
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 text-[#800080] shrink-0 transition-transform duration-200",
                            isOpen && "rotate-180"
                          )}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-purple-100/60 font-normal">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Sticky Commercial Sidebar (5 cols) */}
        <aside className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
          {/* Card 1: Transparent Pricing & Instant Actions */}
          <div className="rounded-[28px] bg-white p-7 sm:p-8 shadow-sm border border-purple-100/90">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-1">
              Commercial Fabrication Rate
            </span>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-3xl sm:text-4xl font-black text-[#800080]">
                {service.offerPrice ? `₹${service.offerPrice.toLocaleString("en-IN")}` : service.pricing.split(",")[0]}
              </span>
              {service.originalPrice && (
                <span className="text-sm text-zinc-400 line-through font-medium">
                  ₹{service.originalPrice.toLocaleString("en-IN")}
                </span>
              )}
            </div>

            <p className="text-xs text-zinc-500 font-normal leading-relaxed mb-6">
              Price depends on final frontage measurements, letter height, and mounting height. We provide itemized quotes with zero hidden fees.
            </p>

            <div className="space-y-3">
              <button
                type="button"
                onClick={() => setIsDrawerOpen(true)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#800080] py-4 text-xs sm:text-sm font-bold tracking-wider text-white uppercase shadow-md transition-all hover:bg-[#6b006b] active:scale-95 cursor-pointer"
              >
                <span>Open Price Calculator</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href={`https://wa.me/${BUSINESS_INFO.contact.whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick(`service_sidebar_${service.slug}`)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 py-3.5 text-xs sm:text-sm font-bold text-emerald-800 transition-colors shadow-2xs"
              >
                <MessageCircle className="h-4 w-4 text-emerald-600" />
                <span>WhatsApp Quote in 14 Hours</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.contact.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/80 py-3 text-xs font-bold text-zinc-700 transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-[#800080]" />
                <span>Direct Hotline: {BUSINESS_INFO.contact.phone}</span>
              </a>
            </div>
          </div>

          {/* Card 2: Materials & Ideal Commercial Applications */}
          <div className="rounded-[28px] bg-white p-7 shadow-xs border border-purple-100/90 space-y-5">
            <div>
              <h4 className="font-heading font-bold text-sm text-zinc-900 mb-2.5">
                Recommended Materials
              </h4>
              <ul className="space-y-2">
                {service.materials.map((mat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 font-medium leading-snug">
                    <div className="h-2 w-2 rounded-full bg-[#800080] shrink-0 mt-1.5" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-zinc-100">
              <h4 className="font-heading font-bold text-sm text-zinc-900 mb-2.5">
                Ideal Commercial Applications
              </h4>
              <ul className="space-y-2">
                {service.useCases.map((useCase, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 font-medium leading-snug">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 3: Tukdoji Square Workshop Trust Card */}
          <div className="rounded-[24px] bg-purple-50/70 border border-purple-200/90 p-5 flex items-start gap-3.5">
            <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-[#800080] shadow-2xs shrink-0 mt-0.5">
              <Building2 className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-zinc-950 block">
                Manufactured at Tukdoji Square, Nagpur
              </span>
              <p className="text-[11px] text-zinc-600 font-normal leading-relaxed mt-0.5">
                Visit our physical workshop opposite MSEB Office, Manewada Road. Complimentary on-site laser measurement provided across Nagpur.
              </p>
            </div>
          </div>
        </aside>
      </div>

      {/* ─── 5. Related Services Showcase ("Explore Other Signboards") ──── */}
      <section className="mb-14 sm:mb-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-3 py-1 text-xs font-bold text-[#800080] mb-2 shadow-2xs">
              <Sparkles className="h-3 w-3 text-[#800080]" />
              <span>EXPLORE MORE SERVICES</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight">
              Other Popular Signages in Nagpur
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#800080] hover:underline"
          >
            <span>View All 14 Services</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((rel) => {
            const RelIcon = rel.icon;
            return (
              <Link
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className="group flex flex-col justify-between rounded-[24px] bg-white p-6 shadow-xs border border-purple-100/90 hover:border-purple-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-10 w-10 rounded-2xl bg-purple-50 group-hover:bg-[#800080] text-[#800080] group-hover:text-white flex items-center justify-center transition-colors">
                      <RelIcon className="h-5 w-5" />
                    </div>
                    <span className="text-[11px] font-bold text-[#800080] bg-purple-50 px-2.5 py-1 rounded-full">
                      {rel.tag}
                    </span>
                  </div>
                  <h3 className="font-heading text-base font-bold text-zinc-900 group-hover:text-[#800080] transition-colors mb-2">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-zinc-500 font-medium line-clamp-2 leading-relaxed">
                    {rel.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#800080]">
                    {rel.offerPrice ? `₹${rel.offerPrice.toLocaleString("en-IN")}` : rel.pricing.split(",")[0]}
                  </span>
                  <span className="text-xs font-bold text-zinc-700 group-hover:text-[#800080] inline-flex items-center gap-1">
                    Details <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ─── 6. Mobile Fixed Bottom Conversion Bar ─────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-purple-100/90 px-4 py-3 flex items-center justify-between gap-3 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] lg:hidden">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Starting Rate</span>
          <span className="text-sm font-black text-[#800080]">
            {service.offerPrice ? `₹${service.offerPrice.toLocaleString("en-IN")}` : service.pricing.split(",")[0]}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`https://wa.me/${BUSINESS_INFO.contact.whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick(`service_mobile_bar_${service.slug}`)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md active:scale-95"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
          </a>

          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            className="inline-flex h-11 items-center justify-center gap-1.5 rounded-xl bg-[#800080] px-4 text-xs font-bold tracking-wider text-white uppercase shadow-md transition-all active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <span>Get Quote</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* ─── 7. Quote Drawer Modal ──────────────────────────────────────── */}
      <QuoteDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        serviceSlug={service.slug}
        serviceTitle={service.title}
      />
    </div>
  );
}
