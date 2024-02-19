import React from 'react';

export default function Section({ title, children }) {
  return (
    <div title={title}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}
