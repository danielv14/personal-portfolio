import React from 'react';
import { Seo } from '../components/seo/Seo';
import { ResponsiveContainer } from '../components/ui/container/ResponsiveContainer';
import { MarginLarge } from '../components/ui/margins/MarginLarge';
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
