import Image from 'next/image'
import React from 'react'

const HowItWorks = () => {
    return (
        <div id="how" className='flex flex-col gap-5 pt-[70px]'>
            <h2 className='text-2xl'>how it works //</h2>
            <div className='flex w-full items-center justify-center'>
                <p className='text-2xl'>YOUR <span className='text-teal-500'>MONEY STAYS</span> WITH YOU</p>
            </div>
            <Image alt='how it works' src="/how/how.svg" width="1280" height={720} className='px-10'/>
        </div>
    )
}

export default HowItWorks