# Personal Portfolio

Personal portfolio and blog built with Astro and Tailwind CSS v4.

## Tech Stack

- **Framework**: Astro 5 (static output)
- **Styling**: Tailwind CSS v4 with `@tailwindcss/typography`
- **Content**: MDX via Astro Content Collections
- **Components**: Astro components + React for MDX components

## Project Structure

```
src/
├── components/          # Astro components
│   ├── Navbar.astro
│   ├── Footer.astro
│   ├── PostCard.astro
│   └── mdx/             # React components for MDX
│       ├── FunText.tsx
│       ├── EmojiList.tsx
│       ├── Card.tsx
│       └── ResponsiveGrid.tsx
├── content/
│   ├── config.ts        # Content collection schema
│   └── blog/            # MDX blog posts
├── data/
│   └── site.ts          # Site metadata (author, github, email)
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

- Dark mode only (no light/dark toggle)
- Theme colors defined in `src/styles/global.css` via `@theme` block
- Primary color: `#6691FF` (blue)
- Background: `#171923`, Surface: `#202438`
- System fonts (no custom fonts loaded)

## Content

- Blog posts are MDX files in `src/content/blog/`
- Frontmatter: `title`, `date`, `summary`, `preamble` (optional)
- Custom MDX components: `FunText`, `EmojiList`, `Card`, `ResponsiveGrid`
- Syntax highlighting via Shiki (github-dark theme)

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Deployment

Deployed on Vercel (auto-detects Astro).
