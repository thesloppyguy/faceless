---
name: vox-script
description: >-
  Writes a single-narrator VOX-style documentary voiceover script to script.md
  (intro/body/outro, short spoken lines, sources). Use when the pipeline reaches
  the script stage, or the user asks for VOX/explainer narration from a URL, doc, or paste.
---

# VOX script

Lock spoken copy **before** picture. The voiceover is the source code (see `Netflix-practice-kit/README.md`: write and lock the script first; scene timing is cut from gaps between lines).

Shape and treatment follow the wine reel example. Values / structure below are copied from `why-wine-looked-safer-than-beer-here/script.md`; if that file changes, update this block too.

## When

- Pipeline `current_stage: script` after brief approve
- User asks for VOX / narrator / faceless voiceover from URL, document, or paste

## Ingest

1. URL: fetch article body. Document: read file. Paste: use as source of truth.
2. Extract: puzzle, mechanism, stakes, 1–3 concrete facts, what to leave out.
3. Do not invent facts not in the source (or label as Inferred).

## Voice

- Conversational, informed, slightly dry. One narrator only.
- Open on tension or counterintuitive beat, not “today we’re going to talk about…”
- Each spoken line ≤ 15 words. Split at breath points.
- No subscribe/like/smash. No fake dialogue.
- Write for stop-motion holds: pictureable nouns; no fluid-camera language (“glide”, “drift”).

## Structure

Spoken order: **intro → body → outro**.

Default: body ~60–90s (~150–225 words at ~160 wpm); intro/outro bookends. If user gives a total time limit, fit all three inside it.

User-provided intro/outro: use **verbatim**, still split to ≤15 words/line.

## Output

Write `<slug>/script.md` (same folder as `pipeline.md`). Do not treat chat as the deliverable.

```markdown
# <Title>

**Angle:** <one sentence>
**Runtime:** <total seconds> (intro + body + outro) · <word count> words
**Limit:** <user limit, or “none”>
**Intro:** provided | generated
**Outro:** provided | generated
**Treatment:** stop motion · posterize judder on all motion · vintage film

## Intro

<lines, ≤ 15 words each>

## Body

<lines, ≤ 15 words each>

## Outro

<lines, ≤ 15 words each>

## Sources

- <URL or file>
- Inferred: <anything not in source, or “none”>
```

## After write (pipeline)

Set `stages.script.status` and top-level `status: waiting_for_review`. Reply with path, title, runtime. Stop for Approve / Revise.

## Quality check

- [ ] Sounds spoken; one through-line
- [ ] Mechanism is the longest beat
- [ ] Every line ≤ 15 words
- [ ] Intro and outro present
- [ ] File written to `<slug>/script.md`
