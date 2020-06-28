import React from 'react';
import { PostFrontMatter } from '../types/FrontMatter';
import { ResponsiveContainer } from '../components/ui/container/responsiveContainer';
import { MarginLarge } from '../components/ui/margins/marginLarge';
import { Column } from '../components/ui/container/column';
import { MarginMedium } from '../components/ui/margins/marginMedium';

interface PostProps {
  children: React.ReactChildren;
}

export default (frontMatter: PostFrontMatter) => {
  return ({ children }: PostProps) => {
    return (
      <ResponsiveContainer>
        <Column>
          <MarginLarge />
          <h1>{frontMatter.title}</h1>
          <MarginMedium />
          {children}
        </Column>
      </ResponsiveContainer>
    );
  };
};
