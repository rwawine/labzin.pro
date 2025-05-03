"use client";

import { useState, useRef, FormEvent, ChangeEvent, DragEvent } from 'react';
import Input from '../Input/Input';
import styles from './ContactForm.module.css';

// Интерфейс для ошибок формы
interface FormErrors {
    name?: string;
    phone?: string;
    email?: string;
    consent?: string;
    submit?: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        phone: '',
        email: '',
        question: ''
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isConsentChecked, setIsConsentChecked] = useState(false);
    const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // --- Функции валидации ---
    const validateForm = (): FormErrors => {
        const newErrors: FormErrors = {};

        // Валидация имени
        if (!formData.name.trim()) {
            newErrors.name = 'Пожалуйста, укажите ваше имя';
        }

        // Валидация телефона
        if (!formData.phone.trim()) {
            newErrors.phone = 'Пожалуйста, укажите ваш телефон';
        } else if (!/^[\+?\d\s()-]+$/.test(formData.phone)) {
            newErrors.phone = 'Некорректный формат телефона';
        }

        // Валидация email
        if (!formData.email.trim()) {
            newErrors.email = 'Пожалуйста, укажите ваш Email';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Некорректный формат Email';
        }

        // Валидация согласия
        if (!isConsentChecked) {
            newErrors.consent = 'Пожалуйста, согласитесь с политикой конфиденциальности';
        }

        return newErrors;
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
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('company', formData.company);
            formDataToSend.append('phone', formData.phone);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('question', formData.question);

            if (attachedFiles.length > 0) {
                attachedFiles.forEach(file => {
                    formDataToSend.append('files', file);
                });
            }

            const response = await fetch('/api/send-contact-form', {
                method: 'POST',
                body: formDataToSend
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Произошла ошибка при отправке формы');
            }

            setIsSuccess(true);
            // Очищаем форму через 2 секунды
            setTimeout(() => {
                setFormData({ name: '', company: '', phone: '', email: '', question: '' });
                setAttachedFiles([]);
                setIsConsentChecked(false);
                setErrors({});
                setIsSuccess(false);
            }, 2000);

        } catch (err) {
            setErrors({ ...errors, submit: err instanceof Error ? err.message : 'Произошла ошибка при отправке формы' });
        } finally {
            setIsLoading(false);
        }
    };

    // Обработчик изменений для очистки ошибок при вводе
    const handleInputChange = (field: keyof typeof formData, value: string) => {
        setFormData({ ...formData, [field]: value });
        // Очищаем ошибку для текущего поля, если она была
        if (errors[field as keyof FormErrors]) {
            setErrors(prevErrors => ({ ...prevErrors, [field]: undefined }));
        }
    };

    // Обработчик изменения чекбокса согласия
    const handleConsentChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsConsentChecked(e.target.checked);
        // Очищаем ошибку согласия, если она была
        if (errors.consent) {
            setErrors(prevErrors => ({ ...prevErrors, consent: undefined }));
        }
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const files = Array.from(e.target.files);

            // Проверка размера файлов (максимум 50Мб)
            const totalSize = files.reduce((sum, file) => sum + file.size, 0);
            const maxSize = 50 * 1024 * 1024; // 50Мб в байтах

            if (totalSize > maxSize) {
                alert('Общий размер файлов превышает 50Мб');
                return;
            }

            // Проверка расширений файлов
            const validExtensions = ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.jpg', '.jpeg', '.png', '.zip', '.rar'];
            const invalidFiles = files.filter(file => {
                const extension = '.' + file.name.split('.').pop()?.toLowerCase();
                return !validExtensions.includes(extension);
            });

            if (invalidFiles.length > 0) {
                alert('Поддерживаются только файлы с расширениями: PDF, DOC, DOCX, XLS, XLSX, JPG, JPEG, PNG, ZIP, RAR');
                return;
            }

            setAttachedFiles(files);
        }
    };

    const handleFileDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();

        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const files = Array.from(e.dataTransfer.files);

            // Проверка размера файлов (максимум 50Мб)
            const totalSize = files.reduce((sum, file) => sum + file.size, 0);
            const maxSize = 50 * 1024 * 1024; // 50Мб в байтах

            if (totalSize > maxSize) {
                alert('Общий размер файлов превышает 50Мб');
                return;
            }

            // Проверка расширений файлов
            const validExtensions = ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.jpg', '.jpeg', '.png', '.zip', '.rar'];
            const invalidFiles = files.filter(file => {
                const extension = '.' + file.name.split('.').pop()?.toLowerCase();
                return !validExtensions.includes(extension);
            });

            if (invalidFiles.length > 0) {
                alert('Поддерживаются только файлы с расширениями: PDF, DOC, DOCX, XLS, XLSX, JPG, JPEG, PNG, ZIP, RAR');
                return;
            }

            setAttachedFiles(files);
        }
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => { // Используем DragEvent
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => { // Используем DragEvent
        e.preventDefault();
        e.stopPropagation();
    };

    const removeFile = (index: number) => {
        setAttachedFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
    };

    const formatFileSize = (bytes: number): string => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    return (
        <section className={styles.container}>
            <div className={styles.formSection}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Форма обратной связи</h2>
                    <div className={styles.whatsappButton}>
                        <a href="https://wa.me/79262865772">Связаться по WhatsApp</a>
                        <div className={styles.whatsappIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clipPath="url(#clip0_259_8150)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.9965 0C5.38113 0 0 5.38264 0 11.9999C0 14.6242 0.846321 17.058 2.285 19.0335L0.789795 23.4919L5.40222 22.0178C7.2993 23.2735 9.56321 24 12.0035 24C18.6189 24 24 18.6172 24 12.0001C24 5.38285 18.6189 0.000198364 12.0035 0.000198364L11.9965 0ZM8.64642 6.09541C8.41374 5.53814 8.23739 5.51704 7.88489 5.5027C7.76486 5.49573 7.63111 5.48877 7.48282 5.48877C7.02422 5.48877 6.54473 5.62276 6.25552 5.91902C5.90302 6.27879 5.02841 7.11819 5.02841 8.8396C5.02841 10.561 6.28379 12.2259 6.45297 12.4588C6.62932 12.6914 8.90039 16.2752 12.4266 17.7357C15.1842 18.8786 16.0025 18.7727 16.63 18.6387C17.5468 18.4412 18.6965 17.7636 18.9857 16.9455C19.2749 16.127 19.2749 15.4286 19.1901 15.2805C19.1055 15.1323 18.8726 15.0479 18.5201 14.8713C18.1676 14.6949 16.4537 13.8483 16.1292 13.7354C15.8118 13.6156 15.5086 13.658 15.269 13.9967C14.9304 14.4693 14.599 14.9492 14.3309 15.2383C14.1193 15.464 13.7736 15.4923 13.4846 15.3722C13.0966 15.2102 12.0107 14.8289 10.6705 13.6367C9.63369 12.7127 8.92848 11.5629 8.72406 11.2172C8.51944 10.8646 8.70294 10.6598 8.86496 10.4694C9.04131 10.2506 9.21052 10.0955 9.38687 9.89084C9.56322 9.68636 9.66195 9.58044 9.77481 9.34053C9.89483 9.10778 9.81003 8.86787 9.72543 8.69147C9.64084 8.51507 8.93563 6.79365 8.64642 6.09541Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_259_8150">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={styles.companyName}>
                    LABZIN.PRO
                </div>
            </div>

            {isSuccess ? (
                <div className={styles.successContent}>
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32 58.6667C46.7276 58.6667 58.6667 46.7276 58.6667 32C58.6667 17.2724 46.7276 5.33334 32 5.33334C17.2724 5.33334 5.33334 17.2724 5.33334 32C5.33334 46.7276 17.2724 58.6667 32 58.6667Z" fill="#4CAF50" />
                        <path d="M21.3333 32L28.4444 39.1111L42.6667 24.8889" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h2 className={styles.successTitle}>Успешно отправлено!</h2>
                    <p className={styles.successText}>Мы свяжемся с вами в ближайшее время</p>
                </div>
            ) : (
                <form className={styles.formContainer} onSubmit={handleSubmit} noValidate>
                    <div className={styles.inputFieldsContainer}>
                        <div className={styles.nameAndCompanyContainer}>
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
                                id="company"
                                label="Компания"
                                placeholder=""
                                value={formData.company}
                                onChange={(value) => handleInputChange('company', value)}
                                disabled={isLoading}
                            />
                        </div>

                        <div className={styles.phoneAndEmailContainer}>
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

                        <div
                            className={styles.fileUploadContainer}
                            onClick={() => !isLoading && fileInputRef.current?.click()}
                            onDrop={handleFileDrop}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                        >
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                style={{ display: 'none' }}
                                accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.zip,.rar"
                                multiple
                                disabled={isLoading}
                            />
                            <span>Загрузите файлы. Максимальный размер загружаемых файлов 50Мб</span>
                        </div>

                        {attachedFiles.length > 0 && (
                            <div className={styles.attachedFilesContainer}>
                                <h3 className={styles.attachedFilesTitle}>Прикрепленные файлы:</h3>
                                <div className={styles.attachedFilesList}>
                                    {attachedFiles.map((file, index) => (
                                        <div key={index} className={styles.attachedFileItem}>
                                            <div className={styles.fileIcon}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#3A93FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M14 2V8H20" stroke="#3A93FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M16 13H8" stroke="#3A93FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M16 17H8" stroke="#3A93FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M10 9H9H8" stroke="#3A93FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <div className={styles.fileInfo}>
                                                <div className={styles.fileName}>{file.name}</div>
                                                <div className={styles.fileSize}>{formatFileSize(file.size)}</div>
                                            </div>
                                            <button
                                                type="button"
                                                className={styles.removeFileButton}
                                                onClick={() => removeFile(index)}
                                                disabled={isLoading}
                                            >
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 4L4 12" stroke="#A2A2AE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M4 4L12 12" stroke="#A2A2AE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <textarea
                            id="question"
                            className={styles.textarea}
                            placeholder="Ваш вопрос"
                            value={formData.question}
                            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleInputChange('question', e.target.value)}
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
                    <button type="submit" className={styles.submitButton} disabled={isLoading}>
                        {isLoading ? 'Отправка...' : 'Отправить заявку'}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.0009 15.5858L13.5867 12L10.0009 8.41426C9.95209 8.36544 9.90937 8.31284 9.87276 8.25739C9.61648 7.86924 9.65919 7.34176 10.0009 7.00005C10.3914 6.60952 11.0246 6.60952 11.4151 7.00005L15.708 11.2929C15.8955 11.4805 16.0009 11.7348 16.0009 12C16.0009 12.2653 15.8955 12.5196 15.708 12.7072L11.4151 17C11.0246 17.3906 10.3914 17.3906 10.0009 17C9.61038 16.6095 9.61038 15.9764 10.0009 15.5858Z" fill="black" />
                        </svg>
                    </button>
                </form>
            )}
        </section>
    );
}

