# Personal Portfolio

This is the latest iteration of my personal portfolio. It was previously built with static site generator Jekyll - but is now built using Next.js

## This site is built using

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [MDX](https://github.com/mdx-js/mdx)
- [Styled Components](https://styled-components.com/)

Site is deployed through [Vercel](https://vercel.com)

## Folder overview

- `src/components/*` - All react components.
- `src/data/*` - Various static data sources.
- `src/hooks/*` - Custom react hooks.
- `src/layout/*` - Layout templates for **MDX content**.
- `src/pages/*` - All other static pages.
- `src/pages/blogg/*` - Static blog posts written in [MDX](https://github.com/mdx-js/mdx).
- `src/theme/*` - Contains all the JavaScript part of CSS-in-JS for global styles.
- `src/types/*` - Contains sharable types.
- `src/utils/*` - Contains various utility functionality.
- `public/` - Contains public content for site.
- `public/img/posts/*` - Contains all images used in MDX blog posts.

## Running Locally

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
