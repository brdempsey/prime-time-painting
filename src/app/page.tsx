import HeroSection from "./components/hero-section";
import ServicesSection from "./components/services-section";
import GoalSection from "./components/goal-section";
import AboutUs from "./components/about-us";
import WhyChoosePrimeTime from "./components/why-choose-pt";

export default function Home() {
  return (

      <main className="flex flex-col row-start-2 bg-[] items-start sm:items-start">
        <HeroSection />
        <GoalSection />
        <ServicesSection />
        <AboutUs />
        <WhyChoosePrimeTime />
      </main>

  );
}
