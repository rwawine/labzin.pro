import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Сертификаты и лицензии Labzin.pro | Профессиональное проектирование',
  description: 'Официальные сертификаты и лицензии Labzin.pro. Проектируем по стандартам ГОСТ, ISO 9001 и СРО. Более 10 лет опыта в проектировании инженерных систем.',
  keywords: 'сертификаты проектирования, лицензии, ГОСТ, ISO 9001, СРО, проектирование инженерных систем, Labzin.pro, профессиональные стандарты',
  openGraph: {
    title: 'Сертификаты и лицензии Labzin.pro | Профессиональное проектирование',
    description: 'Официальные сертификаты и лицензии Labzin.pro. Проектируем по стандартам ГОСТ, ISO 9001 и СРО. Более 10 лет опыта в проектировании инженерных систем.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Labzin.pro',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://labzin.pro/certificates',
  },
};

export default function CertificatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 