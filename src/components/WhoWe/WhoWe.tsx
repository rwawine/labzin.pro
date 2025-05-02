"use client"

import React, { useState } from 'react'
import styles from './WhoWe.module.css'
import Link from 'next/link';

export default function WhoWe() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <section className={styles.WhoWe}>
            <div className={styles.container}>
                <h1 className={styles.title}>Инженер-проектировщик</h1>

                <div className={styles.contentWrapper}>
                    <img
                        src="/assets/image/engineering-photo.png"
                        alt="Инженер-проектировщик за работой"
                        className={styles.image}
                    />

                    <div className={`${styles.card} ${isHovered ? styles.cardHovered : ''}`}>
                        <div className={styles.header}>
                            <div className={styles.logo}>
                                labzin.pro
                            </div>
                            <p className={styles.subtitle}>
                                — ваш надежный партнер в разработке проектной и рабочей документации, включая ЗнП.
                            </p>
                        </div>

                        <p className={styles.text}>
                            Наша компания специализируется на разработке проектной документации и внедрении комплексных инженерных решений.
                        </p>

                        <p className={styles.text}>
                            Мы предлагаем услуги по разработке ведомостей, чертежей, работе со смежниками и ответам на замечания.
                        </p>

                        <p className={styles.text}>
                            Наша миссия заключается в объединении технологичности и индивидуальном подходе к каждому проекту, включая навыки прохождения государственной экспертизы.
                        </p>

                        <Link 
                            href="/about"
                            className={styles.button}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className={styles.arrow}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M7 7L17 17M17 17V7M17 17H7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg></span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
