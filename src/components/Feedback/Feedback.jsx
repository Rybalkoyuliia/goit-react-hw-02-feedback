import React from 'react';
import { v4 as uuid } from 'uuid';
import { StyledButton } from './Feedback.styled';

export default function Feedback({ options, onLeaveFeedback, smiles }) {
  return options.map((option, idx) => (
    <div key={uuid()}>
      <StyledButton
        type="button"
        onClick={() => {
          onLeaveFeedback(option);
        }}
      >
        {smiles[idx].smile}
      </StyledButton>
    </div>
  ));
}
