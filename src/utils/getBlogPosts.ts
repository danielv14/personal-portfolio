import { frontMatter } from '../pages/blogg/*.mdx';
import { PostFrontMatter, PostMetaData } from '../types/FrontMatter';
import { sortBlogPostsAscByDate } from './sortBlogPostsByDate';
import { resourcePathToBlogURL } from './resourcePathToBlogURL';
import { formatDate } from './formatDate';

const toPostMetaData = (frontMatter: PostFrontMatter): PostMetaData => ({
  ...frontMatter,
  date: formatDate(frontMatter.date),
  url: resourcePathToBlogURL(frontMatter.__resourcePath),
});

const hasMatchingResourcePath = (resourcePath: string) => (post: PostMetaData) => post.__resourcePath === resourcePath;

export const getAllBlogPosts = (): PostMetaData[] => {
  const blogPosts = (frontMatter as unknown) as PostFrontMatter[];
  const sortedBlogPosts = blogPosts.sort(sortBlogPostsAscByDate);
  return sortedBlogPosts.map(toPostMetaData);
};

export const getLatestBlogPosts = (numOfPosts: number): PostMetaData[] => {
  return getAllBlogPosts().slice(0, numOfPosts);
};

export const getPrevAndNextPost = (frontMatter: PostFrontMatter): PostMetaData[] => {
  const allPosts = getAllBlogPosts();
  const currentBlogPostIndex = allPosts.findIndex(hasMatchingResourcePath(frontMatter.__resourcePath));
  const prevPost = allPosts[currentBlogPostIndex + 1];
  const nextPost = allPosts[currentBlogPostIndex - 1];
  return [prevPost, nextPost];
};
