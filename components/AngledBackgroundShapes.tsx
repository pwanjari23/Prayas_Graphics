"use client";

import React from "react";

export default function AngledBackgroundShapes() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* ========================================================
          LUMINOUS AURORA GRADIENT MESH GLOWS
          Evenly distributed with GPU acceleration & mobile optimization
          ======================================================== */}
      {/* 1. Top Section Glow */}
      <div className="absolute top-10 left-1/4 w-[360px] sm:w-[650px] lg:w-[850px] h-[340px] sm:h-[480px] lg:h-[580px] rounded-full bg-gradient-to-br from-purple-300/20 via-violet-200/15 to-transparent blur-2xl lg:blur-3xl transform-gpu pointer-events-none" />
      
      {/* 2. Upper-Mid Glow (Right side) */}
      <div className="absolute top-[850px] -right-24 w-[360px] sm:w-[600px] lg:w-[750px] h-[340px] sm:h-[450px] lg:h-[550px] rounded-full bg-gradient-to-bl from-purple-200/25 via-violet-100/15 to-transparent blur-2xl lg:blur-3xl transform-gpu pointer-events-none" />
      
      {/* 3. Mid / Subpage Above-Footer Glow (Left side) */}
      <div className="hidden sm:block absolute top-[1650px] -left-20 w-[800px] h-[580px] rounded-full bg-gradient-to-tr from-purple-200/25 via-violet-100/15 to-transparent blur-3xl transform-gpu pointer-events-none" />
      
      {/* 4. Lower-Mid Glow (Right side) */}
      <div className="hidden sm:block absolute top-[2500px] -right-20 w-[850px] h-[600px] rounded-full bg-gradient-to-tl from-purple-200/25 via-violet-100/15 to-transparent blur-3xl transform-gpu pointer-events-none" />
      
      {/* 5. Lower Page Glow (Left side) */}
      <div className="hidden sm:block absolute top-[3350px] -left-20 w-[800px] h-[550px] rounded-full bg-gradient-to-br from-purple-200/25 via-violet-100/15 to-transparent blur-3xl transform-gpu pointer-events-none" />
      
      {/* 6. Deep Homepage Above-Footer Glow (Center-Right) */}
      <div className="hidden sm:block absolute top-[4100px] right-1/4 w-[850px] h-[580px] rounded-full bg-gradient-to-tl from-purple-200/25 via-violet-100/15 to-transparent blur-3xl transform-gpu pointer-events-none" />

      {/* ========================================================
          MULTI-TIER MISMATCHED NEON WAVE RIBBONS
          Alternating crests, dips, and angles throughout all sections
          ======================================================== */}
      <svg
        className="absolute inset-0 w-full h-full opacity-70"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Luminous Neon Contour Gradient 1 (Purple - Violet) */}
          <linearGradient id="neonGlow1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c084fc" stopOpacity="0.1" />
            <stop offset="30%" stopColor="#a855f7" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#800080" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0.1" />
          </linearGradient>

          {/* Luminous Neon Contour Gradient 2 (Fuchsia - Deep Purple Accent) */}
          <linearGradient id="neonGlow2" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#d946ef" stopOpacity="0.1" />
            <stop offset="35%" stopColor="#800080" stopOpacity="0.8" />
            <stop offset="65%" stopColor="#9333ea" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
          </linearGradient>

          {/* Fluid Translucent Light Wave Fill */}
          <linearGradient id="waveFill1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FAF5FF" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#F3E8FF" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#EDE9FE" stopOpacity="0.25" />
          </linearGradient>

          {/* Secondary Soft Translucent Fill */}
          <linearGradient id="waveFill2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FDF4FF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FAF5FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#F3E8FF" stopOpacity="0.2" />
          </linearGradient>

          {/* Lightweight Neon Glow Diffusion Filter */}
          <filter id="neonBlur" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* -----------------------------------------------------------------
            TIER 1 (y: ~560px): High Wave arching cleanly above Marquee/Header
            ----------------------------------------------------------------- */}
        <path
          d="M-50,560 C320,660 680,520 1050,580 C1250,620 1400,590 1500,570 L1500,850 C1350,920 1100,810 850,910 C550,1010 200,880 -50,960 Z"
          fill="url(#waveFill1)"
        />
        <path
          d="M-50,560 C320,660 680,520 1050,580 C1250,620 1400,590 1500,570"
          stroke="url(#neonGlow1)"
          strokeWidth="2.5"
          fill="none"
          filter="url(#neonBlur)"
        />

        {/* -----------------------------------------------------------------
            TIER 2 (y: ~1180px): Mismatched Inverted Wave rising across Grid
            ----------------------------------------------------------------- */}
        <path
          d="M-50,1280 C360,1190 740,1290 1120,1150 C1290,1090 1420,1140 1500,1120 L1500,1460 C1350,1540 1060,1380 760,1520 C450,1640 160,1480 -50,1560 Z"
          fill="url(#waveFill2)"
        />
        <path
          d="M-50,1280 C360,1190 740,1290 1120,1150 C1290,1090 1420,1140 1500,1120"
          stroke="url(#neonGlow2)"
          strokeWidth="2.5"
          fill="none"
          filter="url(#neonBlur)"
        />

        {/* -----------------------------------------------------------------
            TIER 3 (y: ~1820px): Sweeping Wave right above Footer on Subpages
            ----------------------------------------------------------------- */}
        <path
          d="M-50,1830 C290,1750 670,1890 1040,1770 C1260,1710 1390,1790 1500,1760 L1500,2100 C1350,2180 1100,2040 820,2160 C520,2280 180,2120 -50,2200 Z"
          fill="url(#waveFill1)"
        />
        <path
          d="M-50,1830 C290,1750 670,1890 1040,1770 C1260,1710 1390,1790 1500,1760"
          stroke="url(#neonGlow1)"
          strokeWidth="2.5"
          fill="none"
          filter="url(#neonBlur)"
        />

        {/* -----------------------------------------------------------------
            TIER 4 (y: ~2540px): Mismatched Wave through Story & Capabilities
            ----------------------------------------------------------------- */}
        <path
          d="M-50,2530 C380,2660 800,2490 1160,2630 C1340,2710 1440,2580 1500,2550 L1500,2860 C1350,2940 1080,2780 780,2920 C480,3040 160,2880 -50,2960 Z"
          fill="url(#waveFill2)"
        />
        <path
          d="M-50,2530 C380,2660 800,2490 1160,2630 C1340,2710 1440,2580 1500,2550"
          stroke="url(#neonGlow2)"
          strokeWidth="2.5"
          fill="none"
          filter="url(#neonBlur)"
        />

        {/* -----------------------------------------------------------------
            TIER 5 (y: ~3340px): Dynamic Wave through How It Works & Blogs
            ----------------------------------------------------------------- */}
        <path
          d="M-50,3420 C340,3310 700,3450 1080,3330 C1290,3250 1420,3350 1500,3310 L1500,3660 C1350,3740 1100,3590 800,3720 C500,3840 180,3680 -50,3780 Z"
          fill="url(#waveFill1)"
        />
        <path
          d="M-50,3420 C340,3310 700,3450 1080,3330 C1290,3250 1420,3350 1500,3310"
          stroke="url(#neonGlow1)"
          strokeWidth="2.5"
          fill="none"
          filter="url(#neonBlur)"
        />

        {/* -----------------------------------------------------------------
            TIER 6 (y: ~4160px): Grand Finale Wave above Homepage Footer
            ----------------------------------------------------------------- */}
        <path
          d="M-50,4220 C360,4110 760,4270 1140,4150 C1320,4090 1430,4170 1500,4140 L1500,4500 C1350,4580 1050,4410 750,4550 C450,4660 150,4520 -50,4600 Z"
          fill="url(#waveFill2)"
        />
        <path
          d="M-50,4220 C360,4110 760,4270 1140,4150 C1320,4090 1430,4170 1500,4140"
          stroke="url(#neonGlow2)"
          strokeWidth="2.5"
          fill="none"
          filter="url(#neonBlur)"
        />
      </svg>
    </div>
  );
}
