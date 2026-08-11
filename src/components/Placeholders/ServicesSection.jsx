import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  FaLaptop,
  FaFileAlt,
  FaReceipt,
  FaCertificate,
  FaIdCard,
  FaUserCog
} from 'react-icons/fa';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './ServicesSection.module.css';

export default function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    { id: 1, icon: <FaLaptop />, title: t('quickLinks.studentPortal') },
    { id: 2, icon: <FaFileAlt />, title: t('quickLinks.academicSystem') },
    { id: 3, icon: <FaReceipt />, title: t('quickLinks.examResults') },
    { id: 4, icon: <FaCertificate />, title: t('quickLinks.academicGuide') },
    { id: 5, icon: <FaIdCard />, title: t('quickLinks.universityEmail') },
    { id: 6, icon: <FaUserCog />, title: t('quickLinks.schedule') },
  ];

  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <SectionTitle
          badge={t('servicesSection.badge')}
          title={t('servicesSection.title')}
          subtitle={t('servicesSection.subtitle')}
        />

        <div className={styles.grid}>
          {services.map((srv) => (
            <NavLink key={srv.id} to="/services" style={{ textDecoration: 'none' }}>
              <div className={styles.card}>
                <div className={styles.icon}>{srv.icon}</div>
                <h3 className={styles.cardTitle}>{srv.title}</h3>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}
