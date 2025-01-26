'use client'; // Убедитесь, что компонент выполняется на стороне клиента

import React from 'react';
import { motion } from 'framer-motion';
import TypedTextOne from './TypedTextOnce';

const Roadmap = () => {
  return (
    <section className="py-16 px-4 rounded-xl bg-gray-50" id="roadmap">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8"><TypedTextOne text={"Roadmap"}/></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3">
        {[
          {
            title: 'Q1 2025 - Phase I',
            description1: 'Public Demonstration of Efficiency',
            description2: 'Launching a trading account on ByBIT with a $20,000 capital;',
            description3: 'Integration with the Telegram bot for publishing real-time trading signals;',
            description4: 'Demonstrating the bot’s effectiveness during one month of public trading.',
          },
          {
            title: 'Q2 2025 - Phase II',
            description1: 'Public Demonstration of Efficiency',
            description2: 'Launching a trading account on ByBIT with a $20,000 capital;',
            description3: 'Integration with the Telegram bot for publishing real-time trading signals;',
            description4: 'Demonstrating the bot’s effectiveness during one month of public trading.',
          },
          {
            title: 'Q3 2025 - Phase III',
            description1: 'Public Demonstration of Efficiency',
            description2: 'Launching a trading account on ByBIT with a $20,000 capital;',
            description3: 'Integration with the Telegram bot for publishing real-time trading signals;',
            description4: 'Demonstrating the bot’s effectiveness during one month of public trading.',
          },
          {
            title: 'Q4 2025 - Phase IV',
            description1: 'Public Demonstration of Efficiency',
            description2: 'Launching a trading account on ByBIT with a $20,000 capital;',
            description3: 'Integration with the Telegram bot for publishing real-time trading signals;',
            description4: 'Demonstrating the bot’s effectiveness during one month of public trading.',
          }
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
            <h3 className="font-bold text-xl mb-2">{phase.title}</h3>
            <p className='font-bold text-lg mb-2'>{phase.description1}</p>
            <p className='mb-1'>{phase.description2}</p>
            <p className='mb-1'>{phase.description3}</p>
            <p className='mb-1'>{phase.description4}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;