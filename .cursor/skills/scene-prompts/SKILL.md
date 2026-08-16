---
name: scene-prompts
description: >-
  After an approved storyboard, auto-writes BUILD-PROMPTS-style director prompts
  (pack + per-scene files) with actions, sliders, and camera handoffs. Use when
  the pipeline reaches scene-prompts, or the user asks for scene-wise build prompts.
---

# Scene prompts

Do **not** jump from storyboard to Remotion code. Write pasteable director prompts in the voice of `skool-map-practice-kit/BUILD-PROMPTS.md` and Netflix `Netflix-practice-kit/prompts/03-scene1-opener.txt` through `08`.

Prompt grammar (result-first, sliders, end-frame handoff) is copied from `skool-map-practice-kit/BUILD-PROMPTS.md`; if that file changes, update this skill’s requirements list.

## When

- Pipeline `current_stage: scene-prompts` after storyboard approve
- User asks for per-scene build prompts from a storyboard

## Inputs

Read `<slug>/script.md` and `<slug>/storyboard.md`. Group beats into scenes (usually one VO line or tight cluster per scene, Netflix six-line style, or storyboard-driven).

## Outputs

1. `<slug>/prompts/BUILD-PROMPTS.md` — numbered pack for the whole film
2. `<slug>/prompts/scene-01.txt`, `scene-02.txt`, … — one file per scene
3. Asset-drop list between prompts (same idea as BUILD-PROMPTS “Asset drops”)

### Each scene prompt must include

- Result in plain English (what is on screen; not Remotion API names)
- Duration and VO line(s) covered
- Ordered **actions** (camera, outline, rise, captions, etc.)
- Named assets already expected in the folder
- Studio sliders for every setting
- Continuity: **starts on the exact last frame** of the previous scene
- End state the next scene will pick up

Setup / film-look / sound may appear as separate numbered prompts in the pack (map kit Prompts 1, 5, 6 pattern) but Remotion implementation still waits for pack approve then later pipeline stages.

### Pack intro style

Plain-English prompts. Describe the *result*; the agent makes technical choices. Drop assets between prompts when asked.

## HITL

1. Write the pack + per-scene files.
2. Set `scene-prompts.status: waiting_for_review`, `active_item_id: null` (pack-level).
3. Stop. Do not run `asset-pack`, Remotion, or `build-scene` yet.

On **Approve** of the pack:

- Mark stage `approved`.
- Seed `stages.scene-prompts.items` and later `build-scene.items` with one entry per `scene-NN` (`status: approved` for prompt items; `pending` for build-scene items).
- Advance pipeline to `asset-pack` (conductor).

On **Revise**: rewrite the pack / named scenes; stay on pack gate.

## Quality check

- [ ] Every storyboard beat maps into some scene prompt
- [ ] Scene N+1 start frame matches scene N end
- [ ] Sliders listed for timings and key visuals
- [ ] Asset-drop list present
- [ ] No code written in this stage
