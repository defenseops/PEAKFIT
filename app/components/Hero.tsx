"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const rightTopY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const rightBottomY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  const springImg = useSpring(imgY, { stiffness: 80, damping: 20 });

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-white"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: springImg, scale }}
      >
        <Image
          src="/images/magnific_fitness-gym-background-im_2884667731.jpg"
          alt="Gym background"
          fill
          className="object-cover"
          style={{ objectPosition: "65% center" }}
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/88 via-white/40 to-transparent" />
      </motion.div>

      {/* Floating accent shapes */}
      <motion.div
        className="absolute top-32 right-20 w-64 h-64 bg-[#c8ff00]/20 rounded-full blur-3xl z-0"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-40 w-40 h-40 bg-[#c8ff00]/30 rounded-full blur-2xl z-0"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full"
        style={{ y: textY, opacity }}
      >
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#c8ff00] text-black text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest"
          >
            <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" />
            Новый уровень тренировок
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight text-black mb-6"
          >
            ПРЕ<br />
            ВЗО<br />
            <span className="text-gradient">ЙДИ</span><br />
            СЕБЯ
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg text-gray-600 mb-10 max-w-md leading-relaxed"
          >
            Профессиональные тренировки, современное оборудование и лучшие тренеры города — всё для твоего результата.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#запись"
              className="group flex items-center gap-2 bg-black text-white font-bold px-8 py-4 rounded-full hover:bg-[#c8ff00] hover:text-black transition-all duration-300 text-sm uppercase tracking-wide"
            >
              Начать сейчас
              <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
            </a>
            <button className="group flex items-center gap-3 text-black font-semibold text-sm">
              <span className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                <Play size={14} fill="currentColor" />
              </span>
              Смотреть видео
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-14 flex gap-10"
          >
            {[
              { num: "500+", label: "Участников" },
              { num: "12", label: "Тренеров" },
              { num: "8", label: "Лет опыта" },
            ].map(({ num, label }) => (
              <div key={label}>
                <div className="text-3xl font-black text-black">{num}</div>
                <div className="text-xs text-gray-500 font-medium mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{ opacity }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs text-gray-400 font-medium tracking-widest uppercase">Скроллить</span>
        <div className="w-px h-12 bg-gradient-to-b from-gray-300 to-transparent" />
      </motion.div>

      {/* Right side images collage */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:flex flex-col overflow-hidden z-0">
        <motion.div className="flex-1 relative" style={{ y: rightTopY }}>
          <Image
            src="/images/magnific_athletic-woman-midworkout_2884717819.jpg"
            alt="Athlete"
            fill
            className="object-cover"
          />
        </motion.div>
        <motion.div className="flex-1 relative" style={{ y: rightBottomY }}>
          <Image
            src="/images/magnific_female-athlete-training-i_2884717807.jpg"
            alt="Training"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
