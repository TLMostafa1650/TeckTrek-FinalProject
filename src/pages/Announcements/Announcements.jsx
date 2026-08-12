import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import AnnouncementCard from '../../components/AnnouncementCard/AnnouncementCard';
import announcements from '../../data/announcements';
import styles from './Announcements.module.css';

export default function Announcements() {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return announcements;
    return announcements.filter((item) => {
      return `${t(item.titleKey)} ${t(item.descKey)}`.toLowerCase().includes(query);
    });
  }, [search, t]);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <SectionTitle badge={t('announcementsPage.badge')} title={t('announcementsPage.title')} subtitle={t('announcementsPage.subtitle')} />
        <div className={styles.searchWrap}>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t('announcementsPage.search')}
            aria-label={t('announcementsPage.search')}
          />
        </div>
        <div className={styles.list}>
          {filtered.length > 0 ? filtered.map((item) => <AnnouncementCard key={item.id} item={item} />) : <div className={styles.empty}>{t('announcementsPage.empty')}</div>}
        </div>
      </div>
    </div>
  );
}
