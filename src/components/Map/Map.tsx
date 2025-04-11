import React from 'react'
import styles from './Map.module.css'

export default function Map() {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Создаём выдающиеся проекты</h2>
          <p className={styles.subtitle}>Реализованные объекты: от частных коттеджей до бизнес-центров</p>
        </div>
        <div className={styles.buttonContainer}>
          <span className={styles.buttonText}>Подробнее о портфолио</span>
          <div className={styles.arrowIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.0009 15.5858L13.5867 12L10.0009 8.41426C9.95209 8.36544 9.90937 8.31284 9.87276 8.25739C9.61648 7.86924 9.65919 7.34176 10.0009 7.00005C10.3914 6.60952 11.0246 6.60952 11.4151 7.00005L15.708 11.2929C15.8955 11.4805 16.0009 11.7348 16.0009 12C16.0009 12.2653 15.8955 12.5196 15.708 12.7072L11.4151 17C11.0246 17.3906 10.3914 17.3906 10.0009 17C9.61038 16.6095 9.61038 15.9764 10.0009 15.5858Z" fill="#0D0E14" />
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.mapContainer}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae9d55fbdcac3647e910d14b222bae73d248b716ff9f7f93fbab240c6c69fd5cc&amp;source=constructor"
          width="690"
          height="534"
          frameBorder="0"
          title="Яндекс Карта"
        ></iframe>
      </div>
    </div>
  );
}
