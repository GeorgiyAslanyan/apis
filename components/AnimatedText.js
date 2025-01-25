import { motion } from 'framer-motion';
import { useRef } from 'react';

const AnimatedText = ({ text }) => {
  const words = text.split(' ');
  const scrollRef = useRef(null)

  return (
    <motion.div ref={scrollRef}
      className='flex flex-wrap max-w-full' 
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: {}, // Начальное состояние (невидимо)
        visible: { // Состояние, когда элемент виден
          transition: {
            staggerChildren: 0.1, // Задержка между анимацией каждого слова
          },
        },
      }}
      viewport={{ once: false, amount: 0.8}} // Анимация сработает только один раз, когда элемент будет виден на 50%
    >
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          style={{ whiteSpace: 'nowrap' }} // Предотвращаем перенос внутри слова
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8}}
          transition={{ delay: wordIndex * 0.1, duration: 0.1 }} // Настройте задержку и длительность анимации
        >
          {word}{'\u00A0'} {/* Добавляем пробел после каждого слова */}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;