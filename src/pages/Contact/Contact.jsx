import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaCheckCircle,
  FaExclamationCircle,
} from 'react-icons/fa';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Button from '../../components/Button/Button';
import styles from './Contact.module.css';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

function validate(form, t) {
  const errors = {};

  const name = form.name.trim();
  const email = form.email.trim();
  const phone = form.phone.trim();
  const message = form.message.trim();

  if (!name) {
    errors.name = t('contactPage.errors.nameRequired');
  } else if (name.length < 2) {
    errors.name = t('contactPage.errors.nameShort');
  }

  if (!email) {
    errors.email = t('contactPage.errors.emailRequired');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = t('contactPage.errors.emailInvalid');
  }

  if (!phone) {
    errors.phone = t('contactPage.errors.phoneRequired');
  } else if (!/^\+?[0-9\s()-]{7,20}$/.test(phone)) {
    errors.phone = t('contactPage.errors.phoneInvalid');
  }

  if (!message) {
    errors.message = t('contactPage.errors.messageRequired');
  } else if (message.length < 10) {
    errors.message = t('contactPage.errors.messageShort');
  }

  return errors;
}

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: '',
      }));
    }

    if (status) {
      setStatus('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validate(form, t);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus('error');
      return;
    }

    // No backend is connected yet, so this represents a successful
    // client-side submission.
    setStatus('success');
    setForm(initialForm);
    setErrors({});
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <SectionTitle
          badge={t('contactPage.badge')}
          title={t('contactPage.title')}
          subtitle={t('contactPage.subtitle')}
        />

        <div className={styles.grid}>
          <aside className={styles.info}>
            <h2>{t('contactPage.infoTitle')}</h2>
            <p>{t('contactPage.infoDescription')}</p>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <FaMapMarkerAlt />
                <div>
                  <strong>{t('contactPage.addressLabel')}</strong>
                  <span>{t('footer.address')}</span>
                </div>
              </div>

              <div className={styles.infoItem}>
                <FaPhoneAlt />
                <div>
                  <strong>{t('contactPage.phoneLabel')}</strong>
                  <span>{t('footer.phone')}</span>
                </div>
              </div>

              <div className={styles.infoItem}>
                <FaEnvelope />
                <div>
                  <strong>{t('contactPage.emailLabel')}</strong>
                  <span>{t('footer.email')}</span>
                </div>
              </div>
            </div>
          </aside>

          <section className={styles.formCard}>
            <h2>{t('contactPage.formTitle')}</h2>

            {status === 'success' && (
              <div className={`${styles.alert} ${styles.success}`} role="status">
                <FaCheckCircle />
                <span>{t('contactPage.success')}</span>
              </div>
            )}

            {status === 'error' && (
              <div className={`${styles.alert} ${styles.error}`} role="alert">
                <FaExclamationCircle />
                <span>{t('contactPage.errorSummary')}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className={styles.field}>
                <label htmlFor="contact-name">{t('contactPage.name')}</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  className={errors.name ? styles.invalid : ''}
                />
                {errors.name && (
                  <span id="contact-name-error" className={styles.fieldError}>
                    {errors.name}
                  </span>
                )}
              </div>

              <div className={styles.twoColumns}>
                <div className={styles.field}>
                  <label htmlFor="contact-email">{t('contactPage.email')}</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    className={errors.email ? styles.invalid : ''}
                  />
                  {errors.email && (
                    <span id="contact-email-error" className={styles.fieldError}>
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-phone">{t('contactPage.phone')}</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                    className={errors.phone ? styles.invalid : ''}
                  />
                  {errors.phone && (
                    <span id="contact-phone-error" className={styles.fieldError}>
                      {errors.phone}
                    </span>
                  )}
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-message">{t('contactPage.message')}</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  value={form.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  className={errors.message ? styles.invalid : ''}
                />
                {errors.message && (
                  <span id="contact-message-error" className={styles.fieldError}>
                    {errors.message}
                  </span>
                )}
              </div>

              <Button type="submit" size="large">
                {t('contactPage.submit')}
              </Button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
