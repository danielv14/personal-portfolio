export enum ColorThemeVariant {
  Dark = 'dark',
  Light = 'light',
}
export interface TheamableColors {
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
  secondary: string;
}

export interface Colors {
  themed: {
    light: TheamableColors;
    dark: TheamableColors;
  };
  brand: ColorBranding;
}
