import { Column } from '../ui/container/column';
import { Header } from '../ui/content/header';
import { TextCenter } from '../ui/content/textCenter';
import { MarginMedium } from '../ui/margins/marginMedium';
import { WavingHand } from '../wavingHand';
import { Title } from './sectionHero.styles';

export const SectionHero: React.FC = () => {
  return (
    <section>
      <Column>
        <TextCenter>
          <div>
            <Title>
              <WavingHand /> Hallå där!
            </Title>
          </div>
          <Header muted as="h5">
            Daniel här! Webbutvecklare med förkärlek till JavaScript, schysst design och tv-serier.
          </Header>
          <Header muted style={{ marginTop: '0px' }} as="h5">
            På den här sajten delar jag med mig av diverse kodprojekt och skriver några rader ibland.
          </Header>
        </TextCenter>
        <MarginMedium />
      </Column>
    </section>
  );
};

SectionHero.displayName = 'SectionHero';
