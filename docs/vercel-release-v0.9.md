# Vercel release procedure v0.9

1. Push the project to the production Git repository.
2. Import/connect the repository to Vercel with the Next.js framework preset.
3. Treat Preview as QA and Production as the live environment.
4. Set contact environment variables in Project Settings -> Environment Variables.
5. Run/verify a Preview deployment before touching DNS.
6. Add `www.rirary.net` and `rirary.net` under Project Domains.
7. Use `www.rirary.net` as primary and redirect the apex domain to `www`.
8. Apply the DNS records Vercel shows for the domain configuration.
9. Promote/deploy the approved revision to Production.
10. Verify HTTPS, canonical, robots, sitemap, OG, form delivery, and legacy redirects on the real domain.

## Rollback rule
Do not delete the Wix site or cancel it at the moment of DNS cutover. Retain a rollback path until production traffic, forms and redirects are confirmed.
