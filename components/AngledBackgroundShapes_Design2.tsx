"use client";

import React from "react";

export default function AngledBackgroundShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden select-none" aria-hidden="true">
      {/* Light stone subtle base texture */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(circle at 1.5px 1.5px, rgba(128, 0, 128, 0.08) 1.5px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Atmospheric Soft Violet Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] rounded-full bg-gradient-to-b from-purple-200/35 via-violet-100/20 to-transparent blur-3xl" />

      {/* ========================================================
          ZIGZAG RIBBON 1: HERO & MARQUEE FLOW (Top)
          ======================================================== */}
      <div className="absolute top-[620px] left-0 right-0 h-[620px]">
        <svg className="w-full h-full opacity-90" viewBox="0 0 1440 620" fill="none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="d2_zigzag1" x1="0%" y1="0%" x2="100%" y2="80%">
              <stop offset="0%" stopColor="#F5EEF8" stopOpacity="0.95" />
              <stop offset="25%" stopColor="#EDE9FE" stopOpacity="0.8" />
              <stop offset="55%" stopColor="#F3E8FF" stopOpacity="0.88" />
              <stop offset="85%" stopColor="#FAF5FF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#F1F5F9" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="d2_zigzag1_accent" x1="100%" y1="10%" x2="0%" y2="90%">
              <stop offset="0%" stopColor="#DDD6FE" stopOpacity="0.55" />
              <stop offset="40%" stopColor="#EDE9FE" stopOpacity="0.65" />
              <stop offset="80%" stopColor="#F5EEF8" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#FAF5FF" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* Primary Angled Facet Ribbon */}
          <path
            d="M-50,90 L360,210 L780,80 L1200,200 L1500,70 L1500,420 L1200,530 L780,410 L360,520 L-50,400 Z"
            fill="url(#d2_zigzag1)"
          />

          {/* Secondary Overlapping Facet Layer */}
          <path
            d="M-50,240 L400,130 L820,260 L1240,120 L1500,240 L1500,490 L1240,380 L820,500 L400,370 L-50,480 Z"
            fill="url(#d2_zigzag1_accent)"
          />
        </svg>
      </div>

      {/* ========================================================
          ZIGZAG RIBBON 2: POSTERS & STORY SECTION (Mid)
          ======================================================== */}
      <div className="absolute top-[1900px] left-0 right-0 h-[650px]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-gradient-to-r from-purple-200/30 via-violet-100/20 to-purple-200/25 blur-3xl" />
        <svg className="w-full h-full opacity-85" viewBox="0 0 1440 650" fill="none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="d2_zigzag2" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#F8FAFC" stopOpacity="0.2" />
              <stop offset="20%" stopColor="#EDE9FE" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#F5EEF8" stopOpacity="0.85" />
              <stop offset="80%" stopColor="#F3E8FF" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#F8FAFC" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          <path
            d="M-50,130 L380,30 L780,150 L1180,40 L1500,130 L1500,500 L1180,410 L780,520 L380,390 L-50,490 Z"
            fill="url(#d2_zigzag2)"
          />
        </svg>
      </div>

      {/* ========================================================
          ZIGZAG RIBBON 3: WORKFLOW & BLOG SECTION (Lower)
          ======================================================== */}
      <div className="absolute top-[3300px] left-0 right-0 h-[600px]">
        <div className="absolute top-1/3 left-1/3 w-[700px] h-[400px] rounded-full bg-purple-200/25 blur-3xl" />
        <svg className="w-full h-full opacity-80" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="d2_zigzag3" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FAF5FF" stopOpacity="0.8" />
              <stop offset="35%" stopColor="#EDE9FE" stopOpacity="0.65" />
              <stop offset="70%" stopColor="#F5EEF8" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#F8FAFC" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          <path
            d="M-50,100 L400,210 L820,90 L1220,200 L1500,80 L1500,430 L1220,530 L820,410 L400,530 L-50,420 Z"
            fill="url(#d2_zigzag3)"
          />
        </svg>
      </div>
    </div>
  );
}
