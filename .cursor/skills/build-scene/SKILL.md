---
name: build-scene
description: >-
  Implements one Remotion scene from an approved prompts/scene-NN.txt, writes
  SCENE.md, registers composition and Main sequence. Use when the pipeline
  build-scene item is active, or the user says Build Scene N.
---

# Build scene

Implement **one** approved director prompt per gate. Never invent a different shot. Never start scene N+1 while N is waiting or in revise.

## When

- Pipeline `current_stage: build-scene` with `active_item_id: scene-NN`
- User says Build Scene N / paste scene directions

## Inputs

1. Read `<slug>/prompts/scene-NN.txt` (source of truth for this gate).
2. Read continuity from `storyboard.md` and empire-style layer habits from `empire-downfall-project-pack/SPEC.md` §3 when cutouts apply.
3. Glob `public/assets/` / `assets/` for named files. Do not substitute different images.

If Remotion or FilmLook missing, stop and tell the conductor those stages are not approved yet (or run only if user explicitly overrides).

## Workflow

1. Create `src/scenes/SceneNNName.tsx` (one default export).
2. Write `scenes/scene-NN/SCENE.md` (or beside the tsx) using empire brief shape — layers, assets, animation, key props. Example: `empire-downfall-project-pack/scenes/scene-01-peace-deal/SCENE.md`.
3. Register `<Composition>` under Scenes; append `<Sequence>` on `Main`; bump Main duration. Inline `defaultProps`.
4. Wrap root in `<FilmLook>`.
5. Preview in Studio. **Do not render** unless user asks.

Update `build-scene.items` path + `waiting_for_review` for this id only. Stop.

## Motion dictionary (Netflix Scene 1 grammar)

Canonical example timings/copy are in `Netflix-practice-kit/prompts/03-scene1-opener.txt`. Values below are copied from that file; if it changes, update this block too. Use the same **grammar** for other scenes (compose, weld, detach, etc.) even when numbers differ.

| Phrase | Meaning |
|---|---|
| Compose | Still layout: plates, framed unit, plaque |
| Slow push | Ease scale over a frame range |
| Zoom-through | Accelerate scale so camera enters the picture |
| Weld | Layers share one parent scale until detach; child scale = constant × parent |
| Detach | Separate interpolations after a frame |
| Motion blur | Full-frame blur burst keyframes |
| Wall exit | Blur/fade set while zoom continues |
| Parallax | Same path, multiply distance |
| Character boil | Tiny scale/rotate on **posterized** time |
| Captions | After settle; verbatim serif italic |

**Timeline:** direction frame numbers = real `useCurrentFrame()` unless said otherwise. Boil/ambient → posterize 12fps. Camera/blur/captions → real frames. No CSS `transition`.

### Collage extras (when prompt asks)

- Sandwich: container split into two layers with character between (`school-practice-kit/PROMPTS.md`).
- Uneven stop-motion holds on characters; keep big BG smoother.
- Per-prop Studio controls for position, size, timing, wobble.

### Chart or map beats

- Chart: `vox-charts-practice-kit/prompts.md` (paper look, frame-derived noise, blend boil).
- Map: `skool-map-practice-kit/BUILD-PROMPTS.md` + `CLAUDE.md` (world-atlas, TopoJSON, d3-geo, camera match, grain on map not foreground).

## Empire 3-layer default (cutout scenes)

1. Background (locked plate)
2. Midground cut-outs (optional red marker stroke `#E04329`)
3. Foreground occluder

## Checklist

- [ ] Matches `scene-NN.txt` actions and asset names
- [ ] FilmLook wrap; boil on posterize; camera on real frames
- [ ] Composition + Main sequence registered
- [ ] SCENE.md written
- [ ] Pipeline item waiting_for_review; no next scene coded
