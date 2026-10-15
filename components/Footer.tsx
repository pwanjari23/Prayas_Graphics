"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUpRight, MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/business-info";
import { trackPhoneClick, trackEmailClick } from "@/lib/analytics";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6">
      <div className="rounded-[24px] border border-zinc-200/90 bg-white p-6 shadow-sm md:p-8 lg:p-9">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand & Quick Contact Pills */}
          <div className="flex flex-col gap-3.5 lg:col-span-4">
            <Link
              href="/"
              aria-label="Prayas Graphics Home"
              className="flex items-center gap-2.5"
            >
              <Image
                src="/Prayas-Graphics-Logo.svg"
                alt="Prayas Graphics Logo"
                width={48}
                height={48}
                className="h-10 w-10 sm:h-12 sm:w-12 transition-all object-contain shrink-0"
              />
              <Image
                src="/Prayas-Graphics-title.svg"
                alt="Prayas Graphics Title"
                width={180}
                height={40}
                className="h-7 w-auto sm:h-8 transition-all object-contain shrink-0"
              />
            </Link>

            <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed max-w-sm">
              Nagpur&apos;s specialist for custom 3D LED letters, Acrylic ACP boards &amp; architectural cladding.
            </p>

            {/* Quick Contact Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <a
                href={`tel:${BUSINESS_INFO.contact.phoneRaw}`}
                onClick={() => trackPhoneClick("footer")}
                className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 hover:bg-[#800080]/10 hover:text-[#800080] px-3 py-1.5 text-xs font-semibold text-zinc-700 transition-colors"
                aria-label="Call Prayas Graphics"
              >
                <Phone className="h-3.5 w-3.5 text-[#800080]" />
                Call
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.contact.email}`}
                onClick={() => trackEmailClick("footer")}
                className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 hover:bg-[#800080]/10 hover:text-[#800080] px-3 py-1.5 text-xs font-semibold text-zinc-700 transition-colors"
                aria-label="Email Prayas Graphics"
              >
                <Mail className="h-3.5 w-3.5 text-[#800080]" />
                Email
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.contact.whatsappNumber}?text=Hi%20Prayas%20Graphics,%20I%20need%20a%20signage%20quote`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 text-xs font-semibold text-emerald-700 transition-colors"
              >
                <MessageCircle className="h-3.5 w-3.5 text-emerald-600" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Popular Services & Signage Guides - Side by Side on Mobile */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:col-span-5">
            {/* Quick Services */}
            <div className="flex flex-col gap-2.5">
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                Popular Services
              </p>
              <ul className="space-y-1.5">
                <li>
                  <Link
                    href="/services/acrylic-acp-signboard"
                    className="text-xs sm:text-sm font-medium text-zinc-600 hover:text-[#800080] transition-colors"
                  >
                    Acrylic ACP
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/ss-letter-backlit-golden"
                    className="text-xs sm:text-sm font-medium text-zinc-600 hover:text-[#800080] transition-colors"
                  >
                    SS 3D Letters
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/flex-backlit-signboard"
                    className="text-xs sm:text-sm font-medium text-zinc-600 hover:text-[#800080] transition-colors"
                  >
                    Flex Backlit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/acp-elevation-work"
                    className="text-xs sm:text-sm font-medium text-zinc-600 hover:text-[#800080] transition-colors"
                  >
                    ACP Elevation
                  </Link>
                </li>
                <li className="pt-0.5">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#800080] hover:underline"
                  >
                    All Services <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Nagpur Guides */}
            <div className="flex flex-col gap-2.5">
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                Signage Guides
              </p>
              <ul className="space-y-1.5">
                <li>
                  <Link
                    href="/acp-vs-acrylic-vs-flex-signboard-nagpur"
                    className="text-xs sm:text-sm font-medium text-zinc-600 hover:text-[#800080] transition-colors"
                  >
                    ACP vs Acrylic
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nmc-signboard-rules-nagpur-2025"
                    className="text-xs sm:text-sm font-medium text-zinc-600 hover:text-[#800080] transition-colors"
                  >
                    NMC Rules 2025
                  </Link>
                </li>
                <li>
                  <Link
                    href="/restaurant-cafe-signboard-ideas-nagpur"
                    className="text-xs sm:text-sm font-medium text-zinc-600 hover:text-[#800080] transition-colors"
                  >
                    Cafe Signboards
                  </Link>
                </li>
                <li className="pt-0.5">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#800080] hover:underline"
                  >
                    All Articles <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Workshop Card */}
          <div className="flex flex-col justify-between rounded-2xl bg-zinc-50 border border-zinc-100 p-4 lg:col-span-3">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Workshop Open
                </span>
                <span className="text-[11px] text-zinc-400 font-medium">10am - 8pm</span>
              </div>
              <p className="text-xs font-medium text-zinc-600 leading-snug">
                Shop 3, Madhuvatsalya Appt, Tukdoji Sq., Manewada Rd, Nagpur 440027
              </p>
            </div>

            <div className="flex items-center gap-2 pt-3 mt-2 border-t border-zinc-200/60">
              <a
                href={BUSINESS_INFO.socials.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#800080] hover:underline"
              >
                <MapPin className="h-3.5 w-3.5" /> Rate &amp; Review on Google
              </a>
            </div>
          </div>
        </div>

        {/* Minimal Bottom Strip */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between border-t border-zinc-100 pt-4 gap-3 text-xs text-zinc-400">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-zinc-500">
            <Link href="/privacy-policy" className="hover:text-zinc-900 transition-colors">Privacy Policy</Link>
            <span className="text-zinc-300">&bull;</span>
            <Link href="/disclaimer" className="hover:text-zinc-900 transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

