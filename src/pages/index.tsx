import { CardProject } from '../components/cardProject';
import { ToolBox } from '../components/toolBox';
import { ButtonPrimary } from '../components/ui/buttons/ButtonPrimary';
import { Column } from '../components/ui/container/column';
import { Fill } from '../components/ui/container/fill';
import { ResponsiveContainer } from '../components/ui/container/responsiveContainer';
import { ResponsiveGrid } from '../components/ui/container/responsiveGrid';
import { Row } from '../components/ui/container/row';
import { MarginLarge } from '../components/ui/margins/marginLarge';
import { MarginMedium } from '../components/ui/margins/marginMedium';
import { MarginSmall } from '../components/ui/margins/marginSmall';
import { TextCenter } from '../components/ui/textCenter';
import { projects } from '../data/projects';
import { site } from '../data/site';
import { PostFrontMatter } from '../types/FrontMatter';
import { PostListItem } from '../components/postListItem';
import Link from 'next/link';
import { toBlogURL } from '../utils/frontMatterToUrl';
import { useRef, RefObject } from 'react';
import { getLatestBlogPosts } from '../utils/getBlogPosts';

export default function Home() {
  const latestPosts = getLatestBlogPosts(4);
  const ProjectRef: RefObject<any> = useRef(null);
  const ScrollToProjects = () => window.scrollTo({ top: ProjectRef.current.offsetTop, behavior: 'smooth' });
  return (
    <>
      <ResponsiveContainer>
        <Column>
          <MarginLarge />
          <TextCenter>
            <HeroContent />
            <ButtonPrimary onClick={ScrollToProjects}>Portfolio</ButtonPrimary>
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
            <Link href="/blogg">
              <ButtonPrimary>Alla artiklar</ButtonPrimary>
            </Link>
            <Fill />
          </Row>
        </Column>
      </ResponsiveContainer>
    </>
  );
}

const HeroContent = () => {
  return (
    <>
      <Column>
        <h1>👋 Hallå där!</h1>
        <h3>Daniel här. Webbutvecklare med förkärlek till JavaScript och tv-serier.</h3>
        <MarginMedium></MarginMedium>
      </Column>
    </>
  );
};

const AboutContent = () => {
  return (
    <>
      <h2>Kort om mig</h2>
      <p>
        Jag är för närvarande hos VK Media och knackar kod, både inom front- och backend. Jag har sedan tidigare arbetat
        mer fokuserat inom frontend och med webbdesign men trivs just nu att arbeta lite brett.
      </p>
      <p>
        I bagaget har jag en <strong>kandidatexamen i Informatik</strong> och har <strong>sedan 2017</strong> jobbat med
        utveckling.
      </p>
      <MarginMedium></MarginMedium>
    </>
  );
};

const ProjectsContent = () => {
  return (
    <>
      <h2>Projekt</h2>
      <MarginSmall></MarginSmall>
      <ResponsiveGrid itemWidth="250px" gutter="20px">
        {projects.map(({ title, icon, tags, ...rest }) => (
          <CardProject key={title} title={`${icon} ${title}`} {...rest} />
        ))}
      </ResponsiveGrid>
    </>
  );
};

const ArticlesContent: React.FC<{ articles: PostFrontMatter[] }> = ({ articles }) => {
  return (
    <>
      <TextCenter>
        <h2>Ibland skriver jag om något förhoppningsvis intressant</h2>
      </TextCenter>
      <MarginMedium />
      {articles.map((post) => (
        <Link key={post.title} href={toBlogURL(post)}>
          <div>
            <PostListItem title={post.title} summary={post.summary} />
          </div>
        </Link>
      ))}
    </>
  );
};
