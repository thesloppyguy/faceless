---
name: asset-pack
description: >-
  Builds a named asset checklist from storyboard/scene prompts, accepts drops or
  explicit generation, and gates weak assets per item before Remotion. Use when
  the pipeline reaches asset-pack or the user asks to gather cutouts for a reel.
---

# Asset pack

Kill weak assets before Remotion (collage gate in `school-practice-kit/PROMPTS.md` prompt 2). Techniques: `empire-downfall-project-pack/SPEC.md` §7; drop into `public/assets/` as in `Netflix-practice-kit/README.md`.

## When

- Pipeline `current_stage: asset-pack` after scene-prompts pack approve
- User asks to collect / generate assets for the reel

## Procedure

1. Collect unique asset ids from `storyboard.md` and `prompts/scene-*.txt` (BG / PROP / cutouts / videos).
2. Seed `stages.asset-pack.items`: `{ id, status: pending, path }`.
3. For each item (one active gate at a time unless user batches drops):
   - Prefer files the user already placed under `<slug>/assets/` or `<slug>/public/assets/`.
   - Copy/normalize into Remotion `public/assets/` when the project exists; otherwise keep `<slug>/assets/` until setup.
   - **Do not silently generate images.** List missing files and wait, or generate only when the user explicitly asks (collage treatment: torn edges / sticker borders baked into PNG when generating).
4. Optional contact sheet of the pack for review.
5. Mark each item `waiting_for_review` → user Approve / Revise / Skip.

### Empire techniques (when cleaning assets)

Copied summary from `empire-downfall-project-pack/SPEC.md` §7; if that section changes, update this block too.

- Transparent PNG: key background; keep largest opaque component so interior fills survive.
- Transparent video: VP9 with alpha (`yuva420p`), then Remotion `OffthreadVideo` with transparent.
- Heavy backgrounds: crop/resize to composition size so Studio does not stutter.

### Collage generation (only if user asks)

Torn ragged edges and paper grain belong **in the generation prompt**, not only in post. Show the pack before building motion.

## Advance

Stage advances only when every item is `approved` or `skipped`. Then conductor moves to `remotion-setup`.

## Chat

After listing or updating items: paths + which item is waiting. Stop for Approve / Revise.
