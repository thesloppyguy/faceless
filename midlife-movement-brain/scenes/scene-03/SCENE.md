# Scene 03 — San Antonio cohort

**Prompt:** `prompts/scene-03.txt`  
**Component:** `src/scenes/Scene03Cohort.tsx`  
**Duration:** 135 frames (~4.5s @ 30fps)  
**VO:** A San Antonio team followed four hundred two adults into later life.

## Layers

1. **Background** — faint desk underlay + `bg-city.png` skyline strip
2. **Midground** — timeline ribbon with stepped dots (MIDLIFE → LATER)
3. **Foreground** — `prop-cohort-402.png` stamp with settle judder
4. **Filter** — `FilmLook`

## Animation

| Beat | Frames (defaults) | Action |
|---|---|---|
| Snap in | 0 | City on desk paper; no heart/brain/calendar |
| Stamp | `stampFrame` (8) | `402` springs in + settle kick |
| Timeline | `timelineStartFrame` (28), step every `timelineStepFrames` | 4 dots left→right |

## Continuity

**In:** Jump-replace from Scene 02 end (props cleared).  
**Out:** City + locked `402` + full timeline for Scene 04 snap back to desk.
