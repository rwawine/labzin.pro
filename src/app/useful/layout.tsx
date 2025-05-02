import { Metadata } from 'next';

// app/useful/page.ts  — Полезная информация
export const metadata: Metadata = {
  metadataBase: new URL('https://labzin.pro'),
  title: {
    template: "%s — Labzin.pro",
    default: "Полезная информация для проектировщиков и заказчиков",
  },
  description: "Словарь терминов, нормы, лайфхаки и шаблоны для проектировщиков и заказчиков инженерных систем. FAQ и статьи. Labzin.pro.",
  keywords: "полезная информация, проектировщики, заказчики, словарь терминов, нормы, лайфхаки, шаблоны, FAQ, Labzin.pro",
  authors: [{ name: "Labzin.pro" }],
  creator: "Labzin.pro",
  publisher: "Labzin.pro",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://labzin.pro/useful",
    siteName: "Labzin.pro",
    title: "Полезная информация для проектировщиков и заказчиков — Labzin.pro",
    description: "Словарь терминов, нормы, лайфхаки и шаблоны для проектировщиков и заказчиков инженерных систем. FAQ и статьи. Labzin.pro.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Полезная информация — Labzin.pro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Полезная информация для проектировщиков и заказчиков — Labzin.pro",
    description: "Словарь терминов, нормы, лайфхаки и шаблоны для проектировщиков и заказчиков инженерных систем. FAQ и статьи. Labzin.pro.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: { google: "your-google-site-verification", yandex: "your-yandex-verification" },
  alternates: { canonical: "https://labzin.pro/useful" },
};


export default function UsefulLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 