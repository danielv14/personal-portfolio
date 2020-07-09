import { PostMetaData } from '../types/FrontMatter';
import * as React from 'react';
import { Project } from '../types/Project';

interface ContentContextValue {
  blogPosts: PostMetaData[];
  projects: Project[];
}

const ContentContext = React.createContext<ContentContextValue>({ blogPosts: [], projects: [] });
ContentContext.displayName = 'ContentContext';

export const useContent = () => React.useContext(ContentContext);

export const ContentProvider: React.FC<ContentContextValue> = ({ children, ...rest }) => {
  const values = { ...rest };
  return <ContentContext.Provider value={values}>{children}</ContentContext.Provider>;
};

ContentProvider.displayName = 'ContentProvider';
