"use client";

import React from "react";

export default function AngledBackgroundShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden select-none" aria-hidden="true">
      {/* Precision CAD Blueprint Drafting Grid Canvas */}
      <div
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Blueprint Dot Grid intersections */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.12) 1.5px, transparent 0)",
          backgroundSize: "160px 160px",
        }}
      />

      {/* Atmospheric Soft Grayscale Glow Orbs */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1200px] h-[750px] rounded-full bg-gradient-to-b from-zinc-200/40 via-zinc-100/20 to-transparent blur-3xl" />
      <div className="absolute top-[1600px] left-10 w-[700px] h-[500px] rounded-full bg-zinc-200/25 blur-3xl" />
      <div className="absolute top-[2800px] right-10 w-[800px] h-[600px] rounded-full bg-zinc-200/25 blur-3xl" />
      <div className="absolute top-[4200px] left-1/3 w-[900px] h-[500px] rounded-full bg-zinc-200/20 blur-3xl" />

      {/* Technical Dimension Lines & Crosshairs across page */}
      <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
        {/* Upper Hero Technical Ruler */}
        <line x1="120" y1="100" x2="1320" y2="100" stroke="#71717a" strokeWidth="1" strokeDasharray="4 8" />
        <line x1="120" y1="90" x2="120" y2="110" stroke="#71717a" strokeWidth="1.5" />
        <line x1="1320" y1="90" x2="1320" y2="110" stroke="#71717a" strokeWidth="1.5" />

        {/* Mid-page Technical Measurement Line */}
        <line x1="80" y1="1700" x2="1360" y2="1700" stroke="#71717a" strokeWidth="1" strokeDasharray="6 10" />
        <line x1="720" y1="1600" x2="720" y2="1800" stroke="#71717a" strokeWidth="1" strokeDasharray="6 10" />

        {/* Crosshair + targets at structural intervals */}
        <g stroke="#3f3f46" strokeWidth="1.5">
          <path d="M140,850 L160,850 M150,840 L150,860" />
          <circle cx="150" cy="850" r="8" fill="none" stroke="#3f3f46" strokeWidth="1" />
          
          <path d="M1290,1250 L1310,1250 M1300,1240 L1300,1260" />
          <circle cx="1300" cy="1250" r="8" fill="none" stroke="#3f3f46" strokeWidth="1" />

          <path d="M180,2400 L200,2400 M190,2390 L190,2410" />
          <circle cx="190" cy="2400" r="8" fill="none" stroke="#3f3f46" strokeWidth="1" />

          <path d="M1250,3600 L1270,3600 M1260,3590 L1260,3610" />
          <circle cx="1260" cy="3600" r="8" fill="none" stroke="#3f3f46" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}
