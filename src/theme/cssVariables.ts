import { css } from 'styled-components';
import { setupColorThemeVariantVariables } from './helpers/setupThemeVariables';
import { scaleFontSizeToRem, scaleSpacingToPx } from './helpers/scaleHelpers';
import { ThemeSettings, WithThemeContext } from '../types/theme/ThemeSettings';

export const getTheme = (props: any): ThemeSettings => props.theme;

export const cssVariables = css(({ theme: { fonts, colors, layout } }: WithThemeContext) => css`
  :root {
    /* Setup fonts */
    --content-font: ${fonts.fontFamily.main};
    --headings-font: ${fonts.fontFamily.headings};
    --mono-font: ${fonts.fontFamily.mono};

    /* Setup font sizes */
    --font-size-base: ${fonts.sizeBase};
    --font-size-h1: ${scaleFontSizeToRem(7)};
    --font-size-h2: ${scaleFontSizeToRem(6)};
    --font-size-h3: ${scaleFontSizeToRem(5)};
    --font-size-h4: ${scaleFontSizeToRem(4)};
    --font-size-h5: ${scaleFontSizeToRem(3)};
    --font-size-h6: ${scaleFontSizeToRem(2)};
    --font-size-small: ${scaleFontSizeToRem(1)};
    --font-size-smaller: ${scaleFontSizeToRem(0)};
    --font-size-code: ${scaleFontSizeToRem(0)};

    /* Setup colors */
    --primary-color: ${colors.brand.primary};
    --primary-color-darken: ${colors.brand.primaryDarken};
    --primary-color-lighten: ${colors.brand.primaryLighten};

    /* Setup border radiuses */
    --border-radius-small: 4px;
    --border-radius: 6px;

    /* Setup margins */
    --margin-small: ${scaleSpacingToPx(0)};
    --margin-medium: ${scaleSpacingToPx(1)};
    --margin-large: ${scaleSpacingToPx(2)};

    --site-max-width: ${layout.siteWidth};

    /* Setup variables depending on dark/light mode. Default to light mode */
    ${setupColorThemeVariantVariables(colors.themed.light)}
  }
  body.dark-mode {
    ${setupColorThemeVariantVariables(colors.themed.dark)};
  }
`);
