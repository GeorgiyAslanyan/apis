import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <footer className=" p-8 rounded-xl flex flex-col sm:flex-row justify-between">
          <div className='flex justify-center items-center space-x-6'>
          <p className='opacity-50'>Disclaimer</p>
        </div>
        <div className="flex justify-center items-center space-x-6">
        <p className='opacity-50'>All rights reserved // APIS © 2025</p>
        </div>
        
      </footer>
    )
}

export default Footer