import { MarginMedium } from '../ui/margins/marginMedium';

export const SectionAbout: React.FC = () => {
  return (
    <section>
      <h2>Kort om mig</h2>
      <p>
        Jag är för närvarande hos <strong>VK Media</strong> och knackar kod, både inom front- och backend. Jag har sedan
        tidigare arbetat mer fokuserat inom frontend och med webbdesign, men trivs just nu väldigt bra med att arbeta
        lite bredare.
      </p>
      <p>
        I bagaget har jag en egenkomponerad <strong>kandidatexamen i Informatik</strong> och har{' '}
        <strong>sedan 2017</strong> jobbat med utveckling.
      </p>
      <MarginMedium />
    </section>
  );
};

SectionAbout.displayName = 'SectionAbout';
