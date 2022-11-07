import { site } from 'data/site';
import { styled } from 'theme';
import { Column } from 'ui/container/column';
import { Fill } from 'ui/container/fill';
import { ResponsiveContainer } from 'ui/container/responsiveContainer';
import { Row } from 'ui/container/row';
import { IconGitHub } from 'ui/icons/iconGitHub';
import { IconMail } from 'ui/icons/iconMail';
import { MarginMedium } from 'ui/margins/marginMedium';
import { MarginSmall } from 'ui/margins/marginSmall';

const FooterText = styled('p', {
  margin: '0',
  color: '$textMutedColor',
  fontWeight: 'bold',
});

export const Footer: React.FC = () => {
  return (
    <ResponsiveContainer>
      <Column>
        <MarginMedium />
        <Row>
          <FooterText>Daniel Vernberg {new Date().getFullYear()}</FooterText>
          <Fill />
          <a href={site.urlGithub}>
            <IconGitHub animation="hover" />
          </a>
          <MarginSmall />
          <a href={`mailto:${site.email}`}>
            <IconMail animation="hover" />
          </a>
        </Row>
        <MarginMedium />
      </Column>
    </ResponsiveContainer>
  );
};

Footer.displayName = 'Footer';
