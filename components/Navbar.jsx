'use client'; // Убедитесь, что компонент выполняется на стороне клиента

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`transition-all ease-linear duration-100 fixed top-0 z-[100] w-full flex justify-between items-center px-6 py-3 font-semibold max-w-[100vw] ${
        isScrolled ? 'backdrop-blur-md' : ''
      }`}
      initial={{ y: -100 }} // Начальное положение (за пределами видимой области сверху)
      animate={{ y: 0 }} // Конечное положение (опускается вниз)
      transition={{ duration: 0.5, ease: 'easeOut' }} // Плавная анимация
    >
      <div className="flex items-center ">
        <div className="flex font-bold items-center">
          <Image alt="logo image" src={'/logo.PNG'} width={50} height={50} /> <p>APIS</p>
        </div>
      </div>
      <nav className="hidden md:flex space-x-6 items-center">
        <a href="#about" className="font-semibold hover:text-[#e4e8ffcc]">
          About
        </a>
        <a href="#howitworks" className="font-semibold hover:text-[#e4e8ffcc]">
          How it works
        </a>
        <a href="#benefits" className="font-semibold hover:text-[#e4e8ffcc]">
          Tokenomics
        </a>
        <a href="#roadmap" className="font-semibold hover:text-[#e4e8ffcc]">
          Roadmap
        </a>
      </nav>
      <div className="flex gap-3 items-center">
        <a href="#getstarted" className="px-4 py-3 bg-[#485390CC] text-white rounded-xl hover:bg-[#596bd0cc] ease-linear duration-100 transition-all">
          Buy on Uniswap
        </a>
      </div>
      {/* Mobile menu */}
      <div className="md:hidden">
        <button className="text-2xl text-[#485390CC]">☰</button>
      </div>
    </motion.header>
  );
};

export default Navbar;