import { FC, useState, ReactNode, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Modal.module.css';
import Input from '../Input/Input';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  consent?: string;
  submit?: string;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isConsentChecked, setIsConsentChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Пожалуйста, укажите ваше имя';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Пожалуйста, укажите ваш телефон';
    } else if (!/^[\+?\d\s()-]+$/.test(formData.phone)) {
      newErrors.phone = 'Некорректный формат телефона';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Пожалуйста, укажите ваш Email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Некорректный формат Email';
    }

    if (!isConsentChecked) {
      newErrors.consent = 'Пожалуйста, согласитесь с политикой конфиденциальности';
    }

    return newErrors;
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsConsentChecked(checked);
    if (checked && errors.consent) {
      setErrors(prev => ({ ...prev, consent: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      const firstErrorField = Object.keys(validationErrors)[0] as keyof FormErrors;
      const element = document.getElementById(firstErrorField);
      element?.focus();
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Произошла ошибка при отправке формы');
      }

      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setFormData({ name: '', phone: '', email: '' });
        setIsConsentChecked(false);
        setErrors({});
      }, 2000);
    } catch (err) {
      setErrors(prev => ({ 
        ...prev, 
        submit: err instanceof Error ? err.message : 'Произошла ошибка при отправке формы' 
      }));
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
                    <path d="M32 58.6667C46.7276 58.6667 58.6667 46.7276 58.6667 32C58.6667 17.2724 46.7276 5.33334 32 5.33334C17.2724 5.33334 5.33334 17.2724 5.33334 32C5.33334 46.7276 17.2724 58.6667 32 58.6667Z" fill="#4CAF50" />
                    <path d="M21.3333 32L28.4444 39.1111L42.6667 24.8889" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
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

                  <form className={styles.form} onSubmit={handleSubmit} noValidate>
                    <div className={styles.inputFieldsContainer}>
                      <Input
                        id="name"
                        label="Имя*"
                        placeholder=""
                        value={formData.name}
                        onChange={(value) => handleInputChange('name', value)}
                        required
                        error={errors.name}
                        disabled={isLoading}
                      />

                      <Input
                        id="phone"
                        label="Телефон*"
                        placeholder=""
                        type="tel"
                        value={formData.phone}
                        onChange={(value) => handleInputChange('phone', value)}
                        required
                        error={errors.phone}
                        disabled={isLoading}
                      />

                      <Input
                        id="email"
                        label="Email*"
                        placeholder=""
                        type="email"
                        value={formData.email}
                        onChange={(value) => handleInputChange('email', value)}
                        required
                        error={errors.email}
                        disabled={isLoading}
                      />
                    </div>

                    <div className={styles.consentAndSubmitContainer}>
                      <div className={`${styles.checkboxContainer} ${errors.consent ? styles.checkboxError : ''}`}>
                        <label>
                          <input
                            type="checkbox"
                            id="consent"
                            className={styles.checkbox}
                            checked={isConsentChecked}
                            onChange={handleConsentChange}
                            required
                            disabled={isLoading}
                          />
                          <span className={styles.checkmark}></span>
                          <span className={styles.consentLabelText}>
                            Нажимая на кнопку, вы даёте согласие на обработку своих <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">персональных данных</a> и соглашаетесь c <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Политика конфиденциальности</a>
                          </span>
                        </label>
                        {errors.consent && <span className={styles.errorMessageCheckbox}>{errors.consent}</span>}
                      </div>
                    </div>

                    {errors.submit && (
                      <div className={styles.error}>
                        {errors.submit}
                      </div>
                    )}

                    <button type="submit" className={styles.submitButton} disabled={isLoading}>
                      {isLoading ? 'Отправка...' : 'Отправить заявку'}
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0009 15.5858L13.5867 12L10.0009 8.41426C9.95209 8.36544 9.90937 8.31284 9.87276 8.25739C9.61648 7.86924 9.65919 7.34176 10.0009 7.00005C10.3914 6.60952 11.0246 6.60952 11.4151 7.00005L15.708 11.2929C15.8955 11.4805 16.0009 11.7348 16.0009 12C16.0009 12.2653 15.8955 12.5196 15.708 12.7072L11.4151 17C11.0246 17.3906 10.3914 17.3906 10.0009 17C9.61038 16.6095 9.61038 15.9764 10.0009 15.5858Z" fill="black" />
                      </svg>
                    </button>
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
