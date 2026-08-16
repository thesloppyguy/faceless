# Scene 07 — Not the same for every group

**Prompt:** `prompts/scene-07.txt`  
**Component:** `src/scenes/Scene07NotSame.tsx`  
**Duration:** 105 frames (~3.5s @ 30fps)  
**VO:** But the strongest link was not the same for every group.

## Layers

1. **Background** — `bg-desk.png`
2. **Midground** — split panels (after continuity hold of Scene 06 still)
3. **Foreground** — walk / glucose with highlight rings + center `≠` stamp
4. **Filter** — `FilmLook`

## Animation

| Beat | Frames (defaults) | Action |
|---|---|---|
| Hold | `continuityHoldFrames` (2) | Scene 06 end still |
| Panels | `panelsFrame` (2) | Match-cut slope out; split in |
| Rings | `walkRingFrame` / `glucoseRingFrame` | Left then right glow |
| ≠ | `neqStampFrame` (42) | Stamp + settle judder |

## Continuity

**In:** Scene 06 shallow slope + icons.  
**Out:** Split + rings + ≠ for Scene 08 left-panel fill.
