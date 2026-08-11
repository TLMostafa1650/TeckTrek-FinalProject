import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  FaGraduationCap,
  FaBrain,
  FaShieldAlt,
  FaLaptopCode,
  FaArrowRight,
  FaArrowLeft,
  FaCompass
} from 'react-icons/fa';
import Button from '../Button/Button';
import styles from './Hero.module.css';

export default function Hero() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);

  const isRtl = (i18n.language || 'ar') === 'ar';
  const ArrowIcon = isRtl ? FaArrowLeft : FaArrowRight;

  const slides = [
    {
      id: 0,
      icon: <FaBrain />,
      titleKey: 'hero.slides.slide1Title',
      descKey: 'hero.slides.slide1Desc',
    },
    {
      id: 1,
      icon: <FaShieldAlt />,
      titleKey: 'hero.slides.slide2Title',
      descKey: 'hero.slides.slide2Desc',
    },
    {
      id: 2,
      icon: <FaLaptopCode />,
      titleKey: 'hero.slides.slide3Title',
      descKey: 'hero.slides.slide3Desc',
    },
  ];

  // Auto rotate slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className={styles.heroContainer}>
      {/* Background Graphic Effects */}
      <div className={styles.heroBgGrid} aria-hidden="true" />
      <div className={styles.heroGlow1} aria-hidden="true" />
      <div className={styles.heroGlow2} aria-hidden="true" />

      <div className={styles.contentWrapper}>
        {/* Main Hero Column */}
        <div className={styles.textCol}>
          <div className={styles.badge}>
            <FaGraduationCap />
            <span>{t('hero.badge')}</span>
          </div>

          <h1 className={styles.mainTitle}>
            {t('hero.title').split(' ')[0]}{' '}
            <span className={styles.titleHighlight}>
              {t('hero.title').split(' ').slice(1).join(' ')}
            </span>
          </h1>

          <p className={styles.description}>{t('hero.subtitle')}</p>

          <div className={styles.ctaGroup}>
            <Button
              variant="gold"
              size="large"
              onClick={() => navigate('/programs')}
              icon={<ArrowIcon />}
            >
              {t('hero.explorePrograms')}
            </Button>

            <Button
              variant="outline"
              size="large"
              style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.4)' }}
              onClick={() => navigate('/about')}
              icon={<FaCompass />}
            >
              {t('hero.aboutFaculty')}
            </Button>
          </div>

          {/* Slide Indicators */}
          <div className={styles.indicators}>
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActiveSlide(idx)}
                className={`${styles.dot} ${activeSlide === idx ? styles.activeDot : ''}`}
                aria-label={`Go to slide ${idx + 1}`}
                type="button"
              />
            ))}
          </div>
        </div>

        {/* Hero Interactive Feature Cards */}
        <div className={styles.visualCol}>
          {slides.map((slide, idx) => {
            const isActive = activeSlide === idx;
            return (
              <div
                key={slide.id}
                onClick={() => setActiveSlide(idx)}
                className={`${styles.slideCard} ${isActive ? styles.activeSlideCard : ''}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setActiveSlide(idx);
                }}
              >
                <div className={styles.slideHeader}>
                  <h3 className={styles.slideTitle}>{t(slide.titleKey)}</h3>
                  <div className={styles.slideIconBadge}>{slide.icon}</div>
                </div>
                <p className={styles.slideDesc}>{t(slide.descKey)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
