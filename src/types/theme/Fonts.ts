export interface FontFamiliy {
  main: string;
  headings: string;
  mono: string;
}

interface FontSize {
  base: string;
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
  small: string;
  smaller: string;
  code: string;
}

export interface Fonts {
  fontFamily: FontFamiliy;
  size: FontSize;
}
