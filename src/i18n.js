import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationAR from './locales/ar/translation.json';
import translationEN from './locales/en/translation.json';
import translationARTask2 from './locales/ar/translation task2.json';
import translationENTask2 from './locales/en/translation task2.json';

const resources = {
  ar: {
    translation: {
      ...translationAR,
      ...translationARTask2,
    },
  },
  en: {
    translation: {
      ...translationEN,
      ...translationENTask2,
    },
  },
};

const savedLanguage = localStorage.getItem('app_language') || 'ar';

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  fallbackLng: 'ar',
  interpolation: {
    escapeValue: false,
  },
});

const applyDirectionAndLang = (lang) => {
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.dir = dir;
  document.documentElement.lang = lang;
  localStorage.setItem('app_language', lang);
};

// Apply on initial load
applyDirectionAndLang(savedLanguage);

// Listen to language changes
i18n.on('languageChanged', (lng) => {
  applyDirectionAndLang(lng);
});

export default i18n;
