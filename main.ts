// Make the AI Judge Laugh: Cat Reviews Its Human
// program/v1 entry — writes one funny single-line one-star review,
// written by a house cat about its human, to /output/entry.txt.
// Deterministic: no network, no randomness, no model calls.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry itself: a single-line one-star review from the cat.
const ENTRY =
  "One star. Human installed a door I cannot open, then slept through my 3am performance review. Management has been notified.";

// Gate: the entry must be a single non-empty line within the
// competition's length window (1–200 chars, no newlines, no
// leading/trailing whitespace). Anything outside the window is
// a bug in the entry text, so fail loudly instead of writing
// a malformed file.
const MIN_ENTRY_CHARS = 1;
const MAX_ENTRY_CHARS = 200;

function validateEntry(text: string): void {
  if (text.length < MIN_ENTRY_CHARS || text.length > MAX_ENTRY_CHARS) {
    throw new Error(
      `entry length ${text.length} outside ${MIN_ENTRY_CHARS}–${MAX_ENTRY_CHARS} chars`,
    );
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (text.trim() !== text) {
    throw new Error("entry must not have leading/trailing whitespace");
  }
}

const outPath = "/output/entry.txt";
validateEntry(ENTRY);
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${outPath}`);
