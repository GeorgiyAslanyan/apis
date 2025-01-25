import { motion } from 'framer-motion';

const AnimatedText = ({ text }) => {
  const words = text.split(' ');

  return (
    <motion.div 
      className='flex flex-wrap max-w-full' 
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }} // Анимация сработает только один раз, когда элемент будет виден на 50%
    >
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          style={{ whiteSpace: 'nowrap' }} // Предотвращаем перенос внутри слова
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: wordIndex * 0.1, duration: 0.1 }} // Настройте задержку и длительность анимации
        >
          {word}{'\u00A0'} {/* Добавляем пробел после каждого слова */}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;