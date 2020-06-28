import { PostFrontMatter } from '../types/FrontMatter';

export const sortBlogPostsAscByDate = (postFirst: PostFrontMatter, postSecond: PostFrontMatter) =>
  new Date(postSecond.date).getTime() - new Date(postFirst.date).getTime();
