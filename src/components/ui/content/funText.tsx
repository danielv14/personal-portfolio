import React from 'react';
import { Text } from './Text';

export const FunText: React.FC = ({ children }) => (
  <Text gradient bold inline as="span">
    {children}
  </Text>
);
