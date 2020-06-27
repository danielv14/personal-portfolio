import { ThemedParagraph } from './ui/content/themedContent';
import styled from 'styled-components';
import { MarginSmall } from './ui/margins/marginSmall';
import { ResponsiveGrid } from './ui/container/responsiveGrid';

interface HeaderLineProps {
  width: string;
}

const Line = styled.div<HeaderLineProps>`
  background: var(--primary-color);
  width: ${(props) => props.width};
  border-radius: var(--border-radius);
  height: 6px;
  margin-bottom: 6px;
`;

export const ToolBox = () => {
  return (
    <>
      <h2>Min verktygslåda</h2>
      <ThemedParagraph>
        Jag har tidigare använt allt från PHP och Ruby on Rails för att bygga sajter. Nu för tiden är det mest
        TypeScript för front- och backend som ligger närmst till hands i form av React och Node.
      </ThemedParagraph>
      <MarginSmall></MarginSmall>
      <ResponsiveGrid gutter="10px" itemWidth="250px">
        <div>
          <h3>Nära till hands</h3>
          <Line width="115px" />
          <ThemedParagraph as="ul">
            <li>HTML5</li>
            <li>CSS och Preprocessors</li>
            <li>TypeScript</li>
            <li>React och Next.js</li>
            <li>Node</li>
            <li>Git</li>
            <li>Jest</li>
          </ThemedParagraph>
          <MarginSmall></MarginSmall>
        </div>
        <div>
          <h3>Använder gärna</h3>
          <Line width="115px" />
          <ThemedParagraph as="ul">
            <li>NoSQL med Firebase</li>
            <li>PostgreSQL</li>
            <li>Sketch of Figma</li>
          </ThemedParagraph>
        </div>
      </ResponsiveGrid>
    </>
  );
};
