import styled from 'styled-components';
import { site } from '../../data/site';
import { Column } from '../ui/container/Column';
import { Fill } from '../ui/container/Fill';
import { ResponsiveContainer } from '../ui/container/ResponsiveContainer';
import { Row } from '../ui/container/Row';
import { IconGitHub } from '../ui/icons/IconGitHub';
import { IconMail } from '../ui/icons/IconMail';
import { MarginMedium } from '../ui/margins/MarginMedium';
import { MarginSmall } from '../ui/margins/MarginSmall';

const FooterText = styled.p`
  margin: 0;
  color: var(--text-muted-color);
  font-weight: bold;
`;

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
            <IconMail animation="none" />
          </a>
        </Row>
        <MarginMedium />
      </Column>
    </ResponsiveContainer>
  );
};

Footer.displayName = 'Footer';
