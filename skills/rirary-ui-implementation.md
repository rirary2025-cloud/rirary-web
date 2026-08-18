# Skill: Rirary UI Implementation

## Goal
Implement approved Rirary designs faithfully and prevent template drift.

## Source priority
1. Explicit user instruction
2. Approved screenshot/mockup/reference
3. `docs/design-spec.md`
4. `docs/homepage-architecture.md` or page-specific spec
5. reusable component conventions

## Rules
- Do not replace an approved composition with a generic landing-page pattern.
- Match hierarchy, density, alignment, whitespace, image ratios and typography before decoration.
- Mobile layout is designed independently, not merely scaled down.
- Reuse primitives for buttons, cards, containers, headings, tags and CTAs.
- Production section layout should not rely on scattered inline style objects. Promote repeatable values to classes/tokens.
- Avoid excessive gradients, glassmorphism, shadows and animation.
- Never use placeholder statistics, client names, outcomes, testimonials, logos or partner claims.
- When factual content is missing, leave a clearly named content TODO rather than inventing it.

## Homepage visual path
Hero -> company definition -> business -> approach -> works -> regional project -> about/co-creation -> news -> contact.

## QA gate
Before declaring a page done:
- inspect 375 / 768 / 1024 / 1440
- verify no accidental horizontal scroll
- verify Japanese line breaks are natural
- verify image crops at each breakpoint
- verify the primary CTA remains visually dominant
