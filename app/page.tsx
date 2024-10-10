import HeroSection from "@/app/components/landing-page/HeroSection";
import FunctionsSection from "@/app/components/landing-page/FunctionsSection";
import HowItWorksSection from "@/app/components/landing-page/HowItWorksSection";
import PricingSection from "@/app/components/landing-page/PricingSection";
import Footer from "./components/ui/Footer";

export default function Home() {
  return (
    <div className="max-w-[1440px] px-6 mx-auto">
      <HeroSection />
      <FunctionsSection />
      <HowItWorksSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
