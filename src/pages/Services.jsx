import React from 'react';
import ServiceCard from '../components/services/ServiceCard';
import { servicesData } from '../data/services';

export default function Services({ lang = 'ar' }) {
  const isAr = lang === 'ar';

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '20px', color: '#0f172a' }}>
        {isAr ? 'خدمات الكلية' : 'Faculty Services'}
      </h2>
      
      <div style={gridStyle}>
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} lang={lang} />
        ))}
      </div>
    </div>
  );
}

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
  gap: '24px'
};