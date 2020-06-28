import { PostFrontMatter } from '../types/FrontMatter';

export const toBlogURL = (frontMatter: PostFrontMatter) =>
  `/blogg/${frontMatter.__resourcePath?.split('/')?.pop()?.replace('.mdx', '')}`;
