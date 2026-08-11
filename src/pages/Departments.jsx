// src/pages/Departments.jsx
import { useTranslation } from "react-i18next";
import { departments } from "../data/departments";
import DepartmentCard from "../components/DepartmentsCard/DepartmentCard";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import styles from "./Departments.module.css";

function Departments() {
  const { t } = useTranslation();

  return (
    <div className={styles.departmentsPage}>
      <div className={styles.container}>
        <h1 className={styles.visuallyHidden}>{t("departments.pageTitle")}</h1>
        <SectionTitle
          badge={t("departments.badge")}
          title={t("departments.pageTitle")}
          subtitle={t("departments.pageIntro")}
          align="center"
        />

        {departments.length === 0 ? (
          <p className={styles.empty}>{t("departments.empty")}</p>
        ) : (
          <div className={styles.departmentsGrid}>
            {departments.map((department) => (
              <DepartmentCard key={department.id} department={department} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Departments;
