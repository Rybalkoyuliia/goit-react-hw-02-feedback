import React from 'react';
import { MessageStyledWrapper } from './Notification.styled';

export default function Notification({ message }) {
  return (
    <MessageStyledWrapper>{message && <p>{message}</p>}</MessageStyledWrapper>
  );
}
