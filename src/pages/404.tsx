import { Seo } from '../components/seo/seo';
import { Button } from '../components/ui/buttons/Button';
import { Column } from '../components/ui/container/column';
import { ResponsiveContainer } from '../components/ui/container/responsiveContainer';
import { TextCenter } from '../components/ui/content/textCenter';
import { UnstyledInternalLink } from '../components/ui/content/unstyledLink';
import { MarginLarge } from '../components/ui/margins/marginLarge';
import { MarginMedium } from '../components/ui/margins/marginMedium';

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
              <Button>Tillbaka till startsidan</Button>
            </UnstyledInternalLink>
          </TextCenter>
          <MarginLarge />
        </Column>
      </ResponsiveContainer>
    </>
  );
};

export default page404;
