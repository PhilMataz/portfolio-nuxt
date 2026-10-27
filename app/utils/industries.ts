import type { Project, Translated } from "~/types/cv";

/**
 * Industries: the distinct Industry values across all Projects, in first-seen order.
 * Derived for page one and never stored on their own (see CONTEXT.md).
 */
export function industriesOf(projects: readonly Project[]): Translated[] {
  const seen = new Set<string>();
  const industries: Translated[] = [];
  for (const { industry } of projects) {
    const key = `${industry.de}\u0000${industry.en}`;
    if (seen.has(key)) continue;
    seen.add(key);
    industries.push(industry);
  }
  return industries;
}
