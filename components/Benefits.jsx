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
    <section className="py-16  flex flex-col justify-center items-center" id="benefits">
      <h2 className="text-3xl sm:text-5xl font-semibold text-center flex z-[2] "><TypedTextOne text={"Tokenomics //"}/></h2>
      <div className='flex  items-center gap-4 my-20 z-[2]'>
        <p className='font-semibold opacity-50 text-2xl'>Contract Address:</p>
        <p className='font-medium text-2xl'>0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2</p>
        </div>
      <div className='grid grid-cols-3 gap-20 items-center justify-center w-fit z-[2]'>
        <div className='flex flex-col items-center gap-4 z-[2] '>
        <p className='font-semibold text-2xl'>Total Supply</p>
        <p className='font-medium opacity-50 text-2xl'>100,000,000</p>
        </div>
        <div className='flex flex-col items-center gap-4 z-[2] '>
        <p className='font-semibold text-2xl'>Initial Liquidity </p>
        <p className='font-medium opacity-50 text-2xl'>2 ETH</p>
        </div>
        <div className='flex flex-col items-center gap-4 z-[2] '>
          <p className='font-semibold text-2xl'>Tax</p>
          <p className='font-medium opacity-50 text-2xl'>5% Buy / 5 % Sell</p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;