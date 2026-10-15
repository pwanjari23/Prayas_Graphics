import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blog-data";
import { BUSINESS_INFO } from "@/lib/business-info";
import { getBreadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Signboard & Signage Guides, NMC Rules & Costs in Nagpur — Blog",
  description:
    "Expert signage advice, material comparisons (ACP vs Acrylic vs Flex), NMC legal permission guides, and cost breakdowns for businesses in Nagpur.",
  alternates: {
    canonical: `${BUSINESS_INFO.url}/blog`,
  },
  openGraph: {
    title: "Signboard Insights & Business Guides for Nagpur — Prayas Graphics",
    description:
      "Essential guides on signboard selection, extreme weather survival, NMC regulations, and signage ROI in Nagpur.",
    url: `${BUSINESS_INFO.url}/blog`,
  },
};

export default function BlogPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ]);

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#FAFAF9] pb-20 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Editorial Blog Hero Header - Centered in Middle */}
      <section className="mx-auto w-full max-w-7xl px-4 pt-20 pb-10 sm:pt-24 sm:pb-12 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-1 text-xs font-bold text-[#800080] mb-2 mt-2">
            <span>Nagpur Signage Tips & Trends</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight text-zinc-950 leading-[1.12] text-center">
            Signage Insights &amp;
            <span className="block">Resources</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-600 font-normal text-center max-w-2xl">
            Practical insights on heat-resistant signage materials, NMC regulations, design best practices, and cost-effective solutions for businesses in Nagpur.
          </p>
        </div>
      </section>

      {/* Blog Cards Grid: 2 cards in a line on mobile, 4 cards on desktop */}
      <section className="mx-auto w-full max-w-7xl px-3 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 items-stretch">
          {blogPosts.map((post, idx) => (
            <Link
              href={post.slug}
              key={idx}
              className="group flex flex-col justify-between rounded-xl sm:rounded-[24px] border border-zinc-200/90 bg-white p-2.5 sm:p-4 transition-all duration-300 hover:border-zinc-400 hover:shadow-lg hover:-translate-y-1 active:scale-[0.99]"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg sm:rounded-xl bg-zinc-100 mb-2.5 sm:mb-3.5">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
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
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
