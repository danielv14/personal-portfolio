import { ResponsiveContainer } from '../ui/container/responsiveContainer';
import { Row } from '../ui/container/row';
import { MarginMedium } from '../ui/margins/marginMedium';
import { Column } from '../ui/container/column';
import { Fill } from '../ui/container/fill';
import styled from 'styled-components';
import { IconGitHub } from '../ui/icons/iconGitHub';
import { site } from '../../data/site';

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
          <FooterText>© Daniel Vernberg {new Date().getFullYear()}</FooterText>
          <Fill />
          <FooterText>
            <a href={site.urlGithub}>
              <IconGitHub />
            </a>
          </FooterText>
        </Row>
        <MarginMedium />
      </Column>
    </ResponsiveContainer>
  );
};

Footer.displayName = 'Footer';
