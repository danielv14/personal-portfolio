import { WavingHand } from 'components/wavingHand';
import { Column } from 'ui/container/column';
import { Header } from 'ui/content/header';
import { TextCenter } from 'ui/content/textCenter';
import { MarginMedium } from 'ui/margins/marginMedium';
import { SubTitleWrapper, TitleWrapper } from './sectionHero.styles';

export const SectionHero: React.FC = () => {
  return (
    <section>
      <Column>
        <TextCenter>
          <div>
            <TitleWrapper>
              <WavingHand />
              <Header inlineBlock gradient as="h1">
                Hallå där!
              </Header>
            </TitleWrapper>
          </div>
          <SubTitleWrapper>
            <Header muted as="h4">
              Daniel här! Webbutvecklare med förkärlek till JavaScript, schysst design och tv-serier. På den här sajten
              delar jag med mig av diverse kodprojekt och skriver några rader ibland.
            </Header>
          </SubTitleWrapper>
        </TextCenter>
        <MarginMedium />
      </Column>
    </section>
  );
};

SectionHero.displayName = 'SectionHero';
