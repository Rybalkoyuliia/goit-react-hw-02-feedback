import React from 'react';
import {
  FeedbackStyledWrapper,
  ItemsStyledWrapper,
  NumberStyledWrapper,
  PositiveStyledWrapper,
} from './Statistics.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <FeedbackStyledWrapper>
      <ItemsStyledWrapper>
        <span>Good:</span>
        <NumberStyledWrapper>{good}</NumberStyledWrapper>
      </ItemsStyledWrapper>
      <ItemsStyledWrapper>
        <span>Neutral:</span>
        <NumberStyledWrapper>{neutral}</NumberStyledWrapper>
      </ItemsStyledWrapper>
      <ItemsStyledWrapper>
        <span>Bad:</span>
        <NumberStyledWrapper>{bad}</NumberStyledWrapper>
      </ItemsStyledWrapper>
      <ItemsStyledWrapper>
        <span>Total:</span>
        <PositiveStyledWrapper>{total}</PositiveStyledWrapper>
      </ItemsStyledWrapper>
      <ItemsStyledWrapper>
        <span>Positive feedback:</span>
        <PositiveStyledWrapper>
          {positivePercentage || '0'}%
        </PositiveStyledWrapper>
      </ItemsStyledWrapper>
    </FeedbackStyledWrapper>
  );
}
