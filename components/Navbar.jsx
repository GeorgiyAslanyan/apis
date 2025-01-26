'use client'; // Убедитесь, что компонент выполняется на стороне клиента

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.header
      className="fixed top-0 z-[100] w-full flex justify-between items-center px-6 py-3 bg-white font-semibold"
      initial={{ y: -100 }} // Начальное положение (за пределами видимой области сверху)
      animate={{ y: 0 }} // Конечное положение (опускается вниз)
      transition={{ duration: 0.5, ease: 'easeOut' }} // Плавная анимация
    >
      <div className="flex items-center space-x-2">
        <div className="flex gap-5 text-2xl font-bold items-center">
          <Image alt="logo image" src={'/logo.PNG'} width={50} height={50} /> <p>APIS</p>
        </div>
      </div>
      <nav className="hidden md:flex space-x-6 items-center">
        <a href="#whatis" className="text-lg font-semibold hover:text-teal-500">
          What is apis?
        </a>
        <a href="#howitworks" className="text-lg font-semibold hover:text-teal-500">
          How it works?
        </a>
        <a href="#benefits" className="text-lg font-semibold hover:text-teal-500">
          Tokenomics
        </a>
        <a href="#roadmap" className="text-lg font-semibold hover:text-teal-500">
          Roadmap
        </a>
        <a href="#about" className="text-lg font-semibold hover:text-teal-500">
          About
        </a>
      </nav>
      <div className="flex gap-3 items-center">
        <a href="#getstarted" className="px-4 py-3 bg-zinc-100 rounded-full">
          Read docs
        </a>
        <a href="#getstarted" className="px-4 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600">
          Get Started
        </a>
      </div>
      {/* Mobile menu */}
      <div className="md:hidden">
        <button className="text-2xl text-teal-500">☰</button>
      </div>
    </motion.header>
  );
};

export default Navbar;