import { Metadata } from 'next';

// app/about/page.ts  — О компании
export const metadata: Metadata = {
  metadataBase: new URL('https://labzin.pro'),
  title: {
    template: "%s — Labzin.pro",
    default: "О компании",
  },
  description: "Инжиниринговая компания Labzin.pro: миссия, команда, достижения и ценности. Профессиональный подход к каждому проекту.",
  keywords: "о компании, команда, миссия, ценности, достижения, инжиниринговая компания, Labzin.pro",
  authors: [{ name: "Labzin.pro" }],
  creator: "Labzin.pro",
  publisher: "Labzin.pro",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://labzin.pro/about",
    siteName: "Labzin.pro",
    title: "О компании Labzin.pro — Labzin.pro",
    description: "Инжиниринговая компания Labzin.pro: миссия, команда, достижения и ценности. Профессиональный подход к каждому проекту.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "О компании — Labzin.pro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "О компании Labzin.pro — Labzin.pro",
    description: "Инжиниринговая компания Labzin.pro: миссия, команда, достижения и ценности. Профессиональный подход к каждому проекту.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: { google: "your-google-site-verification", yandex: "your-yandex-verification" },
  alternates: { canonical: "https://labzin.pro/about" },
};


export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 