---
name: storyboard
description: >-
  Turns a locked script into storyboard.md with continuity, per-line picture,
  transitions, and six asset planes. Use when the pipeline reaches storyboard,
  or the user asks for a shot list / picture lock from script.md.
---

# Storyboard

Decide **what is seen**. Script lines stay verbatim. Sign off before assets or code (collage prompt 1 in `school-practice-kit/PROMPTS.md`: storyboard gate before generate or animate).

Fields per line follow Netflix storyboard intent (`Netflix-practice-kit/prompts/00-storyboard.txt`). Continuity + six planes follow wine `why-wine-looked-safer-than-beer-here/beat-sheet.md`; if that file’s conventions change, update this skill.

## When

- Pipeline `current_stage: storyboard`
- User points at `script.md` for beats / shot list / picture lock

## Ingest

1. Read `<slug>/script.md`. Keep Intro / Body / Outro groups.
2. Copy voice lines verbatim. One spoken line ≈ one beat; merge only same tableau.
3. `[PAUSE]` = visual-only beat (empty voice).

## Continuity (write first)

In `## Continuity` at top of `storyboard.md`, pick **one** of each and reuse by name:

- **World / set**
- **Background plate** (`BG-*`)
- **Filter stack** (`FILTER-*`: grain, vignette, edge blur, dust, slight underexposure)
- **Hero objects** (2–5 `PROP-*` that return)

Default treatment: stop motion · posterize judder · vintage film. Stills and stepped moves only.

## Per beat (required)

| Field | Content |
|---|---|
| **Beat** | `intro-1`, `body-3`, … optional label |
| **The Voice lines** | Verbatim |
| **What it becomes on screen** | Subject, action/state, framing, readable detail, grade (3–6 sentences). Last sentence plants outgoing still. |
| **On-screen words** | Pulled from the line when captions/type appear |
| **Emotional beat** | One short line |
| **Signature animation** | One stepped move or land (not fluid camera) |
| **Transition in** | Hold / snap-cut / jump-replace / stepped move / layer land / match-cut. Name which layers persist vs change. Forbidden: dissolves, fades, “camera drifts”. |
| **Assets needed** | All six categories below |

### Assets needed (all six, in order)

- **Background:** …
- **Midground:** …
- **Foreground:** …
- **Characters:** … (faceless default: `none`)
- **Props:** … (exact on-screen text here)
- **Filter:** `FILTER-*` …

## Output

Write `<slug>/storyboard.md`. Do not overwrite `script.md`.

```markdown
# Storyboard — <script title>

**Script:** <path>
**Treatment:** stop motion · posterize judder on all motion · vintage film
**Beats:** <count>

## Continuity

**World:** …
**Background plate:** `BG-…` — …
**Filter stack:** `FILTER-…` — …
**Hero objects:** `PROP-…` — …

## Intro

### intro-1 · <label>

**The Voice lines**

…

**What it becomes on screen**

…

**On-screen words**

…

**Emotional beat**

…

**Signature animation**

…

**Transition in**

…

**Assets needed**

- **Background:** …
- **Midground:** …
- **Foreground:** …
- **Characters:** none
- **Props:** …
- **Filter:** …
```

## After write (pipeline)

`waiting_for_review` on storyboard. Stop for Approve / Revise.
