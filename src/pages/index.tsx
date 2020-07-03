import { CardProject } from '../components/cards/cardProject';
import { ToolBox } from '../components/toolBox';
import { ButtonPrimary } from '../components/ui/buttons/ButtonPrimary';
import { Column } from '../components/ui/container/column';
import { Fill } from '../components/ui/container/fill';
import { ResponsiveContainer } from '../components/ui/container/responsiveContainer';
import { ResponsiveGrid } from '../components/ui/container/responsiveGrid';
import { Row } from '../components/ui/container/row';
import { MarginLarge } from '../components/ui/margins/marginLarge';
import { MarginMedium } from '../components/ui/margins/marginMedium';
import { TextCenter } from '../components/ui/content/textCenter';
import { projects } from '../data/projects';
import { site } from '../data/site';
import { PostMetaData } from '../types/FrontMatter';
import { PostListItem } from '../components/postListItem';
import { getLatestBlogPosts } from '../utils/getBlogPosts';
import { theme } from '../theme/theme';
import { HeadingMuted } from '../components/ui/content/headingMuted';
import { UnstyledInternalLink } from '../components/ui/content/unstyledLink';
import { useScrollToElement } from '../hooks/useScrollToElement';
import { TextMuted } from '../components/ui/content/textMuted';

export default function Home() {
  const latestPosts = getLatestBlogPosts(4);
  const [ProjectRef, scrollToProjectElement] = useScrollToElement();
  return (
    <>
      <ResponsiveContainer>
        <Column>
          <MarginLarge />
          <HeroContent />
          <TextCenter>
            <ButtonPrimary onClick={scrollToProjectElement}>Portfolio</ButtonPrimary>
          </TextCenter>
        </Column>
        <MarginLarge />
        <Column>
          <MarginLarge />
          <AboutContent />
        </Column>
        <MarginLarge />
        <Column>
          <ToolBox />
        </Column>
        <MarginLarge />
        <Column ref={ProjectRef}>
          <ProjectsContent />
          <MarginLarge />
          <Row>
            <Fill />
            <a href={site.urlGithub}>
              <ButtonPrimary>Mer på GitHub</ButtonPrimary>
            </a>
            <Fill />
          </Row>
        </Column>
        <MarginLarge />
        <Column>
          <MarginLarge />
          <ArticlesContent articles={latestPosts} />
          <MarginMedium />
          <Row>
            <Fill />
            <UnstyledInternalLink href="/blogg">
              <ButtonPrimary>Alla artiklar</ButtonPrimary>
            </UnstyledInternalLink>
            <Fill />
          </Row>
        </Column>
      </ResponsiveContainer>
    </>
  );
}

const HeroContent = () => {
  return (
    <section>
      <Column>
        <TextCenter>
          <h1>👋 Hallå där!</h1>
          <HeadingMuted as="h5">
            Daniel här. Webbutvecklare med förkärlek till JavaScript, schysst design och tv-serier.
          </HeadingMuted>
          <HeadingMuted style={{ marginTop: '0px' }} as="h5">
            På den här sajten delar jag med mig av diverse kodprojekt och skriver några rader ibland.
          </HeadingMuted>
        </TextCenter>
        <MarginMedium></MarginMedium>
      </Column>
    </section>
  );
};

const AboutContent = () => {
  return (
    <section>
      <h2>Kort om mig</h2>
      <p>
        Jag är för närvarande hos VK Media och knackar kod, både inom front- och backend. Jag har sedan tidigare arbetat
        mer fokuserat inom frontend och med webbdesign, men trivs just nu att arbeta lite brett.
      </p>
      <p>
        I bagaget har jag en <strong>kandidatexamen i Informatik</strong> och har <strong>sedan 2017</strong> jobbat med
        utveckling.
      </p>
      <MarginMedium></MarginMedium>
    </section>
  );
};

const ProjectsContent = () => {
  return (
    <section>
      <h2>Projekt</h2>
      <TextMuted>Gratis hosting används för en del projekt, vilket kan leda till en längre initial laddtid</TextMuted>
      <ResponsiveGrid itemWidth="250px" gutter={theme.margins.large}>
        {projects.map(({ title, icon, tags, ...rest }) => (
          <CardProject key={title} title={`${icon} ${title}`} {...rest} />
        ))}
      </ResponsiveGrid>
    </section>
  );
};

const ArticlesContent: React.FC<{ articles: PostMetaData[] }> = ({ articles }) => {
  return (
    <section>
      <TextCenter>
        <h2>Ibland skriver jag om något förhoppningsvis intressant</h2>
      </TextCenter>
      <MarginMedium />
      {articles.map((post) => (
        <UnstyledInternalLink key={post.title} href={post.url}>
          <PostListItem title={post.title} summary={post.summary} />
        </UnstyledInternalLink>
      ))}
    </section>
  );
};
