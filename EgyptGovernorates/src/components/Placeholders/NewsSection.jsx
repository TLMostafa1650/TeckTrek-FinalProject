import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaCalendarAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';
import styles from './NewsSection.module.css';

export default function NewsSection() {
  const { t, i18n } = useTranslation();
  const isRtl = (i18n.language || 'ar') === 'ar';
  const ArrowIcon = isRtl ? FaArrowLeft : FaArrowRight;

  const newsItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
      titleKey: 'newsSection.item1Title',
      dateKey: 'newsSection.item1Date',
      descKey: 'newsSection.item1Desc',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      titleKey: 'newsSection.item2Title',
      dateKey: 'newsSection.item2Date',
      descKey: 'newsSection.item2Desc',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
      titleKey: 'newsSection.item3Title',
      dateKey: 'newsSection.item3Date',
      descKey: 'newsSection.item3Desc',
    },
  ];

  return (
    <section className={styles.section} id="news">
      <div className={styles.container}>
        <SectionTitle
          badge={t('newsSection.badge')}
          title={t('newsSection.title')}
          subtitle={t('newsSection.subtitle')}
        />

        <div className={styles.grid}>
          {newsItems.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={t(item.titleKey)} className={styles.image} loading="lazy" />
                <div className={styles.dateBadge}>
                  <FaCalendarAlt />
                  <span>{t(item.dateKey)}</span>
                </div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{t(item.titleKey)}</h3>
                <p className={styles.desc}>{t(item.descKey)}</p>
                <div className={styles.footer}>
                  <NavLink to="/news">
                    <Button variant="secondary" size="small" icon={<ArrowIcon />}>
                      {t('newsSection.readArticle')}
                    </Button>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
