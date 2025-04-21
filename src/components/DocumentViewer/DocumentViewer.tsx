import React, { useState, useEffect } from 'react';
import styles from './DocumentViewer.module.css';

interface DocumentViewerProps {
  url: string;
  onClose: () => void;
}

const DocumentViewer: React.FC<DocumentViewerProps> = ({ url, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Не удалось загрузить документ');
        }
        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);
        
        // Здесь можно добавить логику для разных типов файлов
        if (url.endsWith('.pdf')) {
          // Для PDF используем встроенный просмотрщик браузера
          const iframe = document.querySelector('iframe');
          if (iframe) {
            iframe.src = objectUrl;
          }
        } else {
          // Для других форматов предлагаем скачать
          const a = document.createElement('a');
          a.href = objectUrl;
          a.download = url.split('/').pop() || 'document';
          a.click();
          URL.revokeObjectURL(objectUrl);
          onClose();
        }
      } catch (err) {
        setError('Ошибка при загрузке документа');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDocument();
  }, [url, onClose]);

  return (
    <div 
      className={styles.modalOverlay} 
      onClick={onClose}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      tabIndex={0}
    >
      <div 
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Закрыть просмотр документа"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none"
          >
            <path 
              d="M12 5V19M12 19L19 12M12 19L5 12" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
          </svg>
        </button>
        <div className={styles.viewerContainer}>
          {isLoading && <div className={styles.loader}>Загрузка документа...</div>}
          {error && <div className={styles.error}>{error}</div>}
          {!error && !isLoading && (
            <iframe
              className={styles.viewerFrame}
              title="Просмотр документа"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentViewer; 