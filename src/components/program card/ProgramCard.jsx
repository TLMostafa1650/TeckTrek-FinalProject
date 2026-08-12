// src/components/ProgramCard.jsx
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useLang from "../../hooks/useLang";
import styles from "./ProgramCard.module.css";

function ProgramCard({ program }) {
  const { t } = useTranslation();
  const { lang } = useLang();

  const name = program.name[lang];
  const shortDescription = program.shortDescription[lang];
  const duration = program.duration[lang];
  const degree = program.degree[lang];

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img
          src={program.image}
          alt={name}
          loading="lazy"
          onError={(e) => {
            e.target.src = "/images/placeholder.jpg";
          }}
        />
        <span className={styles.badge}>{degree}</span>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>{shortDescription}</p>

        <div className={styles.meta}>
          <span>
            {t("programs.durationLabelWithValue", { value: duration })}
          </span>
        </div>

        <Link
          to={`/programs/${program.id}`}
          className={styles.button}
          aria-label={t("programs.viewDetailsAria", { name })}
        >
          {t("common.viewDetails")}
        </Link>
      </div>
    </div>
  );
}

export default ProgramCard;
