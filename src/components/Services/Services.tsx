import React from 'react'
import styles from './Services.module.css'

const servicesData = [
    {
        title: "Слаботочные сети",
        description: "Разработка и внедрение систем для передачи данных, связи и автоматизации. Надёжность и эффективность в каждом решении.",
        textColor: "#1A1A1A",
    },
    {
        title: "Системы пожарной безопасности",
        description: "Проектирование сигнализаций, систем пожаротушения и оповещения, соответствующих строгим нормативам.",
        textColor: "#F7F7F8",
    },
    {
        title: "Системы безопасности",
        description: "Видеонаблюдение, контроль доступа и охранные системы — от концепции до реализации.",
        textColor: "#1A1A1A",
    },
    {
        title: "Все услуги",
        description: "",
        textColor: "#242424",
    }
]

export default function Services() {
    return (
        <div className={styles.services}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Услуги</h2>
                    <p className={styles.subtitle}>
                        Комплексное проектирование инженерных систем для любых объектов
                    </p>
                </div>

                <div className={styles.cardsContainer}>
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className={styles.card}
                            style={{
                                color: service.textColor
                            }}
                        >
                            {index !== servicesData.length - 1 ? (
                                <div className={styles.iconWrapper}>
                                    <div className={styles.iconCircle}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            ) : (
                                <svg className={styles.arrowIcon} width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M10.0009 15.5858L13.5867 12L10.0009 8.41426C9.95209 8.36544 9.90937 8.31284 9.87276 8.25739C9.61648 7.86924 9.65919 7.34176 10.0009 7.00005C10.3914 6.60952 11.0246 6.60952 11.4151 7.00005L15.708 11.2929C15.8955 11.4805 16.0009 11.7348 16.0009 12C16.0009 12.2653 15.8955 12.5196 15.708 12.7072L11.4151 17C11.0246 17.3906 10.3914 17.3906 10.0009 17C9.61038 16.6095 9.61038 15.9764 10.0009 15.5858Z"
                                        fill={service.textColor}
                                    />
                                </svg>
                            )}

                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                {service.description && (
                                    <p className={styles.cardDescription}>{service.description}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
