import React from 'react';
import { TitleStyledUniversalWrapper } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <div title={title}>
      <TitleStyledUniversalWrapper>
        {title && <h2>{title.toUpperCase()}</h2>}
      </TitleStyledUniversalWrapper>
      {children}
    </div>
  );
}
