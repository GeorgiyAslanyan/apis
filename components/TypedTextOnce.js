import { motion } from 'framer-motion';
import { useRef } from 'react';

const TypedTextOne = ({ text }) => {
  const letters = Array.from(text);

  return (
    <motion.div
      className='flex flex-wrap justify-center max-w-full'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }} // Анимация сработает только один раз, когда элемент будет виден на 50%
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 5 }, // Начальное состояние
            visible: { opacity: 1, y: 0 }, // Конечное состояние
          }}
          transition={{ delay: index * 0.1, duration: 0.6 }} // Задержка и длительность анимации
        >
          {letter === ' ' ? '\u00A0' : letter} 
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TypedTextOne;