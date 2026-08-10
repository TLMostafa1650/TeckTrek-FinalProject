import React from 'react';
import { facultyData } from '../data/faculty';

export default function FacultyDetails({ selectedDoctor, onBack, lang = 'ar' }) {
  const isAr = lang === 'ar';

  const doctor = typeof selectedDoctor === 'object' 
    ? selectedDoctor 
    : facultyData.find(d => String(d.id) === String(selectedDoctor)) || facultyData[0];

  if (!doctor) return null;

  const name = typeof doctor.name === 'object' ? doctor.name[lang] : doctor.name;
  const title = typeof doctor.title === 'object' ? doctor.title[lang] : doctor.title;
  const dept = typeof doctor.departmentName === 'object' ? doctor.departmentName[lang] : doctor.departmentName;
  const bio = typeof doctor.bio === 'object' ? doctor.bio[lang] : doctor.bio;
  const officeHours = typeof doctor.officeHours === 'object' ? doctor.officeHours[lang] : doctor.officeHours;

  return (
    <div style={containerStyle}>
      {/* زر العودة */}
      <button onClick={onBack} style={backButtonStyle}>
        {isAr ? ' العودة لقائمة أعضاء هيئة التدريس' : '← Back to Faculty List'}
      </button>

      {/* بطاقة التفاصيل الرئيسية */}
      <div style={mainCardStyle}>
        
        {/* هيدر الصفحة بتدرج ملون */}
        <div style={headerBannerStyle}>
          <div style={avatarContainerStyle}>
            <img 
              src={doctor.image || 'https://via.placeholder.com/150'} 
              alt={name} 
              style={avatarStyle} 
            />
          </div>
        </div>

        {/* معلومات الدكتور الأساسية */}
        <div style={profileInfoStyle}>
          <h1 style={nameStyle}>{name}</h1>
          <p style={titleStyle}>{title}</p>
          {dept && <span style={deptBadgeStyle}>{dept}</span>}
        </div>

        <hr style={dividerStyle} />

        {/* الشبكة الخاصة بالمعلومات السريعة */}
        <div style={infoGridStyle}>
          <div style={infoBoxStyle}>
            <span style={iconStyle}></span>
            <div>
              <div style={labelStyle}>{isAr ? 'البريد الإلكتروني' : 'Email Address'}</div>
              <div style={valueStyle}>{doctor.email || 'N/A'}</div>
            </div>
          </div>

          <div style={infoBoxStyle}>
            <span style={iconStyle}></span>
            <div>
              <div style={labelStyle}>{isAr ? 'الساعات المكتبية' : 'Office Hours'}</div>
              <div style={valueStyle}>{officeHours || 'N/A'}</div>
            </div>
          </div>
        </div>

        {/* السيرة الذاتية والأكاديمية */}
        {bio && (
          <div style={sectionStyle}>
            <h3 style={sectionTitleStyle}>
              <span></span> {isAr ? 'السيرة الذاتية والأكاديمية' : 'Biography'}
            </h3>
            <p style={bioTextStyle}>{bio}</p>
          </div>
        )}

        {/* الأبحاث والمنشورات */}
        {doctor.publications && doctor.publications.length > 0 && (
          <div style={sectionStyle}>
            <h3 style={sectionTitleStyle}>
              <span></span> {isAr ? 'الأبحاث والمنشورات العلمية' : 'Publications & Research'}
            </h3>
            <div style={publicationsListStyle}>
              {doctor.publications.map((pub, idx) => (
                <div key={idx} style={publicationItemStyle}>
                  <span style={bulletStyle}>•</span>
                  <span>{typeof pub === 'object' ? pub[lang] : pub}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

// Styles
const containerStyle = {
  padding: '32px 16px',
  maxWidth: '850px',
  margin: '0 auto',
  
};

const backButtonStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '10px 18px',
  marginBottom: '24px',
  cursor: 'pointer',
  borderRadius: '10px',
  border: '1px solid #e2e8f0',
  backgroundColor: '#ffffff',
  color: '#334155',
  fontWeight: '600',
  fontSize: '0.9rem',
  boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
  transition: 'all 0.2s ease',
  fontFamily: 'cairo',
};

const mainCardStyle = {
  backgroundColor: '#ffffff',
  borderRadius: '24px',
  border: '1px solid #e2e8f0',
  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
  overflow: 'hidden',
};

const headerBannerStyle = {
  height: '140px',
  background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
  position: 'relative',
  marginBottom: '60px',
};

const avatarContainerStyle = {
  position: 'absolute',
  bottom: '-50px',
  left: '50%',
  transform: 'translateX(-50%)',
};

const avatarStyle = {
  width: '120px',
  height: '120px',
  borderRadius: '50%',
  border: '4px solid #ffffff',
  objectFit: 'cover',
  boxShadow: '0 8px 16px rgba(0,0,0,0.12)',
  backgroundColor: '#ffffff',
};

const profileInfoStyle = {
  textAlign: 'center',
  padding: '0 24px',
};

const nameStyle = {
  margin: '0 0 6px 0',
  fontSize: '1.75rem',
  fontWeight: '800',
  color: '#0f172a',
};

const titleStyle = {
  margin: '0 0 12px 0',
  fontSize: '1rem',
  color: '#64748b',
  fontWeight: '500',
};

const deptBadgeStyle = {
  display: 'inline-block',
  backgroundColor: '#eff6ff',
  color: '#2563eb',
  padding: '6px 16px',
  borderRadius: '20px',
  fontSize: '0.85rem',
  fontWeight: '700',
  border: '1px solid #bfdbfe',
};

const dividerStyle = {
  border: 'none',
  borderTop: '1px solid #f1f5f9',
  margin: '28px 0',
};

const infoGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  gap: '16px',
  padding: '0 28px',
  marginBottom: '28px',
};

const infoBoxStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
  padding: '16px',
  backgroundColor: '#f8fafc',
  borderRadius: '16px',
  border: '1px solid #f1f5f9',
};

const iconStyle = {
  fontSize: '1.5rem',
  backgroundColor: '#ffffff',
  padding: '10px',
  borderRadius: '12px',
  boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
};

const labelStyle = {
  fontSize: '0.75rem',
  color: '#94a3b8',
  fontWeight: '600',
  textTransform: 'uppercase',
  marginBottom: '2px',
};

const valueStyle = {
  fontSize: '0.95rem',
  color: '#1e293b',
  fontWeight: '600',
};

const sectionStyle = {
  padding: '0 28px 28px 28px',
};

const sectionTitleStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  margin: '0 0 12px 0',
  fontSize: '1.1rem',
  fontWeight: '700',
  color: '#0f172a',
};

const bioTextStyle = {
  margin: 0,
  color: '#475569',
  fontSize: '0.95rem',
  lineHeight: '1.7',
  backgroundColor: '#f8fafc',
  padding: '16px 20px',
  borderRadius: '14px',
  border: '1px solid #f1f5f9',
};

const publicationsListStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

const publicationItemStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '10px',
  backgroundColor: '#f8fafc',
  padding: '12px 16px',
  borderRadius: '12px',
  fontSize: '0.9rem',
  color: '#334155',
  border: '1px solid #f1f5f9',
};

const bulletStyle = {
  color: '#2563eb',
  fontWeight: 'bold',
  fontSize: '1.2rem',
  lineHeight: '1',
};