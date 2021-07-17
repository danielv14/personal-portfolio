import React from 'react';
import { Seo } from '../components/seo/Seo.general';
import { ResponsiveContainer } from '../components/ui-system/container/ResponsiveContainer';
import { MarginLarge } from '../components/ui-system/margins/MarginLarge';
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
