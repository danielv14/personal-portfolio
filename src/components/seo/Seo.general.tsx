import { site } from '../../data/site';
import { NextSeo, NextSeoProps } from 'next-seo';

export const Seo: React.FC<NextSeoProps> = ({ title, ...rest }) => (
  <NextSeo title={`${title} - ${site.author}`} {...rest} />
);

Seo.displayName = 'Seo';
