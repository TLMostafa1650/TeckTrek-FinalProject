import React, { useState } from 'react';
import Faculty from './pages/Faculty';
import FacultyDetails from './pages/FacultyDetails';
import Services from './pages/Services';

export default function App() {
  const [lang, setLang] = useState('ar');
  const [activeTab, setActiveTab] = useState('faculty');
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleSelectFaculty = (doctor) => {
    setSelectedDoctor(doctor);
    setActiveTab('details');
  };

  return (
    <div style={{ fontFamily: 'cairo', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      {/* Navbar بسيط للتنقل بين الصفحات واللغات */}
      <nav style={{ padding: '16px 24px', backgroundColor: '#0f172a', color: '#fff', display: 'flex', gap: '12px', alignItems: 'center' }}>
        <button
          onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
          style={{ padding: '6px 12px', cursor: 'pointer', borderRadius: '4px', border: 'none', backgroundColor: '#38bdf8', fontWeight: 'bold' ,fontFamily: 'cairo'}}
        >
          {lang === 'ar' ? 'English' : 'عربي'}
        </button>

        <span style={{ color: '#475569' }}>|</span>

        <button
          onClick={() => setActiveTab('faculty')}
          style={{ padding: '6px 12px', cursor: 'pointer', backgroundColor: activeTab === 'faculty' ? '#334155' : 'transparent', color: '#fff', border: '1px solid #475569', borderRadius: '4px' ,fontFamily: 'cairo'}}
        >
          {lang === 'ar' ? 'أعضاء هيئة التدريس' : 'Faculty'}
        </button>

        <button
          onClick={() => setActiveTab('services')}
          style={{ padding: '6px 12px', cursor: 'pointer', backgroundColor: activeTab === 'services' ? '#334155' : 'transparent', color: '#fff', border: '1px solid #475569', borderRadius: '4px',fontFamily: 'cairo' }}
        >
          {lang === 'ar' ? 'الخدمات' : 'Services'}
        </button>
      </nav>

      {/* الشاشات */}
      <div dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        {activeTab === 'faculty' && (
          <Faculty onSelectFaculty={handleSelectFaculty} lang={lang} />
        )}

        {activeTab === 'details' && (
          <FacultyDetails
            selectedDoctor={selectedDoctor}
            onBack={() => setActiveTab('faculty')}
            lang={lang}
          />
        )}

        {activeTab === 'services' && (
          <Services lang={lang} />
        )}
      </div>
    </div>
  );
}