import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";
import About from "@/components/About";
import Services from "@/components/Services";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTopOnMount from "@/components/ScrollToTopOnMount";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function Home() {
  return (
    <div className="w-full bg-white">
      <ScrollToTopOnMount />
      <Navbar />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Brands />
      <SectionDivider />
      <Contact />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

