---
name: film-look
description: >-
  Builds a reusable Remotion FilmLook wrapper (scan lines, grain, grunge,
  vignette, grade, gate-weave) with toggles. Use when the pipeline reaches
  film-look or the user asks for vintage film treatment on scenes.
---

# Film look

Reusable wrapper so every scene reads as aged film. Put `src/FilmLook.tsx` in the reel; wrap scene roots.

Values below are copied from `Netflix-practice-kit/prompts/02-setup-film-look.txt`; if that file changes, update this block too.

## Spec (verbatim)

Build the film-treatment look — a reusable wrapper I can wrap any scene in so it reads like aged film. The textures are in my assets folder (grain.jpg, grunge.jpg). Layer these top to bottom with exactly these settings:

- Scan lines: vertical lines — a 1.6px black line at 16% opacity repeating every 8px, blurred by 0.7px.

- Texture sandwich: grain.jpg on multiply, inverted with brightness 1.35 and contrast 1.02, at 55% opacity; then grunge.jpg on colour-burn at 16% opacity.

- Vignette: a radial gradient — ellipse 92% by 82% centred at 50% / 48%, clear until 55%, fading to black at 50% opacity by the edge.

- Grade: a colour filter of saturate 0.86, contrast 1.08, sepia 0.16, brightness 0.95 — expose those four as props so I can tweak per scene.

- Gate-weave: jitter the whole frame with a stepped wiggle at 12fps, about 5px of travel, and scale everything up 1.012 so the weave never reveals an edge.

Everything rides the engine's 12fps posterize step. Put a toggle on each layer so I can switch parts off.

## Implementation notes

- Textures via `staticFile` from `public/` (`grain.jpg`, `grunge.jpg`). Copy from kit assets if missing.
- Gate-weave uses `usePosterizeFrame()` from `engine.ts`.
- Boolean toggles default true: `scanLines`, `grain`, `grunge`, `vignette`, `grade`, `gateWeave`.
- Overlays: `pointerEvents: 'none'`. Studio shorthands `scale` / `translate`, not a CSS `transform` string.
- Chart-only paper grade: only when storyboard/scene prompt is a chart beat — follow `vox-charts-practice-kit/prompts.md` instead of replacing this wrapper globally.

## After write (pipeline)

`waiting_for_review` on `film-look`. Stop. Do not build scenes until approved.
