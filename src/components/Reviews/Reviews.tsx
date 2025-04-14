'use client'

import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Reviews.module.css';

interface Review {
    id: number;
    text: string;
    author: string;
    company: string;
}

const reviews: Review[] = [
    {
        id: 1,
        text: "Мы работаем с Labzin уже более 2 лет. За это время они помогли нам создать несколько успешных проектов, которые принесли значительный рост бизнеса.",
        author: "Александр Петров",
        company: "CEO, TechCorp"
    },
    {
        id: 2,
        text: "Команда Labzin - это профессионалы высокого класса. Они не только создают качественные решения, но и помогают развивать бизнес.",
        author: "Мария Иванова",
        company: "CTO, InnovateX"
    },
    {
        id: 3,
        text: "Сотрудничество с Labzin - это всегда результат. Они понимают бизнес и создают решения, которые действительно работают.",
        author: "Дмитрий Сидоров",
        company: "Founder, StartupHub"
    }
];

const SLIDE_DURATION = 5000;

export const Reviews: React.FC = () => {
    const [swiper, setSwiper] = useState<any>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [currentBulletIndex, setCurrentBulletIndex] = useState(0);

    // Определяем, является ли устройство мобильным
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    // Инициализация Swiper
    const handleSwiper = (swiperInstance: any) => {
        setSwiper(swiperInstance);
        const initialBulletIndex = isMobile ?
            swiperInstance.realIndex :
            Math.floor(swiperInstance.realIndex / 2);
        setCurrentBulletIndex(initialBulletIndex);
    };

    // Обработка изменения слайда
    const handleSlideChange = () => {
        if (!swiper) return;

        const realIndex = swiper.realIndex;
        setActiveIndex(realIndex);

        const newBulletIndex = isMobile ?
            realIndex :
            Math.floor(realIndex / 2);
        setCurrentBulletIndex(newBulletIndex);
    };

    // Обработка прогресса автопрокрутки
    const handleAutoplayTimeLeft = (s: any, time: number, progress: number) => {
        if (progressRef.current) {
            progressRef.current.style.width = `${(1 - progress) * 100}%`;
        }
    };

    // Обработка паузы автопрокрутки
    const handlePause = () => {
        if (!swiper) return;
        swiper.autoplay.stop();
        setIsPaused(true);
    };

    // Обработка возобновления автопрокрутки
    const handleResume = () => {
        if (!swiper) return;
        swiper.autoplay.start();
        setIsPaused(false);
    };

    // Обработка клика на предыдущий слайд
    const handlePrevClick = () => {
        if (!swiper) return;
        swiper.slidePrev();
    };

    // Обработка клика на следующий слайд
    const handleNextClick = () => {
        if (!swiper) return;
        swiper.slideNext();
    };

    // Обработка клика по буллитам
    const handleBulletClick = (index: number) => {
        if (!swiper) return;

        const targetIndex = isMobile ? index : index * 2;
        swiper.slideToLoop(targetIndex);
    };

    // Вычисляем количество буллитов
    const getBulletCount = () => {
        return isMobile ? reviews.length : Math.ceil(reviews.length / 2);
    };

    // Проверяем, активен ли буллит
    const isBulletActive = (index: number) => {
        return index === currentBulletIndex;
    };

    return (
        <section className={styles.reviewsSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.titleBlock}>
                        <h2 className={styles.title}>Отзывы наших клиентов</h2>
                        <p className={styles.subtitle}>
                            Мы гордимся тем, что помогаем бизнесу расти и развиваться. Вот что говорят о нас наши клиенты.
                        </p>
                    </div>
                    <div className={styles.controls}>
                        <div className={styles.slidePoints}>
                            <div className={styles.progressBar}>
                                <div ref={progressRef} className={styles.progressFill} />
                            </div>
                            {Array.from({ length: getBulletCount() }).map((_, index) => (
                                <button
                                    key={index}
                                    className={`${styles.bullet} ${isBulletActive(index) ? styles.activeBullet : ''}`}
                                    onClick={() => handleBulletClick(index)}
                                    aria-label={`Перейти к слайду ${index + 1}`}
                                    tabIndex={0}
                                />
                            ))}
                        </div>
                        <div className={styles.navigationButtons}>
                            <button
                                className={styles.navButton}
                                onClick={handlePrevClick}
                                aria-label="Предыдущий слайд"
                                tabIndex={0}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M5.125 11.6562L10.625 6.15625C10.8125 5.96875 11.1562 5.96875 11.3438 6.15625C11.5312 6.34375 11.5312 6.6875 11.3438 6.875L6.6875 11.5H18.5C18.75 11.5 19 11.75 19 12C19 12.2812 18.75 12.5 18.5 12.5H6.6875L11.3438 17.1562C11.5312 17.3438 11.5312 17.6875 11.3438 17.875C11.1562 18.0625 10.8125 18.0625 10.625 17.875L5.125 12.375C4.9375 12.1875 4.9375 11.8438 5.125 11.6562Z" fill="#1E1E1E" />
                                </svg>
                            </button>
                            <button
                                className={styles.navButton}
                                onClick={handleNextClick}
                                aria-label="Следующий слайд"
                                tabIndex={0}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M18.8438 12.375L13.3438 17.875C13.1562 18.0625 12.8125 18.0625 12.625 17.875C12.4375 17.6875 12.4375 17.3438 12.625 17.1562L17.2812 12.5H5.5C5.21875 12.5 5 12.2812 5 12C5 11.75 5.21875 11.5 5.5 11.5H17.2812L12.625 6.875C12.4375 6.6875 12.4375 6.34375 12.625 6.15625C12.8125 5.96875 13.1562 5.96875 13.3438 6.15625L18.8438 11.6562C19.0312 11.8438 19.0312 12.1875 18.8438 12.375Z" fill="#1E1E1E" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.sliderContainer}>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        navigation={false}
                        autoplay={{
                            delay: SLIDE_DURATION,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        loop={true}
                        speed={500}
                        onSwiper={handleSwiper}
                        onSlideChange={handleSlideChange}
                        onAutoplayTimeLeft={handleAutoplayTimeLeft}
                        breakpoints={{
                            768: {
                                slidesPerView: 2
                            }
                        }}
                    >
                        {reviews.map((review) => (
                            <SwiperSlide key={review.id}>
                                <div className={styles.slide}>
                                    <div className={styles.reviewContent}>
                                        <p className={styles.reviewText}>{review.text}</p>
                                        <div className={styles.reviewAuthor}>
                                            <span className={styles.authorName}>{review.author}</span>
                                            <span className={styles.companyName}>{review.company}</span>
                                        </div>
                                    </div>
                                    <div className={styles.quoteIcon}>❝</div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Reviews;