'use client'; // Убедитесь, что компонент выполняется на стороне клиента

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import Image from 'next/image';

async function getData() {
  const query = `https://jbrgprzz.api.sanity.io/v1/data/query/production?query=*%5B_type+%3D%3D+%27hero%27%5D%5B0%5D`;
  const data = await fetch(query, {next: {revalidate: 60}}).then(res => res.json());
      return data.result
}

const Hero = () => {
    const [data, setData] = useState(null); // Добавили состояние для данных
  const [isModalOpen, setIsModalOpen] = useState(false)
  useEffect(() => {
      // Загружаем данные при монтировании компонента
      const fetchData = async () => {
        const result = await getData();
        setData(result);
      };
      fetchData();
    }, []);

  return (
    <motion.section
      className="pt-[70px] m-0 sm:m-6 z-[2]"
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
        <a href={data?.FirstButton} className="px-4 py-3 bg-[#485390CC] text-white rounded-xl hover:bg-[#596bd0cc] ease-linear duration-100 transition-all">
        Documentation
        </a>
        <button onClick={() => setIsModalOpen(true)} className="px-4 py-3 bg-[#485390CC] text-white rounded-xl hover:bg-[#596bd0cc] ease-linear duration-100 transition-all">
        Start Earning
        </button>
      </div>
      <div className='grid grid-cols-3 gap-5 sm:gap-20 items-center justify-center w-fit  z-[2]'>
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
          <p className='font-medium opacity-50 text-sm sm:text-[22px]'>{data?.FirstTable}</p>
          <p className='font-semibold text-sm sm:text-2xl min-h-10'>Initial Balance</p>
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
          <p className='font-medium opacity-50 text-sm sm:text-[22px]'>{data?.SecondTable}</p>
          <p className='font-semibold text-sm sm:text-2xl min-h-10'>Percentage Change</p>
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
          <p className='font-medium opacity-50 text-sm sm:text-[22px]'>{data?.ThirdTable}</p>
          <p className='font-semibold text-sm sm:text-2xl min-h-10'>Current Balance</p>
        </motion.div>
      </div>
      </div>
      {isModalOpen && <div onClick={() => setIsModalOpen(false)} className='fixed top-0 left-0 w-full h-full flex flex-col z-[3] items-center justify-center backdrop-blur-lg'>
            <div className='px-11 py-7 rounded-xl bg-[#00000080] font-semibold text-lg relative'>
              <p>Coming soon //</p>
              <button className='absolute top-2 right-2 rounded-full min-h-5 min-w-5 leading-none flex items-center justify-center bg-[#485390CC] text-white hover:bg-[#596bd0cc]'>-</button>
            </div>
      </div>}
    </motion.section>
  );
};

export default Hero;