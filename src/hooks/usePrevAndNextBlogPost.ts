import { PostFrontMatter, PostMetaData } from '../types/FrontMatter';
import { useContent } from '../context/ContentContext';

const hasMatchingResourcePath = (resourcePath: string) => (post: PostMetaData) => post.__resourcePath === resourcePath;

export const usePrevAndNextBlogPost = (currentPost: PostFrontMatter): PostMetaData[] => {
  const { blogPosts } = useContent();
  const currentBlogPostIndex = blogPosts.findIndex(hasMatchingResourcePath(currentPost.__resourcePath));
  const prevPost = blogPosts[currentBlogPostIndex + 1];
  const nextPost = blogPosts[currentBlogPostIndex - 1];
  return [prevPost, nextPost];
};
