// src/pages/About.jsx
import { useTranslation } from "react-i18next";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import styles from "./About.module.css";

function About() {
  const { t } = useTranslation();

  const stats = [
    { key: "students", value: "6500+" },
    { key: "faculty", value: "180+" },
    { key: "departments", value: "5" },
    { key: "graduationRate", value: "94%" },
  ];

  const values = ["excellence", "innovation", "integrity", "collaboration"];

  return (
    <div className={styles.aboutPage}>
      <div className={styles.container}>
        <h1 className={styles.visuallyHidden}>{t("about.title")}</h1>
        <SectionTitle
          title={t("about.title")}
          subtitle={t("about.intro")}
          align="center"
        />

        <section className={styles.aboutSection}>
          <h2>{t("about.visionTitle")}</h2>
          <p>{t("about.visionText")}</p>
        </section>

        <section className={styles.aboutSection}>
          <h2>{t("about.missionTitle")}</h2>
          <p>{t("about.missionText")}</p>
        </section>

        <section className={styles.aboutSection}>
          <h2>{t("about.statsTitle")}</h2>
          <p>
            {stats
              .map((stat) => `${stat.value} ${t(`about.stats.${stat.key}`)}`)
              .join(" · ")}
          </p>
        </section>

        <section className={styles.aboutSection}>
          <h2>{t("about.valuesTitle")}</h2>
          {values.map((value) => (
            <p key={value}>
              <strong>{t(`about.values.${value}.title`)}:</strong>{" "}
              {t(`about.values.${value}.text`)}
            </p>
          ))}
        </section>

        <section className={styles.aboutSection}>
          <h2>{t("about.historyTitle")}</h2>
          <p>{t("about.historyText")}</p>
        </section>
      </div>
    </div>
  );
}

export default About;
