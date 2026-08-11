import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  FaUserShield,
  FaEnvelopeOpenText,
  FaGraduationCap,
  FaCalendarAlt,
  FaPollH,
  FaBookReader,
  FaArrowLeft,
  FaArrowRight
} from 'react-icons/fa';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './QuickLinks.module.css';

export default function QuickLinks() {
  const { t, i18n } = useTranslation();
  const isRtl = (i18n.language || 'ar') === 'ar';
  const ArrowIcon = isRtl ? FaArrowLeft : FaArrowRight;

  const links = [
    {
      id: 'studentPortal',
      icon: <FaUserShield />,
      titleKey: 'quickLinks.studentPortal',
      descKey: 'quickLinks.studentPortalDesc',
      to: '/services',
    },
    {
      id: 'universityEmail',
      icon: <FaEnvelopeOpenText />,
      titleKey: 'quickLinks.universityEmail',
      descKey: 'quickLinks.universityEmailDesc',
      to: '/services',
    },
    {
      id: 'academicSystem',
      icon: <FaGraduationCap />,
      titleKey: 'quickLinks.academicSystem',
      descKey: 'quickLinks.academicSystemDesc',
      to: '/services',
    },
    {
      id: 'schedule',
      icon: <FaCalendarAlt />,
      titleKey: 'quickLinks.schedule',
      descKey: 'quickLinks.scheduleDesc',
      to: '/services',
    },
    {
      id: 'examResults',
      icon: <FaPollH />,
      titleKey: 'quickLinks.examResults',
      descKey: 'quickLinks.examResultsDesc',
      to: '/services',
    },
    {
      id: 'academicGuide',
      icon: <FaBookReader />,
      titleKey: 'quickLinks.academicGuide',
      descKey: 'quickLinks.academicGuideDesc',
      to: '/services',
    },
  ];

  return (
    <section className={styles.section} id="quick-links">
      <div className={styles.container}>
        <SectionTitle
          badge={t('quickLinks.badge')}
          title={t('quickLinks.title')}
          subtitle={t('quickLinks.subtitle')}
        />

        <div className={styles.grid}>
          {links.map((link) => (
            <NavLink key={link.id} to={link.to} className={styles.card}>
              <div className={styles.iconWrapper}>{link.icon}</div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  <span>{t(link.titleKey)}</span>
                  <ArrowIcon className={styles.cardArrow} />
                </h3>
                <p className={styles.cardDesc}>{t(link.descKey)}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}
