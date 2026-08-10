import React, { useState } from 'react';
import FacultyCard from '../components/faculty/FacultyCard';
import FacultyFilter from '../components/faculty/FacultyFilter';
import { facultyData } from '../data/faculty';

export default function Faculty({ onSelectFaculty, lang = 'ar' }) {
  const isAr = lang === 'ar';
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('all');

const filteredFaculty = facultyData.filter((doc) => {
  const name = typeof doc.name === 'object' ? doc.name[lang] : doc.name;
  const title = typeof doc.title === 'object' ? doc.title[lang] : doc.title;

  const matchesSearch =
    name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    title.toLowerCase().includes(searchTerm.toLowerCase());

  const matchesDept =
    selectedDept === 'all' || selectedDept === '' || doc.department === selectedDept;

  return matchesSearch && matchesDept;
});

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      <FacultyFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedDept={selectedDept}
        setSelectedDept={setSelectedDept}
        lang={lang}
      />

      {filteredFaculty.length > 0 ? (
        <div style={gridStyle}>
          {filteredFaculty.map((item) => (
            <FacultyCard
              key={item.id}
              faculty={item}
              onClick={() => onSelectFaculty(item)}
              lang={lang}
            />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '40px', backgroundColor: '#fff', borderRadius: '12px' }}>
          <p>{isAr ? 'لا توجد نتائج مطابقة لبحثك 🔍' : 'No matching results found 🔍'}</p>
        </div>
      )}
    </div>
  );
}

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
  gap: '24px'
};