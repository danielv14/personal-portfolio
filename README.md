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
- `src/theme/*` - Contains site-wide theming such as colors, typography, margins and declarations of css variables.
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

Attempt to fix lint errors with:

```bash
yarn lint:fix
```

Generate new article with:

```bash
$ yarn article
```

Run hygen code generator with:

```bash
$ yarn generate
```
