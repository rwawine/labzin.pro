import React, { useState } from 'react'
import styles from './Dictionary.module.css'

interface DictionaryEntry {
  term: string;
  definition: string;
}

const dictionaryData: DictionaryEntry[] = [
  {
    term: "Абонентский шнур",
    definition: "— Шнур, подключаемый к телекоммуникационной розетке на рабочем месте."
  },
  {
    term: "Агрегация каналов",
    definition: "— Технология объединения в сети нескольких физических каналов между двумя сетевыми устройствами в один логический канал. Данная технология используется для повышения скорости передачи данных и резервирования каналов."
  },
  {
    term: "Адаптивно волоконно-оптический",
    definition: "— Пассивное устройство, используемое для коммутации оптических волок."
  },
  {
    term: "Активное оборудование",
    definition: "— Оборудование, которое имеет источник питания и потребляет электроэнергию в ходе своей работы."
  },
  {
    term: "Аналоговый сигнал",
    definition: "— Сигнал, который имеет непрерывное и неограниченное множество состояний."
  },
  {
    term: "Аппаратная (аппаратное помещение, серверная)",
    definition: "— Телекоммуникационное помещение, в котором размещаются распределительные устройства и большое количество активного телекоммуникационного оборудования. Термин используется в стандартах СКС."
  },
  {
    term: "Аппаратный кабель",
    definition: "— Шнур, подключаемый к активному оборудованию, установленному на рабочем месте или в телекоммуникационном помещении."
  },
  {
    term: "Блок электрических розеток",
    definition: "— Устройство, используемое для подключения шнуров электропитания ИТ оборудования. Чаще всего устанавливается в серверную стойку."
  },
  {
    term: "Вилка (коннектор)",
    definition: "— Пассивный элемент, используемый для оконцовки кабеля и подключения шнура или оконцованного кабеля к гнезду розетки."
  },
  {
    term: "Витая пара",
    definition: "— Два изолированных проводника скрученных вместе симметрично друг относительно друга."
  },
];

const ITEMS_PER_PAGE = 20;

export default function Dictionary() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(dictionaryData.length / ITEMS_PER_PAGE);
  
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentEntries = dictionaryData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <div
          key={i}
          className={`${styles.pageNumber} ${currentPage === i ? styles.active : ''}`}
          onClick={() => handlePageChange(i)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handlePageChange(i);
            }
          }}
        >
          {i}
        </div>
      );
    }
    return pageNumbers;
  };

  return (
    <div className={styles.dictionary}>
      <div className={styles.contentContainer}>
        <div className={styles.headerContainer}>
          <h1 className={styles.headerTitle}>
            Словарь и аббревиатура по специализации
          </h1>
          <p className={styles.headerSubtitle}>
            Быстро найти термины и нормативы.
          </p>
        </div>

        <div className={styles.dictionaryContainer}>
          {currentEntries.map((entry, index) => (
            <div key={index} className={styles.dictionaryEntry}>
              <span>{entry.term}</span>
              {entry.definition}
            </div>
          ))}
        </div>

        <div className={styles.paginationContainer}>
          <div
            className={`${styles.pageControl} ${currentPage === 1 ? styles.disabled : ''}`}
            onClick={() => handlePageChange(currentPage - 1)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handlePageChange(currentPage - 1);
              }
            }}
          >
            ←
          </div>
          <div className={styles.pageNumbersContainer}>
            {renderPageNumbers()}
          </div>
          <div
            className={`${styles.pageControl} ${currentPage === totalPages ? styles.disabled : ''}`}
            onClick={() => handlePageChange(currentPage + 1)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handlePageChange(currentPage + 1);
              }
            }}
          >
            →
          </div>
        </div>
      </div>
    </div>
  )
}
