'use client';

import { useState, FormEvent } from 'react';
import Input from '@/components/Input/Input';
import styles from './CareerForm.module.css';

interface FormData {
    fullName: string;
    phone: string;
    email: string;
    position: string;
    resume: File | null;
    message: string;
}

export const CareerForm = () => {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        phone: '',
        email: '',
        position: '',
        resume: null,
        message: '',
    });

    const handleInputChange = (field: keyof FormData) => (value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFormData(prev => ({
            ...prev,
            resume: file
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        // Здесь будет логика отправки формы
        console.log(formData);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h2 className={styles.title}>Отправить резюме</h2>

            <div className={styles.formFields}>
                <Input
                    id="fullName"
                    label="ФИО"
                    placeholder=""
                    value={formData.fullName}
                    onChange={handleInputChange('fullName')}
                    required
                />

                <Input
                    id="phone"
                    label="Телефон"
                    placeholder=""
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange('phone')}
                    required
                />

                <Input
                    id="email"
                    label="E-mail"
                    placeholder=""
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    required
                />

                <Input
                    id="position"
                    label="Интересующая должность"
                    placeholder=""
                    value={formData.position}
                    onChange={handleInputChange('position')}
                    required
                />

                <div className={styles.fileUpload}>
                    <input
                        type="file"
                        name="resume"
                        onChange={handleFileChange}
                        className={styles.fileInput}
                        accept=".pdf,.doc,.docx"
                        id="resume"
                    />
                    <label htmlFor="resume" className={styles.fileLabel}>
                        Загрузите ваше резюме одним файлом (*.pdf)
                        <span className={styles.fileSizeLimit}>Максимальный размер загружаемого файла: 25МБ</span>
                    </label>
                </div>

                <div className={styles.inputWrapper}>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message')(e.target.value)}
                        className={styles.textarea}
                        placeholder="Ваше сообщение"
                    />
                </div>
            </div>

            <div className={styles.consent}>
                <p>
                    Нажимая на кнопку "Отправить", вы даете согласие на обработку своих персональных данных и соглашаетесь с <a href="/privacy" className={styles.link}>Политикой конфиденциальности</a>
                </p>
            </div>

            <div className={styles.submitSection}>
                <button type="submit" className={styles.submitButton}>
                    Отправить
                    <span className={styles.submitIcon}>→</span>
                </button>

                <div className={styles.orSection}>
                    <span className={styles.orText}>Или</span>
                </div>

                <a href="https://wa.me/your_number" className={styles.whatsappButton}>
                    <span>Связаться по WhatsApp</span>
                    <div className={styles.whatsappIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 15.55C16.4 16.31 15.3 16.96 14.47 17.14C13.93 17.26 13.23 17.35 10.76 16.27C7.7 14.93 5.87 11.82 5.72 11.62C5.57 11.42 4.47 9.91 4.47 8.34C4.47 6.77 5.24 6.03 5.54 5.71C5.79 5.45 6.22 5.33 6.63 5.33C6.77 5.33 6.9 5.34 7.01 5.35C7.31 5.36 7.46 5.38 7.66 5.9C7.91 6.55 8.56 8.12 8.63 8.28C8.71 8.44 8.79 8.67 8.66 8.89C8.54 9.12 8.44 9.23 8.28 9.42C8.12 9.61 7.97 9.76 7.81 9.96C7.67 10.14 7.51 10.33 7.7 10.67C7.89 11 8.54 12.06 9.5 12.91C10.72 14 11.76 14.34 12.15 14.48C12.45 14.59 12.81 14.56 13 14.34C13.24 14.06 13.54 13.58 13.85 13.11C14.07 12.77 14.35 12.71 14.65 12.82C14.96 12.92 16.52 13.7 16.86 13.87C17.2 14.04 17.43 14.12 17.5 14.27C17.58 14.42 17.58 15.08 17.25 15.88L16.64 15.55Z" fill="currentColor" />
                        </svg>
                    </div>
                </a>
            </div>
        </form>
    );
}; 