"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
import { servicesData } from "@/lib/services-data";

export default function PopularPosters() {
  // 4 Featured Flagship Services
  const featuredSlugs = [
    "acrylic-acp-signboard",
    "ss-letter-backlit-golden",
    "flex-backlit-signboard",
    "flex-roll-up-standee",
  ];
  const featuredServices = servicesData.filter((s) => featuredSlugs.includes(s.slug));

  // Specific curated material/feature tags for each featured service
  const serviceBadgesMap: Record<string, string[]> = {
    "acrylic-acp-signboard": ["3D Acrylic Letters", "Weatherproof IP65"],
    "ss-letter-backlit-golden": ["Grade 304 Steel", "Golden Halo Glow"],
    "flex-backlit-signboard": ["Star Backlit Flex", "Internal LED Modules"],
    "flex-roll-up-standee": ["High-Res Print", "Portable Carry Bag"],
  };

  const servicePillBadge: Record<string, string> = {
    "acrylic-acp-signboard": "Core Commercial",
    "ss-letter-backlit-golden": "Ultra-Luxury Branding",
    "flex-backlit-signboard": "High-Visibility 24/7",
    "flex-roll-up-standee": "Event & Exhibition",
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-6 md:py-24">
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-200/80 bg-purple-50 px-3.5 py-1 text-xs font-bold text-[#800080] mb-3.5">
          <Sparkles className="h-3.5 w-3.5" />
          <span>FLAGSHIP SIGNAGE SOLUTIONS</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 leading-tight">
          Featured Services
        </h2>
        <p className="mt-3.5 text-sm sm:text-base text-zinc-500 font-normal leading-relaxed">
          Discover our most requested manufacturing and signage services in Nagpur. Explore specifications, material details, and configure your instant pricing.
        </p>
      </div>

      {/* Normal 4 Vertical Cards Grid (2 cards per line on mobile, 4 on desktop) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
        {featuredServices.map((service, idx) => {
          const stepNumber = `0${idx + 1}`;
          const badges = serviceBadgesMap[service.slug] || service.materials.slice(0, 2);
          const priceUnit =
            service.slug === "flex-roll-up-standee"
              ? "/unit"
              : service.slug === "ss-letter-backlit-golden"
              ? "/inch"
              : "/sq ft";

          return (
            <div
              key={service.slug}
              className="flex flex-col justify-between rounded-2xl sm:rounded-[28px] border border-zinc-200/90 bg-white p-3 sm:p-5 lg:p-6 shadow-xs hover:shadow-md transition-all duration-300 group"
            >
              <div>
                {/* 1. FIRST: Name & Category Badge */}
                <div className="flex items-center justify-between gap-1 mb-1.5 sm:mb-2">
                  <span className="font-heading text-[10px] sm:text-xs font-black text-zinc-400 tracking-wider">
                    {stepNumber}
                  </span>
                  <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider text-[#800080] bg-[#800080]/10 px-1.5 sm:px-2 py-0.5 rounded-full truncate max-w-[85px] sm:max-w-none">
                    {servicePillBadge[service.slug] || service.tag}
                  </span>
                </div>

                <h3 className="font-heading text-xs sm:text-base lg:text-lg font-bold tracking-tight text-zinc-950 mt-1 line-clamp-1 sm:line-clamp-none">
                  {service.title}
                </h3>
                <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-zinc-500 line-clamp-2 leading-relaxed">
                  {service.description}
                </p>

                {/* 2. THEN: Image with NMC Verified badge */}
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-zinc-100 border border-zinc-100/90 shadow-inner my-2.5 sm:my-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={`${
                      service.imageFit === "contain" ? "object-contain p-2 sm:p-3" : "object-cover"
                    } transition-transform duration-500 group-hover:scale-105`}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 via-transparent to-transparent pointer-events-none" />

                  {/* Corner Badge */}
                  <div className="absolute top-1.5 right-1.5 sm:top-2.5 sm:right-2.5 pointer-events-none">
                    <span className="inline-flex items-center gap-1 text-[8px] sm:text-[10px] font-semibold text-emerald-800 bg-white/95 backdrop-blur-xs border border-emerald-200/70 px-1.5 sm:px-2 py-0.5 rounded-full shadow-2xs">
                      <ShieldCheck className="h-2 w-2 sm:h-2.5 sm:w-2.5 text-emerald-600" />
                      NMC Verified
                    </span>
                  </div>
                </div>

                {/* Material Tags */}
                <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2.5 sm:mb-4">
                  {badges.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="inline-flex items-center gap-1 rounded-md bg-zinc-50 border border-zinc-200/70 px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[11px] font-medium text-zinc-600"
                    >
                      <CheckCircle2 className="h-2 w-2 sm:h-2.5 sm:w-2.5 text-emerald-600 shrink-0" />
                      <span className="truncate max-w-[70px] sm:max-w-none">{badge}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* 3. THEN: Pricing & That Button */}
              <div className="pt-2.5 sm:pt-4 border-t border-zinc-100 flex flex-col gap-2 sm:gap-3 mt-auto">
                <div>
                  <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-0.5">
                    Starting Offer Price
                  </span>
                  <div className="flex items-baseline gap-1 sm:gap-1.5 flex-wrap">
                    <span className="font-heading text-base sm:text-xl lg:text-2xl font-black text-zinc-950">
                      ₹{service.offerPrice?.toLocaleString() || service.demoRatePerSqFt}
                    </span>
                    <span className="text-[10px] sm:text-xs font-medium text-zinc-500">{priceUnit}</span>
                    {service.originalPrice && (
                      <span className="text-[9px] sm:text-[11px] text-zinc-400 line-through ml-1">
                        ₹{service.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="group/btn w-full inline-flex items-center justify-center gap-1 sm:gap-2 rounded-xl bg-zinc-950 px-2.5 py-2 sm:px-4 sm:py-3 text-[11px] sm:text-sm font-bold text-white shadow-xs hover:bg-[#800080] hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <span>Configure<span className="hidden sm:inline"> & Quote</span></span>
                  <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 shrink-0" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Footer Bar */}
      <div className="mt-10 sm:mt-12 pt-5 border-t border-zinc-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <span className="text-xs sm:text-sm text-zinc-500 font-medium">
          Need custom dimensions or bespoke architectural cladding?
        </span>
        <Link
          href="/services"
          className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-zinc-900 hover:text-[#800080] transition-colors"
        >
          <span>Explore All 12 Signage Services</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
