import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechnologyOverview from "@/components/TechnologyOverview";
import InteractiveDashboard from "@/components/InteractiveDashboard";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TechnologyOverview />
      <InteractiveDashboard />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
};

export default Index;