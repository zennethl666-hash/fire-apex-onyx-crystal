import PptxGenJS from "pptxgenjs";
import { slides, units } from "../src/data/slides.ts";
import { drugs, refused } from "../src/data/drugs.ts";
import { inScope, outScope } from "../src/data/scope.ts";
import type { Block, Slide } from "../src/data/types.ts";

const OUT = new URL("../public/ecp150s-eca-master.pptx", import.meta.url);

const INK = "1C2430";
const PAPER = "FFFDF8";
const ACCENT = "C2410C";
const MUTED = "5C6570";
const SOFT = "F6E6DA";
const LINE = "E3D8C8";
const CREAM = "EFE8DC";

const pptx = new PptxGenJS();
pptx.defineLayout({ name: "WIDE", width: 13.333, height: 7.5 });
pptx.layout = "WIDE";
pptx.author = "ECP150S Field Manual";
pptx.title = "ECP150S Field Manual — Emergency Care Assistant";
pptx.subject = "Study deck for CPUT Emergency Care Practice, ECA scope only";

type Piece =
  | { kind: "lines"; lines: string[] }
  | { kind: "table"; headers: string[]; rows: string[][] }
  | { kind: "callout"; title: string; text: string };

function piecesOf(blocks: Block[]): Piece[] {
  const pieces: Piece[] = [];
  for (const block of blocks) {
    if (block.kind === "points") {
      pieces.push({ kind: "lines", lines: block.items.map((item) => `•  ${item}`) });
    } else if (block.kind === "steps") {
      pieces.push({
        kind: "lines",
        lines: block.items.map((item, index) => `${index + 1}.  ${item}`),
      });
    } else if (block.kind === "pairs") {
      pieces.push({
        kind: "lines",
        lines: block.items.map((item) => `${item.k} — ${item.v}`),
      });
    } else if (block.kind === "split") {
      pieces.push({
        kind: "lines",
        lines: [
          block.leftTitle,
          ...block.left.map((item) => `•  ${item}`),
          block.rightTitle,
          ...block.right.map((item) => `•  ${item}`),
        ],
      });
    } else if (block.kind === "callout") {
      pieces.push({ kind: "callout", title: block.title, text: block.text });
    } else {
      pieces.push({ kind: "table", headers: block.headers, rows: block.rows });
    }
  }
  return pieces;
}

function wraps(text: string, chars: number): number {
  return text.split("\n").reduce((sum, line) => sum + Math.max(1, Math.ceil(line.length / chars)), 0);
}

const BODY_TOP = 2.45;
const BODY_BOTTOM = 6.95;
const BODY_H = BODY_BOTTOM - BODY_TOP;

function pieceHeight(piece: Piece): number {
  if (piece.kind === "lines") {
    const lines = piece.lines.reduce((sum, line) => sum + wraps(line, 100), 0);
    return lines * 0.34 + 0.1;
  }
  if (piece.kind === "callout") {
    return 0.42 + wraps(`${piece.title} ${piece.text}`, 100) * 0.26;
  }
  const rowLines = piece.rows.reduce(
    (sum, row) => sum + Math.max(1, ...row.map((cell) => wraps(cell, 36))),
    1,
  );
  return rowLines * 0.4 + 0.2;
}

function pack(pieces: Piece[]): Piece[][] {
  const pages: Piece[][] = [];
  let current: Piece[] = [];
  let used = 0;

  function flush() {
    if (current.length) pages.push(current);
    current = [];
    used = 0;
  }

  for (const piece of pieces) {
    if (piece.kind === "lines" && pieceHeight(piece) > BODY_H) {
      flush();
      let bucket: string[] = [];
      let bucketH = 0;
      for (const line of piece.lines) {
        const h = wraps(line, 100) * 0.34;
        if (bucket.length && bucketH + h > BODY_H - 0.1) {
          pages.push([{ kind: "lines", lines: bucket }]);
          bucket = [];
          bucketH = 0;
        }
        bucket.push(line);
        bucketH += h;
      }
      if (bucket.length) pages.push([{ kind: "lines", lines: bucket }]);
      continue;
    }

    if (piece.kind === "table" && piece.rows.length > 5) {
      flush();
      for (let i = 0; i < piece.rows.length; i += 5) {
        pages.push([
          { kind: "table", headers: piece.headers, rows: piece.rows.slice(i, i + 5) },
        ]);
      }
      continue;
    }

    const h = pieceHeight(piece);
    if (current.length && used + h > BODY_H) flush();
    current.push(piece);
    used += h;
  }
  flush();
  return pages.length ? pages : [[]];
}

function chrome(
  slide: PptxGenJS.Slide,
  kicker: string,
  page: string,
) {
  slide.background = { color: PAPER };
  slide.addShape("rect", {
    x: 0,
    y: 0,
    w: 13.333,
    h: 0.08,
    fill: { color: ACCENT },
    line: { color: ACCENT },
  });
  slide.addText(kicker, {
    x: 0.5,
    y: 0.22,
    w: 9.5,
    h: 0.32,
    fontFace: "Calibri",
    fontSize: 13,
    color: ACCENT,
    margin: 0,
  });
  slide.addText(page, {
    x: 10,
    y: 0.22,
    w: 2.85,
    h: 0.32,
    fontFace: "Calibri",
    fontSize: 13,
    color: MUTED,
    align: "right",
    margin: 0,
  });
  slide.addText("ECP150S study aid  ·  ECA scope only  ·  not a protocol. Lecturer and the current card win.", {
    x: 0.5,
    y: 7.12,
    w: 12.3,
    h: 0.26,
    fontFace: "Calibri",
    fontSize: 11,
    color: MUTED,
    margin: 0,
  });
}

function drawTitle(slide: PptxGenJS.Slide, title: string, lead: string) {
  slide.addText(title, {
    x: 0.5,
    y: 0.55,
    w: 12.3,
    h: 1.05,
    fontFace: "Georgia",
    fontSize: title.length > 90 ? 22 : 26,
    color: INK,
    margin: 0,
    valign: "top",
  });
  slide.addText(lead, {
    x: 0.5,
    y: 1.65,
    w: 12.3,
    h: 0.7,
    fontFace: "Calibri",
    fontSize: 15,
    color: MUTED,
    margin: 0,
    valign: "top",
  });
}

function drawPieces(slide: PptxGenJS.Slide, pieces: Piece[]) {
  let y = BODY_TOP;
  for (const piece of pieces) {
    const h = Math.min(pieceHeight(piece), BODY_BOTTOM - y);
    if (piece.kind === "lines") {
      slide.addText(
        piece.lines.map((line) => ({
          text: line,
          options: { breakLine: true },
        })),
        {
          x: 0.5,
          y,
          w: 12.3,
          h,
          fontFace: "Calibri",
          fontSize: 16,
          color: INK,
          margin: 0,
          valign: "top",
          paraSpaceAfter: 6,
        },
      );
    } else if (piece.kind === "callout") {
      slide.addShape("roundRect", {
        x: 0.5,
        y,
        w: 12.3,
        h,
        fill: { color: SOFT },
        line: { color: ACCENT, width: 1.25 },
        rectRadius: 0.08,
      });
      slide.addText(`${piece.title}\n${piece.text}`, {
        x: 0.7,
        y: y + 0.08,
        w: 11.9,
        h: h - 0.12,
        fontFace: "Calibri",
        fontSize: 15,
        color: INK,
        margin: 0,
        valign: "top",
      });
    } else {
      const colCount = piece.headers.length;
      const width = 12.3 / colCount;
      slide.addTable(
        [
          piece.headers.map((header) => ({
            text: header,
            options: { fill: { color: INK }, color: PAPER, bold: true },
          })),
          ...piece.rows.map((row) =>
            row.map((cell) => ({
              text: cell,
              options: { fill: { color: PAPER }, color: INK },
            })),
          ),
        ],
        {
          x: 0.5,
          y,
          w: 12.3,
          colW: Array.from({ length: colCount }, () => width),
          border: { pt: 0.6, color: LINE },
          fontFace: "Calibri",
          fontSize: colCount > 3 ? 12 : 14,
          color: INK,
          valign: "middle",
          align: "left",
        },
      );
    }
    y += h + 0.12;
  }
}

function addLesson(slideData: Slide, pageLabel: string) {
  const unit = units.find((item) => item.id === slideData.unit);
  const pages = pack(piecesOf(slideData.blocks));
  pages.forEach((pieces, index) => {
    const slide = pptx.addSlide();
    const continued = pages.length > 1 ? `  ·  ${index + 1}/${pages.length}` : "";
    chrome(slide, `${unit?.label ?? slideData.unit}  ·  ${slideData.kicker}${continued}`, pageLabel);
    drawTitle(
      slide,
      slideData.title,
      index === 0 ? slideData.lead : "Continued.",
    );
    drawPieces(slide, pieces);
  });
}

function sectionSlide(kicker: string, title: string, lead: string) {
  const slide = pptx.addSlide();
  slide.background = { color: INK };
  slide.addShape("rect", {
    x: 0,
    y: 0,
    w: 0.18,
    h: 7.5,
    fill: { color: ACCENT },
    line: { color: ACCENT },
  });
  slide.addText(kicker, {
    x: 0.7,
    y: 2.15,
    w: 12,
    h: 0.4,
    fontFace: "Calibri",
    fontSize: 16,
    color: "F6E6DA",
    margin: 0,
  });
  slide.addText(title, {
    x: 0.7,
    y: 2.6,
    w: 11.5,
    h: 1.6,
    fontFace: "Georgia",
    fontSize: 36,
    color: PAPER,
    margin: 0,
  });
  slide.addText(lead, {
    x: 0.7,
    y: 4.4,
    w: 10.5,
    h: 1.1,
    fontFace: "Calibri",
    fontSize: 18,
    color: "E3D8C8",
    margin: 0,
  });
}

function cover() {
  const slide = pptx.addSlide();
  slide.background = { color: CREAM };
  slide.addShape("rect", {
    x: 0,
    y: 0,
    w: 0.18,
    h: 7.5,
    fill: { color: ACCENT },
    line: { color: ACCENT },
  });
  slide.addText("CPUT  ·  HIGHER CERTIFICATE  ·  2026", {
    x: 0.7,
    y: 1.35,
    w: 11,
    h: 0.35,
    fontFace: "Calibri",
    fontSize: 14,
    color: ACCENT,
    margin: 0,
  });
  slide.addText("Emergency Care Practice", {
    x: 0.7,
    y: 1.85,
    w: 12,
    h: 0.9,
    fontFace: "Georgia",
    fontSize: 44,
    color: INK,
    margin: 0,
  });
  slide.addText("ECP150S field manual for the Emergency Care Assistant.", {
    x: 0.7,
    y: 2.85,
    w: 11,
    h: 0.7,
    fontFace: "Georgia",
    fontSize: 24,
    color: INK,
    margin: 0,
  });
  slide.addText(
    "Plain language from the subject guide, the HPCSA PBEC annexure (ECA column), and the supplied drug monographs. Anything outside that column is named so you can recognise it, then left alone.\n\nPass = 50% overall, and 50% on Test 2, and 50% on Simulation 2.",
    {
      x: 0.7,
      y: 3.8,
      w: 10.5,
      h: 1.6,
      fontFace: "Calibri",
      fontSize: 18,
      color: MUTED,
      margin: 0,
    },
  );
  slide.addText("Study aid. Not a protocol. If the lecturer’s card disagrees, the lecturer wins.", {
    x: 0.7,
    y: 6.7,
    w: 11,
    h: 0.35,
    fontFace: "Calibri",
    fontSize: 14,
    color: MUTED,
    margin: 0,
  });
}

cover();

let lessonCount = 0;
let lastUnit = "";
for (const slideData of slides) {
  if (slideData.unit !== lastUnit) {
    const unit = units.find((item) => item.id === slideData.unit);
    sectionSlide(unit?.short ?? "", unit?.label ?? slideData.unit, "One idea per slide. Orange means a fence or a mark.");
    lastUnit = slideData.unit;
  }
  lessonCount += 1;
  addLesson(slideData, String(lessonCount));
}

sectionSlide("Drugs", "The ECA cabinet", "Doses are from the monograph. The fence line is the part that keeps you inside scope.");

drugs.forEach((drug, index) => {
  const blocks: Block[] = [
    { kind: "callout", tone: "scope", title: "ECA fence", text: drug.fence },
    { kind: "points", items: [drug.action] },
    {
      kind: "split",
      leftTitle: "Use it for",
      rightTitle: "Do not use it when",
      left: drug.use,
      right: drug.avoid,
    },
    { kind: "steps", items: drug.dose },
    { kind: "points", items: drug.watch.map((item) => `Watch. ${item}`) },
  ];
  const pages = pack(piecesOf(blocks));
  pages.forEach((pieces, pageIndex) => {
    const slide = pptx.addSlide();
    chrome(
      slide,
      `Drug  ·  ${drug.klass}${pages.length > 1 ? `  ·  ${pageIndex + 1}/${pages.length}` : ""}`,
      `${index + 1} / ${drugs.length}`,
    );
    drawTitle(slide, drug.name, pageIndex === 0 ? "Monograph dose. Stay inside the fence." : "Continued.");
    drawPieces(slide, pieces);
  });
});

sectionSlide("Not yours", "In the drug book. Not in your hands.", "Learn the name so a scenario cannot tempt you.");

const refusedLines = refused.map((item) => `${item.name} — ${item.why}`);
for (let i = 0; i < refusedLines.length; i += 8) {
  const slice = refusedLines.slice(i, i + 8);
  const slide = pptx.addSlide();
  chrome(slide, "Out of scope  ·  recognise and refer", "");
  drawTitle(slide, "Do not give these.", "The page existing in the drug book is not permission.");
  drawPieces(slide, [{ kind: "lines", lines: slice.map((line) => `•  ${line}`) }]);
}

sectionSlide("Scope", "The column, in one sitting", "HPCSA PBEC 2018 annexure. ECA column only.");

function scopePieces(groups: { title: string; items: { name: string; note: string }[] }, heading: string) {
  const lines = groups.flatMap((group) => [
    group.title,
    ...group.items.map((item) => `•  ${item.name}. ${item.note}`),
  ]);
  for (let i = 0; i < lines.length; i += 12) {
    const slide = pptx.addSlide();
    chrome(slide, "ECA capability list", "");
    drawTitle(slide, heading, i === 0 ? "If it is not on this list, you do not do it." : "Continued.");
    drawPieces(slide, [{ kind: "lines", lines: lines.slice(i, i + 12) }]);
  }
}

scopePieces(inScope, "You may");
scopePieces(outScope, "You may not");

const close = pptx.addSlide();
close.background = { color: PAPER };
close.addShape("rect", {
  x: 0,
  y: 0,
  w: 13.333,
  h: 0.08,
  fill: { color: ACCENT },
  line: { color: ACCENT },
});
close.addText("Before a simulation", {
  x: 0.7,
  y: 1.5,
  w: 11,
  h: 0.4,
  fontFace: "Calibri",
  fontSize: 16,
  color: ACCENT,
  margin: 0,
});
close.addText("Airway, breathing, circulation.\nThe one drug you may give.\nThe one drug you will not.\nThe hospital that finishes the job.", {
  x: 0.7,
  y: 2.1,
  w: 11.5,
  h: 2.8,
  fontFace: "Georgia",
  fontSize: 28,
  color: INK,
  margin: 0,
});
close.addText("Then do the thing with your hands. Overall 50%, Test 2 at least 50%, Simulation 2 at least 50%.", {
  x: 0.7,
  y: 5.4,
  w: 11,
  h: 0.7,
  fontFace: "Calibri",
  fontSize: 18,
  color: MUTED,
  margin: 0,
});

await pptx.writeFile({ fileName: OUT.pathname });
console.log(`wrote ${OUT.pathname} (${pptx.slides?.length ?? "?"} slides)`);
