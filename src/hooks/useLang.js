import { useTranslation } from 'react-i18next';

/**
 * Custom hook that returns the current language in one consistent shape.
 *
 * We use startsWith('ar') instead of comparing with === 'ar' so that
 * language codes that include a region (like "ar-EG") are still treated
 * as Arabic.
 *
 * lang  -> 'ar' or 'en', used to read bilingual data like item.name[lang]
 * isRtl -> true when the page direction is right-to-left
 */
export default function useLang() {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'ar').startsWith('ar') ? 'ar' : 'en';

  return { lang, isRtl: lang === 'ar' };
}
