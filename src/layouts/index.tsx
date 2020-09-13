import React from 'react';
import { Seo } from '../components/seo/seo';
import { ResponsiveContainer } from '../components/ui/container/responsiveContainer';
import { MarginLarge } from '../components/ui/margins/marginLarge';
import { DefaultLayoutProps } from '../types/Layout';

const layoutDefault = ({ frontMatter, children }: DefaultLayoutProps) => {
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

export default layoutDefault;
