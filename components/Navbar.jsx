import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div className='fixed z-50 backdrop-blur-lg min-h-14 px-5 py-3 w-full items-center flex gap-3 justify-between'>
            <div className='flex gap-3 items-center'>
                <Image alt='logo image' src={'/logo.PNG'} width={50} height={50}/>
                <p>apis</p>
            </div>
            <div className='flex gap-5 '>
                <a href="#">home</a>
                <a href="#about">about</a>
                <a href="#how">how it works</a>
                <a href="#tokenomics">tokenomics</a>
                <a href="#roadmap">roadmap</a>
            </div>
            <a href="http://" target="_blank" rel="noopener noreferrer" className='border-white px-5 py-2 border'>
                Buy on Uniswap</a>
        </div>
    )
}

export default Navbar