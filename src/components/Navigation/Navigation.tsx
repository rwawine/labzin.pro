"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import styles from './Navigation.module.css';
import Modal from '../Modal/Modal';
import designMenuData from './data.json';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  theme?: 'light' | 'dark';
}

export default function Navigation({ theme = 'light' }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDesignMenuOpen, setIsDesignMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [menuTimeout, setMenuTimeout] = useState<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1550);
      if (window.innerWidth >= 1550) {
        setIsMenuOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDesignMenuOpen(false);
      }
    };

    if (isDesignMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDesignMenuOpen]);

  // Handle scroll locking when menu is open
  useEffect(() => {
    if (isMenuOpen || isModalOpen) {
      // Store current scroll position
      const scrollY = window.scrollY;

      // Add styles to prevent scrolling
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';

      return () => {
        // Restore scrolling when component unmounts or menu closes
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isMenuOpen, isModalOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setIsDesignMenuOpen(false);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDesignMenuOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
    closeMenu();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleDesignMenu = () => {
    setIsDesignMenuOpen(!isDesignMenuOpen);
    if (!isDesignMenuOpen && !selectedCategory) {
      setSelectedCategory(designMenuData.designMenu.categories[0].id);
    }
  };

  const handleMouseEnter = () => {
    // Удалена логика открытия по наведению
  };

  const handleMouseLeave = () => {
    // Удалена логика закрытия по наведению
  };

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
  };

  const selectedCategoryData = designMenuData.designMenu.categories.find(cat => cat.id === selectedCategory);

  return (
    <>
      <nav className={`${styles.nav} ${theme === 'dark' ? styles.dark : styles.light}`}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <Image src={isMenuOpen ? "/assets/svg/Dark Logo.svg" : (theme === 'dark' ? "/assets/svg/Light Logo.svg" : "/assets/svg/Dark Logo.svg")} alt="logo" width={100} height={43} />
          </Link>

          <button
            className={`${styles.menuButton} ${isMenuOpen ? styles.active : ''} ${styles.link} ${theme === 'dark' ? styles.darkText : ''}`}
            onClick={toggleMenu}
            aria-label="Меню"
          >
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.6585 4.92888C18.049 4.53836 18.6822 4.53835 19.0727 4.92888C19.4632 5.3194 19.4632 5.95257 19.0727 6.34309L13.4158 12L19.0727 17.6568C19.4632 18.0473 19.4632 18.6805 19.0727 19.071C18.6822 19.4615 18.049 19.4615 17.6585 19.071L12.0016 13.4142L6.34481 19.071C6.3387 19.0771 6.33254 19.0831 6.32632 19.089C5.93455 19.4614 5.31501 19.4554 4.93059 19.071C4.6377 18.7781 4.56447 18.3487 4.71092 17.9876C4.75973 17.8672 4.83296 17.7544 4.93059 17.6568L10.5874 12L4.93059 6.34314C4.54006 5.95262 4.54006 5.31945 4.93059 4.92893C5.32111 4.5384 5.95428 4.5384 6.3448 4.92893L12.0016 10.5857L17.6585 4.92888Z" fill="black" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7C21 7.55229 20.5523 8 20 8H4C3.44772 8 3 7.55229 3 7Z" fill="black" />
                <path d="M4 11C3.44772 11 3 11.4477 3 12C3 12.5522 3.44772 13 4 13H20C20.5523 13 21 12.5522 21 12C21 11.4477 20.5523 11 20 11H4Z" fill="black" />
                <path d="M3 17C3 16.4477 3.44772 16 4 16H20C20.5523 16 21 16.4477 21 17C21 17.5523 20.5523 18 20 18H4C3.44772 18 3 17.5523 3 17Z" fill="black" />
              </svg>
            )}
          </button>

          {/* Background overlay */}
          {isMenuOpen && (
            <div
              className={`${styles.overlay} ${isMenuOpen ? styles.visible : ''}`}
              onClick={() => {
                closeMenu();
                setIsDesignMenuOpen(false);
              }}
              aria-hidden="true"
            />
          )}

          <ul className={`${styles.links} ${isMenuOpen ? styles.open : ''}`}>
            <li
              className={styles.designMenuItem}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={styles.designMenuContainer}
                role="menu"
                ref={dropdownRef}
              >
                <button
                  className={`${styles.link} ${theme === 'dark' ? styles.darkText : ''} ${styles.linkButton} ${isDesignMenuOpen ? styles.active : ''}`}
                  onClick={toggleDesignMenu}
                  aria-expanded={isDesignMenuOpen}
                  aria-haspopup="true"
                >
                  Проектирование
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.85355 6.64647L8.4798 9.27266L11.106 6.64647C11.3013 6.45118 11.6179 6.45118 11.8131 6.64647C12.0084 6.84173 12.0084 7.15827 11.8131 7.35353L8.83334 10.3333C8.73954 10.4271 8.6124 10.4798 8.4798 10.4798C8.3472 10.4798 8.22001 10.4271 8.12621 10.3333L5.14645 7.35353C4.95118 7.15827 4.95118 6.84173 5.14645 6.64647C5.34171 6.45118 5.65829 6.45118 5.85355 6.64647Z" fill="currentColor" />
                  </svg>
                </button>
                <AnimatePresence>
                  {isDesignMenuOpen && (
                    !isMobile ? (
                      <motion.div
                        className={`${styles.dropdownMenu} ${isDesignMenuOpen ? styles.visible : ''}`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        role="menu"
                      >
                        <div className={styles.dropdownColumn}>
                          {designMenuData.designMenu.categories.map(category => (
                            category.directLink ? (
                              <Link
                                key={category.id}
                                href={category.directLink}
                                className={`${styles.dropdownCategory} ${selectedCategory === category.id ? styles.active : ''}`}
                                onClick={() => {
                                  closeMenu();
                                  setIsDesignMenuOpen(false);
                                }}
                                role="menuitem"
                                tabIndex={0}
                              >
                                <div className={styles.dropdownCategoryContent}>
                                  <h3>{category.title}</h3>
                                  <p>{category.description}</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                          <path d="M7.33301 4.33325C7.33301 4.05725 7.10914 3.83325 6.83301 3.83325H2.66634C1.92994 3.83325 1.33301 4.42992 1.33301 5.16659V13.8333C1.33301 14.5699 1.92994 15.1666 2.66634 15.1666H11.333C12.0694 15.1666 12.6663 14.5699 12.6663 13.8333V9.66658C12.6663 9.39058 12.4425 9.16658 12.1663 9.16658C11.8902 9.16658 11.6663 9.39058 11.6663 9.66658V13.8333C11.6663 14.0173 11.5171 14.1666 11.333 14.1666H2.66634C2.48227 14.1666 2.33301 14.0173 2.33301 13.8333V5.16659C2.33301 4.98259 2.48227 4.83325 2.66634 4.83325H6.83301C7.10914 4.83325 7.33301 4.60925 7.33301 4.33325Z" />
                                          <path fillRule="evenodd" clipRule="evenodd" d="M12.9595 2.83325H9.83327C9.55713 2.83325 9.33327 2.60939 9.33327 2.33325C9.33327 2.05712 9.55713 1.83325 9.83327 1.83325H14.1666C14.4427 1.83325 14.6666 2.05712 14.6666 2.33325V6.66658C14.6666 6.94258 14.4427 7.16658 14.1666 7.16658C13.8905 7.16658 13.6666 6.94258 13.6666 6.66658V3.54059L6.70707 10.4999C6.51183 10.6953 6.19523 10.6953 5.99997 10.4999C5.8047 10.3046 5.8047 9.98792 5.99997 9.79258L12.9595 2.83325Z" />
                                        </svg>
                              </Link>
                            ) : (
                              <div
                                key={category.id}
                                className={`${styles.dropdownCategory} ${selectedCategory === category.id ? styles.active : ''}`}
                                onClick={() => isMobile && handleCategoryClick(category.id)}
                                onMouseEnter={() => !isMobile && setSelectedCategory(category.id)}
                                role="menuitem"
                                tabIndex={0}
                                aria-expanded={selectedCategory === category.id}
                                aria-haspopup="true"
                              >
                                <div className={styles.dropdownCategoryContent}>
                                  <h3>{category.title}</h3>
                                  <p>{category.description}</p>
                                </div>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10.0009 15.5858L13.5867 12L10.0009 8.41426C9.95209 8.36544 9.90937 8.31284 9.87276 8.25739C9.61648 7.86924 9.65919 7.34176 10.0009 7.00005C10.3914 6.60952 11.0246 6.60952 11.4151 7.00005L15.708 11.2929C15.8955 11.4805 16.0009 11.7348 16.0009 12C16.0009 12.2653 15.8955 12.5196 15.708 12.7072L11.4151 17C11.0246 17.3906 10.3914 17.3906 10.0009 17C9.61038 16.6095 9.61038 15.9764 10.0009 15.5858Z" />
                                </svg>
                              </div>
                            )
                          ))}
                        </div>
                        {selectedCategoryData && (
                          <div className={`${styles.dropdownColumn} ${styles.submenu} ${!isMobile || (isMobile && selectedCategory) ? styles.visible : ''}`}>
                            <div className={styles.dropdownCategoryDetails}>
                              {selectedCategoryData.pages.length > 0 ? (
                                <ul>
                                  {selectedCategoryData.pages.map(page => (
                                    <li key={page.id}>
                                      <Link
                                        href={page.url}
                                        onClick={() => {
                                          closeMenu();
                                          setIsDesignMenuOpen(false);
                                        }}
                                      >
                                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                          <path d="M7.33301 4.33325C7.33301 4.05725 7.10914 3.83325 6.83301 3.83325H2.66634C1.92994 3.83325 1.33301 4.42992 1.33301 5.16659V13.8333C1.33301 14.5699 1.92994 15.1666 2.66634 15.1666H11.333C12.0694 15.1666 12.6663 14.5699 12.6663 13.8333V9.66658C12.6663 9.39058 12.4425 9.16658 12.1663 9.16658C11.8902 9.16658 11.6663 9.39058 11.6663 9.66658V13.8333C11.6663 14.0173 11.5171 14.1666 11.333 14.1666H2.66634C2.48227 14.1666 2.33301 14.0173 2.33301 13.8333V5.16659C2.33301 4.98259 2.48227 4.83325 2.66634 4.83325H6.83301C7.10914 4.83325 7.33301 4.60925 7.33301 4.33325Z" />
                                          <path fillRule="evenodd" clipRule="evenodd" d="M12.9595 2.83325H9.83327C9.55713 2.83325 9.33327 2.60939 9.33327 2.33325C9.33327 2.05712 9.55713 1.83325 9.83327 1.83325H14.1666C14.4427 1.83325 14.6666 2.05712 14.6666 2.33325V6.66658C14.6666 6.94258 14.4427 7.16658 14.1666 7.16658C13.8905 7.16658 13.6666 6.94258 13.6666 6.66658V3.54059L6.70707 10.4999C6.51183 10.6953 6.19523 10.6953 5.99997 10.4999C5.8047 10.3046 5.8047 9.98792 5.99997 9.79258L12.9595 2.83325Z" />
                                        </svg>
                                        {page.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <p>Перейти на страницу</p>
                              )}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ) : (
                      <div
                        className={`${styles.dropdownMenu} ${isDesignMenuOpen ? styles.visible : ''}`}
                        role="menu"
                      >
                        <div className={styles.dropdownColumn}>
                          {designMenuData.designMenu.categories.map(category => (
                            category.directLink ? (
                              <Link
                                key={category.id}
                                href={category.directLink}
                                className={`${styles.dropdownCategory} ${selectedCategory === category.id ? styles.active : ''}`}
                                onClick={() => {
                                  closeMenu();
                                  setIsDesignMenuOpen(false);
                                }}
                                role="menuitem"
                                tabIndex={0}
                              >
                                <div className={styles.dropdownCategoryContent}>
                                  <h3>{category.title}</h3>
                                  <p>{category.description}</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                          <path d="M7.33301 4.33325C7.33301 4.05725 7.10914 3.83325 6.83301 3.83325H2.66634C1.92994 3.83325 1.33301 4.42992 1.33301 5.16659V13.8333C1.33301 14.5699 1.92994 15.1666 2.66634 15.1666H11.333C12.0694 15.1666 12.6663 14.5699 12.6663 13.8333V9.66658C12.6663 9.39058 12.4425 9.16658 12.1663 9.16658C11.8902 9.16658 11.6663 9.39058 11.6663 9.66658V13.8333C11.6663 14.0173 11.5171 14.1666 11.333 14.1666H2.66634C2.48227 14.1666 2.33301 14.0173 2.33301 13.8333V5.16659C2.33301 4.98259 2.48227 4.83325 2.66634 4.83325H6.83301C7.10914 4.83325 7.33301 4.60925 7.33301 4.33325Z" />
                                          <path fillRule="evenodd" clipRule="evenodd" d="M12.9595 2.83325H9.83327C9.55713 2.83325 9.33327 2.60939 9.33327 2.33325C9.33327 2.05712 9.55713 1.83325 9.83327 1.83325H14.1666C14.4427 1.83325 14.6666 2.05712 14.6666 2.33325V6.66658C14.6666 6.94258 14.4427 7.16658 14.1666 7.16658C13.8905 7.16658 13.6666 6.94258 13.6666 6.66658V3.54059L6.70707 10.4999C6.51183 10.6953 6.19523 10.6953 5.99997 10.4999C5.8047 10.3046 5.8047 9.98792 5.99997 9.79258L12.9595 2.83325Z" />
                                </svg>
                              </Link>
                            ) : (
                              <div
                                key={category.id}
                                className={`${styles.dropdownCategory} ${selectedCategory === category.id ? styles.active : ''}`}
                                onClick={() => isMobile && handleCategoryClick(category.id)}
                                onMouseEnter={() => !isMobile && setSelectedCategory(category.id)}
                                role="menuitem"
                                tabIndex={0}
                                aria-expanded={selectedCategory === category.id}
                                aria-haspopup="true"
                              >
                                <div className={styles.dropdownCategoryContent}>
                                  <h3>{category.title}</h3>
                                  <p>{category.description}</p>
                                </div>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10.0009 15.5858L13.5867 12L10.0009 8.41426C9.95209 8.36544 9.90937 8.31284 9.87276 8.25739C9.61648 7.86924 9.65919 7.34176 10.0009 7.00005C10.3914 6.60952 11.0246 6.60952 11.4151 7.00005L15.708 11.2929C15.8955 11.4805 16.0009 11.7348 16.0009 12C16.0009 12.2653 15.8955 12.5196 15.708 12.7072L11.4151 17C11.0246 17.3906 10.3914 17.3906 10.0009 17C9.61038 16.6095 9.61038 15.9764 10.0009 15.5858Z" />
                                </svg>
                              </div>
                            )
                          ))}
                        </div>
                        {selectedCategoryData && (
                          <div className={`${styles.dropdownColumn} ${styles.submenu} ${!isMobile || (isMobile && selectedCategory) ? styles.visible : ''}`}>
                            <div className={styles.dropdownCategoryDetails}>
                              {selectedCategoryData.pages.length > 0 ? (
                                <ul>
                                  {selectedCategoryData.pages.map(page => (
                                    <li key={page.id}>
                                      <Link
                                        href={page.url}
                                        onClick={() => {
                                          closeMenu();
                                          setIsDesignMenuOpen(false);
                                        }}
                                      >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                          <path d="M7.33301 4.33325C7.33301 4.05725 7.10914 3.83325 6.83301 3.83325H2.66634C1.92994 3.83325 1.33301 4.42992 1.33301 5.16659V13.8333C1.33301 14.5699 1.92994 15.1666 2.66634 15.1666H11.333C12.0694 15.1666 12.6663 14.5699 12.6663 13.8333V9.66658C12.6663 9.39058 12.4425 9.16658 12.1663 9.16658C11.8902 9.16658 11.6663 9.39058 11.6663 9.66658V13.8333C11.6663 14.0173 11.5171 14.1666 11.333 14.1666H2.66634C2.48227 14.1666 2.33301 14.0173 2.33301 13.8333V5.16659C2.33301 4.98259 2.48227 4.83325 2.66634 4.83325H6.83301C7.10914 4.83325 7.33301 4.60925 7.33301 4.33325Z" />
                                          <path fillRule="evenodd" clipRule="evenodd" d="M12.9595 2.83325H9.83327C9.55713 2.83325 9.33327 2.60939 9.33327 2.33325C9.33327 2.05712 9.55713 1.83325 9.83327 1.83325H14.1666C14.4427 1.83325 14.6666 2.05712 14.6666 2.33325V6.66658C14.6666 6.94258 14.4427 7.16658 14.1666 7.16658C13.8905 7.16658 13.6666 6.94258 13.6666 6.66658V3.54059L6.70707 10.4999C6.51183 10.6953 6.19523 10.6953 5.99997 10.4999C5.8047 10.3046 5.8047 9.98792 5.99997 9.79258L12.9595 2.83325Z" />
                                        </svg>
                                        {page.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <p>В данном разделе пока нет страниц</p>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  )}
                </AnimatePresence>
              </div>
            </li>
            <li>
              <Link href="/certificates" className={`${styles.link} ${theme === 'dark' ? styles.darkText : ''}`} onClick={closeMenu}>
                Сертификаты
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className={`${styles.link} ${theme === 'dark' ? styles.darkText : ''}`} onClick={closeMenu}>
                Портфолио
              </Link>
            </li>
            <li>
              <Link href="/cooperation" className={`${styles.link} ${theme === 'dark' ? styles.darkText : ''}`} onClick={closeMenu}>
                Сотрудничество
              </Link>
            </li>
            <li>
              <Link href="/useful" className={`${styles.link} ${theme === 'dark' ? styles.darkText : ''}`} onClick={closeMenu}>
                Полезная информация
              </Link>
            </li>
            <li>
              <Link href="/about" className={`${styles.link} ${theme === 'dark' ? styles.darkText : ''}`} onClick={closeMenu}>
                О компании
              </Link>
            </li>
            <li>
              <Link href="/blog" className={`${styles.link} ${theme === 'dark' ? styles.darkText : ''}`} onClick={closeMenu}>
                Блог
              </Link>
            </li>
          <button className={`${styles.buttonProject} ${theme === 'dark' ? styles.darkButton : ''}`} onClick={openModal}>
            Обсудить проект
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.0009 15.5858L13.5867 12L10.0009 8.41426C9.95209 8.36544 9.90937 8.31284 9.87276 8.25739C9.61648 7.86924 9.65919 7.34176 10.0009 7.00005C10.3914 6.60952 11.0246 6.60952 11.4151 7.00005L15.708 11.2929C15.8955 11.4805 16.0009 11.7348 16.0009 12C16.0009 12.2653 15.8955 12.5196 15.708 12.7072L11.4151 17C11.0246 17.3906 10.3914 17.3906 10.0009 17C9.61038 16.6095 9.61038 15.9764 10.0009 15.5858Z" />
            </svg>
          </button>
          </ul>
        </div>
      </nav>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
