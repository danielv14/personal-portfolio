# Personal Portfolio

This is the latest iteration of my personal portfolio. It is statically generated with the Next.js framework and uses other tools and libraries listed below.

## 🛠 This site is built using

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [MDX](https://github.com/mdx-js/mdx)
- [Stitches](https://stitches.dev/)
- [Framer Motion](https://www.framer.com/motion/)

Site is deployed through [Vercel](https://vercel.com)

## 📚 Folder overview

- `src/components/*` - All react components.
- `src/context/*` - All react context providers.
- `src/data/*` - Various static data sources.
- `src/hooks/*` - Custom react hooks.
- `src/layout/*` - Layout templates for MDX content.
- `src/pages/blogg/*` - Static blog posts written in [MDX](https://github.com/mdx-js/mdx).
- `src/pages/*` - All static pages built of react components and static content.
- `src/theme/*` - Contains site-wide theming, global styling and stitches configuration.
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

Theming of the site is done with the help of [Stitches](https://stitches.dev/), which is a CSS-in-JS library. In the configuration file `src/theme/theme.config.ts` spacing scales, font families, colors, media queries and more are defined. For more info about how stitches utilizes theming and CSS-in-JS, read and walk through the stitches [documentation](https://stitches.dev/docs/installation).

The `theme` folder also include global css rules and configuration for a css reset based on the work of [Eric A. Meyer](https://meyerweb.com/eric/tools/css/reset/).

### Dark theme

A dark theme is configured, with alterations of colors from the main theme. This dark theme is toggled on or off with the help of custom hook, `useDarkMode`. This hook exposes the current theme and a callback function which toggles the classname which represents the dark theme.

If the user is using system wide dark mode, the dark theme will automatically be turned on, with the help of a `(prefers-color-scheme: dark)` media query check.

The dark mode hook will also store the user preference of theme to localStorage to set the theme for next visit.

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
