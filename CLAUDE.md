# portfolio-nuxt

Nuxt 4 site that renders a bilingual (de/en) CV and exports it to PDF. German is the default Locale.

## Where things live

- `app/data/cv/` — all CV content as TypeScript, each fact once, every text a `Translated` with both Locales. `tech.ts` is the only spelling authority for technology names; `skills.ts` picks the ones shown, and the typecheck fails if a Skill is in no Project. Types in `app/types/cv.ts`.
- `i18n/` — interface text only (headings, labels, period words). Never CV content.
- `CONTEXT.md` — the vocabulary (Project, Task, Outcome, Experience, Focus area, …). Use these terms in code and prose.
- `docs/adr/` — architecture decisions. Read before changing data shape or page layout.
- `app/components/CV/`, `app/pages/cv.vue` — the CV layout. `scripts/cv/` — the PDF export.
- `.claude/skills/cv/` — `/cv review` and `/cv update <notes>`; house rules in its `RULES.md`.

## Layout and A4 rules

- Page one is a fixed 210×297 mm box tuned to fill exactly one A4 page, then `break-after: page`.
- Projects are one flowing document; each is `break-inside: avoid-page`, so the browser places whole Projects per page. Nothing is grouped per page in code.
- Every Project must fit on one A4 page. `bun run pdf` measures each under print media and fails, naming the Project, if one is taller.
- `@page { size: A4; margin: 0 }`. The dark side column on Projects pages is a print-only `position: fixed` box; the fixed column (37% of the viewport) and the grid column (37% of 210 mm) line up only at A4 with zero margin. Changing `@page` means checking the print preview.
- Spacing between Projects is padding on each Project, not margin, so a Project opening a page keeps its top spacing.
- Periods are stored as `YYYY-MM`; lengths are computed, never written down.

## Commands

```
bun run typecheck   # vue-tsc over the Nuxt project references
bun run test        # vitest: date rules, locale completeness, title/summary, industries
bun run pdf         # nuxt build, then print both Locales with Chromium into export/
bun run lint        # oxlint
bun run fmt         # oxfmt
```

The pre-commit hook runs typecheck, test, lint and fmt:check.
