# CV

The portfolio site renders a bilingual (German/English) curriculum vitae. This context names the kinds of content the CV is built from and separates them from the interface text used to present them.

## Language

**Content**:
The facts and prose that make up the CV itself: projects, skills, experiences, education, references, languages, profile. Content lives in the data folder, each fact exactly once.
_Avoid_: messages, translations, copy

**Interface text**:
Section headings, field labels, and other words the layout needs to present content (for example "Technologies", "today", "year"). Interface text lives in i18n and is never content.
_Avoid_: UI strings, labels (as a type name)

**Translated**:
A single piece of content text carried in every supported locale at once. A Translated with a missing locale is a type error.
_Avoid_: localized string, i18n string, DE/EN pair

**Locale**:
One of the supported CV languages, `de` and `en`. German is the default Locale: it is shown when no Locale is named.

**Project**:
One engagement for a client or employer, with a role, company, industry, period, optional team size, context, tasks, outcomes and tech list. Every text part is Translated, so it exists in every locale.
_Avoid_: job, gig, position

**Context**:
The one to three sentences that say what the Project was and why it existed. Context sets the scene; it does not list work.
_Avoid_: description, intro

**Task**:
One concrete activity actually done in a Project, one per bullet. A Task names what was done, never that one "helped" or "was involved".
_Avoid_: responsibility, bullet (when meaning a Task)

**Outcome**:
What changed because of the Project's work. A number appears in an Outcome only when the user or the project's repository supplied it. A Project with no Outcome is incomplete, not invalid.
_Avoid_: achievement, result, success, Erfolg (in code)

**Industry**:
The sector the Project's client operates in (Branchenerfahrung), named so a recruiter can match it.
_Avoid_: sector, domain, Branche (in code)

**Tech**:
A technology name from the single catalogue. Every tech list and every Skill uses a name from the catalogue, spelled exactly as it appears there.
_Avoid_: technology string, stack item

**Skill**:
A Tech chosen for display in the skills section. Every Skill must appear in the tech list of at least one Project.
_Avoid_: technology (when meaning the skills list), tech skill

**Experience**:
A span of contractual status: employed by a company, or self-employed. An Experience has a title, company, city and Period, and an optional one-line note explaining an overlap. Experiences carry no work content; that lives on Projects.
_Avoid_: work history, employment (when meaning self-employment too)

**Workload**:
The hours per week a Project took, stated only when it was not full-time, so an overlap with another Project reads as intended.
_Avoid_: part-time, availability (which means future capacity)

**Focus area**:
One of four to six short themes on page one that say what the user is hired for (Themenschwerpunkte). Each focus area is backed by Projects; it is a heading for work, not a keyword list.
_Avoid_: specialty, keyword, Themenschwerpunkt (in code)

**Industries**:
The list of distinct Industry values across all Projects, derived for page one and never stored on their own.
_Avoid_: sectors, Branchenerfahrung (in code)

**Period**:
The span of a Project or experience, given as a start month and an optional end month. A Period without an end is ongoing and is shown as "today". Its length is computed, never written down.
_Avoid_: duration (as stored data), timeframe
