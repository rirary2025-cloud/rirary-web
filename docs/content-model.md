# Content Model v0.2

## Service
- slug
- category
- nameJa
- nameEn
- summary
- problem
- value
- capabilities[]
- process[]
- relatedWorks[]
- seoTitle
- seoDescription

## Work
- slug
- title
- category
- region
- clientName (optional/public only)
- year
- summary
- challenge
- approach
- delivery[]
- outcome (only factual/publishable claims)
- heroImage
- gallery[]
- relatedServices[]

## RegionalProject
- slug
- title
- region
- partners[] (public only)
- summary
- background
- projectDesign
- roleOfRirary
- status
- images[]

## News
- slug
- title
- publishedAt
- category
- excerpt
- body
- coverImage

## Rule
Store initial content in typed local data/MDX or simple TS objects. Do not add a CMS until there is a real operational need. The UI must not depend on the storage implementation.
