import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Карьера | Labzin.pro',
  description: 'Присоединяйтесь к команде Labzin.pro! Вакансии для талантливых специалистов в сфере инжиниринга и проектирования',
  openGraph: {
    title: 'Карьера в Labzin.pro',
    description: 'Станьте частью команды профессионалов Labzin.pro. Актуальные вакансии и возможности для роста',
    images: [
      {
        url: '/images/career-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Карьера в Labzin.pro',
      },
    ],
  },
};

export default function Career() {
  return (
    <div className={styles.container}></div>
  );
} 