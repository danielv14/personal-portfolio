declare module '*.mdx' {
  import { ReactNode } from 'react';

  export const frontMatter: {
    title: string;
    layout: string;
    __resourcePath: string;
  };

  const component: ReactNode;
  export default ReactNode;
}
