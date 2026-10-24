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
import AngledBackgroundShapes from "@/components/AngledBackgroundShapes";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center bg-[#faf8fc] overflow-x-hidden">


      <div className="relative z-10 w-full flex flex-col items-center">
        <HeroSection />

        {/* Divider 0: Hero to Brands (Left-to-Right Slant) */}
        <DiagonalSlantedDivider
          id="hero-to-brands-slant"
          topColor="#faf8fc"
          bottomColor="#0c0617"
          reverse={false}
        />

        {/* Brand Logos Showcase (High-Tech Obsidian Client Gallery) */}
        <BrandLogosMarquee />

        {/* Divider 0.5: Brands to Featured Services (Right-to-Left Slant) */}
        <DiagonalSlantedDivider
          id="brands-to-featured-slant"
          topColor="#0c0617"
          bottomColor="#faf8fc"
          reverse={true}
        />

        {/* 1. Flagship Featured Services (Luminous Light Creative) */}
        <PopularPosters />

        {/* Divider 1: Light to Dark (Left-to-Right Slant) */}
        <DiagonalSlantedDivider
          id="featured-to-features-slant"
          topColor="#faf8fc"
          bottomColor="#0c0617"
          reverse={false}
        />

        {/* 2. Engineering Standard (High-Tech Obsidian Violet) */}
        <FeaturesSection />

        {/* Divider 2: Dark to Light (Right-to-Left Slant) */}
        <DiagonalSlantedDivider
          id="features-to-story-slant"
          topColor="#0c0617"
          bottomColor="#faf8fc"
          reverse={true}
        />

        {/* 3. Tell Your Brand's Story (Luminous Brand Pearl) */}
        <StorySection />

        {/* Divider 3: Light to Dark (Left-to-Right Slant) */}
        <DiagonalSlantedDivider
          id="story-to-how-slant"
          topColor="#faf8fc"
          bottomColor="#0c0617"
          reverse={false}
        />

        {/* 4. How It Works (High-Tech Dark Architectural Timeline) */}
        <HowItWorks />

        {/* Divider 4: Dark to Light (Right-to-Left Slant) */}
        <DiagonalSlantedDivider
          id="how-to-blog-slant"
          topColor="#0c0617"
          bottomColor="#faf8fc"
          reverse={true}
        />

        {/* 5. Latest Blog Posts (Luminous Light Knowledge Hub) */}
        <BlogSection />

        {/* Divider 5: Light to Dark (Left-to-Right Slant) */}
        <DiagonalSlantedDivider
          id="blog-to-testimonials-slant"
          topColor="#faf8fc"
          bottomColor="#0c0617"
          reverse={false}
        />

        {/* 6. Success Stories Testimonials (High-Tech Obsidian Violet Marquee) */}
        <TestimonialsSection />

        {/* Divider 6: Dark to Light Flagship Footer (Right-to-Left Slant) */}
        <DiagonalSlantedDivider
          id="testimonials-to-footer-slant"
          topColor="#0c0617"
          bottomColor="#faf8fc"
          reverse={true}
        />

        {/* 7. Flagship Footer (Luminous Light Creative Foundation) */}
        <Footer />
      </div>
    </main>
  );
}
