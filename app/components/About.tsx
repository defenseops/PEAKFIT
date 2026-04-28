"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Индивидуальные программы тренировок",
  "Современное оборудование премиум класса",
  "Групповые занятия и персональный тренинг",
  "Нутрициология и план питания",
  "Мобильное приложение для трекинга",
  "Сауна, душ и зона отдыха",
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-150px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section id="о нас" ref={containerRef} className="py-24 md:py-36 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Image side */}
          <div className="relative order-2 md:order-1">
            {/* Main photo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative rounded-3xl overflow-hidden aspect-[4/5]"
            >
              <motion.div style={{ y: imgY }} className="absolute inset-[-5%] w-[110%] h-[110%]">
                <Image
                  src="/images/magnific_athletic-woman-midworkout_2884727823.jpg"
                  alt="Training"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "75% 20%" }}
                />
              </motion.div>
              {/* Dark gradient bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Quote overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="absolute bottom-6 left-6 right-6"
              >
                <p className="text-white text-lg font-bold leading-snug">
                  "Каждая тренировка —<br />шаг к лучшей версии себя"
                </p>
              </motion.div>
            </motion.div>

            {/* Floating badge — 8 лет */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
              className="absolute -bottom-5 -right-3 md:-right-8 bg-[#c8ff00] text-black rounded-2xl px-6 py-4 shadow-2xl"
            >
              <div className="text-5xl font-black leading-none">8</div>
              <div className="text-xs font-black uppercase tracking-wider mt-1">Лет<br />опыта</div>
            </motion.div>

            {/* Accent line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -left-4 top-12 bottom-12 w-1 bg-[#c8ff00] rounded-full origin-top"
            />
          </div>

          {/* Text side */}
          <div className="order-1 md:order-2">
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-[#c8ff00] bg-black text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 inline-block"
            >
              О нас
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-black leading-tight mb-6"
            >
              Место где рождаются{" "}
              <span className="text-gradient">чемпионы</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-500 leading-relaxed mb-8 text-base"
            >
              PEAKFIT — это не просто спортзал. Это экосистема для тех, кто хочет большего.
              Мы объединяем современные технологии, науку о спорте и живое сообщество единомышленников.
            </motion.p>

            <div className="grid grid-cols-1 gap-3 mb-10">
              {features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + 0.07 * i }}
                  className="flex items-center gap-3 py-2 border-b border-gray-100 last:border-0"
                >
                  <CheckCircle2 size={17} className="text-[#c8ff00] fill-[#c8ff00] stroke-black flex-shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#услуги"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="inline-flex items-center gap-3 bg-black text-white font-bold px-8 py-4 rounded-full hover:bg-[#c8ff00] hover:text-black transition-all duration-300 text-sm uppercase tracking-wide"
            >
              Наши услуги →
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
