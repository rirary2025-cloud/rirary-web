# Autonomous Build Workflow

## Goal
A single user instruction should take the Rirary website from its current repository state to **PRE-DEPLOY READY** without requiring routine step-by-step confirmation.

## Operating mode
Codex acts as implementer + reviewer + QA owner. It should plan briefly, then execute. Ordinary technical choices are made from existing project constraints rather than escalated to the user.

## Loop
### 1. Intake
- Read `AGENTS.md`.
- Read this file and `TASK_STATE.md`.
- Read only the docs/skills relevant to the requested change.
- Inspect code before editing.

### 2. Task decomposition
Record concrete tasks in `TASK_STATE.md` with one of:
- TODO
- IN_PROGRESS
- DONE
- BLOCKED

Each task must have a verifiable completion condition.

### 3. Implementation
- Work task-by-task.
- Prefer reusable components/data structures.
- Keep source-of-truth content centralized.
- Do not invent production facts.
- Treat supplied official brand assets as authoritative.

### 4. Continuous verification
After meaningful edits, run targeted checks where practical.
Before completion, from `app/` run:

```bash
npm run verify
```

`verify` must cover preflight, lint, and production build.

If a check fails, fix it and rerun. A failed check is not a stopping condition by itself.

### 5. Visual QA
Where browser tooling is available:
- run the local production/dev server;
- review 375, 768, 1024, 1440 widths;
- inspect header, hero, navigation, page transitions, forms, footer and overflow;
- check major pages, not only `/`;
- fix visible issues and rerun relevant checks.

If browser tooling is unavailable, record that limitation in `PREDEPLOY_REPORT.md`; do not falsely mark visual QA as passed.

### 6. Content/release audit
Check:
- no fake WORKS/NEWS/customer results;
- official logo is not replaced by a fabricated mark;
- contact fallback routes remain usable;
- legacy redirects are intentional;
- no secrets are committed;
- no dead internal links;
- public metadata is coherent.

### 7. Pre-deploy report
Update `PREDEPLOY_REPORT.md` with:
- build status;
- lint status;
- preflight status;
- visual QA status;
- content status;
- blockers;
- deployment prerequisites;
- explicit statement: `DEPLOYMENT NOT EXECUTED`.

## What requires human input
Ask only when a missing decision blocks all useful work. Otherwise continue and surface it at the end.

Examples:
- official project/client details not supplied;
- legal approval;
- production webhook credentials;
- permission to use a specific photograph;
- explicit approval to deploy or modify DNS.

## Completion wording
Do not say “finished” merely because code was written. Use **PRE-DEPLOY READY** only after the gate in `AGENTS.md` is satisfied.
