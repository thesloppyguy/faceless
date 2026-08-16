# Scene 14 — A little movement now

**Prompt:** `prompts/scene-14.txt`  
**Component:** `src/scenes/Scene14YearsLater.tsx`  
**Duration:** 105 frames (~3.5s @ 30fps)  
**VO:** A little movement now may pay off years later.

## Layers

1. **Background** — `bg-desk.png`
2. **Midground** — solid link (Scene 13 continuity)
3. **Foreground** — equal-height heart/brain + `prop-walk.png` + `YEARS LATER` under walker
4. **Filter** — `FilmLook`

## Animation

| Beat | Frames (defaults) | Action |
|---|---|---|
| Hold | `continuityHoldFrames` (3) | Exact Scene 13 end still |
| Walk | `walkLandFrame` (8) | One stepped land under the link |
| Tag | `tagFrame` (28) | `YEARS LATER` centered under walker |
| End | hold | Final still (reel out) |

## Continuity

**In:** Scene 13 end (centered icons + solid link).  
**Out:** Final frame of the film.  
**Layout:** Same `iconY` center as Scene 13; tag centered under walker feet.
