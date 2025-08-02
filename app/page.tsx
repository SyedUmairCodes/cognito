import CallToAction from "@/components/call-to-action";
import Features from "@/components/features";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";

const App = () => {
  return (
    <main className="font-sans">
      <HeroSection />
      <Features />
      <CallToAction />
      <FooterSection />
    </main>
  );
};

export default App;
