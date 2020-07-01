import { PostListItem } from '../components/postListItem';
import { Seo } from '../components/seo/seo';
import { ResponsiveContainer } from '../components/ui/container/responsiveContainer';
import { TextCenter } from '../components/ui/content/textCenter';
import { UnstyledInternalLink } from '../components/ui/content/unstyledLink';
import { MarginLarge } from '../components/ui/margins/marginLarge';
import { MarginMedium } from '../components/ui/margins/marginMedium';
import { getAllBlogPosts } from '../utils/getBlogPosts';

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
          <UnstyledInternalLink key={blogPost.title} href={blogPost.url}>
            <div>
              <PostListItem {...blogPost}></PostListItem>
              <MarginMedium />
            </div>
          </UnstyledInternalLink>
        ))}
      </ResponsiveContainer>
    </>
  );
};

export default blogIndex;
