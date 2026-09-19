"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/business-info";
import { trackPhoneClick, trackEmailClick } from "@/lib/analytics";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6">
      <div className="flex flex-col gap-10 rounded-[32px] bg-white px-8 py-12 shadow-sm md:px-16 md:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Brand */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <Link
              href="/"
              aria-label="Prayas Graphics Home"
              className="flex items-center gap-2 sm:gap-3"
            >
              <Image
                src="/Prayas-Graphics-Logo.svg"
                alt="Prayas Graphics Logo"
                width={80}
                height={80}
                className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 transition-all object-contain shrink-0"
              />
              <Image
                src="/Prayas-Graphics-title.svg"
                alt="Prayas Graphics Title"
                width={250}
                height={80}
                className="h-8 w-auto sm:h-10 lg:h-12 transition-all object-contain shrink-0"
              />
            </Link>
            <p className="text-sm font-medium text-zinc-500 max-w-sm leading-relaxed">
              Nagpur&apos;s premier signboard manufacturer specializing in Acrylic ACP boards, 3D LED letters, ACP elevation cladding, and commercial display solutions.
            </p>

            <div className="flex flex-col gap-2.5 pt-2">
              <a
                href={`tel:${BUSINESS_INFO.contact.phoneRaw}`}
                onClick={() => trackPhoneClick("footer")}
                className="flex items-center gap-2 text-sm font-semibold text-zinc-700 hover:text-[#800080] transition-colors"
                aria-label="Call Prayas Graphics"
              >
                <Phone className="h-4 w-4 text-[#800080]" />
                {BUSINESS_INFO.contact.phone}
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.contact.email}`}
                onClick={() => trackEmailClick("footer")}
                className="flex items-center gap-2 text-sm font-semibold text-zinc-700 hover:text-[#800080] transition-colors"
                aria-label="Email Prayas Graphics"
              >
                <Mail className="h-4 w-4 text-[#800080]" />
                {BUSINESS_INFO.contact.email}
              </a>
            </div>
          </div>

          {/* Nav columns */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
              Top Services
            </p>
            <Link
              href="/services/acrylic-acp-signboard"
              className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
            >
              Acrylic ACP Signboard
            </Link>
            <Link
              href="/services/ss-letter-backlit-golden"
              className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
            >
              SS Backlit Letters
            </Link>
            <Link
              href="/services/flex-backlit-signboard"
              className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
            >
              Flex Backlit Boards
            </Link>
            <Link
              href="/services/acp-elevation-work"
              className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
            >
              ACP Elevation Cladding
            </Link>
            <Link
              href="/services"
              className="text-sm font-bold text-[#800080] transition-colors hover:underline pt-1"
            >
              View All 12 Services &rarr;
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
              Nagpur Guides
            </p>
            <Link
              href="/acp-vs-acrylic-vs-flex-signboard-nagpur"
              className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
            >
              ACP vs Acrylic vs Flex
            </Link>
            <Link
              href="/nmc-signboard-rules-nagpur-2025"
              className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
            >
              NMC Signboard Rules 2025
            </Link>
            <Link
              href="/best-signboard-makers-wardha-road-nagpur"
              className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
            >
              Wardha Road Signages
            </Link>
            <Link
              href="/restaurant-cafe-signboard-ideas-nagpur"
              className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
            >
              Restaurant Signboards
            </Link>
            <Link
              href="/blog"
              className="text-sm font-bold text-[#800080] transition-colors hover:underline pt-1"
            >
              All Signage Articles &rarr;
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
              Visit Our Shop
            </p>
            <p className="text-xs font-medium text-zinc-500 leading-relaxed">
              {BUSINESS_INFO.address.fullAddress}
            </p>
            <div className="overflow-hidden rounded-xl bg-zinc-100 h-28 w-full">
              <iframe
                src={BUSINESS_INFO.socials.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
                title="Prayas Graphics Map"
              ></iframe>
            </div>
            <a
              href={BUSINESS_INFO.socials.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#800080] hover:underline"
            >
              <MapPin className="h-3.5 w-3.5" /> Rate &amp; Review Us on Google
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-zinc-100 pt-6 gap-4">
          <p className="text-xs font-medium text-zinc-400">
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs font-medium text-zinc-500">
            <Link href="/about" className="hover:text-zinc-900">About</Link>
            <Link href="/contact" className="hover:text-zinc-900">Contact</Link>
            <Link href="/support" className="hover:text-zinc-900">Support &amp; FAQs</Link>
            <Link href="/gallery" className="hover:text-zinc-900">Gallery</Link>
            <Link href="/privacy-policy" className="hover:text-zinc-900">Privacy Policy</Link>
            <Link href="/disclaimer" className="hover:text-zinc-900">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
