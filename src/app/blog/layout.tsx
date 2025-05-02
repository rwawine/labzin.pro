import { Metadata } from 'next';
import styles from './layout.module.css';

// app/blog/page.ts  — Блог
export const metadata: Metadata = {
  metadataBase: new URL('https://labzin.pro'),
  title: {
    template: "%s — Labzin.pro",
    default: "Блог",
  },
  description: "Авторские статьи, обзоры норм, новости и кейсы в сфере проектирования инженерных систем. Будьте в курсе трендов.",
  keywords: "блог, статьи, новости, инженерное проектирование, кейсы, нормы, Labzin.pro",
  authors: [{ name: "Labzin.pro" }],
  creator: "Labzin.pro",
  publisher: "Labzin.pro",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://labzin.pro/blog",
    siteName: "Labzin.pro",
    title: "Блог Labzin.pro — Labzin.pro",
    description: "Авторские статьи, обзоры норм, новости и кейсы в сфере проектирования инженерных систем. Будьте в курсе трендов.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Блог — Labzin.pro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Блог Labzin.pro — Labzin.pro",
    description: "Авторские статьи, обзоры норм, новости и кейсы в сфере проектирования инженерных систем. Будьте в курсе трендов.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: { google: "your-google-site-verification", yandex: "your-yandex-verification" },
  alternates: { canonical: "https://labzin.pro/blog" },
};


export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.blogLayout}>
      {children}
    </div>
  );
} 