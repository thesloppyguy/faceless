# Scene 05 — Scored then tested

**Prompt:** `prompts/scene-05.txt`  
**Component:** `src/scenes/Scene05ScoredTested.tsx`  
**Duration:** 135 frames (~4.5s @ 30fps)  
**VO:** They scored midlife heart health, then tested thinking up to four times.

## Layers

1. **Background** — `bg-desk.png`
2. **Midground** — `prop-clipboard.png` left + three stepped ticks
3. **Foreground** — quiz cards `1`–`4` fanned on the right
4. **Filter** — `FilmLook`

## Animation

| Beat | Frames (defaults) | Action |
|---|---|---|
| Hold | `continuityHoldFrames` (1) | Brief lock |
| Clipboard | `clipboardFrame` (1) | Jump-replace panels |
| Ticks | `tickStartFrame` (18), every `tickIntervalFrames` | 1 → 2 → 3 |
| Cards | `cardFanStartFrame` (48), every `cardFanIntervalFrames` | Fan `1`→`4` |

## Continuity

**In:** Replaces Scene 04 split panels.  
**Out:** Clipboard + 3 ticks + cards 1–4 for Scene 06 clear.
