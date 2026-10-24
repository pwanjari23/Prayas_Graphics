"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowUpRight } from "lucide-react";

interface CarouselItem {
  title: string;
  tag: string;
  src: string;
  href: string;
}

const column1Items: CarouselItem[] = [
  {
    title: "Acrylic ACP Signboard",
    tag: "Flagship 3D",
    src: "/services/acrylic-acp-signboard-nagpur.webp",
    href: "/services/acrylic-acp-signboard",
  },
  {
    title: "Golden Titanium Letters",
    tag: "Luxury Steel",
    src: "/services/golden-acrylic-letters-nagpur.webp",
    href: "/services/ss-letter-backlit-golden",
  },
  {
    title: "Storefront LED Display",
    tag: "IP68 Certified",
    src: "/gallery/led-displays/storefront-led-display.webp",
    href: "/gallery",
  },
  {
    title: "Lollipop Signboard",
    tag: "Dual-Sided",
    src: "/services/lollipop-signboard-nagpur.webp",
    href: "/services/lollipop-signboard",
  },
  {
    title: "Backlit LED Letters",
    tag: "Halo Glow",
    src: "/services/ss-golden-backlit-letters-nagpur.webp",
    href: "/services/ss-letter-backlit-golden",
  },
];

const column2Items: CarouselItem[] = [
  {
    title: "ACP Elevation Work",
    tag: "Facade Cladding",
    src: "/services/acp-elevation-work-nagpur.webp",
    href: "/services/acp-elevation-work",
  },
  {
    title: "Inner Cut Signboard",
    tag: "Precision CNC",
    src: "/services/inner-cut-acp-signboard-nagpur.webp",
    href: "/services/inner-cut-acp-signboard",
  },
  {
    title: "Neon Flexible Lights",
    tag: "Custom Neon",
    src: "/gallery/led-displays/neon-flexible-lights.webp",
    href: "/gallery",
  },
  {
    title: "Flex Backlit Sign",
    tag: "24/7 Visibility",
    src: "/services/flex-backlit-signboard-nagpur.webp",
    href: "/services/flex-backlit-signboard",
  },
  {
    title: "Corporate Identity",
    tag: "Architectural",
    src: "/gallery/signage/3d-corporate-identity.webp",
    href: "/gallery",
  },
];

const VerticalCard = ({ item }: { item: CarouselItem }) => (
  <Link
    href={item.href}
    className="group relative w-full aspect-[9/13.5] rounded-xl overflow-hidden border border-zinc-200/90 bg-zinc-950 shadow-xs hover:border-purple-400 hover:shadow-md hover:shadow-purple-900/20 transition-all duration-300 shrink-0 block"
  >
    <Image
      src={item.src}
      alt={item.title}
      fill
      sizes="(max-width: 640px) 115px, (max-width: 1024px) 130px, 140px"
      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
    />

    {/* Dual directional gradient for maximum readability */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 transition-opacity duration-300 group-hover:from-black/90" />

    {/* Top Tag Pill */}
    <div className="absolute top-1.5 left-1.5 right-1.5 z-10 flex items-center justify-between pointer-events-none">
      <span className="inline-flex items-center gap-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 px-1.5 py-0.5 text-[8.5px] font-bold text-purple-200 shadow-xs">
        <Sparkles className="h-2 w-2 text-purple-300 shrink-0" />
        <span className="truncate max-w-[60px]">{item.tag}</span>
      </span>
      <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
        <ArrowUpRight className="h-2 w-2 text-white" />
      </span>
    </div>

    {/* Bottom Caption Title */}
    <div className="absolute bottom-1.5 left-1.5 right-1.5 z-10">
      <h3 className="font-heading text-[10px] sm:text-[11px] font-bold text-white tracking-tight leading-tight drop-shadow-sm group-hover:text-purple-200 transition-colors line-clamp-2">
        {item.title}
      </h3>
    </div>
  </Link>
);

export default function HeroVerticalCarousel({ className = "" }: { className?: string }) {
  return (
    <div
      className={`carousel-hover-pause relative w-full h-full max-h-full overflow-hidden select-none [mask-image:linear-gradient(to_bottom,transparent_0%,black_3%,black_97%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_3%,black_97%,transparent_100%)] ${className}`}
    >
      {/* 2 Side-by-Side Super Slim Vertical Columns */}
      <div className="grid grid-cols-2 gap-2 sm:gap-2.5 h-full w-full">
        {/* Column 1: Moves continuously upward */}
        <div className="overflow-hidden h-full flex flex-col">
          <div className="animate-vertical-up flex flex-col shrink-0">
            <div className="flex flex-col gap-2 sm:gap-2.5 pb-2 sm:pb-2.5 shrink-0">
              {column1Items.map((item, idx) => (
                <VerticalCard key={`col1-a-${idx}`} item={item} />
              ))}
            </div>
            <div className="flex flex-col gap-2 sm:gap-2.5 pb-2 sm:pb-2.5 shrink-0" aria-hidden="true">
              {column1Items.map((item, idx) => (
                <VerticalCard key={`col1-b-${idx}`} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Column 2: Moves continuously downward */}
        <div className="overflow-hidden h-full flex flex-col">
          <div className="animate-vertical-down flex flex-col shrink-0">
            <div className="flex flex-col gap-2 sm:gap-2.5 pb-2 sm:pb-2.5 shrink-0">
              {column2Items.map((item, idx) => (
                <VerticalCard key={`col2-a-${idx}`} item={item} />
              ))}
            </div>
            <div className="flex flex-col gap-2 sm:gap-2.5 pb-2 sm:pb-2.5 shrink-0" aria-hidden="true">
              {column2Items.map((item, idx) => (
                <VerticalCard key={`col2-b-${idx}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
