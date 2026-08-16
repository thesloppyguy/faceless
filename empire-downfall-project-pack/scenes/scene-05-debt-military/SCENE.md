# Scene 05 — Debt → Military

**Beat(s):** 8  ·  **VO window:** 31.20–35.30s  ·  **Duration:** 123 frames  ·  **Component:** `BrollDebtTransitionNextScene`

> "Where the interest alone costs more than its entire military."

## Layers
- **Background:** `background.png` — locked shared paper texture (full-cover + soft-light wash).
- **Midground:** US map (debt) with a worker cut-out (labour, left) vs. a soldier + tank cut-outs (military, right). Red marker strokes on the cut-outs.
- **Foreground:** "Interest: $1 trillion" label.

## Assets in this folder
- `background.png`
- `us-map.png`
- `work-gear.png`
- `us-worker.png`
- `tank.png`
- `us-soldier-2.png`
- `DebtMilitaryScene.tsx` — reference Remotion component (detailed spec for layout + animation)

## Animation
Tightest beat (~4.1s) — entrances compressed: workGear 12–32f, worker 22–48f, interest label 40–58f, tank 62–86f, soldier 76–102f.

## Key tuned props
strokeColor #E04329; soldierScale 1.7; interestLabelText 'Interest: $1 trillion'.

---
See `../../SPEC.md` for the shared visual system, the red-marker-stroke technique, VO timing, and assembly.
