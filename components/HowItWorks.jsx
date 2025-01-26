'use client'
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import TypedTextOne from './TypedTextOnce';

const HowItWorks = () => {
  // Анимация для появления блоков
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 bg-gray-50 rounded-xl" id="howitworks">
        <h2  className="text-3xl sm:text-4xl font-bold text-center mb-8"><TypedTextOne text={"How it works?"}/></h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {/* Первый блок */}
        <motion.div
          className="bg-white p-8 shadow-lg rounded-xl w-full md:w-96 text-center mb-6 md:mb-0"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Анимация сработает только один раз
        >
          <h3 className="text-2xl font-semibold mb-4">Stack</h3>
          <p className="mb-4">Built using Rust, Python, TypeScript, and Deno, the protocol integrates with the ByBIT exchange, enabling futures trading and providing real-time trading reports through a Telegram bot.</p>
          <a href="#try" className="text-teal-500 font-semibold">Try Now</a>
        </motion.div>

        {/* Второй блок */}
        <motion.div
          className="bg-white p-8 shadow-lg rounded-xl w-full md:w-96 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5  }} // Анимация сработает только один раз
        >
          <h3 className="text-2xl font-semibold mb-4">Mission</h3>
          <p className="mb-4">APIS introduces a collective profit model, where the income generated by the trading bot is distributed among project participants, offering opportunities for passive income.</p>
          <a href="#start" className="text-teal-500 font-semibold">Start Earning</a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;