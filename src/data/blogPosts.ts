import { allPosts } from 'contentlayer/generated';
import { sortBlogPostsAscByDate } from 'utils/sortBlogPostsByDate';

export const getAllBlogPosts = () => {
  const posts = allPosts;
  return posts.sort(sortBlogPostsAscByDate);
};
