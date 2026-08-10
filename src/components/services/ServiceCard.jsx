import React from 'react';

export default function ServiceCard({ service, lang = 'ar' }) {
  if (!service) return null;

  const title = typeof service.title === 'object' ? service.title[lang] : service.title;
  const description = typeof service.description === 'object' ? service.description[lang] : service.description;

  return (
    <div style={cardStyle}>
      {/* حاوية الصورة بدلاً من الايموجي */}
      <div style={iconWrapperStyle}>
        <img 
          src={service.image || 'https://via.placeholder.com/60'} 
          alt={title} 
          style={imageStyle} 
        />
      </div>

      <h3 style={titleStyle}>{title}</h3>
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
}

// التنسيقات
const cardStyle = {
  backgroundColor: '#ffffff',
  borderRadius: '16px',
  padding: '24px',
  border: '1px solid #e2e8f0',
  boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
};

const iconWrapperStyle = {
  width: '56px',
  height: '56px',
  borderRadius: '12px',
  backgroundColor: '#f1f5f9',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '16px',
  padding: '10px',
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'contain',
};

const titleStyle = {
  margin: '0 0 8px 0',
  color: '#0f172a',
  fontSize: '1.2rem',
  fontWeight: '700',
};

const descriptionStyle = {
  margin: 0,
  color: '#64748b',
  fontSize: '0.9rem',
  lineHeight: '1.6',
};