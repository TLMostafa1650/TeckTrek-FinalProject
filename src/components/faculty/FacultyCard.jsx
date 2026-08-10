import React from 'react';

export default function FacultyCard({ faculty, onClick, lang = 'ar' }) {
  if (!faculty) return null;

  const isAr = lang === 'ar';
  
  const name = typeof faculty.name === 'object' ? faculty.name?.[lang] : faculty.name || '';
  const title = typeof faculty.title === 'object' ? faculty.title?.[lang] : faculty.title || '';
  const dept = typeof faculty.departmentName === 'object' ? faculty.departmentName?.[lang] : faculty.departmentName || '';

  const handleClick = (e) => {
    e.stopPropagation();
    if (onClick) onClick(faculty);
  };

  return (
    <div style={cardStyle} onClick={handleClick}>
      <div style={avatarWrapperStyle}>
        <img src={faculty.image || 'https://via.placeholder.com/150'} alt={name} style={avatarStyle} />
      </div>
      
      <div style={contentStyle}>
        {dept && <span style={badgeStyle}>{dept}</span>}
        <h3 style={nameStyle}>{name}</h3>
        <p style={titleStyle}>{title}</p>
        
        <div style={footerStyle}>
          {faculty.email && <span style={emailStyle}> {faculty.email}</span>}
          <button style={btnStyle} onClick={handleClick}>
            {isAr ? 'الملف الأكاديمي ' : 'View Profile →'}
          </button>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  backgroundColor: '#ffffff',
  borderRadius: '16px',
  padding: '20px',
  border: '1px solid #e2e8f0',
  boxShadow: '0 4px 12px -2px rgba(0, 0, 0, 0.03)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  cursor: 'pointer',
};

const avatarWrapperStyle = {
  width: '90px',
  height: '90px',
  borderRadius: '50%',
  overflow: 'hidden',
  marginBottom: '14px',
  border: '3px solid #e0e7ff'
};

const avatarStyle = { width: '100%', height: '100%', objectFit: 'cover' };
const contentStyle = { width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' };
const badgeStyle = { backgroundColor: '#e0e7ff', color: '#3730a3', fontSize: '0.75rem', fontWeight: '700', padding: '3px 10px', borderRadius: '12px', marginBottom: '8px' };
const nameStyle = { margin: '0 0 4px 0', fontSize: '1.15rem', fontWeight: '700', color: '#0f172a' };
const titleStyle = { margin: '0 0 16px 0', fontSize: '0.85rem', color: '#64748b', fontWeight: '500' };
const footerStyle = { width: '100%', paddingTop: '12px', borderTop: '1px solid #f1f5f9', display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' };
const emailStyle = { fontSize: '0.8rem', color: '#475569', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%', whiteSpace: 'nowrap' };
const btnStyle = { backgroundColor: '#f1f5f9', color: '#4f46e5', border: 'none', padding: '6px 14px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: '600', cursor: 'pointer', marginTop: '4px',fontFamily: 'cairo' };