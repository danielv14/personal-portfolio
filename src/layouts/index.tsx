import React from 'react';
import { FrontMatterBase } from '../types/FrontMatter';
import { ResponsiveContainer } from '../components/ui/container/responsiveContainer';
import { MarginLarge } from '../components/ui/margins/marginLarge';

interface DefaultProps {
  children: React.ReactChildren;
}

export default (_frontMatter: FrontMatterBase) => {
  return ({ children }: DefaultProps) => {
    return (
      <ResponsiveContainer>
        <MarginLarge />
        {children}
      </ResponsiveContainer>
    );
  };
};
