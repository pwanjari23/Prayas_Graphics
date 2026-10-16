import type { Metadata } from "next";
import AboutHero from "@/components/AboutHero";
import MeetTheMaker from "@/components/MeetTheMaker";
import AboutCtaFeatures from "@/components/AboutCtaFeatures";
import Footer from "@/components/Footer";
import { BUSINESS_INFO } from "@/lib/business-info";
import { getBreadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "About Us — Prayas Graphics Nagpur | 10+ Years Signage Excellence",
  description:
    "Learn about Prayas Graphics, Nagpur's trusted manufacturer of LED signboards, ACP elevation cladding, and outdoor advertising. Over a decade of quality craftsmanship.",
  alternates: {
    canonical: `${BUSINESS_INFO.url}/about`,
  },
  openGraph: {
    title: "About Prayas Graphics — Nagpur's Signage Specialists",
    description:
      "10+ years of manufacturing high-durability signages, ACP sheet elevation, and commercial branding across Nagpur.",
    url: `${BUSINESS_INFO.url}/about`,
  },
};

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
  ]);

  return (
    <main className="flex min-h-screen flex-col items-center bg-stone-50 pb-20 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutHero />
      <MeetTheMaker />
      <AboutCtaFeatures />
      <Footer />
    </main>
  );
}
