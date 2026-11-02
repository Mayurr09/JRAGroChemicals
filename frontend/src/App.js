import { useEffect, useState } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { Toaster } from "sonner";
import "@/App.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Catalogue from "@/components/Catalogue";
import ProductModal from "@/components/ProductModal";
import Solutions from "@/components/Solutions";
import WhyChooseUs from "@/components/WhyChooseUs";
import FarmerSection from "@/components/FarmerSection";
import Certifications from "@/components/Certifications";
import Dealers from "@/components/Dealers";
import Enquiry from "@/components/Enquiry";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

function Site() {
  const [introDone, setIntroDone] = useState(false);
  const [viewing, setViewing] = useState(null);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09 });
    let frameId;

    // Lenis 1.1 requires an explicit animation loop to advance wheel scrolling.
    const animate = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App">
      {!introDone && <Intro onDone={() => setIntroDone(true)} />}
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Catalogue onView={setViewing} />
        <Solutions />
        <WhyChooseUs />
        <FarmerSection />
        <Certifications />
        <Dealers />
        <Enquiry />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ProductModal product={viewing} onClose={() => setViewing(null)} />
      <WhatsAppFloat />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Site />
    </LanguageProvider>
  );
}
