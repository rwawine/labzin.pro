# Labzin.pro

Веб-сайт, разработанный с использованием Next.js и React.

## 🚀 Технологии

- **Next.js 15.2.4** - React фреймворк для создания веб-приложений
- **React 19** - JavaScript библиотека для создания пользовательских интерфейсов
- **TypeScript** - Статическая типизация для JavaScript
- **Framer Motion** - Библиотека для анимаций
- **React Hook Form** - Управление формами
- **Zod** - Валидация данных
- **Swiper** - Слайдер для веб-приложений

## 📁 Структура проекта

```
src/
├── app/          # Роутинг и страницы приложения
├── components/   # Переиспользуемые компоненты
├── styles/       # Стили и CSS модули
└── utils/        # Вспомогательные функции и утилиты
```

## 🛠️ Установка и запуск

1. Клонируйте репозиторий:
```bash
git clone [url-репозитория]
```

2. Установите зависимости:
```bash
npm install
```

3. Запустите проект в режиме разработки:
```bash
npm run dev
```

4. Сборка для продакшена:
```bash
npm run build
```

5. Запуск продакшен версии:
```bash
npm start
```

## 📝 Скрипты

- `npm run dev` - Запуск в режиме разработки с Turbopack
- `npm run build` - Сборка проекта
- `npm start` - Запуск продакшен версии
- `npm run lint` - Проверка кода линтером
- `npm run check` - Проверка бандла

## 🔧 Конфигурация

- `next.config.ts` - Конфигурация Next.js
- `tsconfig.json` - Настройки TypeScript
- `.gitignore` - Игнорируемые файлы Git

## 📦 Зависимости

Основные зависимости:
- @hookform/resolvers
- framer-motion
- react-hook-form
- swiper

Dev-зависимости:
- @types/node
- @types/react
- @types/react-dom
- typescript
