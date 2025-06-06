import React, { useState } from 'react'
import dictionaryData from './dictionaryData.json'
import styles from './Dictionary.module.css'

interface DictionaryEntry {
  term: string;
  definition: string;
}

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
