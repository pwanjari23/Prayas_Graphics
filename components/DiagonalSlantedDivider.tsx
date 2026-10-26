import React from "react";

interface DiagonalSlantedDividerProps {
  id?: string;
  className?: string;
  topColor?: string;
  bottomColor?: string;
  reverse?: boolean;
  accentGradientColors?: [string, string, string, string];
}

export default function DiagonalSlantedDivider({
  id = "diagonal-slant",
  className = "",
  topColor = "#ffffff",
  bottomColor = "#171717",
  reverse = false,
  accentGradientColors = ["#262626", "#525252", "#737373", "#404040"],
}: DiagonalSlantedDividerProps) {
  const gradientId = `${id}-gradient`;
  const glowId = `${id}-glow`;

  // Upper Wedge Path: Extends slightly outside viewBox bounds to eliminate subpixel rounding gaps
  const upperPath = reverse
    ? "M-10 -4 L1210 -4 L1210 8 L-10 40 Z"
    : "M-10 -4 L1210 -4 L1210 40 L-10 8 Z";

  // Lower Wedge Path: Seamlessly joins from the slant line and extends below viewBox
  const lowerPath = reverse
    ? "M-10 40 L1210 8 L1210 52 L-10 52 Z"
    : "M-10 8 L1210 40 L1210 52 L-10 52 Z";

  // Clean, consistent accent line coordinates
  const lineCoords = reverse
    ? { x1: "-10", y1: "40", x2: "1210", y2: "8" }
    : { x1: "-10", y1: "8", x2: "1210", y2: "40" };

  return (
    <div
      className={`relative w-full overflow-hidden block -my-px pointer-events-none select-none z-20 ${className}`}
      style={{ transform: "translateZ(0)" }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 48"
        preserveAspectRatio="none"
        className="w-full h-8 sm:h-10 md:h-12 lg:h-14 block pointer-events-none"
        style={{ shapeRendering: "geometricPrecision" }}
      >
        <defs>
          {/* Subtle Monochrome Grayscale Accent Gradient */}
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={accentGradientColors[0]} />
            <stop offset="35%" stopColor={accentGradientColors[1]} />
            <stop offset="70%" stopColor={accentGradientColors[2]} />
            <stop offset="100%" stopColor={accentGradientColors[3]} />
          </linearGradient>

          {/* Soft Grayscale Ambient Seam Glow */}
          <linearGradient id={glowId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#262626" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#525252" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#262626" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* 1. Upper Wedge (Seamlessly connects to section above) */}
        <path d={upperPath} fill={topColor} shapeRendering="geometricPrecision" />

        {/* 2. Lower Wedge (Seamlessly connects to section below) */}
        <path d={lowerPath} fill={bottomColor} shapeRendering="geometricPrecision" />

        {/* 3. Subtle Ambient Glow Line Underneath Accent */}
        <line
          x1={lineCoords.x1}
          y1={lineCoords.y1}
          x2={lineCoords.x2}
          y2={lineCoords.y2}
          stroke={`url(#${glowId})`}
          strokeWidth="4"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          shapeRendering="geometricPrecision"
        />

        {/* 4. Solid Monochrome Core Accent Line */}
        <line
          x1={lineCoords.x1}
          y1={lineCoords.y1}
          x2={lineCoords.x2}
          y2={lineCoords.y2}
          stroke={`url(#${gradientId})`}
          strokeWidth="1.75"
          vectorEffect="non-scaling-stroke"
          shapeRendering="geometricPrecision"
        />

        {/* 5. Precision Luminous Highlight Edge */}
        <line
          x1={lineCoords.x1}
          y1={lineCoords.y1}
          x2={lineCoords.x2}
          y2={lineCoords.y2}
          stroke="#ffffff"
          strokeWidth="0.5"
          strokeOpacity="0.5"
          vectorEffect="non-scaling-stroke"
          shapeRendering="geometricPrecision"
        />
      </svg>
    </div>
  );
}