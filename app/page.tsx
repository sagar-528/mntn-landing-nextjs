import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Trails from "@/components/Trails";
import Journal from "@/components/Journal";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Trails />
      <Journal />
      <CTA />
      <Footer />
    </>
  );
}
