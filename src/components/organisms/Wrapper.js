import React from 'react';
import { Header } from '../atoms/Header';

export const Wrapper = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
