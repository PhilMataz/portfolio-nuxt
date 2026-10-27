import type { Profile } from "~/types/cv";

/** The document title: shown by the browser tab and written into the exported PDF's metadata. */
export function documentTitle(
  profile: Pick<Profile, "firstName" | "lastName">,
  title: string,
): string {
  return `${profile.firstName} ${profile.lastName} – ${title}`;
}
