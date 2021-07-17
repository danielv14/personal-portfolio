import styled from 'styled-components';
import { site } from '../../../data/site';
import { Column } from '../../ui-system/container/Column';
import { Fill } from '../../ui-system/container/Fill';
import { ResponsiveContainer } from '../../ui-system/container/ResponsiveContainer';
import { Row } from '../../ui-system/container/Row';
import { IconGitHub } from '../../ui-system/icons/IconGitHub';
import { IconMail } from '../../ui-system/icons/IconMail';
import { MarginMedium } from '../../ui-system/margins/MarginMedium';
import { MarginSmall } from '../../ui-system/margins/MarginSmall';

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
