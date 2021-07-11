import styled from 'styled-components';
import { media } from '../../theme/helpers/mediaQueries';
import { PostMetaData } from '../../types/FrontMatter';
import { PostListItem } from '../postListItem/PostListItem';
import { UnstyledInternalLink } from '../ui/content/UnstyledLink';
import { MarginMedium } from '../ui/margins/MarginMedium';
import { Header } from '../ui/typography/Header';

interface SectionArticlesProps {
  articles: PostMetaData[];
}

const ArticlesWrapper = styled.div`
  ${media.medium`
    margin: 0 -15px;
  `}
`;

export const SectionArticles: React.FC<SectionArticlesProps> = ({ articles }) => {
  return (
    <section>
      <h2>Inlägg</h2>
      <Header muted as="h4">
        Ibland skriver jag om något förhoppningsvis intressant!
      </Header>
      <MarginMedium />
      <ArticlesWrapper>
        {articles.map((post) => (
          <UnstyledInternalLink key={post.title} href={post.url}>
            <PostListItem title={post.title} summary={post.summary} />
          </UnstyledInternalLink>
        ))}
      </ArticlesWrapper>
    </section>
  );
};

SectionArticles.displayName = 'SectionArticles';
