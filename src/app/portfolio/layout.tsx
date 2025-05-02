import { Metadata } from 'next';
import Script from 'next/script';

// app/portfolio/page.ts  — Портфолио
export const metadata: Metadata = {
  metadataBase: new URL('https://labzin.pro'),
  title: {
    template: "%s — Labzin.pro",
    default: "Портфолио выполненных проектов",
  },
  description: "Кейсы по проектированию инженерных систем: электроснабжение, ВК, ОВиК, слаботочные сети. Реальные примеры работ Labzin.pro.",
  keywords: "портфолио, проекты, кейсы, проектирование, инженерные системы, Labzin.pro",
  authors: [{ name: "Labzin.pro" }],
  creator: "Labzin.pro",
  publisher: "Labzin.pro",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://labzin.pro/portfolio",
    siteName: "Labzin.pro",
    title: "Портфолио выполненных проектов — Labzin.pro",
    description: "Кейсы по проектированию инженерных систем: электроснабжение, ВК, ОВиК, слаботочные сети. Реальные примеры работ Labzin.pro.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Портфолио — Labzin.pro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Портфолио выполненных проектов — Labzin.pro",
    description: "Кейсы по проектированию инженерных систем: электроснабжение, ВК, ОВиК, слаботочные сети. Реальные примеры работ Labzin.pro.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: { google: "your-google-site-verification", yandex: "your-yandex-verification" },
  alternates: { canonical: "https://labzin.pro/portfolio" },
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