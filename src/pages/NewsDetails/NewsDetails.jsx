import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useLang from '../../hooks/useLang';
import { FaArrowLeft, FaArrowRight, FaCalendarAlt } from 'react-icons/fa';
import news from '../../data/news';
import styles from './NewsDetails.module.css';

export default function NewsDetails() {
  const { id } = useParams();
  const { t } = useTranslation();
  const item = news.find((entry) => String(entry.id) === String(id));
  const { isRtl } = useLang();
  const ArrowIcon = isRtl ? FaArrowRight : FaArrowLeft;

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!item) {
    return (
      <div className={styles.page}>
        <div className={styles.notFound}>
          <h1>{t('newsPage.notFound')}</h1>
          <NavLink to="/news">{t('newsPage.backToNews')}</NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <article className={styles.article}>
        <img src={item.image} alt={t(item.titleKey)} className={styles.image} />
        <div className={styles.body}>
          <div className={styles.meta}><FaCalendarAlt /> {t(item.dateKey)}</div>
          <h1>{t(item.titleKey)}</h1>
          <p className={styles.lead}>{t(item.descKey)}</p>
          <p>{t(item.contentKey)}</p>
          <NavLink to="/news" className={styles.back}><ArrowIcon /> {t('newsPage.backToNews')}</NavLink>
        </div>
      </article>
    </div>
  );
}
