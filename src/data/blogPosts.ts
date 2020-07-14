import { frontMatter } from '../pages/blogg/*.mdx';
import { PostFrontMatter, PostMetaData } from '../types/FrontMatter';
import { sortBlogPostsAscByDate } from '../utils/sortBlogPostsByDate';
import { resourcePathToBlogURL } from '../utils/resourcePathToBlogURL';
import { formatDate } from '../utils/formatDate';

const toPostMetaData = (frontMatter: PostFrontMatter): PostMetaData => ({
  ...frontMatter,
  date: formatDate(frontMatter.date),
  url: resourcePathToBlogURL(frontMatter.__resourcePath),
});

export const getAllBlogPosts = (): PostMetaData[] => {
  const blogPosts = (frontMatter as unknown) as PostFrontMatter[];
  const sortedBlogPosts = blogPosts.sort(sortBlogPostsAscByDate);
  return sortedBlogPosts.map(toPostMetaData);
};
