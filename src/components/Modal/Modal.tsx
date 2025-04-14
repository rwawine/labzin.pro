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

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log({ name, phone });
    onClose();
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
                    />

                    <Input
                      id="phone"
                      label="Телефон"
                      placeholder=""
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
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
