# Rirary Web

## Start
```bash
npm install
npm run dev
```

Open http://localhost:3000

## Before development
Read `../AGENTS.md` and all files under `../skills/` and `../docs/`.

## Verify before release
```bash
npm install
npm run lint
npm run build
```

See `../docs/prelaunch-checklist-v0.9.md` and `../docs/vercel-release-v0.9.md` before DNS cutover.


## v1.0 candidate verification

Run `npm run preflight` before lint/build. See `../docs/launch-readiness-v1.0.md` for release blockers and Wix cutover steps.
