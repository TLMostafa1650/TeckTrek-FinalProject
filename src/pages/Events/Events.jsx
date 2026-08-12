import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import EventCard from '../../components/EventCard/EventCard';
import Loading from '../../components/Loading/Loading';
import ErrorState from '../../components/ErrorState/ErrorState';
import usePageData from '../../hooks/usePageData';
import events from '../../data/events';
import styles from './Events.module.css';

export default function Events() {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const { loading, error, retry } = usePageData(events);

  const filteredEvents = useMemo(() => {
    const query = search.trim().toLowerCase();

    return events.filter((event) => {
      const searchableText = [
        t(event.titleKey),
        t(event.descKey),
        t(event.locationKey),
      ].join(' ').toLowerCase();

      const matchesSearch = !query || searchableText.includes(query);
      const matchesCategory =
        category === 'all' || event.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category, t]);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <SectionTitle
          badge={t('eventsPage.badge')}
          title={t('eventsPage.title')}
          subtitle={t('eventsPage.subtitle')}
        />

        <div className={styles.controls}>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t('eventsPage.search')}
            aria-label={t('eventsPage.search')}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            aria-label={t('eventsPage.category')}
          >
            <option value="all">{t('eventsPage.categories.all')}</option>
            <option value="career">{t('eventsPage.categories.career')}</option>
            <option value="academic">{t('eventsPage.categories.academic')}</option>
            <option value="workshop">{t('eventsPage.categories.workshop')}</option>
            <option value="students">{t('eventsPage.categories.students')}</option>
          </select>
        </div>

        {loading ? (
          <Loading />
        ) : error ? (
          <ErrorState onRetry={retry} />
        ) : filteredEvents.length > 0 ? (
          <div className={styles.list}>
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>{t('eventsPage.empty')}</div>
        )}
      </div>
    </div>
  );
}
