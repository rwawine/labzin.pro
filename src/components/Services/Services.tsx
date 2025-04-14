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
        <section className={styles.services}>
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
                            ) : (<></>
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
        </section>
    )
}
