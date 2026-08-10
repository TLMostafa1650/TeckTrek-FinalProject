import React from 'react';

export default function FacultyFilter({ searchTerm, setSearchTerm, selectedDept, setSelectedDept, lang = 'ar' }) {
  const isAr = lang === 'ar';

  return (
    <div style={filterContainerStyle}>
      <input
        type="text"
        placeholder={isAr ? 'بحث باسم الدكتور أو المسمى الأكاديمي...' : 'Search by name or title...'}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={inputStyle}
      />

      {/* حاوية القائمة المنسدلة لإضافة سهم نظيف */}
      <div style={selectWrapperStyle}>
        <select
          value={selectedDept}
          onChange={(e) => setSelectedDept(e.target.value)}
          style={selectStyle}
        >
          <option value="all">{isAr ? 'جميع الأقسام' : 'All Departments'}</option>
          <option value="cs">{isAr ? 'علوم الحاسب (CS)' : 'Computer Science (CS)'}</option>
          <option value="is">{isAr ? 'نظم المعلومات (IS)' : 'Information Systems (IS)'}</option>
          <option value="it">{isAr ? 'تكنولوجيا المعلومات (IT)' : 'Information Technology (IT)'}</option>
          <option value="ai">{isAr ? 'الذكاء الاصطناعي (AI)' : 'Artificial Intelligence (AI)'}</option>
          <option value="ds">{isAr ? 'علوم البيانات (DS)' : 'Data Science (DS)'}</option>
        </select>
        <span style={customArrowStyle}>▾</span>
      </div>
    </div>
  );
}

const filterContainerStyle = { display: 'flex', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' ,fontFamily: 'cairo'};
const inputStyle = { flex: 1, minWidth: '240px', padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem', outline: 'none' ,backgroundColor: 'white',fontFamily: 'cairo'};

const selectWrapperStyle = {
  position: 'relative',
  display: 'inline-block',
};

const selectStyle = {
  padding: '12px 36px 12px 16px',
  borderRadius: '8px',
  border: '1px solid #cbd5e1',
  fontSize: '0.95rem',
  backgroundColor: '#ffffff',
  color: '#334155',
  cursor: 'pointer',
  outline: 'none',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  appearance: 'none',
  width: '100%',
  fontFamily: 'cairo'
};

const customArrowStyle = {
  position: 'absolute',
  left: '12px',
  top: '50%',
  transform: 'translateY(-50%)',
  pointerEvents: 'none',
  fontSize: '0.8rem',
  color: '#64748b',
  fontFamily: 'cairo'
};