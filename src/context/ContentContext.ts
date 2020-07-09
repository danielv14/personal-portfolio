import { PostMetaData } from '../types/FrontMatter';
import * as React from 'react';
import { Project } from '../types/Project';

interface ContentContextValue {
  blogPosts: PostMetaData[];
  projects: Project[];
}

export const ContentContext = React.createContext<ContentContextValue>({ blogPosts: [], projects: [] });

export const useContent = () => React.useContext(ContentContext);

ContentContext.displayName = 'ContentContext';
