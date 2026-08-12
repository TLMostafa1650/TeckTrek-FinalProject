// src/pages/NotFound/NotFound.jsx
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaHome, FaSitemap } from "react-icons/fa";
import styles from "./NotFound.module.css";

function NotFound() {
  const { t } = useTranslation();

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <p className={styles.code} aria-hidden="true">
          {t("notFound.code")}
        </p>

        <h1 className={styles.title}>{t("notFound.title")}</h1>
        <p className={styles.message}>{t("notFound.message")}</p>

        <div className={styles.actions}>
          <Link to="/" className={styles.primaryLink}>
            <FaHome aria-hidden="true" />
            {t("notFound.backHome")}
          </Link>

          <Link to="/departments" className={styles.secondaryLink}>
            <FaSitemap aria-hidden="true" />
            {t("notFound.browseDepartments")}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
