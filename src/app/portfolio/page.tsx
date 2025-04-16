"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './page.module.css';
import Navigation from '@/components/Navigation/Navigation';
import Map from '@/components/Map/Map';
import ContactForm from '@/components/ContactForm/ContactForm';

interface DropdownItem {
  title: string;
  content: string[];
}

const documentationItems: DropdownItem[] = [
  {
    title: 'Архитектурные решения (АР)',
    content: [
      'Общие данные',
      'Ведомость чертежей',
      'Ведомость ссылочных и прилагаемых документов',
      'Планы помещений (ситуационный, обмерный, возводимых перегородок, с расстановкой мебели, полов, потолков, сводный план потолков, электровыводов, розеток, осветительных приборов и выключателей, эвакуационный)',
      'Схемы монтажа закладных деталей',
      'Типовые узлы, узлы крепления к перегородкам, полам, потолкам, узлы сопряжения поверхностей',
      'Разрезы типовые, по стенам, по полам, по помещению'
    ]
  },
  {
    title: 'Конструктивные решения (КР)',
    content: [
      'Общие данные',
      'Ведомость рабочих чертежей основного комплекта',
      'Ведомость ссылочных и прилагаемых документов',
      'Ведомость спецификаций',
      'Схема расположения элементов',
      'Спецификации элементов',
      'Узлы и детали'
    ]
  },
  {
    title: 'Электроснабжение (ЭОМ)',
    content: [
      'Общие данные',
      'Принципиальные схемы электроснабжения',
      'Планы сетей электроснабжения',
      'Планы электроосвещения',
      'Принципиальные схемы щитов',
      'Кабельный журнал',
      'Спецификация оборудования и материалов'
    ]
  },
  {
    title: 'Водоснабжение и канализация (ВК)',
    content: [
      'Общие данные',
      'Принципиальные схемы систем водоснабжения и канализации',
      'Планы сетей водоснабжения и канализации',
      'Аксонометрические схемы систем',
      'Профили сетей',
      'Спецификация оборудования и материалов'
    ]
  }
];

const dropdownAnimation = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3 },
      opacity: { duration: 0.2 }
    }
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.3 },
      opacity: { duration: 0.2, delay: 0.1 }
    }
  }
};

export default function Portfolio() {
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});

  const toggleItem = (index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <>
      <Navigation theme="dark" />
      <div className={styles.mainBackground}>
        <div className={styles.heroContent}>
          <p className={styles.projects}>Выполнено 650 объектов</p>
          <h1 className={styles.heroTitle}>
            Реализованные проекты
          </h1>
          <p className={styles.heroDescription}>
            Комплексное проектирование инженерных систем для любых объектов
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.primaryButton}>
              Обсудить проект <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0009 15.5858L13.5867 12L10.0009 8.41426C9.95209 8.36544 9.90937 8.31284 9.87276 8.25739C9.61648 7.86924 9.65919 7.34176 10.0009 7.00005C10.3914 6.60952 11.0246 6.60952 11.4151 7.00005L15.708 11.2929C15.8955 11.4805 16.0009 11.7348 16.0009 12C16.0009 12.2653 15.8955 12.5196 15.708 12.7072L11.4151 17C11.0246 17.3906 10.3914 17.3906 10.0009 17C9.61038 16.6095 9.61038 15.9764 10.0009 15.5858Z" />
              </svg>
            </button>
            <button className={styles.secondaryButton}>
              О сотрудничестве <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0009 15.5858L13.5867 12L10.0009 8.41426C9.95209 8.36544 9.90937 8.31284 9.87276 8.25739C9.61648 7.86924 9.65919 7.34176 10.0009 7.00005C10.3914 6.60952 11.0246 6.60952 11.4151 7.00005L15.708 11.2929C15.8955 11.4805 16.0009 11.7348 16.0009 12C16.0009 12.2653 15.8955 12.5196 15.708 12.7072L11.4151 17C11.0246 17.3906 10.3914 17.3906 10.0009 17C9.61038 16.6095 9.61038 15.9764 10.0009 15.5858Z" />
              </svg>
            </button>
          </div>
        </div>
        <img className={styles.mainBackgroundImage} src="/assets/svg/portfolioBackground.svg" alt="portfolioBackground" />
      </div>
      <div className={styles.blueprintImageContainer}>
        <img
          src="/assets/image/portfolioBackgroundImage.png"
          alt="Инженерный чертеж"
          className={styles.blueprintImage}
        />
      </div>
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
      <Map />
      <div className={styles.compositionSection}>
        <div className={styles.compositionHeader}>
          <h2 className={styles.compositionTitle}>Составы проектной документации</h2>
          <p className={styles.compositionDescription}>
            Каждый проект содержит детально проработанную документацию, обеспечивающую точность реализации. Включает планы помещений, инженерные схемы, ведомости материалов и технические решения.
          </p>
        </div>

        <div className={styles.dropdownContainer}>
          {documentationItems.map((item, index) => (
            <div key={index} className={styles.dropdownItem}>
              <button
                className={styles.dropdownHeader}
                onClick={() => toggleItem(index)}
                aria-expanded={openItems[index]}
              >
                <span className={styles.dropdownTitle}>{item.title}</span>
                <motion.svg
                  animate={{ rotate: openItems[index] ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={styles.dropdownIcon}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </button>
              <AnimatePresence initial={false}>
                {openItems[index] && (
                  <motion.div
                    key="content"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownAnimation}
                    className={styles.dropdownContent}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{ padding: '0 32px 32px' }}>
                      <ul className={styles.dropdownList}>
                        {item.content.map((line, lineIndex) => (
                          <li key={lineIndex} className={styles.dropdownListItem}>
                            {line}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.exampleSection}>
        <div className={styles.exampleHeader}>
          <h2 className={styles.exampleTitle}>
            Примеры файлов проектной документации
          </h2>
          <p className={styles.exampleDescription}>
            Ниже вы найдёте примеры файлов, входящих в состав комплексной проектной документации, например, СПН, АВС и другие. Эти документы иллюстрируют ключевые разделы инженерных проектов, демонстрируя практический подход к решению технических задач и обеспечивая прозрачность этапов согласования и утверждения проекта.
          </p>
        </div>
        <div className={styles.exampleGrid}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.cardIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <g clipPath="url(#clip0_16_3353)">
                    <path d="M20.75 30.75H18.875V23.25H20.75C22.1307 23.25 23.25 24.3693 23.25 25.75V28.25C23.25 29.6307 22.1307 30.75 20.75 30.75Z" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M27 23.25V30.75" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M27 23.25H30.75" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M29.5 27H27" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.75 30.75V23.25" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.25 23.25H10.75V27H13.25C14.2856 27 15.125 26.1606 15.125 25.125C15.125 24.0894 14.2856 23.25 13.25 23.25Z" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23.75 18.7501V8.75" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.25 1.25H3.75C2.36931 1.25 1.25 2.36931 1.25 3.75V28.25C1.25 29.6307 2.36931 30.75 3.75 30.75H6.25" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23.75 8.75H18.75C17.3693 8.75 16.25 7.63069 16.25 6.25V1.25L23.75 8.75Z" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_16_3353">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Пример СПС, СОУЭ и ТРВ</h3>
              <p className={styles.cardSubtitle}>PDF. 4 Мб</p>
            </div>
            <div className={styles.cardButtonDiv}>
              <div className={styles.cardButton}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.cardIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <g clipPath="url(#clip0_16_3353)">
                    <path d="M20.75 30.75H18.875V23.25H20.75C22.1307 23.25 23.25 24.3693 23.25 25.75V28.25C23.25 29.6307 22.1307 30.75 20.75 30.75Z" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M27 23.25V30.75" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M27 23.25H30.75" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M29.5 27H27" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.75 30.75V23.25" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.25 23.25H10.75V27H13.25C14.2856 27 15.125 26.1606 15.125 25.125C15.125 24.0894 14.2856 23.25 13.25 23.25Z" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23.75 18.7501V8.75" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.25 1.25H3.75C2.36931 1.25 1.25 2.36931 1.25 3.75V28.25C1.25 29.6307 2.36931 30.75 3.75 30.75H6.25" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23.75 8.75H18.75C17.3693 8.75 16.25 7.63069 16.25 6.25V1.25L23.75 8.75Z" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_16_3353">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Пример СОУЭ</h3>
              <p className={styles.cardSubtitle}>PDF. 3 Мб</p>
            </div>
            <div className={styles.cardButtonDiv}>
              <div className={styles.cardButton}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.cardIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <g clipPath="url(#clip0_16_3353)">
                    <path d="M20.75 30.75H18.875V23.25H20.75C22.1307 23.25 23.25 24.3693 23.25 25.75V28.25C23.25 29.6307 22.1307 30.75 20.75 30.75Z" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M27 23.25V30.75" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M27 23.25H30.75" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M29.5 27H27" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.75 30.75V23.25" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.25 23.25H10.75V27H13.25C14.2856 27 15.125 26.1606 15.125 25.125C15.125 24.0894 14.2856 23.25 13.25 23.25Z" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23.75 18.7501V8.75" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.25 1.25H3.75C2.36931 1.25 1.25 2.36931 1.25 3.75V28.25C1.25 29.6307 2.36931 30.75 3.75 30.75H6.25" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23.75 8.75H18.75C17.3693 8.75 16.25 7.63069 16.25 6.25V1.25L23.75 8.75Z" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_16_3353">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Пример АУВПТ и ВПВ</h3>
              <p className={styles.cardSubtitle}>PDF. 3 Мб</p>
            </div>
            <div className={styles.cardButtonDiv}>
              <div className={styles.cardButton}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.cardIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <g clipPath="url(#clip0_16_3353)">
                    <path d="M20.75 30.75H18.875V23.25H20.75C22.1307 23.25 23.25 24.3693 23.25 25.75V28.25C23.25 29.6307 22.1307 30.75 20.75 30.75Z" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M27 23.25V30.75" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M27 23.25H30.75" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M29.5 27H27" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.75 30.75V23.25" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.25 23.25H10.75V27H13.25C14.2856 27 15.125 26.1606 15.125 25.125C15.125 24.0894 14.2856 23.25 13.25 23.25Z" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23.75 18.7501V8.75" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.25 1.25H3.75C2.36931 1.25 1.25 2.36931 1.25 3.75V28.25C1.25 29.6307 2.36931 30.75 3.75 30.75H6.25" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23.75 8.75H18.75C17.3693 8.75 16.25 7.63069 16.25 6.25V1.25L23.75 8.75Z" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_16_3353">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Пример СОТС</h3>
              <p className={styles.cardSubtitle}>PDF. 1 Мб</p>
            </div>
            <div className={styles.cardButtonDiv}>
              <div className={styles.cardButton}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.cardIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <g clipPath="url(#clip0_16_3353)">
                    <path d="M20.75 30.75H18.875V23.25H20.75C22.1307 23.25 23.25 24.3693 23.25 25.75V28.25C23.25 29.6307 22.1307 30.75 20.75 30.75Z" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M27 23.25V30.75" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M27 23.25H30.75" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M29.5 27H27" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.75 30.75V23.25" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.25 23.25H10.75V27H13.25C14.2856 27 15.125 26.1606 15.125 25.125C15.125 24.0894 14.2856 23.25 13.25 23.25Z" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23.75 18.7501V8.75" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.25 1.25H3.75C2.36931 1.25 1.25 2.36931 1.25 3.75V28.25C1.25 29.6307 2.36931 30.75 3.75 30.75H6.25" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23.75 8.75H18.75C17.3693 8.75 16.25 7.63069 16.25 6.25V1.25L23.75 8.75Z" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_16_3353">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Пример СКУД</h3>
              <p className={styles.cardSubtitle}>PDF. 2 Мб</p>
            </div>
            <div className={styles.cardButtonDiv}>
              <div className={styles.cardButton}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.cardIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <g clipPath="url(#clip0_16_3353)">
                    <path d="M20.75 30.75H18.875V23.25H20.75C22.1307 23.25 23.25 24.3693 23.25 25.75V28.25C23.25 29.6307 22.1307 30.75 20.75 30.75Z" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M27 23.25V30.75" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M27 23.25H30.75" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M29.5 27H27" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.75 30.75V23.25" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.25 23.25H10.75V27H13.25C14.2856 27 15.125 26.1606 15.125 25.125C15.125 24.0894 14.2856 23.25 13.25 23.25Z" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23.75 18.7501V8.75" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.25 1.25H3.75C2.36931 1.25 1.25 2.36931 1.25 3.75V28.25C1.25 29.6307 2.36931 30.75 3.75 30.75H6.25" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23.75 8.75H18.75C17.3693 8.75 16.25 7.63069 16.25 6.25V1.25L23.75 8.75Z" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_16_3353">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Пример ЛВС</h3>
              <p className={styles.cardSubtitle}>PDF. 5 Мб</p>
            </div>
            <div className={styles.cardButtonDiv}>
              <div className={styles.cardButton}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.cardIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <g clipPath="url(#clip0_16_3353)">
                    <path d="M20.75 30.75H18.875V23.25H20.75C22.1307 23.25 23.25 24.3693 23.25 25.75V28.25C23.25 29.6307 22.1307 30.75 20.75 30.75Z" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M27 23.25V30.75" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M27 23.25H30.75" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M29.5 27H27" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.75 30.75V23.25" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.25 23.25H10.75V27H13.25C14.2856 27 15.125 26.1606 15.125 25.125C15.125 24.0894 14.2856 23.25 13.25 23.25Z" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23.75 18.7501V8.75" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.25 1.25H3.75C2.36931 1.25 1.25 2.36931 1.25 3.75V28.25C1.25 29.6307 2.36931 30.75 3.75 30.75H6.25" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23.75 8.75H18.75C17.3693 8.75 16.25 7.63069 16.25 6.25V1.25L23.75 8.75Z" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_16_3353">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Пример СВН</h3>
              <p className={styles.cardSubtitle}>PDF. 965 Кб</p>
            </div>
            <div className={styles.cardButtonDiv}>
              <div className={styles.cardButton}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.cardIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <g clipPath="url(#clip0_16_3353)">
                    <path d="M20.75 30.75H18.875V23.25H20.75C22.1307 23.25 23.25 24.3693 23.25 25.75V28.25C23.25 29.6307 22.1307 30.75 20.75 30.75Z" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M27 23.25V30.75" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M27 23.25H30.75" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M29.5 27H27" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.75 30.75V23.25" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.25 23.25H10.75V27H13.25C14.2856 27 15.125 26.1606 15.125 25.125C15.125 24.0894 14.2856 23.25 13.25 23.25Z" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23.75 18.7501V8.75" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.25 1.25H3.75C2.36931 1.25 1.25 2.36931 1.25 3.75V28.25C1.25 29.6307 2.36931 30.75 3.75 30.75H6.25" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23.75 8.75H18.75C17.3693 8.75 16.25 7.63069 16.25 6.25V1.25L23.75 8.75Z" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_16_3353">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Пример АК</h3>
              <p className={styles.cardSubtitle}>PDF. 2 Мб</p>
            </div>
            <div className={styles.cardButtonDiv}>
              <div className={styles.cardButton}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.cardIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <g clipPath="url(#clip0_16_3353)">
                    <path d="M20.75 30.75H18.875V23.25H20.75C22.1307 23.25 23.25 24.3693 23.25 25.75V28.25C23.25 29.6307 22.1307 30.75 20.75 30.75Z" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M27 23.25V30.75" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M27 23.25H30.75" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M29.5 27H27" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.75 30.75V23.25" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.25 23.25H10.75V27H13.25C14.2856 27 15.125 26.1606 15.125 25.125C15.125 24.0894 14.2856 23.25 13.25 23.25Z" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23.75 18.7501V8.75" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.25 1.25H3.75C2.36931 1.25 1.25 2.36931 1.25 3.75V28.25C1.25 29.6307 2.36931 30.75 3.75 30.75H6.25" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23.75 8.75H18.75C17.3693 8.75 16.25 7.63069 16.25 6.25V1.25L23.75 8.75Z" stroke="#0C48C6" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_16_3353">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Пример Автоматизации парковок</h3>
              <p className={styles.cardSubtitle}>PDF. 552 Кб</p>
            </div>
            <div className={styles.cardButtonDiv}>
              <div className={styles.cardButton}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <p className={styles.backgroundTextExample}>Документы</p>
      </div>
      <ContactForm />
    </>
  );
} 