// src/pages/DepartmentDetails.jsx
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useLang from "../hooks/useLang";
import { getDepartmentById } from "../data/departments";
import { getProgramsByDepartment } from "../data/programs";
import ProgramCard from "../components/program card/ProgramCard";
import styles from "./DepartmentDetails.module.css";

function DepartmentDetails() {
  const { id } = useParams();
  const { t } = useTranslation();
  const { lang } = useLang();
  const department = getDepartmentById(id);

  if (!department) {
    return (
      <div className={styles.notFound}>
        <h2>{t("departments.notFound")}</h2>
        <Link to="/departments" className={styles.backLink}>
          {t("departments.backToList")}
        </Link>
      </div>
    );
  }

  const relatedPrograms = getProgramsByDepartment(department.id);
  const name = department.name[lang];
  const description = department.description[lang];

  return (
    <div className={styles.departmentDetailsPage}>
      <div className={styles.container}>
        <Link to="/departments" className={styles.backLink}>
          {t("departments.backToList")}
        </Link>

        <div className={styles.departmentHeader}>
          <img
            src={department.image}
            alt={name}
            className={styles.departmentImage}
            onError={(e) => {
              e.target.src = "/images/placeholder.jpg";
            }}
          />
          <div className={styles.departmentInfo}>
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
        </div>

        {relatedPrograms.length > 0 && (
          <>
            <h2 className={styles.sectionTitle}>
              {t("departments.relatedPrograms")}
            </h2>
            <div className={styles.grid}>
              {relatedPrograms.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default DepartmentDetails;
