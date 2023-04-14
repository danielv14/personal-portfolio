import { PostListItem } from 'components/postListItem/postListItem';
import { Seo } from 'components/seo/seo';
import { getAllBlogPosts } from 'data/blogPosts';
import { GetStaticProps } from 'next';
import { styled } from 'theme';
import { Post } from 'types/Post';
import { Column } from 'ui/container/column';
import { ResponsiveContainer } from 'ui/container/responsiveContainer';
import { Text } from 'ui/content/Text';
import { UnstyledInternalLink } from 'ui/content/unstyledLink';
import { MarginLarge } from 'ui/margins/marginLarge';
import { MarginSmall } from 'ui/margins/marginSmall';

const ArticlesWrapper = styled('div', {
  '@medium': {
    margin: '0 -15px',
  },
});

export const getStaticProps: GetStaticProps = () => {
  const posts = getAllBlogPosts();
  return {
    props: {
      posts: posts.map(({ title, summary, dateFormatted, url }) => ({ title, summary, date: dateFormatted, url })),
    },
  };
};

const BlogIndex = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      <Seo title="Blogg" />
      <ResponsiveContainer>
        <Column>
          <MarginLarge />
          <h1>Alla inlägg</h1>
          <Text muted as="h3">
            Då och då skriver jag ned några tankar, dokumenterar upptäckter eller skriver om lite allt möjligt.
          </Text>
          <MarginLarge />
          <ArticlesWrapper>
            {posts.map((blogPost) => (
              <UnstyledInternalLink key={blogPost.title} href={blogPost.url}>
                <div>
                  <PostListItem {...blogPost} />
                  <MarginSmall />
                </div>
              </UnstyledInternalLink>
            ))}
          </ArticlesWrapper>
        </Column>
      </ResponsiveContainer>
    </>
  );
};

export default BlogIndex;
