import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'О компании Labzin.pro | Проектирование инженерных систем',
  description: 'Labzin.pro - команда профессионалов с опытом более 10 лет в проектировании инженерных систем для жилых, коммерческих и промышленных объектов. Более 650+ успешных проектов.',
  keywords: 'проектирование инженерных систем, инженерные системы, проектирование, Labzin.pro, инженерные решения, слаботочные сети, пожарная безопасность',
  openGraph: {
    title: 'О компании Labzin.pro | Проектирование инженерных систем',
    description: 'Labzin.pro - команда профессионалов с опытом более 10 лет в проектировании инженерных систем для жилых, коммерческих и промышленных объектов.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Labzin.pro',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://labzin.pro/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 