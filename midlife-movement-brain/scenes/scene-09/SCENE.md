# Scene 09 — White adults: glucose

**Prompt:** `prompts/scene-09.txt`  
**Component:** `src/scenes/Scene09FastingGlucose.tsx`  
**Duration:** 120 frames (~4.0s @ 30fps)  
**VO:** For non-Hispanic white adults, fasting glucose was the standout.

## Layers

1. **Background** — `bg-desk.png` + full right-panel language plate
2. **Midground** — `prop-meter.png` + stepped needle into green zone
3. **Foreground** — enlarged `prop-glucose.png` + `FASTING GLUCOSE` caption
4. **Filter** — `FilmLook`

## Animation

| Beat | Frames (defaults) | Action |
|---|---|---|
| Snap | 0 | Clear walk/sit/caption |
| Meter + glucose | `meterFrame` (4) | Land |
| Needle | `needleStartFrame` (18), every `needleStepFrames` | start → mid → end |
| Caption | `captionFrame` (55) | `FASTING GLUCOSE` |

## Continuity

**In:** Snap from Scene 08.  
**Out:** Meter + glucose + needle in green + caption for Scene 10 threshold.
