'use client'
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import TypedTextOne from './TypedTextOnce';

const Benefits = () => {
  // Анимация для появления блоков
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Задержки для каждого блока
  const blockDelays = [0, 0.2, 0.4, 0.6]; // Задержки в секундах

  return (
    <section className="py-16 bg-white" id="benefits">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8"><TypedTextOne text={"Tokenomics"}/></h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          {
            title: 'DEX Liquidity',
            description:
              '90%',
          },
          {
            title: 'Development',
            description:
              '4%',
          },
          {
            title: 'Marketing ',
            description:
              '4%',
          },
          {
            title: 'Team',
            description:
              '2%',
          },
        ].map((block, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 p-8 rounded-xl text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true }} // Анимация сработает только один раз
            transition={{duration:0.6,  delay: index * 0.2 }} // Добавляем задержку для каждого блока
          >
            <h3 className="text-2xl font-semibold mb-4">{block.title}</h3>
            <p className='text-2xl text-teal-500'>{block.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;