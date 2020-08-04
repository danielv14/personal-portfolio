import { MarginMedium } from '../ui/margins/marginMedium';

export const SectionAbout: React.FC = () => {
  return (
    <section>
      <h2>Kort om mig</h2>
      <p>
        Jag är för närvarande hos VK Media och knackar kod, både inom front- och backend. Jag har sedan tidigare arbetat
        mer fokuserat inom frontend och med webbdesign, men trivs just nu att arbeta lite brett.
      </p>
      <p>
        I bagaget har jag en <strong>kandidatexamen i Informatik</strong> och har <strong>sedan 2017</strong> jobbat med
        utveckling.
      </p>
      <MarginMedium />
    </section>
  );
};

SectionAbout.displayName = 'SectionAbout';
