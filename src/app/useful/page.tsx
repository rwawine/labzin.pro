'use client';

import React from 'react';
import styles from './page.module.css';
import ContactForm from '@/components/ContactForm/ContactForm';
import Dictionary from '@/components/Dictionary/Dictionary';
import FAQ from '@/components/FAQ/FAQ';
import MainContainer from '@/components/MainContainer/MainContainer';
import Navigation from '@/components/Navigation/Navigation';

export default function Useful() {
  return (
    <main className={styles.container}>
      <Navigation theme="light" />
      <MainContainer
        backgroundImage='/assets/svg/usefulBackground.svg'
        countTitle=""
        title='Знания, которые экономят ваше время и бюджет'
        description='Нормы, лайфхаки, шаблоны — всё для проектировщиков и заказчиков'
        buttons={[
          { text: 'Словарь терминов', onClick: () => console.log('Button 1') },
          { text: 'Ответы на вопросы', onClick: () => console.log('Button 2') },
          { text: 'Файлы для заказчиков', onClick: () => console.log('Button 3') }
        ]}
      />

      <Dictionary />

      <FAQ />

      <section className={styles.exampleSection} aria-labelledby="files-title">
        <div className={styles.exampleHeader}>
          <h2 id="files-title" className={styles.exampleTitle}>
            Файлы для заказчиков
          </h2>
          <p className={styles.exampleDescription}>
            Быстро найти нужный вам файл.
          </p>
        </div>
        <div className={styles.exampleGrid}>
          <article className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.cardIcon} aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <g clipPath="url(#clip0_16_3584)">
                    <path d="M16 2.66666C8.63621 2.66666 2.66667 8.63621 2.66667 16C2.66667 23.3638 8.63621 29.3333 16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.63621 23.3638 2.66666 16 2.66666ZM16 26.6667C10.1187 26.6667 5.33334 21.8813 5.33334 16C5.33334 10.1187 10.1187 5.33333 16 5.33333C21.8813 5.33333 26.6667 10.1187 26.6667 16C26.6667 21.8813 21.8813 26.6667 16 26.6667Z" fill="#1A1A1A" />
                    <path d="M16 7.33333C11.4 7.33333 7.66667 11.0667 7.66667 15.6667C7.66667 20.2667 11.4 24 16 24C20.6 24 24.3333 20.2667 24.3333 15.6667C24.3333 11.0667 20.6 7.33333 16 7.33333ZM16 21.3333C13.0533 21.3333 10.6667 18.9467 10.6667 16C10.6667 13.0533 13.0533 10.6667 16 10.6667C18.9467 10.6667 21.3333 13.0533 21.3333 16C21.3333 18.9467 18.9467 21.3333 16 21.3333Z" fill="#1A1A1A" />
                    <path d="M16 12C13.8 12 12 13.8 12 16C12 18.2 13.8 20 16 20C18.2 20 20 18.2 20 16C20 13.8 18.2 12 16 12Z" fill="#1A1A1A" />
                  </g>
                  <defs>
                    <clipPath id="clip0_16_3584">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Этапы проектирования ЗНП, П, Р</h3>
              <p className={styles.cardSubtitle}>Word. 16 кб</p>
            </div>
            <div className={styles.cardButtonDiv}>
              <button className={styles.cardButton} aria-label="Скачать файл">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </article>
        </div>
        <p className={styles.backgroundTextExample} aria-hidden="true">Документы</p>
      </section>

        <ContactForm />
    </main>
  );
} 