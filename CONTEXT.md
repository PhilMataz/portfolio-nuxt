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
One of the supported CV languages, currently `de` and `en`.

**Project**:
One engagement for a client or employer, with a role, company, period, tech list, description, and bullets. Bullets are a list of Translated, so every bullet exists in every locale.
_Avoid_: job, gig, position

**Tech**:
A technology name from the single catalogue. Every tech list and every Skill uses a name from the catalogue, spelled exactly as it appears there.
_Avoid_: technology string, stack item

**Skill**:
A Tech chosen for display in the skills section. Every Skill must appear in the tech list of at least one Project.
_Avoid_: technology (when meaning the skills list), tech skill

**Period**:
The span of a Project or experience, given as a start month and an optional end month. A Period without an end is ongoing and is shown as "today". Its length is computed, never written down.
_Avoid_: duration (as stored data), timeframe
