import React from 'react'
import styles from './ProjectTypes.module.css'

export default function ProjectTypes() {
    return (
        <section className={styles.projectTypes}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h2 className={styles.titleText}>Типы объектов, с которыми мы работаем</h2>
                    <h4 className={styles.descriptionText}>Проектируем инженерные системы с учётом специфики каждого объекта</h4>
                    <button className={styles.downloadButton}>
                        Обсудить проект
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.0009 15.5858L13.5867 12L10.0009 8.41426C9.95209 8.36544 9.90937 8.31284 9.87276 8.25739C9.61648 7.86924 9.65919 7.34176 10.0009 7.00005C10.3914 6.60952 11.0246 6.60952 11.4151 7.00005L15.708 11.2929C15.8955 11.4805 16.0009 11.7348 16.0009 12C16.0009 12.2653 15.8955 12.5196 15.708 12.7072L11.4151 17C11.0246 17.3906 10.3914 17.3906 10.0009 17C9.61038 16.6095 9.61038 15.9764 10.0009 15.5858Z" fill="black" />
                        </svg>
                    </button>
                </div>

                <div className={styles.rightColumn}>
                    <div className={styles.advantageCard}>
                        <div className={styles.advantageIcon}>
                            01
                        </div>
                        <div className={styles.advantageContent}>
                            <h3 className={styles.advantageTitle}>Жилые комплексы</h3>
                            <p className={styles.advantageText}>
                                Надёжные системы отопления, вентиляции, водоснабжения и безопасности для комфортной жизни.
                            </p>
                        </div>
                    </div>

                    <div className={styles.advantageCard}>
                        <div className={styles.advantageIcon}>
                            02
                        </div>
                        <div className={styles.advantageContent}>
                            <h3 className={styles.advantageTitle}>Коммерческие объекты</h3>
                            <p className={styles.advantageText}>
                                Оптимизированные решения для офисов, бизнес-центров и торговых комплексов с акцентом на энергосбережение и бесперебойность.
                            </p>
                        </div>
                    </div>

                    <div className={styles.advantageCard}>
                        <div className={styles.advantageIcon}>
                            03
                        </div>
                        <div className={styles.advantageContent}>
                            <h3 className={styles.advantageTitle}>Промышленные объекты</h3>
                            <p className={styles.advantageText}>
                                Системы для заводов, складов и логистических центров: высокая надёжность и соответствие требованиям безопасности.
                            </p>
                        </div>
                    </div>

                    <div className={styles.advantageCard}>
                        <div className={styles.advantageIcon}>
                            04
                        </div>
                        <div className={styles.advantageContent}>
                            <h3 className={styles.advantageTitle}>Общественные здания</h3>
                            <p className={styles.advantageText}>
                                Современные решения для школ, больниц и административных объектов, обеспечивающие комфорт и соблюдение норм.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
