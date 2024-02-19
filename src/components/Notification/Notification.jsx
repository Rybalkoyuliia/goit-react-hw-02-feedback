import React from 'react';

export default function Notification({ message }) {
  return <div>{message && <p>{message}</p>}</div>;
}
