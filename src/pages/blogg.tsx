import Link from 'next/link';
import { PostListItem } from '../components/postListItem';
import { ResponsiveContainer } from '../components/ui/container/responsiveContainer';
import { MarginLarge } from '../components/ui/margins/marginLarge';
import { MarginMedium } from '../components/ui/margins/marginMedium';
import { TextCenter } from '../components/ui/content/textCenter';
import { getAllBlogPosts } from '../utils/getBlogPosts';
import { Seo } from '../components/seo/seo';

const blogIndex = () => {
  const blogPosts = getAllBlogPosts();
  return (
    <>
      <Seo title="Blogg" />
      <ResponsiveContainer>
        <MarginLarge />
        <TextCenter>
          <h1>Alla artiklar</h1>
        </TextCenter>
        <MarginLarge />
        {blogPosts.map((blogPost) => (
          <Link key={blogPost.title} href={blogPost.url}>
            <div>
              <PostListItem {...blogPost}></PostListItem>
              <MarginMedium />
            </div>
          </Link>
        ))}
      </ResponsiveContainer>
    </>
  );
};

export default blogIndex;
