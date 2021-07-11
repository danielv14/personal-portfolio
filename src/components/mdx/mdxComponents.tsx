import { customImageComponent } from './CustomImageComponent';
import { customLinkComponent } from './CustomLinkComponent';

export const mdxComponents = {
  a: customLinkComponent,
  img: customImageComponent,
};
