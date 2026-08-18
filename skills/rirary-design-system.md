# Skill: Rirary Design System

## Brand direction
Rirary should feel local, energetic, reliable, modern, and approachable.
Avoid generic SaaS styling and excessive corporate stiffness.

## Brand color
Primary brand accent: orange.
Use orange for emphasis and primary CTAs, not as a full-page background everywhere.

## Visual language
- White / warm neutral backgrounds
- Dark charcoal text
- Orange accent
- Generous whitespace
- Strong editorial headings
- Rounded corners used deliberately, not excessively
- Photography should feel real and local rather than stock-heavy

## Design tokens
All major visual values must come from CSS variables in `app/globals.css`.
Do not scatter arbitrary hex values, border radii, or spacing values through components.

## Typography
- Japanese-first readability
- Bold, compact headings
- Comfortable body line-height
- Avoid very light font weights

## Layout
- Main content max-width: 1200px
- Full-bleed sections allowed for visual rhythm
- Consistent section spacing across pages
- Grid should collapse cleanly on mobile

## Interaction
- Hover motion: subtle
- Duration: short and intentional
- Respect `prefers-reduced-motion`
- Buttons must have visible hover/focus/disabled states
