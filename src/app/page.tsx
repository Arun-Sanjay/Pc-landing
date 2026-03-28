import LoadingScreen from "@/components/loading-screen";
import CursorEffect from "@/components/cursor-effect";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import SocialProofBar from "@/components/social-proof-bar";
import PrebuiltBuilds from "@/components/prebuilt-builds";
import Configurator from "@/components/configurator";
import HowItWorks from "@/components/how-it-works";
import WhyUs from "@/components/why-us";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import BackToTop from "@/components/back-to-top";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CursorEffect />
      <Navbar />

      <main>
        <Hero />
        <SocialProofBar />

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#1A1A1A] to-transparent" />

        <PrebuiltBuilds />

        <Configurator />

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#1A1A1A] to-transparent" />

        <HowItWorks />

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#1A1A1A] to-transparent" />

        <WhyUs />

        <Testimonials />

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#1A1A1A] to-transparent" />

        <FAQ />

        <FinalCTA />
      </main>

      <Footer />

      <WhatsAppFloat />
      <BackToTop />
    </>
  );
}
