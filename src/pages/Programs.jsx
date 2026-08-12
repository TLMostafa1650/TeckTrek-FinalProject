// src/pages/Programs.jsx
import { useTranslation } from "react-i18next";
import { programs } from "../data/programs";
import ProgramCard from "../components/program card/ProgramCard";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import Loading from "../components/Loading/Loading";
import ErrorState from "../components/ErrorState/ErrorState";
import usePageData from "../hooks/usePageData";
import styles from "./Programs.module.css";

function Programs() {
  const { t } = useTranslation();
  const { loading, error, retry } = usePageData(programs);

  return (
    <div className={styles.programsPage}>
      <div className={styles.container}>
        <h1 className={styles.visuallyHidden}>{t("programs.pageTitle")}</h1>
        <SectionTitle
          badge={t("programs.badge")}
          title={t("programs.pageTitle")}
          subtitle={t("programs.pageIntro")}
          align="center"
        />

        {loading ? (
          <Loading />
        ) : error ? (
          <ErrorState onRetry={retry} />
        ) : programs.length === 0 ? (
          <p className={styles.empty}>{t("programs.empty")}</p>
        ) : (
          <div className={styles.programsGrid}>
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Programs;
