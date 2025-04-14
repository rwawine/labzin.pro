import { FC } from 'react';
import Modal from '../Modal/Modal';
import styles from './Dialog.module.css';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}

const Dialog: FC<DialogProps> = ({ isOpen, onClose, title = 'Обсудить проект', description = 'Заполните форму, и мы свяжемся с вами в ближайшее время' }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.dialogContent}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </Modal>
  );
};

export default Dialog; 