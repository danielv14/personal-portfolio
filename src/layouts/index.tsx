import React from 'react';
import { FrontMatterBase } from '../types/FrontMatter';
import { ResponsiveContainer } from '../components/ui/container/responsiveContainer';
import { MarginLarge } from '../components/ui/margins/marginLarge';
import { Seo } from '../components/seo/seo';
import { title } from 'process';

interface DefaultProps {
  children: React.ReactChildren;
}

export default (_frontMatter: FrontMatterBase) => {
  // eslint-disable-next-line react/display-name
  return ({ children }: DefaultProps) => {
    return (
      <>
        <Seo title={title} />
        <ResponsiveContainer>
          <MarginLarge />
          {children}
        </ResponsiveContainer>
      </>
    );
  };
};
