"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Clock, BookOpen } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

export default function BlogSection() {
  // Take 4 curated posts to fit cleanly in one 4-column row
  const posts = blogPosts.slice(0, 4);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-6 lg:px-8">
      {/* Elegant Light Card Container */}
      <div className="flex flex-col items-center justify-center rounded-[32px] sm:rounded-[40px] bg-white border border-zinc-200/80 p-6 sm:p-10 md:p-14 lg:p-16 shadow-xs">
        
        {/* Heading in Middle */}
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-200/80 bg-purple-50 px-3.5 py-1 text-xs font-bold text-[#800080] mb-3.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>NAGPUR SIGNAGE KNOWLEDGE HUB</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 leading-[1.12]">
            Latest Blog Posts
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-zinc-500 font-normal leading-relaxed">
            Expert insights on materials, NMC compliance rules, design trends, and cost efficiency for business owners across Nagpur.
          </p>
        </div>

        {/* 4 Cards: 2 cards in a line on mobile, 4 cards on desktop */}
        <div className="grid w-full grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 items-stretch">
          {posts.map((post, idx) => (
            <Link
              href={post.slug}
              key={post.slug || idx}
              className="group flex flex-col justify-between rounded-xl sm:rounded-[24px] border border-zinc-200/80 bg-zinc-50/50 p-2.5 sm:p-4 transition-all duration-300 hover:border-zinc-400 hover:bg-white hover:shadow-lg hover:-translate-y-1"
            >
              <div>
                {/* Image Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg sm:rounded-xl bg-zinc-100 mb-2.5 sm:mb-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-transparent to-zinc-900/15 group-hover:to-zinc-900/25 transition-all z-10" />
                  
                  {/* Category Pill Tag */}
                  <span className="absolute top-2 left-2 z-20 rounded-full bg-white/95 backdrop-blur-md px-2 py-0.5 text-[10px] sm:text-[11px] font-bold text-zinc-800 shadow-2xs">
                    {post.category}
                  </span>
                </div>

                {/* Date & Read Time */}
                <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-semibold text-zinc-400 mb-1 sm:mb-2 px-0.5">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3 h-3 text-zinc-400" /> 4 min
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xs sm:text-base font-bold text-zinc-900 group-hover:text-[#800080] transition-colors line-clamp-2 leading-snug px-0.5 mb-1 sm:mb-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[11px] sm:text-xs text-zinc-500 line-clamp-2 leading-relaxed font-normal px-0.5">
                  {post.excerpt}
                </p>
              </div>

              {/* Card Bottom Link */}
              <div className="pt-2.5 sm:pt-3.5 mt-2.5 sm:mt-4 border-t border-zinc-200/60 px-0.5 flex items-center justify-between">
                <span className="text-[10px] sm:text-xs font-bold text-zinc-700 group-hover:text-[#800080] transition-colors">
                  Read Article
                </span>
                <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-white border border-zinc-200 text-zinc-600 group-hover:bg-zinc-950 group-hover:border-zinc-950 group-hover:text-white transition-all duration-200">
                  <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Centered Bottom CTA Button */}
        <div className="mt-12 sm:mt-14 flex justify-center">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-zinc-950 hover:bg-zinc-800 text-white px-7 py-3.5 text-xs sm:text-sm font-bold transition-all shadow-sm active:scale-[0.98]"
          >
            <span>View All 8 Articles</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
