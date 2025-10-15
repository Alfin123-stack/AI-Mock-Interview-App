"use client";
import { FAQSection } from "@/components/Home/FAQSection";
import { FeaturesSection } from "@/components/Home/FeatureSection";
import { Footer } from "@/components/Home/Footer";
import { HeroSection } from "@/components/Home/HeroSection";
import { HowItWorksSection } from "@/components/Home/HowItWorksSection";
import { TestimonialsSection } from "@/components/Home/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </>
  );
}
