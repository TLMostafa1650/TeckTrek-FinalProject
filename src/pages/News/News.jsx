import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import NewsCard from '../../components/NewsCard/NewsCard';
import news from '../../data/news';
import styles from './News.module.css';

export default function News() {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  const filteredNews = useMemo(() => {
    const query = search.trim().toLowerCase();
    return news.filter((item) => {
      const title = t(item.titleKey).toLowerCase();
      const desc = t(item.descKey).toLowerCase();
      const matchesSearch = !query || title.includes(query) || desc.includes(query);
      const matchesCategory = category === 'all' || item.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category, t]);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <SectionTitle badge={t('newsPage.badge')} title={t('newsPage.title')} subtitle={t('newsPage.subtitle')} />

        <div className={styles.controls}>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t('newsPage.search')}
            aria-label={t('newsPage.search')}
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)} aria-label={t('newsPage.category')}>
            <option value="all">{t('newsPage.categories.all')}</option>
            <option value="academic">{t('newsPage.categories.academic')}</option>
            <option value="students">{t('newsPage.categories.students')}</option>
            <option value="admissions">{t('newsPage.categories.admissions')}</option>
            <option value="research">{t('newsPage.categories.research')}</option>
          </select>
        </div>

        {filteredNews.length > 0 ? (
          <div className={styles.grid}>
            {filteredNews.map((item) => <NewsCard key={item.id} item={item} />)}
          </div>
        ) : (
          <div className={styles.empty}>{t('newsPage.empty')}</div>
        )}
      </div>
    </div>
  );
}
