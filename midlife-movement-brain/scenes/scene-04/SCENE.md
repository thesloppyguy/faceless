# Scene 04 — Two groups, mean age

**Prompt:** `prompts/scene-04.txt`  
**Component:** `src/scenes/Scene04TwoGroups.tsx`  
**Duration:** 135 frames (~4.5s @ 30fps)  
**VO:** Half Hispanic, half non-Hispanic white. Mean age: almost fifty eight.

## Layers

1. **Background** — `bg-desk.png` (city/`402` cleared)
2. **Midground** — two equal paper panels (left then right wipe)
3. **Foreground** — faceless silhouette stacks (code), `HALF` / `HALF`, `~58` badge
4. **Filter** — `FilmLook`

## Animation

| Beat | Frames (defaults) | Action |
|---|---|---|
| Left panel | `splitStartFrame` (4) | Wipe in |
| Right panel | +`splitStepFrames` (8) | Wipe in |
| Silhouettes | `silhouetteFrame` (20) | Spring land |
| HALF badges | `halfBadgeFrame` (36) | Stamp both |
| Age | `ageBadgeFrame` (52) | `~58` bottom center |

## Continuity

**In:** Snap from Scene 03 city/`402`.  
**Out:** Split + silhouettes + HALF/HALF + ~58 for Scene 05 clipboard replace.
