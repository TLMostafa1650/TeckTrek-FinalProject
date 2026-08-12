// src/pages/FacultyDetails/FacultyDetails.jsx
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaArrowRight, FaEnvelope, FaUserTie } from "react-icons/fa";
import useLang from "../../hooks/useLang";
import faculty from "../../data/faculty";
import styles from "./FacultyDetails.module.css";

function FacultyDetails() {
  const { id } = useParams();
  const { t } = useTranslation();
  const { lang, isRtl } = useLang();

  const member = faculty.find((item) => item.id === id);

  // In RTL the "back" arrow points to the right.
  const BackArrow = isRtl ? FaArrowRight : FaArrowLeft;

  if (!member) {
    return (
      <div className={styles.notFound}>
        <h2>{t("facultyPage.notFound")}</h2>
        <Link to="/faculty" className={styles.backLink}>
          {t("facultyPage.backToFaculty")}
        </Link>
      </div>
    );
  }

  const name = member.name[lang];
  const position = member.position[lang];
  const department = member.department[lang];

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Link to="/faculty" className={styles.backLink}>
          <BackArrow aria-hidden="true" />
          {t("facultyPage.backToFaculty")}
        </Link>

        <article className={styles.profileCard}>
          <header className={styles.header}>
            <div className={styles.avatar} aria-hidden="true">
              {member.initials}
            </div>

            <div className={styles.headerText}>
              <span className={styles.departmentBadge}>{department}</span>
              <h1 className={styles.name}>{name}</h1>
              <p className={styles.position}>
                <FaUserTie aria-hidden="true" />
                {position}
              </p>
            </div>
          </header>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t("facultyPage.aboutTitle")}</h2>
            <p className={styles.aboutText}>
              {t("facultyPage.aboutText", { name, department })}
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t("facultyPage.contact")}</h2>
            <a className={styles.email} href={`mailto:${member.email}`}>
              <FaEnvelope aria-hidden="true" />
              <span dir="ltr">{member.email}</span>
            </a>
          </section>
        </article>
      </div>
    </div>
  );
}

export default FacultyDetails;
