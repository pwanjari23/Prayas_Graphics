import React from "react";

interface SectionSeparatorProps {
  id?: string;
  className?: string;
}

export default function SectionSeparator({
  id = "services-features-separator",
  className = "",
}: SectionSeparatorProps) {
  const gradientId = `${id}-gradient`;

  return (
    <div
      className={`relative w-full overflow-hidden leading-none select-none my-2 sm:my-4 z-10 ${className}`}
      aria-hidden="true"
    >
      {/* Soft ambient glow centered behind curve */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-xl h-10 bg-zinc-400/10 blur-2xl rounded-full pointer-events-none" />

      {/* Responsive curved SVG wave with signature brand gradient */}
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="w-full h-8 sm:h-10 md:h-12 block pointer-events-none"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d4d4d8" stopOpacity="0.2" />
            <stop offset="20%" stopColor="#71717a" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#18181b" stopOpacity="0.8" />
            <stop offset="80%" stopColor="#71717a" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#d4d4d8" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path
          d="M0 30 C360 8, 720 52, 1080 14 S1360 44, 1440 30"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
