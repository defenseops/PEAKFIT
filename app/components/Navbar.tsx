"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = ["О нас", "Услуги", "Тренеры", "Галерея", "Цены", "Контакты"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 60));
    return unsub;
  }, [scrollY]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12"
      style={{}}
    >
      <motion.div
        className="absolute inset-0 bg-white/90 backdrop-blur-md border-b border-gray-100"
        style={{ opacity: bgOpacity }}
      />
      <div className="relative flex items-center justify-between h-16 md:h-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-[#c8ff00] rounded-full flex items-center justify-center">
            <span className="text-black font-black text-sm">P</span>
          </div>
          <span className="font-black text-xl tracking-tight text-black">
            PEAK<span className="text-[#c8ff00]">FIT</span>
          </span>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors relative group"
            >
              {link}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#c8ff00] group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </nav>

        <motion.a
          href="#запись"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:inline-flex items-center gap-2 bg-black text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#c8ff00] hover:text-black transition-all duration-300"
        >
          Записаться
        </motion.a>

        <button
          className="md:hidden text-black z-10"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md rounded-2xl mb-2"
      >
        <div className="py-4 flex flex-col gap-1 px-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="py-3 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href="#запись"
            className="mt-2 text-center bg-black text-white text-sm font-semibold px-5 py-3 rounded-full"
          >
            Записаться
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}
