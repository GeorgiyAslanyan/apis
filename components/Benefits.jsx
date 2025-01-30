'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import TypedTextOne from './TypedTextOnce';

async function getData() {
  const query = `https://jbrgprzz.api.sanity.io/v1/data/query/production?query=*%5B_type+%3D%3D+%27tokenomics%27%5D%5B0%5D`;
  const data = await fetch(query, {next: {revalidate: 60}}).then(res => res.json());
      return data.result
}

const Benefits = () => {
  const [data, setData] = useState(null); // Добавили состояние для данных
 
  useEffect(() => {
        // Загружаем данные при монтировании компонента
        const fetchData = async () => {
          const result = await getData();
          setData(result);
        };
        fetchData();
      }, []);
  
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
      <div className='flex flex-col sm:flex-row  items-center gap-4 my-20 z-[2]'>
        <p className='font-semibold opacity-50 text-2xl'>Contract Address:</p>
        <p style={{overflowWrap: "anywhere"}} className='font-medium text-2xl'>{data?.ContractAdress}</p>
        </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-20 items-center justify-center w-fit z-[2]'>
        <div className='flex flex-col items-center gap-4 z-[2] '>
        <p className='font-semibold text-2xl'>Total Supply</p>
        <p className='font-medium opacity-50 text-2xl'>{data?.TotalSupply}</p>
        </div>
        <div className='flex flex-col items-center gap-4 z-[2] '>
        <p className='font-semibold text-2xl'>Initial Liquidity </p>
        <p className='font-medium opacity-50 text-2xl'>{data?.InitialLiquidity}</p>
        </div>
        <div className='flex flex-col items-center gap-4 z-[2] '>
          <p className='font-semibold text-2xl'>Tax</p>
          <p className='font-medium opacity-50 text-2xl'>{data?.Tax}</p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;