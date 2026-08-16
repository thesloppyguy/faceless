# Scene 08 — Hispanic: any movement

**Prompt:** `prompts/scene-08.txt`  
**Component:** `src/scenes/Scene08AnyMovement.tsx`  
**Duration:** 135 frames (~4.5s @ 30fps)  
**VO:** For Hispanic adults, especially Mexican Americans, any movement beat sitting.

## Layers

1. **Background** — `bg-desk.png` + full left-panel plate
2. **Midground** — greyed `prop-sit.png`
3. **Foreground** — `prop-walk.png` (3 stepped positions) + `ANY MOVEMENT` caption
4. **Filter** — `FilmLook`

## Animation

| Beat | Frames (defaults) | Action |
|---|---|---|
| Jump in | 0 | Full left panel; no right/`≠`/glucose |
| Walk steps | `walkStartFrame` (12), every `walkStepFrames` | Positions 1→2→3 |
| Caption | `captionFrame` (52) | `ANY MOVEMENT` lands |

## Continuity

**In:** Jump from Scene 07 split.  
**Out:** Mid-step walk + grey sit + caption for Scene 09 snap to glucose.
