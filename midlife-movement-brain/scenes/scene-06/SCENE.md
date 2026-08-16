# Scene 06 — Move + sugar, slower decline

**Prompt:** `prompts/scene-06.txt`  
**Component:** `src/scenes/Scene06MoveSugar.tsx`  
**Duration:** 120 frames (~4.0s @ 30fps)  
**VO:** Move more, keep blood sugar in check, and decline ran slower.

## Layers

1. **Background** — `bg-desk.png`
2. **Midground** — decline slope (steep → mid → shallow, posterize steps)
3. **Foreground** — `prop-walk.png` left, `prop-glucose.png` right
4. **Filter** — `FilmLook`

## Animation

| Beat | Frames (defaults) | Action |
|---|---|---|
| Icons | `iconsFrame` (4) | Walk + glucose spring land |
| Slope | `slopeStartFrame` (10), every `slopeStepFrames` | Angle start → mid → end |

## Continuity

**In:** Clears Scene 05 clipboard/cards.  
**Out:** Walk + glucose + shallow slope for Scene 07 split rings.
