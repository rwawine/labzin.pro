import { Metadata } from 'next';
import styles from './layout.module.css';

export const metadata: Metadata = {
  title: 'Блог | Labzin.pro - Статьи о веб-разработке и дизайне',
  description: 'Читайте актуальные статьи о веб-разработке, UI/UX дизайне, трендах IT и технологиях. Экспертные материалы от команды Labzin.pro',
  keywords: 'веб-разработка, UI/UX дизайн, IT статьи, программирование, frontend, backend, дизайн интерфейсов',
  openGraph: {
    title: 'Блог | Labzin.pro - Статьи о веб-разработке и дизайне',
    description: 'Читайте актуальные статьи о веб-разработке, UI/UX дизайне, трендах IT и технологиях',
    url: 'https://labzin.pro/blog',
    siteName: 'Labzin.pro',
    images: [
      {
        url: '/assets/image/blog-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Labzin.pro Blog',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Блог | Labzin.pro - Статьи о веб-разработке и дизайне',
    description: 'Читайте актуальные статьи о веб-разработке, UI/UX дизайне, трендах IT и технологиях',
    images: ['/assets/image/blog-og.jpg'],
  },
  alternates: {
    canonical: 'https://labzin.pro/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.blogLayout}>
      {children}
    </div>
  );
} 