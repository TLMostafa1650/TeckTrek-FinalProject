import React from 'react';
import { FaBullhorn, FaCalendarAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import styles from './AnnouncementCard.module.css';

export default function AnnouncementCard({ item }) {
  const { t } = useTranslation();
  return (
    <article className={styles.card}>
      <div className={styles.icon}><FaBullhorn /></div>
      <div className={styles.content}>
        <div className={styles.date}><FaCalendarAlt /> {t(item.dateKey)}</div>
        <h2>{t(item.titleKey)}</h2>
        <p>{t(item.descKey)}</p>
      </div>
    </article>
  );
}
