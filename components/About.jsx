'use client'
import React from 'react'
import TypedTextOne from './TypedTextOnce'
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="py-16 bg-white" id="about">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8"><TypedTextOne text={"About apis"}/></h2>
        {/* Анимация для текста */}
      <motion.div
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }} // Начальное состояние (невидим и смещен вниз)
        whileInView={{ opacity: 1, y: 0 }} // Анимация при появлении в области видимости
        viewport={{ once: true }} // Анимация сработает только один раз
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }} // Задержка для текста
      >
        <p className="mb-8">
        The APIS protocol offers not only access to trading alerts but also additional benefits through its profit-sharing system, enabling users to earn passive income.
        </p>

        {/* Анимация для кнопок */}
        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }} // Начальное состояние (невидим и смещен вниз)
          whileInView={{ opacity: 1, y: 0 }} // Анимация при появлении в области видимости
          viewport={{ once: true }} // Анимация сработает только один раз
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }} // Задержка для кнопок
        >
          <a href="#documentation" className="leading-1 content-center px-6 py-3 border-2 border-teal-500 text-teal-500 rounded-full hover:bg-teal-500 hover:text-white">
            Documentation
          </a>
          <a href="#contactus" className="leading-1 content-center px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600">
            Contact Us
          </a>
        </motion.div>
      </motion.div>
      </section>
    )
}

export default About