import styles from './page.module.css';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation/Navigation';

// app/proektirovanie/page.ts  — Проектирование
export const metadata: Metadata = {
  metadataBase: new URL('https://labzin.pro'),
  title: {
    template: "%s — Labzin.pro",
    default: "Проектирование инженерных систем",
  },
  description: "Детальная разработка проектов: электроснабжение, водоснабжение и канализация, отопление и вентиляция, пожарная безопасность, умный дом. Labzin.pro.",
  keywords: "проектирование, инженерные системы, электроснабжение, ВК, ОВиК, пожарная безопасность, умный дом, Labzin.pro",
  authors: [{ name: "Labzin.pro" }],
  creator: "Labzin.pro",
  publisher: "Labzin.pro",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://labzin.pro/design",
    siteName: "Labzin.pro",
    title: "Проектирование инженерных систем — Labzin.pro",
    description: "Детальная разработка проектов: электроснабжение, водоснабжение и канализация, отопление и вентиляция, пожарная безопасность, умный дом. Labzin.pro.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Проектирование — Labzin.pro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Проектирование инженерных систем — Labzin.pro",
    description: "Детальная разработка проектов: электроснабжение, водоснабжение и канализация, отопление и вентиляция, пожарная безопасность, умный дом. Labzin.pro.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: { google: "your-google-site-verification", yandex: "your-yandex-verification" },
  alternates: { canonical: "https://labzin.pro/design" },
};


export default function Design() {
  return (
    <div className={styles.container}>
      <Navigation theme="light" />
    </div>
  );
}