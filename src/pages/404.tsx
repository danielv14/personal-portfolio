import { Seo } from '../components/seo/seo';
import { ResponsiveContainer } from '../components/ui/container/responsiveContainer';
import { MarginLarge } from '../components/ui/margins/marginLarge';
import { TextCenter } from '../components/ui/content/textCenter';
import { ButtonPrimary } from '../components/ui/buttons/ButtonPrimary';
import { MarginMedium } from '../components/ui/margins/marginMedium';
import { Column } from '../components/ui/container/column';
import { UnstyledInternalLink } from '../components/ui/content/unstyledLink';

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
