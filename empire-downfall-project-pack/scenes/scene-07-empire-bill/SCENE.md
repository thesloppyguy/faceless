# Scene 07 — Empires End With a Bill (punchline)

**Beat(s):** 10  ·  **VO window:** 40.25–47.31s  ·  **Duration:** 213 frames  ·  **Component:** `BrollEmpireBillScene`

> "Empires don't end with a war. They end with a bill they can no longer pay."

## Layers
- **Background:** `background.png` — locked shared paper texture (full-cover + soft-light wash).
- **Midground:** Burning **$100 bill** — transparent video (`burning-bill.webm`, alpha) via `<OffthreadVideo transparent>`, floating in the lower area.
- **Foreground:** **Typewriter** text reveal (SpecialElite) with a blinking cursor; a closing vignette darkens the edges over the last ~1s.

## Assets in this folder
- `background.png`
- `burning-bill.webm`
- `EmpireBillScene.tsx` — reference Remotion component (detailed spec for layout + animation)

## Animation
Two sentences typed to the two halves of the VO line (perCharFrames 1.8, period/gap pauses); vignette 182–213f; bill plays throughout.

## Key tuned props
line1 EMPIRES DON'T END WITH A WAR. / line2 THEY END WITH A BILL THEY CAN NO LONGER PAY.; moneyY 415, containerWidth 1619.

---
See `../../SPEC.md` for the shared visual system, the red-marker-stroke technique, VO timing, and assembly.
