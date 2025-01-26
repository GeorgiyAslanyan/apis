'use client'; // Убедитесь, что компонент выполняется на стороне клиента

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

const Hero = () => {
  return (
    <motion.section
      className="pt-[70px] m-6"
      id="whatis"
      style={{ minHeight: 'calc(100vh - 70px)' }}
      initial={{ opacity: 0 }} // Начальное состояние (невидим)
      animate={{ opacity: 1 }} // Конечное состояние (полностью видим)
      transition={{ duration: 1, ease: 'easeInOut' }} // Плавная анимация
    >
      <div
        className="bg-zinc-100 text-center rounded-xl flex flex-col items-center justify-center"
        style={{ height: 'calc(100vh - 124px)' }}
      >
        <h1 className="text-4xl sm:text-5xl font-semibold mb-6 min-h-[65px]">
          <AnimatedText />
        </h1>
        <a
          href="#getstarted"
          className="px-6 py-3 bg-teal-500 text-white text-lg rounded-full hover:bg-teal-600"
        >
          Get Started
        </a>
      </div>
    </motion.section>
  );
};

export default Hero;