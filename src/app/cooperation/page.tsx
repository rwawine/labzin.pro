import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Сотрудничество | Labzin.pro',
  description: 'Станьте партнером Labzin.pro! Узнайте о возможностях сотрудничества и совместных проектах в сфере инжиниринга',
  openGraph: {
    title: 'Сотрудничество с Labzin.pro',
    description: 'Партнерские программы и возможности сотрудничества с компанией Labzin.pro',
    images: [
      {
        url: '/images/cooperation-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Сотрудничество с Labzin.pro',
      },
    ],
  },
};

export default function Cooperation() {
  return (
    <div className={styles.container}></div>
  );
} 