'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import Navigation from '@/components/Navigation/Navigation';
import ContactForm from '@/components/ContactForm/ContactForm';
import JobListing from '@/components/JobListing/JobListing';
import { jobs } from '@/data/jobs';
import { CareerForm } from './components/CareerForm';

export default function Career() {
  const [openJobId, setOpenJobId] = useState<string | null>(null);

  const handleToggle = (jobId: string) => {
    setOpenJobId(openJobId === jobId ? null : jobId);
  };

  return (
    <div className={styles.container}>
      <Navigation theme="light" />
      <div className={styles.careerSection}>
        <h1 className={styles.careerTitle}>Вакансии</h1>
        <span className={styles.careerSubtitle}>LABZIN.PRO</span>
        <div className={styles.careerBlock}>
            <CareerForm />
          <div className={styles.careerBlockRight}>
            <div className={styles.jobListings}>
              {jobs.map((job) => (
                <JobListing
                  key={job.id}
                  job={job}
                  isOpen={openJobId === job.id}
                  onToggle={() => handleToggle(job.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
} 