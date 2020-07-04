import { Colors, ColorTheme } from '../../types/theme/Colors';

const darkTheme: ColorTheme = {
  backgroundColor: '#171923',
  backgroundColorSecondary: '#202438',
  backgroundColorHighlight: '#202438',
  textColor: '#d0d0d0',
  textMutedColor: '#87919e',
  headingColor: '#FFFFFF',
  boxShadowMain: 'none',
  boxShadowButton: 'none',
  boxShadowButtonHover: 'none',
};

const lightTheme: ColorTheme = {
  backgroundColor: '#FFFFFF',
  backgroundColorSecondary: '#FFFFFF',
  backgroundColorHighlight: '#e9efff',
  textColor: '#585858',
  textMutedColor: '#BDBDBD',
  headingColor: '#585858',
  boxShadowMain: '0px 4px 10px rgba(0, 0, 0, 0.09)',
  boxShadowButton: '0px 4px 7px rgba(102, 145, 255, 0.35)',
  boxShadowButtonHover: '0px 4px 10px rgba(102, 145, 255, 0.35)',
};

export const colors: Colors = {
  themed: {
    light: lightTheme,
    dark: darkTheme,
  },
  brand: {
    primary: '#6691FF',
    primaryDarken: '#5477D3',
    primaryLighten: '#e9efff',
  },
};