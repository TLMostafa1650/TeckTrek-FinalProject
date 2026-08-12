// src/pages/ProgramDetails.jsx
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getProgramById } from "../data/programs";
import { getDepartmentById } from "../data/departments";
import styles from "./ProgramDetails.module.css";

function ProgramDetails() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar") ? "ar" : "en";
  const program = getProgramById(id);

  if (!program) {
    return (
      <div className={styles.notFound}>
        <h2>{t("programs.notFound")}</h2>
        <Link to="/programs" className={styles.backLink}>
          {t("programs.backToList")}
        </Link>
      </div>
    );
  }

  const department = getDepartmentById(program.departmentId);
  const name = program.name[lang];
  const description = program.description[lang];
  const duration = program.duration[lang];
  const degree = program.degree[lang];

  return (
    <div className={styles.programDetailsPage}>
      <div className={styles.container}>
        <Link to="/programs" className={styles.backLink}>
          {t("programs.backToList")}
        </Link>

        <div className={styles.programHeader}>
          <img
            src={program.image}
            alt={name}
            className={styles.programImage}
            onError={(e) => {
              e.target.src = "/images/placeholder.jpg";
            }}
          />
          <div className={styles.programInfo}>
            <h1>{name}</h1>
            <p>{description}</p>

            <div className={styles.programMeta}>
              <span>
                {t("programs.degreeLabel")}: {degree}
              </span>
              <span>
                {t("programs.duration")}: {duration}
              </span>
              {department && (
                <span>
                  {t("programs.departmentLabel")}:{" "}
                  <Link to={`/departments/${department.id}`}>
                    {department.name[lang]}
                  </Link>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramDetails;
