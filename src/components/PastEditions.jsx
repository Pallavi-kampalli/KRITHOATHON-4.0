import React from 'react';
export default function PastEditions() {
  return (
    <div className="past-editions-page" style={{ 
      paddingTop: '150px', 
      minHeight: '100vh', 
      background: '#000', 
      color: '#fff', 
      textAlign: 'center',
      paddingInline: '20px'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Past Editions</h1>
      <p style={{ color: '#888', maxWidth: '600px', margin: '0 auto' }}>
        Relive the best moments from Krithoathon 1.0, 2.0, and 3.0. 
        Gallery coming soon!
      </p>
      
      {/* Temporary Grid Placeholder */}
      <div style={{ 
        marginTop: '50px', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '20px' 
      }}>
        {[1, 2, 3].map((num) => (
          <div key={num} style={{ 
            height: '200px', 
            background: '#111', 
            border: '1px solid #222', 
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#444'
          }}>
            Edition {num}.0 Photo
          </div>
        ))}
      </div>
    </div>
  );
}