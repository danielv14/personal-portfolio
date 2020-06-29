import { frontMatter } from '../pages/blogg/*.mdx';
import { PostFrontMatter } from '../types/FrontMatter';
import { sortBlogPostsAscByDate } from './sortBlogPostsByDate';

const blogPosts = (frontMatter as unknown) as PostFrontMatter[];

export const getAllBlogPosts = () => {
  const sortedBlogPosts = blogPosts.sort(sortBlogPostsAscByDate);
  return sortedBlogPosts;
};

export const getLatestBlogPosts = (num: number) => {
  return blogPosts.sort(sortBlogPostsAscByDate).slice(0, num);
};
