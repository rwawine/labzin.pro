import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.description}>
        Извините, страница, которую вы ищете, не существует.
      </p>
      <Link href="/" className={styles.link}>
        Вернуться на главную
      </Link>
    </div>
  );
} 