import { PostFrontMatter, PostMetaData } from '../types/FrontMatter';
import { formatDate } from './formatDate';
import { resourcePathToBlogURL } from './resourcePathToBlogURL';

export const toPostMetaData = (frontMatter: PostFrontMatter): PostMetaData => ({
  ...frontMatter,
  date: formatDate(frontMatter.date, 'yyyy-MM-dd'),
  url: resourcePathToBlogURL(frontMatter.__resourcePath),
});
