import styles from './page.module.css';
import ContactForm from '@/components/ContactForm/ContactForm';
import Navigation from '@/components/Navigation/Navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Полезная информация',
  description: 'Полезная информация для наших клиентов',
  openGraph: {
    title: 'Полезная информация',
    description: 'Полезная информация для наших клиентов',
    images: [
      {
        url: '/images/cooperation-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Полезная информация',
      },
    ],
  },
};

export default function Useful() {
  return (
    <div className={styles.container}>
      <Navigation theme="light" />
      <ContactForm />
    </div>
  );
} 