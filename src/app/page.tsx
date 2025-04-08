import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Главная | Labzin.pro',
  description: 'Labzin.pro - ведущая компания в области инжиниринга и проектирования. Мы предлагаем комплексные решения для вашего бизнеса.',
  openGraph: {
    title: 'Labzin.pro - Инжиниринг и проектирование',
    description: 'Профессиональные услуги по инжинирингу и проектированию от компании Labzin.pro',
    images: [
      {
        url: '/images/home-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Labzin.pro - Главная страница',
      },
    ],
  },
};

export default function Home() {
  return (
    <div className={styles.container}>
    </div>
  );
}
