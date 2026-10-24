import type { Metadata } from "next";
import BlogPageContent from "@/components/BlogPageContent";
import DiagonalSlantedDivider from "@/components/DiagonalSlantedDivider";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import AngledBackgroundShapes from "@/components/AngledBackgroundShapes";
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
    <main className="relative flex min-h-screen flex-col items-center bg-[#faf8fc] overflow-x-hidden pt-20 sm:pt-24">
      {/* Main Content strictly in front at z-10 */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        <BlogPageContent />

        {/* Slanted Divider: Light Blog to Dark CtaSection */}
        <DiagonalSlantedDivider
          id="blog-to-cta-slant"
          topColor="#faf8fc"
          bottomColor="#0c0617"
          reverse={false}
        />

        <CtaSection />
        <DiagonalSlantedDivider
          id="cta-to-footer-slant-blog"
          topColor="#0c0617"
          bottomColor="#faf8fc"
          reverse={true}
        />
        <Footer />
      </div>
    </main>
  );
}

