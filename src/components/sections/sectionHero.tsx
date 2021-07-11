import { Column } from '../ui-system/container/Column';
import { MarginMedium } from '../ui-system/margins/MarginMedium';
import { GradientText } from '../ui-system/typography/GradientHeader';
import { Header } from '../ui-system/typography/Header';
import { TextCenter } from '../ui-system/typography/TextCenter';
import { WavingHand } from '../WavingHand';
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
