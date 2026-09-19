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
    <main className="flex min-h-screen flex-col items-center bg-stone-50 pb-20 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Blog Hero */}
      <section className="mx-auto w-full max-w-7xl px-4 pt-24 pb-8 md:px-6">
        <div className="flex flex-col items-center justify-center rounded-[32px] bg-white px-6 py-16 shadow-sm md:py-24">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#800080]/10 text-[#800080] text-xs font-bold uppercase tracking-wider mb-4">
            Nagpur Signage Knowledge Hub
          </span>
          <h1 className="text-center font-heading text-4xl font-extrabold tracking-tight text-zinc-900 md:text-5xl">
            Our Signage Guides &amp; Insights
          </h1>
          <p className="mt-4 max-w-xl text-center text-[15px] font-medium text-zinc-500">
            Expert advice on materials, NMC compliance rules, design trends, and cost efficiency for business owners across Nagpur.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-8 md:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, idx) => (
            <Link
              href={post.slug}
              key={idx}
              className="group flex flex-col gap-4 rounded-2xl border border-zinc-100 bg-white p-4 transition-all hover:border-zinc-300 hover:shadow-md"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-zinc-100">
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-zinc-900/10 group-hover:to-zinc-900/30 transition-all z-10" />
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 right-4 z-20 rounded-full bg-white px-3 py-1 text-xs font-bold text-zinc-800 shadow-sm">
                  {post.category}
                </span>
              </div>
              <div className="flex flex-col gap-2 px-2 pb-2">
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">{post.date}</span>
                <h3 className="font-heading text-xl font-bold text-zinc-900 group-hover:text-[#800080] transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-sm text-zinc-500 line-clamp-2 mt-1">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
