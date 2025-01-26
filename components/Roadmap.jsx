'use client'; // Убедитесь, что компонент выполняется на стороне клиента

import React from 'react';
import { motion } from 'framer-motion';
import TypedTextOne from './TypedTextOnce';

const Roadmap = () => {
  return (
    <section className="py-16 px-4 rounded-xl bg-gray-50" id="roadmap">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8"><TypedTextOne text={"Roadmap"}/></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
        {[
          {
            title: 'Phase I',
            description: 'Q1 2025: Foundation',
          },
          {
            title: 'Phase II',
            description: 'Q2 2025: Development & Partnerships',
          },
          {
            title: 'Phase III',
            description: 'Q3 2025: Launching of a New Era',
          },
          {
            title: 'Phase IV',
            description: 'Q4 2025: Expanding Features',
          },
          {
            title: 'Phase V',
            description: 'Q1 2026: Completion Monetization',
          },
        ].map((phase, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, scale: 0.5 }} // Начальное состояние (невидим и уменьшен)
            whileInView={{ opacity: 1, scale: 1 }} // Анимация при появлении в области видимости
            viewport={{ once: true }} // Анимация сработает только один раз
            transition={{ 
              duration: 0.6, 
              delay: index * 0.3, // Задержка для каждого блока
              type: "spring", // Пружинный эффект
              stiffness: 100, // Жесткость пружины
              damping: 10, // Затухание
            }}
          >
            <h3 className="font-semibold text-xl mb-4">{phase.title}</h3>
            <p>{phase.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;