export interface FontFamiliy {
  main: string;
  headings: string;
  mono: string;
}

export type FontScale = number[]

export interface Fonts {
  fontFamily: FontFamiliy;
  sizeScale: FontScale;
  sizeBase: string;
  sizeBaseDesktop: string;
}
