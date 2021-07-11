import styled from 'styled-components';
import { PostListItem } from '../components/postListItem/PostListItem';
import { Seo } from '../components/seo/Seo';
import { Column } from '../components/ui-system/container/Column';
import { ResponsiveContainer } from '../components/ui-system/container/ResponsiveContainer';
import { UnstyledInternalLink } from '../components/ui-system/content/UnstyledLink';
import { MarginLarge } from '../components/ui-system/margins/MarginLarge';
import { MarginSmall } from '../components/ui-system/margins/MarginSmall';
import { Header } from '../components/ui-system/typography/Header';
import { useContent } from '../context/ContentContext';
import { media } from '../theme/helpers/mediaQueries';

const ArticlesWrapper = styled.div`
  ${media.medium`
    margin: 0 -15px;
  `}
`;

const BlogIndex = () => {
  const { blogPosts } = useContent();
  return (
    <>
      <Seo title="Blogg" />
      <ResponsiveContainer>
        <Column>
          <MarginLarge />
          <h1>Alla inlägg</h1>
          <Header muted as="h5">
            Då och då skriver jag ned några tankar, dokumenterar upptäckter eller skriver om lite allt möjligt.
          </Header>
          <MarginLarge />
          <ArticlesWrapper>
            {blogPosts.map((blogPost) => (
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
