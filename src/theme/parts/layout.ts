import { Spacing } from '../../types/theme/Spacing';

const margin: { [key in Spacing]: string } = {
  [Spacing.Small]: '5px',
  [Spacing.Medium]: '10px',
  [Spacing.Large]: '20px',
};

export const layout = {
  siteWidth: '900px',
  margin,
};
