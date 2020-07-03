export interface FrontMatterBase {
  title: string;
  layout?: string;
  __resourcePath: string;
}

export interface PostFrontMatter extends FrontMatterBase {
  date: string;
  summary: string;
}

export interface PostMetaData extends PostFrontMatter {
  url: string;
}
