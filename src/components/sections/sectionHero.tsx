import { WavingHand } from 'components/wavingHand';
import { Column } from 'ui/container/column';
import { FunText } from 'ui/content/funText';
import { Text } from 'ui/content/Text';
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
              <Text inlineBlock gradient as="h1">
                Hallå där!
              </Text>
            </TitleWrapper>
          </div>
          <SubTitleWrapper>
            <Text muted as="h4">
              Daniel här! På den här sajten <FunText>(lekplatsen)</FunText> testar jag nya grejer, delar med mig av
              diverse kodprojekt samt skriver högt och lågt om utveckling i allmänt.
            </Text>
          </SubTitleWrapper>
        </TextCenter>
        <MarginMedium />
      </Column>
    </section>
  );
};

SectionHero.displayName = 'SectionHero';
