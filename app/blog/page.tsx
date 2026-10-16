import type { Metadata } from "next";
import BlogPageContent from "@/components/BlogPageContent";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
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

      <BlogPageContent />
      <CtaSection />
      <Footer />
    </main>
  );
}

