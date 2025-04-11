import React from 'react'
import styles from './Top5Reasons.module.css'

export default function Top5Reasons() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>5 причин выбрать нас</h2>
        <p className={styles.description}>
          Мы предоставляем индивидуальные решения, которые помогут вам достичь наилучших результатов с минимальными затратами.
        </p>
      </div>

      <div className={styles.cardsContainer}>
        <div className={styles.backgroundTitle}>labzin.pro</div>
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              {/* Иконка "Индивидуальность" */}
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M64 58.5C64 52.5 58 46.5 52 38.5C46 30.5 43 16.5 43 16.5H21C21 16.5 18 30.5 12 38.5C6 46.5 0 52.5 0 58.5C0 61.5 3 64 6 64H58C61 64 64 61.5 64 58.5Z" fill="#0C48C6" />
                <path d="M56 58.5C56 54.5 50 48.5 46 42.5C42 36.5 39 22.5 39 22.5H25C25 22.5 22 36.5 18 42.5C14 48.5 8 54.5 8 58.5C8 60.5 10 62 12 62H52C54 62 56 60.5 56 58.5Z" fill="#0C48C6" />
                <path d="M44 58.5C44 56.5 40 50.5 37 46.5C34 42.5 32 32.5 32 32.5C32 32.5 30 42.5 27 46.5C24 50.5 20 56.5 20 58.5C20 59.5 21 60 22 60H42C43 60 44 59.5 44 58.5Z" fill="#0C48C6" />
                <path d="M32 6V58" stroke="#0C48C6" strokeWidth="0.8" />
                <path d="M9 14H55" stroke="#0C48C6" strokeWidth="0.8" />
                <path d="M9 46H55" stroke="#0C48C6" strokeWidth="0.8" />
                <path d="M0 33H64" stroke="#0C48C6" strokeWidth="0.8" />
              </svg>
            </div>
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Индивидуальность</h3>
            <p className={styles.cardDescription}>
              Каждое решение учитывает уникальные особенности вашего проекта.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              {/* Иконка "Полное сопровождение" */}
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g transform="scale(1,-1) translate(0,-64)">
                  <path d="M32 6C32 6 32 24 16 38C0 52 0 58 0 58H32H64C64 58 64 52 48 38C32 24 32 6 32 6Z" fill="#0C48C6" />
                </g>
              </svg>
            </div>
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Полное сопровождение</h3>
            <p className={styles.cardDescription}>
              От концепции до пусконаладки — с авторским надзором и исполнительной документацией.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              {/* Иконка "Гибкость" */}
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64Z" fill="#0C48C6" />
                <path d="M32 58C46.3594 58 58 46.3594 58 32C58 17.6406 46.3594 6 32 6C17.6406 6 6 17.6406 6 32C6 46.3594 17.6406 58 32 58Z" fill="#0C48C6" />
                <path d="M32 52C43.0457 52 52 43.0457 52 32C52 20.9543 43.0457 12 32 12C20.9543 12 12 20.9543 12 32C12 43.0457 20.9543 52 32 52Z" fill="#0C48C6" />
                <path d="M32 46C39.732 46 46 39.732 46 32C46 24.268 39.732 18 32 18C24.268 18 18 24.268 18 32C18 39.732 24.268 46 32 46Z" fill="#0C48C6" />
                <path d="M32 40C36.4183 40 40 36.4183 40 32C40 27.5817 36.4183 24 32 24C27.5817 24 24 27.5817 24 32C24 36.4183 27.5817 40 32 40Z" fill="#0C48C6" />
                <path d="M32 34C33.1046 34 34 33.1046 34 32C34 30.8954 33.1046 30 32 30C30.8954 30 30 30.8954 30 32C30 33.1046 30.8954 34 32 34Z" fill="#0C48C6" />
              </svg>
            </div>
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Гибкость</h3>
            <p className={styles.cardDescription}>
              Адаптируемся под ваши задачи и бюджет, предлагая прозрачные условия сотрудничества.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              {/* Иконка "Доверие" */}
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 0L38 20H58L42 32L48 52L32 40L16 52L22 32L6 20H26L32 0Z" fill="#0C48C6" />
              </svg>
            </div>
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Доверие</h3>
            <p className={styles.cardDescription}>
              Более 10 лет опыта и благодарности от десятков компаний подтверждают нашу репутацию.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              {/* Иконка "Экономия" */}
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 0C32 0 39 16 39 32C39 48 32 64 32 64C32 64 25 48 25 32C25 16 32 0 32 0Z" fill="#0C48C6" />
                <path d="M0 32C0 32 16 25 32 25C48 25 64 32 64 32C64 32 48 39 32 39C16 39 0 32 0 32Z" fill="#0C48C6" />
                <ellipse cx="32" cy="32" rx="8" ry="8" fill="#0C48C6" />
              </svg>
            </div>
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Экономия</h3>
            <p className={styles.cardDescription}>
              Точные расчёты и продуманные решения сокращают затраты на монтаж и согласования.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
