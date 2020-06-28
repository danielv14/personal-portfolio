import { CardProject } from '../components/cardProject';
import { ToolBox } from '../components/toolBox';
import { ButtonPrimary } from '../components/ui/buttons/ButtonPrimary';
import { Column } from '../components/ui/container/column';
import { Fill } from '../components/ui/container/fill';
import { ResponsiveContainer } from '../components/ui/container/responsiveContainer';
import { ResponsiveGrid } from '../components/ui/container/responsiveGrid';
import { Row } from '../components/ui/container/row';
import { ThemedParagraph } from '../components/ui/content/themedContent';
import { MarginLarge } from '../components/ui/margins/marginLarge';
import { MarginMedium } from '../components/ui/margins/marginMedium';
import { MarginSmall } from '../components/ui/margins/marginSmall';
import { TextCenter } from '../components/ui/textCenter';
import { projects } from '../data/projects';
import { site } from '../data/site';

export default function Home() {
  return (
    <>
      <ResponsiveContainer>
        <Column>
          <MarginLarge />
          <TextCenter>
            <HeroContent />
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
        <Column>
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
      </ResponsiveContainer>
    </>
  );
}

const HeroContent = () => {
  return (
    <>
      <Column>
        <h1>👋 Hallå där!</h1>
        <h5>Daniel här. Webbutvecklare med förkärlek till JavaScript och tv-serier.</h5>
        <MarginMedium></MarginMedium>
        <Row>
          <Fill></Fill>
          <ButtonPrimary>Portfolio</ButtonPrimary>
          <Fill></Fill>
        </Row>
      </Column>
    </>
  );
};

const AboutContent = () => {
  return (
    <>
      <h2>Kort om mig</h2>
      <ThemedParagraph>
        Jag är för närvarande hos VK Media och knackar kod, både inom front- och backend. Jag har sedan tidigare arbetat
        mer fokuserat inom frontend och med webbdesign men trivs just nu att arbeta lite brett.
      </ThemedParagraph>
      <MarginMedium></MarginMedium>
    </>
  );
};

const ProjectsContent = () => {
  return (
    <>
      <h2>Projekt</h2>
      <MarginSmall></MarginSmall>
      <ResponsiveGrid itemWidth="350px" gutter="20px">
        {projects.map(({ title, icon, ...rest }) => (
          <CardProject key={title} title={`${icon} ${title}`} {...rest} />
        ))}
      </ResponsiveGrid>
    </>
  );
};
