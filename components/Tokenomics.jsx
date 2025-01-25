import Image from 'next/image'
import React from 'react'

const Tokenomics = () => {
    return (
        <div id="tokenomics" className='flex flex-col gap-5 pt-[70px]'>
            <h2 className='text-2xl'>tokenomics //</h2>
            <Image alt='tokenomics' src="/tokenomics/tokenomics.svg" width="1280" height={720} className='px-10'/>
        </div>
    )
}

export default Tokenomics