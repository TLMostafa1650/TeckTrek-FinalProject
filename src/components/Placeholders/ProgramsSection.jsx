import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  FaDatabase,
  FaUserMd,
  FaShieldAlt,
  FaBrain,
  FaBriefcase,
  FaArrowLeft,
  FaArrowRight
} from 'react-icons/fa';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';
import styles from './ProgramsSection.module.css';

export default function ProgramsSection() {
  const { t, i18n } = useTranslation();
  const isRtl = (i18n.language || 'ar') === 'ar';
  const ArrowIcon = isRtl ? FaArrowLeft : FaArrowRight;

  const programs = [
    {
      id: 'ds',
      icon: <FaDatabase />,
      titleKey: 'programsSection.ds',
      descKey: 'programsSection.dsDesc',
    },
    {
      id: 'medical',
      icon: <FaUserMd />,
      titleKey: 'programsSection.medical',
      descKey: 'programsSection.medicalDesc',
    },
    {
      id: 'cyber',
      icon: <FaShieldAlt />,
      titleKey: 'programsSection.cyber',
      descKey: 'programsSection.cyberDesc',
    },
    {
      id: 'ai',
      icon: <FaBrain />,
      titleKey: 'programsSection.ai',
      descKey: 'programsSection.aiDesc',
    },
    {
      id: 'business',
      icon: <FaBriefcase />,
      titleKey: 'programsSection.business',
      descKey: 'programsSection.businessDesc',
    },
  ];

  return (
    <section className={styles.section} id="programs">
      <div className={styles.container}>
        <SectionTitle
          badge={t('programsSection.badge')}
          title={t('programsSection.title')}
          subtitle={t('programsSection.subtitle')}
        />

        <div className={styles.grid}>
          {programs.map((prog) => (
            <div key={prog.id} className={styles.card}>
              <div className={styles.iconBadge}>{prog.icon}</div>
              <h3 className={styles.title}>{t(prog.titleKey)}</h3>
              <p className={styles.desc}>{t(prog.descKey)}</p>
              <div className={styles.footer}>
                <NavLink to="/programs">
                  <Button variant="outline" size="small" icon={<ArrowIcon />}>
                    {t('hero.explorePrograms')}
                  </Button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
