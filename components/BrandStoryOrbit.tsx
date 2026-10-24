"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { CLIENT_BRANDS, ClientBrand } from "@/lib/client-projects";
import ClientBrandModal from "./ClientBrandModal";

interface OrbitBrandItem {
  id: string;
  name: string;
  src: string;
  angle: number; // in degrees
  globalIndex: number;
}

// Ring 1 (Outer - DARK Ring - Diameter: 420px -> Radius R1: 210px)
// 5 prominent mini circle logos placed directly ON the ring
const ring1Logos: OrbitBrandItem[] = [
  { id: "mankind-pharma", src: "/clients/logo (11).jpeg", name: "Mankind Pharma", angle: 0, globalIndex: 0 },
  { id: "quickclean", src: "/clients/logo (6).jpeg", name: "Quickclean", angle: 72, globalIndex: 1 },
  { id: "samsung", src: "/clients/logo (9).jpeg", name: "Samsung", angle: 144, globalIndex: 2 },
  { id: "terex", src: "/clients/logo (10).jpeg", name: "Terex", angle: 216, globalIndex: 3 },
  { id: "chola-finance", src: "/clients/logo (1).jpeg", name: "Chola Finance", angle: 288, globalIndex: 4 },
];

// Ring 2 (Middle-Outer - LIGHT Ring - Diameter: 310px -> Radius R2: 155px)
// 4 prominent mini circle logos placed directly ON the ring
const ring2Logos: OrbitBrandItem[] = [
  { id: "smfg-india-credit", src: "/clients/logo (2).jpeg", name: "SMFG India Credit", angle: 0, globalIndex: 5 },
  { id: "adani-gas", src: "/clients/adani-gas-logo.webp", name: "Adani Gas", angle: 90, globalIndex: 6 },
  { id: "pnb", src: "/clients/logo (5).jpeg", name: "PNB", angle: 180, globalIndex: 7 },
  { id: "nobroker", src: "/clients/logo (4).jpeg", name: "NoBroker", angle: 270, globalIndex: 8 },
];

// Ring 3 (Middle-Inner - DARK Ring - Diameter: 210px -> Radius R3: 105px)
// 3 prominent mini circle logos placed directly ON the ring
const ring3Logos: OrbitBrandItem[] = [
  { id: "fortune", src: "/clients/logo (3).jpeg", name: "Fortune", angle: 30, globalIndex: 9 },
  { id: "cube-highways", src: "/clients/logo (7).jpeg", name: "Cube Highways", angle: 150, globalIndex: 10 },
  { id: "eazydiner", src: "/clients/logo (8).jpeg", name: "EazyDiner", angle: 270, globalIndex: 11 },
];

// Harmonic sequence cycling across rings & quadrants smoothly
const SEQUENCE_ORDER = [0, 6, 10, 2, 8, 9, 4, 7, 11, 1, 5, 3];

export default function BrandStoryOrbit() {
  const shouldReduceMotion = useReducedMotion();
  const [sequenceIndex, setSequenceIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Client project modal integration
  const [selectedBrand, setSelectedBrand] = useState<ClientBrand | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const activeTriggerRef = useRef<HTMLElement | null>(null);

  // Responsive mobile scale detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Continuous, seamless active logo sequence timer (~1.5s per logo)
  useEffect(() => {
    if (shouldReduceMotion || isHovered) return;

    const timer = setInterval(() => {
      setSequenceIndex((prev) => (prev + 1) % SEQUENCE_ORDER.length);
    }, 1500);

    return () => clearInterval(timer);
  }, [shouldReduceMotion, isHovered]);

  const activeGlobalIndex = shouldReduceMotion ? -1 : SEQUENCE_ORDER[sequenceIndex];

  // Tuned Framer Motion spring variants
  const activeLogoVariants: Variants = {
    inactive: {
      scale: 1,
      opacity: 0.88,
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
      borderColor: "rgba(216, 180, 254, 0.65)",
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 22,
      },
    },
    active: {
      scale: isMobile ? 1.35 : 1.55,
      opacity: 1,
      backgroundColor: "#ffffff",
      boxShadow: "0 10px 28px rgba(128, 0, 128, 0.35), 0 0 22px rgba(192, 132, 252, 0.45), 0 2px 6px rgba(0,0,0,0.06)",
      borderColor: "#800080",
      transition: {
        type: "spring",
        stiffness: 240,
        damping: 18,
        mass: 0.7,
      },
    },
  };

  const handleLogoClick = (brandId: string, e: React.MouseEvent<HTMLElement>) => {
    activeTriggerRef.current = e.currentTarget;
    const brand = CLIENT_BRANDS[brandId] || {
      id: brandId,
      name: brandId,
      logo: "",
      subtitle: "Valued Client",
      projects: [],
    };
    setSelectedBrand(brand);
    setIsModalOpen(true);
  };

  // Radii in pixels matching ring borders exactly:
  const R1 = 210;
  const R2 = 155;
  const R3 = 105;

  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center justify-center w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[480px] md:h-[480px] select-none pointer-events-auto mx-auto overflow-visible transform-gpu"
      >
        {/* Soft Ambient Neon Glow Behind Rings */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-purple-300/30 via-violet-200/25 to-pink-200/20 blur-3xl pointer-events-none transform-gpu" />

        {/* Scaled Orbit Container: preserves perfect mathematical alignment across all screens */}
        <div className="relative flex items-center justify-center w-[480px] h-[480px] scale-[0.68] sm:scale-[0.85] md:scale-100 origin-center transform-gpu">
          {/* ========================================================
              RING 1: DARK RING (Outer - Diameter: 420px, Clockwise 55s)
              Border cuts through the exact center of all 5 mini circles
              ======================================================== */}
          <div
            style={{ "--spin-duration": "55s" } as React.CSSProperties}
            className="absolute w-[420px] h-[420px] rounded-full border-2 border-purple-800/80 shadow-[0_0_24px_rgba(128,0,128,0.35)] flex items-center justify-center gpu-spin-cw"
          >
            {/* Subtle neon pulse nodes on ring line */}
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#800080] shadow-[0_0_8px_#c084fc]" />
            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#800080] shadow-[0_0_8px_#c084fc]" />

            {/* Mini Circles placed directly ON the Ring 1 line */}
            {ring1Logos.map((logo) => {
              const isActive = !shouldReduceMotion && activeGlobalIndex === logo.globalIndex;
              return (
                <div
                  key={logo.id}
                  className="absolute top-1/2 left-1/2 w-0 h-0"
                  style={{
                    transform: `rotate(${logo.angle}deg)`,
                    zIndex: isActive ? 45 : 10,
                  }}
                >
                  {/* Shift by exact radius R1 and center on the line */}
                  <div
                    style={{
                      transform: `translateY(-${R1}px) translate(-50%, -50%)`,
                    }}
                    className="absolute top-0 left-0"
                  >
                    {/* Upright counter-rotation */}
                    <div
                      style={{ "--spin-duration": "55s" } as React.CSSProperties}
                      className="gpu-spin-ccw"
                    >
                      {/* Framer Motion Scale & Spring Animation Container */}
                      <motion.div
                        variants={activeLogoVariants}
                        initial="inactive"
                        animate={isActive ? "active" : "inactive"}
                        whileHover={
                          shouldReduceMotion
                            ? undefined
                            : {
                                scale: isMobile ? 1.4 : 1.65,
                                opacity: 1,
                                zIndex: 60,
                                boxShadow: "0 12px 32px rgba(128, 0, 128, 0.45), 0 0 24px rgba(192, 132, 252, 0.55)",
                              }
                        }
                        onClick={(e) => handleLogoClick(logo.id, e)}
                        className="w-15 h-15 rounded-full bg-white p-2.5 border-2 flex items-center justify-center cursor-pointer group relative select-none transform-gpu"
                        title={`${logo.name} (Click to view projects)`}
                      >
                        {/* Delicate Active Violet Glow Aura */}
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1.2 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 -m-1 rounded-full border border-purple-400/80 bg-purple-500/15 blur-xs pointer-events-none -z-10"
                          />
                        )}

                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image
                            src={logo.src}
                            alt={logo.name}
                            fill
                            sizes="60px"
                            className="object-contain rounded-full transition-transform group-hover:scale-105"
                          />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ========================================================
              RING 2: LIGHT RING (Middle-Outer - Diameter: 310px, Counter-Clockwise 42s)
              Border cuts through the exact center of all 4 mini circles
              ======================================================== */}
          <div
            style={{ "--spin-duration": "42s" } as React.CSSProperties}
            className="absolute w-[310px] h-[310px] rounded-full border border-zinc-300 shadow-[0_0_14px_rgba(216,180,254,0.35)] flex items-center justify-center gpu-spin-ccw"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_6px_#c084fc]" />

            {/* Mini Circles placed directly ON the Ring 2 line */}
            {ring2Logos.map((logo) => {
              const isActive = !shouldReduceMotion && activeGlobalIndex === logo.globalIndex;
              return (
                <div
                  key={logo.id}
                  className="absolute top-1/2 left-1/2 w-0 h-0"
                  style={{
                    transform: `rotate(${logo.angle}deg)`,
                    zIndex: isActive ? 45 : 10,
                  }}
                >
                  {/* Shift by exact radius R2 and center on the line */}
                  <div
                    style={{
                      transform: `translateY(-${R2}px) translate(-50%, -50%)`,
                    }}
                    className="absolute top-0 left-0"
                  >
                    {/* Upright counter-rotation */}
                    <div
                      style={{ "--spin-duration": "42s" } as React.CSSProperties}
                      className="gpu-spin-cw"
                    >
                      {/* Framer Motion Scale & Spring Animation Container */}
                      <motion.div
                        variants={activeLogoVariants}
                        initial="inactive"
                        animate={isActive ? "active" : "inactive"}
                        whileHover={
                          shouldReduceMotion
                            ? undefined
                            : {
                                scale: isMobile ? 1.4 : 1.65,
                                opacity: 1,
                                zIndex: 60,
                                boxShadow: "0 12px 32px rgba(128, 0, 128, 0.45), 0 0 24px rgba(192, 132, 252, 0.55)",
                              }
                        }
                        onClick={(e) => handleLogoClick(logo.id, e)}
                        className="w-14 h-14 rounded-full bg-white p-2 border-2 flex items-center justify-center cursor-pointer group relative select-none transform-gpu"
                        title={`${logo.name} (Click to view projects)`}
                      >
                        {/* Delicate Active Violet Glow Aura */}
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1.2 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 -m-1 rounded-full border border-purple-400/80 bg-purple-500/15 blur-xs pointer-events-none -z-10"
                          />
                        )}

                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image
                            src={logo.src}
                            alt={logo.name}
                            fill
                            sizes="56px"
                            className="object-contain rounded-full transition-transform group-hover:scale-105"
                          />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ========================================================
              RING 3: DARK RING (Middle-Inner - Diameter: 210px, Clockwise 30s)
              Border cuts through the exact center of all 3 mini circles
              ======================================================== */}
          <div
            style={{ "--spin-duration": "30s" } as React.CSSProperties}
            className="absolute w-[210px] h-[210px] rounded-full border-2 border-purple-800/80 shadow-[0_0_18px_rgba(168,85,247,0.35)] flex items-center justify-center gpu-spin-cw"
          >
            {/* Mini Circles placed directly ON the Ring 3 line */}
            {ring3Logos.map((logo) => {
              const isActive = !shouldReduceMotion && activeGlobalIndex === logo.globalIndex;
              return (
                <div
                  key={logo.id}
                  className="absolute top-1/2 left-1/2 w-0 h-0"
                  style={{
                    transform: `rotate(${logo.angle}deg)`,
                    zIndex: isActive ? 45 : 10,
                  }}
                >
                  {/* Shift by exact radius R3 and center on the line */}
                  <div
                    style={{
                      transform: `translateY(-${R3}px) translate(-50%, -50%)`,
                    }}
                    className="absolute top-0 left-0"
                  >
                    {/* Upright counter-rotation */}
                    <div
                      style={{ "--spin-duration": "30s" } as React.CSSProperties}
                      className="gpu-spin-ccw"
                    >
                      {/* Framer Motion Scale & Spring Animation Container */}
                      <motion.div
                        variants={activeLogoVariants}
                        initial="inactive"
                        animate={isActive ? "active" : "inactive"}
                        whileHover={
                          shouldReduceMotion
                            ? undefined
                            : {
                                scale: isMobile ? 1.4 : 1.65,
                                opacity: 1,
                                zIndex: 60,
                                boxShadow: "0 12px 32px rgba(128, 0, 128, 0.45), 0 0 24px rgba(192, 132, 252, 0.55)",
                              }
                        }
                        onClick={(e) => handleLogoClick(logo.id, e)}
                        className="w-12.5 h-12.5 rounded-full bg-white p-2 border-2 flex items-center justify-center cursor-pointer group relative select-none transform-gpu"
                        title={`${logo.name} (Click to view projects)`}
                      >
                        {/* Delicate Active Violet Glow Aura */}
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1.2 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 -m-1 rounded-full border border-purple-400/80 bg-purple-500/15 blur-xs pointer-events-none -z-10"
                          />
                        )}

                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image
                            src={logo.src}
                            alt={logo.name}
                            fill
                            sizes="50px"
                            className="object-contain rounded-full transition-transform group-hover:scale-105"
                          />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ========================================================
              RING 4: LIGHT RING (Inner - Diameter: 120px, Counter-Clockwise 22s)
              Clean delicate lavender boundary ring directly surrounding center logo
              ======================================================== */}
          <div
            style={{ "--spin-duration": "22s" } as React.CSSProperties}
            className="absolute w-[120px] h-[120px] rounded-full border border-purple-300/70 shadow-[0_0_12px_rgba(216,180,254,0.35)] gpu-spin-ccw"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_6px_#c084fc]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_6px_#c084fc]" />
          </div>

          {/* ========================================================
              CENTER CORE: ORIGINAL PRAYAS GRAPHICS LOGO
              Prominent official monogram emblem with pulsing neon halo
              ======================================================== */}
          <div className="relative z-20 flex items-center justify-center">
            {/* Soft pulsing halo */}
            <div className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-purple-400/35 via-violet-400/25 to-pink-400/30 blur-lg pointer-events-none animate-pulse transform-gpu" />

            {/* Central Orb with Official Prayas Graphics Logo */}
            <div className="relative w-18 h-18 rounded-full bg-white border-2 border-[#800080]/30 shadow-2xl shadow-purple-950/20 flex items-center justify-center p-3 hover:scale-105 transition-transform cursor-pointer">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src="/Prayas-Graphics-Logo-Cropped.svg"
                  alt="Prayas Graphics Official Logo"
                  fill
                  sizes="72px"
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Modal showing real installations when any brand logo is clicked */}
      <ClientBrandModal
        brand={selectedBrand}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        triggerElementRef={activeTriggerRef.current}
      />
    </>
  );
}

