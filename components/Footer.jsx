import Image from 'next/image'
import React, { useEffect, useState } from 'react'
async function getData() {
  const query = `https://jbrgprzz.api.sanity.io/v1/data/query/production?query=*%5B_type+%3D%3D+%27Contacts%27%5D%5B0%5D`;
  const data = await fetch(query, {next: {revalidate: 60}}).then(res => res.json());
      return data.result
}
const Footer = () => {
      const [data, setData] = useState(null); // Добавили состояние для данных
  
  useEffect(() => {
        // Загружаем данные при монтировании компонента
        const fetchData = async () => {
          const result = await getData();
          setData(result);
        };
        fetchData();
      }, []);
    return (
        <footer className="p-4 sm:p-8 rounded-xl flex flex-col gap-4 z-[2]">
          <div className='flex justify-center items-center space-x-6 z-[2]'>
            <a className='opacity-50 text-wrap text-xs' href={data?.Disclaimer} target="_blank" rel="noopener noreferrer">Disclaimer: Investing in tokens such as $APIS carries inherent risks and may result in financial loss. The information provided here is for educational and informational purposes only and should not be considered as financial or investment advice. Before investing, it is important to conduct your own research, evaluate your financial situation, and seek advice from a licensed financial advisor. The value of $APIS can be volatile and subject to market fluctuations, and there is no guarantee of profit or return on investment. The token's value may be impacted by various factors, including market trends, government regulations, and technological advancements. The team behind $APIS makes no warranties or representations regarding the accuracy, reliability, or completeness of the information provided here. Users should exercise caution and diligence when trading or investing in cryptocurrencies and tokens.</a>
        </div>
        <div className="flex justify-end items-center space-x-6 z-[2]">
        <p className='opacity-50 text-sm'>All rights reserved // APIS © 2025</p>
        </div>
        
      </footer>
    )
}

export default Footer