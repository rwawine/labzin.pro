'use client'

import React from 'react'
import styles from './Breadcrumbs.module.css'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

interface BlogPost {
  id: string;
  title: string;
  'title-en': string;
}

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbsProps {
  blogPosts?: BlogPost[];
}

const getBreadcrumbs = (pathname: string, blogPosts?: BlogPost[]): BreadcrumbItem[] => {
  const segments = pathname.split('/').filter(Boolean)
  const breadcrumbs: BreadcrumbItem[] = []
  let path = ''

  const pathToLabel: { [key: string]: string } = {
    'portfolio': 'Портфолио',
    'certificates': 'Сертификаты',
    'cooperation': 'Сотрудничество',
    'contacts': 'Контакты',
    'blog': 'Блог',
  }

  breadcrumbs.push({ label: 'Главная', path: '/' })

  segments.forEach((segment, index) => {
    path += `/${segment}`
    
    // Если это последний сегмент и мы находимся в блоге, ищем заголовок статьи
    if (index === segments.length - 1 && segments[0] === 'blog' && segments.length > 1 && blogPosts) {
      const post = blogPosts.find(post => {
        const postSlug = post['title-en']
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '');
        return postSlug === segment;
      });
      
      if (post) {
        breadcrumbs.push({ label: post.title, path });
        return;
      }
    }
    
    const label = pathToLabel[segment] || segment
    breadcrumbs.push({ label, path })
  })

  return breadcrumbs
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ blogPosts }) => {
  const pathname = usePathname() || ''
  const router = useRouter()
  const breadcrumbs = getBreadcrumbs(pathname, blogPosts)

  const handleBack = () => {
    router.back()
  }

  return (
    <nav aria-label="Навигация по сайту" className={styles.breadcrumbs}>
      <Link href="#" onClick={handleBack} className={styles.backButton}>
        <svg
          className={styles.chevronIcon}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 12L10 8L6 4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Вернуться
      </Link>
      {breadcrumbs.map((item, index) => (
        <React.Fragment key={item.path}>
          {index > 0 && (
            <div className={styles.chevron}>
              <svg
                className={styles.chevronIcon}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L10 8L6 4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
          <Link 
            href={item.path}
            className={`${styles.breadcrumbText} ${
              index === breadcrumbs.length - 1 ? styles.active : ''
            }`}
          >
            {item.label}
          </Link>
        </React.Fragment>
      ))}
    </nav>
  )
}

export default Breadcrumbs
