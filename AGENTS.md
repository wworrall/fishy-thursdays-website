# Fishy Thursdays Agent Guide

This project is intentionally simple.

## Hosting and deploys

- The site is hosted on Cloudflare Pages.
- `main` is the production branch.
- Any push to `main` deploys automatically.
- Do not add manual deploy scripts, GitHub Actions deploy workflows, or other deployment steps unless explicitly asked.

## Tech constraints

- Keep the site to HTML, CSS, and JavaScript.
- CSS should be plain CSS.
- CSS should use CSS variables where possible.
- Prefer CSS Grid for layout, taking advantage of modern CSS features where they simplify the design.
- Any future functions should use plain JavaScript, not TypeScript.
- Do not introduce bundlers, transpilers, framework build pipelines, or other new build steps.
- Prefer the simplest possible solution that works cleanly in Hugo.

## Collaboration guidance

- Preserve the no-build-step approach.
- Prefer trunk-based development with small, focused changes.
- Commit small changes and commit often.
- Prefer small, readable files and straightforward structure.
- When adding styling or interactivity, keep it easy for other contributors and agents to understand.
- If you change deployment-related settings or assumptions, update this file and `README.md`.

## Current direction

- The current goal is to collaborate on a distinctive homepage for Fishy Thursdays.
- Build from scratch rather than adding a prebuilt theme.
