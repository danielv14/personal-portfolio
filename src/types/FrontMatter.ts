interface FrontMatterBase {
  title: string;
  __resourcePath: string;
}

export interface PostFrontMatter extends FrontMatterBase {
  layout: string;
  date: string;
  summary: string;
}
