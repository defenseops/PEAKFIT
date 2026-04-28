"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function CountUp({ to, duration = 2 }: { to: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = to / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, to, duration]);

  return <span ref={ref}>{count}</span>;
}

const stats = [
  { value: 500, suffix: "+", label: "Активных членов", desc: "Тренируются каждую неделю" },
  { value: 12, suffix: "", label: "Профи-тренеров", desc: "С международными сертификатами" },
  { value: 98, suffix: "%", label: "Довольных клиентов", desc: "Рекомендуют нас друзьям" },
  { value: 8, suffix: "", label: "Лет на рынке", desc: "Постоянно развиваемся" },
];

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="о нас"
      ref={containerRef}
      className="relative bg-black text-white py-24 md:py-32 overflow-hidden"
    >
      {/* Accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-[#c8ff00] to-transparent" />
      <motion.div
        className="absolute -top-40 left-1/4 w-96 h-96 bg-[#c8ff00]/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#c8ff00] text-xs font-bold tracking-widest uppercase mb-4 block">
            Наши достижения
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
            Цифры говорят<br />
            <span className="text-[#c8ff00]">сами за себя</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map(({ value, suffix, label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="group text-center p-6 rounded-2xl border border-white/5 hover:border-[#c8ff00]/30 hover:bg-white/5 transition-all duration-500"
            >
              <div className="text-5xl md:text-6xl font-black text-[#c8ff00] mb-2">
                <CountUp to={value} />
                {suffix}
              </div>
              <div className="text-white font-bold text-sm mb-1">{label}</div>
              <div className="text-gray-500 text-xs">{desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
