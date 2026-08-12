import React from 'react';
import { FaCalendarAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import styles from './NewsCard.module.css';

export default function NewsCard({ item }) {
  const { t, i18n } = useTranslation();
  const isRtl = (i18n.language || 'ar') === 'ar';
  const ArrowIcon = isRtl ? FaArrowLeft : FaArrowRight;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={item.image} alt={t(item.titleKey)} className={styles.image} loading="lazy" />
        <span className={styles.category}>{t(`newsPage.categories.${item.category}`)}</span>
      </div>
      <div className={styles.content}>
        <div className={styles.date}>
          <FaCalendarAlt />
          <span>{t(item.dateKey)}</span>
        </div>
        <h2>{t(item.titleKey)}</h2>
        <p>{t(item.descKey)}</p>
        <NavLink className={styles.link} to={`/news/${item.id}`}>
          {t('newsPage.readMore')} <ArrowIcon />
        </NavLink>
      </div>
    </article>
  );
}
