# Scene 13 — Heart work is brain work

**Prompt:** `prompts/scene-13.txt`  
**Component:** `src/scenes/Scene13HeartBrainLink.tsx`  
**Duration:** 105 frames (~3.5s @ 30fps)  
**VO:** The through line: midlife heart work is also brain work.

## Layers

1. **Background** — `bg-desk.png` (city stamps cleared)
2. **Midground** — dashed link → solid link bar
3. **Foreground** — equal-height `prop-heart.png` + `prop-brain.png` (shared `iconY` center)
4. **Filter** — `FilmLook`

## Animation

| Beat | Frames (defaults) | Action |
|---|---|---|
| Icons | `iconsFrame` (4) | Equal-height heart + brain land on shared center |
| Dashed link | `dashedLinkFrame` (18) | Midground path through icon centers |
| Solid | `solidReplaceFrame` (36) | Jump-replace to solid bar |

## Continuity

**In:** Snap from Scene 12.  
**Out:** Centered icons + solid link for Scene 14 walk + tag.  
**Layout:** `iconY` is the vertical center of heart, link, and brain (not top).
