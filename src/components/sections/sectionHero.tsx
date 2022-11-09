import { WavingHand } from 'components/wavingHand';
import { Column } from 'ui/container/column';
import { FunText } from 'ui/content/funText';
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
              Daniel här! På den här sajten <FunText>(lekplatsen)</FunText> testar jag nya grejer, delar med mig av
              diverse kodprojekt samt skriver högt och lågt om utveckling i allmänt.
            </Header>
          </SubTitleWrapper>
        </TextCenter>
        <MarginMedium />
      </Column>
    </section>
  );
};

SectionHero.displayName = 'SectionHero';
