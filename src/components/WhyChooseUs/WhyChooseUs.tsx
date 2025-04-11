'use client'

import React from 'react'
import styles from './WhyChooseUs.module.css'

export default function WhyChooseUs() {
  return (
    <div className={styles.whyChooseUs}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <div className={styles.textBlock}>
            <h2 className={styles.title}>Почему выбирают нашу компанию?</h2>
            <p className={styles.description}>
              Качественная работа — это инвестиция в ваш успех и наше долгосрочное сотрудничество.
            </p>
          </div>
          <button className={styles.button}>
            <span>Обсудить проект</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.291 18.826L48.03 45.401" stroke="#0C48C6" strokeWidth="2" strokeLinecap="round" />
                  <path d="M33.235 36.814L51.44 54.999" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>Качество превыше всего</h3>
                <p className={styles.cardText}>
                  Мы не снижаем цены в ущерб качеству: каждый проект проходит многоуровневую проверку опытными специалистами, что исключает ошибки и гарантирует результат.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.371 16.245L48.03 29.079" stroke="#0C48C6" strokeWidth="2" strokeLinecap="round" />
                  <path d="M15.371 29.08L35.81 47.224" stroke="#0C48C6" strokeWidth="2" strokeLinecap="round" />
                  <path d="M35.814 29.08L48.035 47.224" stroke="#0C48C6" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>Комплексный подход</h3>
                <p className={styles.cardText}>
                  Мы согласовываем конструктивные и инженерные решения ещё на этапе разработки, предотвращая конфликты и доработки.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.389 12.321L46.666 31.599" stroke="#0C48C6" strokeWidth="2" strokeLinecap="round" />
                  <path d="M15.68 23.151L34.902 42.54" stroke="#0C48C6" strokeWidth="2" strokeLinecap="round" />
                  <path d="M25.143 33.268L44.377 50.567" stroke="#0C48C6" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>Репутация и доверие</h3>
                <p className={styles.cardText}>
                  Более 10 лет работы с проектно-монтажными организациями подтверждают нашу надёжность. Руководители десятков компаний доверяют нам свои объекты.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.389 12.321L46.666 31.599" stroke="#0C48C6" strokeWidth="2" strokeLinecap="round" />
                  <path d="M15.68 23.151L34.902 42.54" stroke="#0C48C6" strokeWidth="2" strokeLinecap="round" />
                  <path d="M25.143 33.268L44.377 50.567" stroke="#0C48C6" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>Профессиональная команда</h3>
                <p className={styles.cardText}>
                  Наши специалисты — это опытные профессионалы с высокой квалификацией, а не случайные исполнители.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
