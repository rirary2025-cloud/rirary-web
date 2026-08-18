# Rirary Design Specification v0.2

## Design idea
`LOCAL × MODERN × ACTION`
A Hokkaido-rooted company that feels practical, energetic and capable of executing projects.
The visual identity must not resemble a generic SaaS product or a social-media agency template.

## Color system
- Brand Orange: primary action / key markers
- Ink: primary text / strong contrast surfaces
- Paper: white background
- Warm Sand: soft section surface
- Border: warm low-contrast separator
Orange is an accent, not the default background for every major section.

## Typography
- Japanese-first readability.
- Editorial, strong headlines with controlled line length.
- Body text should generally stay around 16-18px equivalent on desktop and maintain generous line-height.
- Use no more than 3 primary text sizes within one section unless a data visualization needs it.
- Avoid ultra-light weights.

## Spacing
Use tokenized spacing only for production layout.
Section spacing:
- mobile: 80-96px
- tablet: 104-120px
- desktop: 136-152px

## Grid
- max content width: 1200px
- desktop: 12-column mental model
- tablet: flexible 6-column equivalent
- mobile: 1-column primary flow
- use asymmetry selectively for editorial character

## Radius
- controls: pill or small radius depending on role
- cards: 20-28px
- photography: 24-32px when framed
Avoid making every object rounded.

## Photography
Priority order:
1. actual Rirary projects/people/locations
2. actual Hokkaido/local context
3. carefully selected contextual imagery
Avoid obvious generic office-team stock imagery.

Suggested ratios:
- hero: 4:3 mobile / 16:10 or editorial crop desktop
- work cards: 4:3
- regional project feature: 16:9 or wide editorial

## Motion
- subtle reveal/hover only
- 160-240ms for micro-interactions
- no motion required to understand content
- always respect reduced motion

## Accessibility
- WCAG-oriented contrast
- visible keyboard focus
- semantic heading order
- buttons/links must remain identifiable without color alone

## Visual QA
A section is not complete until checked at 375, 768, 1024 and 1440 widths.
Compare hierarchy, line breaks, whitespace, image crop, and CTA prominence—not just whether the layout technically fits.
