import Hero from "./components/sections/Hero";
import StickyPackNav from "./components/sections/StickyPackNav";
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
import DecorativeBackground from "./components/sections/DecorativeBackground";

export default function Home() {
  return (
    <main className="relative isolate bg-black text-white min-h-screen overflow-x-hidden">
      <DecorativeBackground />
      <Hero />
      <StickyPackNav />
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
