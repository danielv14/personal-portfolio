/// <reference types="next" />
/// <reference types="next/types/global" />

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
