import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const Cover = ({ onOpen }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Dummy target date (1 month from now)
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/yusup.jpg")',
        }}
      >
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Top Left Floral Ornament */}
      <motion.img
        src="/images/floral_corner_tl.png"
        alt="Floral Ornament"
        className="absolute top-0 left-0 w-64 md:w-80 opacity-90 pointer-events-none mix-blend-multiply z-10"
        initial={{ y: -20, x: -20, opacity: 0 }}
        animate={{ y: [0, -10, 0], x: 0, opacity: 0.9 }}
        transition={{
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 1 }
        }}
      />

      {/* Bottom Right Floral Ornament */}
      <motion.img
        src="/images/floral_corner_br.png"
        alt="Floral Ornament"
        className="absolute bottom-0 right-0 w-64 md:w-80 opacity-90 pointer-events-none mix-blend-multiply z-10"
        initial={{ y: 20, x: 20, opacity: 0 }}
        animate={{ y: [0, 10, 0], x: 0, opacity: 0.9 }}
        transition={{
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
          opacity: { duration: 1 }
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 w-full max-w-md mx-auto flex flex-col items-center h-full py-12 justify-between">

        <FadeIn delay={0.2} direction="down">
          <p className="text-sm tracking-[0.3em] uppercase mb-4">The Wedding Of</p>
        </FadeIn>

        <FadeIn delay={0.4} className="my-auto">
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Yusuf & Intan</h1>
          <p className="font-sans text-lg md:text-xl tracking-widest font-light">
            28 . 08 . 2026
          </p>
        </FadeIn>

        <div className="w-full">
          <FadeIn delay={0.6}>
            {/* Countdown */}
            <div className="flex justify-center gap-4 mb-10">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30 mb-2">
                    <span className="font-serif text-2xl md:text-3xl">{value}</span>
                  </div>
                  <span className="text-xs tracking-widest uppercase">{unit}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.8} direction="up">
            <button
              onClick={onOpen}
              className="px-8 py-3 bg-white text-gray-900 font-sans tracking-widest text-sm uppercase rounded-full hover:bg-gray-100 transition-colors shadow-xl"
            >
              Buka Undangan
            </button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Cover;
