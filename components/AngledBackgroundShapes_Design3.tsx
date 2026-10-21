"use client";

import React from "react";

export default function AngledBackgroundShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden select-none" aria-hidden="true">
      {/* Dynamic Aurora Gradient Mesh Glows */}
      <div className="absolute top-10 left-1/4 w-[900px] h-[650px] rounded-full bg-gradient-to-br from-purple-300/30 via-violet-200/25 to-pink-100/15 blur-3xl" />
      <div className="absolute top-[1200px] -right-20 w-[800px] h-[600px] rounded-full bg-gradient-to-bl from-purple-200/35 via-violet-100/20 to-transparent blur-3xl" />
      <div className="absolute top-[2400px] -left-20 w-[850px] h-[650px] rounded-full bg-gradient-to-tr from-purple-200/30 via-violet-100/25 to-transparent blur-3xl" />
      <div className="absolute top-[3700px] right-1/4 w-[900px] h-[600px] rounded-full bg-gradient-to-tl from-purple-200/35 via-violet-100/20 to-transparent blur-3xl" />

      {/* Luminous Neon Wave Ribbons across the page */}
      <svg className="absolute inset-0 w-full h-full opacity-70" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="neonGlow1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c084fc" stopOpacity="0.1" />
            <stop offset="30%" stopColor="#a855f7" stopOpacity="0.75" />
            <stop offset="70%" stopColor="#800080" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="waveFill1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FAF5FF" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#F3E8FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#EDE9FE" stopOpacity="0.3" />
          </linearGradient>
          <filter id="neonBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Hero to Marquee Fluid Wave Ribbon */}
        <path
          d="M-50,680 C320,850 680,620 1050,780 C1250,860 1400,750 1500,700 L1500,1050 C1350,1150 1100,1000 850,1120 C550,1260 200,1050 -50,1180 Z"
          fill="url(#waveFill1)"
        />
        {/* Razor Neon Edge */}
        <path
          d="M-50,680 C320,850 680,620 1050,780 C1250,860 1400,750 1500,700"
          stroke="url(#neonGlow1)"
          strokeWidth="3"
          fill="none"
          filter="url(#neonBlur)"
        />

        {/* Mid-Page Wave Ribbon */}
        <path
          d="M-50,2100 C350,1950 750,2250 1150,2050 C1320,1960 1450,2020 1500,2060 L1500,2400 C1350,2480 1050,2300 750,2460 C450,2600 150,2420 -50,2500 Z"
          fill="url(#waveFill1)"
        />
        <path
          d="M-50,2100 C350,1950 750,2250 1150,2050 C1320,1960 1450,2020 1500,2060"
          stroke="url(#neonGlow1)"
          strokeWidth="2.5"
          fill="none"
          filter="url(#neonBlur)"
        />

        {/* Lower Page Wave Ribbon */}
        <path
          d="M-50,3500 C400,3700 800,3450 1200,3650 C1380,3740 1460,3680 1500,3650 L1500,3950 C1350,4020 1100,3880 750,4020 C400,4160 150,3980 -50,4050 Z"
          fill="url(#waveFill1)"
        />
        <path
          d="M-50,3500 C400,3700 800,3450 1200,3650 C1380,3740 1460,3680 1500,3650"
          stroke="url(#neonGlow1)"
          strokeWidth="2.5"
          fill="none"
          filter="url(#neonBlur)"
        />
      </svg>
    </div>
  );
}
