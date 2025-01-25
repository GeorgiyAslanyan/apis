import About from "@/components/About";
import Contact from "@/components/Contacts";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Roadmap from "@/components/Roadmap";
import Tokenomics from "@/components/Tokenomics";
import Image from "next/image";

export default function Home() {
  return (
    <div  id='#contacts'  className="flex flex-col items-center justify-center">
        <Hero />

      <div className="max-w-[1050px] mx-10">
        <div className=" flex flex-col gap-10">
          <About />
          <HowItWorks />
          <Tokenomics />
          <Roadmap />
          <Contact />
        </div>
      
      </div>
      <Footer />
      <p className="py-5">all rights reserved // apis 2025</p>
    </div>
  );
}
