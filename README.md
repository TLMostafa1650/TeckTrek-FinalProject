# Faculty of Computers and Data Science — Website

A bilingual (Arabic / English) website for the Faculty of Computers and Data Science,
built with React.js. The site presents the faculty's departments, academic programs,
news, announcements, events, faculty members, and student services.

The whole interface works in both Arabic (RTL) and English (LTR) using **i18next /
react-i18next**, and the layout is responsive from 360px phones up to 1920px desktops.

---

## Project Overview

The goal was to build a website that looks and behaves like a real university faculty
site, not a demo. Every page is a React component, all content comes from organized data
files inside `src/data/`, and every piece of visible text goes through the translation
files so the site can switch language without duplicating any page.

---

## Features

- **13 pages** with React Router, including detail pages and a custom 404 page.
- **Full Arabic / English support** with a language switcher in the navbar.
- **RTL / LTR** direction switching, applied automatically to the whole page.
- **Language is remembered** — the choice is saved in `localStorage` and restored on reload.
- **Search** for news, announcements, events, and faculty members.
- **Filtering** by category (news, events) and by department (faculty).
- **Contact form** with validation for name, email, phone, and message, plus a success message.
- **Loading, empty, and error states** on the list pages, all translated.
- **Responsive design** — desktop, laptop, tablet, and mobile, with a mobile drawer menu.
- **Accessibility** — semantic HTML, form labels, image alt text, translated `aria-label`s,
  visible focus outlines, and a `prefers-reduced-motion` fallback for the loading spinner.

---

## Technologies

| Technology | Why it is used |
|---|---|
| React 19 | Components, props, state, hooks |
| Vite 6 | Development server and production build |
| React Router 7 | Page navigation and dynamic routes |
| i18next + react-i18next | Arabic / English translation management |
| CSS Modules | Component-scoped styling |
| React Icons | Icon library |
| Tailwind CSS | A few layout utilities in the main layout |

---

## Installation

You need **Node.js 18 or newer**.

```bash
# 1. clone the repository
git clone https://github.com/TLMostafa1650/TeckTrek-FinalProject.git
cd TeckTrek-FinalProject

# 2. install the dependencies
npm install

# 3. start the development server
npm run dev
```

Then open **http://localhost:3000** in the browser.

## Build

```bash
npm run build      # creates the production build inside dist/
npm run preview    # serves the production build locally to check it
```

---

## Project Structure

```
src/
├── assets/images/      images used by the pages
├── components/         reusable components (Navbar, Footer, Hero, cards, Loading...)
├── pages/              one folder or file per page
├── layouts/            MainLayout: Navbar + page content + Footer
├── data/               news.js, departments.js, programs.js, faculty.js, events.js,
│                       services.js, announcements.js
├── hooks/              useLang.js, usePageData.js
├── routes/             AppRoutes.jsx — all the routes
├── locales/
│   ├── ar/translation.json
│   └── en/translation.json
├── i18n.js             i18next setup, direction and language saving
├── App.jsx
├── main.jsx
└── index.css           global styles and CSS variables
```

## Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About the faculty |
| `/departments` | Departments list |
| `/departments/:id` | Department details |
| `/programs` | Programs list |
| `/programs/:id` | Program details |
| `/news` | News list (search + filter) |
| `/news/:id` | News details |
| `/announcements` | Announcements (search) |
| `/faculty` | Faculty members (search + filter) |
| `/faculty/:id` | Faculty member details |
| `/services` | Student services |
| `/events` | Events (search + filter) |
| `/contact` | Contact form |
| anything else | 404 Not Found page |

---

## i18n Implementation and RTL / LTR Switching

This section explains how the bilingual part of the project works.

### 1. Setup

All the i18next configuration is in **`src/i18n.js`**. It loads the two translation
files and reads the saved language from `localStorage`:

```js
const savedLanguage = localStorage.getItem('app_language') || 'ar';

i18n.use(initReactI18next).init({
  resources: {
    ar: { translation: translationAR },
    en: { translation: translationEN },
  },
  lng: savedLanguage,
  fallbackLng: 'ar',
  interpolation: { escapeValue: false },
});
```

Arabic is the default language, so `index.html` also starts with
`<html lang="ar" dir="rtl">` to avoid any flash of the wrong direction on first load.

### 2. Translation files

The translations live in `src/locales/ar/translation.json` and
`src/locales/en/translation.json`. The keys are grouped by page or section so they are
easy to find, for example:

```json
{
  "navbar":   { "home": "Home", "about": "About" },
  "newsPage": { "title": "Faculty News", "empty": "No news available." }
}
```

Both files have exactly the same keys, so no text can be missing in one language.
Components read them with the `t()` function:

```jsx
const { t } = useTranslation();
return <h1>{t('newsPage.title')}</h1>;
```

No visible text is hard-coded inside a component. This includes headings, buttons,
placeholders, `aria-label`s, image `alt` text, validation messages, and the loading,
empty, and error messages.

### 3. Plural forms

Arabic has six plural forms while English has two, so i18next chooses the right one from
the `count` value. For the faculty result counter we provide both sets:

```json
// English
"showing_one":   "Showing {{count}} faculty member",
"showing_other": "Showing {{count}} faculty members"

// Arabic
"showing_zero": "...", "showing_one": "...", "showing_two": "...",
"showing_few":  "...", "showing_many": "...", "showing_other": "..."
```

This is why the Arabic file has a few more keys than the English one — it is correct, not
a missing translation.

### 4. RTL / LTR switching

The direction is applied in **one place only**, in `src/i18n.js`. A small helper sets the
`dir` and `lang` attributes on `<html>` and saves the language:

```js
const applyDirectionAndLang = (lang) => {
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.dir = dir;
  document.documentElement.lang = lang;
  localStorage.setItem('app_language', lang);
};

applyDirectionAndLang(savedLanguage);
i18n.on('languageChanged', (lng) => applyDirectionAndLang(lng));
```

Because it is attached to the `languageChanged` event, the language switcher in the
navbar only has to call `i18n.changeLanguage(newLang)` and everything else follows.

The CSS reacts to that `dir` attribute. Most of the styling uses **logical properties**
(`margin-inline`, `padding-inline`, `inset-inline-start`) which flip automatically. Where
a real difference was needed, the CSS Module targets the attribute directly:

```css
:global([dir="rtl"]) .mobileMenu { right: 0; }
:global([dir="ltr"]) .mobileMenu { left:  0; }
```

Fonts also follow the language — **Cairo** for Arabic and **Plus Jakarta Sans** for
English, selected in `index.css` with `html[lang="en"]`.

### 5. The `useLang` hook

Some content is stored as a bilingual object in the data files. To read the correct side,
components use a small custom hook, `src/hooks/useLang.js`:

```js
const lang = (i18n.language || 'ar').startsWith('ar') ? 'ar' : 'en';
return { lang, isRtl: lang === 'ar' };
```

`startsWith('ar')` is used instead of `=== 'ar'` so a code like `ar-EG` still counts as
Arabic. It is used like this:

```jsx
const { lang } = useLang();
<h2>{department.name[lang]}</h2>
```

`isRtl` is also used to flip directional icons, for example a "back" arrow points right
in Arabic and left in English.

### 6. Two ways content is translated

The data files use two patterns, depending on the type of content:

1. **Translation keys** — `news.js`, `announcements.js`, `events.js` store keys and the
   page resolves them: `titleKey: 'newsSection.item1Title'` → `t(item.titleKey)`.
2. **Bilingual objects** — `departments.js`, `programs.js`, `faculty.js`, `services.js`
   store both languages together and the page picks one with `useLang()`:
   `name: { ar: 'علوم البيانات', en: 'Data Science' }` → `item.name[lang]`.

Either way the two languages are never created by duplicating a page or a component.

---

## Testing Done

- All 15 routes open correctly in Arabic and in English.
- `dir` and `lang` switch correctly, and the chosen language survives a page reload.
- No Arabic text appears on the English site (and the reverse).
- No console errors.
- No horizontal scrolling at 1920, 1440, 1024, 768, 390, and 360 px.
- The mobile menu opens and closes in both directions.
- Search, filters, and the empty state work on the list pages.
- The contact form shows validation errors and a success message in both languages.
- All 32 internal links point to real routes.

---

## Screenshots

Add the screenshots to a `screenshots/` folder and link them here, for example:

```
![Home page - Arabic](screenshots/home-ar.png)
![Home page - English](screenshots/home-en.png)
![Departments](screenshots/departments.png)
![Contact form validation](screenshots/contact-validation.png)
![Mobile view](screenshots/mobile-360.png)
```

---

## Team

| Task | Responsibility |
|---|---|
| 1 | Home, Navbar, Footer, Hero, Introduction, Statistics, Quick Links |
| 2 | About, Departments, Department Details, Programs, Program Details |
| 3 | News, News Details, Announcements, search and filtering |
| 4 | Faculty, Faculty Details, Services, search and filtering |
| 5 | Events, Contact, form validation |
| 6 | Routing, i18n (Arabic / English), RTL / LTR, 404 page, global states, integration |
