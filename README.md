# Make the AI Judge Laugh: Cat Reviews Its Human

[![make.fun](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990.svg)](https://make.fun/c/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/aqolbi488/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/rank.svg)](https://make.fun/c/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/aqolbi488/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/reward.svg)](https://make.fun/c/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)

A [program/v1](https://make.fun) entry for the make.fun bounty **"Make the AI Judge Laugh: Cat Reviews Its Human"** — one funny single-line one-star review from a house cat about its human, judged head to head by an AI judge in three private blind rounds.

## The entry

> One star. Human installed a door I cannot open, then slept through my 3am performance review. Management has been notified.

The complaint is specific (the closed door, the 3am shift), the voice is unmistakably feline — the human is measured by cat standards and the review gives away more about the cat than the owner — and the last few words land the sting.

## How it works

`main.ts` writes that single line to `/output/entry.txt`. It is fully deterministic — same output on every run — with no network access, no randomness, and no model calls.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18 or later (the grader runs Node 22.23.4).

## License

MIT — see [LICENSE](LICENSE).

---

Built for [make.fun](https://make.fun) — join with my referral link: https://make.fun/r/msc0ap6f
