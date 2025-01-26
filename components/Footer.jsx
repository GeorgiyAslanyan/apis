import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-100 p-8 rounded-xl mb-5 flex justify-between">
          <div className='flex justify-center items-center space-x-6'>
          <p>Apis © 2025</p>
          <p>Terms of use</p>
          <p>Privacy</p>
        </div>
        <div className="flex justify-center items-center space-x-6">
          <a href="#facebook" className="text-teal-600 hover:text-teal-700">X | Twitter</a>
          <a href="#twitter" className="text-teal-600 hover:text-teal-700">Telegram</a>
          <a href="#linkedin" className="text-teal-600 hover:text-teal-700">Medium</a>
        </div>
        
      </footer>
    )
}

export default Footer