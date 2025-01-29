'use client'
import { useState, useEffect } from 'react';
import About from "@/components/About";
import WhatIs from "@/components/WhatIs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Roadmap from "@/components/Roadmap";
import Benefits from "@/components/Benefits";
import Image from "next/image";
import Glow from "@/components/Glow";

export default function Home() {

  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-[#111631] font-semibold">
      <canvas className="fixed w-screen h-screen z-[1] mix-blend-screen pointer-events-auto" width={windowSize.width} height={windowSize.height}></canvas>
      <div className="relative px-1 sm:px-5">
      <Image width={1360} height={342} alt="glow" src="/glow/glow4.svg" className="blur-lg absolute opacity-50 pointer-events-none -top-8 left-0 z-[1] w-[100vw]" />
      <Hero />
        <Image width={1360} height={342} alt="glow" src="/glow/glow2.svg" className="blur-lg absolute pointer-events-none -bottom-4 left-0 z-[1] w-[100vw]" />
      </div>
      <div className="relative px-1 sm:px-5">
        <Image width={1360} height={342} alt="glow" src="/glow/glow4.svg" className="blur-lg absolute  pointer-events-none -top-6 left-0 z-[1] w-[100vw]" />
        <WhatIs />
        <Image width={1360} height={342} alt="glow" src="/glow/glow2.svg" className="blur-md absolute opacity-20 pointer-events-none bottom-0 left-0 z-[1] w-[100vw]" />
      </div>
      <div className="relative px-1 sm:px-5">
        <Image width={1360} height={342} alt="glow" src="/glow/glow2.svg" className="blur-md absolute opacity-20 pointer-events-none top-0 left-0 z-[1] w-[100vw] rotate-180" />
        <HowItWorks />
        <Image width={1360} height={342} alt="glow" src="/glow/glow4.svg" className="blur-lg absolute opacity-50 pointer-events-none bottom-[-20px] left-0 z-[1] w-[100vw] rotate-180" />
      </div>
      <div className="relative px-1 sm:px-5">
        <Image width={1360} height={342} alt="glow" src="/glow/glow4.svg" className="blur-lg absolute opacity-50 pointer-events-none top-0 left-0 z-[1] w-[100vw]" />
        <Benefits />
        <Image width={1360} height={342} alt="glow" src="/glow/glow2.svg" className="blur-2xl absolute opacity-30 pointer-events-none bottom-0 left-0 z-[1] w-[100vw]" />
      </div>
      <div className="relative px-1 sm:px-5">
        <Image width={1360} height={342} alt="glow" src="/glow/glow4.svg" className="blur-lg absolute opacity-40 pointer-events-none top-0 left-0 z-[1] w-[100vw]" />
        <Roadmap />
        <Image width={1360} height={342} alt="glow" src="/glow/glow2.svg" className="blur-2xl absolute  pointer-events-none bottom-0 left-0 z-[1] w-[100vw]" />
      </div>
      <div className="relative px-1 sm:px-5">
        <Image width={1360} height={342} alt="glow" src="/glow/glow4.svg" className="blur-lg h-full absolute opacity-40 pointer-events-none top-0 left-0 z-[1] w-[100vw]" />
        <About />
      </div>
      <Footer />
      <script src="/MouseEffect.js"></script>

    </div>
  );
}
