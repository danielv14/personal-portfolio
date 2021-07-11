import { Column } from '../ui/container/column';
import { GradientText } from '../ui/content/gradientHeader';
import { Header } from '../ui/content/header';
import { TextCenter } from '../ui/content/textCenter';
import { MarginMedium } from '../ui/margins/marginMedium';
import { WavingHand } from '../wavingHand';
import { SubTitleWrapper, TitleWrapper } from './sectionHero.styles';

export const SectionHero: React.FC = () => {
  return (
    <section>
      <Column>
        <TextCenter>
          <div>
            <TitleWrapper>
              <WavingHand />
              <GradientText as="h1">Hallå där!</GradientText>
            </TitleWrapper>
          </div>
          <SubTitleWrapper>
            <Header muted as="h4">
              Daniel här! Webbutvecklare med förkärlek till JavaScript, schysst design och tv-serier.
            </Header>
            <Header muted style={{ marginTop: '0px' }} as="h4">
              På den här sajten delar jag med mig av diverse kodprojekt och skriver några rader ibland.
            </Header>
          </SubTitleWrapper>
        </TextCenter>
        <MarginMedium />
      </Column>
    </section>
  );
};

SectionHero.displayName = 'SectionHero';
