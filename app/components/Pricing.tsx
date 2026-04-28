"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Старт",
    price: "9 900",
    period: "/ месяц",
    desc: "Идеально для начинающих",
    features: [
      "Доступ в тренажёрный зал",
      "Групповые занятия (3 в нед.)",
      "Первичная консультация тренера",
      "Мобильное приложение",
    ],
    cta: "Выбрать план",
    highlight: false,
  },
  {
    name: "Про",
    price: "19 900",
    period: "/ месяц",
    desc: "Самый популярный выбор",
    features: [
      "Безлимитный доступ в зал",
      "Все групповые занятия",
      "4 персональных тренировки",
      "Программа питания",
      "Сауна и зона отдыха",
      "Приоритетная запись",
    ],
    cta: "Выбрать план",
    highlight: true,
  },
  {
    name: "Элита",
    price: "34 900",
    period: "/ месяц",
    desc: "Максимальный результат",
    features: [
      "Всё из плана «Про»",
      "8 персональных тренировок",
      "Ежемесячный чекап состава тела",
      "Персональный нутрициолог",
      "VIP-раздевалка",
      "Гостевые визиты (2 в мес.)",
    ],
    cta: "Выбрать план",
    highlight: false,
  },
];

export default function Pricing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="цены" ref={containerRef} className="py-24 md:py-36 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[#c8ff00] bg-black text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 inline-block"
          >
            Цены
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-black"
          >
            Прозрачные <span className="text-gradient">тарифы</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map(({ name, price, period, desc, features, cta, highlight }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative rounded-3xl p-8 flex flex-col ${
                highlight
                  ? "bg-black text-white shadow-2xl scale-105"
                  : "bg-[#f8f8f6] text-black"
              }`}
            >
              {highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-[#c8ff00] text-black text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wide">
                  <Zap size={12} fill="currentColor" />
                  Популярный
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-black text-lg mb-1 ${highlight ? "text-[#c8ff00]" : "text-black"}`}>
                  {name}
                </h3>
                <p className={`text-xs mb-4 ${highlight ? "text-gray-400" : "text-gray-500"}`}>{desc}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black">{price}</span>
                  <span className={`text-sm ${highlight ? "text-gray-400" : "text-gray-500"}`}>₸ {period}</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 flex-1 mb-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5">
                    <Check
                      size={16}
                      className={`mt-0.5 flex-shrink-0 ${highlight ? "text-[#c8ff00]" : "text-black"}`}
                    />
                    <span className={`text-sm ${highlight ? "text-gray-300" : "text-gray-700"}`}>{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#запись"
                className={`block text-center font-bold py-4 rounded-2xl text-sm uppercase tracking-wide transition-all duration-300 ${
                  highlight
                    ? "bg-[#c8ff00] text-black hover:bg-white"
                    : "bg-black text-white hover:bg-[#c8ff00] hover:text-black"
                }`}
              >
                {cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
