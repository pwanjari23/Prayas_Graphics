"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ShoppingCart, Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalCount, openCart } = useCart();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        role="banner"
        className="fixed top-2.5 sm:top-3.5 left-0 right-0 z-50 pointer-events-none flex justify-center px-6 md:px-10"
      >
        <motion.div
          initial={{ y: -70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[1220px] flex items-center justify-between gap-2 sm:gap-4"
        >
          {/* Island 1: Left Brand Identity (Slightly more compact length) */}
          <div
            className={cn(
              "pointer-events-auto flex items-center h-14 sm:h-[58px] px-3 sm:px-4 rounded-full border",
              "backdrop-blur-xl transition-[background-color,border-color,box-shadow,transform] duration-200",
              scrolled
                ? "bg-white/98 border-zinc-300/90 shadow-[0_16px_36px_-6px_rgba(0,0,0,0.14),0_6px_18px_-2px_rgba(128,0,128,0.14),0_0_0_1px_rgba(0,0,0,0.05)]"
                : "bg-white/95 border-zinc-200/90 shadow-[0_10px_30px_-6px_rgba(0,0,0,0.1),0_4px_14px_-2px_rgba(128,0,128,0.08),0_0_0_1px_rgba(0,0,0,0.04)]"
            )}
          >
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Prayas Graphics Home"
              prefetch={true}
              className="group flex items-center gap-2 sm:gap-2.5 transition-opacity duration-150 hover:opacity-90"
            >
              {/* Logo Emblem */}
              <div className="relative flex items-center justify-center shrink-0">
                <Image
                  src="/Prayas-Graphics-Logo-Cropped.svg"
                  alt="Prayas Graphics"
                  width={52}
                  height={44}
                  className="w-9 h-8 sm:w-10 sm:h-9 md:w-11 md:h-9.5 transition-transform duration-200 group-hover:scale-105 object-contain"
                  priority
                />
              </div>

              {/* Brand Typography */}
              <div className="flex flex-col justify-center select-none">
                <span className="font-heading font-black tracking-tight text-zinc-950 text-[13px] sm:text-[15px] md:text-base uppercase leading-tight">
                  Prayas Graphics
                </span>
                <span className="text-[9px] sm:text-[9.5px] md:text-[10px] font-bold tracking-wider text-[#800080] uppercase leading-tight mt-0.5">
                  Design that get noticed
                </span>
              </div>
            </Link>
          </div>

          {/* Island 2: Middle Navigation Links (Untouched styles, perfectly centered) */}
          <nav
            aria-label="Main Navigation"
            className={cn(
              "pointer-events-auto hidden md:flex items-center gap-1 h-14 sm:h-[58px] px-3 sm:px-3.5 rounded-full border absolute left-1/2 -translate-x-1/2",
              "backdrop-blur-xl transition-[background-color,border-color,box-shadow,transform] duration-200",
              scrolled
                ? "bg-white/98 border-zinc-300/90 shadow-[0_16px_36px_-6px_rgba(0,0,0,0.14),0_6px_18px_-2px_rgba(128,0,128,0.14),0_0_0_1px_rgba(0,0,0,0.05)]"
                : "bg-white/95 border-zinc-200/90 shadow-[0_10px_30px_-6px_rgba(0,0,0,0.1),0_4px_14px_-2px_rgba(128,0,128,0.08),0_0_0_1px_rgba(0,0,0,0.04)]"
            )}
          >
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  prefetch={true}
                  className={cn(
                    "relative rounded-full px-3.5 py-1.5 text-xs sm:text-[13px] font-semibold transition-all duration-150",
                    active
                      ? "bg-zinc-950 text-white shadow-xs font-bold"
                      : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Island 3: Right Action Island in a round capsule (slightly more compact length) */}
          <div
            className={cn(
              "pointer-events-auto flex items-center gap-1.5 h-14 sm:h-[58px] px-2 sm:px-2.5 rounded-full border",
              "backdrop-blur-xl transition-[background-color,border-color,box-shadow,transform] duration-200",
              scrolled
                ? "bg-white/98 border-zinc-300/90 shadow-[0_16px_36px_-6px_rgba(0,0,0,0.14),0_6px_18px_-2px_rgba(128,0,128,0.14),0_0_0_1px_rgba(0,0,0,0.05)]"
                : "bg-white/95 border-zinc-200/90 shadow-[0_10px_30px_-6px_rgba(0,0,0,0.1),0_4px_14px_-2px_rgba(128,0,128,0.08),0_0_0_1px_rgba(0,0,0,0.04)]"
            )}
          >
            {/* Shopping Cart Button */}
            <button
              type="button"
              onClick={openCart}
              aria-label={`Open cart, ${totalCount} items selected`}
              className="group relative flex items-center gap-1.5 sm:gap-2 rounded-full border border-zinc-200/80 bg-zinc-50 hover:bg-zinc-100 px-2.5 py-1 sm:px-3 sm:py-1.5 text-zinc-700 transition-all duration-150 cursor-pointer shadow-2xs hover:shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#800080]"
            >
              <ShoppingCart className="h-4 w-4 text-[#800080] transition-transform duration-150 group-hover:scale-110" />
              <span className="hidden sm:inline text-xs font-bold text-zinc-800">Cart</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={totalCount}
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.6, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className={cn(
                    "flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 text-[11px] font-bold tabular-nums transition-colors",
                    totalCount > 0
                      ? "bg-[#800080] text-white shadow-xs"
                      : "bg-zinc-200 text-zinc-500"
                  )}
                >
                  {totalCount}
                </motion.span>
              </AnimatePresence>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200/80 bg-white text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950 md:hidden cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Floating Mobile Dropdown Menu (Compact, not full page, with NO Call Button) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Click-away backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-zinc-950/20 backdrop-blur-2xs md:hidden"
            />

            {/* Compact Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.96 }}
              transition={{ duration: 0.16, ease: "easeOut" }}
              className="fixed top-20 right-3 sm:right-6 z-50 w-[230px] rounded-3xl border border-zinc-200/90 bg-white/98 p-2.5 shadow-[0_20px_45px_-8px_rgba(0,0,0,0.18),0_8px_20px_-3px_rgba(128,0,128,0.15)] backdrop-blur-md md:hidden"
            >
              <div className="flex flex-col gap-0.5">
                {NAV_LINKS.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      prefetch={true}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold transition-colors",
                        active
                          ? "bg-zinc-950 text-white font-bold"
                          : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950"
                      )}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className={cn("h-3.5 w-3.5", active ? "text-zinc-400" : "text-zinc-300")} />
                    </Link>
                  );
                })}

                {/* Direct Cart Button inside dropdown (No Call button) */}
                <div className="mt-1.5 border-t border-zinc-100 pt-1.5">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      openCart();
                    }}
                    className="flex w-full items-center justify-between rounded-xl bg-purple-50 hover:bg-purple-100 px-3 py-2 text-xs font-bold text-[#800080] transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5">
                      <ShoppingCart className="h-3.5 w-3.5" />
                      View Cart
                    </span>
                    <span className="flex h-4.5 min-w-[18px] items-center justify-center rounded-full bg-[#800080] text-[10px] font-bold text-white px-1">
                      {totalCount}
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}



