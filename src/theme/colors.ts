interface Colors {
  themed: {
    light: ColorTheme;
    dark: ColorTheme;
  };
  primary: string;
  primaryDarken: string;
  primaryLighten: string;
}

export interface ColorTheme {
  backgroundColor: string;
  backgroundColorSecondary: string;
  backgroundColorHighlight: string;
  textColor: string;
  textMutedColor: string;
  headingColor: string;
  boxShadowMain: string;
}

const darkTheme: ColorTheme = {
  backgroundColor: '#171923',
  backgroundColorSecondary: '#202438',
  backgroundColorHighlight: '#202438',
  textColor: '#c7d5e6',
  textMutedColor: '#87919e',
  headingColor: '#FFFFFF',
  boxShadowMain: 'none',
};

const lightTheme: ColorTheme = {
  backgroundColor: '#FFFFFF',
  backgroundColorSecondary: '#FFFFFF',
  backgroundColorHighlight: '#e9efff',
  textColor: '#585858',
  textMutedColor: '#BDBDBD',
  headingColor: '#585858',
  boxShadowMain: '0px 4px 10px rgba(0, 0, 0, 0.09)',
};

export const colors: Colors = {
  themed: {
    light: lightTheme,
    dark: darkTheme,
  },
  primary: '#6691FF',
  primaryDarken: '#5477D3',
  primaryLighten: '#e9efff',
};
