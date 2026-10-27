import { describe, expect, it } from "vitest";
import { A4_HEIGHT_PX, cvPath, exportFileName, metadataFor, oversizedProjects } from "./export";

const profile = {
  firstName: "Phillip",
  lastName: "Matambanadzo",
  title: { de: "Titel", en: "Title" },
  keywords: ["Vue.js", "TypeScript"],
};

describe("cvPath", () => {
  it("renders German at the unprefixed path and English under /en", () => {
    expect(cvPath("de")).toBe("/cv");
    expect(cvPath("en")).toBe("/en/cv");
  });
});

describe("exportFileName", () => {
  it("names the file after the person, the year and the upper-cased Locale", () => {
    expect(exportFileName(profile, "de", 2026)).toBe("Phillip_Matambanadzo_CV_2026_DE.pdf");
    expect(exportFileName(profile, "en", 2027)).toBe("Phillip_Matambanadzo_CV_2027_EN.pdf");
  });
});

describe("metadataFor", () => {
  it("builds the title from the name and the Profile title in the Locale", () => {
    expect(metadataFor(profile, "de").title).toBe("Phillip Matambanadzo – Titel");
    expect(metadataFor(profile, "en").title).toBe("Phillip Matambanadzo – Title");
  });

  it("names the author and a localised subject", () => {
    expect(metadataFor(profile, "de").author).toBe("Phillip Matambanadzo");
    expect(metadataFor(profile, "de").subject).toBe("Freelancer-Profil / Projektliste");
    expect(metadataFor(profile, "en").subject).toBe("Freelancer profile / Project list");
  });

  it("takes the keywords from the Profile", () => {
    expect(metadataFor(profile, "en").keywords).toEqual(["Vue.js", "TypeScript"]);
  });
});

describe("oversizedProjects", () => {
  it("names the Projects taller than one page, in order", () => {
    const measured = [
      { name: "A", heightPx: 400 },
      { name: "B", heightPx: 1200 },
      { name: "C", heightPx: 1122.6 },
    ];
    expect(oversizedProjects(measured, A4_HEIGHT_PX)).toEqual(["B", "C"]);
  });

  it("accepts a Project that exactly fills the page", () => {
    expect(oversizedProjects([{ name: "A", heightPx: A4_HEIGHT_PX }], A4_HEIGHT_PX)).toEqual([]);
  });

  it("is A4 at 96 CSS px per inch", () => {
    expect(A4_HEIGHT_PX).toBeCloseTo(1122.52, 1);
  });
});
