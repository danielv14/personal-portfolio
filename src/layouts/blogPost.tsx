import React from 'react';
import { PostFrontMatter } from '../types/FrontMatter';
import { ResponsiveContainer } from '../components/ui/container/responsiveContainer';
import { MarginLarge } from '../components/ui/margins/marginLarge';
import { Column } from '../components/ui/container/column';
import { MarginMedium } from '../components/ui/margins/marginMedium';
import { TextMuted } from '../components/ui/content/textMuted';
import { formatDate } from '../utils/formatDate';

interface PostProps {
  children: React.ReactChildren;
}

export default (frontMatter: PostFrontMatter) => {
  return ({ children }: PostProps) => {
    return (
      <ResponsiveContainer>
        <Column>
          <MarginLarge />
          <h2>{frontMatter.title}</h2>
          <TextMuted>{formatDate(frontMatter.date)}</TextMuted>
          <MarginMedium />
          {children}
        </Column>
      </ResponsiveContainer>
    );
  };
};
