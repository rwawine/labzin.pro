import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://labzin.pro'),
  title: {
    template: "%s — Labzin.pro",
    default: "Сотрудничество с нами",
  },
  description: "Условия сотрудничества для архитекторов, риелторов, управляющих компаний. Выгодные партнерские предложения от Labzin.pro.",
  keywords: "сотрудничество, партнёры, архитекторы, риелторы, управляющие компании, партнерские программы, Labzin.pro",
  authors: [{ name: "Labzin.pro" }],
  creator: "Labzin.pro",
  publisher: "Labzin.pro",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://labzin.pro/cooperation",
    siteName: "Labzin.pro",
    title: "Сотрудничество с Labzin.pro — Labzin.pro",
    description: "Условия сотрудничества для архитекторов, риелторов, управляющих компаний. Выгодные партнерские предложения от Labzin.pro.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Сотрудничество — Labzin.pro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Сотрудничество с Labzin.pro — Labzin.pro",
    description: "Условия сотрудничества для архитекторов, риелторов, управляющих компаний. Выгодные партнерские предложения от Labzin.pro.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: { google: "your-google-site-verification", yandex: "your-yandex-verification" },
  alternates: { canonical: "https://labzin.pro/cooperation" },
};

export default function CooperationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 