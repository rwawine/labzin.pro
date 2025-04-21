'use client'

import styles from './page.module.css';
import ContactForm from '@/components/ContactForm/ContactForm';
import Review from '@/components/Reviews/Reviews';
import MainContainer from '@/components/MainContainer/MainContainer';
import Navigation from '@/components/Navigation/Navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation as SwiperNavigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { useEffect, useRef, useState } from 'react';
import Tooltip from '@/components/Tooltip/Tooltip';

export default function Certificates() {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<any>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const certificates = [
    {
      src: "/assets/image/certificates/Аварийное освещение «СКАТ».png",
      alt: "Сертификат по аварийному освещению «СКАТ»"
    },
    {
      src: "/assets/image/certificates/Основы СКС LANMASTER -1.png",
      alt: "Сертификат от Hikvision"
    },
    {
      src: "/assets/image/certificates/Проектирование систем пожарной сигнализации на базе ИСО «Орион»-1.png",
      alt: "Основы СКС LANMASTER"
    },
    {
      src: "/assets/image/certificates/Сертификат от Hikvision.png",
      alt: "Аварийное освещение «СКАТ»"
    },
    {
      src: "/assets/image/certificates/Курс проектирование, инсталляции и обслуживания объектов а использованием продукции СКС Лан Юнион.png",
      alt: "Курс проектирование, инсталляции и обслуживания объектов с использованием продукции СКС Лан Юнион"
    }
  ];

  useEffect(() => {
    const progressBar = progressBarRef.current;
    if (!progressBar) return;

    if (!isPaused) {
      const updateProgress = () => {
        progressBar.style.width = '0%';
        setTimeout(() => {
          progressBar.style.width = '100%';
        }, 50);
      };

      const interval = setInterval(() => {
        updateProgress();
      }, 5000);
      updateProgress();

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const handleSwiper = (swiperInstance: any) => {
    swiperRef.current = swiperInstance;
  };

  const handleAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressBarRef.current) {
      progressBarRef.current.style.width = `${(1 - progress) * 100}%`;
    }
  };

  const handlePause = () => {
    if (!swiperRef.current) return;
    swiperRef.current.autoplay.stop();
    setIsPaused(true);
  };

  const handleResume = () => {
    if (!swiperRef.current) return;
    swiperRef.current.autoplay.start();
    setIsPaused(false);
  };

  const handlePrevClick = () => {
    if (!swiperRef.current) return;
    swiperRef.current.slidePrev();
    if (isPaused) handleResume();
  };

  const handleNextClick = () => {
    if (!swiperRef.current) return;
    swiperRef.current.slideNext();
    if (isPaused) handleResume();
  };

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Navigation theme="light" />
      <main className={styles.container}>
        <MainContainer 
          countTitle='' 
          title='Проектируем по стандартам, заслуживающим доверия' 
          description='Сертифицированные решения для объектов любого масштаба' 
          backgroundImage="/assets/image/aboutusimage.png" 
        />
        
        <section className={styles.sectionContainer}>
          <h1 className={styles.sectionTitleStandart}>
            <span style={{ color: 'rgba(12, 72, 198, 1)' }}>БОЛЕЕ 10 ЛЕТ ОПЫТА</span> ПО СТРОГИМ СТАНДАРТАМ
          </h1>

          <div className={styles.tabContainer}>
            <nav className={styles.navigationTabs} aria-label="Стандарты проектирования">
              <Tooltip
                title="ГОСТ"
                description="Это государственный стандарт, который включает в себя требования государства к качеству продукции, его геометрические размеры, отклонения от эталона и т.д."
                position="top"
              >
                <button className={styles.tabBtn}>
                  <span className={styles.tabText}>ГОСТ</span>
                  <svg className={styles.tabIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </Tooltip>

              <Tooltip
                title="ISO 9001"
                description="Международный стандарт, описывающий требования к системе менеджмента качества"
                position="top"
              >
                <button className={styles.tabBtn}>
                  <span className={styles.tabText}>ISO 9001</span>
                  <svg className={styles.tabIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </Tooltip>

              <Tooltip
                title="СРО"
                description="Международный стандарт, описывающий требования к системе менеджмента качества"
                position="top"
              >
                <button className={styles.tabBtn}>
                  <span className={styles.tabText}>СРО</span>
                  <svg className={styles.tabIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </Tooltip>
            </nav>

            <p className={styles.sectionDescription}>
              Каждый проект проходит многоуровневую проверку, гарантируя безопасность, энергоэффективность и соответствие нормам.
            </p>
          </div>
        </section>

        <section className={styles.operatingPrinciples}>
          <h2 className={styles.sectionTitle}>Наши принципы работы</h2>
          <div className={styles.principlesGrid}>
            <div className={styles.principleCard}>
              <div className={styles.principleIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="57" viewBox="0 0 64 57" fill="none">
                  <g id="Layer_2" clipPath="url(#clip0_30_4167)">
                    <g id="Layer 1">
                      <g id="Group">
                        <path id="Vector" d="M36.5609 33.3384L41.474 47.3401L9.11621 57H63.9999L36.5609 33.3384Z" fill="#3A93FE" />
                        <path id="Vector_2" d="M62.6026 47.3233L35.1636 0L28.301 35.4925L38.0202 24.2507L62.6026 47.3233Z" fill="#3A93FE" />
                        <path id="Vector_3" d="M19.6637 38.7743L27.4447 6.04175L0 53.365L34.3016 41.5342L19.6637 38.7743Z" fill="#3A93FE" />
                      </g>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_30_4167">
                      <rect width="64" height="57" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className={styles.principleContent}>
                <h3 className={styles.principleTitle}>Соответствие стандартам</h3>
                <p className={styles.principleDescription}>
                  Проекты отвечают ГОСТ, СНиП и международным нормам — без ошибок и недочётов.
                </p>
              </div>
            </div>

            {/* Безопасность */}
            <div className={styles.principleCard}>
              <div className={styles.principleIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="57" viewBox="0 0 64 57" fill="none">
                  <g id="Layer_2" clipPath="url(#clip0_30_4167)">
                    <g id="Layer 1">
                      <g id="Group">
                        <path id="Vector" d="M36.5609 33.3384L41.474 47.3401L9.11621 57H63.9999L36.5609 33.3384Z" fill="#3A93FE" />
                        <path id="Vector_2" d="M62.6026 47.3233L35.1636 0L28.301 35.4925L38.0202 24.2507L62.6026 47.3233Z" fill="#3A93FE" />
                        <path id="Vector_3" d="M19.6637 38.7743L27.4447 6.04175L0 53.365L34.3016 41.5342L19.6637 38.7743Z" fill="#3A93FE" />
                      </g>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_30_4167">
                      <rect width="64" height="57" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className={styles.principleContent}>
                <h3 className={styles.principleTitle}>Безопасность</h3>
                <p className={styles.principleDescription}>
                  Приоритет в каждом решении, от концепции до реализации.
                </p>
              </div>
            </div>

            {/* Инновации */}
            <div className={styles.principleCard}>
              <div className={styles.principleIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="57" viewBox="0 0 64 57" fill="none">
                  <g id="Layer_2" clipPath="url(#clip0_30_4167)">
                    <g id="Layer 1">
                      <g id="Group">
                        <path id="Vector" d="M36.5609 33.3384L41.474 47.3401L9.11621 57H63.9999L36.5609 33.3384Z" fill="#3A93FE" />
                        <path id="Vector_2" d="M62.6026 47.3233L35.1636 0L28.301 35.4925L38.0202 24.2507L62.6026 47.3233Z" fill="#3A93FE" />
                        <path id="Vector_3" d="M19.6637 38.7743L27.4447 6.04175L0 53.365L34.3016 41.5342L19.6637 38.7743Z" fill="#3A93FE" />
                      </g>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_30_4167">
                      <rect width="64" height="57" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className={styles.principleContent}>
                <h3 className={styles.principleTitle}>Инновации</h3>
                <p className={styles.principleDescription}>
                  Используем современные технологии для повышения эффективности.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.principlesGridBottom}>
            {/* Надёжность */}
            <div className={styles.principleCard}>
              <div className={styles.principleIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="57" viewBox="0 0 64 57" fill="none">
                  <g id="Layer_2" clipPath="url(#clip0_30_4167)">
                    <g id="Layer 1">
                      <g id="Group">
                        <path id="Vector" d="M36.5609 33.3384L41.474 47.3401L9.11621 57H63.9999L36.5609 33.3384Z" fill="#3A93FE" />
                        <path id="Vector_2" d="M62.6026 47.3233L35.1636 0L28.301 35.4925L38.0202 24.2507L62.6026 47.3233Z" fill="#3A93FE" />
                        <path id="Vector_3" d="M19.6637 38.7743L27.4447 6.04175L0 53.365L34.3016 41.5342L19.6637 38.7743Z" fill="#3A93FE" />
                      </g>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_30_4167">
                      <rect width="64" height="57" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className={styles.principleContent}>
                <h3 className={styles.principleTitle}>Надёжность</h3>
                <p className={styles.principleDescription}>
                  Адаптируемся к новым нормативам, выполняя обязательства.
                </p>
              </div>
            </div>

            {/* Обратная связь */}
            <div className={styles.principleCard}>
              <div className={styles.principleIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="57" viewBox="0 0 64 57" fill="none">
                  <g id="Layer_2" clipPath="url(#clip0_30_4167)">
                    <g id="Layer 1">
                      <g id="Group">
                        <path id="Vector" d="M36.5609 33.3384L41.474 47.3401L9.11621 57H63.9999L36.5609 33.3384Z" fill="#3A93FE" />
                        <path id="Vector_2" d="M62.6026 47.3233L35.1636 0L28.301 35.4925L38.0202 24.2507L62.6026 47.3233Z" fill="#3A93FE" />
                        <path id="Vector_3" d="M19.6637 38.7743L27.4447 6.04175L0 53.365L34.3016 41.5342L19.6637 38.7743Z" fill="#3A93FE" />
                      </g>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_30_4167">
                      <rect width="64" height="57" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className={styles.principleContent}>
                <h3 className={styles.principleTitle}>Обратная связь</h3>
                <p className={styles.principleDescription}>
                  Слушаем клиентов и совершенствуем подход.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.certificateSection}>
          <div className={styles.certificateHeader}>
            <div className={styles.certificateTitleContainer}>
              <h2 className={styles.certificateTitle}>Сертификаты</h2>
              <p className={styles.certificateDescription}>
                Официальные лицензии и соответствие стандартам
              </p>
            </div>
            <div className={styles.sliderControls}>
              <div className={styles.autoSliding}>
                <div className={styles.progressBarBackground}></div>
                <div
                  ref={progressBarRef}
                  className={styles.progressBarForeground}
                ></div>
              </div>

              <div className={styles.navigationButtons}>
                <button
                  className={styles.arrowButton}
                  aria-label="Предыдущий слайд"
                  onClick={handlePrevClick}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5.125 11.6562L10.625 6.15625C10.8125 5.96875 11.1562 5.96875 11.3438 6.15625C11.5312 6.34375 11.5312 6.6875 11.3438 6.875L6.6875 11.5H18.5C18.75 11.5 19 11.75 19 12C19 12.2812 18.75 12.5 18.5 12.5H6.6875L11.3438 17.1562C11.5312 17.3438 11.5312 17.6875 11.3438 17.875C11.1562 18.0625 10.8125 18.0625 10.625 17.875L5.125 12.375C4.9375 12.1875 4.9375 11.8438 5.125 11.6562Z" fill="#1E1E1E" />
                  </svg>
                </button>
                <button
                  className={styles.arrowButton}
                  aria-label="Следующий слайд"
                  onClick={handleNextClick}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18.8438 12.375L13.3438 17.875C13.1562 18.0625 12.8125 18.0625 12.625 17.875C12.4375 17.6875 12.4375 17.3438 12.625 17.1562L17.2812 12.5H5.5C5.21875 12.5 5 12.2812 5 12C5 11.75 5.21875 11.5 5.5 11.5H17.2812L12.625 6.875C12.4375 6.6875 12.4375 6.34375 12.625 6.15625C12.8125 5.96875 13.1562 5.96875 13.3438 6.15625L18.8438 11.6562C19.0312 11.8438 19.0312 12.1875 18.8438 12.375Z" fill="#1E1E1E" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <Swiper
            modules={[SwiperNavigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
            slidesPerGroup={1}
            loop={true}
            navigation={false}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false
            }}
            speed={500}
            onSwiper={handleSwiper}
            onAutoplayTimeLeft={handleAutoplayTimeLeft}
            breakpoints={{
              1550: {
                slidesPerView: 4
              },
              1200: {
                slidesPerView: 3
              },
              768: {
                slidesPerView: 2
              },
              480: {
                slidesPerView: 1
              }
            }}
            className={styles.certificatesSlider}
          >
            {certificates.map((cert, index) => (
              <SwiperSlide key={index} className={styles.certificateSlide}>
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className={styles.certificateImage}
                  loading="lazy"
                  onClick={() => handleImageClick(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleImageClick(index);
                    }
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {isModalOpen && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
              <button 
                className={styles.closeButton}
                onClick={handleCloseModal}
                aria-label="Закрыть"
              >
                ×
              </button>
              <div className={styles.modalImageContainer} onClick={handleCloseModal}>
                <Swiper
                  modules={[SwiperNavigation]}
                  initialSlide={activeIndex}
                  navigation={true}
                  className={styles.modalSwiper}
                >
                  {certificates.map((cert, index) => (
                    <SwiperSlide key={index} className={styles.modalSlide}>
                      <img
                        src={cert.src}
                        alt={cert.alt}
                        className={styles.modalImage}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        )}

        <Review />
        <ContactForm />
      </main>
    </div>
  );
} 