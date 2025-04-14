import styles from './page.module.css';
import ContactForm from '@/components/ContactForm/ContactForm';
import Review from '@/components/Reviews/Reviews';
import MainContainer from '@/components/MainContainer/MainContainer';

export default function Certificates() {
  return (
    <div className={styles.container}>
      <MainContainer countTitle='' title='Проектируем по стандартам, заслуживающим доверия' description='Сертифицированные решения для объектов любого масштаба' backgroundImage="/assets/image/aboutusimage.png" />
      <Review />
      <ContactForm />
    </div>
  );
} 