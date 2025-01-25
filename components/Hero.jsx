import React from 'react'

const Hero = () => {
    return (
        <div className='min-h-[100vh] pt-[100px] px-[100px]'>
            <div className='min-h-[60vh] grid-cols-2 grid'>
                <div className='w-full h-full flex flex-col gap-3 items-start justify-center'>
                    <h1 className='text-[40px]'>Every trade count</h1>
                    <div className='flex gap-7'>
                        <a href="http://" target="_blank" rel="noopener noreferrer" 
                        className='border-white px-5 py-2 border hover:bg-white hover:text-black transition-all ease-linear duration-100'>Documentation</a>
                        <a href="http://" target="_blank" rel="noopener noreferrer" 
                        className='border-white px-5 py-2 border hover:bg-white hover:text-black transition-all ease-linear duration-100'>Go to app</a>
                    </div>
                </div>
                <div className='w-full h-full flex items-center justify-center'>
                    <video className='max-h-[50vh]' controls={false} preload="auto" autoPlay muted loop>
                        <source src="/hero/hero.webm" type="video/webm" />
                        Ваш браузер не поддерживает тег video.
                    </video>
                </div>
            </div>
            <div className='w-full flex gap-7 items-center justify-center'>
                <div className='flex flex-col items-center gap-2'>
                    <p className='text-teal-500 text-xl'>67</p>
                    <p>metrics 1</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <p className='text-teal-500 text-xl'>76%</p>
                    <p>metrics 2</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <p className='text-teal-500 text-xl'>$26,765</p>
                    <p>metrics 3</p>
                </div>
            </div>
        </div>
    )
}

export default Hero