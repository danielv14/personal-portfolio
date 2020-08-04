import { SectionAbout } from '../components/sections/sectionAbout';
import { SectionArticles } from '../components/sections/sectionArticles';
import { SectionHero } from '../components/sections/sectionHero';
import { SectionProjects } from '../components/sections/sectionProjects';
import { ToolBox } from '../components/toolbox/toolBox';
import { ButtonPrimary } from '../components/ui/buttons/ButtonPrimary';
import { Column } from '../components/ui/container/column';
import { Fill } from '../components/ui/container/fill';
import { ResponsiveContainer } from '../components/ui/container/responsiveContainer';
import { Row } from '../components/ui/container/row';
import { TextCenter } from '../components/ui/content/textCenter';
import { UnstyledInternalLink } from '../components/ui/content/unstyledLink';
import { MarginLarge } from '../components/ui/margins/marginLarge';
import { MarginMedium } from '../components/ui/margins/marginMedium';
import { useContent } from '../context/ContentContext';
import { site } from '../data/site';
import { toolboxCategories } from '../data/toolBoxCategories';
import { useScrollToElement } from '../hooks/useScrollToElement';

const indexPage = () => {
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
          <MarginLarge />
          <SectionAbout />
        </Column>
        <MarginLarge />
        <Column>
          <ToolBox categories={toolboxCategories} />
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
      </ResponsiveContainer>
    </>
  );
};

export default indexPage;
