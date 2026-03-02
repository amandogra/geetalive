# Strip Tailwind CSS and Replace with Handcrafted CSS
## Current State
Vite + React + TS project (Bhagavad Gita web book) using Tailwind CSS v3 with shadcn/ui. Tailwind utility classes are used in 5 custom components, 3 pages, and ~50 shadcn/ui components.
## Key Observation
`index.css` already has substantial handcrafted CSS (variables, typography scale, component classes like `.book-header`, `.prose-book`, `.chapter-title`, etc.). Tailwind is mostly used for layout utilities in JSX.
## Changes
### 1. Remove Tailwind packages & config files
* Uninstall: `tailwindcss`, `tailwindcss-animate`, `@tailwindcss/typography`, `tailwind-merge`, `autoprefixer`, `postcss`, `class-variance-authority`, `clsx`
* Also remove unused shadcn deps: all `@radix-ui/*`, `cmdk`, `embla-carousel-react`, `input-otp`, `lucide-react`, `next-themes`, `react-day-picker`, `react-resizable-panels`, `recharts`, `sonner`, `vaul`, `@hookform/resolvers`, `react-hook-form`, `zod`, `date-fns`, `lovable-tagger`
* Delete: `tailwind.config.ts`, `postcss.config.js`, `components.json`
### 2. Delete shadcn/ui components & unused hooks
* Delete entire `src/components/ui/` directory
* Delete `src/hooks/use-mobile.tsx`, `src/hooks/use-toast.ts`
* Delete `src/App.css` (leftover Vite boilerplate, unused)
### 3. Update `src/index.css`
* Remove `@tailwind base/components/utilities` directives
* Remove `@layer` wrappers (keep the CSS rules inside them)
* Add new semantic CSS classes to replace Tailwind utilities used in JSX (layout, spacing, responsive typography, etc.)
### 4. Update components to use CSS classes instead of Tailwind utilities
Replace `className` strings with semantic CSS classes for:
* `App.tsx` — remove shadcn imports (Toaster, Sonner, TooltipProvider), simplify wrapper
* `BookHeader.tsx` — replace utility classes with `.book-header-link` class
* `ChapterNav.tsx` — replace with `.chapter-nav`, `.chapter-nav-link` classes
* `ThemeToggle.tsx` — replace with `.theme-toggle` class; replace `lucide-react` icons with inline SVG or unicode
* `ChapterLayout.tsx` — replace with semantic classes
* `NavLink.tsx` — remove `cn()` usage, use simple string concat
* `GitaIndex.tsx` — replace with `.hero-cover`, `.toc-section`, `.toc-item`, `.site-footer` etc.
* `GitaChapter.tsx` — replace with `.verse-card`, `.commentary-section`, `.loading-state` etc.
* `NotFound.tsx` — replace with `.not-found` class
### 5. Update `src/lib/utils.ts`
Remove `cn()` function (or replace with simple class joiner if still needed by `NavLink.tsx`).