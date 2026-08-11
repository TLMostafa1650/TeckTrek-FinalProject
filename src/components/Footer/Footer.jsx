import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaChevronRight,
  FaChevronLeft
} from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isRtl = (i18n.language || 'ar') === 'ar';

  const ArrowIcon = isRtl ? FaChevronLeft : FaChevronRight;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Column 1: Brand & About */}
          <div className={styles.brandCol}>
            <div className={styles.logoRow}>
              <div className={styles.logoBadge} aria-hidden="true">
                <FaGraduationCap />
              </div>
              <span className={styles.brandTitle}>{t('navbar.brandTitle')}</span>
            </div>
            <p className={styles.aboutText}>{t('footer.col1Desc')}</p>
            <div className={styles.socialList}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className={styles.colTitle}>{t('footer.col2Title')}</h3>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <NavLink to="/about"><ArrowIcon size={10} /> {t('footer.quickLinks.about')}</NavLink>
              </li>
              <li className={styles.linkItem}>
                <NavLink to="/departments"><ArrowIcon size={10} /> {t('footer.quickLinks.departments')}</NavLink>
              </li>
              <li className={styles.linkItem}>
                <NavLink to="/programs"><ArrowIcon size={10} /> {t('footer.quickLinks.programs')}</NavLink>
              </li>
              <li className={styles.linkItem}>
                <NavLink to="/news"><ArrowIcon size={10} /> {t('footer.quickLinks.news')}</NavLink>
              </li>
              <li className={styles.linkItem}>
                <NavLink to="/contact"><ArrowIcon size={10} /> {t('footer.quickLinks.contact')}</NavLink>
              </li>
              <li className={styles.linkItem}>
                <NavLink to="/services"><ArrowIcon size={10} /> {t('footer.quickLinks.portal')}</NavLink>
              </li>
            </ul>
          </div>

          {/* Column 3: Academic Departments */}
          <div>
            <h3 className={styles.colTitle}>{t('footer.col3Title')}</h3>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <NavLink to="/departments"><ArrowIcon size={10} /> {t('footer.departmentsList.ds')}</NavLink>
              </li>
              <li className={styles.linkItem}>
                <NavLink to="/departments"><ArrowIcon size={10} /> {t('footer.departmentsList.medical')}</NavLink>
              </li>
              <li className={styles.linkItem}>
                <NavLink to="/departments"><ArrowIcon size={10} /> {t('footer.departmentsList.cyber')}</NavLink>
              </li>
              <li className={styles.linkItem}>
                <NavLink to="/departments"><ArrowIcon size={10} /> {t('footer.departmentsList.ai')}</NavLink>
              </li>
              <li className={styles.linkItem}>
                <NavLink to="/departments"><ArrowIcon size={10} /> {t('footer.departmentsList.business')}</NavLink>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className={styles.colTitle}>{t('footer.col4Title')}</h3>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <span>{t('footer.address')}</span>
              </div>
              <div className={styles.contactItem}>
                <FaPhoneAlt className={styles.contactIcon} />
                <span>{t('footer.phone')}</span>
              </div>
              <div className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <span>{t('footer.email')}</span>
              </div>
              <div className={styles.contactItem}>
                <FaClock className={styles.contactIcon} />
                <span>{t('footer.workingHours')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>{t('footer.copyright')}</p>
          <div className={styles.bottomLinks}>
            <NavLink to="/privacy">{t('footer.quickLinks.about')}</NavLink>
            <NavLink to="/terms">{t('footer.quickLinks.contact')}</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
