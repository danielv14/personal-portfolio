import { SectionAbout } from 'components/sections/sectionAbout';
import { SectionArticles } from 'components/sections/sectionArticles';
import { SectionHero } from 'components/sections/sectionHero';
import { SectionProjects } from 'components/sections/sectionProjects';
import { ToolBox } from 'components/toolbox/toolBox';
import { getAllBlogPosts } from 'data/blogPosts';
import { projects } from 'data/projects';
import { site } from 'data/site';
import { toolboxCategories } from 'data/toolBoxCategories';
import { GetStaticProps } from 'next';
import { Post } from 'types/Post';
import { Project } from 'types/Project';
import { Button } from 'ui/buttons/Button';
import { Column } from 'ui/container/column';
import { Fill } from 'ui/container/fill';
import { ResponsiveContainer } from 'ui/container/responsiveContainer';
import { Row } from 'ui/container/row';
import { UnstyledInternalLink } from 'ui/content/unstyledLink';
import { MarginLarge } from 'ui/margins/marginLarge';
import { MarginMedium } from 'ui/margins/marginMedium';
import { MarginMega } from 'ui/margins/marginMega';
import { MarginSmall } from 'ui/margins/marginSmall';

export const getStaticProps: GetStaticProps = () => {
  const latestPosts = getAllBlogPosts().slice(0, 4);
  return {
    props: {
      posts: latestPosts,
      projects,
    },
  };
};

const IndexPage = ({ posts, projects }: { posts: Post[]; projects: Project[] }): JSX.Element => {
  return (
    <>
      <ResponsiveContainer>
        <Column>
          <MarginLarge />
          <SectionHero />
        </Column>
        <MarginMega />
        <Column>
          <SectionAbout />
        </Column>
        <MarginMega />
        <Column>
          <MarginLarge />
          <SectionArticles articles={posts} />
          <MarginSmall />
          <Row>
            <Fill />
            <UnstyledInternalLink href="/blogg">
              <Button variant="gradient">Alla inlägg</Button>
            </UnstyledInternalLink>
            <Fill />
          </Row>
        </Column>
        <MarginMega />
        <Column>
          <SectionProjects projects={projects} />
          <MarginLarge />
          <Row>
            <Fill />
            <a href={site.urlGithub}>
              <Button variant="gradient">Mer på GitHub</Button>
            </a>
            <Fill />
          </Row>
        </Column>
        <MarginMega />
        <Column>
          <MarginMedium />
          <ToolBox categories={toolboxCategories} />
        </Column>
        <MarginMega />
      </ResponsiveContainer>
    </>
  );
};

export default IndexPage;
