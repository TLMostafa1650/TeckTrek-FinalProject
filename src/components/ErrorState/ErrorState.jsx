// src/components/ErrorState/ErrorState.jsx
import { useTranslation } from "react-i18next";
import { FaExclamationTriangle, FaRedo } from "react-icons/fa";
import styles from "./ErrorState.module.css";

/**
 * Translated error state with a retry button.
 */
function ErrorState({ onRetry }) {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper} role="alert">
      <FaExclamationTriangle className={styles.icon} aria-hidden="true" />
      <p className={styles.text}>{t("common.error")}</p>

      {onRetry && (
        <button type="button" className={styles.retryButton} onClick={onRetry}>
          <FaRedo aria-hidden="true" />
          {t("common.retry")}
        </button>
      )}
    </div>
  );
}

export default ErrorState;
