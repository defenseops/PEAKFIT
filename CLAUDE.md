# PEAKFIT — документация проекта

## Команды

- `npm run dev` — запуск dev-сервера (порт 3000 или 3001 если занят)
- `npm run build` — production сборка
- `npm run lint` — линтер

## Архитектура

Next.js App Router, все компоненты в `app/components/`. Страница собирается в `app/page.tsx` — просто импорт всех секций по порядку.

## Анимации

Все анимации через **Framer Motion**. Паттерны:
- `useScroll` + `useTransform` — параллакс при скролле
- `useInView` — появление элементов при входе в viewport
- `motion.div` с `initial/animate` — входные анимации
- `whileHover` — hover-эффекты на карточках

Хуки (`useTransform`, `useSpring`) нельзя вызывать внутри `.map()` — выносить в отдельный компонент (см. `ScrollTransform.tsx`).

## Фото

Все в `public/images/` — 16 файлов формата `magnific_*.jpg`.

Для позиционирования фото внутри `next/image` с `fill` использовать `style={{ objectPosition: "X% Y%" }}`, не Tailwind-классы (`object-[X%]` не генерируется надёжно).

## Цветовая схема

- Акцент: `#c8ff00` (жёлто-зелёный)
- Фон: белый (`#ffffff`)
- Текст: чёрный (`#0a0a0a`)
- Тёмные секции: `bg-black`
- Серый фон: `#f8f8f6`

## Иконки

`lucide-react` — в установленной версии нет `Instagram`, `Youtube`. Использовать `Share2`, `Tv` вместо них.
