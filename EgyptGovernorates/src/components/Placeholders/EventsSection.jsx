import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaMapMarkerAlt } from 'react-icons/fa';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './EventsSection.module.css';

export default function EventsSection() {
  const { t } = useTranslation();

  const events = [
    {
      id: 1,
      day: '15',
      month: 'سبتمبر',
      titleKey: 'eventsSection.event1Title',
      location: 'قاعة المؤتمرات الكبرى بالكلية',
    },
    {
      id: 2,
      day: '20',
      month: 'سبتمبر',
      titleKey: 'eventsSection.event2Title',
      location: 'المبنى المركزي والمعامل الذكية',
    },
  ];

  return (
    <section className={styles.section} id="events">
      <div className={styles.container}>
        <SectionTitle
          badge={t('eventsSection.badge')}
          title={t('eventsSection.title')}
          subtitle={t('eventsSection.subtitle')}
        />

        <div className={styles.grid}>
          {events.map((evt) => (
            <NavLink key={evt.id} to="/events" style={{ textDecoration: 'none' }}>
              <div className={styles.card}>
                <div className={styles.dateBox}>
                  <span className={styles.day}>{evt.day}</span>
                  <span className={styles.month}>{evt.month}</span>
                </div>
                <div>
                  <h3 className={styles.eventTitle}>{t(evt.titleKey)}</h3>
                  <div className={styles.eventLocation}>
                    <FaMapMarkerAlt color="var(--primary-700)" />
                    <span>{evt.location}</span>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}
