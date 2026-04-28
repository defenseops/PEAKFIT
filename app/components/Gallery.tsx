"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const images = [
  { src: "/images/magnific_fitness-gym-background-im_2884667731.jpg", span: "col-span-2 row-span-2" },
  { src: "/images/magnific_athletic-woman-midworkout_2884717819.jpg", span: "" },
  { src: "/images/magnific_female-athlete-training-i_2884717807.jpg", span: "" },
  { src: "/images/magnific_fitness-gym-background-im_2884667746.jpg", span: "" },
  { src: "/images/magnific_fitness-gym-background-im_2884667757.jpg", span: "" },
  { src: "/images/magnific_athletic-woman-midworkout_2884724865.jpg", span: "col-span-2" },
  { src: "/images/magnific_female-athlete-training-i_2884724877.jpg", span: "" },
  { src: "/images/magnific_female-athlete-training-i_2884724888.jpg", span: "" },
];

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const leftY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const rightY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section id="галерея" ref={containerRef} className="py-24 md:py-36 bg-[#f8f8f6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[#c8ff00] bg-black text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 inline-block"
          >
            Галерея
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-black"
          >
            Наша <span className="text-gradient">атмосфера</span>
          </motion.h2>
        </div>

        {/* Mosaic grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]">
          {images.map(({ src, span }, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.07 * i }}
              style={{ y: i % 2 === 0 ? leftY : rightY }}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group ${span}`}
              onClick={() => setSelected(src)}
            >
              <Image src={src} alt="Gallery" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <ZoomIn size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-4xl w-full aspect-video rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={selected} alt="Full" fill className="object-cover" />
            </motion.div>
            <button
              className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              onClick={() => setSelected(null)}
            >
              <X size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
