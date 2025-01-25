import React from 'react'

const About = () => {
    return (
        <div id="about" className='flex flex-col gap-5 pt-[70px]'>
            <h2 className='text-2xl'>about APIS //</h2>
            <p className='ml-14'>APIS is an innovative protocol that combines advanced machine learning,
                artificial intelligence, and financial analysis technologies to create
                a highly efficient trading bot. Built using Rust, Python, TypeScript,
                and Deno, the protocol integrates with the ByBIT exchange, enabling futures
                trading and providing real-time trading reports through a Telegram bot.</p>
            <p className='ml-14 border p-2'><span className='text-xl'>MISSIONS</span><br /> <br />APIS introduces a collective profit model, where the income generated 
                by the trading bot is distributed among project participants, offering opportunities for 
                passive income.
            </p>
        </div>
    )
}

export default About