import type { Project, Translated } from "~/types/cv";

/** Identity of a Translated: two are the same Industry only when every locale matches. */
export const translatedKey = (value: Translated): string => `${value.de}\u0000${value.en}`;

/**
 * Industries: the distinct Industry values across all Projects, in first-seen order.
 * Derived for page one and never stored on their own (see CONTEXT.md).
 */
export function industriesOf(projects: readonly Project[]): Translated[] {
  const seen = new Set<string>();
  const industries: Translated[] = [];
  for (const { industry } of projects) {
    const key = translatedKey(industry);
    if (seen.has(key)) continue;
    seen.add(key);
    industries.push(industry);
  }
  return industries;
}
