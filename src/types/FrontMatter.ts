interface FrontMatterBase {
  title: string;
  summary: string;
  __resourcePath: string;
}

export interface PostFrontMatter extends FrontMatterBase {
  layout: string;
  date: string;
}

export interface ProjectFrontMatter extends FrontMatterBase {
  urlExternal: string;
  urlGithub: string;
  urlImage: string;
  tags: String[];
}
