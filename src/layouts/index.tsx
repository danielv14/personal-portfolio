import React from 'react';
import { FrontMatterBase } from '../types/FrontMatter';
import { ResponsiveContainer } from '../components/ui/container/responsiveContainer';
import { MarginLarge } from '../components/ui/margins/marginLarge';
import { Seo } from '../components/seo/seo';

interface DefaultProps {
  children: React.ReactChildren;
}

const layoutDefault = (frontMatter: FrontMatterBase) => {
  // eslint-disable-next-line react/display-name
  return ({ children }: DefaultProps) => {
    return (
      <>
        <Seo title={frontMatter.title} />
        <ResponsiveContainer>
          <MarginLarge />
          {children}
        </ResponsiveContainer>
      </>
    );
  };
};

export default layoutDefault;
