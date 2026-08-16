---
name: documentary-pipeline
description: >-
  Conducts a human-in-the-loop vertical documentary reel pipeline (brief → script →
  storyboard → scene-prompts → assets → Remotion setup → film look → per-scene build →
  sound → render). Use when the user starts a documentary, says Approve or Revise,
  asks for the next pipeline stage, or a reel folder has pipeline.md.
---

# Documentary pipeline (conductor)

Run one **active unit** per turn, then stop for human review. Do not chain stages or scene items in one turn.

Child skills (invoke by reading and following them for the active stage only):

| Stage | Skill |
|---|---|
| brief | this skill (templates below) |
| script | `vox-script` |
| storyboard | `storyboard` |
| scene-prompts | `scene-prompts` |
| asset-pack | `asset-pack` |
| remotion-setup | `remotion-setup` |
| film-look | `film-look` |
| build-scene | `build-scene` |
| sound-mix | `sound-mix` |
| render | appendix at end of this skill |

Default product: **vertical documentary reel** (1080×1920, 30fps). Charts and maps are techniques a scene may pull in, not parallel pipelines.

Kit source map (do not edit kits; cite them):

- Netflix: `Netflix-practice-kit/` (VO first, one scene per prompt, film look)
- Wine: `why-wine-looked-safer-than-beer-here/script.md`, `beat-sheet.md`
- Collage gates: `school-practice-kit/PROMPTS.md`
- Empire layers / SCENE.md: `empire-downfall-project-pack/SPEC.md`
- Charts (when needed): `vox-charts-practice-kit/prompts.md`
- Prompt grammar: `skool-map-practice-kit/BUILD-PROMPTS.md`

## Active unit

`(current_stage, active_item_id | null)`

- Simple stages: gate = whole stage (`active_item_id: null`).
- Looping stages (`asset-pack`, `build-scene`): gate = one `items[]` entry; `active_item_id` set.
- `scene-prompts`: first gate is the **whole pack** (`active_item_id: null`). After pack approve, seed `items[]` as approved.

Top-level `status` always mirrors the **active unit** only.

### Status values

`pending` | `in_progress` | `waiting_for_review` | `revise` | `approved` | `skipped`

## pipeline.md schema

Write `<slug>/pipeline.md` with a YAML block (fenced `yaml` or frontmatter) matching:

```yaml
slug: example-reel
current_stage: brief
active_item_id: null
status: waiting_for_review
notes: ""
artifacts:
  brief: brief.md
  script: script.md
  storyboard: storyboard.md
  prompts: prompts/BUILD-PROMPTS.md
stages:
  brief: { status: waiting_for_review }
  script: { status: pending }
  storyboard: { status: pending }
  scene-prompts:
    status: pending
    items: []
  asset-pack:
    status: pending
    items: []
  remotion-setup: { status: pending }
  film-look: { status: pending }
  build-scene:
    status: pending
    items: []
  sound-mix: { status: pending }
  render: { status: pending }
```

Looping item shape: `{ id, status, path }` (path optional until known).

### Sub-gate rules

- **scene-prompts:** pack-level review first. Do not run Remotion or `build-scene` until pack `status: approved`. Then seed one item per `prompts/scene-NN.txt`.
- **asset-pack:** one item per named asset. Revise one asset does not reopen approved siblings. Advance only when every item is `approved` or `skipped`.
- **build-scene:** one item per scene. Never implement scene N+1 while N is `waiting_for_review` or `revise`.

## Approve / Revise protocol

After finishing work on the active unit:

1. Write/update artifacts for that unit only.
2. Set unit + top-level `status: waiting_for_review`.
3. Reply with path(s) and what to check. **Stop. Do not start the next unit.**

When the user says **Approve** (optional notes):

1. Mark active unit `approved`.
2. Advance to the next unit (next stage, or next `pending`/`revise` item in `items[]`).
3. Run that unit’s skill. Then wait again.

When the user says **Revise: …**:

1. Set active unit `status: revise`, store notes.
2. Rewrite the same artifacts. Do not advance.
3. Set `waiting_for_review` again and stop.

### Backward jumps (v1)

**Backward jumps are manual, not yet supported.** To reopen an earlier stage, the user must say so (e.g. “reopen storyboard”) or edit `pipeline.md`. Warn that approved downstream artifacts may be stale.

## Starting a reel

1. Create `<slug>/` (kebab-case from title or user name; never overwrite another reel).
2. Write `brief.md` (template below) and `pipeline.md` with `current_stage: brief`, `waiting_for_review`.
3. Stop.

### brief.md template

```markdown
# <Title>

**Angle:** <one sentence>
**Runtime target:** <seconds>
**Format:** vertical 1080×1920 · 30fps · stop motion / posterize / vintage film
**Sources:** <URLs or files>
**Notes:** <user constraints>
```

## Stage order

`brief` → `script` → `storyboard` → `scene-prompts` → `asset-pack` → `remotion-setup` → `film-look` → `build-scene` (per item) → `sound-mix` → `render`

## Render appendix

Values / flags when grain or GL shaders need headless ANGLE — see also `skool-map-practice-kit/CLAUDE.md`. If this section grows past ~10 lines of failure/retry logic, promote to a `render-master` skill.

- Tune in Studio; **one master render** at the end (not per scene while iterating).
- When film-grain / shader overlays require it: `npx remotion render <comp> out/<slug>.mp4 --gl=angle`
- Otherwise: `npx remotion render <comp> out/<slug>.mp4`
- Default composition id: `Main` (vertical reel). Confirm with the user if the project uses another master id.

## Chat reply after each gate

- Active stage (+ item id if any)
- Artifact paths
- Reminder: reply **Approve** or **Revise: …**
