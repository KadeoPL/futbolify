import HeroSection from "@/app/components/landing-page/HeroSection";
import FunctionsSection from "@/app/components/landing-page/FunctionsSection";

export default function Home() {
  return (
    <div className="max-w-[1440px] px-6 mx-auto">
      <HeroSection />
      <FunctionsSection />
    </div>
  );
}
