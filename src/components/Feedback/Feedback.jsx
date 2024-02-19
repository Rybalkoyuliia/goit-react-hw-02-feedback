import React from 'react';
import { v4 as uuid } from 'uuid';

export default function FeedbackOption({ options, onLeaveFeedback }) {
  return options.map(option => (
    <div key={uuid()}>
      <button
        type="button"
        onClick={() => {
          onLeaveFeedback(option);
        }}
      >
        {option}
      </button>
    </div>
  ));
}
