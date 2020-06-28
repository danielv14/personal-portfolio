import React from 'react';
import { PostFrontMatter } from '../types/FrontMatter';
import { ResponsiveContainer } from '../components/ui/container/responsiveContainer';
import { MarginLarge } from '../components/ui/margins/marginLarge';

interface PostProps {
  children: React.ReactChildren;
}

export default (_frontMatter: PostFrontMatter) => {
  return ({ children }: PostProps) => {
    return (
      <ResponsiveContainer>
        <MarginLarge />
        {children}
      </ResponsiveContainer>
    );
  };
};
