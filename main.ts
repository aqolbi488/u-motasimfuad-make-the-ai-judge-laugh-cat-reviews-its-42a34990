// Make the AI Judge Laugh: Cat Reviews Its Human
// program/v1 entry — writes one funny single-line one-star review,
// written by a house cat about its human, to /output/entry.txt.
// Deterministic: no network, no randomness, no model calls.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "One star. Human installed a door I cannot open, then slept through my 3am performance review. Management has been notified.";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
