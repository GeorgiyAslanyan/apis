'use client'; // Убедитесь, что компонент выполняется на стороне клиента

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import Image from 'next/image';

const Hero = () => {
  return (
    <motion.section
      className="pt-[70px] m-6 z-[2]"
      id="whatis"
      style={{ minHeight: 'calc(100vh - 70px)' }}
      initial={{ opacity: 0 }} // Начальное состояние (невидим)
      animate={{ opacity: 1 }} // Конечное состояние (полностью видим)
      transition={{ duration: 1, ease: 'easeInOut' }} // Плавная анимация
    >
      <div
        className="bg-gradient-to-b from-[#262E5850] via-[#262E5850] to-[#262E5800] text-center rounded-xl flex gap-9 flex-col items-center justify-center z-[2]"
        style={{ height: 'calc(100vh - 104px)' }}
      >
        <Image width={341} height={161} className='' alt="group" src="/hero/group.svg"/>
        <h1 className="text-4xl sm:text-5xl font-semibold min-h-[65px] z-[2]">
          <AnimatedText />
        </h1>
        <div className="grid grid-cols-2  items-center justify-center gap-9  z-[2]">
        <a href="#getstarted" className="px-4 py-3 bg-[#485390CC] text-white rounded-xl hover:bg-[#596bd0cc] ease-linear duration-100 transition-all">
        Documentation
        </a>
        <a href="#getstarted" className="px-4 py-3 bg-[#485390CC] text-white rounded-xl hover:bg-[#596bd0cc] ease-linear duration-100 transition-all">
        Start Earning
        </a>
      </div>
      <div className='grid grid-cols-3 gap-20 items-center justify-center w-fit  z-[2]'>
        <motion.div initial={{ opacity: 0, scale: 0.5 }} // Начальное состояние (невидим и уменьшен)
            whileInView={{ opacity: 1, scale: 1 }} // Анимация при появлении в области видимости
            viewport={{ once: true }} // Анимация сработает только один раз
            transition={{
              duration: 0.1,
              delay: 0 * 0.3, // Задержка для каждого блока
              type: "spring", // Пружинный эффект
              stiffness: 30, // Жесткость пружины
              damping: 10, // Затухание
            }} className='flex flex-col items-center gap-4'>
          <p className='font-medium opacity-50 text-[22px]'>$20,000.00</p>
          <p className='font-semibold text-2xl'>Initial Balance</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.5 }} // Начальное состояние (невидим и уменьшен)
            whileInView={{ opacity: 1, scale: 1 }} // Анимация при появлении в области видимости
            viewport={{ once: true }} // Анимация сработает только один раз
            transition={{
              duration: 0.1,
              delay: 1 * 0.3, // Задержка для каждого блока
              type: "spring", // Пружинный эффект
              stiffness: 30, // Жесткость пружины
              damping: 10, // Затухание
            }} className='flex flex-col items-center gap-4'>
          <p className='font-medium opacity-50 text-[22px]'>+45.77%</p>
          <p className='font-semibold text-2xl'>Percentage Change</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.5 }} // Начальное состояние (невидим и уменьшен)
            whileInView={{ opacity: 1, scale: 1 }} // Анимация при появлении в области видимости
            viewport={{ once: true }} // Анимация сработает только один раз
            transition={{
              duration: 0.1,
              delay: 2 * 0.3, // Задержка для каждого блока
              type: "spring", // Пружинный эффект
              stiffness: 30, // Жесткость пружины
              damping: 10, // Затухание
            }} className='flex flex-col items-center gap-4'>
          <p className='font-medium opacity-50 text-[22px]'>$29,153.32</p>
          <p className='font-semibold text-2xl'>Current Balance</p>
        </motion.div>
      </div>
      </div>
    </motion.section>
  );
};

export default Hero;