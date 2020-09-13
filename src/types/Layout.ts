import { FrontMatterBase, PostFrontMatter } from './FrontMatter';

interface Layout {
  children: React.ReactChildren;
}

export interface DefaultLayoutProps extends Layout {
  frontMatter: FrontMatterBase;
}

export interface PostLayoutProps extends Layout {
  frontMatter: PostFrontMatter;
}
