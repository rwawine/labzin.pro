import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'О компании | Labzin.pro',
  description: 'Узнайте больше о компании Labzin.pro - нашей миссии, ценностях и команде профессионалов.',
  openGraph: {
    title: 'О компании Labzin.pro',
    description: 'История, миссия и команда компании Labzin.pro - вашего надежного партнера в сфере инжиниринга',
    images: [
      {
        url: '/images/about-og.jpg',
        width: 1200,
        height: 630,
        alt: 'О компании Labzin.pro',
      },
    ],
  },
};

export default function About() {
  return (
    <div className={styles.container}>
    </div>
  );
} 