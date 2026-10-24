"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  MessageCircle,
  Clock,
  ShieldCheck,
  ChevronUp,
  Instagram,
  Facebook,
  Star,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/business-info";
import { trackPhoneClick, trackEmailClick, trackWhatsAppClick } from "@/lib/analytics";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      role="contentinfo"
      className="relative w-full bg-gradient-to-b from-[#faf8fc] via-white to-[#f5effb] text-zinc-700 overflow-hidden font-sans"
    >
      {/* ─── Luminous Accent Top Hairline ─────────────────────────────────── */}


      {/* ─── Volumetric Soft Ambient Glows & CAD Matrix ───────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[320px] bg-purple-500/[0.06] blur-[140px] rounded-full transform-gpu" />
        <div className="absolute bottom-10 left-10 w-[550px] h-[350px] bg-fuchsia-500/[0.05] blur-[150px] rounded-full transform-gpu" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[300px] bg-amber-500/[0.03] blur-[130px] rounded-full transform-gpu" />
        <div className="absolute inset-0 opacity-[0.20] [background-image:radial-gradient(#800080_0.75px,transparent_0.75px)] [background-size:26px_26px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-14">
        {/* ─── Primary 4-Column Navigation & Authority Grid ────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 sm:pb-16 border-b border-purple-100/90">
          {/* Column 1: Brand Pedigree & Trust Badges (lg:col-span-4) */}
          <div className="flex flex-col gap-4 lg:col-span-4">
            <Link
              href="/"
              aria-label="Prayas Graphics Home"
              className="group inline-flex items-center gap-3 transition-opacity duration-150 hover:opacity-90 w-fit"
            >
              <div className="relative flex items-center justify-center p-2 rounded-2xl bg-white border border-purple-200/90 shadow-sm shrink-0 group-hover:border-[#800080] transition-colors">
                <Image
                  src="/Prayas-Graphics-Logo-Cropped.svg"
                  alt="Prayas Graphics Logo"
                  width={44}
                  height={38}
                  className="w-9 h-8 sm:w-10 sm:h-9 object-contain"
                />
              </div>

              <div className="flex flex-col justify-center select-none">
                <span className="font-heading font-black tracking-tight text-zinc-950 text-base sm:text-lg uppercase leading-tight">
                  Prayas Graphics
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#800080] uppercase leading-tight mt-0.5">
                  Design that get noticed
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-sm">
              Nagpur&apos;s premier manufacturer of custom 3D LED letters, architectural ACP elevation cladding, and commercial display signages engineered for maximum durability and visual prestige.
            </p>

            {/* Key Engineering Trust Stats */}
            <div className="grid grid-cols-3 gap-2 pt-1">
              <div className="flex flex-col rounded-xl bg-white/90 border border-purple-100/90 p-2.5 text-center shadow-2xs">
                <span className="font-heading text-sm sm:text-base font-extrabold text-zinc-950">10+ Yrs</span>
                <span className="text-[10px] text-zinc-500 font-medium">Craftsmanship</span>
              </div>
              <div className="flex flex-col rounded-xl bg-white/90 border border-purple-100/90 p-2.5 text-center shadow-2xs">
                <span className="font-heading text-sm sm:text-base font-extrabold text-zinc-950">1,000+</span>
                <span className="text-[10px] text-zinc-500 font-medium">Installations</span>
              </div>
              <div className="flex flex-col rounded-xl bg-white/90 border border-purple-100/90 p-2.5 text-center shadow-2xs">
                <span className="font-heading text-sm sm:text-base font-extrabold text-amber-500 flex items-center justify-center gap-1">
                  4.9 <Star className="h-3 w-3 fill-amber-400 text-amber-400 inline" />
                </span>
                <span className="text-[10px] text-zinc-500 font-medium">Google Rating</span>
              </div>
            </div>

            {/* Social & Contact Direct Links */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href={BUSINESS_INFO.socials.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Review Prayas Graphics on Google"
                className="flex items-center gap-1.5 rounded-xl bg-white border border-purple-200/90 hover:border-[#800080] hover:bg-purple-50/70 px-3 py-2 text-xs font-semibold text-zinc-700 hover:text-[#800080] transition-all shadow-2xs cursor-pointer"
              >
                <MapPin className="h-3.5 w-3.5 text-rose-500" />
                <span>Google Review</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.contact.whatsappNumber}?text=${encodeURIComponent("Hi Prayas Graphics, I need a quick quote for custom signage in Nagpur.")}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("footer")}
                aria-label="WhatsApp Prayas Graphics"
                className="flex items-center justify-center h-8 w-8 rounded-xl bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 text-emerald-700 transition-all shadow-2xs cursor-pointer"
              >
                <MessageCircle className="h-4 w-4" />
              </a>

              <a
                href={BUSINESS_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Prayas Graphics on Instagram"
                className="flex items-center justify-center h-8 w-8 rounded-xl bg-white border border-purple-200/90 hover:border-pink-300 hover:bg-pink-50 text-zinc-600 hover:text-pink-600 transition-all shadow-2xs cursor-pointer"
              >
                <Instagram className="h-4 w-4" />
              </a>

              <a
                href={BUSINESS_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Prayas Graphics on Facebook"
                className="flex items-center justify-center h-8 w-8 rounded-xl bg-white border border-purple-200/90 hover:border-blue-300 hover:bg-blue-50 text-zinc-600 hover:text-blue-600 transition-all shadow-2xs cursor-pointer"
              >
                <Facebook className="h-4 w-4" />
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.contact.email}`}
                onClick={() => trackEmailClick("footer")}
                aria-label="Email Prayas Graphics"
                className="flex items-center justify-center h-8 w-8 rounded-xl bg-white border border-purple-200/90 hover:border-[#800080] hover:bg-purple-50 text-zinc-600 hover:text-[#800080] transition-all shadow-2xs cursor-pointer"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Signage Solutions (lg:col-span-3) */}
          <nav aria-label="Signage Solutions" className="flex flex-col gap-3 lg:col-span-3">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#800080]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#800080]" />
              Signage Solutions
            </p>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/services/acrylic-acp-signboard"
                  className="text-xs sm:text-sm font-medium text-zinc-600 hover:text-[#800080] hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                >
                  Acrylic ACP 3D Signboards
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ss-letter-backlit-golden"
                  className="text-xs sm:text-sm font-medium text-zinc-600 hover:text-[#800080] hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                >
                  SS 3D Titanium &amp; Golden Letters
                </Link>
              </li>
              <li>
                <Link
                  href="/services/flex-backlit-signboard"
                  className="text-xs sm:text-sm font-medium text-zinc-600 hover:text-[#800080] hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                >
                  Flex Backlit &amp; Vinyl Glow Signs
                </Link>
              </li>
              <li>
                <Link
                  href="/services/acp-elevation-work"
                  className="text-xs sm:text-sm font-medium text-zinc-600 hover:text-[#800080] hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                >
                  ACP Elevation &amp; Facade Cladding
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-xs sm:text-sm font-medium text-zinc-600 hover:text-[#800080] hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                >
                  Custom Neon &amp; LED Lighting Art
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#800080] hover:underline transition-colors"
                >
                  Explore All 12+ Fabrication Services <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </nav>

          {/* Column 3: Technical Guides & Specs (lg:col-span-2) */}
          <nav aria-label="Signage Guides & Knowledge" className="flex flex-col gap-3 lg:col-span-2">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#800080]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#800080]" />
              Knowledge &amp; Specs
            </p>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/nmc-signboard-rules-nagpur-2025"
                  className="text-xs sm:text-sm font-medium text-zinc-600 hover:text-[#800080] hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                >
                  NMC Signboard Rules
                </Link>
              </li>
              <li>
                <Link
                  href="/acp-vs-acrylic-vs-flex-signboard-nagpur"
                  className="text-xs sm:text-sm font-medium text-zinc-600 hover:text-[#800080] hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                >
                  ACP vs Acrylic vs Flex
                </Link>
              </li>
              <li>
                <Link
                  href="/restaurant-cafe-signboard-ideas-nagpur"
                  className="text-xs sm:text-sm font-medium text-zinc-600 hover:text-[#800080] hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                >
                  Cafe &amp; Restaurant Signs
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-xs sm:text-sm font-medium text-zinc-600 hover:text-[#800080] hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                >
                  Client Project Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-xs sm:text-sm font-medium text-zinc-600 hover:text-[#800080] hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                >
                  About Our Founders
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#800080] hover:underline transition-colors"
                >
                  Signage Articles &amp; Insights <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </nav>

          {/* Column 4: Nagpur Workshop & Direct Dispatch (lg:col-span-3) */}
          <div className="flex flex-col justify-between rounded-2xl bg-white/95 border border-purple-100/90 p-5 lg:col-span-3 shadow-[0_4px_20px_rgba(128,0,128,0.04)]">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Workshop Open
                </span>
                <span className="text-[11px] text-zinc-500 font-medium">
                  {BUSINESS_INFO.hours.openingTime} - {BUSINESS_INFO.hours.closingTime}
                </span>
              </div>

              <address className="not-italic text-xs font-normal text-zinc-600 leading-relaxed">
                <span className="font-semibold text-zinc-950 block mb-0.5">Fabrication Unit:</span>
                Shop 3, Madhuvatsalya Appt, Tukdoji Square, Manewada Road, opp. MSEB Office, Nagpur, MH 440027
              </address>

              <div className="flex items-center gap-2 text-[11px] text-zinc-500">
                <Clock className="h-3.5 w-3.5 text-[#800080] shrink-0" />
                <span>Mon – Sat: 10:00 AM – 8:00 PM</span>
              </div>
            </div>

            <div className="pt-4 mt-3 border-t border-purple-100/80 flex flex-col gap-2">
              <a
                href={BUSINESS_INFO.socials.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-purple-50 border border-purple-200/90 hover:border-[#800080] hover:bg-[#800080] hover:text-white px-3.5 py-2 text-xs font-bold text-[#800080] transition-all cursor-pointer shadow-2xs"
              >
                <MapPin className="h-3.5 w-3.5" />
                <span>Get Directions on Google Maps</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.contact.phoneRaw}`}
                onClick={() => trackPhoneClick("footer_workshop")}
                className="inline-flex items-center justify-center gap-1.5 text-[11px] font-semibold text-zinc-600 hover:text-[#800080] transition-colors pt-1"
              >
                <Phone className="h-3 w-3 text-[#800080]" />
                <span>Direct Hotline: {BUSINESS_INFO.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* ─── Regional Coverage Ribbon (SEO & Local Authority) ───────────── */}
        <div className="py-5 border-b border-purple-100/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] text-zinc-500">
          <div className="flex items-center gap-2 shrink-0 font-semibold text-zinc-800">
            <ShieldCheck className="h-3.5 w-3.5 text-[#800080]" />
            <span>Serving Nagpur &amp; Vidarbha Region:</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-zinc-600">
            {BUSINESS_INFO.areasServed.map((area, index) => (
              <span key={area} className="inline-flex items-center">
                <span className="hover:text-[#800080] transition-colors">{area}</span>
                {index < BUSINESS_INFO.areasServed.length - 1 && (
                  <span className="text-zinc-300 ml-2">&bull;</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* ─── Flagship Bottom Strip ─────────────────────────────────────── */}
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
            <p>
              &copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.
            </p>
            <span className="hidden sm:inline text-zinc-300">&bull;</span>
            <p className="text-zinc-500">
              Registered Signage &amp; Display Manufacturer in Nagpur
            </p>
          </div>

          <div className="flex items-center gap-4 text-zinc-600">
            <Link
              href="/privacy-policy"
              className="hover:text-[#800080] transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-zinc-300">&bull;</span>
            <Link
              href="/disclaimer"
              className="hover:text-[#800080] transition-colors"
            >
              Disclaimer
            </Link>
            <span className="text-zinc-300">&bull;</span>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="inline-flex items-center gap-1 rounded-full bg-white border border-purple-200/90 hover:border-[#800080] hover:bg-purple-50 hover:text-[#800080] px-2.5 py-1 text-[11px] font-semibold text-zinc-600 transition-all cursor-pointer shadow-2xs"
            >
              <span>Back to Top</span>
              <ChevronUp className="h-3 w-3 text-[#800080]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
