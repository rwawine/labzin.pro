import React from 'react';
import styles from './JobListing.module.css';
import { IJobListingProps } from '@/types/job';
import { motion, AnimatePresence } from 'framer-motion';

const JobListing: React.FC<IJobListingProps> = ({ job, isOpen, onToggle }) => {
  return (
    <div className={styles.jobListing}>
      <button 
        className={styles.jobHeader} 
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`job-content-${job.id}`}
      >
        <div className={styles.jobDetails}>
          <h3 className={styles.jobTitle}>{job.title}</h3>
          <div className={styles.jobDate}>
            <span>{job.date}</span>
          </div>
        </div>
        <div className={`${styles.jobArrow} ${isOpen ? styles.jobArrowOpen : ''}`}>
          <div className={styles.arrowCircle}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`job-content-${job.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={styles.jobContent}
          >
            <div className={styles.jobSection}>
              <h4>Обязанности</h4>
              <ul>
                {job.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.jobSection}>
              <h4>Требования</h4>
              <ul>
                {job.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.jobSection}>
              <h4>Условия</h4>
              <ul>
                {job.conditions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JobListing; 