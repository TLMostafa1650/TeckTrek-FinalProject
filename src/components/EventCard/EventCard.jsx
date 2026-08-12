import React from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import styles from './EventCard.module.css';

export default function EventCard({ event }) {
  const { t } = useTranslation();

  return (
    <article className={styles.card}>
      <div className={styles.dateBox}>
        <FaCalendarAlt aria-hidden="true" />
        <span>{t(event.dateKey)}</span>
      </div>

      <div className={styles.content}>
        <span className={styles.category}>
          {t(`eventsPage.categories.${event.category}`)}
        </span>

        <h2>{t(event.titleKey)}</h2>
        <p>{t(event.descKey)}</p>

        <div className={styles.meta}>
          <span>
            <FaClock aria-hidden="true" />
            {t(event.timeKey)}
          </span>
          <span>
            <FaMapMarkerAlt aria-hidden="true" />
            {t(event.locationKey)}
          </span>
        </div>
      </div>
    </article>
  );
}
