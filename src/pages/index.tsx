import { SectionAbout } from '../components/sections/SectionAbout';
import { SectionArticles } from '../components/sections/SectionArticles';
import { SectionHero } from '../components/sections/SectionHero';
import { SectionProjects } from '../components/sections/SectionProjects';
import { ToolBox } from '../components/toolbox/ToolBox';
import { ButtonPrimary } from '../components/ui-system/buttons/ButtonPrimary';
import { Column } from '../components/ui-system/container/Column';
import { Fill } from '../components/ui-system/container/Fill';
import { ResponsiveContainer } from '../components/ui-system/container/ResponsiveContainer';
import { Row } from '../components/ui-system/container/Row';
import { UnstyledInternalLink } from '../components/ui-system/content/UnstyledLink';
import { MarginLarge } from '../components/ui-system/margins/MarginLarge';
import { MarginMedium } from '../components/ui-system/margins/MarginMedium';
import { TextCenter } from '../components/ui-system/typography/TextCenter';
import { useContent } from '../context/ContentContext';
import { site } from '../data/site';
import { toolboxCategories } from '../data/toolBoxCategories';
import { useScrollToElement } from '../hooks/useScrollToElement';

const IndexPage = (): JSX.Element => {
  const { blogPosts, projects } = useContent();
  const latestBlogPosts = blogPosts.slice(0, 4);
  const [ProjectRef, scrollToProjectElement] = useScrollToElement({ offset: -60 });
  return (
    <>
      <ResponsiveContainer>
        <Column>
          <MarginLarge />
          <SectionHero />
          <TextCenter>
            <ButtonPrimary onClick={scrollToProjectElement}>Portfolio</ButtonPrimary>
          </TextCenter>
        </Column>
        <MarginLarge />
        <Column>
          <SectionAbout />
        </Column>
        <MarginLarge />
        <Column ref={ProjectRef}>
          <SectionProjects projects={projects} />
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
          <SectionArticles articles={latestBlogPosts} />
          <MarginMedium />
          <Row>
            <Fill />
            <UnstyledInternalLink href="/blogg">
              <ButtonPrimary>Alla inlägg</ButtonPrimary>
            </UnstyledInternalLink>
            <Fill />
          </Row>
        </Column>
        <MarginLarge />
        <Column>
          <MarginMedium />
          <ToolBox categories={toolboxCategories} />
        </Column>
      </ResponsiveContainer>
    </>
  );
};

export default IndexPage;
