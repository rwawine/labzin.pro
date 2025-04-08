import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './page.module.css';

// This would typically come from a database or CMS
const blogPosts = [
  {
    id: 1,
    title: 'Тренды веб-разработки в 2023 году',
    content: `
      <p>Веб-разработка продолжает эволюционировать с невероятной скоростью. В 2023 году мы наблюдаем несколько ключевых трендов, которые определяют будущее интернета.</p>
      
      <h2>1. Прогрессивные веб-приложения (PWA)</h2>
      <p>PWA становятся все более популярными благодаря своей способности работать как нативные приложения, но с преимуществами веб-технологий. Они обеспечивают быструю загрузку, работу офлайн и push-уведомления, что значительно улучшает пользовательский опыт.</p>
      
      <h2>2. JAMstack архитектура</h2>
      <p>JAMstack (JavaScript, APIs, Markup) продолжает набирать популярность как подход к разработке, который обеспечивает лучшую производительность, безопасность и масштабируемость. Отделение фронтенда от бэкенда позволяет разработчикам создавать более быстрые и надежные приложения.</p>
      
      <h2>3. WebAssembly</h2>
      <p>WebAssembly позволяет запускать код, написанный на языках, отличных от JavaScript, с производительностью, близкой к нативной. Это открывает новые возможности для веб-приложений, особенно в областях, требующих высокой производительности, таких как игры, 3D-рендеринг и обработка данных.</p>
      
      <h2>4. Микрофронтенды</h2>
      <p>Архитектура микрофронтендов позволяет разбивать большие монолитные фронтенды на меньшие, независимые части, которые могут разрабатываться и развертываться отдельно. Это улучшает масштабируемость команд и ускоряет разработку.</p>
      
      <h2>5. AI и машинное обучение в веб-разработке</h2>
      <p>Искусственный интеллект и машинное обучение все чаще интегрируются в веб-приложения для персонализации контента, улучшения пользовательского опыта и автоматизации рутинных задач.</p>
      
      <p>Эти тренды не только определяют текущее состояние веб-разработки, но и указывают на направление, в котором движется индустрия. Для разработчиков важно следить за этими изменениями и адаптировать свои навыки, чтобы оставаться конкурентоспособными на рынке.</p>
    `,
    date: '15 июня 2023',
    category: 'Веб-разработка',
    image: '/images/blog/web-dev-trends.jpg',
    slug: 'web-development-trends-2023',
    author: 'Александр Петров',
    readingTime: '5 мин',
  },
  {
    id: 2,
    title: 'Как создать эффективный UI/UX дизайн',
    content: `
      <p>Создание эффективного UI/UX дизайна — это искусство и наука, которые требуют глубокого понимания пользователей и их потребностей. В этой статье мы рассмотрим ключевые принципы и практики, которые помогут вам создавать интерфейсы, которые не только выглядят привлекательно, но и обеспечивают отличный пользовательский опыт.</p>
      
      <h2>1. Понимание пользователей</h2>
      <p>Первым шагом в создании эффективного UI/UX дизайна является глубокое понимание ваших пользователей. Кто они? Какие у них цели? Какие проблемы они пытаются решить? Ответы на эти вопросы помогут вам создать дизайн, который действительно отвечает потребностям пользователей.</p>
      
      <h2>2. Простота и ясность</h2>
      <p>Простой и понятный интерфейс всегда лучше сложного и запутанного. Убедитесь, что ваш дизайн легко понять и использовать. Избегайте лишних элементов и фокусируйтесь на том, что действительно важно для пользователей.</p>
      
      <h2>3. Консистентность</h2>
      <p>Консистентность в дизайне помогает пользователям быстрее освоиться с интерфейсом. Используйте одинаковые элементы, цвета, шрифты и стили по всему приложению. Это создает ощущение целостности и профессионализма.</p>
      
      <h2>4. Отзывчивость</h2>
      <p>Пользователи ожидают мгновенной реакции от интерфейса. Убедитесь, что ваш дизайн отзывчив и реагирует на действия пользователя без задержек. Это включает в себя быструю загрузку страниц, плавные анимации и четкую обратную связь.</p>
      
      <h2>5. Доступность</h2>
      <p>Эффективный UI/UX дизайн должен быть доступен для всех пользователей, включая тех, кто имеет ограниченные возможности. Следуйте принципам доступности, таким как достаточный контраст, поддержка клавиатурной навигации и совместимость с программами чтения с экрана.</p>
      
      <p>Создание эффективного UI/UX дизайна — это непрерывный процесс, который требует постоянного тестирования и улучшения. Следуя этим принципам, вы сможете создавать интерфейсы, которые не только выглядят привлекательно, но и обеспечивают отличный пользовательский опыт.</p>
    `,
    date: '3 июля 2023',
    category: 'UI/UX Дизайн',
    image: '/images/blog/ui-ux-design.jpg',
    slug: 'effective-ui-ux-design',
    author: 'Мария Иванова',
    readingTime: '6 мин',
  },
  // Add more blog posts as needed
];

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

// Generate metadata for the blog post
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const post = blogPosts.find(post => post.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Статья не найдена | Labzin.pro',
      description: 'Запрашиваемая статья не найдена.',
    };
  }
  
  return {
    title: `${post.title} | Labzin.pro`,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, ''),
    keywords: `${post.category.toLowerCase()}, ${post.title.toLowerCase()}, веб-разработка, дизайн, IT`,
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 160).replace(/<[^>]*>/g, ''),
      url: `https://labzin.pro/blog/${post.slug}`,
      siteName: 'Labzin.pro',
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'ru_RU',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: [post.category],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.content.substring(0, 160).replace(/<[^>]*>/g, ''),
      images: [post.image],
    },
    alternates: {
      canonical: `https://labzin.pro/blog/${post.slug}`,
    },
  };
}

export default function BlogPost(
  { params }: Props
) {
  const post = blogPosts.find(post => post.slug === params.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/blog" className={styles.backLink}>
          ← Назад к блогу
        </Link>
        <div className={styles.meta}>
          <span className={styles.category}>{post.category}</span>
          <span className={styles.date}>{post.date}</span>
          <span className={styles.readingTime}>{post.readingTime} чтения</span>
        </div>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.author}>
          <div className={styles.authorAvatar}></div>
          <div className={styles.authorInfo}>
            <span className={styles.authorName}>{post.author}</span>
          </div>
        </div>
      </div>
      
      <div className={styles.imageContainer}>
        <div className={styles.imagePlaceholder}></div>
      </div>
      
      <div 
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      
      <div className={styles.shareSection}>
        <h3 className={styles.shareTitle}>Поделиться статьей</h3>
        <div className={styles.shareButtons}>
          <button className={`${styles.shareButton} ${styles.facebook}`}>
            Facebook
          </button>
          <button className={`${styles.shareButton} ${styles.twitter}`}>
            Twitter
          </button>
          <button className={`${styles.shareButton} ${styles.telegram}`}>
            Telegram
          </button>
          <button className={`${styles.shareButton} ${styles.whatsapp}`}>
            WhatsApp
          </button>
        </div>
      </div>
      
      <div className={styles.relatedPosts}>
        <h2 className={styles.relatedTitle}>Похожие статьи</h2>
        <div className={styles.relatedGrid}>
          {blogPosts
            .filter(relatedPost => relatedPost.id !== post.id)
            .slice(0, 3)
            .map(relatedPost => (
              <Link 
                href={`/blog/${relatedPost.slug}`} 
                key={relatedPost.id} 
                className={styles.relatedCard}
              >
                <div className={styles.relatedImage}></div>
                <div className={styles.relatedContent}>
                  <span className={styles.relatedCategory}>{relatedPost.category}</span>
                  <h3 className={styles.relatedPostTitle}>{relatedPost.title}</h3>
                  <span className={styles.relatedDate}>{relatedPost.date}</span>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
} 