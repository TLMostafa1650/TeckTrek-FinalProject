import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  FaGraduationCap,
  FaGlobe,
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronRight,
  FaChevronLeft
} from 'react-icons/fa';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const currentLang = i18n.language || 'ar';
  const isRtl = currentLang === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileOpen]);

  const toggleLanguage = () => {
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { path: '/', label: t('navbar.home') },
    { path: '/about', label: t('navbar.about') },
    { path: '/departments', label: t('navbar.departments') },
    { path: '/programs', label: t('navbar.programs') },
    { path: '/news', label: t('navbar.news') },
    { path: '/announcements', label: t('navbar.announcements') },
    { path: '/faculty', label: t('navbar.faculty') },
    { path: '/services', label: t('navbar.services') },
    { path: '/events', label: t('navbar.events') },
    { path: '/contact', label: t('navbar.contact') },
  ];

  return (
    <header className={`${styles.navbarWrapper} ${isScrolled ? styles.scrolled : ''}`}>
      {/* Top Utility Bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarInfo}>
          <a href="tel:+20212345678" className={styles.topBarLink}>
            <FaPhoneAlt size={12} aria-hidden="true" />
            <span dir="ltr">{t('footer.phone')}</span>
          </a>
          <a
            href={`mailto:${t('footer.email')}`}
            className={styles.topBarLink}
          >
            <FaEnvelope size={12} aria-hidden="true" />
            <span dir="ltr">{t('footer.email')}</span>
          </a>
        </div>
        <div>
          <span>{t('hero.badge')}</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={styles.container}>
        {/* Brand Logo */}
        <NavLink to="/" className={styles.brand} onClick={() => setIsMobileOpen(false)}>
          <div className={styles.logoBadge} aria-hidden="true">
            <FaGraduationCap />
          </div>
          <div className={styles.brandText}>
            <span className={styles.brandTitle}>{t('navbar.brandTitle')}</span>
            <span className={styles.brandSub}>{t('navbar.brandSub')}</span>
          </div>
        </NavLink>

        {/* Desktop Nav Links */}
        <nav className={styles.navDesktop} aria-label={t('common.mainNav')}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.activeNavLink : ''}`
              }
              end={link.path === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions (Lang Switch + Hamburger) */}
        <div className={styles.navActions}>
          <button
            onClick={toggleLanguage}
            className={styles.langBtn}
            aria-label={t('common.switchLanguage')}
            type="button"
          >
            <FaGlobe />
            <span>{t('navbar.langSwitch')}</span>
          </button>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={styles.hamburger}
            aria-label={t('navbar.toggleMenu')}
            aria-expanded={isMobileOpen}
            type="button"
          >
            {isMobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      {isMobileOpen && (
        <div
          className={styles.mobileOverlay}
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Menu */}
      <div
        className={`${styles.mobileMenu} ${isMobileOpen ? styles.mobileMenuOpen : ''}`}
        aria-hidden={!isMobileOpen}
      >
        <div className={styles.mobileHeader}>
          <div className={styles.brand}>
            <div className={styles.logoBadge}>
              <FaGraduationCap />
            </div>
            <div className={styles.brandText}>
              <span className={styles.brandTitle}>{t('navbar.brandTitle')}</span>
            </div>
          </div>
          <button
            onClick={() => setIsMobileOpen(false)}
            className={styles.closeBtn}
            aria-label={t('common.closeMenu')}
            type="button"
          >
            <FaTimes />
          </button>
        </div>

        <nav className={styles.mobileNavLinks} aria-label={t('common.mobileNav')}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileOpen(false)}
              className={({ isActive }) =>
                `${styles.mobileNavLink} ${isActive ? styles.mobileActiveNavLink : ''}`
              }
              end={link.path === '/'}
            >
              <span>{link.label}</span>
              {isRtl ? <FaChevronLeft size={12} /> : <FaChevronRight size={12} />}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
