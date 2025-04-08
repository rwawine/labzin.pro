import { FC, useState } from 'react';
import styles from './Modal.module.css';
import Input from '../Input';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log({ name, phone });
    onClose();
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.title}>Обсудить проект</h2>
            <p className={styles.subtitle}>Заполните форму, и мы свяжемся с вами в ближайшее время</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <Input
              id="name"
              label="Ваше имя"
              placeholder="Ваше имя"
              value={name}
              onChange={setName}
              required
            />
            
            <Input
              id="phone"
              label="Телефон"
              placeholder="Телефон"
              type="tel"
              value={phone}
              onChange={setPhone}
              required
            />

            <div className={styles.buttons}>
              <button type="submit" className={styles.submitButton}>
                Отправить заявку
              </button>
              <button type="button" className={styles.cancelButton} onClick={onClose}>
                Отмена
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal; 