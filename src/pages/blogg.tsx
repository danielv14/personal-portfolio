import { frontMatter as blogPosts } from './blogg/*.mdx';
import { PostFrontMatter } from '../types/FrontMatter';
import { ResponsiveContainer } from '../components/ui/container/responsiveContainer';
import Link from 'next/link';
import { MarginLarge } from '../components/ui/margins/marginLarge';
import { toBlogURL } from '../utils/frontMatterToUrl';
import { PostListItem } from '../components/postListItem';
import { MarginMedium } from '../components/ui/margins/marginMedium';
import { sortBlogPostsAscByDate } from '../utils/sortBlogPostsByDate';
import { TextCenter } from '../components/ui/textCenter';

const blogIndex = () => {
  const blogPostData = (blogPosts as unknown) as PostFrontMatter[];
  const sortedBlogPosts = blogPostData.sort(sortBlogPostsAscByDate);
  return (
    <ResponsiveContainer>
      <MarginLarge />
      <TextCenter>
        <h2>Alla artiklar</h2>
      </TextCenter>
      <MarginLarge />
      {sortedBlogPosts.map((blogPost) => (
        <Link key={blogPost.title} href={toBlogURL(blogPost)}>
          <div>
            <PostListItem {...blogPost}></PostListItem>
            <MarginMedium />
          </div>
        </Link>
      ))}
    </ResponsiveContainer>
  );
};

export default blogIndex;
