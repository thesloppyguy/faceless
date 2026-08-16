---
name: beat-sheet
description: Convert a VOX/faceless explainer script into a beat sheet with Beat, Voice lines, on-screen picture, transitions, and layered assets (Background, Midground, Foreground, Characters, Props, Filter) plus a shared continuity look. Use when the user asks for a beat sheet, shot list, visual breakdown, picture lock, transitions, or to turn script.md into on-screen beats.
---

# Beat Sheet

Turn a spoken script into a production beat sheet. The script is the source of truth for **what is said**. This skill decides **what is seen**.

Default treatment (unless the user overrides): **stop motion**, **posterize judder on all motion**, **vintage film**. Write stills and stepped moves, not fluid B-roll.

## When this applies

- User points at a `script.md` (or pastes a script) and wants a beat sheet
- User asks for beats, shot list, visual breakdown, picture lock, or assets for a script
- Follow-up after `vox-script-writer`

## Ingest the script

1. Read the file the user names. If they only paste copy, use that. If neither, look for `script.md` in the current project folder.
2. Keep **Intro / Body / Outro** as section groups. Do not invent VO.
3. Copy voice lines **verbatim** (same words, same order). Split or merge into beats, but do not rewrite, soften, or drop lines.
4. Treat `[PAUSE]` as a visual-only beat: empty Voice lines, still describe the hold on screen.
5. One spoken line is usually one beat. Merge consecutive lines **only** when they are the same tableau (same nouns, same idea, no new picture). Never merge across Intro / Body / Outro.

## Columns (required)

Every beat has exactly these five fields:

| Field | What it is |
|---|---|
| **Beat** | Short slug: `intro-1`, `body-3`, `outro-2`. Sequential within the section. Optional one-line label after the slug (`body-4 · the split`). |
| **The Voice lines** | Verbatim script line(s) for this beat. One line per spoken line. Empty only for `[PAUSE]` / title-card holds. |
| **What it becomes on screen** | The picture. This is the main work. See below. |
| **Transition in** | How this beat arrives from the previous still. First beat: how the piece opens. |
| **Assets needed** | Layered list in the six categories below. |

## What it becomes on screen

Describe **what needs visuals**, in enough detail that someone could shoot or generate it without guessing.

Write as a **hold** (tableau) or a **stepped move** (2–4 snaps). No fluid camera: no “glide”, “drift”, “track with”, “unfold in real time”.

Cover, in order:

1. **Subject** — the noun in frame (bottle, receipt, headline, map, hands, glass).
2. **Action / state** — still, snap-cut, frame-by-frame shift, jump replace.
3. **Framing** — close / medium / wide; what is cropped out.
4. **Readable detail** — labels, numbers, drink types, dates, charts that must be legible on a still.
5. **Grade / texture** — vintage film: analog, held, slightly dusty. Not glossy startup B-roll.

Rules:

- Every beat must be **pictureable**. If the line is abstract, pick a concrete stand-in (a diary, a meal plate, a pub glass, a study headline) and say why it stands in.
- Prefer objects named or implied by the line. Do not invent a second story.
- One idea per beat. Do not stack two unrelated tableaux in one “on screen” paragraph.
- Intro: cold-open still that sets the puzzle. Outro: last still that lands; no subscribe card.

Length: **3–6 sentences** per beat. Dense, specific, no mood-board fluff (“cinematic”, “beautiful”, “vibes”).

## Continuity (write this first)

Before any beat, lock a **shared look** so the piece reads as one film, not a pile of stills. Put it in a `## Continuity` block at the top of `beat-sheet.md`.

Pick **one** of each and reuse by name on every beat:

- **World / set** — one room or table language (e.g. scratched pub table + underexposed wall). New locations only when the script forces them; otherwise swap mid/foreground on the same set.
- **Background plate** — the repeating back plane (wall, paper field, map). Name it (`BG-pub-wall`) and keep it unless a beat truly changes space.
- **Filter stack** — the same grade on every beat: vintage film grain, vignette, edge blur / softness, slight underexposure, analog dust. Name it (`FILTER-vintage-hold`). Do not invent a new grade per beat.
- **Recurring hero objects** — 2–5 props that return (three glasses, study printout, diaries). Reintroduce them; do not replace with a cousin object.

If a beat must break continuity (new location, new grade), say so in **Transition in** and why. Default is: same background, same filter, change midground/foreground/props only.

## Transitions

Every beat except a cold open must say **how it replaces the previous still**. Write **Transition in** as one or two sentences. Judder-legal only:

- **Hold** — same frame, no change (rare; usually a `[PAUSE]`)
- **Snap-cut** — instant replace of one layer (foreground object swaps, background stays)
- **Jump-replace** — whole tableau replaced in one frame, same crop/set
- **Stepped move** — 2–4 snaps of the same subject (stack grows, arrow lengthens)
- **Layer land** — a prop/type card drops onto the existing still
- **Match-cut** — same framing, subject rhymes (three glasses → three overfilled glasses)

Forbidden: dissolves, fades, wipes, “camera drifts”, “we transition to”. Name **which layers persist** (background + filter stay) and **which layers change**.

The last sentence of **What it becomes on screen** may plant the outgoing still (what is held when the next beat hits). Do not describe the next beat’s picture here.

## Assets needed

Every beat lists **all six categories**, in this order. Use `none` only when that layer is truly empty (usually Characters). Do not skip a category.

| Category | Plane | What belongs |
|---|---|---|
| **Background** | Back | Wall, room, sky, repeating plate. Prefer the continuity `BG-*` name. |
| **Midground** | Middle | Table, furniture, stacked papers, set dressing the subject sits on. |
| **Foreground** | Front | The beat’s hero subject: glasses, printout, chart, hands. |
| **Characters** | People | Bodies, hands, silhouettes. Faceless default: `none` or crop-out hands only. No talking heads unless the user asks. |
| **Props** | Attachments | Tags, stamps, arrows, type cards, numbers, extra objects that land on the still. Quote exact on-screen text. |
| **Filter** | Grade | Always the continuity `FILTER-*` stack unless this beat is an explicit break. Include grain, vignette, edge blur, dust. |

Format:

```markdown
**Assets needed**

- **Background:** …
- **Midground:** …
- **Foreground:** …
- **Characters:** …
- **Props:** …
- **Filter:** …
```

Rules:

- Name the thing (searchable / makeable). No “B-roll of drinking”, no “relevant footage”.
- Continuity assets: write the **same string** every time they recur (`BG-pub-wall`, `FILTER-vintage-hold`, `PROP-three-glasses`). New copy = new asset.
- Type / numbers live under **Props**.
- Filter is not optional. If it is the shared stack, say `FILTER-vintage-hold (grain, vignette, edge blur, analog dust)` — do not re-spec a different look.

## Output

Write to disk. Do not treat the chat reply as the deliverable.

Path: same folder as the script → `beat-sheet.md`. If the script lives at `<slug>/script.md`, write `<slug>/beat-sheet.md`. If the user names a path, use it. Do not overwrite `script.md`.

Template:

```markdown
# Beat sheet — <script title>

**Script:** <path to script.md>
**Treatment:** stop motion · posterize judder on all motion · vintage film
**Beats:** <count>

## Continuity

**World:** <one set / table language>
**Background plate:** `<BG-id>` — <one-line spec>
**Filter stack:** `<FILTER-id>` — grain, vignette, edge blur, analog dust, slight underexposure
**Hero objects:** `<PROP-id>` — …; `<PROP-id>` — …

## Intro

### <beat-id> · <optional label>

**The Voice lines**

<verbatim line>
<verbatim line if merged>

**What it becomes on screen**

<3–6 sentences; last sentence plants the outgoing still>

**Transition in**

<how this still arrives; which layers persist vs change. First beat: cold-open hold.>

**Assets needed**

- **Background:** `<BG-id>` — …
- **Midground:** …
- **Foreground:** …
- **Characters:** none
- **Props:** …
- **Filter:** `<FILTER-id>` — grain, vignette, edge blur, analog dust

## Body

### <beat-id> · <optional label>

...

## Outro

### <beat-id> · <optional label>

...
```

### Chat reply

After writing the file:

- Path to `beat-sheet.md`
- Beat count
- Flag any line that had no obvious picture (and what stand-in you used)

Do not paste the full beat sheet in chat unless the user asks.

## Quality check (before writing the file)

- [ ] Every script line appears verbatim under some beat; none rewritten or dropped
- [ ] Intro / Body / Outro grouping matches the script
- [ ] Continuity block exists; background plate + filter stack are named and reused
- [ ] “What it becomes on screen” is a specific tableau or stepped move, not a vibe
- [ ] Every beat has Transition in; layers that persist vs change are named
- [ ] Assets use all six categories in order; Filter is never omitted
- [ ] Recurring assets keep the same id string
- [ ] No fluid-camera language, no dissolves/fades
- [ ] File written next to the script as `beat-sheet.md`
