import { Colors, ColorTheme } from '../../types/theme/Colors';
import color from 'color';

const colorPrimary = '#6691FF';
const colorPrimaryDarken = color(colorPrimary).darken(0.05).hex();
const colorPrimaryLighten = color(colorPrimary).lighten(0.38).hex();
const btnShadowOpaqueRatio = 0.35;

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
  backgroundColorHighlight: colorPrimaryLighten,
  textColor: '#585858',
  textMutedColor: '#BDBDBD',
  headingColor: '#444444',
  boxShadowMain: '0px 4px 10px rgba(0, 0, 0, 0.09)',
  boxShadowButton: `0px 4px 7px ${color(colorPrimary).lighten(0.25).opaquer(btnShadowOpaqueRatio)}`,
  boxShadowButtonHover: `0px 4px 10px ${color(colorPrimary).lighten(0.1).opaquer(btnShadowOpaqueRatio)}`,
};

export const colors: Colors = {
  themed: {
    light: lightTheme,
    dark: darkTheme,
  },
  brand: {
    primary: colorPrimary,
    primaryDarken: colorPrimaryDarken,
    primaryLighten: colorPrimaryLighten,
  },
};
