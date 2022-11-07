import { Post } from 'contentlayer/generated';

export const sortBlogPostsAscByDate = (postFirst: Post, postSecond: Post) =>
  new Date(postSecond.date).getTime() - new Date(postFirst.date).getTime();
