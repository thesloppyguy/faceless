# Scene 12 — One city caveat

**Prompt:** `prompts/scene-12.txt`  
**Component:** `src/scenes/Scene12OneCity.tsx`  
**Duration:** 120 frames (~4.0s @ 30fps)  
**VO:** This is one city, one cohort. Not a universal prescription.

## Layers

1. **Background** — faint desk + small `bg-city.png`
2. **Midground** — `ONE CITY` then `ONE COHORT` stamps
3. **Foreground** — `prop-cureall.png` with red X cross
4. **Filter** — `FilmLook`

## Animation

| Beat | Frames (defaults) | Action |
|---|---|---|
| City | `cityFrame` (2) | Jump-replace map |
| ONE CITY | `oneCityFrame` (16) | Stamp + settle |
| ONE COHORT | `oneCohortFrame` (30) | Stamp + settle |
| Cure-all | `cureallFrame` (48) | Land bottle |
| Cross | `crossFrame` (62) | Red X |

## Continuity

**In:** Snap from Scene 11 map/`6.7M`.  
**Out:** City + stamps + crossed cure-all for Scene 13 heart/brain thesis.
