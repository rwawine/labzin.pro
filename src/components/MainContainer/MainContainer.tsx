"use client";

import React from 'react'
import styles from './MainContainer.module.css';

// Интерфейс для пропсов компонента MainContainer
interface MainContainerProps {
    countTitle?: string;
    title?: string;
    description?: string;
    buttonText?: string;
    onButtonClick?: () => void;
    backgroundImage?: string;
    backgroundColor?: string;
}

export default function MainContainer({
    countTitle = 'Выполнено 650 объектов',
    title = 'Инженерные решения, которым доверяют',
    description = 'Проектируем и внедряем надёжные системы для жилых домов, коммерческих зданий и промышленных комплексов.',
    buttonText = 'Обсудить проект',
    onButtonClick = () => { },
    backgroundImage,
    backgroundColor
}: MainContainerProps) {
    const handleButtonClick = () => {
        if (onButtonClick) {
            onButtonClick();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            handleButtonClick();
        }
    };

    return (
        <div
            className={styles.mainContainer}
            style={{
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
                backgroundColor: backgroundColor || '#000',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
            role="banner"
        >
            <div className={styles.mainContainer__textContainer}>
                <div className={styles.mainContainer__titleContainer}>
                    <div className={styles.mainContainer__title1}>{countTitle}</div>
                    <div className={styles.mainContainer__title2}>{title}</div>
                </div>
                <div className={styles.mainContainer__description}>{description}</div>
            </div>
            <div
                className={styles.mainContainer__button}
                tabIndex={0}
                aria-label={buttonText}
                onClick={handleButtonClick}
                onKeyDown={handleKeyDown}
                role="button"
            >
                <div className={styles.mainContainer__buttonText}>{buttonText}</div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.0009 15.5858L13.5867 12L10.0009 8.41426C9.95209 8.36544 9.90937 8.31284 9.87276 8.25739C9.61648 7.86924 9.65919 7.34176 10.0009 7.00005C10.3914 6.60952 11.0246 6.60952 11.4151 7.00005L15.708 11.2929C15.8955 11.4805 16.0009 11.7348 16.0009 12C16.0009 12.2653 15.8955 12.5196 15.708 12.7072L11.4151 17C11.0246 17.3906 10.3914 17.3906 10.0009 17C9.61038 16.6095 9.61038 15.9764 10.0009 15.5858Z" fill="black" />
                </svg>
            </div>
        </div>
    )
}
