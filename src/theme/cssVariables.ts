import { css } from 'styled-components';
import { setupColorThemeVariantVariables } from './helpers/setupThemeVariables';
import { scaleToRem, scaleToPx } from './helpers/scaleHelpers';
import { ThemeSettings, WithThemeContext } from '../types/theme/ThemeSettings';

export const getTheme = (props: any): ThemeSettings => props.theme;

export const cssVariables = css(({ theme: { fonts, colors, spacings, layout } }: WithThemeContext) => css`
  :root {
    /* Setup fonts */
    --content-font: ${fonts.fontFamily.main};
    --headings-font: ${fonts.fontFamily.headings};
    --mono-font: ${fonts.fontFamily.mono};

    /* Setup font sizes */
    --font-size-base: ${fonts.sizeBase};
    --font-size-h1: ${scaleToRem(fonts.sizeScale[7])};
    --font-size-h2: ${scaleToRem(fonts.sizeScale[6])};
    --font-size-h3: ${scaleToRem(fonts.sizeScale[5])};
    --font-size-h4: ${scaleToRem(fonts.sizeScale[4])};
    --font-size-h5: ${scaleToRem(fonts.sizeScale[3])};
    --font-size-h6: ${scaleToRem(fonts.sizeScale[2])};
    --font-size-small: ${scaleToRem(fonts.sizeScale[1])};
    --font-size-smaller: ${scaleToRem(fonts.sizeScale[0])};
    --font-size-code: ${scaleToRem(fonts.sizeScale[0])};

    /* Setup colors */
    --primary-color: ${colors.brand.primary};
    --primary-color-darken: ${colors.brand.primaryDarken};
    --primary-color-lighten: ${colors.brand.primaryLighten};

    /* Setup border radiuses */
    --border-radius-small: 4px;
    --border-radius: 6px;

    /* Setup margins */
    --margin-small: ${scaleToPx(spacings[0])};
    --margin-medium: ${scaleToPx(spacings[1])};
    --margin-large: ${scaleToPx(spacings[2])};

    --site-max-width: ${layout.siteWidth};

    /* Setup variables depending on dark/light mode. Default to light mode */
    ${setupColorThemeVariantVariables(colors.themed.light)}
  }
  body.dark-mode {
    ${setupColorThemeVariantVariables(colors.themed.dark)};
  }
`);
