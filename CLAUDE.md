# Personal Portfolio

Personal portfolio and blog built with Astro and Tailwind CSS v4.

## Tech Stack

- **Framework**: Astro 5 (static output)
- **Styling**: Tailwind CSS v4 with `@tailwindcss/typography`
- **Content**: MDX via Astro Content Collections
- **Syntax Highlighting**: Expressive Code with line numbers plugin

## Project Structure

```
src/
├── components/          # Astro components
│   ├── Navbar.astro
│   ├── Footer.astro
│   ├── PostCard.astro
│   └── mdx/             # Astro components for MDX
│       ├── FunText.astro
│       ├── EmojiList.astro
│       ├── EmojiListItem.astro
│       ├── Card.astro
│       └── ResponsiveGrid.astro
├── content/
│   └── blog/            # MDX blog posts
├── content.config.ts    # Content collection schema
├── layouts/
│   ├── BaseLayout.astro
│   └── BlogPostLayout.astro
├── pages/
│   ├── index.astro      # Homepage
│   ├── 404.astro
│   └── blogg/
│       ├── index.astro  # Blog listing
│       └── [...slug].astro  # Individual posts
└── styles/
    └── global.css       # Tailwind config + custom theme
```

## Styling

Theme variables defined in `src/styles/global.css` via `@theme` block:

- Dark mode only (no toggle)
- `--color-background`: #0a0a0a
- `--color-surface`: #161616
- `--color-border`: #222222
- `--color-primary`: #6691ff (blue)
- `--radius-lg`: 0.5rem
- Font: Noto Sans Mono Variable

Code blocks and PostCards share the same surface/border styling via CSS variables.

## Content

- Blog posts are MDX files in `src/content/blog/`
- Frontmatter: `title`, `date`, `summary`, `preamble` (optional), `updatedAt` (optional)
- Custom MDX components: `FunText`, `EmojiList`, `EmojiListItem`, `Card`, `ResponsiveGrid`
- Syntax highlighting: Expressive Code (github-dark theme) with `showLineNumbers` and line highlighting (`{1,3-5}`)
- **When modifying existing MDX articles, always update the frontmatter with today's date as `updatedAt`**

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Deployment

Deployed on Vercel (auto-detects Astro).
