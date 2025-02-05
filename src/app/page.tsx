import Image from "next/image";
import HeroSection from "./components/hero-section";
import ServicesSection from "./components/services-section";
import GoalSection from "./components/goal-section";

export default function Home() {
  return (

      <main className="flex flex-col gap-8 row-start-2 bg-[] items-start sm:items-start">
        <HeroSection />
        <GoalSection />
        <ServicesSection />
      </main>

  );
}
