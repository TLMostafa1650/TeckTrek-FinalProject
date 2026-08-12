import React from "react";
import { FaBookOpen, FaHeadset, FaUserGraduate } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import services from "../data/services";
import styles from "./Services.module.css";

const icons = {
  library: FaBookOpen,
  support: FaHeadset,
  advising: FaUserGraduate,
};

export default function Services() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language || "en").startsWith("ar") ? "ar" : "en";

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <SectionTitle
          badge={t("servicesPage.badge")}
          title={t("servicesPage.title")}
          subtitle={t("servicesPage.subtitle")}
          align="center"
        />

        <div className={styles.grid}>
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <article className={styles.card} key={service.id}>
                <div className={styles.icon} aria-hidden="true">
                  <Icon />
                </div>
                <div className={styles.content}>
                  <h2>{service.title[lang]}</h2>
                  <p>{service.description[lang]}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
