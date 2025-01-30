'use client'; // Убедитесь, что компонент выполняется на стороне клиента

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

async function getData() {
  const query = `https://jbrgprzz.api.sanity.io/v1/data/query/production?query=*%5B_type+%3D%3D+%27Navbar%27%5D%5B0%5D`;
  const data = await fetch(query, {next: {revalidate: 60}}).then(res => res.json());
      return data.result
}


const Navbar = () => {
  const [data, setData] = useState(null); // Добавили состояние для данных
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    // Загружаем данные при монтировании компонента
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!data) {
    return <div>Loading...</div>; // Или другой индикатор загрузки
  }

  return (
    <motion.header
      className={`transition-all ease-linear duration-100 fixed top-0 z-[100] w-full flex flex-col justify-between items-center px-6 py-3 font-semibold max-w-[100vw] ${
        isScrolled ? 'backdrop-blur-md' : ''
      }`}
      initial={{ y: -100 }} // Начальное положение (за пределами видимой области сверху)
      animate={{ y: 0 }} // Конечное положение (опускается вниз)
      transition={{ duration: 0.5, ease: 'easeOut' }} // Плавная анимация
    >
      <div className='flex w-full justify-between items-center'>
      <div className="flex items-center ">
        <div className="flex font-bold items-center">
          <Image alt="logo image" src={'/logo.PNG'} width={50} height={50} /> <p className='hidden sm:flex'>APIS</p>
        </div>
      </div>
      <nav className="hidden md:flex space-x-6 items-center">
        <a href="#about" className="font-semibold hover:text-[#e4e8ffcc]">
          About
        </a>
        <a href="#howitworks" className="font-semibold hover:text-[#e4e8ffcc]">
          How it works
        </a>
        <a href="#benefits" className="font-semibold hover:text-[#e4e8ffcc]">
          Tokenomics
        </a>
        <a href="#roadmap" className="font-semibold hover:text-[#e4e8ffcc]">
          Roadmap
        </a>
      </nav>
      
      <div className="flex gap-3 items-center">
        <a href={data.ButtonLink && data.ButtonLink} className="px-4 py-1 md:py-3 bg-[#485390CC] text-white rounded-xl hover:bg-[#596bd0cc] ease-linear duration-100 transition-all">
          {data.Button && data.Button}
        </a>
      </div>
      {/* Mobile menu */}
      <div className="md:hidden">
        <button onClick={() => setIsNavOpen(!isNavOpen)} className={`${isNavOpen ? "rotate-90" : "rotate-0"} transition-all ease-linear duration-100 text-2xl text-white`}>☰</button>
      </div>
      </div>
      {isNavOpen && <nav className="flex flex-col w-full text-center md:hidden gap-6 pt-4 items-center">
        <a href="#about" onClick={() => setIsNavOpen(false)} className="font-semibold hover:text-[#e4e8ffcc]">
          About
        </a>
        <a href="#howitworks" onClick={() => setIsNavOpen(false)} className="font-semibold hover:text-[#e4e8ffcc]">
          How it works
        </a>
        <a href="#benefits" onClick={() => setIsNavOpen(false)} className="font-semibold hover:text-[#e4e8ffcc]">
          Tokenomics
        </a>
        <a href="#roadmap" onClick={() => setIsNavOpen(false)} className="font-semibold hover:text-[#e4e8ffcc]">
          Roadmap
        </a>
      </nav>}
    </motion.header>
  );
};

export default Navbar;