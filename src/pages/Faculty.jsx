import React, { useMemo, useState } from "react";
import { FaSearch, FaTimes, FaUserTie, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import faculty from "../data/faculty";
import styles from "./Faculty.module.css";

export default function Faculty() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language || "en").startsWith("ar") ? "ar" : "en";
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("all");
  const [selected, setSelected] = useState(null);

  const departments = useMemo(
    () => [...new Map(faculty.map((member) => [member.department.en, member.department])).values()],
    []
  );

  const filteredFaculty = useMemo(() => {
    const query = search.trim().toLocaleLowerCase();
    return faculty.filter((member) => {
      const matchesDepartment =
        department === "all" || member.department.en === department;
      const searchable = [
        member.name.en,
        member.name.ar,
        member.department.en,
        member.department.ar,
        member.position.en,
        member.position.ar,
        member.email,
      ]
        .join(" ")
        .toLocaleLowerCase();

      return matchesDepartment && (!query || searchable.includes(query));
    });
  }, [search, department]);

  const clearFilters = () => {
    setSearch("");
    setDepartment("all");
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <SectionTitle
          badge={t("facultyPage.badge")}
          title={t("facultyPage.title")}
          subtitle={t("facultyPage.subtitle")}
          align="center"
        />

        <div className={styles.controls}>
          <label className={styles.searchBox}>
            <FaSearch aria-hidden="true" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t("facultyPage.search")}
              aria-label={t("facultyPage.search")}
            />
          </label>

          <label className={styles.selectBox}>
            <span className={styles.visuallyHidden}>{t("facultyPage.department")}</span>
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              aria-label={t("facultyPage.department")}
            >
              <option value="all">{t("facultyPage.allDepartments")}</option>
              {departments.map((item) => (
                <option key={item.en} value={item.en}>
                  {item[lang]}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className={styles.resultBar}>
          <span>
            {t("facultyPage.showing", { count: filteredFaculty.length })}
          </span>
          {(search || department !== "all") && (
            <button type="button" onClick={clearFilters} className={styles.clearButton}>
              <FaTimes aria-hidden="true" />
              {t("facultyPage.clear")}
            </button>
          )}
        </div>

        {filteredFaculty.length > 0 ? (
          <div className={styles.grid}>
            {filteredFaculty.map((member) => (
              <article className={styles.card} key={member.id}>
                <div className={styles.avatar} aria-hidden="true">
                  {member.initials}
                </div>

                <div className={styles.departmentBadge}>
                  {member.department[lang]}
                </div>

                <h2 className={styles.name}>{member.name[lang]}</h2>
                <p className={styles.position}>{member.position[lang]}</p>

                <div className={styles.divider} />

                <a className={styles.email} href={`mailto:${member.email}`}>
                  <FaEnvelope aria-hidden="true" />
                  <span>{member.email}</span>
                </a>

                <button
                  type="button"
                  className={styles.profileButton}
                  onClick={() => setSelected(member)}
                >
                  <FaUserTie aria-hidden="true" />
                  {t("facultyPage.viewProfile")}
                </button>
              </article>
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <FaSearch aria-hidden="true" />
            <h2>{t("facultyPage.emptyTitle")}</h2>
            <p>{t("facultyPage.emptyText")}</p>
            <button type="button" onClick={clearFilters}>
              {t("facultyPage.clear")}
            </button>
          </div>
        )}
      </div>

      {selected && (
        <div
          className={styles.modalBackdrop}
          role="presentation"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setSelected(null);
          }}
        >
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="faculty-profile-title"
          >
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setSelected(null)}
              aria-label={t("facultyPage.close")}
            >
              <FaTimes />
            </button>
            <div className={styles.modalAvatar} aria-hidden="true">{selected.initials}</div>
            <div className={styles.modalBadge}>{selected.department[lang]}</div>
            <h2 id="faculty-profile-title">{selected.name[lang]}</h2>
            <p className={styles.modalPosition}>{selected.position[lang]}</p>
            <a href={`mailto:${selected.email}`} className={styles.modalEmail}>
              <FaEnvelope />
              {selected.email}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
