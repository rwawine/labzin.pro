'use client';

import React from 'react';
import styles from './page.module.css';
import ContactForm from '@/components/ContactForm/ContactForm';
import Dictionary from '@/components/Dictionary/Dictionary';
import FAQ from '@/components/FAQ/FAQ';
import MainContainer from '@/components/MainContainer/MainContainer';
import Navigation from '@/components/Navigation/Navigation';

export default function Useful() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className={styles.container}>
      <Navigation theme="light" />
      <MainContainer
        backgroundImage='/assets/svg/usefulBackground.svg'
        countTitle=""
        title='Знания, которые экономят ваше время и бюджет'
        description='Нормы, лайфхаки, шаблоны — всё для проектировщиков и заказчиков'
        buttons={[
          { text: 'Словарь терминов', onClick: () => scrollToSection('dictionary-section') },
          { text: 'Ответы на вопросы', onClick: () => scrollToSection('faq-section') },
          { text: 'Файлы для заказчиков', onClick: () => scrollToSection('files-section') }
        ]}
      />

      <div id="dictionary-section">
        <Dictionary />
      </div>

      <div id="faq-section">
        <FAQ />
      </div>

      <section id="files-section" className={styles.exampleSection} aria-labelledby="files-title">
        <div className={styles.exampleHeader}>
          <h2 id="files-title" className={styles.exampleTitle}>
            Файлы для заказчиков
          </h2>
          <p className={styles.exampleDescription}>
            Быстро найти нужный вам файл.
          </p>
        </div>
        <div className={styles.exampleGrid}>
          <article className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.cardIcon} aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <g clipPath="url(#clip0_16_3425)">
                    <path d="M20.75 30.75H18.875V23.25H20.75C22.1307 23.25 23.25 24.3693 23.25 25.75V28.25C23.25 29.6307 22.1307 30.75 20.75 30.75Z" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M27 23.25V30.75" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M27 23.25H30.75" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M29.5 27H27" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.75 30.75V23.25" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.25 23.25H10.75V27H13.25C14.2856 27 15.125 26.1606 15.125 25.125C15.125 24.0894 14.2856 23.25 13.25 23.25Z" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23.75 18.7501V8.75" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.25 1.25H3.75C2.36931 1.25 1.25 2.36931 1.25 3.75V28.25C1.25 29.6307 2.36931 30.75 3.75 30.75H6.25" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23.75 8.75H18.75C17.3693 8.75 16.25 7.63069 16.25 6.25V1.25L23.75 8.75Z" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_16_3425">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Пример АК</h3>
              <p className={styles.cardSubtitle}>PDF. 2,08 Мб</p>
            </div>
            <div className={styles.cardButtonDiv}>
              <a href="/assets/file/Пример АК.pdf" download>
                <button className={styles.cardButton} aria-label="Скачать файл">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </a>
            </div>
          </article>
        </div>
        <p className={styles.backgroundTextExample} aria-hidden="true">Документы</p>
      </section>

      <ContactForm />
    </main>
  );
} 