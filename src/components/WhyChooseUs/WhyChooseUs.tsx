'use client'

import React, { useState } from 'react'
import styles from './WhyChooseUs.module.css'
import Modal from '../Modal/Modal'

export default function WhyChooseUs() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false)

  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <div className={styles.textBlock}>
            <h2 className={styles.title}>Почему выбирают нашу компанию?</h2>
            <p className={styles.description}>
              Качественная работа — это инвестиция в ваш успех и наше долгосрочное сотрудничество.
            </p>
          </div>
          <button 
            className={styles.button}
            onClick={() => setIsProjectModalOpen(true)}
          >
            Обсудить проект
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <g clipPath="url(#clip0_110_11092)">
                    <foreignObject x="-10" y="-10" width="84" height="84"><div></div></foreignObject><path data-figma-bg-blur-radius="10" d="M32 0.5C49.397 0.5 63.5 14.603 63.5 32C63.5 49.397 49.397 63.5 32 63.5C14.603 63.5 0.5 49.397 0.5 32C0.5 14.603 14.603 0.5 32 0.5Z" stroke="#31323E" />
                    <path d="M42.6934 18.8262H20.6274C17.6802 18.8262 15.291 21.2153 15.291 24.1625V40.065C15.291 43.0122 17.6802 45.4014 20.6274 45.4014H42.6934C45.6406 45.4014 48.0298 43.0122 48.0298 40.065V24.1625C48.0298 21.2153 45.6406 18.8262 42.6934 18.8262Z" fill="#0C48C6" />
                    <path d="M33.3003 38.0877C33.0063 37.331 33.7512 36.5856 34.5081 36.8788L50.8442 43.2078C51.6143 43.5062 51.6464 44.5843 50.8951 44.9278L46.1529 47.0969C44.9862 47.6306 44.0508 48.5667 43.5181 49.7339L41.3607 54.4601C41.0177 55.2115 39.9398 55.1804 39.6407 54.4105L33.3003 38.0877Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="bgblur_1_110_11092_clip_path" transform="translate(10 10)"><path d="M32 0.5C49.397 0.5 63.5 14.603 63.5 32C63.5 49.397 49.397 63.5 32 63.5C14.603 63.5 0.5 49.397 0.5 32C0.5 14.603 14.603 0.5 32 0.5Z" />
                    </clipPath><clipPath id="clip0_110_11092">
                      <rect width="64" height="64" fill="white" />
                    </clipPath>
                  </defs>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <g clipPath="url(#clip0_110_11092)">
                    <foreignObject x="-10" y="-10" width="84" height="84"><div></div></foreignObject><path data-figma-bg-blur-radius="10" d="M32 0.5C49.397 0.5 63.5 14.603 63.5 32C63.5 49.397 49.397 63.5 32 63.5C14.603 63.5 0.5 49.397 0.5 32C0.5 14.603 14.603 0.5 32 0.5Z" stroke="#31323E" />
                    <path d="M42.6934 18.8262H20.6274C17.6802 18.8262 15.291 21.2153 15.291 24.1625V40.065C15.291 43.0122 17.6802 45.4014 20.6274 45.4014H42.6934C45.6406 45.4014 48.0298 43.0122 48.0298 40.065V24.1625C48.0298 21.2153 45.6406 18.8262 42.6934 18.8262Z" fill="#0C48C6" />
                    <path d="M33.3003 38.0877C33.0063 37.331 33.7512 36.5856 34.5081 36.8788L50.8442 43.2078C51.6143 43.5062 51.6464 44.5843 50.8951 44.9278L46.1529 47.0969C44.9862 47.6306 44.0508 48.5667 43.5181 49.7339L41.3607 54.4601C41.0177 55.2115 39.9398 55.1804 39.6407 54.4105L33.3003 38.0877Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="bgblur_1_110_11092_clip_path" transform="translate(10 10)"><path d="M32 0.5C49.397 0.5 63.5 14.603 63.5 32C63.5 49.397 49.397 63.5 32 63.5C14.603 63.5 0.5 49.397 0.5 32C0.5 14.603 14.603 0.5 32 0.5Z" />
                    </clipPath><clipPath id="clip0_110_11092">
                      <rect width="64" height="64" fill="white" />
                    </clipPath>
                  </defs>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <g clipPath="url(#clip0_110_11092)">
                    <foreignObject x="-10" y="-10" width="84" height="84"><div></div></foreignObject><path data-figma-bg-blur-radius="10" d="M32 0.5C49.397 0.5 63.5 14.603 63.5 32C63.5 49.397 49.397 63.5 32 63.5C14.603 63.5 0.5 49.397 0.5 32C0.5 14.603 14.603 0.5 32 0.5Z" stroke="#31323E" />
                    <path d="M42.6934 18.8262H20.6274C17.6802 18.8262 15.291 21.2153 15.291 24.1625V40.065C15.291 43.0122 17.6802 45.4014 20.6274 45.4014H42.6934C45.6406 45.4014 48.0298 43.0122 48.0298 40.065V24.1625C48.0298 21.2153 45.6406 18.8262 42.6934 18.8262Z" fill="#0C48C6" />
                    <path d="M33.3003 38.0877C33.0063 37.331 33.7512 36.5856 34.5081 36.8788L50.8442 43.2078C51.6143 43.5062 51.6464 44.5843 50.8951 44.9278L46.1529 47.0969C44.9862 47.6306 44.0508 48.5667 43.5181 49.7339L41.3607 54.4601C41.0177 55.2115 39.9398 55.1804 39.6407 54.4105L33.3003 38.0877Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="bgblur_1_110_11092_clip_path" transform="translate(10 10)"><path d="M32 0.5C49.397 0.5 63.5 14.603 63.5 32C63.5 49.397 49.397 63.5 32 63.5C14.603 63.5 0.5 49.397 0.5 32C0.5 14.603 14.603 0.5 32 0.5Z" />
                    </clipPath><clipPath id="clip0_110_11092">
                      <rect width="64" height="64" fill="white" />
                    </clipPath>
                  </defs>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <g clipPath="url(#clip0_110_11092)">
                    <foreignObject x="-10" y="-10" width="84" height="84"><div></div></foreignObject><path data-figma-bg-blur-radius="10" d="M32 0.5C49.397 0.5 63.5 14.603 63.5 32C63.5 49.397 49.397 63.5 32 63.5C14.603 63.5 0.5 49.397 0.5 32C0.5 14.603 14.603 0.5 32 0.5Z" stroke="#31323E" />
                    <path d="M42.6934 18.8262H20.6274C17.6802 18.8262 15.291 21.2153 15.291 24.1625V40.065C15.291 43.0122 17.6802 45.4014 20.6274 45.4014H42.6934C45.6406 45.4014 48.0298 43.0122 48.0298 40.065V24.1625C48.0298 21.2153 45.6406 18.8262 42.6934 18.8262Z" fill="#0C48C6" />
                    <path d="M33.3003 38.0877C33.0063 37.331 33.7512 36.5856 34.5081 36.8788L50.8442 43.2078C51.6143 43.5062 51.6464 44.5843 50.8951 44.9278L46.1529 47.0969C44.9862 47.6306 44.0508 48.5667 43.5181 49.7339L41.3607 54.4601C41.0177 55.2115 39.9398 55.1804 39.6407 54.4105L33.3003 38.0877Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="bgblur_1_110_11092_clip_path" transform="translate(10 10)"><path d="M32 0.5C49.397 0.5 63.5 14.603 63.5 32C63.5 49.397 49.397 63.5 32 63.5C14.603 63.5 0.5 49.397 0.5 32C0.5 14.603 14.603 0.5 32 0.5Z" />
                    </clipPath><clipPath id="clip0_110_11092">
                      <rect width="64" height="64" fill="white" />
                    </clipPath>
                  </defs>
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
      <Modal 
        isOpen={isProjectModalOpen} 
        onClose={() => setIsProjectModalOpen(false)} 
      />
    </section>
  )
}
