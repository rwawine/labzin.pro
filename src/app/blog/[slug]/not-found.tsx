import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.title}>Статья не найдена</h1>
      <p className={styles.description}>
        К сожалению, запрашиваемая статья не существует или была удалена.
      </p>
      <Link href="/blog" className={styles.backLink}>
        Вернуться к списку статей
      </Link>
    </div>
  );
} 