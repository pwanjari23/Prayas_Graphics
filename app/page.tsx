import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import BrandLogosMarquee from "@/components/BrandLogosMarquee";
import PopularPosters from "@/components/PopularPosters";
import StorySection from "@/components/StorySection";
import FeaturesSection from "@/components/FeaturesSection";
import DiagonalSlantedDivider from "@/components/DiagonalSlantedDivider";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import { BUSINESS_INFO } from "@/lib/business-info";
import { getGlobalFaqSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Prayas Graphics — Premium Signboards & LED Signages in Nagpur",
  description:
    "Nagpur's premier manufacturer of Acrylic ACP Signboards, 3D LED Letters, Elevation Cladding, Glow Signs, and Flex Printing. Fast turnaround & expert installation.",
  alternates: {
    canonical: BUSINESS_INFO.url,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BUSINESS_INFO.url,
    siteName: BUSINESS_INFO.name,
    title: `${BUSINESS_INFO.name} — Premium Signboards & Display Solutions in Nagpur`,
    description:
      "Transform your business storefront with high-quality custom signboards, 3D LED letters, and ACP elevation cladding in Nagpur.",
    images: [
      {
        url: "/hero/hero (1).jpg",
        width: 1200,
        height: 630,
        alt: "Prayas Graphics Signboard Manufacturing in Nagpur",
      },
    ],
  },
};

export default function Home() {
  const faqSchema = getGlobalFaqSchema();

  return (
    <main className="relative flex min-h-screen flex-col items-center bg-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="relative z-10 w-full flex flex-col items-center">
        <HeroSection />

        {/* Divider 0: Hero to Brands (Left-to-Right Slant) */}
        <DiagonalSlantedDivider
          id="hero-to-brands-slant"
          topColor="#ffffff"
          bottomColor="#171717"
          reverse={false}
        />

        {/* Brand Logos Showcase */}
        <BrandLogosMarquee />

        {/* Divider 0.5: Brands to Featured Services (Right-to-Left Slant) */}
        <DiagonalSlantedDivider
          id="brands-to-featured-slant"
          topColor="#171717"
          bottomColor="#f8f8f8"
          reverse={true}
        />

        {/* 1. Flagship Featured Services */}
        <PopularPosters />

        {/* Divider 1: Light to Dark (Left-to-Right Slant) */}
        <DiagonalSlantedDivider
          id="featured-to-features-slant"
          topColor="#f8f8f8"
          bottomColor="#171717"
          reverse={false}
        />

        {/* 2. Engineering Standard */}
        <FeaturesSection />

        {/* Divider 2: Dark to Light (Right-to-Left Slant) */}
        <DiagonalSlantedDivider
          id="features-to-story-slant"
          topColor="#171717"
          bottomColor="#ffffff"
          reverse={true}
        />

        {/* 3. Tell Your Brand's Story */}
        <StorySection />

        {/* Divider 3: Light to Dark (Left-to-Right Slant) */}
        <DiagonalSlantedDivider
          id="story-to-how-slant"
          topColor="#ffffff"
          bottomColor="#171717"
          reverse={false}
        />

        {/* 4. How It Works */}
        <HowItWorks />

        {/* Divider 4: Dark to Light (Right-to-Left Slant) */}
        <DiagonalSlantedDivider
          id="how-to-blog-slant"
          topColor="#171717"
          bottomColor="#f8f8f8"
          reverse={true}
        />

        {/* 5. Latest Blog Posts */}
        <BlogSection />

        {/* Divider 5: Light to Dark (Left-to-Right Slant) */}
        <DiagonalSlantedDivider
          id="blog-to-testimonials-slant"
          topColor="#f8f8f8"
          bottomColor="#171717"
          reverse={false}
        />

        {/* 6. Success Stories Testimonials */}
        <TestimonialsSection />

        {/* Divider 6: Dark to Light Flagship Footer (Right-to-Left Slant) */}
        <DiagonalSlantedDivider
          id="testimonials-to-footer-slant"
          topColor="#171717"
          bottomColor="#ffffff"
          reverse={true}
        />

        {/* 7. Flagship Footer */}
        <Footer />
      </div>
    </main>
  );
}
