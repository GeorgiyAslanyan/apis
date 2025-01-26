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
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8"><TypedTextOne text={"Benefits"}/></h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          {
            title: 'User - Partner / Client',
            description:
              'Impacts on healthy, completing advertising tasks. The performer is likely to become a client and due to positive experience and professional interaction.',
          },
          {
            title: 'MLM Principle',
            description:
              'Selection from performance structure as payment system and strong advertising outcomes.',
          },
          {
            title: 'High Level of Trust',
            description:
              'New talent performers visible comparing advertising tasks, connected to advertisers to their personal networks.',
          },
          {
            title: 'Visible to All',
            description:
              'Indicates that this advertisement is visible to all users, including Premium members.',
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
            <p>{block.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;