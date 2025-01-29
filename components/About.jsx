'use client'
import React from 'react'
import TypedTextOne from './TypedTextOnce'
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section className="py-16 px-4 flex flex-col z-[2]" id="about">

      <motion.div
        className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 "
        initial={{ opacity: 0, y: 20 }} // Начальное состояние (невидим и смещен вниз)
        whileInView={{ opacity: 1, y: 0 }} // Анимация при появлении в области видимости
        viewport={{ once: true }} // Анимация сработает только один раз
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }} // Задержка для текста
      >
        <div className='flex flex-col'>
          <div className="flex font-bold items-center z-[2]">
            <Image alt="logo image" className='-ml-2' src={'/logo.PNG'} width={61} height={49} /> <p className='text-xl'>APIS</p>
          </div>
          <p className='pt-3 pb-10 z-[2]'>The APIS protocol offers not only access to trading alerts but also additional benefits through its profit-sharing system, enabling users to earn passive income</p>
          <div className="flex z-[2] items-center justify-start gap-5 ">
            <a href="#getstarted" className="px-4 py-3 w-fit bg-[#485390CC] text-white rounded-xl hover:bg-[#596bd0cc] ease-linear duration-100 transition-all">
              Documentation
            </a>
            <a href="mailto:team@aiapis.trade" className="px-4 py-3 w-fit bg-[#485390CC] text-white rounded-xl hover:bg-[#596bd0cc] ease-linear duration-100 transition-all">
              Contact Us
            </a>
          </div>
        </div>
        <div className='bg-[#48539050] rounded-xl grid grid-cols-1 md:grid-cols-2 gap-5 p-7'>
          <div className='flex flex-col items-start justify-between gap-5 z-[2]'>
            <p className='font-medium text-2xl'>Join our community!</p>
            <div className='flex gap-4 justify-start'>
              <a className='rounded-full bg-[#48539080] w-14 h-14 flex items-center justify-center hover:bg-[#596bd0cc] ease-linear duration-100 transition-all' href="https://x.com/aiapistrade" target="_blank" rel="noopener noreferrer">
              <Image src="/about/x.svg" width={24} height={24} alt='x'/>
              </a>
              <a className='rounded-full bg-[#48539080] w-14 h-14 flex items-center justify-center hover:bg-[#596bd0cc] ease-linear duration-100 transition-all' href="https://t.me/apistrade" target="_blank" rel="noopener noreferrer">
              <Image src="/about/tg.svg" width={24} height={24} alt='tg'/>
              </a>
              <a className='rounded-full bg-[#48539080] w-14 h-14 flex items-center justify-center hover:bg-[#596bd0cc] ease-linear duration-100 transition-all' href="https://medium.com/@aiapistrade/apis-protocol-the-magic-wand-of-tomorrow-d4be1cf91e5b" target="_blank" rel="noopener noreferrer">
              <Image src="/about/medium.svg" width={24} height={24} alt='md'/>
              </a>
            </div>
          </div>
          <div className='flex items-center justify-center'>
          <Image src="/about/group.svg" width={643} height={358} alt='group'/>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About