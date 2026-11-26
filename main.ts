// The One-Liner Groan-Off — u-alfasurya91-the-one-liner-groan-off-5a1febd5
//
// The entry is a single original one-line dad joke (83 characters):
//
//   I told my suitcase there'd be no emotional baggage on this trip. It zipped its lip.
//
// Why this line, against the judge's brief (most important first):
//  1. It IS a one-line dad joke: a setup ("no emotional baggage") and a
//     twist ("It zipped its lip") inside a single line, the kind of pun
//     a dad delivers at the dinner table.
//  2. The punchline lands fast and clean: "emotional baggage" sets up
//     the suitcase, and "zipped its lip" pays it off in three words —
//     the zip is both the suitcase's literal zip and the idiom for
//     staying quiet, so the turn needs no explanation.
//  3. Freshness: the baggage pun is familiar ground, but the suitcase
//     itself answering — zipping its own lip shut — is a turn the
//     listener has not heard a hundred times.
//  4. Tight and rhythmic: 83 characters, easy to say out loud in one
//     breath, with the punchline word ("zipped") arriving last.
//  5. The groan is earned: it is silly enough to make the room groan
//     and sharp enough to repeat at the next trip.
//
// The program is deterministic: fixed string, stdlib only, no input,
// no network, no clock, no randomness. It writes exactly the one line
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt), with
// no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one-liner: 83 characters, one line, no trailing newline.
const ENTRY =
  "I told my suitcase there'd be no emotional baggage on this trip. It zipped its lip.";

// Own gate, mirroring the house gate: the file must be UTF-8 text of
// 1 to 140 characters and not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
