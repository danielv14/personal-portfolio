# Migration Plan: Next.js + Stitches → Astro + Tailwind v4

## Overview

Migrate the personal portfolio from Next.js 12 + Stitches + Contentlayer to Astro + Tailwind CSS v4, while simplifying the site structure.

## Current State Summary

- **Framework**: Next.js 12 with pages router, static export
- **Styling**: Stitches CSS-in-JS with light/dark theme toggle
- **Content**: 21 Swedish MDX blog posts via Contentlayer
- **Features**: Hero, About, Articles, Projects, Toolbox sections
- **Animations**: Framer Motion for interactive elements

## Target State

- **Framework**: Astro (latest) with static output
- **Styling**: Tailwind CSS v4 (CSS-first config)
- **Content**: Same MDX posts via Astro Content Collections
- **Theme**: Dark mode only (no toggle needed)
- **Simplified**: Remove Toolbox, minimize Projects emphasis

---

## Migration Steps

### Phase 1: Project Setup

1. **Initialize new Astro project** in a new branch
   - `npm create astro@latest`
   - Add integrations: `@astrojs/mdx`, `@astrojs/tailwind`

2. **Configure Tailwind v4**
   - Install `@tailwindcss/vite` plugin
   - Install `@tailwindcss/typography` plugin for prose styling
   - Create `src/styles/global.css`:
     ```css
     @import "tailwindcss";
     @plugin "@tailwindcss/typography";

     @theme {
       --color-background: #171923;
       --color-surface: #202438;
       --color-text: #e4e4e4;
       --color-text-muted: #9ca3af;
       --color-primary: #6691FF;
       --font-sans: ui-sans-serif, system-ui, sans-serif;
       --font-mono: ui-monospace, monospace;
     }
     ```

3. **Configure Astro**
   - `astro.config.mjs`: Enable MDX, set output to static
   - Configure Shiki for syntax highlighting (replaces rehype-prism-plus)
   - Set up path aliases matching current structure

### Phase 2: Content Migration

4. **Set up Content Collections** (`src/content/config.ts`)
   - Define `blog` collection with glob loader for `src/content/blog/*.mdx`
   - Schema matching current frontmatter: `title`, `date`, `summary`, `preamble`

5. **Move MDX posts**
   - Copy `src/data/posts/*.mdx` → `src/content/blog/`
   - No frontmatter changes needed (Astro handles dates natively)

6. **Create custom MDX components**
   - `EmojiList.astro` - port from current implementation
   - `FunText.astro` - port styled text component
   - Configure in MDX integration

### Phase 3: Layout & Components

7. **Create Base Layout** (`src/layouts/BaseLayout.astro`)
   - HTML shell with dark theme defaults
   - Include Google Fonts (Quicksand, Fira Code)
   - Global Tailwind styles
   - SEO meta tags

8. **Create Navbar** (`src/components/Navbar.astro`)
   - Simplified: No dark mode toggle needed
   - Keep navigation links: Home, Blog
   - Port GitHub/email icon links

9. **Create Footer** (`src/components/Footer.astro`)
   - Simple footer with year and links

10. **Create UI Components** (Tailwind utility classes)
    - `Container.astro` - max-width wrapper
    - `Card.astro` - blog post cards
    - `Button.astro` - if needed for links

### Phase 4: Pages

11. **Home Page** (`src/pages/index.astro`)
    - **Hero Section**: Keep name + waving hand animation (CSS)
    - **Merged About/Tech**: Brief intro mentioning fullstack TypeScript (React + Node/Express)
    - **Latest Articles**: Show 3-4 recent posts
    - **GitHub Link**: Simple link/button to GitHub profile (replaces Projects section)
    - Remove Toolbox section entirely

12. **Blog Index** (`src/pages/blogg/index.astro`)
    - List all posts sorted by date (newest first)
    - Use `getCollection('blog')` API

13. **Blog Post Page** (`src/pages/blogg/[...slug].astro`)
    - `getStaticPaths()` for all posts
    - Render MDX with custom components
    - Previous/Next post navigation

14. **404 Page** (`src/pages/404.astro`)
    - Simple not found page

### Phase 5: Styling Details

15. **Typography & Code Blocks**
    - Use `prose prose-invert` classes on blog post content wrapper
    - Customize link color with `prose-a:text-primary`
    - Configure Shiki theme (e.g., `github-dark`) for code blocks
    - Typography plugin handles: headings, paragraphs, lists, blockquotes, code

16. **Animations** (CSS-only, no Framer Motion)
    - Waving hand: CSS keyframe animation
    - Hover effects: Tailwind transitions
    - Keep it simple and performant

### Phase 6: Cleanup & Deploy

17. **Remove old dependencies**
    - Delete: next, stitches, contentlayer, framer-motion, rehype-prism-plus, etc.

18. **Update build scripts**
    - `package.json`: Astro build commands
    - Vercel config: Should auto-detect Astro

19. **Test & verify**
    - All blog posts render correctly
    - Syntax highlighting works
    - Responsive design
    - SEO meta tags

---

## File Structure (New)

```
src/
├── content/
│   ├── config.ts          # Content collection schema
│   └── blog/              # MDX posts (moved from data/posts)
├── components/
│   ├── Navbar.astro
│   ├── Footer.astro
│   ├── Card.astro
│   ├── Container.astro
│   └── mdx/
│       ├── EmojiList.astro
│       └── FunText.astro
├── layouts/
│   ├── BaseLayout.astro
│   └── BlogPostLayout.astro
├── pages/
│   ├── index.astro
│   ├── 404.astro
│   └── blogg/
│       ├── index.astro
│       └── [...slug].astro
├── styles/
│   └── global.css         # Tailwind imports + theme
└── data/
    └── site.ts            # Site metadata (simplified)
```

---

## Key Decisions

| Aspect | Decision | Rationale |
|--------|----------|-----------|
| Syntax Highlighting | Shiki (built-in) | No extra deps, great defaults |
| Typography | @tailwindcss/typography | Consistent prose styling with minimal effort |
| Animations | CSS keyframes | Simpler than Framer Motion, smaller bundle |
| Dark Mode | Always dark | User request, simpler CSS |
| Projects Section | GitHub link only | User request, less maintenance |
| Toolbox | Remove entirely | User request, outdated info |
| URL Structure | Keep `/blogg/[slug]` | Preserve existing links/SEO |

---

## User Decisions

- **Animations**: Keep waving hand (CSS keyframe animation)
- **Fonts**: System fonts for now (can explore custom fonts post-migration)
- **Colors**: Single accent color (primary blue #6691FF only)
- **Typography**: Use @tailwindcss/typography with `prose prose-invert` for blog content
