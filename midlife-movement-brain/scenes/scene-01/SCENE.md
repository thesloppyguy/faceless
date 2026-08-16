# Scene 01 — Heart now, brain later

**Prompt:** `prompts/scene-01.txt`  
**Component:** `src/scenes/Scene01HeartBrain.tsx`  
**Duration:** 120 frames (4.0s @ 30fps)  
**VO:** What you do for your heart in midlife may shape your brain later.

## Layers

1. **Background** — `bg-desk.png` with light posterize boil; `deskTint` underlay
2. **Midground** — dashed arrow in 3 stepped segment groups (code-drawn)
3. **Foreground** — `prop-heart.png` left, then `prop-brain.png` right (smaller, lower opacity)
4. **Filter** — `FilmLook` (`FILTER-CLINIC`)

## Animation

| Beat | Frames (defaults) | Action |
|---|---|---|
| Empty hold | 0 → `emptyHoldFrames` (12) | Desk only |
| Heart land | `max(emptyHold, heartLandFrame)` | Spring pop + judder settle |
| Arrow steps | +8, then every `arrowStepFrames` (10) | Segments 1 → 2 → 3, no glide |
| Brain pop | `brainPopFrame` (55) | Spring in, opacity `brainOpacity` |
| Hold | through end | Continuity still for Scene 02 |

## Key Studio props

`emptyHoldFrames`, `heartLandFrame`, `arrowStepFrames`, `brainPopFrame`, `heartScale` / `brainScale` / `brainOpacity`, `heartX` / `brainX` / `arrowY` / `heartY` / `brainY`, film-look toggles.

## Continuity out

Heart left bright, dashed arrow mid-span (3 segments), brain right smaller/faded. No calendar.
