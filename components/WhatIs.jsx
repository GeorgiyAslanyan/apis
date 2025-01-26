'use client'; // Убедитесь, что компонент выполняется на стороне клиента

import React from 'react';
import { motion } from 'framer-motion';
import TypedTextOne from './TypedTextOnce';

const WhatIs = () => {
  return (
    <section className="py-16 bg-white" id="whatis">
      {/* Анимация для заголовка */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8"><TypedTextOne text={"What is apis?"}/></h2>
      

      {/* Анимация для текста */}
      <motion.p
        className="text-lg max-w-4xl mx-auto text-center px-4"
        initial={{ opacity: 0, y: 20 }} // Начальное состояние (невидим и смещен вниз)
        whileInView={{ opacity: 1, y: 0 }} // Анимация при появлении в области видимости
        viewport={{ once: true }} // Анимация сработает только один раз
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }} // Задержка для текста
      >
        apis (apisoard) is a decentralized protocol based on Telegram that allows businesses to advertise
        their services while providing users with the opportunity to earn by using their digital assets on
        advertising platforms.
      </motion.p>
    </section>
  );
};

export default WhatIs;