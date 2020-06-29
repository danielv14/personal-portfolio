interface FrontMatterBase {
  title: string;
  __resourcePath: string;
}

export interface PostFrontMatter extends FrontMatterBase {
  layout: string;
  date: string;
  summary: string;
}

export interface PostMetaData extends PostFrontMatter {
  url: string;
}
