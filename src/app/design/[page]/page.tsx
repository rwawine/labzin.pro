import styles from '../page.module.css';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation/Navigation';
import designData from '@/components/Navigation/data.json';

// Типы для данных из JSON
type PageData = {
  id: string;
  title: string;
  url: string;
};

type CategoryData = {
  id: string;
  title: string;
  description: string;
  pages: PageData[];
  directLink?: string;
};

// Тип для параметров страницы
type PageParams = {
  params: Promise<{ page: string }>;
};

// Функция для генерации метаданных
export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { page: pageSlug } = await params;
  let foundPage: PageData | undefined;
  let foundCategory: CategoryData | undefined;

  // Поиск страницы среди всех категорий
  for (const category of designData.designMenu.categories) {
    if (category.directLink && category.directLink === `/design/${pageSlug}`) {
      return {
        title: category.title,
        description: category.description,
      };
    }

    const page = category.pages.find((p: PageData) => p.url === `/design/${pageSlug}`);
    if (page) {
      foundPage = page;
      foundCategory = category;
      break;
    }
  }

  if (!foundPage) {
    return {
      title: 'Страница не найдена',
      description: 'Запрашиваемая страница не существует',
    };
  }

  return {
    title: foundPage.title,
    description: foundCategory?.description || 'Проектирование и инженерные решения',
    openGraph: {
      title: foundPage.title,
      description: foundCategory?.description || 'Проектирование и инженерные решения',
      images: [
        {
          url: '/images/cooperation-og.jpg',
          width: 1200,
          height: 630,
          alt: foundPage.title,
        },
      ],
    },
  };
}

// Компонент страницы по умолчанию
export default async function DesignPage({
  params,
}: PageParams) {
  const { page: pageSlug } = await params;
  let foundPage: PageData | undefined;
  let foundCategory: CategoryData | undefined;

  // Поиск страницы среди всех категорий
  for (const category of designData.designMenu.categories) {
    if (category.directLink && category.directLink === `/design/${pageSlug}`) {
      return (
        <div className={styles.container}>
          <Navigation theme="light" />
          <div className={styles.content}>
            <h1>{category.title}</h1>
            <p>{category.description}</p>
            {/* Здесь будет контент для прямой ссылки */}
          </div>
        </div>
      );
    }

    const page = category.pages.find((p: PageData) => p.url === `/design/${pageSlug}`);
    if (page) {
      foundPage = page;
      foundCategory = category;
      break;
    }
  }

  if (!foundPage) {
    return (
      <div className={styles.container}>
        <Navigation theme="light" />
        <div className={styles.errorContainer}>
          <h1>404 - Страница не найдена</h1>
          <p>Запрашиваемая страница не существует.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Navigation theme="light" />
      <div className={styles.content}>
        <h1>{foundPage.title}</h1>
        <p>{foundCategory?.description || 'Проектирование и инженерные решения'}</p>
        {/* Здесь будет специфический контент для страницы */}
      </div>
    </div>
  );
} 