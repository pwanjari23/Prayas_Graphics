import type { Metadata } from "next";
import AboutHero from "@/components/AboutHero";
import DiagonalSlantedDivider from "@/components/DiagonalSlantedDivider";
import MeetTheMaker from "@/components/MeetTheMaker";
import AboutCtaFeatures from "@/components/AboutCtaFeatures";
import Footer from "@/components/Footer";
import AngledBackgroundShapes from "@/components/AngledBackgroundShapes";
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
    <main className="relative flex min-h-screen flex-col items-center bg-[#faf8fc] overflow-x-hidden">
      {/* Main Content strictly in front at z-10 */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <AboutHero />

        {/* Slanted Divider 1: Light AboutHero to Dark MeetTheMaker */}
        <DiagonalSlantedDivider
          id="about-hero-to-maker-slant"
          topColor="#faf8fc"
          bottomColor="#0c0617"
          reverse={false}
        />

        <MeetTheMaker />

        {/* Slanted Divider 2: Dark MeetTheMaker to Light AboutCta */}
        <DiagonalSlantedDivider
          id="maker-to-cta-slant"
          topColor="#0c0617"
          bottomColor="#faf8fc"
          reverse={true}
        />

        <AboutCtaFeatures />
        <Footer />
      </div>
    </main>
  );
}
