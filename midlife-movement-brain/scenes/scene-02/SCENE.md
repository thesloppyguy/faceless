# Scene 02 — Decades later

**Prompt:** `prompts/scene-02.txt`  
**Component:** `src/scenes/Scene02DecadesLater.tsx`  
**Duration:** 120 frames (4.0s @ 30fps)  
**VO:** Not next year. Decades later, when thinking starts to fade.

## Layers

1. **Background** — `bg-desk.png` (Scene 01 continuity)
2. **Midground** — dashed arrow (3 segments locked) + calendar type cards
3. **Foreground** — heart (sharp) + brain (dims on `+30`) + stamped X over brain
4. **Filter** — `FilmLook`

## Animation

| Beat | Frames (defaults) | Action |
|---|---|---|
| Continuity hold | 0 → `continuityHoldFrames` (2) | Exact Scene 01 end still |
| Calendar | from `calendarStartFrame` | Jump-replace `NOW` → `+10` → `+20` → `+30` every `cardHoldFrames` |
| Dim + X | on `+30` | Brain → `brainDimOpacity`; red X stamp over brain |

## Continuity

**In:** Scene 01 end (heart left, arrow mid-span, brain faded). Layout defaults match Scene 01.  
**Out:** `+30` card, dimmer brain, X over brain, heart still sharp.
