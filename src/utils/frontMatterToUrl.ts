import { PostFrontMatter } from '../types/FrontMatter';

export const toBlogURL = (frontMatter: PostFrontMatter) => {
  const blogPath = frontMatter.__resourcePath.split('/').pop();
  return `/blogg/${blogPath ? blogPath.replace('.mdx', '') : ''}`;
};
