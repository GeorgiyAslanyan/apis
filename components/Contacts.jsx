import React from 'react'

const Contact = () => {
    return (
        <div id='contacts' className='flex flex-col items-center justify-center gap-5 my-10'>
            <h2 className='text-2xl'>join our community</h2>
            <div className='gap-7 flex text-black font-bold'>
                <a href="http://" target="_blank" rel="noopener noreferrer" className='rounded-full w-[50px] h-[50px] bg-teal-500 p-4 flex items-center justify-center'>
                    X
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer" className='rounded-full w-[50px] h-[50px] bg-teal-500 p-4 flex items-center justify-center'>
                    T
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer" className='rounded-full w-[50px] h-[50px] bg-teal-500 p-4 flex items-center justify-center'>
                    M
                </a>
            </div>
        </div>
    )
}

export default Contact