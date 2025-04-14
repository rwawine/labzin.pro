import styles from './page.module.css';
import { Metadata } from 'next';
import MainContainer from '@/components/MainContainer/MainContainer';
import ContactForm from '@/components/ContactForm/ContactForm';
import Map from '@/components/Map/Map';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';

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
      <MainContainer backgroundImage="/assets/image/aboutusimage.png" />
      <div className={styles.aboutSection}>
        <h2 className={styles.aboutTitle}>КТО МЫ?</h2>
        <p className={styles.aboutText}>
          Labzin.pro — команда профессионалов с опытом более 10 лет. Проектируем надёжные инженерные системы для жилых, коммерческих и промышленных объектов.
        </p>
      </div>
      <div className={styles.counterSection}>
        <div className={styles.statistics}>
          <div className={styles.statistics__item}>
            <div className={styles.statistics__number}>{'>'}10+ лет</div>
            <div className={styles.statistics__text}>
              реализуем проекты с учётом современных технологий и стандартов.
            </div>
          </div>
          <div className={styles.statistics__item}>
            <div className={styles.statistics__number}>{'>'}90%</div>
            <div className={styles.statistics__text}>
              заказчиков возвращаются или рекомендуют нас
            </div>
          </div>
          <div className={styles.statistics__item}>
            <div className={styles.statistics__number}>{'>'}650+</div>
            <div className={styles.statistics__text}>
              проектов, каждый соответствует нормативам и требованиям
            </div>
          </div>
          <div className={styles.statistics__item}>
            <div className={styles.statistics__number}>{'>'}6+</div>
            <div className={styles.statistics__text}>
              направлений, от слаботочных сетей до пожарной безопасности
            </div>
          </div>
          <div className={styles.backgroundText}>labzin.pro</div>
        </div>
      </div>
      <WhyChooseUs />
      <Map />
      <ContactForm />
    </div>
  );
} 