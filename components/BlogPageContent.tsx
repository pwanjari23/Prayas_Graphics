"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { blogPosts } from "@/lib/blog-data";

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function BlogPageContent() {
  return (
    <div className="relative w-full max-w-7xl px-3 sm:px-6 lg:px-8">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 h-[340px] w-[500px] sm:w-[700px] rounded-full bg-gradient-to-b from-purple-100/40 via-purple-50/20 to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />

      {/* Editorial Blog Hero Header - Staggered Motion */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto pt-20 pb-10 sm:pt-24 sm:pb-12"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-1 text-xs font-bold text-[#800080] mb-3">
          <span>Nagpur Signage Tips &amp; Trends</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight text-zinc-950 leading-[1.12] text-center">
          Signage Insights &amp;
          <span className="block text-zinc-950">Resources</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-600 font-normal text-center max-w-2xl">
          Practical insights on heat-resistant signage materials, NMC regulations, design best practices, and cost-effective solutions for businesses in Nagpur.
        </p>
      </motion.div>

      {/* Blog Cards Grid: Animated Staggered Reveal */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 items-stretch pb-16"
      >
        {blogPosts.map((post, idx) => (
          <motion.div key={idx} variants={cardVariants} className="h-full">
            <Link
              href={post.slug}
              className="group flex flex-col justify-between h-full rounded-xl sm:rounded-[24px] border border-zinc-200/90 bg-white p-2.5 sm:p-4 transition-all duration-300 hover:border-zinc-400 hover:shadow-lg hover:-translate-y-1 active:scale-[0.99]"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg sm:rounded-xl bg-zinc-100 mb-2.5 sm:mb-3.5">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <span className="absolute top-2 left-2 z-10 inline-flex items-center rounded-full bg-white/95 backdrop-blur-md px-2 py-0.5 text-[10px] sm:text-[11px] font-bold text-zinc-900 shadow-xs">
                    {post.category}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-semibold text-zinc-400 mb-1 sm:mb-1.5 px-0.5">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>4 min</span>
                </div>

                <h2 className="font-heading text-xs sm:text-base font-bold text-zinc-950 group-hover:text-[#800080] transition-colors leading-snug mb-1 sm:mb-1.5 px-0.5 line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-[11px] sm:text-xs text-zinc-500 line-clamp-2 leading-relaxed font-normal px-0.5">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-2.5 sm:pt-3.5 mt-2.5 sm:mt-3.5 border-t border-zinc-100 flex items-center justify-between px-0.5">
                <span className="text-[10px] sm:text-xs font-bold text-zinc-700 group-hover:text-[#800080] transition-colors">
                  Read Guide
                </span>
                <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 group-hover:bg-zinc-950 group-hover:text-white transition-all duration-200">
                  <span className="text-[10px] sm:text-xs font-bold">→</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
