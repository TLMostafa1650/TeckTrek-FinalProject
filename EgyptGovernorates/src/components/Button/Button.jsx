import React from 'react';
import styles from './Button.module.css';

export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  icon = null,
  onClick,
  type = 'button',
  className = '',
  ...props
}) {
  const classNames = [
    styles.btn,
    styles[variant] || styles.primary,
    styles[size] || styles.medium,
    disabled || loading ? styles.disabled : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={classNames}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <span className={styles.spinner} aria-hidden="true" />
      ) : icon ? (
        <span className={styles.iconWrapper}>{icon}</span>
      ) : null}
      <span>{children}</span>
    </button>
  );
}
