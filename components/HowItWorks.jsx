'use client'
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import TypedTextOne from './TypedTextOnce';

const HowItWorks = () => {


  return (
    <section className="py-16 items-center flex flex-col rounded-xl" id="howitworks">
      <h2 className="text-3xl sm:text-5xl font-semibold flex  z-[2] text-center mb-14"><TypedTextOne text={"How it works //"} /></h2>
      <motion.div className='flex z-[2]'
      initial={{ opacity: 0 }} // Начальное состояние (невидим)
      animate={{ opacity: 1 }} // Конечное состояние (полностью видим)
      transition={{ duration: 1, ease: 'easeInOut' }}>
        <Image width={887} height={206} src="/how/how.svg" className='flex z-[2]' alt="how it works" />
      </motion.div>
    </section>
  );
};

export default HowItWorks;