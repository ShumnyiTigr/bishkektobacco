
# KYRGYZ TOBACCO — план первой итерации

Делаем сайт на стеке Lovable (React 18 + Vite + Tailwind, не Next.js — для лендинга разница невидима). RU добавим полностью с самого начала. Email-форма пойдёт в Lovable Cloud. Фото — реальные Unsplash-картинки, я подберу URL вручную.

---

## Шаг 1 (этой итерации) — Фундамент + первые 3 секции

### 1.1 Дизайн-система
- Все цвета палитры → HSL-токены в `index.css` (`--background`, `--accent-gold`, `--accent-crimson`, `--ivory`, `--text-secondary`, `--hairline`)
- Маппинг токенов в `tailwind.config.ts` (`bg-background`, `text-gold`, `border-hairline`)
- Шрифты: Playfair Display (700) + Inter (400/500) через Google Fonts
- Утилитки: `.eyebrow` (small caps + letter-spacing 0.12em), `.serif-h1`, `.serif-h2`, `.divider-hairline`
- Глобальный тёмный фон `#1F1812`, ivory текст, base font-size 17px, line-height 1.75

### 1.2 Age Gate (18+)
- Полноэкранный модал на тёмном `#11090B`
- Логотип `KYRGYZ TOBACCO` (gold serif) + вопрос «Are you 18 or older?»
- Кнопки: `Yes, enter` (gold) / `No` (outline → редирект на google.com)
- Cookie на 30 дней, проверка при монтировании App
- Локализуется (EN/RU)

### 1.3 Языковой переключатель EN | RU
- Лёгкий i18n без библиотек: один `LanguageContext` + словарь `content/{en,ru}.ts` со всеми строками сайта
- Состояние сохраняется в localStorage
- Я полностью переведу все 10 секций в стиле «короткие, прямые фразы», как просит бренд-гайд (без «переводизмов»)

### 1.4 Sticky header
- Слева: `KYRGYZ TOBACCO` (gold serif logotype)
- Справа: `EN | RU` toggle
- Прозрачный фон с blur при скролле, hairline снизу

### 1.5 Секция 1 — HERO
- Full-bleed Unsplash фото амбара с табачными листьями + тёмный градиент
- Eyebrow `EST. 2026 · BISHKEK · KYRGYZSTAN`
- H1 `clamp(56px, 8vw, 120px)`: «Handcrafted tobacco. From American leaf.»
- Italic sub + gold tag `70% READY` снизу-справа

### 1.6 Секция 2 — ROOTS
- Двухколоночная: фото винтажного листа слева + текст справа
- Eyebrow `OUR INSPIRATION`, H2 «The oldest craft. A new house.»
- Закрывающая gold italic строка про American leaf / standards / Kyrgyzstan

### 1.7 Секция 3 — THE LEAF
- Фото листа справа + контент слева
- H2 «Four leaves. No substitutes.»
- 4 мини-блока (Virginia / Kentucky / Oriental / Burley) разделённые тонкими gold вертикальными хейрлайнами, на мобильном — стек

### 1.8 Базовый footer-заглушка
- Мини-копирайт, чтобы страница выглядела законченной до Шага 2

### 1.9 Meta-теги
- `index.html`: title, description, OG-теги, canonical, twitter:card

---

## Что в этой итерации НЕ делаем (заберём в Шаг 2 после твоего одобрения)
- Секции 4–10 (In Preparation, Portfolio, Formats & Blends, Standards, Founders, Q1 2027 email-form, полный footer)
- Lovable Cloud + таблица `subscribers` + edge function для email-формы (поднимем вместе с секцией 9)
- OG-картинка `/og-image.jpg`
- Полировка анимаций (fade-in на скролле, hover-подчёркивания)

---

## Стиль контроля качества
После генерации проверяем на мобильном (375px) и в твоём текущем вьюпорте (458px), смотрим:
- Серифные H1/H2 везде
- Тёмный warm-фон, ни одного белого блока
- Age gate показывается при первом визите, прячется после согласия
- RU/EN переключение мгновенное, состояние сохраняется
- Hero читается поверх фото

После того как Шаг 1 тебе зайдёт по вайбу — пойдём по секциям 4→10 и подключим Cloud для email-подписки.
