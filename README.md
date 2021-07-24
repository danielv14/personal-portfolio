# Personal Portfolio

This is the latest iteration of my personal portfolio. It is statically generated with the Next.js framework, and uses other tools and libraries listed below.

## 🛠 This site is built using

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [MDX](https://github.com/mdx-js/mdx)
- [Styled Components](https://styled-components.com/)
- [Framer Motion](https://www.framer.com/motion/)

Site is deployed through [Vercel](https://vercel.com)

## 📚 Folder overview

- `src/components/*` - All react components.
- `src/context/*` - All react context providers and hooks.
- `src/data/*` - Various static data sources.
- `src/hooks/*` - Custom react hooks.
- `src/layout/*` - Layout templates for MDX content.
- `src/pages/blogg/*` - Static blog posts written in [MDX](https://github.com/mdx-js/mdx).
- `src/pages/*` - All static pages built of react components and static content.
- `src/theme/*` - Contains site-wide theming such as colors, typography, margins and config for css variables.
- `src/types/*` - Contains shareable types and interfaces used across site.
- `src/utils/*` - Contains various utility functionality.
- `public/` - Contains public content for site.
- `public/img/posts/*` - Contains all images used in MDX blog posts.
- `_templates/*` - Hygen.io templates for generating files.

## ✍️ Generate blog post boilerplate

Blog posts require certain **frontmatter** such as the name of a layout template and a date. These values can be cumbersome to fill it in by hand all the time.

Because of this blog posts can be generated with [Hygen](http://www.hygen.io/) through the following `npm script`:

```bash
$ yarn article
```

The ☝️ command will prompt you for a _title_ and _summary_ of the article. The summary is optional for the sake of generating boilerplate.

A `{title}.mdx` file will be generated in `src/pages/blogg/` where the title will be used as filename - also as url since it's a file in a Next.js `pages` directory. The `title` will be **slugified and lowercased** before used as filename.

### 🗑 Clearing article cache

When generating new articles it is sometimes necessary to clear some local caches, to get the new article to appear when running the application locally. In those cases you simply run `yarn cache:clear` after generating a new article - before serving the application with `yarn dev`. Your newly generated article should now be available locally.

## 👨‍🎨 Site theming

Many of this sites styling choices, that are of a more general character, comes from a configurable `theme` object defined in `src/theme/theme.ts`.

The idea is to provide customization of the site's general styling though the theme object - and to have a single point of customization that will effect the entire site.

The `theme` object consists of the following customizable "areas":

- **breakpoints**: contains scale of string values representing pixel widths for media query breakpoints. Media queries using the mobile-first approach - `min-width` is used to maintain a mobile-first design.
- **colors**: contains brand colors and a special `themed.light` and `themed.dark` sub-object which represents different themable colors of texts, headings and box shadows that can/should be different whether ligth or dark theme is set.
- **fonts**: contains font families and sizes. The sizing system is `rem` based by the `fonts.sizeBase` pixel value. This means that the entire font size scale can easily be adjusted by simply altering `fonts.sizeBase` value. Base values are available both for mobile and destop screen sizes, which means that the entire typography-scale can be different for smaller or larger screens.
- **layout**: contains global layout styles such as site width.
- **spacings**: contains a pre-defined spacing scale.

### CSS variables and dark/light mode

CSS variables are created from the `theme` object in `src/theme/cssVariables.ts`.

CSS variables that are dependant on light or dark mode are processed through a function in `src/theme/setupThemeVariables.ts`. Either the `theme.colors.themed.light` or `theme.colors.themed.dark` object are provided to the function in `src/theme/cssVariables.ts`.

If a `.dark-mode` css class exist on the body element the css variables that are light/dark mode aware will be overridden with values from `theme.colors.themed.dark`

## 👨‍💻 Running Locally

Install dependencies with Yarn:

```bash
$ yarn
```

Start dev server with:

```bash
$ yarn dev
```

Build application with:

```bash
yarn build
```

Start application in production mode with:

```bash
yarn start
```

Lint application with:

```bash
yarn lint
```

Generate new article with:

```bash
$ yarn article
```

Run hygen code generator with:

```bash
$ yarn generate
```

Clear `.next` folder caches with:

```bash
yarn cache:clear
```
