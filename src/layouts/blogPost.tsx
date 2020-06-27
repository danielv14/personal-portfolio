import React from 'react';
import { PostFrontMatter } from '../types/FrontMatter';
import { ResponsiveContainer } from '../components/ui/container/responsiveContainer';

interface PostProps {
  children: React.ReactChildren;
}

export default (frontMatter: PostFrontMatter) => {
  return ({ children }: PostProps) => {
    const fronty = frontMatter;
    return (
      <ResponsiveContainer>
        <div>
          <p>{fronty.layout}</p>
        </div>
        {children}
      </ResponsiveContainer>
    );
  };
};
