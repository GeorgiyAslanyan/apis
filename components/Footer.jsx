import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='grid grid-cols-6 px-2 py-5 gap-5 w-full'>
            <div className='col-span-2 pl-10'>
                <div className='flex gap-3 items-center'>
                    <Image alt='logo image' src={'/logo.PNG'} width={50} height={50} />
                    <p>apis</p>
                    
                </div>
                <p className='text-xs'>The APIS protocol provides not only access to trading alerts but also additional benefits through its profit-sharing system, 
                        allowing users to generate passive income.</p>
            </div>
            <div className='flex flex-col col-span-1 gap-4'>
                <p className='text-teal-500 font-bold text-xl'>About</p>
                <a href="http://" target="_blank" rel="noopener noreferrer">Documentation</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Disclaimer</a>
            </div>
            <div className='flex flex-col col-span-1 gap-4'>
                <p className='text-teal-500 font-bold text-xl'>Get started</p>
                <a href="http://" target="_blank" rel="noopener noreferrer">Support</a>
            </div>
            <div className='flex flex-col col-span-1 gap-4'>
                <p className='text-teal-500 font-bold text-xl'>Community</p>
                <a href="http://" target="_blank" rel="noopener noreferrer">x | Twitter</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Telegram</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Medium</a>
            </div>
            <div className='flex flex-col col-span-1 gap-4 pr-10'>
                <a href="http://" target="_blank" rel="noopener noreferrer" 
                className='w-fit border-white px-5 py-2 border hover:bg-white hover:text-black transition-all ease-linear duration-100'>Contact Us</a>
            </div>
        </div>
    )
}

export default Footer