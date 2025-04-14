import type { Metadata } from "next";
import '../styles/globals.css';
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://labzin.pro'),
  title: {
    template: "%s — Labzin.pro",
    default: "Labzin.pro — Инжиниринг и проектирование",
  },
  description: "Labzin.pro — компания, специализирующаяся на инжиниринге и проектировании.",
  keywords: "инжиниринг, проектирование, инженерные системы, слаботочные сети, пожарная безопасность, безопасность, видеонаблюдение, охранные системы",
  authors: [{ name: "Labzin.pro" }],
  creator: "Labzin.pro",
  publisher: "Labzin.pro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://labzin.pro",
    siteName: "Labzin.pro",
    title: "Labzin.pro — Инжиниринг и проектирование",
    description: "Labzin.pro — компания, специализирующаяся на инжиниринге и проектировании.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Labzin.pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Labzin.pro — Инжиниринг и проектирование",
    description: "Labzin.pro — компания, специализирующаяся на инжиниринге и проектировании.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
    yandex: "your-yandex-verification",
  },
  alternates: {
    canonical: "https://labzin.pro",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
