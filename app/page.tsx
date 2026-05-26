import Hero from "./components/sections/Hero";
import VideoSection from "./components/sections/VideoSection";
import GallerySection from "./components/sections/GallerySection";
import StepsSection from "./components/sections/StepsSection";
import WhySection from "./components/sections/WhySection";
import BonusSection from "./components/sections/BonusSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import GuaranteeSection from "./components/sections/GuaranteeSection";
import PricingSection from "./components/sections/PricingSection";
import FAQ from "./components/sections/FAQ";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">
      <Hero />
      <VideoSection />
      <StepsSection />
      <WhySection />
      <GallerySection />
      <BonusSection />
      <TestimonialsSection />
      <PricingSection />
      <GuaranteeSection />
      <FAQ />
      <Footer />
    </main>
  );
}
