import { Seo } from 'components/seo/seo';
import { Button } from 'ui/buttons/Button';
import { Column } from 'ui/container/column';
import { ResponsiveContainer } from 'ui/container/responsiveContainer';
import { TextCenter } from 'ui/content/textCenter';
import { UnstyledInternalLink } from 'ui/content/unstyledLink';
import { MarginLarge } from 'ui/margins/marginLarge';
import { MarginMedium } from 'ui/margins/marginMedium';

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
