"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Share2, Star } from "lucide-react";

const trainers = [
  {
    name: "Алина Кравцова",
    role: "Силовой тренинг",
    exp: "7 лет",
    rating: 5.0,
    img: "/images/magnific_female-athlete-training-i_2884727863.jpg",
    objPos: "85% center",
    tags: ["Пауэрлифтинг", "Масса", "Рельеф"],
  },
  {
    name: "Карина Нурова",
    role: "HIIT & Кардио",
    exp: "5 лет",
    rating: 4.9,
    img: "/images/magnific_athletic-woman-midworkout_2884717845.jpg",
    objPos: "95% center",
    tags: ["Кардио", "Жиросжигание", "Выносливость"],
  },
  {
    name: "Диана Сейткали",
    role: "Функциональный тренинг",
    exp: "6 лет",
    rating: 5.0,
    img: "/images/magnific_athletic-woman-training-i_2884727839.jpg",
    objPos: "center",
    tags: ["Функционал", "Кросстренинг", "Растяжка"],
  },
];

export default function Trainers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="тренеры" ref={containerRef} className="py-24 md:py-36 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[#c8ff00] bg-black text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 inline-block"
          >
            Команда
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-black"
          >
            Наши <span className="text-gradient">тренеры</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map(({ name, role, exp, rating, img, objPos, tags }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * i }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={img}
                  alt={name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ objectPosition: objPos }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Instagram icon */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute top-4 right-4 w-9 h-9 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Share2 size={15} className="text-white" />
                </motion.div>

                {/* Info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {tags.map((tag) => (
                      <span key={tag} className="text-xs bg-white/15 backdrop-blur-sm text-white px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-black text-white text-xl mb-0.5">{name}</h3>
                  <p className="text-[#c8ff00] text-sm font-semibold mb-3">{role}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star size={13} fill="#c8ff00" className="text-[#c8ff00]" />
                      <span className="text-white text-sm font-bold">{rating}</span>
                    </div>
                    <span className="text-gray-400 text-xs">{exp} опыта</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
