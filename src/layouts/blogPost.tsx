import React from 'react';
import { FrontMatter } from '../types/FrontMatter';

interface PostProps {
  children: React.ReactChildren;
}

export default (frontMatter: FrontMatter) => {
  return ({ children }: PostProps) => {
    const fronty = frontMatter;
    return (
      <>
        <div>
          <p>{fronty.layout}</p>
        </div>
        {children}
      </>
    );
  };
};
