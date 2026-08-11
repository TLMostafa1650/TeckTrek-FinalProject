import React, { useEffect } from 'react';
import Hero from '../../components/Hero/Hero';
import Introduction from '../../components/Introduction/Introduction';
import Statistics from '../../components/Statistics/Statistics';
import QuickLinks from '../../components/QuickLinks/QuickLinks';
import ProgramsSection from '../../components/Placeholders/ProgramsSection';
import NewsSection from '../../components/Placeholders/NewsSection';
import AnnouncementsSection from '../../components/Placeholders/AnnouncementsSection';
import ServicesSection from '../../components/Placeholders/ServicesSection';
import EventsSection from '../../components/Placeholders/EventsSection';
import styles from './Home.module.css';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.homeContainer}>
      <Hero />
      <Introduction />
      <Statistics />
      <QuickLinks />
      <ProgramsSection />
      <NewsSection />
      <AnnouncementsSection />
      <ServicesSection />
      <EventsSection />
    </div>
  );
}
