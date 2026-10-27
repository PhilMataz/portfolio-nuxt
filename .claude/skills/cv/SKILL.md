---
name: cv
description: Review the CV in app/data/cv/ against RULES.md, or draft a Project from notes and then review. `/cv review` or `/cv update <notes>`.
argument-hint: "review | update <rough notes for a new or changed Project>"
disable-model-invocation: true
---

# CV

Read the CV as the **gatekeeper** does: a recruiter, or their tool, matching a requirement list word for word. A fact the CV does not state does not exist for them. A fact nobody can back is a liability. Every claim must be **attested** — traceable to the user or to the project's repository — and every piece of work done **listed**.

Content lives in `app/data/cv/` as TypeScript; both Locales sit side by side in every `Translated`. `tech.ts` is the only spelling authority for technology names. The vocabulary (Project, Task, Outcome, Focus area, …) is defined in `CONTEXT.md`.

The house rules are in [`RULES.md`](RULES.md). Both procedures apply every rule there; the rules are written nowhere else.

The first word of `$ARGUMENTS` picks the procedure: `review` or `update`. Anything after `update` is the notes.

## Review

1. **Run the checks.** `bun run typecheck` and `bun run test`. Done when both pass or every failure is recorded as a finding of its own.
2. **Read the whole CV.** Open every file in `app/data/cv/`. Done when you can name every Project with its dates and could list its technologies without reopening the file.
3. **Apply every rule in `RULES.md` to every Project and to page one.** Work Project by Project; for each, walk the forgotten-tasks list and the two-way technology cross-check explicitly. Done when each Project, and page one, has a line in your notes for each rule group, even if the line is "clean".
4. **Report findings** sorted by severity: _wrong or contradictory_, then _missing_, then _polish_. Each finding names its location (file and Project or company) and a suggested fix. Done when every finding has both.
5. **End with the questions.** Every suggestion that would add a Task, technology, number or Outcome is a question, never a drafted fact. Stop here. Edits happen only after the user has answered.

## Update

1. **Draft from the notes alone.** Write the new or changed Project in both Locales in the shape of `Project` from `app/types/cv.ts`: role, company, industry, period, context, tasks, outcomes, technologies, with Workload and team size if the notes give them. Use only what the notes say; where the notes are silent, leave the field empty rather than inventing. Spell every technology as in `tech.ts`, adding to the catalogue if a new name is attested. Done when both Locales exist and state the same facts bullet for bullet.
2. **Show the draft** and, in the same message, ask one batch of questions: the forgotten-tasks list from `RULES.md`, each item not already covered, plus the Outcomes — what changed, and any number the user can back. Done when the message is sent. Wait for the answer.
3. **Fold in the answers.** Add attested Tasks, Outcomes and technologies to both Locales; drop anything the user denies. Write the result into `app/data/cv/projects.ts` (and `tech.ts`, `skills.ts` if they changed). Done when `bun run typecheck` passes.
4. **Run the full Review** above, all five steps, over the whole CV. Update always ends here, never with the draft.
