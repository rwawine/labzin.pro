import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Портфолио | Labzin.pro',
  description: 'Ознакомьтесь с нашими успешными проектами в области инжиниринга и проектирования. Примеры работ и кейсы Labzin.pro',
  openGraph: {
    title: 'Портфолио проектов Labzin.pro',
    description: 'Лучшие проекты и кейсы компании Labzin.pro в сфере инжиниринга и проектирования',
    images: [
      {
        url: '/images/portfolio-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Портфолио Labzin.pro',
      },
    ],
  },
};

export default function Portfolio() {
  return (
    <div className={styles.container}></div>
  );
} 