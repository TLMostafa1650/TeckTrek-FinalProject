import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBookOpen,
  FaLaptopCode
} from 'react-icons/fa';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './Statistics.module.css';

export default function Statistics() {
  const { t } = useTranslation();

  const stats = [
    {
      id: 'students',
      value: '+3500',
      icon: <FaUserGraduate />,
      labelKey: 'statistics.students',
      descKey: 'statistics.descStudents',
    },
    {
      id: 'faculty',
      value: '+120',
      icon: <FaChalkboardTeacher />,
      labelKey: 'statistics.faculty',
      descKey: 'statistics.descFaculty',
    },
    {
      id: 'programs',
      value: '+25',
      icon: <FaBookOpen />,
      labelKey: 'statistics.programs',
      descKey: 'statistics.descPrograms',
    },
    {
      id: 'labs',
      value: '+15',
      icon: <FaLaptopCode />,
      labelKey: 'statistics.labs',
      descKey: 'statistics.descLabs',
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionTitle
          badge={t('statistics.badge')}
          title={t('statistics.title')}
          subtitle={t('statistics.subtitle')}
          dark={true}
        />

        <div className={styles.grid}>
          {stats.map((stat) => (
            <div key={stat.id} className={styles.card}>
              <div className={styles.iconWrapper}>{stat.icon}</div>
              <div className={styles.value}>{stat.value}</div>
              <div className={styles.label}>{t(stat.labelKey)}</div>
              <p className={styles.desc}>{t(stat.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
