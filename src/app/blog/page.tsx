import { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';
import Navigation from '@/components/Navigation/Navigation';
import BlogPost from './components/BlogPost';
import data from './data.json';
import ContactForm from '@/components/ContactForm/ContactForm';

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