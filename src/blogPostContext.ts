import { PostMetaData } from './types/FrontMatter';
import * as React from 'react';

interface BlogPostContextValue {
  allBlogPosts: PostMetaData[];
}

export const BlogPostContext = React.createContext<BlogPostContextValue>({ allBlogPosts: [] });

BlogPostContext.displayName = 'BlogPostContext';
