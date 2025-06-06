'use client'

import styles from './page.module.css';
import MainContainer from '@/components/MainContainer/MainContainer';
import ContactForm from '@/components/ContactForm/ContactForm';
import Map from '@/components/Map/Map';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import Navigation from '../../components/Navigation/Navigation';
import Modal from '@/components/Modal/Modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation as SwiperNavigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { useEffect, useRef, useState } from 'react';

export default function About() {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<any>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const certificates = [
    {
      src: "/assets/image/certificates/Аварийное освещение.png",
      alt: "Проектирование систем пожарной сигнализации на базе ИСО «Орион»"
    },
    {
      src: "/assets/image/certificates/Основы СКС.png",
      alt: "Сертификат от Hikvision"
    },
    {
      src: "/assets/image/certificates/Проектирование систем.png",
      alt: "Основы СКС LANMASTER"
    },
    {
      src: "/assets/image/certificates/Сертификат от Hikvision.png",
      alt: "Аварийное освещение «СКАТ»"
    },
    {
      src: "/assets/image/certificates/Курс проектирование.png",
      alt: "Курс проектирование, инсталляции и обслуживания объектов с использованием продукции СКС Лан Юнион"
    }
  ];

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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

  return (
    <div>
      <Navigation theme="light" />
      <main className={styles.container}>
        <MainContainer backgroundImage="/assets/image/aboutusimage.png" />
        <section className={styles.aboutSection}>
          <h1 className={styles.aboutTitle}>КТО МЫ?</h1>
          <p className={styles.aboutText}>
            Labzin.pro — команда профессионалов с опытом более 10 лет. Проектируем надёжные инженерные системы для жилых, коммерческих и промышленных объектов.
          </p>
        </section>
        <div className={styles.counterSection}>
          <div className={styles.statistics}>
            <div className={styles.statistics__item}>
              <div className={styles.statistics__number}>{'>'}10+ лет</div>
              <div className={styles.statistics__text}>
                реализуем проекты с учётом современных технологий и стандартов.
              </div>
            </div>
            <div className={styles.statistics__item}>
              <div className={styles.statistics__number}>{'>'}90%</div>
              <div className={styles.statistics__text}>
                заказчиков возвращаются или рекомендуют нас
              </div>
            </div>
            <div className={styles.statistics__item}>
              <div className={styles.statistics__number}>{'>'}650+</div>
              <div className={styles.statistics__text}>
                проектов, каждый соответствует нормативам и требованиям
              </div>
            </div>
            <div className={styles.statistics__item}>
              <div className={styles.statistics__number}>{'>'}6+</div>
              <div className={styles.statistics__text}>
                направлений, от слаботочных сетей до пожарной безопасности
              </div>
            </div>
            <div className={styles.backgroundText}>labzin.pro</div>
          </div>
        </div>
        <WhyChooseUs />
        <div className={styles.bannerSection}>
          <div className={styles.bannerContent}>
            <h2 className={styles.bannerTitle}>Надежные инженерные решения для вашего проекта.</h2>
            <p className={styles.bannerDescription}>
              Мы разрабатываем продуманные и качественные инженерные системы, которые функционируют без сбоев. Доверьте проектирование профессионалам и получите решения, соответствующие всем стандартам и вашим требованиям.
            </p>
            <button 
              className={styles.bannerButton} 
              aria-label="Обсудить проект"
              onClick={() => setIsProjectModalOpen(true)}
            >
              <span>Обсудить проект</span>
              <span className={styles.buttonIcon}>›</span>
            </button>
          </div>
        </div>
        <div className={styles.certificateSection}>
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
                ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5.125 11.6562L10.625 6.15625C10.8125 5.96875 11.1562 5.96875 11.3438 6.15625C11.5312 6.34375 11.5312 6.6875 11.3438 6.875L6.6875 11.5H18.5C18.75 11.5 19 11.75 19 12C19 12.2812 18.75 12.5 18.5 12.5H6.6875L11.3438 17.1562C11.5312 17.3438 11.5312 17.6875 11.3438 17.875C11.1562 18.0625 10.8125 18.0625 10.625 17.875L5.125 12.375C4.9375 12.1875 4.9375 11.8438 5.125 11.6562Z" fill="#1E1E1E" />
                  </svg>
                </button>
                <button
                  className={styles.arrowButton}
                  aria-label="Следующий слайд"
                  onClick={handleNextClick}
                ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
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
        </div>

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

        <div className={styles.accessSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Кому могут быть полезны наши услуги?</h2>
            <p className={styles.sectionDescription}>
              Мы разрабатываем инженерные решения для различных объектов и потребностей. Наши услуги будут востребованы у:
            </p>
          </div>

          <div className={styles.clientCardsContainer}>
            {/* Карточка 1 - Частные клиенты */}
            <div className={styles.clientCard}>
              <div className={styles.cardIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="55" viewBox="0 0 64 55" fill="none">
                  <g clipPath="url(#clip0_30_4145)">
                    <path d="M31.9971 27.4971L15.9985 54.9999H48.0014L63.9999 27.4971H31.9971Z" fill="#3A93FE" />
                    <path d="M15.9986 0L0 27.4972H31.9972L48.0014 0H15.9986Z" fill="#3A93FE" />
                  </g>
                  <defs>
                    <clipPath id="clip0_30_4145">
                      <rect width="64" height="55" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Частных клиентов</h3>
                <p className={styles.cardDescription}>
                  Владельцев квартир, домов и офисов, стремящихся к созданию надежных инженерных систем.
                </p>
              </div>
            </div>

            {/* Карточка 2 - Бизнес */}
            <div className={styles.clientCard}>
              <div className={styles.cardIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="55" viewBox="0 0 64 55" fill="none">
                  <g clipPath="url(#clip0_30_4145)">
                    <path d="M31.9971 27.4971L15.9985 54.9999H48.0014L63.9999 27.4971H31.9971Z" fill="#3A93FE" />
                    <path d="M15.9986 0L0 27.4972H31.9972L48.0014 0H15.9986Z" fill="#3A93FE" />
                  </g>
                  <defs>
                    <clipPath id="clip0_30_4145">
                      <rect width="64" height="55" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Бизнеса</h3>
                <p className={styles.cardDescription}>
                  Управляющих компаний, владельцев коммерческой недвижимости, а также торговых и производственных объектов.
                </p>
              </div>
            </div>

            {/* Карточка 3 - Архитекторы и дизайнеры */}
            <div className={styles.clientCard}>
              <div className={styles.cardIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="55" viewBox="0 0 64 55" fill="none">
                  <g clipPath="url(#clip0_30_4145)">
                    <path d="M31.9971 27.4971L15.9985 54.9999H48.0014L63.9999 27.4971H31.9971Z" fill="#3A93FE" />
                    <path d="M15.9986 0L0 27.4972H31.9972L48.0014 0H15.9986Z" fill="#3A93FE" />
                  </g>
                  <defs>
                    <clipPath id="clip0_30_4145">
                      <rect width="64" height="55" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Архитекторов и дизайнеров</h3>
                <p className={styles.cardDescription}>
                  Для совместной работы над проектами с учетом всех технических аспектов.
                </p>
              </div>
            </div>

            {/* Карточка 4 - Монтажные организации */}
            <div className={styles.clientCard}>
              <div className={styles.cardIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="55" viewBox="0 0 64 55" fill="none">
                  <g clipPath="url(#clip0_30_4145)">
                    <path d="M31.9971 27.4971L15.9985 54.9999H48.0014L63.9999 27.4971H31.9971Z" fill="#3A93FE" />
                    <path d="M15.9986 0L0 27.4972H31.9972L48.0014 0H15.9986Z" fill="#3A93FE" />
                  </g>
                  <defs>
                    <clipPath id="clip0_30_4145">
                      <rect width="64" height="55" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Монтажных организаций</h3>
                <p className={styles.cardDescription}>
                  Мы предоставляем качественные проектные решения для успешной реализации.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Map />
        <ContactForm />
        <Modal 
          isOpen={isProjectModalOpen} 
          onClose={() => setIsProjectModalOpen(false)} 
        />
      </main>
    </div>
  );
} 