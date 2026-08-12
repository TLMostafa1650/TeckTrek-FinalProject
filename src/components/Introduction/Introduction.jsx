import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useLang from '../../hooks/useLang';
import {
  FaAward,
  FaMicrochip,
  FaHandshake,
  FaArrowRight,
  FaArrowLeft,
  FaBuilding
} from 'react-icons/fa';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';
import facultyBuildingImg from '../../assets/images/faculty_building_1786384266152.jpg';
import styles from './Introduction.module.css';

export default function Introduction() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { isRtl } = useLang();
  const ArrowIcon = isRtl ? FaArrowLeft : FaArrowRight;

  const features = [
    {
      id: 'accreditation',
      icon: <FaAward />,
      titleKey: 'introduction.features.accreditationTitle',
      descKey: 'introduction.features.accreditationDesc',
    },
    {
      id: 'labs',
      icon: <FaMicrochip />,
      titleKey: 'introduction.features.labsTitle',
      descKey: 'introduction.features.labsDesc',
    },
    {
      id: 'partnerships',
      icon: <FaHandshake />,
      titleKey: 'introduction.features.partnershipsTitle',
      descKey: 'introduction.features.partnershipsDesc',
    },
  ];

  return (
    <section className={styles.section} id="introduction">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Image / Visual Column */}
          <div className={styles.imageCol}>
            <div className={styles.imageFrame}>
              <img
                src={facultyBuildingImg}
                alt={t('introduction.imageAlt')}
                className={styles.facultyImage}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className={styles.imageBadge}>
                <FaBuilding className={styles.badgeIcon} />
                <div>
                  <div className={styles.badgeNumber}>2026</div>
                  <div className={styles.badgeLabel}>
                    {t('introduction.badge')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className={styles.contentCol}>
            <SectionTitle
              badge={t('introduction.badge')}
              title={t('introduction.title')}
              align={isRtl ? 'right' : 'left'}
            />

            <p className={styles.description}>{t('introduction.description')}</p>

            <div className={styles.featureList}>
              {features.map((item) => (
                <div key={item.id} className={styles.featureItem}>
                  <div className={styles.featureIcon}>{item.icon}</div>
                  <div>
                    <h3 className={styles.featureTitle}>{t(item.titleKey)}</h3>
                    <p className={styles.featureDesc}>{t(item.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <Button
                variant="primary"
                size="large"
                onClick={() => navigate('/about')}
                icon={<ArrowIcon />}
              >
                {t('introduction.readMore')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
