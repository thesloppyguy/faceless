# Scene 11 — Alzheimer's stake

**Prompt:** `prompts/scene-11.txt`  
**Component:** `src/scenes/Scene11AlzheimerStake.tsx`  
**Duration:** 120 frames (~4.0s @ 30fps)  
**VO:** Alzheimer's already affects six point seven million people in America.

## Layers

1. **Background** — `bg-desk.png`
2. **Midground** — `prop-us-map.png`
3. **Foreground** — people-dot hint + counter jumps to `6.7M`
4. **Filter** — `FilmLook`

## Animation

| Beat | Frames (defaults) | Action |
|---|---|---|
| Snap | 0 | Clear threshold/brain |
| Map | `mapFrame` (4) | US silhouette lands |
| Counter | `counterStartFrame` (28), every `counterStepFrames` | `2.1M` → `4.4M` → `6.7M` |

## Continuity

**In:** Snap from Scene 10.  
**Out:** Map + `6.7M` for Scene 12 city caveat.
