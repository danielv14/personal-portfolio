import { ResponsiveContainer } from '../components/ui/container/responsiveContainer';
import { Column } from '../components/ui/container/column';
import { MarginLarge } from '../components/ui/margins/marginLarge';
import { TextCenter } from '../components/ui/textCenter';
import { MarginMedium } from '../components/ui/margins/marginMedium';
import { ButtonPrimary } from '../components/ui/buttons/ButtonPrimary';
import { ThemedParagraph } from '../components/ui/content/themedContent';
import { ToolBox } from '../components/toolBox';

const HeroContent = () => {
  return (
    <>
      <h1>👋 Hallå där!</h1>
      <h5>Daniel här. Webbutvecklare med förkärlek till JavaScript och tv-serier.</h5>
      <MarginLarge></MarginLarge>
      <ButtonPrimary>Portfolio</ButtonPrimary>
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

export default function Home() {
  return (
    <>
      <ResponsiveContainer>
        <Column>
          <MarginLarge></MarginLarge>
          <TextCenter>
            <HeroContent />
          </TextCenter>
        </Column>
        <MarginLarge />
        <Column>
          <MarginLarge></MarginLarge>
          <AboutContent />
        </Column>
        <Column>
          <MarginLarge></MarginLarge>
          <ToolBox />
        </Column>
      </ResponsiveContainer>
    </>
  );
}
