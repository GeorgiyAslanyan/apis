'use client'
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const AnimatedText = () => {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Every trade counts //'],
      typeSpeed: 30,
      backSpeed: 30,
      backDelay: 4000, // Задержка перед стиранием текста (2 секунды)
      loop: true,
      showCursor: false,
    };

    const typed = new Typed(el.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el} />;
};

export default AnimatedText;