/// <reference types="next" />
/// <reference types="next/types/global" />
// import original module declarations
import 'styled-components';
import { ThemeSettings } from './src/types/theme/ThemeSettings';

declare module '*.mdx' {
  import { ReactNode } from 'react';

  export const frontMatter: {
    title: string;
    layout?: string;
    summary: string;
    date?: string;
    __resourcePath: string;
  };

  const component: ReactNode;
  export default ReactNode;
}

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeSettings { }
}
