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
  backgroundColorNavBar: 'hsl(230deg 21% 11% / 75%)',
  textColor: '#bec0c9',
  textMutedColor: '#87919e',
  headingColor: '#e4e4e4',
  boxShadowMain: 'none',
  boxShadowButton: 'none',
  boxShadowButtonHover: 'none',
};

const lightTheme: ColorTheme = {
  backgroundColor: '#FFF',
  backgroundColorSecondary: '#FFF',
  backgroundColorHighlight: colorPrimaryLighten,
  backgroundColorNavBar: 'hsl(0deg 0% 100% / 75%)',
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
