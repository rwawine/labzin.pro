import React, { useState } from 'react';
import DocumentViewer from './DocumentViewer';
import styles from './OpenDocumentButton.module.css';

const OpenDocumentButton: React.FC = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  
  const handleOpenDocument = () => {
    setIsViewerOpen(true);
  };

  const handleCloseViewer = () => {
    setIsViewerOpen(false);
  };

  return (
    <>
      <button
        className={styles.openButton}
        onClick={handleOpenDocument}
        aria-label="Открыть документ"
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

      {isViewerOpen && (
        <DocumentViewer
          url="/file/word.docx"
          onClose={handleCloseViewer}
        />
      )}
    </>
  );
};

export default OpenDocumentButton; 