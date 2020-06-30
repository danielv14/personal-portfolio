import { frontMatter } from '../pages/blogg/*.mdx';
import { PostFrontMatter, PostMetaData } from '../types/FrontMatter';
import { sortBlogPostsAscByDate } from './sortBlogPostsByDate';
import { toBlogURL } from './frontMatterToUrl';
import { formatDate } from './formatDate';

const blogPosts = (frontMatter as unknown) as PostFrontMatter[];

const toPostMetaData = (frontMatter: PostFrontMatter): PostMetaData => ({
  ...frontMatter,
  date: formatDate(frontMatter.date),
  url: toBlogURL(frontMatter.__resourcePath),
});

export const getAllBlogPosts = (): PostMetaData[] => {
  const sortedBlogPosts = blogPosts.sort(sortBlogPostsAscByDate);
  return sortedBlogPosts.map(toPostMetaData);
};

export const getLatestBlogPosts = (num: number): PostMetaData[] => {
  return blogPosts.sort(sortBlogPostsAscByDate).slice(0, num).map(toPostMetaData);
};
