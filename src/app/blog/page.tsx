import { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';
import Navigation from '@/components/Navigation/Navigation';

export const metadata: Metadata = {
  title: 'Блог',
  description: 'Актуальные статьи и новости в сфере инжиниринга и проектирования от экспертов Labzin.pro',
  keywords: 'блог, разработка, дизайн, UI/UX, технологии, IT, программирование, веб-разработка, мобильная разработка',
  openGraph: {
    title: 'Блог Labzin.pro',
    description: 'Полезные материалы, статьи и новости от экспертов Labzin.pro в сфере инжиниринга',
    url: 'https://labzin.pro/blog',
    siteName: 'Labzin.pro',
    images: [
      {
        url: '/images/blog-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Блог Labzin.pro',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Блог | Labzin.pro - Статьи о разработке, дизайне и технологиях',
    description: 'Читайте наши статьи о разработке программного обеспечения, веб-дизайне, UI/UX, технологиях и инновациях в IT-индустрии.',
    images: ['/images/blog-og.jpg'],
  },
  alternates: {
    canonical: 'https://labzin.pro/blog',
  },
};

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'Тренды веб-разработки в 2023 году',
    excerpt: 'Обзор последних трендов в веб-разработке, включая новые фреймворки, подходы к дизайну и технологии, которые определяют будущее интернета.',
    date: '15 июня 2023',
    category: 'Веб-разработка',
    image: '/images/blog/web-dev-trends.jpg',
    slug: 'web-development-trends-2023',
  },
  {
    id: 2,
    title: 'Как создать эффективный UI/UX дизайн',
    excerpt: 'Практические советы и рекомендации по созданию интерфейсов, которые не только выглядят привлекательно, но и обеспечивают отличный пользовательский опыт.',
    date: '3 июля 2023',
    category: 'UI/UX Дизайн',
    image: '/images/blog/ui-ux-design.jpg',
    slug: 'effective-ui-ux-design',
  },
  {
    id: 3,
    title: 'Мобильная разработка: нативные приложения vs кроссплатформенные решения',
    excerpt: 'Сравнительный анализ подходов к разработке мобильных приложений, их преимущества и недостатки, а также рекомендации по выбору технологии для вашего проекта.',
    date: '22 июля 2023',
    category: 'Мобильная разработка',
    image: '/images/blog/mobile-dev.jpg',
    slug: 'native-vs-cross-platform',
  },
  {
    id: 4,
    title: 'Оптимизация производительности веб-приложений',
    excerpt: 'Техники и стратегии для повышения скорости загрузки и отзывчивости веб-приложений, улучшения Core Web Vitals и повышения конверсии.',
    date: '10 августа 2023',
    category: 'Оптимизация',
    image: '/images/blog/performance.jpg',
    slug: 'web-performance-optimization',
  },
  {
    id: 5,
    title: 'Введение в микросервисную архитектуру',
    excerpt: 'Основные принципы, преимущества и вызовы при переходе на микросервисную архитектуру, а также практические примеры реализации.',
    date: '5 сентября 2023',
    category: 'Архитектура',
    image: '/images/blog/microservices.jpg',
    slug: 'introduction-to-microservices',
  },
  {
    id: 6,
    title: 'Безопасность в веб-приложениях: лучшие практики',
    excerpt: 'Обзор основных угроз безопасности веб-приложений и методов их предотвращения, включая OWASP Top 10 и современные подходы к защите данных.',
    date: '18 сентября 2023',
    category: 'Безопасность',
    image: '/images/blog/security.jpg',
    slug: 'web-security-best-practices',
  },
];

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <Navigation theme="light" />

    </div>
  );
};

export default BlogPage; 