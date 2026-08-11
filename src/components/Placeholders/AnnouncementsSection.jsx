import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaBullhorn, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';
import styles from './AnnouncementsSection.module.css';

export default function AnnouncementsSection() {
  const { t, i18n } = useTranslation();
  const isRtl = (i18n.language || 'ar') === 'ar';
  const ArrowIcon = isRtl ? FaArrowLeft : FaArrowRight;

  const announcements = [
    t('announcementsSection.item1'),
    t('announcementsSection.item2'),
    t('announcementsSection.item3'),
  ];

  return (
    <section className={styles.section} id="announcements">
      <div className={styles.container}>
        <SectionTitle
          badge={t('announcementsSection.badge')}
          title={t('announcementsSection.title')}
          subtitle={t('announcementsSection.subtitle')}
        />

        <div className={styles.annContainer}>
          {announcements.map((text, idx) => (
            <div key={idx} className={styles.annCard}>
              <div className={styles.annContent}>
                <FaBullhorn className={styles.bellIcon} />
                <p className={styles.annText}>{text}</p>
              </div>
              <NavLink to="/announcements">
                <Button variant="outline" size="small" icon={<ArrowIcon />}>
                  {t('newsSection.readArticle')}
                </Button>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
