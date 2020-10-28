import { css } from 'styled-components';
import { setupColorThemeVariantVariables } from './helpers/setupThemeVariables';
import { scaleToRem, scaleToPx } from './helpers/scaleHelpers';
import { WithThemeContext } from '../types/theme/ThemeSettings';

export const cssVariables = css(({ theme }: WithThemeContext) => css`
  :root {
    /* Setup fonts */
    --content-font: ${theme.fonts.fontFamily.main};
    --headings-font: ${theme.fonts.fontFamily.headings};
    --mono-font: ${theme.fonts.fontFamily.mono};

    /* Setup font sizes */
    --font-size-base: ${theme.fonts.sizeBase};
    --font-size-h1: ${scaleToRem(theme.fonts.sizeScale[7])};
    --font-size-h2: ${scaleToRem(theme.fonts.sizeScale[6])};
    --font-size-h3: ${scaleToRem(theme.fonts.sizeScale[5])};
    --font-size-h4: ${scaleToRem(theme.fonts.sizeScale[4])};
    --font-size-h5: ${scaleToRem(theme.fonts.sizeScale[3])};
    --font-size-h6: ${scaleToRem(theme.fonts.sizeScale[2])};
    --font-size-small: ${scaleToRem(theme.fonts.sizeScale[1])};
    --font-size-smaller: ${scaleToRem(theme.fonts.sizeScale[0])};
    --font-size-code: ${scaleToRem(theme.fonts.sizeScale[0])};

    /* Setup colors */
    --primary-color: ${theme.colors.brand.primary};
    --primary-color-darken: ${theme.colors.brand.primaryDarken};
    --primary-color-lighten: ${theme.colors.brand.primaryLighten};

    /* Setup border radiuses */
    --border-radius-small: 4px;
    --border-radius: 6px;

    /* Setup margins */
    --margin-small: ${scaleToPx(theme.spacings[0])};
    --margin-medium: ${scaleToPx(theme.spacings[1])};
    --margin-large: ${scaleToPx(theme.spacings[2])};

    --site-max-width: ${theme.layout.siteWidth};

    /* Setup variables depending on dark/light mode. Default to light mode */
    ${setupColorThemeVariantVariables(theme.colors.themed.light)}
  }
  body.dark-mode {
    ${setupColorThemeVariantVariables(theme.colors.themed.dark)};
  }
`);
