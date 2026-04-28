"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const slides = [
  {
    img: "/images/magnific_female-athlete-training-i_2884727851.jpg",
    title: "СИЛА",
    subtitle: "Развивай своё тело",
    accent: "#c8ff00",
  },
  {
    img: "/images/magnific_athletic-woman-midworkout_2884717819.jpg",
    title: "СКОРОСТЬ",
    subtitle: "Превзойди свои пределы",
    accent: "#00d4ff",
  },
  {
    img: "/images/magnific_female-athlete-training-i_2884724888.jpg",
    title: "ФОРМА",
    subtitle: "Идеальный рельеф",
    accent: "#ff6b35",
  },
];

function Slide({
  img, title, subtitle, accent, index, scrollYProgress,
}: {
  img: string;
  title: string;
  subtitle: string;
  accent: string;
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const n = slides.length;
  const start = index / n;
  const end = (index + 1) / n;

  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.04, end - 0.04, end],
    [0, 1, 1, 0]
  );
  const scale = useTransform(scrollYProgress, [start, end], [1.06, 1.0]);
  const y = useTransform(scrollYProgress, [start, end], ["6%", "-6%"]);

  return (
    <motion.div className="absolute inset-0" style={{ opacity }}>
      <motion.div className="absolute inset-0" style={{ scale, y }}>
        <Image src={img} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <motion.div
          style={{ opacity, color: accent }}
          className="text-[18vw] font-black leading-none tracking-tighter select-none"
        >
          {title}
        </motion.div>
        <motion.p
          style={{ opacity }}
          className="text-white text-xl md:text-2xl font-light mt-4 tracking-widest uppercase"
        >
          {subtitle}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default function ScrollTransform() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative h-[180vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        {slides.map((slide, i) => (
          <Slide
            key={slide.title}
            {...slide}
            index={i}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
