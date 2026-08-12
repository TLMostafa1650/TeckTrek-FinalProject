import React from "react";
import { FaBookOpen, FaHeadset, FaUserGraduate } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import useLang from "../hooks/useLang";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import Loading from "../components/Loading/Loading";
import ErrorState from "../components/ErrorState/ErrorState";
import usePageData from "../hooks/usePageData";
import services from "../data/services";
import styles from "./Services.module.css";

const icons = {
  library: FaBookOpen,
  support: FaHeadset,
  advising: FaUserGraduate,
};

export default function Services() {
  const { t } = useTranslation();
  const { lang } = useLang();
  const { loading, error, retry } = usePageData(services);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <SectionTitle
          badge={t("servicesPage.badge")}
          title={t("servicesPage.title")}
          subtitle={t("servicesPage.subtitle")}
          align="center"
        />

        {loading ? (
          <Loading />
        ) : error ? (
          <ErrorState onRetry={retry} />
        ) : services.length === 0 ? (
          <p className={styles.empty}>{t("servicesPage.empty")}</p>
        ) : (
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
        )}
      </div>
    </div>
  );
}
