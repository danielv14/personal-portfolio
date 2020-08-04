import { PostMetaData } from '../types/FrontMatter';

export const sortBlogPostsAscByDate = (postFirst: PostMetaData, postSecond: PostMetaData) =>
  new Date(postSecond.date).getTime() - new Date(postFirst.date).getTime();
