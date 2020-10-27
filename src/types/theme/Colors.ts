export enum ColorThemeVariant {
  Dark = 'dark',
  Light = 'light',
}
export interface ColorTheme {
  backgroundColor: string;
  backgroundColorSecondary: string;
  backgroundColorHighlight: string;
  backgroundColorNavBar: string;
  textColor: string;
  textMutedColor: string;
  headingColor: string;
  boxShadowMain: string;
  boxShadowButton: string;
  boxShadowButtonHover: string;
}

interface ColorBranding {
  primary: string;
  primaryDarken: string;
  primaryLighten: string;
}

export interface Colors {
  themed: {
    light: ColorTheme;
    dark: ColorTheme;
  };
  brand: ColorBranding;
}
