import React from 'react';
import { Header } from './header';

export const FunText: React.FC = ({ children }) => (
  <Header gradient bold inline as="span">
    {children}
  </Header>
);
