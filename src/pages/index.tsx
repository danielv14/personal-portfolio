import { SectionAbout } from '../components/sections/sectionAbout';
import { SectionArticles } from '../components/sections/sectionArticles';
import { SectionHero } from '../components/sections/sectionHero';
import { SectionProjects } from '../components/sections/sectionProjects';
import { ToolBox } from '../components/toolbox/toolBox';
import { Button } from '../components/ui/buttons/Button';
import { Column } from '../components/ui/container/column';
import { Fill } from '../components/ui/container/fill';
import { ResponsiveContainer } from '../components/ui/container/responsiveContainer';
import { Row } from '../components/ui/container/row';
import { UnstyledInternalLink } from '../components/ui/content/unstyledLink';
import { MarginLarge } from '../components/ui/margins/marginLarge';
import { MarginMedium } from '../components/ui/margins/marginMedium';
import { MarginMega } from '../components/ui/margins/marginMega';
import { MarginSmall } from '../components/ui/margins/marginSmall';
import { useContent } from '../context/ContentContext';
import { site } from '../data/site';
import { toolboxCategories } from '../data/toolBoxCategories';

const IndexPage = (): JSX.Element => {
  const { blogPosts, projects } = useContent();
  const latestBlogPosts = blogPosts.slice(0, 4);
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
          <SectionArticles articles={latestBlogPosts} />
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
