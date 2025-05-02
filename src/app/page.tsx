import { Metadata } from 'next';

import styles from './page.module.css';

import ContactForm from '../components/ContactForm/ContactForm';
import Map from '../components/Map/Map';
import ClientsResults from '../components/ClientsResults/ClientResults';
import OurAdvantages from '../components/OurAdvantages/OurAdvantages';
import Top5Reasons from '../components/Top5Reasons/Top5Reasons';
import ProjectTypes from '../components/ProjectTypes/ProjectTypes';
import Services from '../components/Services/Services';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import WhoWe from '../components/WhoWe/WhoWe';
import Reviews from '../components/Reviews/Reviews';
import Navigation from '../components/Navigation/Navigation';

export const metadata: Metadata = {
  metadataBase: new URL('https://labzin.pro'),
  title: {
    template: "%s — Labzin.pro",
    default: "Инжиниринг и проектирование инженерных систем — Labzin.pro",
  },
  description: "Профессиональное проектирование инженерных систем: электроснабжение, ВК, ОВиК, слаботочные сети, безопасность. Компания Labzin.pro.",
  keywords: "инжиниринг, проектирование, инженерные системы, электроснабжение, ВК, ОВиК, слаботочные сети, Labzin.pro",
  authors: [{ name: "Labzin.pro" }],
  creator: "Labzin.pro",
  publisher: "Labzin.pro",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://labzin.pro/",
    siteName: "Labzin.pro",
    title: "Инжиниринг и проектирование — Labzin.pro",
    description: "Профессиональное проектирование инженерных систем: электроснабжение, ВК, ОВиК, слаботочные сети, безопасность. Компания Labzin.pro.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Labzin.pro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Инжиниринг и проектирование — Labzin.pro",
    description: "Профессиональное проектирование инженерных систем: электроснабжение, ВК, ОВиК, слаботочные сети, безопасность. Компания Labzin.pro.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: { google: "your-google-site-verification", yandex: "your-yandex-verification" },
  alternates: { canonical: "https://labzin.pro/" },
};

export default function Home() {
  return (
    <div>
      <Navigation theme="dark" />
      <div className={styles.mainBackground}>
        <div className={styles.heroContent}>
          <p className={styles.projects}>Выполнено 650 объектов</p>
          <h1 className={styles.heroTitle}>
            Проектирование инженерных
            <br />систем <span className={styles.underline}>под ключ</span>
          </h1>
          <p className={styles.heroDescription}>
            Мы создаём безопасные, технологичные и надёжные решения для жилых домов, коммерческих зданий и
            промышленных комплексов. Качество, проверенное временем и десятками довольных клиентов.
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.primaryButton}>
              Обсудить проект <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0009 15.5858L13.5867 12L10.0009 8.41426C9.95209 8.36544 9.90937 8.31284 9.87276 8.25739C9.61648 7.86924 9.65919 7.34176 10.0009 7.00005C10.3914 6.60952 11.0246 6.60952 11.4151 7.00005L15.708 11.2929C15.8955 11.4805 16.0009 11.7348 16.0009 12C16.0009 12.2653 15.8955 12.5196 15.708 12.7072L11.4151 17C11.0246 17.3906 10.3914 17.3906 10.0009 17C9.61038 16.6095 9.61038 15.9764 10.0009 15.5858Z" />
              </svg>
            </button>
            <button className={styles.secondaryButton}>
              Рассчитать стоимость <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0009 15.5858L13.5867 12L10.0009 8.41426C9.95209 8.36544 9.90937 8.31284 9.87276 8.25739C9.61648 7.86924 9.65919 7.34176 10.0009 7.00005C10.3914 6.60952 11.0246 6.60952 11.4151 7.00005L15.708 11.2929C15.8955 11.4805 16.0009 11.7348 16.0009 12C16.0009 12.2653 15.8955 12.5196 15.708 12.7072L11.4151 17C11.0246 17.3906 10.3914 17.3906 10.0009 17C9.61038 16.6095 9.61038 15.9764 10.0009 15.5858Z" />
              </svg>
            </button>
          </div>
        </div>
        <img className={styles.mainBackgroundImage} src="/assets/svg/mainBackground.svg" alt="mainBackground" />
      </div>

      <div className={styles.blueprintImageContainer}>
        <img
          src="/assets/image/afterMainHeroImage.png"
          alt="Инженерный чертеж"
          className={styles.blueprintImage}
        />
      </div>

      <WhoWe />
      <WhyChooseUs />
      <Services />
      <ProjectTypes />
      <Top5Reasons />
      <OurAdvantages />
      <Reviews />
      <Map />
      <ClientsResults />
      <ContactForm />
    </div>
  );
}