import React from 'react';
import { PostFrontMatter } from '../types/FrontMatter';
import { ResponsiveContainer } from '../components/ui/container/responsiveContainer';

interface PostProps {
  children: React.ReactChildren;
}

export default (_frontMatter: PostFrontMatter) => {
  return ({ children }: PostProps) => {
    return <ResponsiveContainer>{children}</ResponsiveContainer>;
  };
};
