import { Seo } from '../components/seo/Seo';
import { ButtonPrimary } from '../components/ui/buttons/ButtonPrimary';
import { Column } from '../components/ui/container/Column';
import { ResponsiveContainer } from '../components/ui/container/ResponsiveContainer';
import { UnstyledInternalLink } from '../components/ui/content/UnstyledLink';
import { MarginLarge } from '../components/ui/margins/MarginLarge';
import { MarginMedium } from '../components/ui/margins/MarginMedium';
import { TextCenter } from '../components/ui/typography/TextCenter';

const page404 = () => {
  const title = '404! Sidan kunde inte hittas';
  return (
    <>
      <Seo title={title} />
      <ResponsiveContainer>
        <Column>
          <MarginLarge />
          <TextCenter>
            <h1>{title}</h1>
            <MarginMedium />
            <p>Det verkar som att sidan du försöker besöka inte finns.</p>
            <MarginLarge />
            <UnstyledInternalLink href="/">
              <ButtonPrimary>Tillbaka till startsidan</ButtonPrimary>
            </UnstyledInternalLink>
          </TextCenter>
          <MarginLarge />
        </Column>
      </ResponsiveContainer>
    </>
  );
};

export default page404;
