import About from "@/components/About";
import WhatIs from "@/components/WhatIs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Roadmap from "@/components/Roadmap";
import Benefits from "@/components/Benefits";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white px-5 font-semibold">
      <Hero />
      <WhatIs />
      <HowItWorks />
      <Benefits />
      <Roadmap />
      <About />
      <Footer />
    </div>
  );
}
