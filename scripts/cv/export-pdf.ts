// `bun run pdf`: builds the app, serves it, prints the CV for every Locale with Chromium and
// writes the PDFs with metadata into export/. Fails if a Project is taller than one page,
// since the browser keeps Projects whole and would otherwise cut it (see docs/adr/0002).
import { spawn, type ChildProcess } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import { PDFDocument } from "pdf-lib";
import { chromium, type Page } from "playwright";
import { CV } from "../../app/data/cv";
import type { Locale } from "../../app/types/cv";
import {
  A4_HEIGHT_PX,
  cvPath,
  exportFileName,
  metadataFor,
  oversizedProjects,
  type ProjectMeasurement,
} from "./export";

const LOCALES: readonly Locale[] = ["de", "en"];
const EXPORT_DIR = "export";
const PORT = 3100;
const ORIGIN = `http://localhost:${PORT}`;
const SERVER_TIMEOUT_MS = 30_000;

/** Starts the built Nitro server and resolves once it answers. */
async function startServer(): Promise<ChildProcess> {
  const server = spawn("node", [".output/server/index.mjs"], {
    env: { ...process.env, PORT: String(PORT), HOST: "localhost", NODE_ENV: "production" },
    stdio: ["ignore", "ignore", "inherit"],
  });
  const deadline = Date.now() + SERVER_TIMEOUT_MS;
  while (Date.now() < deadline) {
    if (server.exitCode !== null) throw new Error(`Server exited with code ${server.exitCode}`);
    try {
      const response = await fetch(`${ORIGIN}${cvPath("de")}`);
      if (response.ok) return server;
    } catch {
      // not listening yet
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  server.kill();
  throw new Error(`Server did not answer on ${ORIGIN} within ${SERVER_TIMEOUT_MS / 1000}s`);
}

/** Heights of the Projects as laid out for print; each is marked with data-project. */
function measureProjects(page: Page): Promise<ProjectMeasurement[]> {
  return page.$$eval("[data-project]", (elements) =>
    elements.map((element) => ({
      name: (element as HTMLElement).dataset.project ?? "?",
      heightPx: element.getBoundingClientRect().height,
    })),
  );
}

async function printLocale(page: Page, locale: Locale, year: number): Promise<void> {
  await page.goto(`${ORIGIN}${cvPath(locale)}`, { waitUntil: "networkidle" });
  await page.emulateMedia({ media: "print" });
  await page.evaluate(() => document.fonts.ready);

  const measured = await measureProjects(page);
  if (measured.length === 0) throw new Error(`No Projects found on ${cvPath(locale)}`);
  const oversized = oversizedProjects(measured, A4_HEIGHT_PX);
  if (oversized.length > 0) {
    throw new Error(
      `Project${oversized.length > 1 ? "s" : ""} taller than one A4 page (${locale}): ` +
        `${oversized.join(", ")}. Shorten ${oversized.length > 1 ? "them" : "it"} so the browser can keep each Project on one page.`,
    );
  }

  const printed = await page.pdf({ format: "A4", printBackground: true, preferCSSPageSize: true });

  const metadata = metadataFor(CV.profile, locale);
  const pdf = await PDFDocument.load(printed);
  pdf.setTitle(metadata.title);
  pdf.setAuthor(metadata.author);
  pdf.setSubject(metadata.subject);
  pdf.setKeywords(metadata.keywords);
  pdf.setCreator("portfolio-nuxt pdf export");
  pdf.setLanguage(locale);
  pdf.setModificationDate(new Date());

  const fileName = exportFileName(CV.profile, locale, year);
  await writeFile(`${EXPORT_DIR}/${fileName}`, await pdf.save());
  console.log(`${fileName}: ${pdf.getPageCount()} pages`);
}

async function main(): Promise<void> {
  await mkdir(EXPORT_DIR, { recursive: true });
  const server = await startServer();
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
    const year = new Date().getFullYear();
    for (const locale of LOCALES) await printLocale(page, locale, year);
  } finally {
    await browser.close();
    server.kill();
  }
}

main().catch((error: unknown) => {
  console.error(`PDF export failed: ${error instanceof Error ? error.message : String(error)}`);
  process.exit(1);
});
