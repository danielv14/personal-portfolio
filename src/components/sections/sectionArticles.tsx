import styled from 'styled-components';
import { media } from '../../theme/helpers/mediaQueries';
import { PostMetaData } from '../../types/FrontMatter';
import { PostItem } from '../postItem/PostItem';
import { UnstyledInternalLink } from '../ui-system/content/UnstyledLink';
import { MarginMedium } from '../ui-system/margins/MarginMedium';
import { Header } from '../ui-system/typography/Header';

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
            <PostItem title={post.title} summary={post.summary} />
          </UnstyledInternalLink>
        ))}
      </ArticlesWrapper>
    </section>
  );
};

SectionArticles.displayName = 'SectionArticles';
