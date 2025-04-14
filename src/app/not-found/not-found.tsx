import Link from 'next/link';
import styles from './not-found.module.css';
import Navigation from '@/components/Navigation/Navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Страница не найдена',
  description: 'Страница, которую вы ищете, не существует. Попробуйте вернуться на главную страницу',
  openGraph: {
    title: 'Страница не найдена',
    description: 'Страница, которую вы ищете, не существует. Попробуйте вернуться на главную страницу',
    images: [
      {
        url: '/images/cooperation-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Страница не найдена',
      },
    ],
  },
};

export default function NotFound() {
  return (
    <div className={styles.container}>
      <Navigation theme="light" />
      <h1 className={styles.title}>404</h1>
      <p className={styles.description}>
        Извините, страница, которую вы ищете, не существует.
      </p>
      <Link href="/" className={styles.link}>
        Вернуться на главную
      </Link>
    </div>
  );
} 