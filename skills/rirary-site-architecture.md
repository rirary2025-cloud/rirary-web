# Skill: Rirary Site Architecture

## Goal
Keep the website simple, scalable, and easy for Codex to maintain.

## Rules
- Use Next.js App Router.
- Keep routes under `app/`.
- Put reusable visual primitives in `components/ui/`.
- Put page/marketing sections in `components/sections/`.
- Keep constants, helpers, navigation data, and content models in `lib/`.
- Keep static images and icons in `public/`.
- Avoid duplicating markup across pages.
- Prefer data-driven cards and lists when content structures repeat.
- Use Server Components by default; add `"use client"` only when interaction requires it.

## Suggested route structure
- `/` Home
- `/services` Services overview
- `/services/[slug]` Service details
- `/works` Case studies / achievements
- `/works/[slug]` Case detail
- `/regional-project` Regional projects
- `/about` Company / philosophy
- `/news` News / articles
- `/contact` Contact

## Content model direction
Services, works, news, and regional projects should be structured so they can later move to a CMS without redesigning the UI.
