import styles from './page.module.css';
import ContactForm from '@/components/ContactForm/ContactForm';

export default function Useful() {
  return (
    <div className={styles.container}>
      <ContactForm />
    </div>
  );
} 