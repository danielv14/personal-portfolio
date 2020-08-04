import styled from 'styled-components';
import { Column } from '../ui/container/column';
import { HeadingMuted } from '../ui/content/headingMuted';
import { TextCenter } from '../ui/content/textCenter';
import { MarginMedium } from '../ui/margins/marginMedium';
import { WavingHand } from '../ui/wavingHand';

const HeroTitle = styled.h1`
  display: inline-block;
  transform: skewY(-4deg);
`;

export const SectionHero: React.FC = () => {
  return (
    <section>
      <Column>
        <TextCenter>
          <div>
            <HeroTitle>
              <WavingHand /> Hallå där!
            </HeroTitle>
          </div>
          <HeadingMuted as="h5">
            Daniel här! Webbutvecklare med förkärlek till JavaScript, schysst design och tv-serier.
          </HeadingMuted>
          <HeadingMuted style={{ marginTop: '0px' }} as="h5">
            På den här sajten delar jag med mig av diverse kodprojekt och skriver några rader ibland.
          </HeadingMuted>
        </TextCenter>
        <MarginMedium />
      </Column>
    </section>
  );
};

SectionHero.displayName = 'SectionHero';
