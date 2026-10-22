"use client";

import React from "react";
import Image from "next/image";

interface OrbitLogo {
  src: string;
  name: string;
  angle: number; // in degrees
}

export default function BrandStoryOrbit() {
  // Ring 1 (Outer - DARK Ring - Diameter: 420px -> Radius R1: 210px)
  // 5 prominent mini circle logos placed directly ON the ring
  const ring1Logos: OrbitLogo[] = [
    { src: "/clients/logo (11).jpeg", name: "Mankind Pharma", angle: 0 },
    { src: "/clients/logo (6).jpeg", name: "Quickclean", angle: 72 },
    { src: "/clients/logo (9).jpeg", name: "Samsung", angle: 144 },
    { src: "/clients/logo (10).jpeg", name: "Terex", angle: 216 },
    { src: "/clients/logo (1).jpeg", name: "Chola Finance", angle: 288 },
  ];

  // Ring 2 (Middle-Outer - LIGHT Ring - Diameter: 310px -> Radius R2: 155px)
  // 3 prominent mini circle logos placed directly ON the ring
  const ring2Logos: OrbitLogo[] = [
    { src: "/clients/logo (2).jpeg", name: "SMFG India Credit", angle: 60 },
    { src: "/clients/logo (5).jpeg", name: "PNB", angle: 180 },
    { src: "/clients/logo (4).jpeg", name: "NoBroker", angle: 300 },
  ];

  // Ring 3 (Middle-Inner - DARK Ring - Diameter: 210px -> Radius R3: 105px)
  // 3 prominent mini circle logos placed directly ON the ring
  const ring3Logos: OrbitLogo[] = [
    { src: "/clients/logo (3).jpeg", name: "Fortune", angle: 30 },
    { src: "/clients/logo (7).jpeg", name: "Cube Highways", angle: 150 },
    { src: "/clients/logo (8).jpeg", name: "EazyDiner", angle: 270 },
  ];

  // Radii in pixels matching ring borders exactly:
  const R1 = 210;
  const R2 = 155;
  const R3 = 105;

  return (
    <div className="relative flex items-center justify-center w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[480px] md:h-[480px] select-none pointer-events-auto mx-auto overflow-visible transform-gpu">
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
          {ring1Logos.map((logo, idx) => (
            <div
              key={`ring1-${idx}`}
              className="absolute top-1/2 left-1/2 w-0 h-0"
              style={{
                transform: `rotate(${logo.angle}deg)`,
              }}
            >
              {/* Shift by exact radius R1 and center on the line */}
              <div
                style={{
                  transform: `translateY(-${R1}px) translate(-50%, -50%)`,
                }}
                className="absolute top-0 left-0"
              >
                <div
                  style={{ "--spin-duration": "55s" } as React.CSSProperties}
                  className="w-15 h-15 rounded-full bg-white p-2.5 shadow-xl shadow-zinc-950/20 border-2 border-purple-300 hover:border-[#800080] hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/35 transition-all flex items-center justify-center cursor-pointer group gpu-spin-ccw"
                  title={logo.name}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      sizes="60px"
                      className="object-contain rounded-full transition-transform group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================
            RING 2: LIGHT RING (Middle-Outer - Diameter: 310px, Counter-Clockwise 42s)
            Border cuts through the exact center of all 3 mini circles
            ======================================================== */}
        <div
          style={{ "--spin-duration": "42s" } as React.CSSProperties}
          className="absolute w-[310px] h-[310px] rounded-full border border-zinc-300 shadow-[0_0_14px_rgba(216,180,254,0.35)] flex items-center justify-center gpu-spin-ccw"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_6px_#c084fc]" />

          {/* Mini Circles placed directly ON the Ring 2 line */}
          {ring2Logos.map((logo, idx) => (
            <div
              key={`ring2-${idx}`}
              className="absolute top-1/2 left-1/2 w-0 h-0"
              style={{
                transform: `rotate(${logo.angle}deg)`,
              }}
            >
              {/* Shift by exact radius R2 and center on the line */}
              <div
                style={{
                  transform: `translateY(-${R2}px) translate(-50%, -50%)`,
                }}
                className="absolute top-0 left-0"
              >
                <div
                  style={{ "--spin-duration": "42s" } as React.CSSProperties}
                  className="w-14 h-14 rounded-full bg-white p-2 shadow-lg shadow-zinc-950/15 border-2 border-purple-200/90 hover:border-[#800080] hover:scale-110 hover:shadow-xl hover:shadow-purple-500/30 transition-all flex items-center justify-center cursor-pointer group gpu-spin-cw"
                  title={logo.name}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      sizes="56px"
                      className="object-contain rounded-full transition-transform group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
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
          {ring3Logos.map((logo, idx) => (
            <div
              key={`ring3-${idx}`}
              className="absolute top-1/2 left-1/2 w-0 h-0"
              style={{
                transform: `rotate(${logo.angle}deg)`,
              }}
            >
              {/* Shift by exact radius R3 and center on the line */}
              <div
                style={{
                  transform: `translateY(-${R3}px) translate(-50%, -50%)`,
                }}
                className="absolute top-0 left-0"
              >
                <div
                  style={{ "--spin-duration": "30s" } as React.CSSProperties}
                  className="w-12.5 h-12.5 rounded-full bg-white p-2 shadow-md shadow-zinc-950/15 border-2 border-purple-200 hover:border-[#800080] hover:scale-110 hover:shadow-lg transition-all flex items-center justify-center cursor-pointer group gpu-spin-ccw"
                  title={logo.name}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      sizes="50px"
                      className="object-contain rounded-full transition-transform group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
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
  );
}
