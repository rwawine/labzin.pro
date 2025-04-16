import { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';
import Navigation from '@/components/Navigation/Navigation';
import BlogPost from './components/BlogPost';
import data from './data.json';
import ContactForm from '@/components/ContactForm/ContactForm';

export const metadata: Metadata = {
  title: 'Блог',
  description: 'Актуальные статьи и новости в сфере инжиниринга и проектирования от экспертов Labzin.pro',
  keywords: 'блог, разработка, дизайн, UI/UX, технологии, IT, программирование, веб-разработка, мобильная разработка',
  openGraph: {
    title: 'Блог Labzin.pro',
    description: 'Полезные материалы, статьи и новости от экспертов Labzin.pro в сфере инжиниринга',
    url: 'https://labzin.pro/blog',
    siteName: 'Labzin.pro',
    images: [
      {
        url: '/images/blog-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Блог Labzin.pro',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Блог | Labzin.pro - Статьи о разработке, дизайне и технологиях',
    description: 'Читайте наши статьи о разработке программного обеспечения, веб-дизайне, UI/UX, технологиях и инновациях в IT-индустрии.',
    images: ['/images/blog-og.jpg'],
  },
  alternates: {
    canonical: 'https://labzin.pro/blog',
  },
};

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <Navigation theme="light" />
      <div className={styles.blogContainer}>
        <h1 className={styles.blogTitle}>Блог</h1>
        <div className={styles.contentContainer}>
          {data.posts.map((post) => (
            <BlogPost
              key={post.id}
              id={post.id}
              title={post.title}
              title-en={post['title-en']}
              date={post.date}
              description={post.description}
              image={post.image}
            />
          ))}
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default BlogPage; 