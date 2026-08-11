// src/components/DepartmentCard.jsx
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./DepartmentCard.module.css";

function DepartmentCard({ department }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar") ? "ar" : "en";

  const name = department.name[lang];
  const shortDescription = department.shortDescription[lang];

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img
          src={department.image}
          alt={name}
          loading="lazy"
          onError={(e) => {
            e.target.src = "/images/placeholder.jpg";
          }}
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>{shortDescription}</p>

        <div className={styles.meta}>
          <span>
            {department.programsCount} {t("departments.programsCount")}
          </span>
        </div>

        <Link
          to={`/departments/${department.id}`}
          className={styles.button}
          aria-label={t("departments.viewDetailsAria", { name })}
        >
          {t("common.viewDetails")}
        </Link>
      </div>
    </div>
  );
}

export default DepartmentCard;
