"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Dumbbell, Users, Zap, Heart, Trophy, Flame } from "lucide-react";

const services = [
  {
    icon: Dumbbell,
    title: "Силовые тренировки",
    desc: "Программы с железом для набора массы и развития силы под руководством сертифицированных тренеров.",
    img: "/images/magnific_athletic-woman-midworkout_2884724865.jpg",
    color: "#c8ff00",
  },
  {
    icon: Flame,
    title: "Кардио & HIIT",
    desc: "Высокоинтенсивные интервальные тренировки для сжигания жира и улучшения выносливости.",
    img: "/images/magnific_athletic-woman-training-i_2884724853.jpg",
    color: "#ff6b35",
  },
  {
    icon: Users,
    title: "Групповые классы",
    desc: "Зумба, йога, пилатес, кроссфит — более 30 классов в неделю для всех уровней подготовки.",
    img: "/images/magnific_female-athlete-training-i_2884724877.jpg",
    color: "#00d4ff",
  },
  {
    icon: Heart,
    title: "Персональный тренинг",
    desc: "Один на один с тренером. Программа, питание, поддержка и гарантированный результат.",
    img: "/images/magnific_female-athlete-training-i_2884724888.jpg",
    color: "#c8ff00",
  },
  {
    icon: Zap,
    title: "EMS-тренировки",
    desc: "Электромиостимуляция — 20 минут равны 2 часам обычной тренировки. Технологии будущего уже здесь.",
    img: "/images/magnific_athletic-woman-midworkout_2884727823.jpg",
    color: "#ff6b35",
  },
  {
    icon: Trophy,
    title: "Спортивная нутрициология",
    desc: "Составление плана питания от дипломированного нутрициолога с учётом ваших целей и образа жизни.",
    img: "/images/magnific_female-athlete-training-i_2884727851.jpg",
    color: "#00d4ff",
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="услуги" ref={containerRef} className="py-24 md:py-36 bg-[#f8f8f6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="text-[#c8ff00] bg-black text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 inline-block"
            >
              Услуги
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-black leading-tight"
            >
              Всё для твоего
              <br />
              <span className="text-gradient">прогресса</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-sm text-gray-500 text-sm leading-relaxed"
          >
            Шесть направлений тренировок под одной крышей. Начни с любого — двигайся к результату.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, img, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={img}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div
                  className="absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: color }}
                >
                  <Icon size={18} className="text-black" />
                </div>
              </div>

              {/* Text */}
              <div className="p-6">
                <h3 className="font-black text-xl text-black mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                <motion.span
                  className="text-xs font-bold uppercase tracking-wide text-black inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300"
                  style={{ color }}
                >
                  Подробнее <span>→</span>
                </motion.span>
              </div>

              {/* Hover accent line */}
              <div
                className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-b-3xl"
                style={{ backgroundColor: color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
