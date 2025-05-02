import styles from './page.module.css';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation/Navigation';
import ContactForm from '@/components/ContactForm/ContactForm';
import Reviews from '@/components/Reviews/Reviews';

export const metadata: Metadata = {
  metadataBase: new URL('https://labzin.pro'),
  title: {
    template: "%s — Labzin.pro",
    default: "Сотрудничество с нами",
  },
  description: "Условия сотрудничества для архитекторов, риелторов, управляющих компаний. Выгодные партнерские предложения от Labzin.pro.",
  keywords: "сотрудничество, партнёры, архитекторы, риелторы, управляющие компании, партнерские программы, Labzin.pro",
  authors: [{ name: "Labzin.pro" }],
  creator: "Labzin.pro",
  publisher: "Labzin.pro",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://labzin.pro/cooperation",
    siteName: "Labzin.pro",
    title: "Сотрудничество с Labzin.pro — Labzin.pro",
    description: "Условия сотрудничества для архитекторов, риелторов, управляющих компаний. Выгодные партнерские предложения от Labzin.pro.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Сотрудничество — Labzin.pro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Сотрудничество с Labzin.pro — Labzin.pro",
    description: "Условия сотрудничества для архитекторов, риелторов, управляющих компаний. Выгодные партнерские предложения от Labzin.pro.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: { google: "your-google-site-verification", yandex: "your-yandex-verification" },
  alternates: { canonical: "https://labzin.pro/cooperation" },
};


export default function Cooperation() {
  return (
    <div>
      <Navigation theme="dark" />
      <div className={styles.mainBackground}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Инженерные решения для вашего успеха
          </h1>
          <p className={styles.heroDescription}>
            Labzin.pro — надёжный партнёр архитекторов, дизайнеров и управляющих компаний
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
        <img className={styles.mainBackgroundImage} src="/assets/svg/cooperationBackground.svg" alt="cooperationBackground" />
      </div>
      <div className={styles.blueprintImageContainer}>
        <img
          src="/assets/image/portfolioBackgroundImage.png"
          alt="Инженерный чертеж"
          className={styles.blueprintImage}
        />
      </div>
      <div className={styles.responsibilitySection}>
          <h2 className={styles.responsibilityTitle}>
          Ваше спокойствие — наша ответственность
          </h2>
          <p className={styles.responsibilityBackgroundText}>
          labzin.pro
          </p>
      </div>
      <div className={styles.comparisonSection}>
        <div className={styles.comparisonHeader}>
          <h2 className={styles.comparisonTitle}>
            <span style={{color: 'rgba(12, 72, 198, 1)'}}>LABZIN.PRO</span> vs Обычные подрядчики
          </h2>
          <p className={styles.comparisonSubtitle}>
            Не рискуйте репутацией — работайте с профессионалами
          </p>
        </div>
        <div className={styles.comparisonGrid}>
          <div className={`${styles.comparisonCard} ${styles.dark}`}>
            <div className={styles.cardHeader}>
              <div className={styles.cardLogoStar}>
                <svg xmlns="http://www.w3.org/2000/svg" width="86" height="110" viewBox="0 0 86 110" fill="none">
                  <path d="M46.6152 18.9336L58.75 14.25L63.2207 2.32812C63.4336 1.26367 64.498 0.625 65.5625 0.625C66.4141 0.625 67.4785 1.26367 67.6914 2.32812L72.375 14.25L84.2969 18.9336C85.3613 19.1465 86 20.2109 86 21.0625C86 22.127 85.3613 23.1914 84.2969 23.4043L72.375 27.875L67.6914 40.0098C67.4785 40.8613 66.4141 41.5 65.5625 41.5C64.498 41.5 63.4336 40.8613 63.2207 40.0098L58.75 27.875L46.6152 23.4043C45.7637 23.1914 45.125 22.127 45.125 21.0625C45.125 20.2109 45.7637 19.1465 46.6152 18.9336ZM20.6426 16.3789L31.7129 40.6484L55.9824 51.7188C57.2598 52.3574 58.1113 53.6348 58.1113 54.9121C58.1113 56.1895 57.2598 57.4668 55.9824 57.8926L31.7129 69.1758L20.6426 93.4453C20.0039 94.7227 18.7266 95.5742 17.4492 95.5742C16.1719 95.5742 14.8945 94.7227 14.4688 93.4453L3.18555 69.1758L-21.084 58.1055C-22.3613 57.4668 -23 56.1895 -23 54.9121C-23 53.6348 -22.3613 52.3574 -21.084 51.7188L3.18555 40.6484L14.4688 16.3789C14.8945 15.1016 16.1719 14.25 17.4492 14.25C18.7266 14.25 20.0039 15.1016 20.6426 16.3789ZM58.75 82.375L63.2207 70.4531C63.4336 69.3887 64.498 68.75 65.5625 68.75C66.4141 68.75 67.4785 69.3887 67.6914 70.4531L72.375 82.375L84.2969 87.0586C85.3613 87.2715 86 88.3359 86 89.1875C86 90.252 85.3613 91.3164 84.2969 91.5293L72.375 96L67.6914 108.135C67.4785 108.986 66.4141 109.625 65.5625 109.625C64.498 109.625 63.4336 108.986 63.2207 108.135L58.75 96L46.6152 91.5293C45.7637 91.3164 45.125 90.252 45.125 89.1875C45.125 88.3359 45.7637 87.2715 46.6152 87.0586L58.75 82.375Z" fill="url(#paint0_linear_16_2961)" />
                  <defs>
                    <linearGradient id="paint0_linear_16_2961" x1="-23" y1="55.5" x2="86" y2="55.5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FDC63D" />
                      <stop offset="1" stopColor="#FF9815" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className={styles.cardLogo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path d="M15.3281 4.53125L18 3.5L18.9844 0.875C19.0312 0.640625 19.2656 0.5 19.5 0.5C19.6875 0.5 19.9219 0.640625 19.9688 0.875L21 3.5L23.625 4.53125C23.8594 4.57812 24 4.8125 24 5C24 5.23438 23.8594 5.46875 23.625 5.51562L21 6.5L19.9688 9.17188C19.9219 9.35938 19.6875 9.5 19.5 9.5C19.2656 9.5 19.0312 9.35938 18.9844 9.17188L18 6.5L15.3281 5.51562C15.1406 5.46875 15 5.23438 15 5C15 4.8125 15.1406 4.57812 15.3281 4.53125ZM9.60938 3.96875L12.0469 9.3125L17.3906 11.75C17.6719 11.8906 17.8594 12.1719 17.8594 12.4531C17.8594 12.7344 17.6719 13.0156 17.3906 13.1094L12.0469 15.5938L9.60938 20.9375C9.46875 21.2188 9.1875 21.4062 8.90625 21.4062C8.625 21.4062 8.34375 21.2188 8.25 20.9375L5.76562 15.5938L0.421875 13.1562C0.140625 13.0156 0 12.7344 0 12.4531C0 12.1719 0.140625 11.8906 0.421875 11.75L5.76562 9.3125L8.25 3.96875C8.34375 3.6875 8.625 3.5 8.90625 3.5C9.1875 3.5 9.46875 3.6875 9.60938 3.96875ZM18 18.5L18.9844 15.875C19.0312 15.6406 19.2656 15.5 19.5 15.5C19.6875 15.5 19.9219 15.6406 19.9688 15.875L21 18.5L23.625 19.5312C23.8594 19.5781 24 19.8125 24 20C24 20.2344 23.8594 20.4688 23.625 20.5156L21 21.5L19.9688 24.1719C19.9219 24.3594 19.6875 24.5 19.5 24.5C19.2656 24.5 19.0312 24.3594 18.9844 24.1719L18 21.5L15.3281 20.5156C15.1406 20.4688 15 20.2344 15 20C15 19.8125 15.1406 19.5781 15.3281 19.5312L18 18.5Z" fill="white" />
                </svg>
                <span className={styles.cardLogoText}>LABZIN.PRO</span>
              </div>
            </div>
            <div className={styles.comparisonList}>
              <div className={styles.comparisonItem}>
                <div className={styles.itemLabel}>Проверка проектов</div>
                <div className={styles.itemValue}>Два независимых эксперта</div>
              </div>
              <div className={styles.comparisonItem}>
                <div className={styles.itemLabel}>Соблюдение сроков</div>
                <div className={styles.itemValue}>Жёсткий контроль этапов + буфер</div>
              </div>
              <div className={styles.comparisonItem}>
                <div className={styles.itemLabel}>Комплексные решения</div>
                <div className={styles.itemValue}>Все системы в одном проекте</div>
              </div>
              <div className={styles.comparisonItem}>
                <div className={styles.itemLabel}>Поддержка</div>
                <div className={styles.itemValue}>Консультации 24/7 на всех этапах</div>
              </div>
              <div className={styles.comparisonItem}>
                <div className={styles.itemLabel}>Гарантии</div>
                <div className={styles.itemValue}>Фиксируем в договоре</div>
              </div>
              <div className={styles.comparisonItem}>
                <div className={styles.itemLabel}>Долгосрочная выгода</div>
                <div className={styles.itemValue}>Снижение затрат на эксплуатацию</div>
              </div>
              <div className={styles.comparisonItem}>
                <div className={styles.itemLabel}>Доп. затраты</div>
                <div className={styles.itemValue}>Нет (все учтено в ТЗ)</div>
              </div>
            </div>
          </div>
          <div className={styles.comparisonCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardTitle}>Обычные подрядчики</div>
            </div>
            <div className={styles.comparisonList}>
              <div className={styles.comparisonItem}>
                <div className={styles.itemLabel}>Проверка проектов</div>
                <div className={styles.itemValue}>Только самопроверка</div>
              </div>
              <div className={styles.comparisonItem}>
                <div className={styles.itemLabel}>Соблюдение сроков</div>
                <div className={styles.itemValue}>Жёсткий контроль этапов + буфер</div>
              </div>
              <div className={styles.comparisonItem}>
                <div className={styles.itemLabel}>Комплексные решения</div>
                <div className={styles.itemValue}>Разрозненные документы</div>
              </div>
              <div className={styles.comparisonItem}>
                <div className={styles.itemLabel}>Поддержка</div>
                <div className={styles.itemValue}>«После подписания акта — не наша зона»</div>
              </div>
              <div className={styles.comparisonItem}>
                <div className={styles.itemLabel}>Гарантии</div>
                <div className={styles.itemValue}>Устные обещания</div>
              </div>
              <div className={styles.comparisonItem}>
                <div className={styles.itemLabel}>Долгосрочная выгода</div>
                <div className={styles.itemValue}>Рост расходов из-за недочётов</div>
              </div>
              <div className={styles.comparisonItem}>
                <div className={styles.itemLabel}>Доп. затраты</div>
                <div className={styles.itemValue}>До 30% бюджета на исправления</div>
              </div>
            </div>
          </div>
        </div>
        <button className={styles.comparisonButton}>
          Обсудить проект
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0009 15.5858L13.5867 12L10.0009 8.41426C9.95209 8.36544 9.90937 8.31284 9.87276 8.25739C9.61648 7.86924 9.65919 7.34176 10.0009 7.00005C10.3914 6.60952 11.0246 6.60952 11.4151 7.00005L15.708 11.2929C15.8955 11.4805 16.0009 11.7348 16.0009 12C16.0009 12.2653 15.8955 12.5196 15.708 12.7072L11.4151 17C11.0246 17.3906 10.3914 17.3906 10.0009 17C9.61038 16.6095 9.61038 15.9764 10.0009 15.5858Z" fill="white" />
          </svg>
        </button>
      </div>
      <div className={styles.partnersSection}>
        <div className={styles.partnersHeader}>
          <h2 className={styles.partnersTitle}>
            Наши партнёры — те, кто ценит <span style={{ color: '#0C48C6', fontStyle: 'italic' }}>точность</span>
          </h2>
        </div>
        <div className={styles.partnersGrid}>
          <div className={styles.partnerCard}>
            <div className={styles.partnerIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                <g clipPath="url(#clip0_30_4197)">
                  <path d="M63.8119 36.8928L53.6556 27.9414V37.3983H27.8828V52.2037H64V36.8928H63.8119Z" fill="#3A93FE" />
                  <path d="M37.3983 36.1172H52.2037V0H36.8928V0.18808L27.9414 10.3503H37.3983V36.1172Z" fill="#3A93FE" />
                  <path d="M36.1172 11.7959H0V27.1126H0.18808L10.3503 36.0641V26.6013H36.1172V11.7959Z" fill="#3A93FE" />
                  <path d="M26.6013 27.8828H11.7959V64H27.1126V63.8119L36.0641 53.6556H26.6013V27.8828Z" fill="#3A93FE" />
                </g>
                <defs>
                  <clipPath id="clip0_30_4197">
                    <rect width="64" height="64" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className={styles.partnerContent}>
              <div className={styles.partnerNumber}>01.</div>
              <div className={styles.partnerInfo}>
                <div className={styles.partnerHeader}>
                  <h3 className={styles.partnerTitle}>Архитекторы и дизайнеры</h3>
                  <p className={styles.partnerDescription}>
                    Вместе мы создадим надёжные системы, которые станут основой комфорта для ваших клиентов
                  </p>
                </div>
                <div className={styles.partnerList}>
                  <h4 className={styles.partnerListTitle}>Что мы предлагаем</h4>
                  <div className={styles.partnerListItem}>Полное сопровождение: от проекта до пусконаладки.</div>
                  <div className={styles.partnerListItem}>Оборудование под ваш дизайн-проект.</div>
                  <div className={styles.partnerListItem}>Гарантия сроков и соответствия нормам (ГОСТ, СП, СНиП).</div>
                  <div className={styles.partnerListItem}>Поддержка 24/7 на всех этапах.</div>
                </div>
                <div className={styles.partnerList}>
                  <h4 className={styles.partnerListTitle}>Почему мы?</h4>
                  <div className={styles.partnerListItem}>Более 10 лет опыта и 650 проектов</div>
                  <div className={styles.partnerListItem}>Индивидуальные решения для каждого клиента.</div>
                  <div className={styles.partnerListItem}>Доверие монтажных организаций и экспертов.</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.partnerCard}>
            <div className={styles.partnerIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                <g clipPath="url(#clip0_30_4197)">
                  <path d="M63.8119 36.8928L53.6556 27.9414V37.3983H27.8828V52.2037H64V36.8928H63.8119Z" fill="#3A93FE" />
                  <path d="M37.3983 36.1172H52.2037V0H36.8928V0.18808L27.9414 10.3503H37.3983V36.1172Z" fill="#3A93FE" />
                  <path d="M36.1172 11.7959H0V27.1126H0.18808L10.3503 36.0641V26.6013H36.1172V11.7959Z" fill="#3A93FE" />
                  <path d="M26.6013 27.8828H11.7959V64H27.1126V63.8119L36.0641 53.6556H26.6013V27.8828Z" fill="#3A93FE" />
                </g>
                <defs>
                  <clipPath id="clip0_30_4197">
                    <rect width="64" height="64" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className={styles.partnerContent}>
              <div className={styles.partnerNumber}>02.</div>
              <div className={styles.partnerInfo}>
                <div className={styles.partnerHeader}>
                  <h3 className={styles.partnerTitle}>Управляющие компании</h3>
                  <p className={styles.partnerDescription}>
                    Мы помогаем управляющим компаниям избежать проблем с арендаторами и контролирующими органами
                  </p>
                </div>
                <div className={styles.partnerList}>
                  <h4 className={styles.partnerListTitle}>Как мы работаем:</h4>
                  <div className={styles.partnerListItem}>Системы без аварий и нарушений норм (ГОСТ, СНиП).</div>
                  <div className={styles.partnerListItem}>Согласование с МЧС и Роспотребнадзором.</div>
                  <div className={styles.partnerListItem}>Гарантия сроков и соответствия нормам (ГОСТ, СП, СНиП).</div>
                  <div className={styles.partnerListItem}>Гарантируем качество</div>
                </div>
                <div className={styles.partnerList}>
                  <h4 className={styles.partnerListTitle}>Почему мы?</h4>
                  <div className={styles.partnerListItem}>98% проектов проходят проверку с первого раза.</div>
                  <div className={styles.partnerListItem}>Снижение затрат на ошибки до 40%.</div>
                  <div className={styles.partnerListItem}>Работа с юрлицами: договор, ЭДО.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Reviews />
      <ContactForm />
    </div>
  );
} 