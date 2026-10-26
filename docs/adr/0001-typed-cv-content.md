# CV content lives in typed data; i18n holds interface text only

The CV is bilingual, and the Nuxt convention is to put every string into i18n messages per locale. We did that originally, and the two locales drifted: bullet counts, tech list order and spelling diverged with nothing to catch it. We decided instead that all CV content (projects, skills, experiences, education, references, languages, profile) lives in `data/cv/` as TypeScript, with each fact stored once and each translatable string as a `Translated` object carrying every locale. i18n keeps only interface text: headings, labels, period words, language and level names. `vue-tsc` then enforces that no translation is missing, that every technology name comes from one catalogue, and that every listed skill appears in at least one project.

## Consequences

- Adding a locale means adding it to `Locale`; every `Translated` without it fails the typecheck, which is intended.
- Content is not editable through i18n tooling. That's acceptable for a single-author CV.
- Periods are stored as `YYYY-MM` and lengths computed at render time (whole months between the two month starts), so durations can no longer be mistyped.
