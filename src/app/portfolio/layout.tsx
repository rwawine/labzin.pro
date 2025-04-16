import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Портфолио | Labzin.pro - Реализованные проекты инженерных систем',
  description: 'Ознакомьтесь с нашими реализованными проектами инженерных систем. Более 650 успешных объектов, включая проекты СПС, СОУЭ, АУВПТ, ВПВ, СКУД и других систем.',
  keywords: 'инженерные системы, проектирование, СПС, СОУЭ, АУВПТ, ВПВ, СКУД, ЛВС, СВН, автоматизация, портфолио проектов',
  openGraph: {
    title: 'Портфолио | Labzin.pro - Реализованные проекты инженерных систем',
    description: 'Ознакомьтесь с нашими реализованными проектами инженерных систем. Более 650 успешных объектов.',
    url: 'https://labzin.pro/portfolio',
    siteName: 'Labzin.pro',
    images: [
      {
        url: '/assets/image/portfolioBackgroundImage.png',
        width: 1200,
        height: 630,
        alt: 'Портфолио Labzin.pro',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Портфолио | Labzin.pro - Реализованные проекты инженерных систем',
    description: 'Ознакомьтесь с нашими реализованными проектами инженерных систем. Более 650 успешных объектов.',
    images: ['/assets/image/portfolioBackgroundImage.png'],
  },
  alternates: {
    canonical: 'https://labzin.pro/portfolio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Портфолио | Labzin.pro - Реализованные проекты инженерных систем',
  description: 'Ознакомьтесь с нашими реализованными проектами инженерных систем. Более 650 успешных объектов.',
  url: 'https://labzin.pro/portfolio',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Service',
          name: 'СПС, СОУЭ и ТРВ',
          description: 'Системы пожарной сигнализации, оповещения и управления эвакуацией, технические решения'
        }
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Service',
          name: 'АУВПТ и ВПВ',
          description: 'Автоматические установки водяного пожаротушения и внутреннего противопожарного водопровода'
        }
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Service',
          name: 'СКУД',
          description: 'Системы контроля и управления доступом'
        }
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'Service',
          name: 'ЛВС',
          description: 'Локальные вычислительные сети'
        }
      },
      {
        '@type': 'ListItem',
        position: 5,
        item: {
          '@type': 'Service',
          name: 'СВН',
          description: 'Системы видеонаблюдения'
        }
      }
    ]
  }
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Script
        id="portfolio-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </div>
  );
} 