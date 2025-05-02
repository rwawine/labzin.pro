import { Metadata } from 'next';

// app/sertifikaty/page.ts  — Сертификаты
export const metadata: Metadata = {
  metadataBase: new URL('https://labzin.pro'),
  title: {
    template: "%s — Labzin.pro",
    default: "Сертификаты и допуски",
  },
  description: "Официальные сертификаты, допуски СРО и лицензии инжиниринговой компании Labzin.pro. Гарантия качества и соответствия нормам.",
  keywords: "сертификаты, допуски, СРО, лицензии, качество, нормы, Labzin.pro",
  authors: [{ name: "Labzin.pro" }],
  creator: "Labzin.pro",
  publisher: "Labzin.pro",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://labzin.pro/certificates",
    siteName: "Labzin.pro",
    title: "Сертификаты и допуски — Labzin.pro",
    description: "Официальные сертификаты, допуски СРО и лицензии инжиниринговой компании Labzin.pro. Гарантия качества и соответствия нормам.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Сертификаты — Labzin.pro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Сертификаты и допуски — Labzin.pro",
    description: "Официальные сертификаты, допуски СРО и лицензии инжиниринговой компании Labzin.pro. Гарантия качества и соответствия нормам.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: { google: "your-google-site-verification", yandex: "your-yandex-verification" },
  alternates: { canonical: "https://labzin.pro/certificates" },
};

export default function CertificatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 