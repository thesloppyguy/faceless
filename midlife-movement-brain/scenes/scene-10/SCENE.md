# Scene 10 — ≤ 126

**Prompt:** `prompts/scene-10.txt`  
**Component:** `src/scenes/Scene10Threshold.tsx`  
**Duration:** 120 frames (~4.0s @ 30fps)  
**VO:** A reading of one twenty six or lower tracked with slower fade.

## Layers

1. **Background** — `bg-desk.png`
2. **Midground** — threshold card `≤ 126` / `mg/dL` (slam + settle)
3. **Foreground** — `prop-brain.png` brightening one notch
4. **Filter** — `FilmLook`

## Animation

| Beat | Frames (defaults) | Action |
|---|---|---|
| Hold | `continuityHoldFrames` (1) | Scene 09 meter still |
| Threshold | `thresholdFrame` (1) | Card slam + settle kick |
| Brain | `brainFrame` (28) | Land; opacity start → end |

## Continuity

**In:** Scene 09 meter/glucose.  
**Out:** Threshold + brighter brain for Scene 11 US map.
