"use client";

import React, { useState } from "react";

// --- CALLOUT ---
interface CalloutProps {
  variant: "red" | "gold" | "green" | "blue";
  icon?: string;
  title: string;
  children: React.ReactNode;
}
export function Callout({ variant, icon, title, children }: CalloutProps) {
  const styles = {
    red: "bg-zinc-100 border-zinc-950",
    gold: "bg-zinc-100 border-zinc-700",
    green: "bg-zinc-50 border-zinc-500",
    blue: "bg-zinc-50 border-zinc-400",
  };
  return (
    <div className={"rounded-2xl p-5 sm:p-6 my-6 border-l-4 " + styles[variant]}>
      <h4 className="text-sm font-bold text-zinc-950 mb-2 flex items-center gap-2">
        {icon && <span>{icon}</span>}
        {title}
      </h4>
      <div className="text-sm text-zinc-600 font-normal leading-relaxed [&>p]:mb-2 [&>ul]:pl-5 [&>ul]:list-disc [&>ul]:mt-2">
        {children}
      </div>
    </div>
  );
}

// --- FAQ ---
export function FaqItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-zinc-200/90 rounded-2xl mb-3 overflow-hidden bg-white shadow-2xs">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 md:px-5 font-semibold text-sm sm:text-[15px] text-zinc-900 text-left hover:bg-zinc-50 transition-colors"
      >
        <span>{question}</span>
        <span className="text-zinc-950 text-lg font-bold w-6 h-6 flex items-center justify-center shrink-0">
          {open ? "−" : "+"}
        </span>
      </button>
      <div
        className={"overflow-hidden transition-all duration-300 ease-in-out " + (open ? "max-h-[500px]" : "max-h-0")}
      >
        <div className="p-4 md:px-5 pt-0 text-sm text-zinc-600 font-normal leading-relaxed bg-zinc-50/50 border-t border-zinc-100">
          {answer}
        </div>
      </div>
    </div>
  );
}

// --- MISTAKE BOX ---
export function MistakeBox({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-zinc-200/90 rounded-2xl p-5 md:p-6 mb-5 flex flex-col sm:flex-row gap-4 sm:gap-6 shadow-2xs">
      <div className="font-heading text-4xl md:text-5xl font-black text-zinc-300 leading-none shrink-0 w-12 hidden sm:block">
        {num}
      </div>
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="font-heading text-2xl font-black text-zinc-300 leading-none block sm:hidden">
            {num}
          </span>
          <h5 className="text-[15px] font-bold text-zinc-950 leading-tight">
            {title}
          </h5>
        </div>
        <div className="text-sm text-zinc-600 font-normal leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

// --- PRICE CARD ---
interface PriceCardProps {
  name: string;
  price: string;
  unit: string;
  life: string;
  featured?: boolean;
}
export function PriceCard({ name, price, unit, life, featured }: PriceCardProps) {
  return (
    <div
      className={"border rounded-2xl p-5 bg-white text-center transition-all hover:-translate-y-1 " + (featured ? "border-zinc-950 border-2 shadow-md" : "border-zinc-200/90 shadow-2xs")}
    >
      <div className="text-[13px] font-bold text-zinc-950 mb-1.5">{name}</div>
      <div className="font-heading text-[22px] font-extrabold text-zinc-950 mb-1">{price}</div>
      <div className="text-[11px] text-zinc-500 mb-3">{unit}</div>
      <div className="text-xs font-semibold text-zinc-800 bg-zinc-100 inline-block px-3 py-1 rounded-full border border-zinc-300">
        {life}
      </div>
    </div>
  );
}

// --- STEP BOX ---
export function StepBox({
  num,
  number,
  title,
  desc,
  description,
}: {
  num?: number;
  number?: number;
  title: string;
  desc?: string;
  description?: string;
}) {
  const displayNum = num ?? number ?? 1;
  const displayDesc = desc ?? description ?? "";
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-6 items-start group">
      <div className="w-9 h-9 rounded-full bg-zinc-950 text-white text-xs font-bold flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
        {displayNum}
      </div>
      <div>
        <h5 className="text-[15px] font-bold text-zinc-900 mb-1">{title}</h5>
        <p className="text-sm m-0 text-zinc-600 font-normal leading-relaxed">{displayDesc}</p>
      </div>
    </div>
  );
}

// --- VS GRID ---
interface VsOption {
  label: string;
  name: string;
  points: string[];
}
export function VsGrid({ optionA, optionB }: { optionA: VsOption; optionB: VsOption }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] my-8 border border-zinc-200/90 rounded-2xl overflow-hidden shadow-2xs">
      <div className="p-6 md:p-8 bg-white">
        <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-zinc-400 mb-2.5">
          {optionA.label}
        </div>
        <div className="font-heading text-lg md:text-xl font-extrabold text-zinc-950 mb-4">
          {optionA.name}
        </div>
        <ul className="space-y-2.5">
          {optionA.points.map((pt, i) => (
            <li key={i} className="text-[13px] text-zinc-600 font-normal leading-relaxed flex items-start gap-2">
              <span className="text-zinc-950 shrink-0 mt-0.5">•</span>
              {pt}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-zinc-950 flex md:flex-col items-center justify-center py-2 md:py-0 md:px-4 text-white font-bold tracking-widest text-xs md:text-sm md:[writing-mode:vertical-rl]">
        VS
      </div>

      <div className="p-6 md:p-8 bg-zinc-50/70">
        <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-zinc-400 mb-2.5">
          {optionB.label}
        </div>
        <div className="font-heading text-lg md:text-xl font-extrabold text-zinc-950 mb-4">
          {optionB.name}
        </div>
        <ul className="space-y-2.5">
          {optionB.points.map((pt, i) => (
            <li key={i} className="text-[13px] text-zinc-600 font-normal leading-relaxed flex items-start gap-2">
              <span className="text-zinc-950 shrink-0 mt-0.5">•</span>
              {pt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

