"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.0]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      id="запись"
      ref={containerRef}
      className="py-24 md:py-36 bg-black relative overflow-hidden"
    >
      {/* Background image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: imgScale, y: imgY }}
      >
        <Image
          src="/images/magnific_fitness-gym-background-im_2884667746.jpg"
          alt="CTA background"
          fill
          className="object-cover opacity-25"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 z-0" />

      {/* Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#c8ff00]/10 rounded-full blur-3xl z-0"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[#c8ff00] text-xs font-bold tracking-widest uppercase mb-6 inline-block"
        >
          Первый шаг за тобой
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-white leading-tight mb-6"
        >
          Начни своё
          <br />
          <span className="text-[#c8ff00]">преображение</span>
          <br />
          сегодня
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-400 text-lg mb-10 max-w-xl mx-auto"
        >
          Первое пробное занятие — бесплатно. Записывайся сейчас и получи персональный план тренировок в подарок.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <input
            type="tel"
            placeholder="Ваш номер телефона"
            className="w-full sm:w-72 bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-[#c8ff00] transition-colors"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-2 bg-[#c8ff00] text-black font-black px-8 py-4 rounded-full text-sm uppercase tracking-wide hover:bg-white transition-colors duration-300 whitespace-nowrap"
          >
            Записаться бесплатно
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-gray-600 text-xs"
        >
          Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности. Никакого спама.
        </motion.p>
      </div>
    </section>
  );
}
