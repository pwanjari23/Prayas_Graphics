"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Clock, Sparkles } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

export default function BlogSection() {
  // Take 3 curated posts to fit cleanly in one 3-column row
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f8f8f8] via-white to-[#f8f8f8] pt-14 sm:pt-18 md:pt-20 pb-16 sm:pb-20 md:pb-24">
      {/* Background CAD Matrix */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 opacity-[0.20] [background-image:radial-gradient(#a3a3a3_0.75px,transparent_0.75px)] [background-size:24px_24px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-6">
        {/* Luminous Light Pearl Container */}
        <div className="relative flex flex-col items-center justify-center rounded-[36px] sm:rounded-[44px] bg-white p-6 sm:p-8 md:p-10 lg:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-zinc-200 overflow-hidden">
          {/* Subtle Ambient Background Corner Glows */}
          <div
            className="pointer-events-none absolute -left-20 -top-20 h-[380px] w-[380px] rounded-full bg-gradient-to-br from-zinc-100 to-transparent blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-20 -bottom-20 h-[380px] w-[380px] rounded-full bg-gradient-to-tl from-zinc-100 to-transparent blur-3xl"
            aria-hidden="true"
          />

          {/* Heading Section */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-4 py-1.5 text-xs font-bold text-zinc-950 mb-3.5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-zinc-950" />
              <span>NAGPUR SIGNAGE KNOWLEDGE HUB</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 leading-tight">
              Latest Blog Posts
            </h2>

            <p className="mt-3 text-xs sm:text-sm md:text-base text-zinc-600 font-normal leading-relaxed max-w-lg">
              Expert insights on materials, NMC compliance rules, design trends, and cost efficiency for business owners across Nagpur.
            </p>
          </div>

          {/* 3 Cards */}
          <div className="relative z-10 grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch max-w-6xl mx-auto">
            {posts.map((post, idx) => (
              <Link
                href={post.slug}
                key={post.slug || idx}
                className="group flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-4 transition-all duration-300 hover:border-zinc-400 hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  {/* Image Frame */}
                  <div className="relative aspect-[16/9.5] w-full overflow-hidden rounded-xl bg-zinc-100 mb-3 border border-zinc-200">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
                    
                    {/* Category Pill Tag */}
                    <span className="absolute top-2.5 left-2.5 z-20 rounded-full bg-white/95 backdrop-blur-md border border-zinc-200 px-2.5 py-0.5 text-[10.5px] font-bold text-zinc-900 shadow-2xs">
                      {post.category}
                    </span>
                  </div>

                  {/* Date & Read Time */}
                  <div className="flex items-center gap-2 text-[11px] font-medium text-zinc-500 mb-1.5 px-0.5">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3 text-zinc-500" /> 4 min
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-sm sm:text-base font-bold text-zinc-900 group-hover:text-black transition-colors line-clamp-2 leading-snug px-0.5 mb-1.5">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed font-normal px-0.5">
                    {post.excerpt}
                  </p>
                </div>

                {/* Card Bottom Link */}
                <div className="pt-3 mt-3 border-t border-zinc-100 px-0.5 flex items-center justify-between">
                  <span className="text-xs font-semibold text-zinc-700 group-hover:text-black transition-colors">
                    Read Article
                  </span>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-100 border border-zinc-200 text-zinc-900 group-hover:bg-zinc-950 group-hover:border-zinc-950 group-hover:text-white transition-all duration-200">
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Centered Bottom CTA Button */}
          <div className="relative z-10 mt-8 sm:mt-10 flex justify-center">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white px-7 py-3 text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer"
            >
              <span>View All 8 Articles</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
