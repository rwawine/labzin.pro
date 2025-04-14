import styles from './page.module.css';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation/Navigation';

export const metadata: Metadata = {
  title: 'Проектирование',
  description: 'Станьте партнером Labzin.pro! Узнайте о возможностях сотрудничества и совместных проектах в сфере инжиниринга',
  openGraph: {
    title: 'Проектирование с Labzin.pro',
    description: 'Проектирование и инженерные решения для объектов любого масштаба',
    images: [
      {
        url: '/images/cooperation-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Проектирование с Labzin.pro',
      },
    ],
  },
};

export default function Design() {
  return (
    <div className={styles.container}>
      <Navigation theme="light" />
    </div>
  );
}