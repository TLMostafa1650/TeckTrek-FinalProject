import React from 'react';
import styles from './SectionTitle.module.css';

export default function SectionTitle({
  title,
  subtitle,
  badge,
  align = 'center',
  dark = false,
  className = '',
}) {
  const containerClasses = [
    styles.container,
    styles[align] || styles.center,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClasses}>
      {badge && (
        <span className={`${styles.badge} ${dark ? styles.badgeDark : ''}`}>
          {badge}
        </span>
      )}
      <h2 className={`${styles.title} ${dark ? styles.titleDark : ''}`}>
        {title}
      </h2>
      <span className={styles.accentBar} />
      {subtitle && (
        <p className={`${styles.subtitle} ${dark ? styles.subtitleDark : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
