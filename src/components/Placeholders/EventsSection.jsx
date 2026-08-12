import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaMapMarkerAlt } from 'react-icons/fa';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './EventsSection.module.css';

export default function EventsSection() {
  const { t } = useTranslation();

  // Every visible value is a translation key so the section works in both languages.
  const events = [
    {
      id: 1,
      dayKey: 'eventsSection.event1Day',
      monthKey: 'eventsSection.event1Month',
      titleKey: 'eventsSection.event1Title',
      locationKey: 'eventsSection.event1Location',
    },
    {
      id: 2,
      dayKey: 'eventsSection.event2Day',
      monthKey: 'eventsSection.event2Month',
      titleKey: 'eventsSection.event2Title',
      locationKey: 'eventsSection.event2Location',
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
                  <span className={styles.day}>{t(evt.dayKey)}</span>
                  <span className={styles.month}>{t(evt.monthKey)}</span>
                </div>
                <div>
                  <h3 className={styles.eventTitle}>{t(evt.titleKey)}</h3>
                  <div className={styles.eventLocation}>
                    <FaMapMarkerAlt color="var(--primary-700)" aria-hidden="true" />
                    <span>{t(evt.locationKey)}</span>
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
