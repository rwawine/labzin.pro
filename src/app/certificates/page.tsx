import styles from './page.module.css';
import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm/ContactForm';
import Review from '@/components/Reviews/Reviews';
import MainContainer from '@/components/MainContainer/MainContainer';
import Navigation from '@/components/Navigation/Navigation';

export const metadata: Metadata = {
  title: 'Сертификаты',
  description: 'Сертификаты и награды Labzin.pro, подтверждающие наши достижения и профессиональные стандарты',
  openGraph: {
    title: 'Сертификаты Labzin.pro',
    description: 'Сертификаты и награды Labzin.pro, подтверждающие наши достижения и профессиональные стандарты',
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

export default function Certificates() {
  return (
    <div className={styles.container}>
      <Navigation theme="light" />
      <MainContainer countTitle='' title='Проектируем по стандартам, заслуживающим доверия' description='Сертифицированные решения для объектов любого масштаба' backgroundImage="/assets/image/aboutusimage.png" />
      <Review />
      <ContactForm />
    </div>
  );
} 