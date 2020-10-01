import { customImageComponent } from './customImageComponent';
import { customLinkComponent } from './customLinkComponent';

export const mdxComponents = {
  a: customLinkComponent,
  img: customImageComponent,
};
