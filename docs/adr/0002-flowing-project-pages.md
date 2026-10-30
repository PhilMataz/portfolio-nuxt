# Page one is a fixed A4 box; the Projects flow and the browser paginates them

The CV is printed to PDF from the browser. Page one has a designed layout (photo, title, summary, focus areas, timeline) that is tuned to fill exactly one A4 page, so it stays a fixed 210×297mm box. The Projects used to be fixed boxes too: the page hardcoded two Projects per box, and a Project that grew past its half spilled over the next one or was cut at the page edge. We decided that the Projects are one flowing document instead. Each Project is marked `break-inside: avoid-page`, so the browser places as many Projects on a page as fit and moves the next one over whole. Nothing is grouped per page in code, and a longer Project pushes the following ones down instead of clipping.

## Trade-off: the page frame comes from print CSS, not from a per-page component

With fixed boxes, every page was a component (`PageContainer`) that drew its own frame: the dark side column, the border, the padding. A flowing document has no page component to hang that on, so the frame of pages two onwards is produced by print CSS:

- `@page { size: A4; margin: 0 }` makes the browser's page the same size as the boxes, so page one fills its page exactly and ends with `break-after: page`.
- The dark side column on every Projects page is a `position: fixed` box shown only in print. Fixed boxes repeat on each printed page in Chromium, which is what the grid column's own background does not do past its first page.
- Spacing between Projects is padding on each Project rather than a flex gap or margin, because a margin at a page break is truncated while padding is kept, so a Project that opens a page still has its top spacing.

## Assumptions

- Every Project fits on one page. A Project taller than a page cannot be kept whole; the browser would cut it. The PDF export (`bun run pdf`) measures every Project under print media before printing and fails, naming the Project, if one exceeds A4 height.
- The fixed print column is 37% of the print viewport, the grid column 37% of the 210mm box. They line up only because the page is A4 with zero margin. Changing `@page` means checking the print preview.
- The side column of the Projects box no longer pins Education to the top and References to the bottom; Experiences, Education and References all sit at the top, since the box has no fixed bottom. Experiences moved there from page one when the seven Focus areas and the longer summary left no room for them; page one holds only what the house rules name for it.
- The dark side column prints regardless of the "background graphics" option, on page one as well, so the exported PDF looks the same on every machine.

On screen, the Projects are one tall box with the usual border; it does not show page boundaries. The print preview is the only place to see where pages break. Fragmentation of flex and grid boxes is a Chromium feature; other engines may break differently, and the CV is exported from Chromium by `scripts/cv/export-pdf.ts`, which also writes the PDF metadata.
