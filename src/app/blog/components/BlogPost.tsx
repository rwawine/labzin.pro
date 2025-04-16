import Image from 'next/image';
import Link from 'next/link';
import styles from './BlogPost.module.css';

interface BlogPostProps {
  id: string;
  title: string;
  'title-en': string;
  date: string;
  description: string;
  image: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ id, title, 'title-en': titleEn, date, description, image }) => {
  // Создаем URL-friendly версию английского заголовка
  const slug = titleEn
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  return (
    <article className={styles.articleContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={title}
          fill
          className={styles.articleImage}
          priority
        />
      </div>
      <div className={styles.articleInfo}>
        <div className={styles.articleHeader}>
          <time className={styles.articleDate}>{date}</time>
          <h2 className={styles.articleTitle}>{title}</h2>
        </div>
        <p className={styles.articleDescription}>{description}</p>
        <Link href={`/blog/${slug}`} className={styles.readMore}>
          Читать далее
        </Link>
      </div>
    </article>
  );
};

export default BlogPost; 