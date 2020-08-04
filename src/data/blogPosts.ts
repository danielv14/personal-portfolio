import { frontMatter } from '../pages/blogg/*.mdx';
import { PostFrontMatter, PostMetaData } from '../types/FrontMatter';
import { toPostMetaData } from '../utils/postMappings';
import { sortBlogPostsAscByDate } from '../utils/sortBlogPostsByDate';

export const getAllBlogPosts = (): PostMetaData[] => {
  const blogPosts = (frontMatter as unknown) as PostFrontMatter[];
  const sortedBlogPosts = blogPosts.sort(sortBlogPostsAscByDate);
  return sortedBlogPosts.map(toPostMetaData);
};
