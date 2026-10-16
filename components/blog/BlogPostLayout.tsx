"use client";

import React from "react";
import Footer from "@/components/Footer";
import StructuredData from "./StructuredData";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Calendar, MapPin, ChevronRight } from "lucide-react";

export interface BlogPostLayoutProps {
  title: string;
  metaDescription: string;
  eyebrow: string;
  slug: string;
  date: string; // ISO string preferred
  readTime: string;
  location?: string;
  lede: string;
  image?: string;
  children: React.ReactNode;
  keywords?: string[];
  toc?: { title: string; id: string }[];
}

export default function BlogPostLayout({
  title,
  metaDescription,
  eyebrow,
  slug,
  date,
  readTime,
  location = "Nagpur, Maharashtra",
  lede,
  image,
  children,
  keywords = [],
  toc = [],
}: BlogPostLayoutProps) {
  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    : "";

  return (
    <main className="relative flex min-h-screen flex-col bg-[#F9F9FA] overflow-x-hidden pt-20 sm:pt-24 font-sans text-zinc-900 selection:bg-purple-100 selection:text-purple-900">
      <StructuredData
        title={title}
        description={metaDescription}
        url={"/" + slug}
        datePublished={date}
        dateModified={date}
      />

      {/* Subtle Architectural Lining Background (Not gaudy, delicate 48px grid) */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(24, 24, 27, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(24, 24, 27, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Subtle Asymmetric Slanted Top Backdrop (One side higher, one side lower) */}
      <div
        className="absolute top-0 left-0 right-0 h-[480px] bg-gradient-to-br from-purple-100/50 via-zinc-100/60 to-transparent pointer-events-none z-0"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 86%, 0 100%)",
        }}
      />

      {/* Breadcrumb Navigation */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-6 mb-6 mt-4">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-white/90 backdrop-blur-xs px-3.5 py-1.5 text-xs font-semibold text-zinc-600 hover:text-[#800080] hover:border-purple-200 hover:bg-white transition-all shadow-2xs group"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5 text-zinc-500 group-hover:text-[#800080]" />
          <span>Back to All Articles</span>
        </Link>
      </div>

      <article className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:gap-12 items-start">
          
          {/* Main Article Content Canvas */}
          <div className="min-w-0">
            {/* Hero Header */}
            <header className="mb-8">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-1.5 rounded-full border border-purple-200/90 bg-purple-50 px-3.5 py-1 text-xs font-bold text-[#800080] mb-4">
                <span>{eyebrow}</span>
              </div>

              {/* Title */}
              <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold tracking-tight text-zinc-950 leading-[1.14] mb-4">
                {title}
              </h1>

              {/* Meta Bar */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-zinc-500 pb-5 border-b border-zinc-200/80 mb-6">
                {location && (
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#800080]" />
                    {location}
                  </span>
                )}
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-[#800080]" />
                  {readTime}
                </span>
                {formattedDate && (
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-zinc-400" />
                    Updated: {formattedDate}
                  </span>
                )}
              </div>

              {/* Lede Quote / Highlight Box */}
              <div className="rounded-2xl border-l-4 border-[#800080] bg-white/90 backdrop-blur-xs p-4 sm:p-5 shadow-2xs mb-6">
                <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal m-0">
                  {lede}
                </p>
              </div>

              {/* Hero Image */}
              {image && (
                <div className="relative aspect-[21/10] w-full overflow-hidden rounded-2xl sm:rounded-[26px] border border-zinc-200/80 bg-zinc-100 shadow-sm">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              )}
            </header>

            {/* Article Body Box */}
            <div className="rounded-2xl sm:rounded-[32px] border border-zinc-200/90 bg-white p-6 sm:p-9 md:p-11 shadow-sm">
              <section
                className="prose prose-zinc prose-base sm:prose-lg max-w-none text-zinc-700 font-normal leading-relaxed
                prose-headings:font-heading prose-headings:font-extrabold prose-headings:text-zinc-950 prose-headings:tracking-tight
                prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:pt-8 prose-h2:border-t prose-h2:border-zinc-100
                prose-h3:text-lg sm:prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                prose-p:mb-4 prose-p:leading-relaxed
                prose-a:text-[#800080] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                prose-strong:font-bold prose-strong:text-zinc-950
                prose-ul:my-5 prose-ul:pl-5
                prose-li:my-1.5
                "
              >
                {children}
              </section>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:sticky lg:top-24 h-fit hidden lg:flex flex-col gap-5">
            {/* Table of Contents */}
            {toc.length > 0 && (
              <div className="rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Jump To Section
                  </p>
                  <span className="text-[10px] font-semibold text-[#800080] bg-purple-50 px-2 py-0.5 rounded-full">
                    {toc.length} points
                  </span>
                </div>
                <ul className="space-y-2">
                  {toc.map((item, idx) => (
                    <li key={idx}>
                      <a
                        href={"#" + item.id}
                        className="group flex items-start gap-2 text-xs font-medium text-zinc-600 hover:text-[#800080] transition-colors leading-snug py-0.5"
                      >
                        <ChevronRight className="h-3.5 w-3.5 shrink-0 text-zinc-300 group-hover:text-[#800080] group-hover:translate-x-0.5 transition-all mt-0.5" />
                        <span>{item.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}



            {/* Topics Covered */}
            {keywords.length > 0 && (
              <div className="rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                  Topics Covered
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {keywords.map((kw, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] bg-zinc-50 border border-zinc-200/80 rounded-full px-2.5 py-1 text-zinc-600 font-medium"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </article>

      <Footer />
    </main>
  );
}

