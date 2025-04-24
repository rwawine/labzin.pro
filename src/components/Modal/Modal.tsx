import { FC, useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Modal.module.css';
import Input from '../Input/Input';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Произошла ошибка при отправке формы');
      }

      setIsSuccess(true);
      // Закрываем модальное окно через 2 секунды после успешной отправки
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setName('');
        setPhone('');
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Произошла ошибка при отправке формы');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className={styles.modalOverlay} 
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className={styles.modal} 
            onClick={e => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <button className={styles.closeButton} onClick={onClose}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className={styles.content}>
              {children ? (
                children
              ) : isSuccess ? (
                <div className={styles.successContent}>
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 58.6667C46.7276 58.6667 58.6667 46.7276 58.6667 32C58.6667 17.2724 46.7276 5.33334 32 5.33334C17.2724 5.33334 5.33334 17.2724 5.33334 32C5.33334 46.7276 17.2724 58.6667 32 58.6667Z" fill="#4CAF50"/>
                    <path d="M21.3333 32L28.4444 39.1111L42.6667 24.8889" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h2 className={styles.successTitle}>Успешно отправлено!</h2>
                  <p className={styles.successText}>Мы свяжемся с вами в ближайшее время</p>
                </div>
              ) : (
                <>
                  <div className={styles.header}>
                    <h2 className={styles.title}>Обсудить проект</h2>
                    <p className={styles.subtitle}>Заполните форму, и мы свяжемся с вами в ближайшее время</p>
                  </div>

                  <form className={styles.form} onSubmit={handleSubmit}>
                    <Input
                      id="name"
                      label="Ваше имя"
                      placeholder=""
                      value={name}
                      onChange={setName}
                      required
                      disabled={isLoading}
                    />

                    <Input
                      id="phone"
                      label="Телефон"
                      placeholder=""
                      type="tel"
                      value={phone}
                      onChange={setPhone}
                      required
                      disabled={isLoading}
                    />

                    {error && (
                      <div className={styles.error}>
                        {error}
                      </div>
                    )}

                    <div className={styles.buttons}>
                      <button 
                        type="submit" 
                        className={styles.submitButton}
                        disabled={isLoading}
                      >
                        {isLoading ? 'Отправка...' : 'Отправить заявку'}
                      </button>
                      <button 
                        type="button" 
                        className={styles.cancelButton} 
                        onClick={onClose}
                        disabled={isLoading}
                      >
                        Отмена
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
