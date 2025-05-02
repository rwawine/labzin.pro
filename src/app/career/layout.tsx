import { Metadata } from 'next';

// app/vacancies/page.ts  — Вакансии
export const metadata: Metadata = {
  metadataBase: new URL('https://labzin.pro'),
  title: {
    template: "%s — Labzin.pro",
    default: "Вакансии",
  },
  description: "Актуальные вакансии в инжиниринговой компании Labzin.pro. Карьерный рост, интересные проекты.",
  keywords: "вакансии, работа, карьера, инженер, проектировщик, Labzin.pro",
  authors: [{ name: "Labzin.pro" }],
  creator: "Labzin.pro",
  publisher: "Labzin.pro",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://labzin.pro/career",
    siteName: "Labzin.pro",
    title: "Вакансии Labzin.pro — Labzin.pro",
    description: "Актуальные вакансии в инжиниринговой компании Labzin.pro. Карьерный рост, интересные проекты.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Вакансии — Labzin.pro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Вакансии Labzin.pro — Labzin.pro",
    description: "Актуальные вакансии в инжиниринговой компании Labzin.pro. Карьерный рост, интересные проекты.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: { google: "your-google-site-verification", yandex: "your-yandex-verification" },
  alternates: { canonical: "https://labzin.pro/career" },
};


export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 