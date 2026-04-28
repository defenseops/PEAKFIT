"use client";
import { motion } from "framer-motion";
import { Share2, Tv, Send, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer id="контакты" className="bg-black text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#c8ff00] rounded-full flex items-center justify-center">
                <span className="text-black font-black text-sm">P</span>
              </div>
              <span className="font-black text-xl tracking-tight">
                PEAK<span className="text-[#c8ff00]">FIT</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Ваш путь к лучшей версии себя начинается здесь. Современный фитнес-клуб в центре города.
            </p>
            <div className="flex gap-3">
              {[Share2, Tv, Send].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 bg-white/10 hover:bg-[#c8ff00] hover:text-black rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-[#c8ff00] mb-5">Навигация</h4>
            <ul className="space-y-3">
              {["О нас", "Услуги", "Тренеры", "Галерея", "Цены"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-[#c8ff00] mb-5">Услуги</h4>
            <ul className="space-y-3">
              {["Силовые тренировки", "HIIT & Кардио", "Групповые классы", "Персональный тренинг", "EMS-тренировки"].map((s) => (
                <li key={s}>
                  <a href="#услуги" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-[#c8ff00] mb-5">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#c8ff00] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">ул. Абая 12, Алматы</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[#c8ff00] flex-shrink-0" />
                <a href="tel:+77001234567" className="text-gray-400 hover:text-white text-sm transition-colors">
                  +7 700 123 45 67
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="text-[#c8ff00] mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <div>Пн–Пт: 07:00 – 23:00</div>
                  <div>Сб–Вс: 09:00 – 21:00</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © 2026 PEAKFIT. Все права защищены.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-white text-xs transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-gray-600 hover:text-white text-xs transition-colors">Публичная оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
