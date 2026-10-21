"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Clock, BookOpen } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

export default function BlogSection() {
  // Take 3 curated posts to fit cleanly in one 3-column row
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 md:py-12 md:px-6 lg:px-8">
      {/* Sleek Black Container with Compact Spacing */}
      <div className="relative flex flex-col items-center justify-center rounded-[28px] sm:rounded-[36px] bg-zinc-950 border border-zinc-800/90 p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl overflow-hidden">
        
        {/* Subtle Ambient Glow */}
        <div 
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" 
          aria-hidden="true" 
        />

        {/* Heading in Middle */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-2xl mx-auto mb-7 sm:mb-9">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/50 px-3.5 py-1 text-xs font-bold text-purple-300 mb-3">
            <BookOpen className="w-3.5 h-3.5 text-purple-400" />
            <span>NAGPUR SIGNAGE KNOWLEDGE HUB</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Latest Blog Posts
          </h2>

          <p className="mt-2.5 text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed max-w-lg">
            Expert insights on materials, NMC compliance rules, design trends, and cost efficiency for business owners across Nagpur.
          </p>
        </div>

        {/* 3 Cards: Compact height and Dark Styling */}
        <div className="relative z-10 grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 items-stretch max-w-6xl mx-auto">
          {posts.map((post, idx) => (
            <Link
              href={post.slug}
              key={post.slug || idx}
              className="group flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/80 p-3.5 sm:p-4 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900 hover:shadow-lg hover:-translate-y-1"
            >
              <div>
                {/* Image Frame - Compact Aspect Ratio */}
                <div className="relative aspect-[16/9.5] w-full overflow-hidden rounded-xl bg-zinc-800 mb-2.5 sm:mb-3">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent z-10" />
                  
                  {/* Category Pill Tag */}
                  <span className="absolute top-2 left-2 z-20 rounded-full bg-zinc-950/85 backdrop-blur-md border border-zinc-700/60 px-2 py-0.5 text-[10px] sm:text-[10.5px] font-bold text-zinc-200 shadow-2xs">
                    {post.category}
                  </span>
                </div>

                {/* Date & Read Time */}
                <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-medium text-zinc-400 mb-1.5 px-0.5">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3 h-3 text-zinc-500" /> 4 min
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xs sm:text-[15px] font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-2 leading-snug px-0.5 mb-1 sm:mb-1.5">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[11px] sm:text-xs text-zinc-400 line-clamp-2 leading-relaxed font-normal px-0.5">
                  {post.excerpt}
                </p>
              </div>

              {/* Card Bottom Link */}
              <div className="pt-2 sm:pt-2.5 mt-2.5 sm:mt-3 border-t border-zinc-800/80 px-0.5 flex items-center justify-between">
                <span className="text-[10px] sm:text-xs font-semibold text-zinc-300 group-hover:text-purple-300 transition-colors">
                  Read Article
                </span>
                <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 group-hover:bg-purple-600 group-hover:border-purple-600 group-hover:text-white transition-all duration-200">
                  <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Centered Bottom CTA Button */}
        <div className="relative z-10 mt-7 sm:mt-9 flex justify-center">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 rounded-full bg-white hover:bg-zinc-200 text-zinc-950 px-6 py-2.5 text-xs sm:text-sm font-bold transition-all shadow-sm active:scale-[0.98]"
          >
            <span>View All 8 Articles</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
