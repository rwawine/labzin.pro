import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Полезные материалы для проектировщиков | Labzin.pro',
  description: 'Словарь терминов, ответы на вопросы и полезные файлы для проектировщиков инженерных систем. Нормы, лайфхаки и шаблоны для эффективной работы.',
  keywords: 'проектирование инженерных систем, словарь терминов, FAQ, полезные материалы, нормы проектирования, шаблоны, лайфхаки, Labzin.pro',
  openGraph: {
    title: 'Полезные материалы для проектировщиков | Labzin.pro',
    description: 'Словарь терминов, ответы на вопросы и полезные файлы для проектировщиков инженерных систем. Нормы, лайфхаки и шаблоны для эффективной работы.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Labzin.pro',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://labzin.pro/useful',
  },
};

export default function UsefulLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 