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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-xl h-10 bg-purple-500/10 blur-2xl rounded-full pointer-events-none" />

      {/* Responsive curved SVG wave with signature brand gradient */}
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="w-full h-8 sm:h-10 md:h-12 block pointer-events-none"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E9C8FF" stopOpacity="0.15" />
            <stop offset="20%" stopColor="#C084FC" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#800080" stopOpacity="0.95" />
            <stop offset="80%" stopColor="#D946EF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F0ABFC" stopOpacity="0.15" />
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
