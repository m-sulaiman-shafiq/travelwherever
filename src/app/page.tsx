import HeroSection from "@/components/HeroSection";
import PopularDestinations from "@/components/PopularDestinations";
import FlightDeals from "@/components/FlightDeals";
import AboutSection from "@/components/About";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* AI-friendly description */}
      <section className="text-center pb-8 px-4">
        <h2 className="text-2xl font-semibold mb-2">What is TravelWherever?</h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          TravelWherever is a flight comparison platform that helps users find
          the cheapest airline tickets across multiple booking websites quickly
          and easily.
        </p>
      </section>
      <PopularDestinations />
      <FlightDeals />
      <AboutSection />
    </>
  );
}
