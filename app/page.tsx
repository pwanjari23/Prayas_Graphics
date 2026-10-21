import HeroSection from "@/components/HeroSection";
import BrandLogosMarquee from "@/components/BrandLogosMarquee";
import PopularPosters from "@/components/PopularPosters";
import StorySection from "@/components/StorySection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import AngledBackgroundShapes from "@/components/AngledBackgroundShapes";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center bg-stone-50 pb-20 overflow-x-hidden">
      {/* Background Shapes strictly isolated at -z-10 */}
      <AngledBackgroundShapes />

      {/* Main Content strictly in front at z-10 */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <HeroSection />
        <BrandLogosMarquee />
        <PopularPosters />
        <FeaturesSection />
        <StorySection />
        <HowItWorks />
        <BlogSection />
        <TestimonialsSection />
        <Footer />
      </div>
    </main>
  );
}
