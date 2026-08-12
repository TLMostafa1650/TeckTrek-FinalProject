// src/components/Loading/Loading.jsx
import { useTranslation } from "react-i18next";
import styles from "./Loading.module.css";

/**
 * Translated loading state.
 * role="status" + aria-live lets screen readers announce it.
 */
function Loading() {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper} role="status" aria-live="polite">
      <span className={styles.spinner} aria-hidden="true" />
      <p className={styles.text}>{t("common.loading")}</p>
    </div>
  );
}

export default Loading;
