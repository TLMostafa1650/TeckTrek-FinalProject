import React, { useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaGraduationCap, FaHome, FaTools, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Button from '../components/Button/Button';
import SectionTitle from '../components/SectionTitle/SectionTitle';

export default function PlaceholderPage() {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isRtl = (i18n.language || 'ar') === 'ar';
  const ArrowIcon = isRtl ? FaArrowLeft : FaArrowRight;

  const pageRouteName = location.pathname.substring(1) || 'home';
  const navTitleKey = `navbar.${pageRouteName}`;
  const displayTitle = t(navTitleKey, pageRouteName.toUpperCase());

  return (
    <div className="min-h-[70vh] py-12 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Banner Header */}
        <div className="bg-gradient-to-r from-teal-900 to-teal-800 text-white p-6 sm:p-10 rounded-2xl shadow-xl mb-10 border-b-4 border-amber-500">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/20 text-amber-400 text-3xl mb-4 border border-amber-400/30">
            <FaGraduationCap />
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold mb-3">
            {displayTitle}
          </h1>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            {t('hero.badge')} — {t('navbar.brandSub')}
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white p-5 sm:p-12 rounded-2xl shadow-md border border-slate-200">
          <div className="w-16 h-16 rounded-full bg-teal-50 text-teal-700 mx-auto flex items-center justify-center text-2xl mb-4">
            <FaTools />
          </div>
          <SectionTitle
            title={`${t('placeholders.pageTitle')}: ${displayTitle}`}
            subtitle={t('placeholders.underConstruction')}
          />

          <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-sm max-w-lg mx-auto mb-8 font-medium">
            💡 {isRtl ? 'تم تجهيز مسار الصفحة داخل React Router بنجاح. يمكن للزميل المسؤول إضافة Component المخصص هنا مباشرة.' : 'Page route prepared in React Router. Team members can plug in their custom components directly here.'}
          </div>

          <NavLink to="/">
            <Button variant="primary" size="medium" icon={<FaHome />}>
              {t('placeholders.backHome')}
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
